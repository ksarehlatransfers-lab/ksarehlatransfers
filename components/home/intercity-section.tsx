import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon, RouteIcon } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { homeCopy } from "@/lib/content/home-copy";
import { routes } from "@/lib/content/routes";
import { href } from "@/lib/i18n/routes";
import { image } from "@/lib/site-images";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section E — intercity routes.
 *
 * Route-shaped cards: two city photographs joined by a line, so the layout
 * reads as a journey rather than a list of places. Distances and times are
 * labelled as approximate throughout.
 *
 * Routes that now have their own page link straight to it; the rest still
 * lead to the quote page, so no card is a dead end.
 */
export function IntercitySection({ locale }: { locale: Locale }) {
  const copy = homeCopy.intercity;

  return (
    <section
      id="intercity"
      aria-labelledby="intercity-title"
      className="section-y scroll-mt-20 bg-background"
    >
      <div className="site-container">
        <SectionHeading
          id="intercity-title"
          eyebrow={copy.eyebrow[locale]}
          title={copy.title[locale]}
          lead={copy.lead[locale]}
        />

        <ul role="list" className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {routes.map((route) => {
            const from = image(route.fromImageKey);
            const to = image(route.toImageKey);
            const title = `${route.from[locale]} ${copy.to[locale]} ${route.to[locale]}`;

            return (
              <li
                key={`${route.from.en}-${route.to.en}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-ink/8 transition-shadow hover:shadow-lg"
              >
                {/* Two halves of one journey. */}
                <div className="relative flex h-32">
                  <div className="relative w-1/2 overflow-hidden">
                    <Image
                      src={from.src}
                      alt=""
                      width={from.width}
                      height={from.height}
                      placeholder="blur"
                      blurDataURL={from.blurDataURL}
                      loading="lazy"
                      sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 50vw"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="relative w-1/2 overflow-hidden">
                    <Image
                      src={to.src}
                      alt=""
                      width={to.width}
                      height={to.height}
                      placeholder="blur"
                      blurDataURL={to.blurDataURL}
                      loading="lazy"
                      sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 50vw"
                      className="size-full object-cover"
                    />
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/55 to-ink/10"
                  />
                  <span
                    aria-hidden
                    className="absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background shadow-md ring-1 ring-ink/10"
                  >
                    <ArrowRightIcon className="size-4 text-palm rtl:-scale-x-100" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-xl leading-snug text-ink">
                    {route.routeKey ? (
                      <Link
                        href={href(locale, route.routeKey)}
                        className="transition-colors hover:text-palm"
                      >
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {route.note[locale]}
                  </p>

                  <dl className="mt-4 flex items-center gap-5 border-t pt-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <RouteIcon className="size-4 text-palm" aria-hidden />
                      <dt className="sr-only">{copy.distanceLabel[locale]}</dt>
                      <dd className="text-muted-foreground">
                        <span className="numeric">
                          ~{route.km.toLocaleString("en")}
                        </span>{" "}
                        {locale === "ar" ? "كم" : "km"}
                      </dd>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="size-4 text-palm" aria-hidden />
                      <dt className="sr-only">{copy.durationLabel[locale]}</dt>
                      <dd className="text-muted-foreground">
                        {route.duration[locale]}
                      </dd>
                    </div>
                  </dl>

                  {route.routeKey ? (
                    <Link
                      href={href(locale, route.routeKey)}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-palm transition-colors hover:text-palm-deep"
                    >
                      {copy.readMore[locale]}
                      <ArrowRightIcon
                        className="size-3.5 rtl:-scale-x-100"
                        aria-hidden
                      />
                      <span className="sr-only"> — {title}</span>
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm text-muted-foreground">
            {copy.footnote[locale]}
          </p>
          <Link
            href={href(locale, "getQuote")}
            className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-palm/30 bg-palm-soft px-5 text-sm font-semibold text-palm-deep transition-colors hover:bg-palm hover:text-white"
          >
            {copy.cta[locale]}
            <ArrowRightIcon
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
