/**
 * Generates the site icons from the brand mark used in the header logo
 * (components/layout/site-logo.tsx): a road narrowing to the horizon, in
 * white on the palm-green brand colour.
 *
 *   node scripts/generate-icons.mjs
 *
 * Writes (Next.js file conventions; the <link> tags are added automatically):
 * - app/icon.svg        scalable favicon for modern browsers
 * - app/favicon.ico     16, 32 and 48 px (PNG-encoded ICO) for older browsers
 * - app/apple-icon.png  180 × 180, full-bleed (iOS applies its own rounding)
 *
 * Small sizes use a heavier stroke and two lane marks so the road stays
 * legible in a browser tab; larger sizes match the header mark.
 */
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const PALM = "#154e37"; // --palm: oklch(0.38 0.07 163)
const WHITE = "#ffffff";

/** The road from the header logo, in its 24-unit coordinate space. */
const ROAD = "M4.5 21 9.8 4.2a1.6 1.6 0 0 1 1.53-1.12h1.34c.7 0 1.32.45 1.53 1.12L19.5 21";

function markSvg({ size, rounded, scale, stroke, dashes }) {
  const lanes = dashes === 3
    ? "M12 6.4v2.3M12 11.6v2.3M12 16.8v2.4"
    : "M12 8.2v3M12 15v3.6";
  const radius = rounded ? 5.4 : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="${radius}" fill="${PALM}"/>
  <g transform="translate(12 12.4) scale(${scale}) translate(-12 -12)" fill="none" stroke="${WHITE}" stroke-linecap="round">
    <path d="${ROAD}" stroke-width="${stroke}"/>
    <path d="${lanes}" stroke-width="${stroke}" opacity="0.8"/>
  </g>
</svg>
`;
}

const small = { rounded: true, scale: 0.74, stroke: 2.5, dashes: 2 };
const large = { rounded: true, scale: 0.7, stroke: 1.9, dashes: 3 };

const png = (svg, px) => sharp(Buffer.from(svg), { density: 72 * Math.max(1, px / 24) }).resize(px, px).png().toBuffer();

/** Packs PNG images into a single .ico file (supported by all current browsers). */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { px, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(px >= 256 ? 0 : px, 0);
    e.writeUInt8(px >= 256 ? 0 : px, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

await writeFile("app/icon.svg", markSvg({ size: 32, ...small }));

const icoImages = [];
for (const px of [16, 32, 48]) {
  icoImages.push({ px, data: await png(markSvg({ size: px, ...(px <= 32 ? small : large) }), px) });
}
await writeFile("app/favicon.ico", ico(icoImages));

await writeFile("app/apple-icon.png", await png(markSvg({ size: 180, ...large, rounded: false, scale: 0.62 }), 180));

console.log("wrote app/icon.svg, app/favicon.ico (16/32/48), app/apple-icon.png (180)");
