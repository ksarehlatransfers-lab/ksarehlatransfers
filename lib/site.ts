/**
 * Single source of truth for brand and deployment details.
 *
 * Everything here is referenced by the layout, metadata and structured data,
 * so changing a value once updates the whole site. Set NEXT_PUBLIC_SITE_URL in
 * the deployment environment before going live — the canonical URL, Open Graph
 * tags and JSON-LD all derive from it.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: "Private Transfers Across Saudi",
  shortName: "Private Transfers Across Saudi",
  /** Used in the SEO title after the main keyword. */
  brand: "Private Transfers Across Saudi",
  url: rawUrl.replace(/\/$/, ""),
  /** Default site description, per locale. Pages override with their own. */
  description: {
    en:
      "Private car and van transfers across Saudi Arabia — airports, hotels, " +
      "city-to-city routes and pilgrimage journeys. Send your journey details " +
      "and receive a quotation.",
    ar:
      "نقل خاص بالسيارات والڤانات في جميع أنحاء السعودية — المطارات والفنادق " +
      "والرحلات بين المدن ورحلات الحج والعمرة. أرسل تفاصيل رحلتك واحصل على عرض سعر.",
  },
  /**
   * Contact routes. These are placeholders until the real channels are
   * confirmed; the footer and quote flow read from here so there is one place
   * to update. Leave a value as null to hide it in the UI rather than
   * publishing a number that does not work.
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    whatsapp: null as string | null,
  },
  /** Areas the service is positioned around, nationwide rather than one city. */
  serviceArea: "Saudi Arabia",
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, site.url || "http://localhost:3000").toString();
