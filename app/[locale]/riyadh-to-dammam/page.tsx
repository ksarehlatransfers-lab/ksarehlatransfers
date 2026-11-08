import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, CarFrontIcon, CheckIcon, TrainFrontIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhToDammam as content } from "@/lib/content/riyadh/dammam";
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
}: PageProps<"/[locale]/riyadh-to-dammam">): Promise<Metadata> {
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

const relatedHeading = {
  en: "Related journeys",
  ar: "رحلات ذات صلة",
};

const columnIcons = [CarFrontIcon, TrainFrontIcon] as const;

/**
 * Riyadh to Dammam.
 *
 * Design concept — a decision page, not a brochure. The hero is a split with
 * the photograph boxed rather than full-bleed, and the page's centrepiece is
 * a two-column comparison of road against rail that recommends the train
 * where the train is the better answer. The stages run horizontally here,
 * not vertically, so the shorter journey reads as a shorter journey.
 */
export default async function RiyadhToDammamPage({
  params,
}: PageProps<"/[locale]/riyadh-to-dammam">) {
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

      {/* Light split hero — deliberately unlike the Jeddah page's dark one */}
      <section className="bg-sand" aria-labelledby="route-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-eyebrow text-palm">
                {content.hero.eyebrow[locale]}
              </p>
              <h1
                id="route-title"
                className="text-display mt-4 text-balance text-ink"
              >
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 max-w-xl text-pretty text-muted-foreground">
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

            <div className="relative aspect-3/2 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats as a dark strip rather than a light band */}
      <section aria-label={content.hero.h1[locale]} className="bg-ink">
        <div className="site-container">
          <dl className="grid gap-x-8 gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="text-eyebrow text-brass">{stat.label[locale]}</dt>
                <dd className="numeric mt-2 font-heading text-2xl text-white">
                  {stat.value[locale]}
                </dd>
                {stat.note ? (
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {stat.note[locale]}
                  </p>
                ) : null}
              </div>
            ))}
          </dl>
          <p className="-mt-3 pb-10 text-xs text-white/55">
            {content.statsChecked[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="route-overview">
        <div className="site-container max-w-3xl">
          <h2 id="route-overview" className="text-h2 text-balance text-ink">
            {content.overview.heading[locale]}
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            {content.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.en} className="text-body text-muted-foreground">
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The comparison — this page's signature element */}
      {content.comparison ? (
        <section className="section-y bg-sand" aria-labelledby="route-compare">
          <div className="site-container">
            <h2 id="route-compare" className="text-h2 text-balance text-ink">
              {content.comparison.heading[locale]}
            </h2>
            <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
              {content.comparison.lead[locale]}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {content.comparison.columns.map((column, index) => {
                const Icon = columnIcons[index] ?? CarFrontIcon;
                return (
                  <div
                    key={column.title.en}
                    className="flex flex-col rounded-2xl bg-card p-7 ring-1 ring-ink/8"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-palm-soft text-palm-deep">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="text-h4 mt-5 text-ink">
                      {column.title[locale]}
                    </h3>
                    <ul role="list" className="mt-4 flex flex-col gap-3">
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
                );
              })}
            </div>

            <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
              {content.comparison.footnote[locale]}
            </p>
          </div>
        </section>
      ) : null}

      {/* Stages, horizontal */}
      <section className="section-y bg-background" aria-labelledby="route-stages">
        <div className="site-container">
          <h2 id="route-stages" className="text-h2 text-balance text-ink">
            {content.stages.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.stages.lead[locale]}
          </p>

          <ol
            role="list"
            className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            <span
              aria-hidden
              className="absolute top-2 right-[12.5%] left-[12.5%] -z-10 hidden border-t-2 border-dashed border-palm/25 lg:block"
            />
            {content.stages.items.map((stage) => (
              <li key={stage.name.en}>
                <span
                  aria-hidden
                  className="block size-4 rounded-full bg-palm ring-8 ring-background"
                />
                {stage.km !== undefined ? (
                  <p className="numeric mt-4 text-xs font-semibold tracking-[0.14em] text-palm uppercase">
                    {stage.km} {locale === "ar" ? "كم" : "km"}
                  </p>
                ) : null}
                <h3 className="text-h4 mt-1.5 text-ink">{stage.name[locale]}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ends and practical notes in one light section */}
      <section className="section-y bg-sand" aria-labelledby="route-practical">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-2">
            {[content.pickup, content.dropoff].map((block) => (
              <div
                key={block.heading.en}
                className="rounded-2xl bg-card p-7 ring-1 ring-ink/8"
              >
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

          <h2
            id="route-practical"
            className="text-h2 mt-16 text-balance text-ink"
          >
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

          <div className="mt-14 max-w-3xl rounded-2xl border border-palm/20 bg-palm-soft/50 p-7">
            <h2 className="text-h3 text-palm-deep">
              {content.booking.heading[locale]}
            </h2>
            {content.booking.paragraphs.map((paragraph) => (
              <p
                key={paragraph.en}
                className="mt-3 text-sm leading-relaxed text-palm-deep/85"
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

      {/* Related links stand alone here, before a compact centred CTA */}
      <section className="section-y bg-sand" aria-label={relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks
            locale={locale}
            heading={relatedHeading[locale]}
            links={content.related}
          />
        </div>
      </section>

      <section className="bg-ink" aria-labelledby="route-cta">
        <div className="site-container py-16 text-center lg:py-20">
          <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
          <h2
            id="route-cta"
            className="text-h2 mx-auto mt-4 max-w-2xl text-balance text-white"
          >
            {content.cta.heading[locale]}
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-xl text-pretty text-white/70">
            {content.cta.body[locale]}
          </p>
          <Link
            href={href(locale, "getQuote")}
            className="group mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
