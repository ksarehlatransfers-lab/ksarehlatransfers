import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhToBuraydah as content } from "@/lib/content/riyadh/buraydah";
import { riyadhHub } from "@/lib/content/riyadh/hub";
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
}: PageProps<"/[locale]/riyadh-to-buraydah">): Promise<Metadata> {
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

const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: riyadhHub.crumbLabel[locale], routeKey: "riyadh" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * Riyadh to Buraydah.
 *
 * Design concept — practical and regional, and the most compact page in the
 * cluster by design. A three-and-a-half-hour drive does not need 2,500 words
 * or a cinematic hero, so the opening folds the headline and the figures into
 * one band with no photograph beside them, and the photograph arrives
 * afterwards as a wide strip. Nothing else in the cluster opens that way.
 *
 * Two signature elements: a region block, because people searching for
 * Qassim often want Unaizah rather than Buraydah; and a car-or-train
 * comparison set in two ruled columns rather than the Dammam page's cards,
 * so the two comparison pages do not read alike.
 */
export default async function RiyadhToBuraydahPage({
  params,
}: PageProps<"/[locale]/riyadh-to-buraydah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const road = image("route-highway65-north");

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

      {/* Headline and figures in one band — no photograph in the hero */}
      <section className="bg-sand" aria-labelledby="route-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />

          <div className="mt-8 max-w-3xl">
            <p className="text-eyebrow text-palm">
              {content.hero.eyebrow[locale]}
            </p>
            <h1
              id="route-title"
              className="text-display mt-4 text-balance text-ink"
            >
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 text-pretty text-muted-foreground">
              {content.hero.lead[locale]}
            </p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              />
            </Link>
          </div>

          <dl className="mt-12 grid gap-y-7 border-t border-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div
                key={stat.label.en}
                className="lg:not-first:border-s lg:not-first:border-ink/10 lg:not-first:ps-7"
              >
                <dt className="text-eyebrow text-palm">{stat.label[locale]}</dt>
                <dd className="numeric mt-2 font-heading text-2xl text-ink">
                  {stat.value[locale]}
                </dd>
                {stat.note ? (
                  <p className="mt-2 pe-6 text-xs leading-relaxed text-muted-foreground">
                    {stat.note[locale]}
                  </p>
                ) : null}
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">
            {content.statsChecked[locale]}
          </p>
        </div>
      </section>

      {/* The photograph arrives after the facts, as a wide strip */}
      <div className="relative aspect-21/9 w-full overflow-hidden bg-ink">
        <Image
          src={photo.src}
          alt={altText(photo, locale)}
          width={photo.width}
          height={photo.height}
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
          priority
          sizes="100vw"
          className="size-full object-cover"
        />
      </div>

      <section className="section-y bg-background" aria-labelledby="route-overview">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <h2
              id="route-overview"
              className="text-h2 text-balance text-ink lg:sticky lg:top-28 lg:self-start"
            >
              {content.overview.heading[locale]}
            </h2>
            <div className="flex flex-col gap-5">
              {content.overview.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="text-body text-muted-foreground">
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature element one — the region, not just the city */}
      {content.region ? (
        <section className="section-y bg-sand" aria-labelledby="route-region">
          <div className="site-container">
            <h2 id="route-region" className="text-h2 text-balance text-ink">
              {content.region.heading[locale]}
            </h2>
            <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
              {content.region.lead[locale]}
            </p>

            <div className="mt-10">
              <div className="rounded-2xl bg-palm p-7 text-white">
                <p className="text-eyebrow text-brass">
                  {locale === "ar" ? "مركز المنطقة" : "Regional centre"}
                </p>
                <h3 className="text-h3 mt-2">
                  {content.region.centre.name[locale]}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
                  {content.region.centre.note[locale]}
                </p>
              </div>

              {/* A short connector, so the satellites read as hanging off the
                  centre rather than as a separate list of equals. */}
              <span
                aria-hidden
                className="mx-auto block h-8 w-px bg-palm/30 sm:h-10"
              />

              <ul role="list" className="grid gap-4 sm:grid-cols-3">
                {content.region.satellites.map((town) => (
                  <li
                    key={town.name.en}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <h3 className="text-h4 text-ink">{town.name[locale]}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {town.note[locale]}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {/* Signature element two — car or train, in ruled columns */}
      {content.comparison ? (
        <section className="section-y bg-background" aria-labelledby="route-compare">
          <div className="site-container">
            <h2 id="route-compare" className="text-h2 text-balance text-ink">
              {content.comparison.heading[locale]}
            </h2>
            <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
              {content.comparison.lead[locale]}
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
              {content.comparison.columns.map((column, index) => (
                <div
                  key={column.title.en}
                  className={
                    index > 0
                      ? "md:border-s md:border-border md:ps-14"
                      : undefined
                  }
                >
                  <h3 className="text-h4 border-b border-ink/10 pb-4 text-ink">
                    {column.title[locale]}
                  </h3>
                  <ul role="list" className="mt-5 flex flex-col gap-3.5">
                    {column.points.map((point) => (
                      <li key={point.en} className="flex gap-2.5 text-sm">
                        <CheckIcon
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-palm"
                        />
                        <span className="leading-relaxed text-muted-foreground">
                          {point[locale]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-3xl border-t border-ink/10 pt-6 text-sm text-muted-foreground">
              {content.comparison.footnote[locale]}
            </p>
          </div>
        </section>
      ) : null}

      {/* Stages as a measured row of dividers, not a timeline */}
      <section className="section-y bg-sand" aria-labelledby="route-stages">
        <div className="site-container">
          <h2 id="route-stages" className="text-h2 text-balance text-ink">
            {content.stages.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.stages.lead[locale]}
          </p>

          <ol role="list" className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.stages.items.map((stage) => (
              <li
                key={stage.name.en}
                className="border-t-2 border-palm/30 pt-5 lg:border-t-0 lg:border-s-2 lg:ps-6"
              >
                {stage.km !== undefined ? (
                  <p className="numeric font-heading text-3xl text-palm">
                    {stage.km}
                    <span className="ms-1 text-sm text-muted-foreground">
                      {locale === "ar" ? "كم" : "km"}
                    </span>
                  </p>
                ) : null}
                <h3 className="text-h4 mt-2 text-ink">{stage.name[locale]}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="route-practical">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-2">
            {[content.pickup, content.dropoff].map((block) => (
              <div key={block.heading.en}>
                <h2 className="text-h3 text-ink">{block.heading[locale]}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <h2 id="route-practical" className="text-h2 mt-16 text-balance text-ink">
            {content.practical.heading[locale]}
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {content.practical.items.map((item) => (
              <div key={item.heading.en}>
                <h3 className="text-h4 text-ink">{item.heading[locale]}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking laid over the Highway 65 photograph — the actual road north */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="route-booking">
        <Image
          src={road.src}
          alt=""
          aria-hidden
          width={road.width}
          height={road.height}
          placeholder="blur"
          blurDataURL={road.blurDataURL}
          sizes="100vw"
          className="absolute inset-0 -z-10 size-full object-cover opacity-30"
        />
        <div className="site-container py-16 lg:py-20">
          <div className="max-w-2xl">
            <h2 id="route-booking" className="text-h2 text-balance text-white">
              {content.booking.heading[locale]}
            </h2>
            {content.booking.paragraphs.map((paragraph) => (
              <p
                key={paragraph.en}
                className="mt-4 text-sm leading-relaxed text-white/80"
              >
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="route-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="route-faq"
            faqs={content.faqs}
          />
        </div>
      </section>

      {/* CTA as a light palm-soft band with the text left-aligned */}
      <section className="section-y bg-sand" aria-labelledby="route-cta">
        <div className="site-container">
          <div className="rounded-3xl border border-palm/20 bg-palm-soft p-8 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-eyebrow text-palm-deep">
                  {content.cta.eyebrow[locale]}
                </p>
                <h2
                  id="route-cta"
                  className="text-h2 mt-3 text-balance text-palm-deep"
                >
                  {content.cta.heading[locale]}
                </h2>
                <p className="text-lead mt-4 text-pretty text-palm-deep/85">
                  {content.cta.body[locale]}
                </p>
              </div>
              <Link
                href={href(locale, "getQuote")}
                className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-palm px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                />
              </Link>
            </div>
          </div>

          <RelatedLinks
            locale={locale}
            heading={relatedHeading[locale]}
            links={content.related}
            className="mt-16"
          />
        </div>
      </section>
    </>
  );
}
