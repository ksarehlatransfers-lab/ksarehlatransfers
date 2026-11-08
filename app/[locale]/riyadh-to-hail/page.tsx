import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhToHail as content } from "@/lib/content/riyadh/hail";
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
}: PageProps<"/[locale]/riyadh-to-hail">): Promise<Metadata> {
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

const ordinal = (index: number) => String(index + 1).padStart(2, "0");

/**
 * Riyadh to Hail.
 *
 * Design concept — the planner. This route is six hours north with long gaps
 * between services, so the page is built as something you read *before* you
 * go rather than a destination brochure. Its two signature elements are a
 * preparation checklist set as a ruled list with large ordinals, and a
 * route-choice table, because the transport authority publishes two ways to
 * Hail and "which one" is a real question.
 *
 * The hero puts the photograph first and the words underneath it, which no
 * other page in the cluster does. Stages are numbered down the start edge
 * rather than drawn as a timeline — the Jeddah page owns the timeline.
 */
export default async function RiyadhToHailPage({
  params,
}: PageProps<"/[locale]/riyadh-to-hail">) {
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

      <div className="bg-background">
        <div className="site-container pt-6">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
        </div>
      </div>

      {/* Photograph first, words second */}
      <div className="relative mt-6 aspect-16/10 w-full overflow-hidden bg-ink sm:aspect-21/9">
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

      <section className="bg-background" aria-labelledby="route-title">
        <div className="site-container py-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
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
            </div>
            <div className="lg:pt-3">
              <p className="text-lead text-pretty text-muted-foreground">
                {content.hero.lead[locale]}
              </p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-7 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                />
              </Link>
            </div>
          </div>

          {/* Figures as a ruled list rather than cards or a band */}
          <dl className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {content.stats.map((stat) => (
              <div
                key={stat.label.en}
                className="flex flex-col gap-1 border-b border-border py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-eyebrow shrink-0 text-palm">
                  {stat.label[locale]}
                </dt>
                <div className="sm:text-end">
                  <dd className="numeric font-heading text-xl text-ink">
                    {stat.value[locale]}
                  </dd>
                  {stat.note ? (
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {stat.note[locale]}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">
            {content.statsChecked[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="route-overview">
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

      {/* Signature element one — two roads, as a table */}
      {content.routeChoice ? (
        <section className="section-y bg-background" aria-labelledby="route-choice">
          <div className="site-container">
            <h2 id="route-choice" className="text-h2 text-balance text-ink">
              {content.routeChoice.heading[locale]}
            </h2>
            <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
              {content.routeChoice.lead[locale]}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {content.routeChoice.options.map((option, index) => (
                <div
                  key={option.name.en}
                  className={
                    index === 0
                      ? "rounded-2xl border-2 border-palm/35 bg-palm-soft/40 p-7"
                      : "rounded-2xl border border-border bg-card p-7"
                  }
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-h4 text-ink">{option.name[locale]}</h3>
                    {index === 0 ? (
                      <span className="rounded-full bg-palm px-2.5 py-1 text-[0.6875rem] font-semibold text-white">
                        {locale === "ar" ? "الافتراضي" : "Our default"}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {option.via[locale]}
                  </p>

                  <dl className="mt-5 flex gap-8 border-y border-ink/10 py-4">
                    <div>
                      <dt className="text-eyebrow text-palm">
                        {locale === "ar" ? "المسافة" : "Distance"}
                      </dt>
                      <dd className="numeric mt-1 font-heading text-xl text-ink">
                        {option.distance[locale]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-eyebrow text-palm">
                        {locale === "ar" ? "الزمن" : "Driving time"}
                      </dt>
                      <dd className="numeric mt-1 font-heading text-xl text-ink">
                        {option.duration[locale]}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {option.note[locale]}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
              {content.routeChoice.footnote[locale]}
            </p>
          </div>
        </section>
      ) : null}

      {/* Signature element two — the preparation checklist */}
      {content.checklist ? (
        <section className="section-y bg-sand" aria-labelledby="route-checklist">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h2 id="route-checklist" className="text-h2 text-balance text-ink">
                  {content.checklist.heading[locale]}
                </h2>
                <p className="text-lead mt-4 text-pretty text-muted-foreground">
                  {content.checklist.lead[locale]}
                </p>
              </div>

              <ol role="list" className="flex flex-col">
                {content.checklist.items.map((item, index) => (
                  <li
                    key={item.title.en}
                    className="flex gap-5 border-b border-ink/12 py-6 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <span
                      aria-hidden
                      className="numeric font-heading text-2xl leading-none text-palm/45"
                    >
                      {ordinal(index)}
                    </span>
                    <div>
                      <h3 className="text-h4 text-ink">{item.title[locale]}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.detail[locale]}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ) : null}

      {/* Stages numbered down the start edge */}
      <section className="section-y bg-background" aria-labelledby="route-stages">
        <div className="site-container">
          <h2 id="route-stages" className="text-h2 text-balance text-ink">
            {content.stages.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.stages.lead[locale]}
          </p>

          <ol role="list" className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-5">
            {content.stages.items.map((stage, index) => (
              <li
                key={stage.name.en}
                className="border-s-2 border-palm/25 ps-5"
              >
                <p
                  aria-hidden
                  className="numeric font-heading text-lg text-palm/50"
                >
                  {ordinal(index)}
                </p>
                {stage.km !== undefined ? (
                  <p className="numeric mt-1 text-xs font-semibold tracking-[0.14em] text-palm uppercase">
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

      {/* Hail as a stage to AlUla */}
      {content.onward ? (
        <section className="section-y bg-palm-soft" aria-labelledby="route-onward">
          <div className="site-container">
            <h2 id="route-onward" className="text-h2 text-balance text-palm-deep">
              {content.onward.heading[locale]}
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {content.onward.items.map((item) => (
                <div key={item.heading.en}>
                  <h3 className="text-h4 text-palm-deep">
                    {item.heading[locale]}
                  </h3>
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.en}
                      className="mt-3 text-sm leading-relaxed text-palm-deep/85"
                    >
                      {paragraph[locale]}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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

          <div className="mt-14 max-w-3xl rounded-2xl border border-border bg-sand p-7">
            <h2 className="text-h3 text-ink">
              {content.booking.heading[locale]}
            </h2>
            {content.booking.paragraphs.map((paragraph) => (
              <p
                key={paragraph.en}
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="route-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="route-faq"
            faqs={content.faqs}
          />
        </div>
      </section>

      {/* Dark closing band with the related links inside it */}
      <section className="bg-ink" aria-labelledby="route-cta">
        <div className="site-container py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brass">
              {content.cta.eyebrow[locale]}
            </p>
            <h2 id="route-cta" className="text-h2 mt-4 text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="text-lead mt-5 text-pretty text-white/70">
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

          <RelatedLinks
            locale={locale}
            heading={relatedHeading[locale]}
            links={content.related}
            tone="invert"
            className="mt-16 border-t border-white/12 pt-12"
          />
        </div>
      </section>
    </>
  );
}
