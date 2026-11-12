import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { buraydah as content } from "@/lib/content/qassim-region/buraydah";
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
}: PageProps<"/[locale]/buraydah">): Promise<Metadata> {
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

/** Home → Buraydah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

/**
 * Structured data: WebPage, BreadcrumbList, a Service node naming only the
 * owner-confirmed Buraydah services (no offers, prices or ratings) and
 * FAQPage.
 */
function buraydahJsonLd(locale: Locale, imageUrl: string) {
  return clusterPageJsonLd({
    locale,
    routeKey: content.routeKey,
    title: content.seo.title[locale],
    description: content.seo.description[locale],
    imageUrl,
    crumbs: crumbs(locale),
    serviceName: content.serviceName[locale],
    serviceDescription: content.seo.description[locale],
    faqEntries: content.faqs.map((faq) => ({
      question: faq.question[locale],
      answer: faq.answer[locale],
    })),
  });
}

/**
 * Buraydah.
 *
 * Design concept — "the date harvest". Buraydah is the market city of
 * Al-Qassim, so the page leads with the market and its scale rather than a
 * monument. A services section follows the hero with exactly the
 * owner-confirmed services (city, ELQ airport, hotels, Buraydah ↔ Unaizah,
 * Riyadh → Buraydah) and a short "not offered" row.
 *
 * Unlike the Tabuk full-bleed hero, the Unaizah arch or the hub split heroes:
 * - headline first, then a wide panoramic market photograph with a caption;
 * - a palm-deep "harvest" band of four large brass figures;
 * - a "crossroads" section with a road-sign board of directions;
 * - a four-card culture grid, then a wide mosque photograph strip;
 * - an orientation list, a three-step enquiry, split FAQ, related links.
 */
export default async function BuraydahPage({ params }: PageProps<"/[locale]/buraydah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const hero = image(content.imageKey);
  const mosque = image(content.mosque.imageKey);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(buraydahJsonLd(locale, hero.src)) }}
      />

      {/* Hero: headline first, then the panoramic market photograph */}
      <section className="bg-sand" aria-labelledby="brd-title">
        <div className="site-container pt-10 pb-10 lg:pt-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
            <div>
              <p className="text-eyebrow text-palm-deep">{content.hero.eyebrow[locale]}</p>
              <h1 id="brd-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
            </div>
            <div>
              <p className="text-lead text-pretty text-ink/75">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
          </div>
          <figure className="mt-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl sm:aspect-[21/9]">
              <Image
                src={hero.src}
                alt={altText(hero, locale)}
                width={hero.width}
                height={hero.height}
                placeholder="blur"
                blurDataURL={hero.blurDataURL}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="size-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-muted-foreground">{content.hero.caption[locale]}</figcaption>
          </figure>
        </div>
      </section>

      {/* Confirmed services, with links where a page exists */}
      <section className="section-y bg-background" aria-labelledby="brd-services">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="brd-services" className="text-h2 text-balance text-ink">{content.services.heading[locale]}</h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.services.lead[locale]}</p>
          </div>
          <ul role="list" className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((item) => (
              <li key={item.id} id={item.id} className="flex scroll-mt-24 flex-col rounded-2xl border-t-4 border-brass bg-sand p-6">
                <h3 className="text-h4 text-balance text-ink">{item.title[locale]}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink/80">{item.detail[locale]}</p>
                {item.link ? (
                  <Link
                    href={href(locale, item.link.routeKey)}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-palm-deep hover:text-palm"
                  >
                    {item.link.label[locale]}
                    <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-ink">{content.services.notOfferedHeading[locale]}:</span>
            {content.services.notOffered.map((item) => (
              <span key={item.en} className="rounded-full bg-sand px-3 py-1 text-sm text-muted-foreground">
                {item[locale]}
              </span>
            ))}
          </div>
          <Link
            href={href(locale, "getQuote")}
            className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>

      {/* The harvest: four large figures */}
      <section className="bg-palm-deep" aria-labelledby="brd-harvest">
        <div className="site-container py-14 lg:py-20">
          <div className="max-w-3xl">
            <h2 id="brd-harvest" className="text-h2 text-balance text-white">{content.harvest.heading[locale]}</h2>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-white/80">{content.harvest.lead[locale]}</p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {content.harvest.figures.map((f) => (
              <div key={f.label.en} className="border-t border-brass/40 pt-5">
                <dt className="sr-only">{f.label[locale]}</dt>
                <dd className="numeric font-heading text-5xl leading-none text-brass lg:text-6xl">{f.value[locale]}</dd>
                <dd className="mt-3 text-sm leading-snug text-white/75">{f.label[locale]}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-xs text-white/55">{content.harvest.source[locale]}</p>
        </div>
      </section>

      {/* Crossroads: text and a road-sign board */}
      <section className="section-y bg-background" aria-labelledby="brd-crossroads">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <h2 id="brd-crossroads" className="text-h2 text-balance text-ink">{content.crossroads.heading[locale]}</h2>
            {content.crossroads.paragraphs.map((p) => (
              <p key={p.en} className="text-body mt-4 text-muted-foreground">{p[locale]}</p>
            ))}
          </div>
          <ul role="list" className="flex flex-col gap-2 self-center">
            {content.crossroads.points.map((point) => (
              <li key={point.name.en} className="flex items-center justify-between gap-4 rounded-xl bg-palm px-5 py-4 text-white">
                <span className="font-heading text-2xl">{point.name[locale]}</span>
                <span className="text-sm text-white/75">{point.detail[locale]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Around the city: four cards */}
      <section className="bg-sand" aria-labelledby="brd-culture">
        <div className="site-container py-14 lg:py-16">
          <h2 id="brd-culture" className="text-h2 text-balance text-ink">{content.culture.heading[locale]}</h2>
          <ul role="list" className="mt-8 grid gap-4 md:grid-cols-2">
            {content.culture.items.map((item) => (
              <li key={item.id} id={item.id} className="scroll-mt-24 rounded-2xl bg-white p-6 ring-1 ring-ink/8 sm:p-7">
                <p className="numeric text-xs font-semibold tracking-wide text-brass-deep">{item.eyebrow[locale]}</p>
                <h3 className="text-h4 mt-2 text-ink">{item.name[locale]}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.detail[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wide mosque photograph */}
      <figure className="bg-sand pb-14 lg:pb-16">
        <div className="site-container">
          <div className="relative aspect-[2/1] overflow-hidden rounded-3xl">
            <Image
              src={mosque.src}
              alt={altText(mosque, locale)}
              width={mosque.width}
              height={mosque.height}
              placeholder="blur"
              blurDataURL={mosque.blurDataURL}
              loading="lazy"
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="size-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground">{content.mosque.caption[locale]}</figcaption>
        </div>
      </figure>

      {/* Arriving: orientation only */}
      <section className="section-y bg-background" aria-labelledby="brd-practical">
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <h2 id="brd-practical" className="text-h2 text-balance text-ink">{content.practical.heading[locale]}</h2>
          <div>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {content.practical.items.map((item) => (
                <div key={item.name.en} className="py-4">
                  <dt className="font-heading text-xl text-ink">{item.name[locale]}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{item.detail[locale]}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted-foreground">{content.practical.note[locale]}</p>
          </div>
        </div>
      </section>

      {/* Enquiry: no promise of service */}
      <section className="bg-palm-soft/60" aria-labelledby="brd-enquiry">
        <div className="site-container py-14 lg:py-16">
          <div className="max-w-3xl">
            <h2 id="brd-enquiry" className="text-h2 text-balance text-ink">{content.enquiry.heading[locale]}</h2>
            <p className="text-lead mt-4 text-pretty text-ink/75">{content.enquiry.lead[locale]}</p>
          </div>
          <ol role="list" className="mt-8 grid gap-3 md:grid-cols-3">
            {content.enquiry.steps.map((step, index) => (
              <li key={step.en} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/8">
                <span className="numeric font-heading text-3xl leading-none text-brass-deep">{index + 1}</span>
                <span className="text-sm leading-relaxed text-ink/80">{step[locale]}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-ink/70">{content.enquiry.note[locale]}</p>
          <Link
            href={href(locale, "getQuote")}
            className="group mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="brd-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="brd-faq" faqs={content.faqs} layout="split" />
        </div>
      </section>

      <section className="section-y bg-background pt-0" aria-label={content.relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks locale={locale} heading={content.relatedHeading[locale]} links={content.related} />
        </div>
      </section>
    </>
  );
}
