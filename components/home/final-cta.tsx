import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { homeCopy } from "@/lib/content/home-copy";
import { href } from "@/lib/i18n/routes";
import { image } from "@/lib/site-images";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section K — the closing conversion block.
 *
 * Deliberately unlike the hero: centred rather than split, no form, and a
 * single idea — the scale of the country and one way to cross it.
 */
export function FinalCta({ locale }: { locale: Locale }) {
  const copy = homeCopy.finalCta;
  const photo = image("cta");

  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden bg-ink"
    >
      <Image
        src={photo.src}
        alt=""
        width={photo.width}
        height={photo.height}
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        loading="lazy"
        sizes="100vw"
        aria-hidden
        className="absolute inset-0 -z-20 size-full object-cover opacity-55"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent,var(--ink)_72%)]"
      />

      <div className="site-container relative py-20 text-center lg:py-28">
        <p className="text-eyebrow text-brass">{copy.eyebrow[locale]}</p>

        <h2
          id="final-cta-title"
          className="text-h2 mx-auto mt-5 max-w-3xl text-balance text-white"
        >
          {copy.title[locale]}
        </h2>

        <p className="text-lead mx-auto mt-6 max-w-xl text-pretty text-white/75">
          {copy.lead[locale]}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={href(locale, "getQuote")}
            className="group inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep"
          >
            {copy.primary[locale]}
            <ArrowRightIcon
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              aria-hidden
            />
          </Link>
          <Link
            href={`${href(locale, "home")}#faq`}
            className="inline-flex h-13 items-center justify-center rounded-lg border border-white/25 px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white/10"
          >
            {copy.secondary[locale]}
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/65">{copy.note[locale]}</p>
      </div>
    </section>
  );
}
