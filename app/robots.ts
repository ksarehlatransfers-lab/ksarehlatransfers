import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import { href } from "@/lib/i18n/routes";
import { absoluteUrl } from "@/lib/site";

/**
 * robots.txt.
 *
 * The quote pages are kept out of the index by their own robots meta rather
 * than disallowed here — a disallowed URL cannot be crawled, so the noindex
 * would never be read. Blocking the Next.js image endpoint would stop image
 * results, so it stays crawlable.
 *
 * What is disallowed is the query-string form, `/<locale>/get-quote/?`, which
 * is how a prefilled or back-navigated quote URL appears. `href()` supplies
 * the trailing slash, so the pattern matches the URL that actually exists.
 *
 * robots.txt and sitemap.xml themselves keep no trailing slash: Next.js
 * exempts paths with a file extension from `trailingSlash: true`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: locales.map((locale) => `${href(locale, "getQuote")}?`),
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
