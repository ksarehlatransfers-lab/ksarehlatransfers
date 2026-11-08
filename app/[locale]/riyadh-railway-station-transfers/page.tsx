import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  TrainFrontIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhRailway as content } from "@/lib/content/riyadh/railway";
import { riyadhHub } from "@/lib/content/riyadh/hub";
import { href } from "@/lib/i18n/routes";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { ui } from "@/lib/i18n/dictionary";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import { pageMetadata } from "@/lib/seo";
import { clusterPageJsonLd, jsonLdScript, type Crumb } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/riyadh-railway-station-transfers">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return pageMetadata({
    locale,
    routeKey: content.routeKey,
    title: content.seo.title[locale],
    description: content.seo.description[locale],
    imageKey: content.imageKey,
  });
}

const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: riyadhHub.crumbLabel[locale], routeKey: "riyadh" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * Riyadh railway station transfers.
 *
 * Design concept — "the departure board". The page's job is to stop someone
 * booking a car to the wrong building, so the opening is a board: one row per
 * station, naming its line and where that line goes. Destinations only, never
 * times or fares, because destinations are the part we can actually know.
 *
 * The signature element is the corridor diagram: the two lines drawn as
 * parallel runs of station chips, so "which station do I need" is answered by
 * finding your destination rather than by reading prose. It mirrors for RTL.
 *
 * Only the first station section carries a photograph — no picture of Riyadh
 * North exists on Commons, and the alternative would be captioning a generic
 * train or the airport as something it is not. Same choice, same reason, as
 * the airport page's arrivals panel.
 */
