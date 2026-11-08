import type { Metadata } from "next";

import { altText } from "@/lib/images";
import { defaultLocale, htmlLang, locales, ogLocale, type Locale } from "@/lib/i18n/config";
import { href, type RouteKey } from "@/lib/i18n/routes";
import { image, type SiteImageKey } from "@/lib/site-images";
import { site } from "@/lib/site";

/**
 * Builds the metadata block every page shares: a self-referencing canonical,
 * a complete hreflang set including x-default, and matching Open Graph and
 * Twitter cards.
 *
 * Centralised so a page can only get this wrong by not calling it. Titles and
 * descriptions stay per page — they must never repeat across the cluster.
 */
export function pageMetadata({
  locale,
  routeKey,
  title,
  description,
  imageKey,
  noindex = false,
}: {
  locale: Locale;
  routeKey: RouteKey;
  /** Already written to the 50–60 character target; used verbatim. */
  title: string;
  description: string;
  imageKey?: SiteImageKey;
  noindex?: boolean;
}): Metadata {
  const canonical = href(locale, routeKey);

  const languages = Object.fromEntries([
    ...locales.map((l) => [htmlLang[l], href(l, routeKey)]),
    ["x-default", href(defaultLocale, routeKey)],
  ]);

  const photo = imageKey ? image(imageKey) : undefined;
  const openGraphImages = photo
    ? [
        {
          url: photo.src,
          width: photo.width,
          height: photo.height,
          alt: altText(photo, locale),
        },
      ]
    : undefined;

  return {
    // `absolute` stops the layout's "%s | brand" template appending the brand
    // a second time. Titles here are already written to the 50–60 character
    // target with the brand deliberately dropped where it would not fit, and
    // the template would push every one of them past the display limit.
    title: { absolute: title },
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: photo ? [photo.src] : undefined,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
