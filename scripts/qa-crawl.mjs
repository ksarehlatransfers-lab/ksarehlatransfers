#!/usr/bin/env node
/**
 * QA crawl.
 *
 * Run against a production server (`next build && next start`), not the dev
 * server: redirect behaviour and prerendering are what this checks.
 *
 *   node scripts/qa-crawl.mjs http://localhost:3000
 *
 * The URL inventory is not written down here. Seeds come from the served
 * sitemap, everything else is discovered by following links, and the two
 * noindex pages are reached the same way a crawler reaches them — through a
 * link. A hand-written list would go stale the first time a page is added;
 * this one cannot.
 *
 * Exits non-zero on the first category of failure, with every failing URL
 * listed, so it is usable as a release gate.
 */

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const origin = new URL(base).origin;

/** Paths published before the trailing-slash convention, plus the two legacy
 *  entry points. Each must reach its final URL in exactly one hop. */
const legacyEntryPoints = ["/", "/get-quote"];

/**
 * The one URL allowed more than one hop, and why.
 *
 * `/get-quote` needs two transformations — a trailing slash and a locale
 * prefix — and Next.js applies trailing-slash normalization *before* it
 * matches `redirects()`, so no `redirects()` source can ever catch the
 * slashless form. `/get-quote/` is one hop; `/get-quote` is 308 → 307 → 200.
 *
 * Collapsing it would mean `skipTrailingSlashRedirect` plus a proxy
 * normalizing every request on an otherwise fully static site, to save one hop
 * on an alias that nothing links to and that is not in the sitemap. The hop
 * stays. If this list ever grows, that trade is worth revisiting.
 */
const allowedChains = new Map([["/get-quote", 2]]);

const failures = [];
const fail = (check, detail) => failures.push({ check, detail });

const isFile = (pathname) => /\.[a-z0-9]+$/i.test(pathname.split("/").pop() ?? "");

async function get(url, redirect = "manual") {
  const res = await fetch(url, { redirect, headers: { "user-agent": "qa-crawl" } });
  return res;
}

/** Follows a redirect chain, returning every hop. */
async function chain(url, limit = 10) {
  const hops = [];
  let current = url;
  for (let i = 0; i < limit; i += 1) {
    const res = await get(current);
    hops.push({ url: current, status: res.status });
    if (res.status < 300 || res.status >= 400) return hops;
    const location = res.headers.get("location");
    if (!location) return hops;
    current = new URL(location, current).toString();
  }
  hops.push({ url: current, status: "LOOP" });
  return hops;
}

// ---------------------------------------------------------------------------
// Tiny tag readers. Regex is enough: the markup is ours and the attributes
// we need are emitted by next/metadata and next/link in a stable shape.
// ---------------------------------------------------------------------------

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return m ? m[1] : null;
};

const tags = (html, selector) => html.match(selector) ?? [];

/**
 * Phrases that promise a page which does not exist yet.
 *
 * These are **not** failures. Saying "this page is being written" instead of
 * linking to nothing is the honest pattern this project deliberately uses.
 * The failure mode is the opposite one: a page ships, and some *other* page
 * goes on promising it. That has happened twice here — the Riyadh hub's
 * forthcoming-routes list, and then the hub intro plus the airport page's
 * hotel paragraph — and the link checks cannot catch it, because every link
 * was valid and only the sentences were wrong.
 *
 * So the crawl lists every promise still on the site, every run. Nobody has
 * to remember; they just have to read the report when a page ships.
 */
const PROMISE_PATTERNS = [
  { label: "being written", re: /being written/i },
  { label: "coming soon", re: /coming soon/i },
  { label: "not yet published", re: /not yet published/i },
  // Unambiguous: "under preparation".
  { label: "قيد الإعداد", re: /قيد الإعداد/ },
  // Deliberately the whole phrase, not the bare word. "قريبًا" means both
  // "soon" and "near": it is a substring of "تقريبًا" (approximately), and
  // our own Taif copy uses it to say one journey is *close to* another in
  // length. Both tried, both cried wolf. A narrow pattern that gets read
  // beats a broad one that gets ignored — so if you add an Arabic promise in
  // different words, add its pattern here too.
  { label: "الدليل الكامل قريبًا", re: /الدليل الكامل قريبًا/ },
];

