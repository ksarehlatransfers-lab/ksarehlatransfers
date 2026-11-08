import Image from "next/image";

import { SectionHeading } from "@/components/home/section-heading";
import { guides } from "@/lib/content/guides";
import { homeCopy } from "@/lib/content/home-copy";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section I — travel inspiration.
 *
 * The entry point for the guide cluster that gets written next. Guides not
 * yet published render as cards without a link and say so, rather than
 * pointing at a page that 404s.
 */
export function TravelGuidesSection({ locale }: { locale: Locale }) {
  const copy = homeCopy.guides;

  return (
    <section
      id="guides"
      aria-labelledby="guides-title"
      className="section-y scroll-mt-20 bg-background"
    >
      <div className="site-container">
        <SectionHeading
          id="guides-title"
          eyebrow={copy.eyebrow[locale]}
          title={copy.title[locale]}
          lead={copy.lead[locale]}
        />

        <ul role="list" className="mt-12 grid gap-5 md:grid-cols-3">
          {guides.map((guide) => {
            const photo = image(guide.imageKey);

            return (
              <li
                key={guide.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-ink/8"
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={altText(photo, locale)}
                    width={photo.width}
                    height={photo.height}
                    placeholder="blur"
                    blurDataURL={photo.blurDataURL}
                    loading="lazy"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 start-3 rounded-full bg-background/90 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-palm-deep backdrop-blur-sm">
                    {guide.kicker[locale]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-h4 text-ink">{guide.title[locale]}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {guide.summary[locale]}
                  </p>
                  {guide.planned ? (
                    <p className="mt-4 text-xs font-medium text-muted-foreground">
                      {copy.comingSoon[locale]}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
