import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, CheckIcon, MinusIcon, ShieldAlertIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { najran as content } from "@/lib/content/najran-region/najran";
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
}: PageProps<"/[locale]/najran">): Promise<Metadata> {
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

/** Home → Najran: a city hub, level with the other hubs. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

/**
 * Najran.
 *
 * Design concept — "one city, two banks". Wadi Najran runs through the city
 * and splits it north and south, so the signature is a **valley band**: two
 * sand banks either side of a palm-green river of a band, with the one
 * service line set across it. The hero carries the city's other signature,
 * mud-brick courses, as horizontal brass rules.
 *
 * Unlike the Abha contours, the Jazan sea-to-mountain line or the Dammam
 * coastline:
 * - a sand hero with coursed horizontal rules and the Imarah Palace photo;
 * - the valley band (stacked on phones);
 * - one city section, photo and text, with a ruled landmark list;
 * - a white scope card with the border and restricted-area note;
 * - an ink "beyond the city" band as a ruled list (context only);
 * - split FAQ and a palm-deep CTA.
 */
export default async function NajranPage({ params }: PageProps<"/[locale]/najran">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const cityPhoto = image(content.city.imageKey);

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

      {/* Hero: sand with mud-brick courses */}
      <section className="relative isolate overflow-hidden bg-sand" aria-labelledby="njr-title">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 end-0 -z-10 w-2/3 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_26px,oklch(0.72_0.115_79/0.22)_26px,oklch(0.72_0.115_79/0.22)_28px)]"
        />
        <div className="site-container pt-10 pb-12 lg:pt-14 lg:pb-16">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <p className="text-eyebrow text-palm-deep">{content.hero.eyebrow[locale]}</p>
              <h1 id="njr-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-ink/75">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature: the valley band */}
      <section className="bg-background pt-16 pb-4 lg:pt-20" aria-labelledby="njr-valley">
        <div className="site-container">
          <h2 id="njr-valley" className="text-eyebrow text-brass-deep">{content.valley.heading[locale]}</h2>
          <div className="mt-5 overflow-hidden rounded-3xl ring-1 ring-ink/8">
            <p className="bg-sand px-7 py-5 font-heading text-2xl text-ink">{content.valley.north[locale]}</p>
            <div className="relative isolate bg-palm-deep px-7 py-6">
              <span aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-0.5 bg-brass/40" />
              <p className="flex items-center gap-2 text-[0.975rem] font-semibold text-white">
                <CheckIcon aria-hidden className="size-5 shrink-0 text-brass" />
                <span className="bg-palm-deep pe-3">{content.valley.service[locale]}</span>
              </p>
            </div>
            <p className="bg-sand px-7 py-5 font-heading text-2xl text-ink">{content.valley.south[locale]}</p>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">{content.valley.caption[locale]}</p>
        </div>
      </section>

      {/* The city */}
      <section className="section-y bg-background" aria-labelledby="njr-city">
        <div className="site-container">
          <article id={content.city.id} className="grid scroll-mt-24 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
              <Image
                src={cityPhoto.src}
                alt={altText(cityPhoto, locale)}
                width={cityPhoto.width}
                height={cityPhoto.height}
                placeholder="blur"
                blurDataURL={cityPhoto.blurDataURL}
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="size-full object-cover"
              />
            </div>
            <div>
              <p className="text-eyebrow text-palm">{content.city.role[locale]}</p>
              <h2 id="njr-city" className="text-h2 mt-3 text-ink">
                {content.city.heading[locale]}
              </h2>
              {content.city.paragraphs.map((p) => (
                <p key={p.en} className="text-body mt-4 text-muted-foreground">
                  {p[locale]}
                </p>
              ))}
              <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                {content.city.landmarks.map((l) => (
                  <div key={l.name.en} className="grid gap-1 py-3 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-4">
                    <dt className="font-heading text-lg text-ink">{l.name[locale]}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">{l.detail[locale]}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-s-2 border-palm ps-4 text-[0.975rem] leading-relaxed text-ink/85">
                {content.city.service[locale]}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Scope: what is and is not offered */}
      <section className="bg-palm-soft/60" aria-labelledby="njr-scope">
        <div className="site-container py-14 lg:py-16">
          <div className="grid gap-6 rounded-3xl bg-white p-7 ring-1 ring-ink/8 sm:p-9 md:grid-cols-2 md:gap-12">
            <div>
              <h2 id="njr-scope" className="text-h3 text-ink">{content.scope.heading[locale]}</h2>
              <ul role="list" className="mt-5 flex flex-col gap-3">
                {content.scope.offered.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-[0.975rem] text-ink">
                    <CheckIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-palm" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-ink/10 pt-6 md:border-s md:border-t-0 md:ps-12 md:pt-0">
              <h3 className="text-h4 text-ink">{content.scope.notOfferedHeading[locale]}</h3>
              <ul role="list" className="mt-4 flex flex-col gap-2.5">
                {content.scope.notOffered.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <MinusIcon aria-hidden className="mt-0.5 size-4 shrink-0" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 flex items-start gap-3 rounded-2xl border-s-4 border-brass bg-white/70 p-5 text-sm leading-relaxed text-ink/80">
            <ShieldAlertIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-brass-deep" />
            {content.scope.restricted[locale]}
          </p>
        </div>
      </section>

      {/* Beyond the city: context only */}
      <section className="bg-ink" aria-labelledby="njr-context">
        <div className="site-container py-14 lg:py-16">
          <div className="max-w-3xl">
            <h2 id="njr-context" className="text-h2 text-balance text-white">
              {content.context.heading[locale]}
            </h2>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-white/70">{content.context.lead[locale]}</p>
          </div>
          <div className="mt-8 divide-y divide-white/12 border-y border-white/12">
            {content.context.places.map((place) => (
              <div key={place.id} className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                <div className="shrink-0 sm:w-72">
                  <h3 className="font-heading text-xl text-white">{place.name[locale]}</h3>
                  <p className="numeric mt-1 text-sm font-semibold text-brass">{place.marker[locale]}</p>
                </div>
                <p className="text-sm leading-relaxed text-white/70">{place.detail[locale]}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/50">{content.context.footnote[locale]}</p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="njr-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="njr-faq" faqs={content.faqs} layout="split" />
          <div className="mt-12 grid gap-4 border-t border-ink/10 pt-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-16">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ul role="list" className="flex flex-col gap-2.5">
              {content.quotation.items.map((item) => (
                <li key={item.en} className="border-s-2 border-brass/60 ps-4 text-sm leading-relaxed text-muted-foreground">
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA: palm-deep with a brass valley line */}
      <section className="relative isolate overflow-hidden bg-palm-deep" aria-labelledby="njr-cta">
        <span aria-hidden className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-0.5 bg-brass/40" />
        <div className="site-container flex flex-col gap-7 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
            <h2 id="njr-cta" className="text-h2 mt-3 text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-white/80">{content.cta.body[locale]}</p>
          </div>
          <Link
            href={href(locale, "getQuote")}
            className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-white lg:self-auto"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>

      <section className="section-y bg-background" aria-label={content.relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks locale={locale} heading={content.relatedHeading[locale]} links={content.related} />
        </div>
      </section>
    </>
  );
}
