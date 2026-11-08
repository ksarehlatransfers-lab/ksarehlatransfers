import type { MetadataRoute } from "next";

import { htmlLang, locales, defaultLocale } from "@/lib/i18n/config";
import { href, indexableRoutes, routeMeta } from "@/lib/i18n/routes";
import { absoluteUrl } from "@/lib/site";

/**
 * Sitemap.
 *
 * Generated from the same route registry the pages and internal links use, so
 * a new page appears here the moment it is registered and cannot be forgotten.
 * Pages marked noindex are excluded rather than listed and then disallowed.
 *
 * `lastModified` is deliberately omitted: there is no real modification date
 * to report, and a build timestamp would claim every page changed on every
 * deploy.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    indexableRoutes.map((key) => ({
      url: absoluteUrl(href(locale, key)),
      changeFrequency: routeMeta(key).changeFrequency,
      priority: routeMeta(key).priority,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((l) => [htmlLang[l], absoluteUrl(href(l, key))]),
          ["x-default", absoluteUrl(href(defaultLocale, key))],
        ]),
      },
    }))
  );
}