function readPage(html) {
  const links = tags(html, /<link\b[^>]*>/gi);
  const canonical = links
    .filter((t) => attr(t, "rel") === "canonical")
    .map((t) => attr(t, "href"));
  const alternates = links
    .filter((t) => attr(t, "rel") === "alternate" && attr(t, "hreflang"))
    .map((t) => ({ hreflang: attr(t, "hreflang"), href: attr(t, "href") }));

  const anchors = tags(html, /<a\b[^>]*>/gi).map((t) => ({
    href: attr(t, "href"),
    hrefLang: attr(t, "hreflang"),
  }));

  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? "";
  const h1 = tags(html, /<h1\b[^>]*>/gi).length;
  const robots = tags(html, /<meta\b[^>]*>/gi)
    .filter((t) => attr(t, "name") === "robots")
    .map((t) => attr(t, "content"));

  // Visible text only, so a phrase inside a class name or a script cannot
  // raise a false positive.
  const text = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ");
  const promises = PROMISE_PATTERNS.filter(({ re }) => re.test(text)).map(
    ({ label }) => label
  );

  return {
    canonical,
    alternates,
    anchors,
    lang: attr(htmlTag, "lang"),
    dir: attr(htmlTag, "dir"),
    h1,
    robots,
    promises,
    title: html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "",
  };
}

const localeOf = (pathname) => pathname.split("/").filter(Boolean)[0] ?? null;

// ---------------------------------------------------------------------------
// 1. Seeds: the sitemap.
// ---------------------------------------------------------------------------

const sitemapRes = await get(`${base}/sitemap.xml`, "follow");
if (!sitemapRes.ok) {
  console.error(`sitemap.xml returned ${sitemapRes.status} — is the server running at ${base}?`);
  process.exit(1);
}
const sitemapXml = await sitemapRes.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (sitemapUrls.length === 0) {
  console.error("sitemap.xml listed no URLs");
  process.exit(1);
}

for (const url of sitemapUrls) {
  const { pathname } = new URL(url);
  if (!pathname.endsWith("/")) {
    fail("sitemap URLs carry a trailing slash", url);
  }
}

// ---------------------------------------------------------------------------
// 2. Crawl.
// ---------------------------------------------------------------------------

const pages = new Map(); // pathname -> parsed page
const queue = sitemapUrls.map((u) => new URL(u).pathname);
const seen = new Set(queue);
/** pathname -> the pages that link to it */
const inbound = new Map();

