import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ExternalLinkIcon,
  InfoIcon,
  MapPinnedIcon,
  PlaneLandingIcon,
  TrainFrontIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { madinah as content } from "@/lib/content/madinah-region/madinah";
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
}: PageProps<"/[locale]/madinah">): Promise<Metadata> {
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

/** Home → Madinah: a city hub, at the same depth as Makkah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };
const VISIT_SAUDI_MADINAH = "https://www.visitsaudi.com/en/destinations/madinah";

/**
 * Madinah.
 *
 * Design concept — "visitor coordination around one centre". Almost every
 * Madinah journey is measured from the Prophet's Mosque, so the signature
 * component is a **distance compass**: a card of published distances from the
 * mosque, set in concentric rings and docked over the corner of a square,
 * sand-framed photograph of Quba Mosque.
 *
 * Unlike the Makkah page (night hero with arrival panels inside it) and every
 * other hub:
 * - a light hero with the photograph square-framed at the end edge and the
 *   compass overlapping it;
 * - a palm-soft visitor note quoting Visit Saudi's own wording (no Makkah-style
 *   city rule), with the source linked;
 * - airport and station as **two equal ruled columns**, then a central-area
 *   band, numbered Ziyarat tiles and an **onward card grid**;
 * - CTA: a palm band carrying the compass rings as decoration.
 */
export default async function MadinahPage({ params }: PageProps<"/[locale]/madinah">) {
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

      {/* Hero: words at the start, a framed photograph with the compass docked over it */}
      <section className="bg-background" aria-labelledby="mdn-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
              <h1 id="mdn-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>

            <div className="relative pb-24 sm:pb-16">
              <div className="ms-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl ring-[10px] ring-sand">
                <Image
                  src={photo.src}
                  alt={altText(photo, locale)}
                  width={photo.width}
                  height={photo.height}
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  priority
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="size-full object-cover"
                />
              </div>
              {/* Signature: the distance compass */}
              <div className="absolute start-0 bottom-0 w-[min(20rem,92%)] overflow-hidden rounded-2xl bg-card p-5 shadow-xl ring-1 ring-ink/10">
                <span aria-hidden className="pointer-events-none absolute -end-12 -top-12 size-40 rounded-full border border-palm/20" />
                <span aria-hidden className="pointer-events-none absolute -end-6 -top-6 size-28 rounded-full border border-palm/25" />
                <span aria-hidden className="pointer-events-none absolute end-4 top-4 size-6 rounded-full bg-palm/15" />
                <h2 className="text-eyebrow relative text-palm">{content.hero.compassTitle[locale]}</h2>
                <dl className="relative mt-3 flex flex-col divide-y divide-ink/8">
                  {content.hero.compass.map((c) => (
                    <div key={c.label.en} className="flex items-baseline justify-between gap-4 py-2">
                      <dt className="text-sm text-ink/80">{c.label[locale]}</dt>
                      <dd className="numeric font-heading text-lg text-ink">{c.value[locale]}</dd>
                    </div>
                  ))}
                </dl>
                <p className="relative mt-2 text-[0.7rem] leading-relaxed text-muted-foreground">{content.hero.compassNote[locale]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Madinah: Visit Saudi's own wording */}
      <section className="bg-palm-soft/50" aria-labelledby="mdn-visitors">
        <div className="site-container grid gap-6 py-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10 lg:py-14">
          <InfoIcon aria-hidden className="size-8 text-palm-deep" />
          <div className="max-w-3xl">
            <h2 id="mdn-visitors" className="text-h3 text-balance text-ink">
              {content.visitors.heading[locale]}
            </h2>
            <ul role="list" className="mt-4 flex flex-col gap-3">
              {content.visitors.points.map((p) => (
                <li key={p.en} className="text-[0.975rem] leading-relaxed text-ink/85">
                  {p[locale]}
                </li>
              ))}
            </ul>
            <a
              href={VISIT_SAUDI_MADINAH}
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-palm-deep underline decoration-palm/40 underline-offset-4 hover:decoration-palm-deep"
            >
              {content.visitors.linkLabel[locale]}
              <ExternalLinkIcon aria-hidden className="size-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Arrivals: two equal ruled columns */}
      <section className="section-y bg-background" aria-labelledby="mdn-arrivals">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="mdn-arrivals" className="text-h2 text-balance text-ink">
              {content.arrivals.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.arrivals.lead[locale]}</p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-0">
            {content.arrivals.columns.map((col, index) => {
              const Icon = index === 0 ? PlaneLandingIcon : TrainFrontIcon;
              return (
                <article key={col.title.en} className={index > 0 ? "md:border-s md:border-ink/12 md:ps-12" : "md:pe-12"}>
                  <Icon aria-hidden className="size-7 text-palm rtl:-scale-x-100" />
                  <h3 className="text-h3 mt-4 text-ink">{col.title[locale]}</h3>
                  {col.paragraphs.map((p) => (
                    <p key={p.en} className="text-body mt-3 text-muted-foreground">
                      {p[locale]}
                    </p>
                  ))}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* The central area */}
      <section className="bg-sand" aria-labelledby="mdn-central">
        <div className="site-container grid gap-8 py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-16">
          <div className="flex items-start gap-3">
            <MapPinnedIcon aria-hidden className="mt-1.5 size-7 shrink-0 text-palm" />
            <h2 id="mdn-central" className="text-h2 text-balance text-ink">
              {content.central.heading[locale]}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {content.central.paragraphs.map((p) => (
              <p key={p.en} className="text-body text-ink/80">
                {p[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Ziyarat */}
      <section className="section-y bg-background" aria-labelledby="mdn-ziyarat">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="mdn-ziyarat" className="text-h2 text-balance text-ink">
              {content.ziyarat.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.ziyarat.lead[locale]}</p>
          </div>
          <ol role="list" className="mt-10 grid gap-4 md:grid-cols-3">
            {content.ziyarat.sites.map((site, index) => (
              <li key={site.name.en} className="relative rounded-2xl bg-card p-6 ring-1 ring-ink/8">
                <span aria-hidden className="numeric absolute end-5 top-4 font-heading text-4xl leading-none text-palm/20">
                  {index + 1}
                </span>
                <h3 className="text-h4 text-ink">{site.name[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{site.note[locale]}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/80">{content.ziyarat.limit[locale]}</p>
        </div>
      </section>

      {/* Onward card grid */}
      <section className="section-y bg-sand" aria-labelledby="mdn-onward">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="mdn-onward" className="text-h2 text-balance text-ink">
              {content.onward.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.onward.lead[locale]}</p>
          </div>
          <ul role="list" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.onward.cards.map((card) => (
              <li key={card.to.en} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-ink/8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-h4 text-ink">{card.to[locale]}</h3>
                  <span className="numeric shrink-0 rounded-full bg-palm-soft px-2.5 py-1 text-xs font-semibold text-palm-deep">
                    {card.distance[locale]}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{card.note[locale]}</p>
                {card.link ? (
                  <Link
                    href={href(locale, card.link.routeKey)}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-palm hover:text-palm-deep"
                  >
                    {card.link.label[locale]}
                    <ArrowUpRightIcon aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">{content.onward.footnote[locale]}</p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="mdn-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="mdn-faq" faqs={content.faqs} layout="split" />
          <div className="mt-12 grid gap-4 border-t border-ink/10 pt-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-16">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ul role="list" className="flex flex-col gap-2.5">
              {content.quotation.items.map((item) => (
                <li key={item.en} className="border-s-2 border-palm/50 ps-4 text-sm leading-relaxed text-muted-foreground">
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA: a palm band carrying the compass rings */}
      <section className="relative isolate overflow-hidden bg-palm" aria-labelledby="mdn-cta">
        <span aria-hidden className="pointer-events-none absolute -end-24 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full border border-white/15" />
        <span aria-hidden className="pointer-events-none absolute -end-8 top-1/2 -z-10 size-64 -translate-y-1/2 rounded-full border border-white/20" />
        <div className="site-container flex flex-col gap-7 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-palm-soft">{content.cta.eyebrow[locale]}</p>
            <h2 id="mdn-cta" className="text-h2 mt-3 text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-white/80">{content.cta.body[locale]}</p>
          </div>
          <Link
            href={href(locale, "getQuote")}
            className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-palm-deep transition-colors hover:bg-palm-soft lg:self-auto"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
          </Link>
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
