import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { unaizah as content } from "@/lib/content/qassim-region/unaizah";
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
}: PageProps<"/[locale]/unaizah">): Promise<Metadata> {
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

/** Home → Unaizah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

/**
 * Structured data: WebPage, BreadcrumbList, a Service node naming only the
 * owner-confirmed Unaizah services (no offers, prices or ratings) and
 * FAQPage.
 */
function unaizahJsonLd(locale: Locale, imageUrl: string) {
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
 * Najdi crenellations: a row of stepped triangles, drawn with a repeating
 * conic gradient. Decorative only.
 */
function Crenellation({ className, color }: { className?: string; color: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none block h-4 w-full ${className ?? ""}`}
      style={{
        backgroundImage: `conic-gradient(from -45deg at 50% 100%, ${color} 90deg, transparent 0)`,
        backgroundSize: "22px 11px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
      }}
    />
  );
}

/**
 * Unaizah.
 *
 * Design concept — "sandstone and crenellations". The town's identity is its
 * Najdi heritage and its place on the caravan road, so the page is built
 * from sandstone tones, an arched photograph and the stepped parapets of
 * Najdi buildings. A services section follows the hero with exactly the
 * owner-confirmed services (town, hotels, Unaizah ↔ Buraydah), on arch-topped
 * cards, and a short "not offered" row.
 *
 * Unlike the Buraydah market panorama or the Tabuk full-bleed hero:
 * - a sandstone hero with the photograph in a tall arch and a fact row;
 * - a crenellation band, then a "caravan road" line (Iraq → Unaizah → Makkah);
 * - Al-Musawkaf as an ink panel crowned with crenellations, with a festival
 *   callout; Al-Ghada as an open two-column spread;
 * - a numbered heritage list, an orientation panel, enquiry, FAQ, related.
 */
export default async function UnaizahPage({ params }: PageProps<"/[locale]/unaizah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const hero = image(content.imageKey);
  const road = [
    { en: "Iraq", ar: "العراق" },
    { en: "Unaizah", ar: "عنيزة" },
    { en: "Makkah", ar: "مكة المكرمة" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(unaizahJsonLd(locale, hero.src)) }}
      />

      {/* Hero: sandstone, arched photograph, fact row */}
      <section className="relative isolate overflow-hidden bg-sand" aria-labelledby="unz-title">
        <div className="site-container pt-10 pb-12 lg:pt-14 lg:pb-16">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
            <div>
              <p className="text-eyebrow text-brass-deep">{content.hero.eyebrow[locale]}</p>
              <h1 id="unz-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-ink/75">{content.hero.lead[locale]}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
                {content.facts.map((fact) => (
                  <div key={fact.label.en}>
                    <dt className="text-xs text-muted-foreground">{fact.label[locale]}</dt>
                    <dd className="numeric mt-1 font-heading text-xl leading-tight text-ink sm:text-2xl">{fact.value[locale]}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">{content.factsSource[locale]}</p>
            </div>
            <div className="mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl ring-8 ring-white/70">
                <Image
                  src={hero.src}
                  alt={altText(hero, locale)}
                  width={hero.width}
                  height={hero.height}
                  placeholder="blur"
                  blurDataURL={hero.blurDataURL}
                  priority
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Crenellation color="var(--color-sand-deep)" />
      </section>

      {/* Confirmed services: arch-topped cards */}
      <section className="section-y bg-background" aria-labelledby="unz-services">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="unz-services" className="text-h2 text-balance text-ink">{content.services.heading[locale]}</h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.services.lead[locale]}</p>
          </div>
          <ul role="list" className="mt-10 grid gap-4 md:grid-cols-3">
            {content.services.items.map((item) => (
              <li key={item.id} id={item.id} className="flex scroll-mt-24 flex-col rounded-t-[2.5rem] rounded-b-2xl bg-sand p-7 pt-9 ring-1 ring-sand-deep">
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

      {/* The caravan road */}
      <section className="section-y bg-background" aria-labelledby="unz-caravan">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <h2 id="unz-caravan" className="text-h2 text-balance text-ink">{content.caravan.heading[locale]}</h2>
            <div>
              {content.caravan.paragraphs.map((p) => (
                <p key={p.en} className="text-body mt-4 text-muted-foreground first:mt-0">{p[locale]}</p>
              ))}
            </div>
          </div>
          <ol role="list" className="relative mt-12 flex items-start justify-between">
            <span aria-hidden className="absolute inset-x-6 top-[11px] h-0.5 bg-brass/50" />
            {road.map((stop, index) => (
              <li key={stop.en} className="relative flex flex-col items-center text-center">
                <span
                  aria-hidden
                  className={index === 1 ? "size-6 rounded-full bg-palm ring-4 ring-background" : "size-6 rounded-full border-2 border-brass bg-background"}
                />
                <span className={index === 1 ? "mt-3 font-heading text-2xl text-ink" : "mt-3 font-heading text-lg text-muted-foreground"}>
                  {stop[locale]}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Al-Musawkaf: ink panel crowned with crenellations */}
      <section className="bg-background pb-16 lg:pb-20" aria-labelledby="unz-musawkaf">
        <div className="site-container">
          <Crenellation color="var(--color-ink)" />
          <div className="grid gap-8 rounded-b-3xl bg-ink p-7 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
            <div>
              <p className="text-eyebrow text-brass">{content.musawkaf.eyebrow[locale]}</p>
              <h2 id="unz-musawkaf" className="text-h2 mt-3 text-balance text-white">{content.musawkaf.heading[locale]}</h2>
              {content.musawkaf.paragraphs.map((p) => (
                <p key={p.en} className="mt-4 text-[0.975rem] leading-relaxed text-white/75">{p[locale]}</p>
              ))}
            </div>
            <aside className="self-end rounded-2xl border border-brass/40 p-6">
              <h3 className="font-heading text-2xl text-brass">{content.musawkaf.festival.name[locale]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{content.musawkaf.festival.detail[locale]}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* Al-Ghada: open spread */}
      <section className="bg-sand" aria-labelledby="unz-ghada">
        <div className="site-container py-14 lg:py-16">
          <p className="text-eyebrow text-palm">{content.ghada.eyebrow[locale]}</p>
          <h2 id="unz-ghada" className="text-display mt-2 text-ink">{content.ghada.heading[locale]}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-12">
            {content.ghada.paragraphs.map((p) => (
              <p key={p.en} className="text-body text-ink/80">{p[locale]}</p>
            ))}
          </div>
        </div>
        <Crenellation color="var(--color-background)" className="rotate-180" />
      </section>

      {/* Najdi heritage: numbered list */}
      <section className="section-y bg-background" aria-labelledby="unz-heritage">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="unz-heritage" className="text-h2 text-balance text-ink">{content.architecture.heading[locale]}</h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.architecture.lead[locale]}</p>
          </div>
          <ol role="list" className="mt-8 grid gap-6 md:grid-cols-2">
            {content.architecture.items.map((item, index) => (
              <li key={item.name.en} className="flex gap-5 border-t-2 border-brass/50 pt-5">
                <span className="numeric font-heading text-4xl leading-none text-brass-deep">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-h4 text-ink">{item.name[locale]}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.detail[locale]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Orientation only */}
      <section className="bg-palm-soft/60" aria-labelledby="unz-practical">
        <div className="site-container py-12 lg:py-14">
          <h2 id="unz-practical" className="text-h3 text-ink">{content.practical.heading[locale]}</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.practical.items.map((item) => (
              <div key={item.label.en} className="rounded-2xl bg-white p-5 ring-1 ring-ink/8">
                <dt className="flex items-baseline justify-between gap-4">
                  <span className="font-heading text-xl text-ink">{item.label[locale]}</span>
                  <span className="numeric text-sm font-semibold text-brass-deep">{item.value[locale]}</span>
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{item.detail[locale]}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">{content.practical.note[locale]}</p>
        </div>
      </section>

      {/* Enquiry: no promise of service */}
      <section className="section-y bg-background" aria-labelledby="unz-enquiry">
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 id="unz-enquiry" className="text-h2 text-balance text-ink">{content.enquiry.heading[locale]}</h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.enquiry.lead[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-6 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>
          <div>
            <ol role="list" className="flex flex-col gap-3">
              {content.enquiry.steps.map((step, index) => (
                <li key={step.en} className="flex gap-4 border-s-2 border-brass/60 ps-4">
                  <span className="numeric font-heading text-2xl leading-none text-brass-deep">{index + 1}</span>
                  <span className="text-sm leading-relaxed text-ink/80">{step[locale]}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-ink/70">{content.enquiry.note[locale]}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-background pt-0" aria-labelledby="unz-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="unz-faq" faqs={content.faqs} layout="split" />
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