while (queue.length > 0) {
  const pathname = queue.shift();
  const url = `${origin}${pathname}`;
  const res = await get(url);

  if (res.status !== 200) {
    const hops = await chain(url);
    fail(
      "every linked URL answers 200 without redirecting",
      `${pathname} → ${hops.map((h) => `${h.status} ${new URL(h.url).pathname}`).join(" → ")}`
    );
    continue;
  }

  const page = readPage(await res.text());
  pages.set(pathname, page);

  for (const anchor of page.anchors) {
    if (!anchor.href) continue;
    if (/^(https?:|mailto:|tel:|#)/i.test(anchor.href)) {
      // Off-site and in-page links are out of scope for the URL convention.
      if (anchor.href.startsWith(origin)) {
        // An absolute link to ourselves still has to obey the convention.
      } else {
        continue;
      }
    }
    const target = new URL(anchor.href, url);
    if (target.origin !== origin) continue;

    const targetPath = target.pathname;

    if (!targetPath.endsWith("/") && !isFile(targetPath)) {
      fail("no slashless internal link", `${pathname} → ${anchor.href}`);
    }

    const from = localeOf(pathname);
    const to = localeOf(targetPath);
    if (from && to && from !== to && !anchor.hrefLang) {
      fail(
        "no cross-locale link except the language switcher",
        `${pathname} → ${targetPath}`
      );
    }

    if (!inbound.has(targetPath)) inbound.set(targetPath, new Set());
    inbound.get(targetPath).add(pathname);

    if (!seen.has(targetPath) && !isFile(targetPath)) {
      seen.add(targetPath);
      queue.push(targetPath);
    }
  }
}

// ---------------------------------------------------------------------------
// 3. Per-page SEO assertions.
// ---------------------------------------------------------------------------

for (const [pathname, page] of pages) {
  const expected = `${origin}${pathname}`;

  if (page.canonical.length !== 1) {
    fail("exactly one canonical per page", `${pathname} has ${page.canonical.length}`);
  } else if (page.canonical[0] !== expected) {
    fail("canonical is self-referencing", `${pathname} → ${page.canonical[0]}`);
  }

  const byLang = Object.fromEntries(page.alternates.map((a) => [a.hreflang, a.href]));
  for (const key of ["en", "ar", "x-default"]) {
    if (!byLang[key]) fail("hreflang set is complete", `${pathname} is missing ${key}`);
  }
  for (const [hreflang, href] of Object.entries(byLang)) {
    if (href && !new URL(href).pathname.endsWith("/")) {
      fail("hreflang URLs carry a trailing slash", `${pathname} ${hreflang} → ${href}`);
    }
  }
  // Reciprocity: the page our hreflang points at must point back at us.
  const selfLang = localeOf(pathname);
  if (selfLang && byLang[selfLang] !== expected) {
    fail(
      "hreflang names this page as its own language",
      `${pathname} ${selfLang} → ${byLang[selfLang]}`
    );
  }
  for (const key of ["en", "ar"]) {
    const other = byLang[key];
    if (!other) continue;
    const otherPage = pages.get(new URL(other).pathname);
    if (!otherPage) continue;
    const back = Object.fromEntries(otherPage.alternates.map((a) => [a.hreflang, a.href]));
    if (back[selfLang] !== expected) {
      fail(
        "hreflang is reciprocal",
        `${pathname} → ${other} but back ${selfLang} → ${back[selfLang]}`
      );
    }
  }

  if (page.h1 !== 1) fail("exactly one h1 per page", `${pathname} has ${page.h1}`);

  const locale = localeOf(pathname);
  if (page.lang !== locale) fail("html lang matches the locale", `${pathname} lang=${page.lang}`);
  const expectedDir = locale === "ar" ? "rtl" : "ltr";
  if (page.dir !== expectedDir) fail("html dir matches the locale", `${pathname} dir=${page.dir}`);

  if (!page.title) fail("every page has a title", pathname);
}

// Titles must be unique across the site, in each language.
const titles = new Map();
for (const [pathname, page] of pages) {
  const key = page.title;
  if (titles.has(key)) fail("titles are unique", `${pathname} repeats "${key}" from ${titles.get(key)}`);
  else titles.set(key, pathname);
}

// ---------------------------------------------------------------------------
// 4. Orphans: every sitemap URL must be reachable by a link.
// ---------------------------------------------------------------------------

for (const url of sitemapUrls) {
  const pathname = new URL(url).pathname;
  const from = inbound.get(pathname);
  if (!from || from.size === 0) fail("no orphan pages", pathname);
}

// ---------------------------------------------------------------------------
// 5. Redirects: one hop, straight to the final URL.
// ---------------------------------------------------------------------------

const redirectTargets = [
  ...legacyEntryPoints,
  // The slashless form of every published page.
  ...sitemapUrls.map((u) => new URL(u).pathname.replace(/\/$/, "")).filter(Boolean),
];

const redirects = [];
for (const pathname of new Set(redirectTargets)) {
  const hops = await chain(`${origin}${pathname}`);
  const final = hops[hops.length - 1];
  redirects.push({ pathname, hops });

  if (final.status !== 200) {
    fail("legacy URLs end at a 200", `${pathname} ends ${final.status} ${new URL(final.url).pathname}`);
  }
  // hops = [the redirect, the destination]. Anything longer is a chain.
  const allowed = allowedChains.get(pathname) ?? 1;
  if (hops.length - 1 > allowed) {
    fail(
      "no redirect chains",
      `${pathname} takes ${hops.length - 1} hops, ${allowed} allowed: ${hops.map((h) => `${h.status} ${new URL(h.url).pathname}`).join(" → ")}`
    );
  }
  // An allowance that is no longer needed is a check that stopped checking.
  if (allowedChains.has(pathname) && hops.length - 1 < allowed) {
    fail(
      "redirect allowances are still needed",
      `${pathname} now takes ${hops.length - 1} hop(s); drop it from allowedChains`
    );
  }
}

// ---------------------------------------------------------------------------
// Report.
// ---------------------------------------------------------------------------

console.log(`crawled ${pages.size} pages from ${sitemapUrls.length} sitemap URLs\n`);

// Promises still on the site. Not a failure — read it when a page ships.
const promising = [...pages.entries()].filter(([, page]) => page.promises.length);
if (promising.length > 0) {
  console.log("pages promising a forthcoming page — confirm each is still unbuilt");
  for (const [pathname, page] of promising) {
    console.log(`  ${pathname}  (${page.promises.join(", ")})`);
  }
  console.log();
} else {
  console.log("no page promises a forthcoming page\n");
}

console.log("redirects");
for (const { pathname, hops } of redirects) {
  const trail = hops.map((h) => `${h.status} ${new URL(h.url).pathname}`).join(" → ");
  const note = allowedChains.has(pathname) ? "  (documented allowance)" : "";
  console.log(`  ${pathname || "/"}  ${trail}${note}`);
}

console.log("\npages");
for (const pathname of [...pages.keys()].sort()) {
  const page = pages.get(pathname);
  const noindex = page.robots.some((r) => r?.includes("noindex")) ? "  [noindex]" : "";
  console.log(`  200 ${pathname}${noindex}`);
}

if (failures.length === 0) {
  console.log("\nall checks passed");
  process.exit(0);
}

const byCheck = new Map();
for (const { check, detail } of failures) {
  if (!byCheck.has(check)) byCheck.set(check, []);
  byCheck.get(check).push(detail);
}

console.error(`\n${failures.length} failure(s):`);
for (const [check, details] of byCheck) {
  console.error(`\n  ${check}`);
  for (const detail of details) console.error(`    - ${detail}`);
}
process.exit(1);
