import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DoorOpenIcon,
  ExternalLinkIcon,
  FootprintsIcon,
  PlaneLandingIcon,
  ShieldCheckIcon,
  TrainFrontIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { makkah as content } from "@/lib/content/makkah-region/makkah";
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
}: PageProps<"/[locale]/makkah">): Promise<Metadata> {
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

/** Home → Makkah. A city hub, at the same depth as Riyadh and Jeddah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };
const wayIcons = { jed: PlaneLandingIcon, tif: PlaneLandingIcon, train: TrainFrontIcon } as const;
const optionIcons = [DoorOpenIcon, FootprintsIcon] as const;

/**
 * Makkah.
 *
 * Design concept — "arrival and journey coordination". Makkah has no airport,
 * so the page is built around **how you get in** and **how you move on**:
 *
 * - **A night hero**: the International Space Station photograph of Jeddah,
 *   Makkah and Taif lit up at night — the three places a Makkah journey joins
 *   — with the content centred and the **three arrival pathways** set into the
 *   foot of the hero as linked panels. No other hero carries its signature
 *   component inside it.
 * - The entry notice keeps the cluster's localised emphasis (heavier in
 *   English, one plain line plus the seasonal rule in Arabic) and links to the
 *   full rules on Jeddah→Makkah rather than repeating them.
 * - A photo-split station section, a stacked hotel-access list, a three-card
 *   "inside Makkah" row and an **onward table** that becomes cards on mobile.
 * - CTA: an ink band with a brass hairline frame.
 */
export default async function MakkahPage({ params }: PageProps<"/[locale]/makkah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const train = image(content.trainImageKey);
  const isArabic = locale === "ar";
  const entry = content.entry;

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

      {/* Night hero with the arrival pathways set into its foot */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="mak-title">
        <Image
          src={photo.src}
          alt={altText(photo, locale)}
          width={photo.width}
          height={photo.height}
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 size-full object-cover opacity-70"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/90" />

        <div className="site-container pt-6 pb-10 lg:pb-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />
          <div className="mx-auto mt-12 max-w-3xl text-center lg:mt-16">
            <p className="text-eyebrow text-brass">{content.hero.eyebrow[locale]}</p>
            <h1 id="mak-title" className="text-display mt-4 text-balance text-white">
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 text-pretty text-white/80">{content.hero.lead[locale]}</p>
            <p className="mx-auto mt-6 inline-flex max-w-2xl items-start gap-2 rounded-xl bg-white/8 px-4 py-3 text-start text-sm leading-relaxed text-white/85 ring-1 ring-white/15">
              <ShieldCheckIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-brass" />
              {content.hero.answer[locale]}
            </p>
          </div>

          <h2 id="mak-arrivals" className="sr-only">
            {content.arrivals.heading[locale]}
          </h2>
          <ol role="list" className="mt-12 grid gap-3 md:grid-cols-3 lg:mt-16">
            {content.arrivals.ways.map((way, index) => {
              const Icon = wayIcons[way.id as keyof typeof wayIcons] ?? PlaneLandingIcon;
              const target = way.link?.routeKey
                ? href(locale, way.link.routeKey)
                : `#${way.link?.anchor ?? ""}`;
              return (
                <li key={way.id} className="flex flex-col rounded-2xl bg-white/8 p-5 ring-1 ring-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5">
                    <span className="numeric grid size-7 place-items-center rounded-full bg-brass text-xs font-bold text-ink">
                      {index + 1}
                    </span>
                    <span className="text-eyebrow text-brass">{way.label[locale]}</span>
                    <Icon aria-hidden className="ms-auto size-5 text-white/60 rtl:-scale-x-100" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{way.title[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">{way.detail[locale]}</p>
                  {way.link ? (
                    <Link
                      href={target}
                      className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass hover:text-white"
                    >
                      {way.link.label[locale]}
                      <ArrowUpRightIcon aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Entry notice: same facts and policy, localised emphasis */}
      <section className={isArabic ? "bg-background" : "bg-sand"} aria-labelledby="mak-entry">
        <div className="site-container py-12 lg:py-16">
          <h2 id="mak-entry" className={isArabic ? "text-h4 text-ink" : "text-h3 text-balance text-ink"}>
            {entry.heading[locale]}
          </h2>
          {isArabic ? (
            <div className="mt-4 max-w-3xl border-s-2 border-palm/40 ps-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{entry.allYear[locale]}</p>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-ink">{entry.seasonal[locale]}</p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-ink">{entry.policy[locale]}</p>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <p className="text-[0.975rem] leading-relaxed text-ink">{entry.allYear[locale]}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{entry.seasonal[locale]}</p>
              <p className="rounded-xl border-s-4 border-palm bg-white p-4 text-sm font-medium leading-relaxed text-ink md:col-span-2">
                {entry.policy[locale]}
              </p>
            </div>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <Link
              href={href(locale, "jeddahToMakkah")}
              className="text-sm font-semibold text-palm-deep underline decoration-palm/40 underline-offset-4 hover:decoration-palm-deep"
            >
              {entry.linkLabel[locale]}
            </Link>
            <a
              href={entry.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="ar"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-palm-deep underline decoration-palm/40 underline-offset-4 hover:decoration-palm-deep"
            >
              {entry.officialLabel[locale]}
              <ExternalLinkIcon aria-hidden className="size-3.5" />
            </a>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{entry.officialNote[locale]}</p>
        </div>
      </section>

      {/* The station, with its photograph */}
      <section id="makkah-station" className="section-y scroll-mt-24 bg-background" aria-labelledby="mak-station">
        <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
            <Image
              src={train.src}
              alt={altText(train, locale)}
              width={train.width}
              height={train.height}
              placeholder="blur"
              blurDataURL={train.blurDataURL}
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="size-full object-cover"
            />
          </div>
          <div>
            <h2 id="mak-station" className="text-h2 text-balance text-ink">
              {content.station.heading[locale]}
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              {content.station.paragraphs.map((p) => (
                <p key={p.en} className="text-body text-muted-foreground">
                  {p[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotel access, stacked */}
      <section className="bg-palm-soft/40" aria-labelledby="mak-hotels">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-20">
          <div>
            <h2 id="mak-hotels" className="text-h2 text-balance text-ink">
              {content.hotels.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.hotels.lead[locale]}</p>
          </div>
          <div>
            <ul role="list" className="flex flex-col gap-3">
              {content.hotels.options.map((option, index) => {
                const Icon = optionIcons[index] ?? DoorOpenIcon;
                return (
                  <li key={option.title.en} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/8">
                    <Icon aria-hidden className="mt-0.5 size-6 shrink-0 text-palm rtl:-scale-x-100" />
                    <div>
                      <h3 className="text-h4 text-ink">{option.title[locale]}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{option.detail[locale]}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-sm font-medium leading-relaxed text-ink/85">{content.hotels.note[locale]}</p>
          </div>
        </div>
      </section>

      {/* Inside Makkah */}
      <section className="section-y bg-background" aria-labelledby="mak-within">
        <div className="site-container">
          <h2 id="mak-within" className="text-h2 text-balance text-ink">
            {content.within.heading[locale]}
          </h2>
          <ul role="list" className="mt-8 grid gap-4 md:grid-cols-3">
            {content.within.items.map((item) => (
              <li key={item.title.en} className="rounded-2xl border-t-4 border-brass bg-card p-6 ring-1 ring-ink/8">
                <h3 className="text-h4 text-ink">{item.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Onward table */}
      <section className="section-y bg-sand" aria-labelledby="mak-onward">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="mak-onward" className="text-h2 text-balance text-ink">
              {content.onward.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.onward.lead[locale]}</p>
          </div>
          <table className="mt-10 w-full border-collapse text-start text-sm max-md:block">
            <thead className="max-md:sr-only">
              <tr className="border-b-2 border-ink/20">
                <th scope="col" className="text-eyebrow py-3 pe-6 text-start text-palm">{isArabic ? "الوجهة" : "To"}</th>
                <th scope="col" className="text-eyebrow py-3 pe-6 text-start text-palm">{isArabic ? "المسافة" : "Distance"}</th>
                <th scope="col" className="text-eyebrow py-3 text-start text-palm">{isArabic ? "ما ينبغي معرفته" : "What to know"}</th>
              </tr>
            </thead>
            <tbody className="max-md:flex max-md:flex-col max-md:gap-3">
              {content.onward.rows.map((row) => (
                <tr key={row.to.en} className="border-b border-ink/10 align-top max-md:block max-md:rounded-2xl max-md:border-0 max-md:bg-white max-md:p-5">
                  <th scope="row" className="py-5 pe-6 text-start text-[0.95rem] font-semibold text-ink max-md:block max-md:p-0 md:w-[26%]">
                    {row.to[locale]}
                  </th>
                  <td className="numeric py-5 pe-6 font-semibold text-palm-deep max-md:block max-md:p-0 max-md:pt-1 md:w-[18%]">
                    {row.distance[locale]}
                  </td>
                  <td className="py-5 leading-relaxed text-muted-foreground max-md:block max-md:p-0 max-md:pt-2">
                    {row.note[locale]}
                    {row.link ? (
                      <Link
                        href={href(locale, row.link.routeKey)}
                        className="group ms-1 inline-flex items-center gap-1 font-semibold text-palm hover:text-palm-deep"
                      >
                        {row.link.label[locale]}
                        <ArrowUpRightIcon aria-hidden className="size-3.5 rtl:-scale-x-100" />
                      </Link>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 text-xs text-muted-foreground">{content.onward.footnote[locale]}</p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="mak-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="mak-faq" faqs={content.faqs} layout="split" />
        </div>
      </section>

      <section className="bg-sand" aria-labelledby="mak-quotation">
        <div className="site-container py-12 lg:py-14">
          <h2 id="mak-quotation" className="text-h4 text-ink">
            {content.quotation.heading[locale]}
          </h2>
          <ol role="list" className="mt-5 grid gap-4 md:grid-cols-3">
            {content.quotation.items.map((item, index) => (
              <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden className="numeric font-heading text-lg leading-none text-brass-deep">
                  {index + 1}
                </span>
                {item[locale]}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA: an ink band inside a brass hairline frame */}
      <section className="bg-background py-14 lg:py-20" aria-labelledby="mak-cta">
        <div className="site-container">
          <div className="rounded-3xl bg-ink p-2">
            <div className="rounded-[1.25rem] border border-brass/40 px-6 py-12 text-center sm:px-12">
              <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
              <h2 id="mak-cta" className="text-h2 mx-auto mt-4 max-w-xl text-balance text-white">
                {content.cta.heading[locale]}
              </h2>
              <p className="text-lead mx-auto mt-5 max-w-xl text-pretty text-white/75">{content.cta.body[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
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
