import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowDownIcon, ArrowRightIcon, HotelIcon, PlaneLandingIcon, ShieldAlertIcon, TrainFrontIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { dammam as content } from "@/lib/content/eastern-province/dammam";
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
}: PageProps<"/[locale]/dammam">): Promise<Metadata> {
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

/** Home → Dammam, Al Khobar & Dhahran: a city hub, level with Riyadh and Jeddah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * Dammam, Al Khobar and Dhahran.
 *
 * Design concept — "one coastline, three cities". The page's job is to keep
 * three closely connected cities apart, so the signature component is a
 * **coastline strip**: the airport inland, then Dammam, Dhahran and Al Khobar
 * as stops on a brass line, each with its distance from the airport and a
 * link down to its own section (#dammam, #dhahran, #al-khobar).
 *
 * Unlike the Madinah compass, the AlUla layers or the Yanbu columns:
 * - a sand hero with a wide corniche photograph, the strip docked beneath it
 *   (horizontal from md, vertical with the line on the start edge on phones);
 * - an ink airport band with the three distances set as a ruled figure list;
 * - three alternating photograph/text city rows, each anchored, each with its
 *   own boxed caveat (controlled areas in Dhahran, the causeway at Al Khobar);
 * - a palm-soft hotel band, split FAQ, and a palm-deep CTA with a brass line.
 */
export default async function DammamPage({ params }: PageProps<"/[locale]/dammam">) {
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

      {/* Hero: sand, the corniche photograph, the coastline strip docked beneath */}
      <section className="bg-sand" aria-labelledby="dmm-title">
        <div className="site-container pt-10 pb-6 lg:pt-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <div>
              <p className="text-eyebrow text-palm-deep">{content.hero.eyebrow[locale]}</p>
              <h1 id="dmm-title" className="text-display mt-4 text-balance text-ink">
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
            <div className="relative aspect-16/10 overflow-hidden rounded-3xl">
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

        {/* Signature: the coastline strip */}
        <div className="site-container pb-12 lg:pb-16">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/8 sm:p-8">
            <h2 className="text-eyebrow text-brass-deep">{content.coastline.heading[locale]}</h2>
            <ol role="list" className="relative mt-6 grid gap-6 md:grid-cols-4 md:gap-4">
              {/* The brass line: vertical on phones, horizontal from md */}
              <span aria-hidden className="absolute start-[7px] top-2 bottom-2 w-0.5 bg-brass/50 md:start-2 md:end-2 md:top-[7px] md:bottom-auto md:h-0.5 md:w-auto" />
              {content.coastline.stops.map((stop, index) => (
                <li key={stop.name.en} className="relative ps-8 md:ps-0 md:pt-8">
                  <span
                    aria-hidden
                    className={
                      index === 0
                        ? "absolute start-0 top-1 size-4 rounded-full border-2 border-ink bg-white md:top-0"
                        : "absolute start-0 top-1 size-4 rounded-full bg-brass ring-4 ring-white md:top-0"
                    }
                  />
                  {stop.anchor ? (
                    <a
                      href={`#${stop.anchor}`}
                      className="group inline-flex items-center gap-1 font-heading text-xl text-ink hover:text-palm-deep"
                    >
                      {stop.name[locale]}
                      <ArrowDownIcon aria-hidden className="size-4 text-palm transition-transform group-hover:translate-y-0.5" />
                    </a>
                  ) : (
                    <p className="font-heading text-xl text-ink">{stop.name[locale]}</p>
                  )}
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{stop.caption[locale]}</p>
                  {stop.fromAirport ? (
                    <p className="numeric mt-2 inline-flex rounded-full bg-sand px-2.5 py-0.5 text-xs font-semibold text-ink/80">
                      {stop.fromAirport[locale]}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-muted-foreground">{content.coastline.footnote[locale]}</p>
          </div>
        </div>
      </section>

      {/* Airport band */}
      <section className="bg-ink" aria-labelledby="dmm-airport">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16 lg:py-16">
          <div>
            <PlaneLandingIcon aria-hidden className="size-8 text-brass rtl:-scale-x-100" />
            <h2 id="dmm-airport" className="text-h2 mt-4 text-balance text-white">
              {content.airport.heading[locale]}
            </h2>
            {content.airport.paragraphs.map((p) => (
              <p key={p.en} className="mt-4 text-[0.975rem] leading-relaxed text-white/75">
                {p[locale]}
              </p>
            ))}
            <p className="mt-6 flex items-start gap-2.5 border-t border-white/12 pt-5 text-sm leading-relaxed text-white/60">
              <TrainFrontIcon aria-hidden className="mt-0.5 size-4 shrink-0" />
              {content.airport.railNote[locale]}
            </p>
          </div>
          <dl className="self-center divide-y divide-white/12 border-y border-white/12">
            {content.airport.distances.map((d) => (
              <div key={d.label.en} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-white/70">{d.label[locale]}</dt>
                <dd className="numeric font-heading text-3xl text-brass">{d.value[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The three cities, each anchored */}
      <section className="section-y bg-background" aria-labelledby="dmm-cities">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="dmm-cities" className="text-h2 text-balance text-ink">
              {content.cities.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.cities.lead[locale]}</p>
          </div>
          <div className="mt-12 flex flex-col gap-14 lg:gap-20">
            {content.cities.sections.map((city, index) => {
              const cityPhoto = image(city.imageKey);
              const portrait = cityPhoto.height > cityPhoto.width;
              return (
                <article
                  key={city.id}
                  id={city.id}
                  aria-labelledby={`dmm-city-${city.id}`}
                  className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-3xl ${portrait ? "aspect-4/5 max-w-md" : "aspect-4/3"} ${index % 2 === 1 ? "lg:order-2 lg:justify-self-end" : ""}`}
                  >
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
                    <p className="text-eyebrow text-palm">{city.role[locale]}</p>
                    <h3 id={`dmm-city-${city.id}`} className="text-h2 mt-3 text-ink">
                      {city.name[locale]}
                    </h3>
                    {city.paragraphs.map((p) => (
                      <p key={p.en} className="text-body mt-4 text-muted-foreground">
                        {p[locale]}
                      </p>
                    ))}
                    {city.note ? (
                      <p className="mt-6 flex items-start gap-3 rounded-2xl border-s-4 border-brass bg-sand/70 p-5 text-sm leading-relaxed text-ink/80">
                        <ShieldAlertIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-brass-deep" />
                        {city.note[locale]}
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="bg-palm-soft/60" aria-labelledby="dmm-hotels">
        <div className="site-container grid gap-8 py-14 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-12 lg:py-16">
          <HotelIcon aria-hidden className="size-9 text-palm-deep" />
          <div>
            <h2 id="dmm-hotels" className="text-h2 text-balance text-ink">
              {content.hotels.heading[locale]}
            </h2>
            {content.hotels.paragraphs.map((p) => (
              <p key={p.en} className="text-body mt-4 text-ink/80">
                {p[locale]}
              </p>
            ))}
          </div>
          <p className="self-end rounded-2xl bg-white p-6 text-sm leading-relaxed text-ink/80 ring-1 ring-ink/8">
            {content.hotels.compound[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="dmm-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="dmm-faq" faqs={content.faqs} layout="split" />
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

      {/* CTA: palm-deep with the brass coastline line */}
      <section className="relative isolate overflow-hidden bg-palm-deep" aria-labelledby="dmm-cta">
        <span aria-hidden className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-0.5 bg-brass/40" />
        <div className="site-container flex flex-col gap-7 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
            <h2 id="dmm-cta" className="text-h2 mt-3 text-balance text-white">
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

      <section className="section-y bg-background" aria-label={relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks locale={locale} heading={relatedHeading[locale]} links={content.related} />
        </div>
      </section>
    </>
  );
}
