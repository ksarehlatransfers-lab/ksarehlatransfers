import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { homeCopy } from "@/lib/content/home-copy";
import { pilgrimageJourneys } from "@/lib/content/services";
import { href } from "@/lib/i18n/routes";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section D — Hajj, Umrah and Ziyarat.
 *
 * Dark and set apart from the rest of the page, because this is the part of
 * the offer most visitors arrive for. The copy states plainly what we are and
 * are not, so nobody reads a transport service as a licensed pilgrimage
 * operator.
 */
export function PilgrimageSection({ locale }: { locale: Locale }) {
  const copy = homeCopy.pilgrimage;
  const photo = image("pilgrimage");

  return (
    <section
      id="pilgrimage"
      aria-labelledby="pilgrimage-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-ink"
    >
      <div className="site-container section-y">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="pilgrimage-title"
              tone="invert"
              eyebrow={copy.eyebrow[locale]}
              title={copy.title[locale]}
              lead={copy.lead[locale]}
            />

            <ul role="list" className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {pilgrimageJourneys.map((journey) => (
                <li
                  key={journey.name.en}
                  className="border-s-2 border-brass/50 ps-4"
                >
                  <h3 className="text-[0.95rem] font-semibold text-white">
                    {journey.name[locale]}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-white/60">
                    {journey.detail[locale]}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-white/12 bg-white/5 p-5">
              <p className="text-sm leading-relaxed text-white/70">
                <strong className="font-semibold text-white">
                  {copy.disclosureLabel[locale]}
                </strong>{" "}
                {copy.disclosure[locale]}
              </p>
            </div>

            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-brass px-6 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep"
            >
              {copy.cta[locale]}
              <ArrowRightIcon
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                aria-hidden
              />
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl sm:aspect-3/2 lg:aspect-4/5">
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
