import Image from "next/image";

import { SectionHeading } from "@/components/home/section-heading";
import { destinations } from "@/lib/content/destinations";
import { homeCopy } from "@/lib/content/home-copy";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import { cn } from "cn";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section B — nationwide coverage.
 *
 * A bento grid rather than a list: the two holy cities take the wide tiles so
 * the layout itself signals where most demand sits, without any copy claiming
 * an operational presence we have not verified.
 */
export function DestinationsSection({ locale }: { locale: Locale }) {
  const copy = homeCopy.destinations;

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-title"
      className="section-y scroll-mt-20 bg-background"
    >
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="destinations-title"
            eyebrow={copy.eyebrow[locale]}
            title={copy.title[locale]}
            lead={copy.lead[locale]}
          />
        </div>

        <ul
          role="list"
          className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {destinations.map((destination, index) => {
            const photo = image(destination.imageKey);
            // The two holy cities, and the capital, get the wide tiles.
            const wide = index === 0 || destination.pilgrimage;

            return (
              <li
                key={destination.slug}
                className={cn(
                  "group relative isolate overflow-hidden rounded-2xl bg-ink",
                  wide && "sm:col-span-2 lg:col-span-2"
                )}
              >
                <Image
                  src={photo.src}
                  alt={altText(photo, locale)}
                  width={photo.width}
                  height={photo.height}
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                  className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/5"
                />

                <div className="flex size-full flex-col justify-end p-4 sm:p-5">
                  <p
                    className={cn(
                      "text-[0.65rem] font-semibold tracking-[0.16em] text-brass uppercase",
                      locale === "ar" && "tracking-normal normal-case"
                    )}
                  >
                    {destination.region[locale]}
                  </p>
                  <h3 className="mt-1.5 font-heading text-2xl leading-tight text-white">
                    {destination.name[locale]}
                  </h3>
                  {wide ? (
                    <p className="mt-2 max-w-sm text-sm leading-snug text-white/70">
                      {destination.note[locale]}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">
          {copy.footnote[locale]}
        </p>
      </div>
    </section>
  );
}
