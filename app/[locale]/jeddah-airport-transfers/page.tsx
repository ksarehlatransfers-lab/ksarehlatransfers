import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  TicketsPlaneIcon,
  TrainFrontIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { jeddahAirport as content } from "@/lib/content/jeddah/airport";
import { jeddahHub } from "@/lib/content/jeddah/hub";
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
}: PageProps<"/[locale]/jeddah-airport-transfers">): Promise<Metadata> {
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

/** Three levels: the airport is a child of the Jeddah hub. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: jeddahHub.crumbLabel[locale], routeKey: "jeddah" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

const directionIcons = [PlaneLandingIcon, PlaneTakeoffIcon] as const;

/**
 * Jeddah airport transfers.
 *
 * Design concept — "the onward choice". The Riyadh airport page is built
 * around **two directions**, because at Riyadh the question is which way you
 * are travelling. At Jeddah almost nobody lands and stays: where you are
 * going next decides the drive, the timing, whether a checkpoint is involved
 * and whether a car is even the right answer. So this page **opens with that
 * choice** and hangs everything else off it.
 *
 * Deliberately unlike the twelve pages already published:
 *
 * - **No hero photograph.** The opening is the decision itself — H1, lead and
 *   then three onward cards. The terminal photograph appears later, in the
 *   arrivals context where it is actually relevant. Buraydah opens
 *   facts-first and the hotel page has no photograph at all; no page opens
 *   with a *choice*.
 * - **Both directions as one ruled two-column comparison**, not the Riyadh
 *   page's twin panels — same honest content, deliberately different object.
 * - **The terminal question gets its own `<h2>`**, because here the refusal to
 *   publish a chart needs explaining against competitors who do publish one.
 * - **A rail section**, because a Haramain station is linked to this terminal
 *   and the competitor's airport page does not mention rail at all.
 * - **CTA**: a centred narrow column on sand under a heavy `border-t-4`
 *   palm rule. The AA-passing field colours are genuinely exhausted after
 *   twelve pages — `brass-deep` was measured at 3.86:1 white and 4.33:1 ink
 *   and rejected — so this one is distinguished by composition and rule
 *   weight rather than by a new colour.
 */
export default async function JeddahAirportTransfersPage({
  params,
}: PageProps<"/[locale]/jeddah-airport-transfers">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const isArabic = locale === "ar";

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

      {/* Opens with the decision, not a photograph */}
      <section className="bg-sand" aria-labelledby="jed-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />

          <div className="mt-8 max-w-3xl">
            <p className="text-eyebrow text-palm">
              {content.hero.eyebrow[locale]}
            </p>
            <h1
              id="jed-title"
              className="text-display mt-4 text-balance text-ink"
            >
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 text-pretty text-muted-foreground">
              {content.hero.lead[locale]}
            </p>
          </div>

          {/* The signature element, in the opening rather than below it */}
          <h2
            id="jed-onward"
            className="text-h3 mt-12 text-balance text-ink"
          >
            {content.onward.heading[locale]}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {content.onward.lead[locale]}
          </p>

          <ul role="list" className="mt-7 grid gap-4 lg:grid-cols-3">
            {content.onward.options.map((option) => (
              <li
                key={option.name.en}
                className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-ink/8"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-h4 text-ink">{option.name[locale]}</h3>
                  <p className="numeric shrink-0 text-xs font-semibold text-palm">
                    {option.meta[locale]}
                  </p>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {option.detail[locale]}
                </p>
                {option.caveat ? (
                  <p className="mt-4 border-s-2 border-brass/60 ps-3.5 text-[0.8125rem] leading-relaxed text-ink/75">
                    {option.caveat[locale]}
                  </p>
                ) : null}
                {option.routeKey ? (
                  <Link
                    href={href(locale, option.routeKey)}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-palm transition-colors hover:text-palm-deep"
                  >
                    {isArabic ? "صفحة جدة" : "The Jeddah page"}
                    <ArrowUpRightIcon
                      aria-hidden
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                    />
                  </Link>
                ) : option.plannedNote ? (
                  <p className="mt-4 text-xs text-muted-foreground">
                    {option.plannedNote[locale]}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>

          <Link
            href={href(locale, "getQuote")}
            className="group mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
            />
          </Link>
        </div>
      </section>

      <section aria-label={content.hero.h1[locale]} className="bg-background">
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

      {/* Both directions as one ruled comparison, not twin panels */}
      <section className="section-y bg-sand" aria-labelledby="jed-directions">
        <div className="site-container">
          <h2 id="jed-directions" className="text-h2 text-balance text-ink">
            {content.directions.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.directions.lead[locale]}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
            {content.directions.columns.map((column, index) => {
              const Icon = directionIcons[index] ?? PlaneLandingIcon;
              return (
                <div
                  key={column.title.en}
                  className={
                    index > 0 ? "md:border-s md:border-ink/12 md:ps-14" : undefined
                  }
                >
                  <div className="flex items-center gap-2.5 border-b border-ink/12 pb-4">
                    <Icon
                      aria-hidden
                      className="size-5 shrink-0 text-palm rtl:-scale-x-100"
                    />
                    <h3 className="text-h4 text-ink">{column.title[locale]}</h3>
                  </div>
                  <ol role="list" className="mt-5 flex flex-col">
                    {column.points.map((point, i) => (
                      <li
                        key={point.title.en}
                        className="flex gap-4 py-4 not-last:border-b not-last:border-ink/8"
                      >
                        <span
                          aria-hidden
                          className="numeric mt-0.5 font-heading text-sm leading-none text-palm/50"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-[0.95rem] font-semibold text-ink">
                            {point.title[locale]}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {point.detail[locale]}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The flight-number mechanic */}
      <section className="bg-palm" aria-labelledby="jed-flight">
        <div className="site-container py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <span className="grid size-12 place-items-center rounded-xl bg-white/15 text-white">
                <TicketsPlaneIcon className="size-6 rtl:-scale-x-100" aria-hidden />
              </span>
              <p className="text-eyebrow mt-6 text-palm-soft">
                {content.flightNumber.eyebrow[locale]}
              </p>
              <h2
                id="jed-flight"
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

      {/* The terminal question, with the photograph in its actual context */}
      <section className="section-y bg-background" aria-labelledby="jed-terminal">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div>
              <h2 id="jed-terminal" className="text-h2 text-balance text-ink">
                {content.terminal.heading[locale]}
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                {content.terminal.paragraphs.map((paragraph) => (
                  <p key={paragraph.en} className="text-body text-muted-foreground">
                    {paragraph[locale]}
                  </p>
                ))}
              </div>
            </div>
            {/* Captioned as "a terminal", never by number or name, however
                the source file is titled. */}
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:sticky lg:top-28 lg:self-start">
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rail — the competitor's airport page does not mention it at all */}
      <section className="section-y bg-palm-soft/40" aria-labelledby="jed-rail">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="grid size-12 place-items-center rounded-xl bg-palm text-white">
              <TrainFrontIcon className="size-6 rtl:-scale-x-100" aria-hidden />
            </span>
            <h2 id="jed-rail" className="text-h2 mt-6 text-balance text-ink">
              {content.rail.heading[locale]}
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {content.rail.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="text-body text-muted-foreground">
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="jed-hotels">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <h2
              id="jed-hotels"
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

      <section className="section-y bg-sand" aria-labelledby="jed-quotation">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="jed-quotation" className="text-h2 text-balance text-ink">
              {content.quotation.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">
              {content.quotation.lead[locale]}
            </p>
            <ol role="list" className="mt-8 flex flex-col">
              {content.quotation.items.map((item, index) => (
                <li
                  key={item.en}
                  className="flex gap-4 border-t border-ink/10 py-5 last:pb-0"
                >
                  <span
                    aria-hidden
                    className="numeric font-heading text-base leading-none text-palm/50"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item[locale]}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="jed-faq">
        <div className="site-container">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="jed-faq"
            faqs={content.faqs}
            layout="split"
          />
        </div>
      </section>

      {/* Centred on sand under a heavy palm rule. See the design note above. */}
      <section className="border-t-4 border-palm bg-sand" aria-labelledby="jed-cta">
        <div className="site-container py-16 text-center lg:py-20">
          <p className="text-eyebrow text-palm">{content.cta.eyebrow[locale]}</p>
          <h2
            id="jed-cta"
            className="text-h2 mx-auto mt-4 max-w-2xl text-balance text-ink"
          >
            {content.cta.heading[locale]}
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
            {content.cta.body[locale]}
          </p>
          <Link
            href={href(locale, "getQuote")}
            className="group mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-palm px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
            />
          </Link>
        </div>
      </section>

      <section className="section-y bg-background" aria-label={relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks
            locale={locale}
            heading={relatedHeading[locale]}
            links={content.related}
          />
        </div>
      </section>
    </>
  );
}
