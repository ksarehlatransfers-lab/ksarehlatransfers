import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { tabuk as content } from "@/lib/content/tabuk-region/tabuk";
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
}: PageProps<"/[locale]/tabuk">): Promise<Metadata> {
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

/** Home → Tabuk: a destination hub, level with the other city hubs. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

/**
 * Structured data for a page that offers no confirmed service.
 *
 * The shared cluster helper always adds a `Service` node, which would tell
 * search engines that a transfer service is offered in Tabuk — not yet
 * confirmed by the owner. The helper is reused unchanged and its `Service`
 * node is dropped here, leaving WebPage, BreadcrumbList and FAQPage.
 */
function tabukJsonLd(locale: Locale, imageUrl: string) {
  const data = clusterPageJsonLd({
    locale,
    routeKey: content.routeKey,
    title: content.seo.title[locale],
    description: content.seo.description[locale],
    imageUrl,
    crumbs: crumbs(locale),
    serviceName: content.hero.h1[locale],
    serviceDescription: content.seo.description[locale],
    faqEntries: content.faqs.map((faq) => ({
      question: faq.question[locale],
      answer: faq.answer[locale],
    })),
  });
  return { ...data, "@graph": data["@graph"].filter((node) => node["@type"] !== "Service") };
}

/** Horizontal sandstone strata. Decorative only. */
function Strata({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none block bg-[repeating-linear-gradient(to_bottom,oklch(0.72_0.115_79/0.28)_0,oklch(0.72_0.115_79/0.28)_2px,transparent_2px,transparent_9px,oklch(0.72_0.115_79/0.14)_9px,oklch(0.72_0.115_79/0.14)_10px,transparent_10px,transparent_22px)] ${className ?? ""}`}
    />
  );
}

/**
 * Tabuk.
 *
 * Design concept — "the northern gateway". Tabuk is the first city on the
 * old road south from the Levant, so the page reads like an editorial guide
 * rather than a service page, and it has no service line of its own: the
 * owner has not confirmed any Tabuk coverage.
 *
 * Unlike the Abha contours, the Jazan sea-to-mountain line or the Najran
 * valley band:
 * - a full-bleed hero, the headline set over the castle photograph;
 * - an ink "strata" band of four facts with sandstone rules;
 * - a castle-and-spring spread (the two stand side by side), then the
 *   mosque as a tall portrait with its text;
 * - an archival railway band built around the year 1906;
 * - the province as two typographic columns, coast and inland, context only;
 * - a three-step "how enquiries work" band that promises nothing;
 * - split FAQ and related hubs.
 */
export default async function TabukPage({ params }: PageProps<"/[locale]/tabuk">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const hero = image(content.imageKey);
  const mosque = image(content.mosque.imageKey);
  const railway = image(content.railway.imageKey);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(tabukJsonLd(locale, hero.src)) }}
      />

      {/* Hero: full-bleed castle photograph with the headline over it */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="tbk-title">
        <Image
          src={hero.src}
          alt={altText(hero, locale)}
          width={hero.width}
          height={hero.height}
          placeholder="blur"
          blurDataURL={hero.blurDataURL}
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        <div className="site-container flex min-h-[34rem] flex-col justify-between pt-10 pb-12 lg:min-h-[40rem] lg:pt-14 lg:pb-16">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />
          <div className="max-w-3xl">
            <p className="text-eyebrow text-brass">{content.hero.eyebrow[locale]}</p>
            <h1 id="tbk-title" className="text-display mt-4 text-balance text-white">
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 max-w-2xl text-pretty text-white/85">{content.hero.lead[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-brass px-6 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strata band: four facts */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="tbk-facts">
        <Strata className="absolute inset-x-0 top-0 -z-10 h-full opacity-60" />
        <div className="site-container py-12 lg:py-14">
          <h2 id="tbk-facts" className="sr-only">{content.facts.heading[locale]}</h2>
          <dl className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {content.facts.items.map((fact) => (
              <div key={fact.label.en} className="bg-ink/90 p-6">
                <dt className="text-xs font-semibold tracking-wide text-white/60">{fact.label[locale]}</dt>
                <dd className="numeric mt-2 font-heading text-2xl text-brass">{fact.value[locale]}</dd>
                <dd className="mt-2 text-sm leading-relaxed text-white/70">{fact.note[locale]}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-white/50">{content.facts.source[locale]}</p>
        </div>
      </section>

      {/* About the city */}
      <section className="section-y bg-sand" aria-labelledby="tbk-about">
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <h2 id="tbk-about" className="text-h2 text-balance text-ink">
            {content.about.heading[locale]}
          </h2>
          <div>
            {content.about.paragraphs.map((p) => (
              <p key={p.en} className="text-body mt-4 text-ink/80 first:mt-0">
                {p[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Castle and spring: a paired spread */}
      <section className="section-y bg-background" aria-labelledby="tbk-castle">
        <div className="site-container">
          <p className="text-eyebrow text-palm">{content.castle.eyebrow[locale]}</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-0">
            <article id="tabuk-castle" className="scroll-mt-24 rounded-3xl bg-sand p-7 sm:p-9 lg:rounded-e-none">
              <h2 id="tbk-castle" className="text-h2 text-ink">{content.castle.name[locale]}</h2>
              {content.castle.paragraphs.map((p) => (
                <p key={p.en} className="text-body mt-4 text-ink/80">{p[locale]}</p>
              ))}
            </article>
            <article
              id="ain-al-sukkar"
              aria-labelledby="tbk-spring"
              className="scroll-mt-24 rounded-3xl border-2 border-sand p-7 sm:p-9 lg:rounded-s-none lg:border-s-0"
            >
              <h2 id="tbk-spring" className="text-h2 text-ink">{content.spring.name[locale]}</h2>
              {content.spring.paragraphs.map((p) => (
                <p key={p.en} className="text-body mt-4 text-muted-foreground">{p[locale]}</p>
              ))}
            </article>
          </div>
        </div>
      </section>

      {/* Al-Tawbah Mosque: tall portrait with text */}
      <section className="pb-16 lg:pb-24" aria-labelledby="tbk-mosque">
        <article id="al-tawbah-mosque" className="site-container grid scroll-mt-24 items-center gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl">
            <Image
              src={mosque.src}
              alt={altText(mosque, locale)}
              width={mosque.width}
              height={mosque.height}
              placeholder="blur"
              blurDataURL={mosque.blurDataURL}
              loading="lazy"
              sizes="(min-width: 768px) 30vw, 90vw"
              className="size-full object-cover"
            />
          </div>
          <div>
            <p className="text-eyebrow text-palm">{content.mosque.eyebrow[locale]}</p>
            <h2 id="tbk-mosque" className="text-h2 mt-3 text-ink">{content.mosque.name[locale]}</h2>
            {content.mosque.paragraphs.map((p) => (
              <p key={p.en} className="text-body mt-4 text-muted-foreground">{p[locale]}</p>
            ))}
          </div>
        </article>
      </section>

      {/* The railway: archival band built around 1906 */}
      <section id="hejaz-railway" className="scroll-mt-24 bg-ink" aria-labelledby="tbk-railway">
        <div className="site-container grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-20">
          <figure>
            <div className="relative aspect-3/2 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src={railway.src}
                alt={altText(railway, locale)}
                width={railway.width}
                height={railway.height}
                placeholder="blur"
                blurDataURL={railway.blurDataURL}
                loading="lazy"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="size-full object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 text-xs text-white/50">{content.railway.caption[locale]}</figcaption>
          </figure>
          <div>
            <p className="numeric font-heading text-7xl leading-none text-brass lg:text-8xl">1906</p>
            <h2 id="tbk-railway" className="text-h2 mt-4 text-balance text-white">{content.railway.name[locale]}</h2>
            {content.railway.paragraphs.map((p) => (
              <p key={p.en} className="mt-4 text-[0.975rem] leading-relaxed text-white/75">{p[locale]}</p>
            ))}
          </div>
        </div>
      </section>

      {/* The wider province: context only */}
      <section className="section-y bg-background" aria-labelledby="tbk-province">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="tbk-province" className="text-h2 text-balance text-ink">{content.province.heading[locale]}</h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.province.lead[locale]}</p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
            {content.province.groups.map((group) => (
              <div key={group.heading.en}>
                <h3 className="text-eyebrow text-brass-deep">{group.heading[locale]}</h3>
                <dl className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {group.places.map((place) => (
                    <div key={place.name.en} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] sm:gap-4">
                      <dt className="font-heading text-xl text-ink">{place.name[locale]}</dt>
                      <dd className="text-sm leading-relaxed text-muted-foreground">{place.detail[locale]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted-foreground">{content.province.note[locale]}</p>
        </div>
      </section>

      {/* How enquiries work: no promise of service */}
      <section className="relative isolate overflow-hidden bg-sand" aria-labelledby="tbk-enquiry">
        <Strata className="absolute inset-x-0 bottom-0 -z-10 h-16" />
        <div className="site-container py-14 lg:py-16">
          <div className="max-w-3xl">
            <h2 id="tbk-enquiry" className="text-h2 text-balance text-ink">{content.enquiry.heading[locale]}</h2>
            <p className="text-lead mt-4 text-pretty text-ink/75">{content.enquiry.lead[locale]}</p>
          </div>
          <ol role="list" className="mt-10 grid gap-4 md:grid-cols-3">
            {content.enquiry.steps.map((step, index) => (
              <li key={step.title.en} className="rounded-2xl bg-white p-6 ring-1 ring-ink/8">
                <p className="numeric font-heading text-3xl text-brass-deep">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-h4 mt-3 text-ink">{step.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body[locale]}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm text-ink/70">{content.enquiry.note[locale]}</p>
          <Link
            href={href(locale, "getQuote")}
            className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="tbk-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="tbk-faq" faqs={content.faqs} layout="split" />
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
