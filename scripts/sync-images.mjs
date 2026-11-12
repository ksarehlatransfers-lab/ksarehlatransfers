#!/usr/bin/env node
/**
 * The image pipeline.
 *
 *   node scripts/sync-images.mjs
 *
 * Reads `scripts/images.manifest.json`, makes sure every entry has a WebP in
 * `public/images`, and regenerates `lib/site-images.ts` and the credits table
 * in `docs/image-credits.md` from it.
 *
 * This used to live outside the repository as a "one-off sourcing tool". It
 * was then lost, which is how two Batch 2 images became a build gate. It is
 * committed now so replacing or adding a photograph is a repo operation.
 *
 * What it does, per entry:
 *
 * - If `public/images/<out>` is missing, it downloads the Commons original,
 *   crops it to `shape` using sharp's attention strategy (so the crop keeps
 *   the salient part of the frame rather than the geometric centre) and
 *   encodes WebP.
 * - If the file already exists it is **left alone** and its real dimensions
 *   are read back off disk. Re-encoding published images on every run would
 *   churn the repository and change pages nobody asked to change.
 * - If the entry has no `credit`, licence and author are read from the
 *   MediaWiki `imageinfo` API and written back into the manifest, so
 *   attribution is never hand-typed and never re-fetched once known.
 * - An optional `modifications` string records how the file differs from the
 *   Commons original (cropped, resized, converted to WebP). It is printed
 *   after the photograph's link in the credits table, as CC licences ask
 *   adapters to indicate changes.
 *
 * Note on API host: commons.wikimedia.org is not resolvable from some
 * networks, so this talks to the en.wikipedia.org API, which serves the same
 * `imageinfo` for Commons files from its shared repository. A shared file
 * comes back flagged `missing` (it has no *local* page) while still carrying
 * `imageinfo` — so presence of `imageinfo` is the test, not absence of
 * `missing`.
 *
 * `sharp` is used only here, at authoring time, and is not imported by any
 * application code. It is available as a transitive dependency of Next.js
 * rather than a declared one; if a future install drops it, add it as a
 * devDependency rather than vendoring binaries.
 */

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const MANIFEST = path.join(ROOT, "scripts/images.manifest.json");
const OUT_DIR = path.join(ROOT, "public/images");
const TS_OUT = path.join(ROOT, "lib/site-images.ts");
const CREDITS = path.join(ROOT, "docs/image-credits.md");

const API = "https://en.wikipedia.org/w/api.php";
const UA = "ksa-rehla-transfers/1.0 (image pipeline; licence attribution)";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (p) => access(p).then(() => true, () => false);

