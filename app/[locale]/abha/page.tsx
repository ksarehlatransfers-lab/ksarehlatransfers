import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, MinusIcon, MountainIcon, ShieldAlertIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { abha as content, type AsirPlace } from "@/lib/content/asir-region/abha";
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
}: PageProps<"/[locale]/abha">): Promise<Metadata> {
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

/** Home → Abha & Khamis Mushait: a city hub, level with Dammam and Madinah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

/**
 * Topographic contour lines, drawn as nested irregular rings. Decorative
 * only: no figure on the page is read from them.
 */
function Contours({ className }: { className?: string }) {
  const rings = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg aria-hidden viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice" className={className}>
      {rings.map((i) => {
        const s = 1 + i * 0.32;
        return (
          <path
            key={i}
            d="M300 120c58-8 112 10 128 46 18 40-14 70-56 88-46 20-102 26-146 6-40-18-62-56-44-90 16-30 64-44 118-50Z"
            transform={`translate(${300 - 300 * s} ${190 - 190 * s}) scale(${s})`}
            stroke="currentColor"
            strokeWidth={1.2}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

function PlaceRow({ place, locale }: { place: AsirPlace; locale: Locale }) {
  return (
    <div className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:gap-6">
      <div className="flex shrink-0 items-baseline justify-between gap-4 sm:w-64 sm:flex-col sm:justify-start sm:gap-1">
        <h3 className="font-heading text-xl text-white">{place.name[locale]}</h3>
        {place.distance ? (
          <p className="numeric text-sm font-semibold text-brass">{place.distance[locale]}</p>
        ) : null}
      </div>
      <p className="text-sm leading-relaxed text-white/70">{place.detail[locale]}</p>
    </div>
  );
}

/**
 * Abha and Khamis Mushait.
 *
 * Design concept — "contour lines". The Asir is the highland page, so the
 * hero sits on sand with thin brass topographic rings behind the H1; the one
 * height on the page (Al Soudah, 3,015 m) is set as a survey label.
 *
 * Unlike the Dammam coastline strip, the Madinah compass or the AlUla layers:
 * - the signature is a **pair of equal panels**, Abha in palm and Khamis
 *   Mushait in ink with a ruled market-grid motif, so neither city leads;
 * - two alternating photograph/text city rows, each anchored, each ending
 *   with the same service line;
 * - a white scope card that states plainly what is and is not offered;
 * - an ink "around Abha" band with contour rings, listing the airport,
 *   Rijal Almaa, Al Soudah and the towns further afield as context only;
 * - split FAQ, and a palm-deep CTA.
 */
export default async function AbhaPage({ params }: PageProps<"/[locale]/abha">) {
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

      {/* Hero: sand with brass contour lines */}
      <section className="relative isolate overflow-hidden bg-sand" aria-labelledby="abh-title">
        <Contours className="pointer-events-none absolute -end-40 -top-24 -z-10 h-[34rem] w-[52rem] text-brass/35 lg:-end-20" />
        <div className="site-container pt-10 pb-12 lg:pt-14 lg:pb-16">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <p className="text-eyebrow text-palm-deep">{content.hero.eyebrow[locale]}</p>
              <h1 id="abh-title" className="text-display mt-4 text-balance text-ink">
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
            <figure className="relative">
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
              {/* Survey label: the one height published on the page */}
              <figcaption className="absolute -bottom-5 start-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-ink/8">
                <MountainIcon aria-hidden className="size-5 text-brass-deep" />
                <span>
                  <span className="numeric block font-heading text-xl leading-none text-ink">{content.hero.peak.value[locale]}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{content.hero.peak.label[locale]}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Signature: two equal panels */}
      <section className="bg-background pt-16 pb-4 lg:pt-20" aria-labelledby="abh-pair">
        <div className="site-container">
          <h2 id="abh-pair" className="text-eyebrow text-brass-deep">{content.pair.heading[locale]}</h2>
          <ul role="list" className="mt-5 grid gap-4 md:grid-cols-2">
            {content.pair.cities.map((city, index) => (
              <li
                key={city.id}
                className={
                  index === 0
                    ? "relative isolate overflow-hidden rounded-3xl bg-palm-deep p-7 sm:p-9"
                    : "relative isolate overflow-hidden rounded-3xl bg-ink p-7 sm:p-9"
                }
              >
                {index === 0 ? (
                  <Contours className="pointer-events-none absolute -end-24 -bottom-24 -z-10 h-72 w-96 text-white/12" />
                ) : (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-[size:28px_28px]"
                  />
                )}
                <a
                  href={`#${city.id}`}
                  className="group inline-flex items-center gap-2 font-heading text-3xl text-white outline-none hover:text-brass focus-visible:text-brass"
                >
                  {city.name[locale]}
                  <ArrowDownIcon aria-hidden className="size-5 text-brass transition-transform group-hover:translate-y-0.5" />
                </a>
                <p className="mt-3 flex items-center gap-2 text-[0.975rem] text-white/80">
                  <CheckIcon aria-hidden className="size-4 shrink-0 text-brass" />
                  {city.line[locale]}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">{content.pair.footnote[locale]}</p>
        </div>
      </section>

      {/* The two cities, each anchored */}
      <section className="section-y bg-background" aria-labelledby="abh-cities">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="abh-cities" className="text-h2 text-balance text-ink">
              {content.cities.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.cities.lead[locale]}</p>
          </div>
          <div className="mt-12 flex flex-col gap-14 lg:gap-20">
            {content.cities.sections.map((city, index) => {
              const cityPhoto = image(city.imageKey);
              return (
                <article
                  key={city.id}
                  id={city.id}
                  aria-labelledby={`abh-city-${city.id}`}
                  className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={`relative aspect-4/3 w-full overflow-hidden rounded-3xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
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
                    <h3 id={`abh-city-${city.id}`} className="text-h2 mt-3 text-ink">
                      {city.name[locale]}
                    </h3>
                    {city.paragraphs.map((p) => (
                      <p key={p.en} className="text-body mt-4 text-muted-foreground">
                        {p[locale]}
                      </p>
                    ))}
                    <p className="mt-5 border-s-2 border-palm ps-4 text-[0.975rem] leading-relaxed text-ink/85">
                      {city.service[locale]}
                    </p>
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

      {/* Scope: what is and is not offered */}
      <section className="bg-palm-soft/60" aria-labelledby="abh-scope">
        <div className="site-container py-14 lg:py-16">
          <div className="grid gap-6 rounded-3xl bg-white p-7 ring-1 ring-ink/8 sm:p-9 md:grid-cols-2 md:gap-12">
            <div>
              <h2 id="abh-scope" className="text-h3 text-ink">{content.scope.heading[locale]}</h2>
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
        </div>
      </section>

      {/* Around Abha: context only */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="abh-context">
        <Contours className="pointer-events-none absolute -start-48 -bottom-40 -z-10 h-[30rem] w-[46rem] text-brass/15" />
        <div className="site-container py-14 lg:py-16">
          <div className="max-w-3xl">
            <h2 id="abh-context" className="text-h2 text-balance text-white">
              {content.context.heading[locale]}
            </h2>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-white/70">{content.context.lead[locale]}</p>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
            <div className="divide-y divide-white/12 border-y border-white/12">
              <PlaceRow place={content.context.airport} locale={locale} />
              <PlaceRow place={content.context.rijal} locale={locale} />
              <PlaceRow place={content.context.soudah} locale={locale} />
            </div>
            <div>
              <h3 className="text-eyebrow text-brass">{content.context.furtherHeading[locale]}</h3>
              <dl className="mt-4 divide-y divide-white/12 border-y border-white/12">
                {content.context.further.map((place) => (
                  <div key={place.name.en} className="py-4">
                    <dt className="flex items-baseline justify-between gap-4">
                      <span className="font-heading text-lg text-white">{place.name[locale]}</span>
                      {place.distance ? (
                        <span className="numeric text-sm font-semibold text-brass">{place.distance[locale]}</span>
                      ) : null}
                    </dt>
                    <dd className="mt-1 text-sm text-white/60">{place.detail[locale]}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-white/50">{content.context.footnote[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="abh-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="abh-faq" faqs={content.faqs} layout="split" />
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

      {/* CTA: palm-deep with faint contour rings */}
      <section className="relative isolate overflow-hidden bg-palm-deep" aria-labelledby="abh-cta">
        <Contours className="pointer-events-none absolute -end-32 -top-32 -z-10 h-96 w-[36rem] text-white/10" />
        <div className="site-container flex flex-col gap-7 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
            <h2 id="abh-cta" className="text-h2 mt-3 text-balance text-white">
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
