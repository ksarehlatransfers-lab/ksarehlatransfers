import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BuildingIcon,
  ExternalLinkIcon,
  PlaneLandingIcon,
  ShieldCheckIcon,
  TrainFrontIcon,
  CarFrontIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { jeddahMakkah as content } from "@/lib/content/jeddah/makkah";
import { jeddahHub } from "@/lib/content/jeddah/hub";
import { href } from "@/lib/i18n/routes";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { ui } from "@/lib/i18n/dictionary";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import { pageMetadata } from "@/lib/seo";
import { clusterPageJsonLd, jsonLdScript, type Crumb } from "@/lib/structured-data";
import { cn } from "cn";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/jeddah-to-makkah">): Promise<Metadata> {
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

/** Three levels: the route is a child of the Jeddah hub. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: jeddahHub.crumbLabel[locale], routeKey: "jeddah" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * Where the 1447 example sits on a three-month Hijri ribbon, as a share of
 * the whole. Each month is a third; positions are by Hijri day, which is how
 * the Ministry states them, so the ribbon reads correctly in either calendar.
 */
const ribbon = {
  residentsStart: ((24 / 30) * 100) / 3, // 25 Shawwal
  visasStart: 100 / 3, // 1 Dhu al-Qa'dah
  visasEnd: ((2 + 14 / 30) * 100) / 3, // end of 14 Dhu al-Hijjah
};

/**
 * Two lines merging into one (or, reversed, one splitting into two). Pure
 * decoration: every label it implies is real text beside it. Symmetric, so
 * it needs no RTL mirroring.
 */
