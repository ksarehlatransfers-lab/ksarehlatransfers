/**
 * Locale-aware access to the generated image manifest.
 *
 * `lib/site-images.ts` is generated and carries two alternative texts per
 * photograph — `alt` in English and `altAr` in Arabic, both written by hand in
 * the pipeline manifest rather than translated from each other. Components
 * must not reach for `photo.alt` directly: an Arabic page rendering English
 * alt text is the defect this helper exists to prevent.
 */

import type { Locale } from "@/lib/i18n/config";
import type { SiteImage } from "@/lib/site-images";

export function altText(photo: SiteImage, locale: Locale): string {
  return locale === "ar" ? photo.altAr : photo.alt;
}
