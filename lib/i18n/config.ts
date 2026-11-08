/**
 * Locale configuration.
 *
 * Two locales, both served from a path prefix so every page has a stable,
 * crawlable URL in each language: /en/... and /ar/.... Slugs are shared
 * between locales (/en/riyadh-to-jeddah and /ar/riyadh-to-jeddah), which keeps
 * the language switcher a pure prefix swap and keeps hreflang pairs obvious.
 */

export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Text direction for the <html dir> attribute and logical layout flips. */
export const direction: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

/** BCP 47 tags for <html lang>, hreflang and Open Graph. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  ar: "ar",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_SA",
  ar: "ar_SA",
};

/** The language name as written in that language, for the switcher. */
export const localeName: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

/**
 * Builds a locale-prefixed path. `path` is always the locale-independent part,
 * with a leading slash or empty for the locale home.
 *
 * Every URL the site generates ends in a trailing slash, matching
 * `trailingSlash: true` in next.config.ts. The two must agree: without the
 * slash here, every canonical, hreflang and sitemap entry would point at a URL
 * that answers 308 instead of 200. This is the only place the convention is
 * expressed, so nothing else needs to know about it.
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/** The same page in the other language. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}

/**
 * Picks the value for the active locale out of a bilingual record. Used
 * everywhere content is authored side by side rather than in flat JSON
 * dictionaries, so a translation sits next to the sentence it translates.
 */
export type Bilingual<T> = Record<Locale, T>;

export function pick<T>(value: Bilingual<T>, locale: Locale): T {
  return value[locale];
}
