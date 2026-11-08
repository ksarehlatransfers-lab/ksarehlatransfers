import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MinusIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  TicketsPlaneIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhAirport as content } from "@/lib/content/riyadh/airport";
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
}: PageProps<"/[locale]/riyadh-airport-transfers">): Promise<Metadata> {
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

/** Arrivals panel first, then departures — the order of the two headings. */
const panelIcons = [PlaneLandingIcon, PlaneTakeoffIcon] as const;

/**
 * Riyadh airport transfers.
 *
 * Design concept — "two directions". The consolidation decision says arrivals
 * and departures are one intent read two ways, so the page makes that
 * argument in its own layout: the two directions sit side by side as equal
 * panels, both always visible, each with its own `<h2>` and its own numbered
 * steps. No switcher, no tabs, no JavaScript — a switcher would hide half the
 * answer and reintroduce the split the single URL exists to avoid.
 *
 * The hero is an asymmetric split that bleeds the photograph off the end edge
 * of the viewport, which no other page in the cluster does. The flight-number
 * mechanic — the page's unique angle — gets a full-width palm band of its own
 * rather than being buried in a list.
 */
export default async function RiyadhAirportTransfersPage({
  params,
}: PageProps<"/[locale]/riyadh-airport-transfers">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const departures = image("kkia-departures");

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

      {/* Asymmetric hero: text on ink, photograph bleeding off the end edge */}
      <section className="bg-ink" aria-labelledby="airport-title">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          {/* Its own gutters rather than `.site-container`: the point of this
              hero is that the photograph runs off the end edge of the
              viewport, which a centred max-width wrapper would prevent. */}
          <div className="flex flex-col justify-center px-4 py-10 sm:px-6 lg:px-10 lg:py-20 xl:ps-16">
            <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />

            <p className="text-eyebrow mt-8 text-brass">
              {content.hero.eyebrow[locale]}
            </p>
            <h1
              id="airport-title"
              className="text-display mt-4 text-balance text-white"
            >
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 max-w-xl text-pretty text-white/75">
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

          <div className="relative aspect-16/10 lg:aspect-auto">
            <Image
              src={photo.src}
              alt={altText(photo, locale)}
              width={photo.width}
              height={photo.height}
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Figures, with the sources' disagreements in the notes */}
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

      <section className="section-y bg-background" aria-labelledby="airport-overview">
        <div className="site-container max-w-3xl">
          <h2 id="airport-overview" className="text-h2 text-balance text-ink">
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

      {/* The signature element: both directions, side by side, always visible */}
      <section className="section-y bg-sand" aria-label={content.directions.lead[locale]}>
        <div className="site-container">
          <p className="text-lead max-w-2xl text-pretty text-muted-foreground">
            {content.directions.lead[locale]}
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {content.directions.panels.map((panel, index) => {
              const Icon = panelIcons[index] ?? PlaneLandingIcon;
              const isDepartures = index === 1;

              return (
                <div
                  key={panel.heading.en}
                  className="flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-ink/8"
                >
                  {/* Only the departures panel carries a photograph, because
                      the one we hold is honestly a departures hall. The
                      arrivals panel gets a tinted header instead rather than
                      a picture captioned as something it is not. */}
                  {isDepartures ? (
                    <div className="relative aspect-21/9">
                      <Image
                        src={departures.src}
                        alt={altText(departures, locale)}
                        width={departures.width}
                        height={departures.height}
                        placeholder="blur"
                        blurDataURL={departures.blurDataURL}
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="size-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      aria-hidden
                      className="aspect-21/9 bg-palm-soft"
                    />
                  )}

                  <div className="flex flex-1 flex-col p-7 lg:p-9">
                    <span className="grid size-11 place-items-center rounded-xl bg-palm text-white">
                      <Icon className="size-5 rtl:-scale-x-100" aria-hidden />
                    </span>
                    <h2 className="text-h3 mt-5 text-balance text-ink">
                      {panel.heading[locale]}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {panel.lead[locale]}
                    </p>

                    <ol role="list" className="mt-7 flex flex-col">
                      {panel.steps.map((step, stepIndex) => (
                        <li
                          key={step.title.en}
                          className="flex gap-4 border-t border-ink/10 py-5 last:pb-0"
                        >
                          <span
                            aria-hidden
                            className="numeric mt-0.5 font-heading text-base leading-none text-palm/50"
                          >
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-h4 text-ink">
                              {step.title[locale]}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {step.detail[locale]}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The unique angle, given a band of its own */}
      <section className="bg-palm" aria-labelledby="airport-flight-number">
        <div className="site-container py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <span className="grid size-12 place-items-center rounded-xl bg-white/15 text-white">
                <TicketsPlaneIcon className="size-6 rtl:-scale-x-100" aria-hidden />
              </span>
              <p className="text-eyebrow mt-6 text-palm-soft">
                {content.flightNumber.eyebrow[locale]}
              </p>
              <h2
                id="airport-flight-number"
                className="text-h2 mt-3 text-balance text-white"
              >
                {content.flightNumber.heading[locale]}
              </h2>
            </div>
            <div className="flex flex-col gap-5 lg:pt-2">
              {content.flightNumber.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="text-body text-white/80">
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotel connections — the third mandatory section */}
      <section className="section-y bg-background" aria-labelledby="airport-hotels">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <h2
              id="airport-hotels"
              className="text-h2 text-balance text-ink lg:sticky lg:top-28 lg:self-start"
            >
              {content.hotels.heading[locale]}
            </h2>
            <div className="flex flex-col gap-5">
              {content.hotels.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="text-body text-muted-foreground">
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onward intercity — the fourth mandatory section */}
      <section className="section-y bg-sand" aria-labelledby="airport-onward">
        <div className="site-container">
          <h2 id="airport-onward" className="text-h2 text-balance text-ink">
            {content.onward.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.onward.lead[locale]}
          </p>

          <ul role="list" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.onward.links.map((link) => (
              <li key={link.routeKey}>
                <Link
                  href={href(locale, link.routeKey)}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-palm/35 hover:bg-palm-soft/35"
                >
                  <span className="flex items-start justify-between gap-3 text-[0.975rem] font-semibold text-ink">
                    {link.label[locale]}
                    <ArrowUpRightIcon
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-palm transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                    />
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {link.note[locale]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What the quotation states, and what we will not claim */}
      <section className="section-y bg-background" aria-labelledby="airport-quotation">
        <div className="site-container">
          <h2 id="airport-quotation" className="text-h2 text-balance text-ink">
            {content.quotation.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.quotation.lead[locale]}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-palm/30 bg-palm-soft/40 p-7">
              <h3 className="text-h4 text-palm-deep">
                {locale === "ar"
                  ? "ما يذكره عرض السعر"
                  : "Stated in your quotation"}
              </h3>
              <ul role="list" className="mt-5 flex flex-col gap-3.5">
                {content.quotation.stated.map((item) => (
                  <li key={item.en} className="flex gap-2.5 text-sm">
                    <CheckIcon
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-palm"
                    />
                    <span className="leading-relaxed text-palm-deep/85">
                      {item[locale]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-h4 text-ink">
                {locale === "ar"
                  ? "ما لا ننشره هنا"
                  : "Not published here"}
              </h3>
              <ul role="list" className="mt-5 flex flex-col gap-3.5">
                {content.quotation.withheld.map((item) => (
                  <li key={item.en} className="flex gap-2.5 text-sm">
                    <MinusIcon
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                    />
                    <span className="leading-relaxed text-muted-foreground">
                      {item[locale]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
            {content.quotation.footnote[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="airport-practical">
        <div className="site-container">
          <h2 id="airport-practical" className="text-h2 text-balance text-ink">
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

      <section className="section-y bg-background" aria-labelledby="airport-faq">
        <div className="site-container">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="airport-faq"
            faqs={content.faqs}
            layout="split"
          />
        </div>
      </section>

      {/* Deep palm closing band — not used elsewhere in the cluster */}
      <section className="bg-palm-deep" aria-labelledby="airport-cta">
        <div className="site-container py-16 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-eyebrow text-palm-soft">
                {content.cta.eyebrow[locale]}
              </p>
              <h2
                id="airport-cta"
                className="text-h2 mt-3 text-balance text-white"
              >
                {content.cta.heading[locale]}
              </h2>
              <p className="text-lead mt-4 text-pretty text-white/75">
                {content.cta.body[locale]}
              </p>
            </div>
            <Link
              href={href(locale, "getQuote")}
              className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep"
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
            tone="invert"
            className="mt-16 border-t border-white/15 pt-12"
          />
        </div>
      </section>
    </>
  );
}