export default async function RiyadhRailwayStationTransfersPage({
  params,
}: PageProps<"/[locale]/riyadh-railway-station-transfers">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            clusterPageJsonLd({
              locale,
              routeKey: content.routeKey,
              title: content.seo.title[locale],
              description: content.seo.description[locale],
              imageUrl: photo.src,
              crumbs: crumbs(locale),
              serviceName: content.hero.h1[locale],
              serviceDescription: content.seo.description[locale],
              faqEntries: content.faqs.map((faq) => ({
                question: faq.question[locale],
                answer: faq.answer[locale],
              })),
            })
          ),
        }}
      />

      {/* Hero: the headline beside a departure board of the two stations */}
      <section className="bg-ink" aria-labelledby="rail-title">
        <div className="site-container py-10 lg:py-16">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
            <div>
              <p className="text-eyebrow text-brass">
                {content.hero.eyebrow[locale]}
              </p>
              <h1
                id="rail-title"
                className="text-display mt-4 text-balance text-white"
              >
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-white/75">
                {content.hero.lead[locale]}
              </p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-brass px-6 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                />
              </Link>
            </div>

            {/* The board. Destinations only — no times, no fares. */}
            <div className="rounded-2xl bg-white/6 p-6 ring-1 ring-white/15 lg:p-8">
              <dl className="flex flex-col">
                {content.board.rows.map((row, index) => (
                  <div
                    key={row.station.en}
                    className={
                      index > 0
                        ? "mt-5 border-t border-white/12 pt-5"
                        : undefined
                    }
                  >
                    <dt className="flex items-center gap-2.5">
                      <TrainFrontIcon
                        aria-hidden
                        className="size-4 shrink-0 text-brass"
                      />
                      <span className="text-[0.975rem] font-semibold text-white">
                        {row.station[locale]}
                      </span>
                      <span className="text-eyebrow text-brass">
                        {row.line[locale]}
                      </span>
                    </dt>
                    <dd className="mt-2 ps-7 text-sm leading-relaxed text-white/70">
                      {row.towards[locale]}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-white/12 pt-5 text-xs leading-relaxed text-white/55">
                {content.board.caption[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={content.hero.h1[locale]} className="bg-sand">
        <div className="site-container">
          <dl className="grid gap-x-8 gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="text-eyebrow text-palm">{stat.label[locale]}</dt>
                <dd className="numeric mt-2 font-heading text-2xl text-ink">
                  {stat.value[locale]}
                </dd>
                {stat.note ? (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {stat.note[locale]}
                  </p>
                ) : null}
              </div>
            ))}
          </dl>
          <p className="-mt-3 pb-10 text-xs text-muted-foreground">
            {content.statsChecked[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="rail-overview">
        <div className="site-container max-w-3xl">
          <h2 id="rail-overview" className="text-h2 text-balance text-ink">
            {content.overview.heading[locale]}
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            {content.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.en} className="text-body text-muted-foreground">
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Signature element: the two corridors as runs of station chips */}
      <section className="section-y bg-sand" aria-labelledby="rail-corridors">
        <div className="site-container">
          <h2 id="rail-corridors" className="text-h2 text-balance text-ink">
            {content.corridors.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.corridors.lead[locale]}
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {content.corridors.lines.map((line) => (
              <div
                key={line.name.en}
                className="rounded-2xl bg-card p-7 ring-1 ring-ink/8 lg:p-8"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-h4 text-ink">{line.name[locale]}</h3>
                  <p className="text-eyebrow text-palm">
                    {locale === "ar" ? "من" : "From"} {line.from[locale]}
                  </p>
                </div>

                {/* The run of stops. The rule sits behind the chips and
                    mirrors with the writing direction automatically, because
                    the flex row reverses under `dir="rtl"`. */}
                <ol
                  role="list"
                  className="relative mt-6 flex flex-wrap items-center gap-x-2 gap-y-3"
                >
                  <li className="flex items-center gap-2">
                    <span className="rounded-full bg-palm px-3.5 py-1.5 text-sm font-semibold text-white">
                      {line.from[locale]}
                    </span>
                  </li>
                  {line.stops.map((stop) => (
                    <li key={stop.en} className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-px w-5 shrink-0 bg-palm/35 sm:w-7"
                      />
                      <span className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-ink">
                        {stop[locale]}
                      </span>
                    </li>
                  ))}
                </ol>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {line.note[locale]}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            {content.corridors.footnote[locale]}
          </p>
        </div>
      </section>

      {/* One section per real station */}
      {content.stations.map((station, index) => {
        const stationPhoto = station.imageKey ? image(station.imageKey) : null;
        const headingId = `rail-station-${index}`;

        return (
          <section
            key={station.heading.en}
            className={
              index % 2 === 0
                ? "section-y bg-background"
                : "section-y bg-palm-soft/40"
            }
            aria-labelledby={headingId}
          >
            <div className="site-container">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
                <div>
                  <h2
                    id={headingId}
                    className="text-h2 text-balance text-ink"
                  >
                    {station.heading[locale]}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {station.aliases[locale]}
                  </p>
                  <p className="text-lead mt-5 text-pretty text-muted-foreground">
                    {station.lead[locale]}
                  </p>

                  <dl className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {station.facts.map((fact) => (
                      <div key={fact.label.en}>
                        <dt className="text-eyebrow text-palm">
                          {fact.label[locale]}
                        </dt>
                        <dd className="mt-1.5 text-sm font-medium text-ink">
                          {fact.value[locale]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  {stationPhoto ? (
                    <div className="relative mb-7 aspect-4/3 overflow-hidden rounded-2xl">
                      <Image
                        src={stationPhoto.src}
                        alt={altText(stationPhoto, locale)}
                        width={stationPhoto.width}
                        height={stationPhoto.height}
                        placeholder="blur"
                        blurDataURL={stationPhoto.blurDataURL}
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="size-full object-cover"
                      />
                    </div>
                  ) : (
                    // No photograph of this station exists under an open
                    // licence, and a generic train or the airport terminal
                    // would be captioned as something it is not. A tinted
                    // block keeps the two sections balanced instead — the
                    // same choice the airport page makes for arrivals.
                    <div
                      aria-hidden
                      className="mb-7 grid aspect-4/3 place-items-center rounded-2xl bg-sand-deep"
                    >
                      <TrainFrontIcon className="size-10 text-palm/35" />
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    {station.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.en}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {paragraph[locale]}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <ul
                role="list"
                className="mt-10 grid gap-3 border-t border-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {station.links.map((link) => (
                  <li key={link.routeKey}>
                    <Link
                      href={href(locale, link.routeKey)}
                      className="group flex h-full flex-col rounded-xl bg-card p-5 ring-1 ring-ink/8 transition-colors hover:bg-sand"
                    >
                      <span className="flex items-start justify-between gap-3 text-[0.95rem] font-semibold text-ink">
                        {link.label[locale]}
                        <ArrowUpRightIcon
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-palm transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                        />
                      </span>
                      <span className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {link.note[locale]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* What is documented and what is not */}
      <section className="section-y bg-background" aria-labelledby="rail-limits">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div>
              <h2 id="rail-limits" className="text-h2 text-balance text-ink">
                {content.limits.heading[locale]}
              </h2>
              <p className="text-lead mt-4 text-pretty text-muted-foreground">
                {content.limits.lead[locale]}
              </p>
            </div>
            <ul role="list" className="flex flex-col gap-4">
              {content.limits.items.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 border-b border-ink/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <CheckIcon
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-palm"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="rail-practical">
        <div className="site-container">
          <h2 id="rail-practical" className="text-h2 text-balance text-ink">
            {content.practical.heading[locale]}
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {content.practical.items.map((item) => (
              <div key={item.heading.en}>
                <h3 className="text-h4 text-ink">{item.heading[locale]}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-3xl rounded-2xl bg-card p-7 ring-1 ring-ink/8">
            <h2 className="text-h3 text-ink">
              {content.booking.heading[locale]}
            </h2>
            {content.booking.paragraphs.map((paragraph) => (
              <p
                key={paragraph.en}
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="rail-faq">
        <div className="site-container">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="rail-faq"
            faqs={content.faqs}
            layout="split"
          />
        </div>
      </section>

      {/* Full-bleed palm-soft closing band — not used elsewhere */}
      <section className="bg-palm-soft" aria-labelledby="rail-cta">
        <div className="site-container py-16 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-eyebrow text-palm-deep">
                {content.cta.eyebrow[locale]}
              </p>
              <h2
                id="rail-cta"
                className="text-h2 mt-3 text-balance text-palm-deep"
              >
                {content.cta.heading[locale]}
              </h2>
              <p className="text-lead mt-4 text-pretty text-palm-deep/85">
                {content.cta.body[locale]}
              </p>
            </div>
            <Link
              href={href(locale, "getQuote")}
              className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-palm px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              />
            </Link>
          </div>

          <RelatedLinks
            locale={locale}
            heading={relatedHeading[locale]}
            links={content.related}
            className="mt-16 border-t border-palm/20 pt-12"
          />
        </div>
      </section>
    </>
  );
}
