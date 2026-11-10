/**
 * The URL inventory.
 *
 * Every page in the site is registered here once, locale-independent. The
 * sitemap, the hreflang tags, the breadcrumbs and every internal link read
 * from this, so a slug can never drift between the page that owns it and the
 * pages that link to it.
 *
 * Mirrored in docs/riyadh-url-inventory.md.
 */

import { type Locale, localePath } from "@/lib/i18n/config";

export const route = {
  home: "",
  getQuote: "get-quote",
  riyadh: "riyadh",
  riyadhToJeddah: "riyadh-to-jeddah",
  riyadhToDammam: "riyadh-to-dammam",
  riyadhToAlKhobar: "riyadh-to-al-khobar",
  riyadhToBuraydah: "riyadh-to-buraydah",
  riyadhToTaif: "riyadh-to-taif",
  riyadhToHail: "riyadh-to-hail",
  riyadhToAlUla: "riyadh-to-alula",
  riyadhAirport: "riyadh-airport-transfers",
  riyadhRailway: "riyadh-railway-station-transfers",
  riyadhHotel: "riyadh-hotel-transfers",
  jeddah: "jeddah",
  jeddahAirport: "jeddah-airport-transfers",
  jeddahToMakkah: "jeddah-to-makkah",
  alKharj: "al-kharj",
  diriyah: "diriyah",
  shaqra: "shaqra",
  makkah: "makkah",
  taif: "taif",
  rabigh: "rabigh",
  madinah: "madinah",
  alula: "alula",
  yanbu: "yanbu",
  dammam: "dammam",
  jubail: "jubail",
  alAhsa: "al-ahsa",
  abha: "abha",
} as const;

export type RouteKey = keyof typeof route;

/** Relative sitemap priority and change cadence, by page role. */
const sitemapMeta: Record<RouteKey, { priority: number; changeFrequency: "weekly" | "monthly" }> = {
  home: { priority: 1, changeFrequency: "weekly" },
  getQuote: { priority: 0.3, changeFrequency: "monthly" },
  riyadh: { priority: 0.9, changeFrequency: "weekly" },
  riyadhToJeddah: { priority: 0.8, changeFrequency: "monthly" },
  riyadhToDammam: { priority: 0.8, changeFrequency: "monthly" },
  riyadhToAlKhobar: { priority: 0.8, changeFrequency: "monthly" },
  // Batch 2. A shade below batch 1: the same page type, but serving smaller
  // markets, so they should not outrank the three established routes.
  riyadhToBuraydah: { priority: 0.7, changeFrequency: "monthly" },
  riyadhToTaif: { priority: 0.7, changeFrequency: "monthly" },
  riyadhToHail: { priority: 0.7, changeFrequency: "monthly" },
  riyadhToAlUla: { priority: 0.7, changeFrequency: "monthly" },
  // Level with the batch-1 routes, not the batch-2 ones: airport transfers
  // are the highest-intent journey in the cluster and the hub's busiest branch.
  riyadhAirport: { priority: 0.8, changeFrequency: "monthly" },
  // Rail is a minority choice on these corridors, so this sits with batch 2
  // rather than with the airport page.
  riyadhRailway: { priority: 0.7, changeFrequency: "monthly" },
  // The smallest service intent in the cluster, and largely a sub-intent of
  // the airport page, so it ranks lowest of the published pages.
  riyadhHotel: { priority: 0.6, changeFrequency: "monthly" },
  // A city parent, so level with the Riyadh hub rather than with a leaf page.
  jeddah: { priority: 0.9, changeFrequency: "weekly" },
  // Level with the Riyadh airport page: the highest-intent journey in Jeddah.
  jeddahAirport: { priority: 0.8, changeFrequency: "monthly" },
  // The dominant Jeddah intent, so level with the airport page.
  jeddahToMakkah: { priority: 0.8, changeFrequency: "monthly" },
  // Riyadh Region destination hubs. Below the city hubs and the main routes:
  // smaller markets, and operational coverage is still to be confirmed.
  alKharj: { priority: 0.7, changeFrequency: "monthly" },
  diriyah: { priority: 0.7, changeFrequency: "monthly" },
  shaqra: { priority: 0.7, changeFrequency: "monthly" },
  // Makkah Region. Makkah and Taif are city hubs, level with Riyadh and
  // Jeddah; Rabigh is a smaller market, level with the Riyadh Region hubs.
  makkah: { priority: 0.9, changeFrequency: "weekly" },
  taif: { priority: 0.9, changeFrequency: "weekly" },
  rabigh: { priority: 0.7, changeFrequency: "monthly" },
  // Madinah Region. Madinah is a city hub, level with Makkah; AlUla and Yanbu
  // are destination hubs a step below.
  madinah: { priority: 0.9, changeFrequency: "weekly" },
  alula: { priority: 0.8, changeFrequency: "monthly" },
  yanbu: { priority: 0.7, changeFrequency: "monthly" },
  // Eastern Province. Dammam is the metropolitan hub for Dammam, Al Khobar
  // and Dhahran, level with the other city hubs; Al Ahsa and Jubail are
  // destination hubs a step below.
  dammam: { priority: 0.9, changeFrequency: "weekly" },
  alAhsa: { priority: 0.8, changeFrequency: "monthly" },
  jubail: { priority: 0.7, changeFrequency: "monthly" },
  // Asir Region. One hub for Abha and Khamis Mushait, level with the other
  // city hubs.
  abha: { priority: 0.9, changeFrequency: "weekly" },
};

/** Pages deliberately kept out of the index; see each page's robots meta. */
const noindex: ReadonlySet<RouteKey> = new Set<RouteKey>(["getQuote"]);

export const indexableRoutes = (Object.keys(route) as RouteKey[]).filter(
  (key) => !noindex.has(key)
);

export function routeMeta(key: RouteKey) {
  return sitemapMeta[key];
}

/** Locale-prefixed path for a registered page. */
export function href(locale: Locale, key: RouteKey): string {
  return localePath(locale, route[key]);
}