function Convergence({ split = false, className }: { split?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className={cn("block h-16 w-full text-palm", split && "-scale-y-100", className)}
    >
      <path
        d="M25 0 C25 24 50 16 50 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M75 0 C75 24 50 16 50 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/**
 * Jeddah → Makkah.
 *
 * Design concept — "two roads in, one road up". The airport page *diverges*
 * (one airport, three onward choices) and the hub is a threshold. This page is
 * their inverse: two starting points **converging** on one road to one city,
 * and the composition is built on that convergence.
 *
 * Deliberately unlike every published page:
 *
 * - **An arch-framed hero photograph** at the end edge — the only shaped image
 *   frame in the project — with the H1 at the start edge on a plain field.
 * - **The convergence itself is the layout**: the two pickup sections are the
 *   two branches, a drawn junction joins them, the entry checkpoint sits on the
 *   join, and the distance block is the trunk. The return section reverses it.
 * - **A Hijri season ribbon** for the dated example of Hajj-period rules — a
 *   new object, positioned by Hijri day.
 * - **Car or train as a hand-off count**: linked pips, one per leg, not cards
 *   or columns.
 * - **CTA inside an elliptical arch**, so the page opens and closes on the
 *   same shape. Distinguished by shape, since the AA-passing field colours are
 *   exhausted.
 *
 * Localised emphasis, identical facts and policy:
 *
 * - **English**: the entry section is a dark ink panel led by the all-year
 *   Muslims-only rule; the season example is secondary inside it.
 * - **Arabic**: the all-year rule is one plain line (lead and notice), and the
 *   section is a light sand panel led by the **season** — permits for
 *   residents and visit-visa restrictions are what Arabic searchers ask about.
 */
export default async function JeddahToMakkahPage({
  params,
}: PageProps<"/[locale]/jeddah-to-makkah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const isArabic = locale === "ar";
  const entry = content.entry;
  const faqs = content.faqs.filter((faq) => !faq.only || faq.only === locale);

  const officialLink = (
    <a
      href={entry.official.url}
      target="_blank"
      rel="noopener noreferrer"
      hrefLang="ar"
      className={cn(
        "group inline-flex items-start gap-2 text-sm font-semibold underline-offset-4 hover:underline",
        isArabic ? "text-palm-deep" : "text-brass"
      )}
    >
      <span>{entry.official.label[locale]}</span>
      <ExternalLinkIcon aria-hidden className="mt-0.5 size-4 shrink-0" />
    </a>
  );

  const seasonRibbon = (
    <div>
      <div
        aria-hidden
        className={cn(
          "relative grid h-24 grid-cols-3 overflow-hidden rounded-xl",
          isArabic ? "bg-white ring-1 ring-ink/10" : "bg-white/6 ring-1 ring-white/12"
        )}
      >
        {entry.example.months.map((month, index) => (
          <div
            key={month.en}
            className={cn(
              "relative z-10 px-3 pt-2.5 text-xs font-semibold",
              index > 0 && (isArabic ? "border-s border-ink/10" : "border-s border-white/12"),
              isArabic ? "text-ink/70" : "text-white/70"
            )}
          >
            {month[locale]}
          </div>
        ))}
        {/* 1 Dhu al-Qa'dah – 14 Dhu al-Hijjah: visa holders barred */}
        <span
          className={cn(
            "absolute bottom-3 h-5 rounded-full",
            isArabic ? "bg-palm" : "bg-brass"
          )}
          style={{
            insetInlineStart: `${ribbon.visasStart}%`,
            width: `${ribbon.visasEnd - ribbon.visasStart}%`,
          }}
        />
        {/* From 25 Shawwal: resident permits */}
        <span
          className={cn(
            "absolute bottom-9 h-2 rounded-full",
            isArabic ? "bg-palm/45" : "bg-white/45"
          )}
          style={{
            insetInlineStart: `${ribbon.residentsStart}%`,
            width: `${ribbon.visasEnd - ribbon.residentsStart}%`,
          }}
        />
      </div>

      <dl className="mt-5 grid gap-5 md:grid-cols-2">
        {[
          { item: entry.example.residents, swatch: isArabic ? "bg-palm/45" : "bg-white/45", bar: "h-2" },
          { item: entry.example.visas, swatch: isArabic ? "bg-palm" : "bg-brass", bar: "h-3" },
        ].map(({ item, swatch, bar }) => (
          <div key={item.when.en}>
            <dt className="flex items-center gap-2.5">
              <span aria-hidden className={cn("w-6 shrink-0 rounded-full", swatch, bar)} />
              <span
                className={cn(
                  "numeric text-sm font-semibold",
                  isArabic ? "text-ink" : "text-white"
                )}
              >
                {item.when[locale]}
              </span>
            </dt>
            <dd
              className={cn(
                "mt-2 text-sm leading-relaxed",
                isArabic ? "text-muted-foreground" : "text-white/75"
              )}
            >
              {item.what[locale]}
            </dd>
          </div>
        ))}
      </dl>

      <p
        className={cn(
          "mt-5 text-sm leading-relaxed font-medium",
          isArabic ? "text-ink" : "text-white"
        )}
      >
        {entry.example.caveat[locale]}
      </p>
    </div>
  );

  const policyBox = (
    <div
      className={cn(
        "rounded-2xl border-s-4 p-6 lg:p-7",
        isArabic ? "border-palm bg-white" : "border-brass bg-white/8"
      )}
    >
      <div className="flex items-center gap-2.5">
        <ShieldCheckIcon
          aria-hidden
          className={cn("size-5 shrink-0", isArabic ? "text-palm" : "text-brass")}
        />
        {/* Plain strings, not cn(): the merger reads custom type scales like
            text-h4 as colours and would drop them beside text-ink. */}
        <h3 className={`text-h4 ${isArabic ? "text-ink" : "text-white"}`}>
          {entry.policy.heading[locale]}
        </h3>
      </div>
      <p
        className={cn(
          "mt-3 text-[0.975rem] leading-relaxed font-medium",
          isArabic ? "text-ink" : "text-white"
        )}
      >
        {entry.policy.body[locale]}
      </p>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          isArabic ? "text-muted-foreground" : "text-white/70"
        )}
      >
        {entry.policy.why[locale]}
      </p>
    </div>
  );

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
              faqEntries: faqs.map((faq) => ({
                question: faq.question[locale],
                answer: faq.answer[locale],
              })),
            })
          ),
        }}
      />

      {/* Hero: words at the start edge, the photograph inside an arch */}
      <section className="bg-background" aria-labelledby="jtm-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
              <h1 id="jtm-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 max-w-2xl text-pretty text-muted-foreground">
                {content.hero.lead[locale]}
              </p>

              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                {content.hero.figures.map((figure) => (
                  <div key={figure.label.en}>
                    <dt className="text-eyebrow text-palm">{figure.label[locale]}</dt>
                    <dd className="numeric mt-1.5 font-heading text-2xl text-ink">
                      {figure.value[locale]}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href={href(locale, "getQuote")}
                  className="group inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
                >
                  {content.cta.button[locale]}
                  <ArrowRightIcon
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                  />
                </Link>
                <a
                  href="#makkah-entry"
                  className="text-sm font-semibold text-palm-deep underline decoration-palm/40 underline-offset-4 hover:decoration-palm"
                >
                  {content.hero.entryLink[locale]}
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:ms-auto lg:me-0">
              <div className="relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-2xl bg-sand ring-8 ring-sand">
                <Image
                  src={photo.src}
                  alt={altText(photo, locale)}
                  width={photo.width}
                  height={photo.height}
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  priority
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 24rem, 20rem"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        Who can enter Makkah. Same facts and policy in both languages, with
        localised emphasis: English leads with the all-year rule on ink;
        Arabic leads with the season on sand and gives the all-year rule one
        plain line.
      */}
      <section
        id="makkah-entry"
        className={cn("scroll-mt-24", isArabic ? "bg-sand" : "bg-ink")}
        aria-labelledby="jtm-entry"
      >
        <div className="site-container py-14 lg:py-20">
          <p className={`text-eyebrow ${isArabic ? "text-palm" : "text-brass"}`}>
            {entry.eyebrow[locale]}
          </p>
          <h2
            id="jtm-entry"
            className={`text-h2 mt-3 max-w-3xl text-balance ${
              isArabic ? "text-ink" : "text-white"
            }`}
          >
            {entry.heading[locale]}
          </h2>

          {isArabic ? (
            <>
              <p className="mt-5 max-w-3xl border-s-2 border-palm/40 ps-4 text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-ink">{entry.allYear.title[locale]}: </strong>
                {entry.allYear.detail[locale]}
              </p>

              <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
                <div>
                  <h3 className="text-h3 text-balance text-ink">{entry.seasonal.title[locale]}</h3>
                  <p className="text-body mt-3 text-muted-foreground">
                    {entry.seasonal.detail[locale]}
                  </p>
                  <h4 className="mt-8 text-[0.95rem] font-semibold text-ink">
                    {entry.example.heading[locale]}
                  </h4>
                  <p className="mt-1.5 mb-5 text-sm leading-relaxed text-muted-foreground">
                    {entry.example.lead[locale]}
                  </p>
                  {seasonRibbon}
                </div>
                <div className="flex flex-col gap-6">
                  {policyBox}
                  <div>
                    {officialLink}
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {entry.official.note[locale]}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {entry.limit[locale]}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h3 className="font-heading text-[1.75rem] leading-tight text-balance text-white lg:text-[2rem]">
                    {entry.allYear.title[locale]}
                  </h3>
                  <p className="text-body mt-4 text-white/80">{entry.allYear.detail[locale]}</p>
                </div>
                {policyBox}
              </div>

              <div className="mt-12 border-t border-white/12 pt-10">
                <h3 className="text-h4 text-white">{entry.seasonal.title[locale]}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75">
                  {entry.seasonal.detail[locale]}
                </p>
                <h4 className="mt-8 text-[0.95rem] font-semibold text-white">
                  {entry.example.heading[locale]}
                </h4>
                <p className="mt-1.5 mb-5 max-w-3xl text-sm leading-relaxed text-white/70">
                  {entry.example.lead[locale]}
                </p>
                {seasonRibbon}

                <div className="mt-8 grid gap-6 border-t border-white/12 pt-8 md:grid-cols-2">
                  <div>
                    {officialLink}
                    <p className="mt-2 text-xs leading-relaxed text-white/60">
                      {entry.official.note[locale]}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">{entry.limit[locale]}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* The convergence: two branches, a junction, one trunk */}
      <section className="section-y bg-background" aria-label={content.approach.eyebrow[locale]}>
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow text-palm">{content.approach.eyebrow[locale]}</p>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">
              {content.approach.lead[locale]}
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            {[
              { block: content.airport, Icon: PlaneLandingIcon, id: "jtm-airport" },
              { block: content.city, Icon: BuildingIcon, id: "jtm-city" },
            ].map(({ block, Icon, id }) => (
              <article
                key={id}
                aria-labelledby={id}
                className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-ink/8 lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-palm-soft text-palm-deep">
                    <Icon aria-hidden className="size-5 rtl:-scale-x-100" />
                  </span>
                  <span className="text-eyebrow text-palm">{block.tag[locale]}</span>
                </div>
                <h2 id={id} className="text-h3 mt-5 text-balance text-ink">
                  {block.heading[locale]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {block.lead[locale]}
                </p>
                <ul role="list" className="mt-5 flex flex-1 flex-col">
                  {block.points.map((point) => (
                    <li
                      key={point.title.en}
                      className="border-t border-ink/8 py-4 last:pb-0"
                    >
                      <h3 className="text-[0.95rem] font-semibold text-ink">
                        {point.title[locale]}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {point.detail[locale]}
                      </p>
                    </li>
                  ))}
                </ul>
                {id === "jtm-airport" ? (
                  <>
                    <p className="mt-5 border-s-2 border-brass/60 ps-3.5 text-[0.8125rem] leading-relaxed text-ink/75">
                      {content.airport.umrah[locale]}
                    </p>
                    <Link
                      href={href(locale, "jeddahAirport")}
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-palm transition-colors hover:text-palm-deep"
                    >
                      {content.airport.link[locale]}
                      <ArrowUpRightIcon
                        aria-hidden
                        className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                      />
                    </Link>
                  </>
                ) : null}
              </article>
            ))}
          </div>

          {/* The junction, drawn on desktop where the two branches sit side by side */}
          <Convergence className="mt-2 hidden md:block" />
          <div aria-hidden className="mx-auto mt-6 h-10 w-0.5 bg-palm md:hidden" />

          <div className="flex justify-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-palm-deep px-4 py-2 text-xs font-semibold text-white">
              <ShieldCheckIcon aria-hidden className="size-4 shrink-0" />
              {content.approach.checkpoint[locale]}
            </p>
          </div>
          <div aria-hidden className="mx-auto h-8 w-0.5 bg-palm" />

          {/* The trunk: one road, its figures and what changes them */}
          <div className="rounded-3xl bg-sand p-6 sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
              <div>
                <h2 id="jtm-road" className="text-h2 text-balance text-ink">
                  {content.road.heading[locale]}
                </h2>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  {content.road.figures.map((figure) => (
                    <div key={figure.label.en} className="border-t-2 border-palm pt-4">
                      <dt className="text-eyebrow text-palm">{figure.label[locale]}</dt>
                      <dd className="numeric mt-2 font-heading text-3xl text-ink">
                        {figure.value[locale]}
                      </dd>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {figure.note[locale]}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <ul role="list" className="flex flex-col">
                  {content.road.considerations.map((item) => (
                    <li
                      key={item.title.en}
                      className="border-b border-ink/10 py-5 first:pt-0"
                    >
                      <h3 className="text-h4 text-ink">{item.title[locale]}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.detail[locale]}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">
                  {content.road.footnote[locale]}
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden className="mx-auto h-10 w-0.5 bg-palm" />
        </div>
      </section>

      {/* The arrival: hotel-dependent drop-off */}
      <section className="pb-16 lg:pb-24" aria-labelledby="jtm-dropoff">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="jtm-dropoff" className="text-h2 text-balance text-ink">
              {content.dropoff.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">
              {content.dropoff.lead[locale]}
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
            {content.dropoff.options.map((option, index) => (
              <div key={option.title.en} className="contents">
                {index > 0 ? (
                  <div className="flex items-center justify-center">
                    <span className="grid size-10 place-items-center rounded-full bg-sand text-xs font-semibold text-ink/70 ring-1 ring-ink/10">
                      {content.dropoff.or[locale]}
                    </span>
                  </div>
                ) : null}
                <div className="rounded-2xl bg-card p-6 ring-1 ring-ink/8">
                  <h3 className="text-h4 text-ink">{option.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {option.detail[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-ink/80">
            {content.dropoff.note[locale]}
          </p>
        </div>
      </section>

      {/* Car or train, as a count of hand-offs */}
      <section className="section-y bg-palm-soft/40" aria-labelledby="jtm-train">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="jtm-train" className="text-h2 text-balance text-ink">
              {content.train.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">
              {content.train.lead[locale]}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {content.train.rows.map((row, rowIndex) => {
              const ModeIcon = rowIndex === 0 ? TrainFrontIcon : CarFrontIcon;
              return (
                <div
                  key={row.mode.en}
                  className="grid gap-5 rounded-2xl bg-card p-6 ring-1 ring-ink/8 lg:grid-cols-[12rem_minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center lg:gap-8"
                >
                  <div className="flex items-center gap-3">
                    <ModeIcon aria-hidden className="size-5 shrink-0 text-palm rtl:-scale-x-100" />
                    <h3 className="text-h4 text-ink">{row.mode[locale]}</h3>
                    <span className="numeric ms-auto text-xs font-semibold text-palm lg:hidden">
                      {row.legs.length} {content.train.legsLabel[locale]}
                    </span>
                  </div>
                  <ol role="list" className="flex flex-wrap items-center gap-y-2">
                    {row.legs.map((leg, index) => (
                      <li key={leg.en} className="flex items-center">
                        {index > 0 ? (
                          <span aria-hidden className="mx-1.5 h-0.5 w-5 bg-palm/40" />
                        ) : null}
                        <span className="rounded-full bg-palm-soft px-3 py-1.5 text-xs font-semibold text-palm-deep">
                          {leg[locale]}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {row.verdict[locale]}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{content.train.footnote[locale]}</p>
        </div>
      </section>

      {/* The return: the convergence reversed */}
      <section className="section-y bg-background" aria-labelledby="jtm-return">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="jtm-return" className="text-h2 text-balance text-ink">
              {content.returnTrip.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">
              {content.returnTrip.lead[locale]}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-sand p-6 text-center">
            <h3 className="text-h4 text-ink">{content.returnTrip.start.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {content.returnTrip.start.detail[locale]}
            </p>
          </div>

          <Convergence split className="hidden md:block" />
          <div aria-hidden className="mx-auto h-8 w-0.5 bg-palm md:hidden" />

          <div className="grid gap-4 md:grid-cols-2 md:gap-12">
            {content.returnTrip.branches.map((branch) => (
              <div key={branch.title.en} className="rounded-2xl bg-card p-6 ring-1 ring-ink/8">
                <h3 className="text-h4 text-ink">{branch.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {branch.detail[locale]}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-ink">
              {content.returnTrip.together.title[locale]}.{" "}
            </strong>
            {content.returnTrip.together.detail[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="jtm-quotation">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 id="jtm-quotation" className="text-h2 text-balance text-ink">
                {content.quotation.heading[locale]}
              </h2>
              <p className="text-lead mt-4 text-pretty text-muted-foreground">
                {content.quotation.lead[locale]}
              </p>
            </div>
            <ol role="list" className="flex flex-col">
              {content.quotation.items.map((item, index) => (
                <li key={item.en} className="flex gap-4 border-t border-ink/10 py-5 last:pb-0">
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

      <section className="section-y bg-background" aria-labelledby="jtm-faq">
        <div className="site-container">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="jtm-faq"
            faqs={faqs}
            layout="split"
          />
        </div>
      </section>

      {/* CTA inside an elliptical arch — the hero's shape, closing the page */}
      <section className="bg-background pt-4" aria-labelledby="jtm-cta">
        <div className="site-container">
          <div className="mx-auto max-w-3xl rounded-t-[50%_7rem] bg-palm-deep px-6 pt-20 pb-14 text-center sm:px-12 sm:pt-24">
            <p className="text-eyebrow text-palm-soft">{content.cta.eyebrow[locale]}</p>
            <h2
              id="jtm-cta"
              className="text-h2 mx-auto mt-4 max-w-xl text-balance text-white"
            >
              {content.cta.heading[locale]}
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-xl text-pretty text-white/80">
              {content.cta.body[locale]}
            </p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-palm-deep transition-colors hover:bg-palm-soft"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-label={relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks locale={locale} heading={relatedHeading[locale]} links={content.related} />
        </div>
      </section>
    </>
  );
}