const stripHtml = (html) =>
  (html ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

async function api(params, attempt = 0) {
  const url = new URL(API);
  for (const [k, v] of Object.entries({ format: "json", ...params })) {
    url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (res.status === 429 && attempt < 5) {
    await sleep(2000 * 2 ** attempt);
    return api(params, attempt + 1);
  }
  if (!res.ok) throw new Error(`imageinfo HTTP ${res.status}`);
  return res.json();
}

/** Licence, author and the original file URL for one Commons file. */
async function imageInfo(commons) {
  const data = await api({
    action: "query",
    titles: `File:${commons}`,
    prop: "imageinfo",
    iiprop: "url|size|extmetadata|mime",
  });
  const page = Object.values(data?.query?.pages ?? {})[0];
  // A Commons file served through the shared repository is flagged `missing`
  // because it has no local page here. `imageinfo` is the real test.
  if (!page?.imageinfo?.length) throw new Error(`no imageinfo for ${commons}`);
  const info = page.imageinfo[0];
  const meta = info.extmetadata ?? {};

  const license = stripHtml(meta.LicenseShortName?.value) || "see source";
  const licenseUrl = stripHtml(meta.LicenseUrl?.value) || null;
  const author = stripHtml(meta.Artist?.value) || "Unknown author";
  const restrictions = stripHtml(meta.Restrictions?.value);
  if (restrictions) {
    throw new Error(`${commons} carries usage restrictions: ${restrictions}`);
  }

  return {
    // The API appends campaign tracking to the URL; the bare file is wanted.
    url: info.url.split("?")[0],
    mime: info.mime,
    credit: {
      author,
      license,
      licenseUrl,
      page: info.descriptionurl,
    },
  };
}

/** The upload host rate-limits too, so downloads back off the same way. */
async function download(sourceUrl, attempt = 0) {
  const res = await fetch(sourceUrl, { headers: { "user-agent": UA } });
  if ((res.status === 429 || res.status >= 500) && attempt < 5) {
    await sleep(2000 * 2 ** attempt);
    return download(sourceUrl, attempt + 1);
  }
  if (!res.ok) throw new Error(`download ${sourceUrl} -> HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function encode(entry, sourceUrl) {
  const original = await download(sourceUrl);

  const [width, height] = entry.shape;
  const pipeline = sharp(original).resize({
    width,
    height,
    fit: "cover",
    position: entry.focus === "attention" ? sharp.strategy.attention : entry.focus,
  });

  const out = path.join(OUT_DIR, entry.out);
  await mkdir(OUT_DIR, { recursive: true });
  await pipeline.clone().webp({ quality: 80 }).toFile(out);
  return out;
}

/** A 20px-wide WebP, inlined so nothing shifts while the real image loads. */
async function blurDataUrl(file) {
  const buf = await sharp(file).resize({ width: 20 }).webp({ quality: 35 }).toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

// ---------------------------------------------------------------------------

const manifest = JSON.parse(await readFile(MANIFEST, "utf8"));
const seen = new Set();
for (const entry of manifest) {
  if (seen.has(entry.key)) throw new Error(`duplicate key ${entry.key}`);
  seen.add(entry.key);
}

let manifestDirty = false;
const records = [];

for (const entry of manifest) {
  const out = path.join(OUT_DIR, entry.out);
  const haveFile = await exists(out);
  const needInfo = !entry.credit || !haveFile;

  let info = null;
  if (needInfo) {
    info = await imageInfo(entry.commons);
    if (!entry.credit) {
      entry.credit = info.credit;
      manifestDirty = true;
    }
    await sleep(1200);
  }

  if (!haveFile) {
    await encode(entry, info.url);
    console.log(`  encoded  ${entry.out}`);
  } else {
    console.log(`  kept     ${entry.out}`);
  }

  const meta = await sharp(out).metadata();
  records.push({
    key: entry.key,
    src: `/images/${entry.out}`,
    width: meta.width,
    height: meta.height,
    alt: entry.alt,
    altAr: entry.altAr,
    subject: entry.subject,
    blurDataURL: await blurDataUrl(out),
    credit: entry.credit,
    modifications: entry.modifications,
  });
}

if (manifestDirty) {
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.log("  manifest updated with fetched credits");
}

// --- lib/site-images.ts ----------------------------------------------------

const body = Object.fromEntries(
  records.map((r) => [
    r.key,
    {
      src: r.src,
      width: r.width,
      height: r.height,
      alt: r.alt,
      altAr: r.altAr,
      subject: r.subject,
      blurDataURL: r.blurDataURL,
      credit: r.credit,
    },
  ])
);

const ts = `// GENERATED FILE - do not edit by hand.
// Produced by scripts/sync-images.mjs; see docs/image-credits.md.
// Every photograph is openly licensed; see that file for attribution.

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Arabic alternative text, rendered on /ar pages. */
  altAr: string;
  subject: string;
  blurDataURL: string;
  credit: {
    author: string;
    license: string;
    licenseUrl: string | null;
    page: string;
  };
};

export const siteImages = ${JSON.stringify(body, null, 2)} as const satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof siteImages;

export function image(key: SiteImageKey): SiteImage {
  return siteImages[key];
}
`;

await writeFile(TS_OUT, ts, "utf8");
console.log(`\nwrote lib/site-images.ts (${records.length} images)`);

// --- the credits table in docs/image-credits.md ----------------------------

const START = "<!-- credits:start -->";
const END = "<!-- credits:end -->";

const rows = records.map((r) => {
  const lic = r.credit.licenseUrl
    ? `[${r.credit.license}](${r.credit.licenseUrl})`
    : r.credit.license;
  const photo = r.modifications
    ? `[${r.subject}](${r.credit.page}) — ${r.modifications}`
    : `[${r.subject}](${r.credit.page})`;
  return `| \`${r.key}\` | ${photo} | ${r.credit.author} | ${lic} |`;
});

const table = [
  START,
  "",
  "| Used for | Photograph | Author | License |",
  "| --- | --- | --- | --- |",
  ...rows,
  "",
  END,
].join("\n");

const credits = await readFile(CREDITS, "utf8");
if (!credits.includes(START) || !credits.includes(END)) {
  console.error(
    `\n${path.relative(ROOT, CREDITS)} has no ${START} / ${END} markers; ` +
      "table not written. Add the markers around the credits table."
  );
  process.exitCode = 1;
} else {
  const before = credits.slice(0, credits.indexOf(START));
  const after = credits.slice(credits.indexOf(END) + END.length);
  await writeFile(CREDITS, before + table + after, "utf8");
  console.log("wrote the credits table in docs/image-credits.md");
}
