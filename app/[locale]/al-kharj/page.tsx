import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, DropletIcon, MapPinIcon, TrainFrontIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { alKharj as content } from "@/lib/content/riyadh-region/al-kharj";
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
}: PageProps<"/[locale]/al-kharj">): Promise<Metadata> {
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

/** Home → Riyadh → Al Kharj: a Riyadh Region destination sits under the capital's hub. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: riyadhHub.crumbLabel[locale], routeKey: "riyadh" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * Al Kharj.
 *
 * Design concept — "open landscape, practical planner". Al Kharj is a working
 * city people travel to for a reason, so the page leads with the answer and a
 * plan rather than with atmosphere:
 *
 * - **Editorial split heading** (H1 at the start, lead at the end) on sand,
 *   then a **full-bleed landscape photograph** with the "How far?" answer
 *   docked to its lower end corner — a planner tab, not a headline card.
 * - Signature component: a **journey-planner table** (journey × what decides
 *   it × what to send us) that becomes stacked cards below `md`.
 * - The rail question gets its own honest band, because "train from Riyadh to
 *   Al Kharj" is a real search and the answer is no.
 * - **Springs ribbon** of named chips inside the "in brief" section.
 * - CTA: a palm band split by a vertical rule. No other page uses it.
 */
export default async function AlKharjPage({ params }: PageProps<"/[locale]/al-kharj">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const cols = content.planner.columns;

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

      {/* Editorial split heading */}
      <section className="bg-sand" aria-labelledby="akj-title">
        <div className="site-container pt-10 pb-12 lg:pt-14 lg:pb-16">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
            <div>
              <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
              <h1 id="akj-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
            </div>
            <div>
              <p className="text-lead text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-7 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed landscape with the answer docked to its lower end corner */}
      <section aria-labelledby="akj-answer" className="relative bg-background">
        <div className="relative aspect-16/9 max-h-[34rem] w-full overflow-hidden sm:aspect-21/9">
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
        <div className="site-container">
          <div className="relative -mt-10 ms-auto max-w-xl rounded-2xl bg-card p-6 shadow-lg ring-1 ring-ink/8 sm:-mt-20 lg:p-8">
            <div className="flex items-center gap-2.5">
              <MapPinIcon aria-hidden className="size-5 shrink-0 text-palm" />
              <h2 id="akj-answer" className="text-h4 text-ink">
                {content.answer.question[locale]}
              </h2>
            </div>
            <p className="numeric mt-3 font-heading text-4xl text-ink">
              {locale === "ar" ? "~80 كم" : "~80 km"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.answer.answer[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Signature: the journey planner */}
      <section className="section-y bg-background" aria-labelledby="akj-planner">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="akj-planner" className="text-h2 text-balance text-ink">
              {content.planner.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">
              {content.planner.lead[locale]}
            </p>
          </div>

          <table className="mt-10 w-full border-collapse text-start text-sm max-md:block">
            <thead className="max-md:sr-only">
              <tr className="border-b-2 border-palm">
                {[cols.journey, cols.decides, cols.send].map((col) => (
                  <th key={col.en} scope="col" className="text-eyebrow py-3 pe-6 text-start text-palm">
                    {col[locale]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="max-md:flex max-md:flex-col max-md:gap-4">
              {content.planner.rows.map((row) => (
                <tr
                  key={row.journey.en}
                  className="border-b border-ink/10 align-top max-md:block max-md:rounded-2xl max-md:border-0 max-md:bg-sand max-md:p-5"
                >
                  <th scope="row" className="py-5 pe-6 text-start text-[0.95rem] font-semibold text-ink max-md:block max-md:p-0 md:w-[24%]">
                    {row.journey[locale]}
                  </th>
                  <td
                    data-label={cols.decides[locale]}
                    className="py-5 pe-6 leading-relaxed text-muted-foreground max-md:block max-md:p-0 max-md:pt-3 max-md:before:block max-md:before:text-xs max-md:before:font-semibold max-md:before:text-palm max-md:before:content-[attr(data-label)]"
                  >
                    {row.decides[locale]}
                  </td>
                  <td
                    data-label={cols.send[locale]}
                    className="py-5 leading-relaxed text-ink/80 max-md:block max-md:p-0 max-md:pt-3 max-md:before:block max-md:before:text-xs max-md:before:font-semibold max-md:before:text-palm max-md:before:content-[attr(data-label)]"
                  >
                    {row.send[locale]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* The rail question, answered honestly */}
      <section className="bg-palm-soft/50" aria-labelledby="akj-rail">
        <div className="site-container py-14 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10">
            <span className="grid size-14 place-items-center rounded-2xl bg-palm text-white">
              <TrainFrontIcon aria-hidden className="size-7 rtl:-scale-x-100" />
            </span>
            <div className="max-w-3xl">
              <h2 id="akj-rail" className="text-h3 text-balance text-ink">
                {content.rail.heading[locale]}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {content.rail.paragraphs.map((p) => (
                  <p key={p.en} className="text-body text-muted-foreground">
                    {p[locale]}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In brief, with the springs ribbon */}
      <section className="section-y bg-background" aria-labelledby="akj-context">
        <div className="site-container">
          <h2 id="akj-context" className="text-h2 text-balance text-ink">
            {content.context.heading[locale]}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {content.context.lead[locale]}
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {content.context.facts.map((fact) => (
              <div key={fact.label.en} className="bg-background p-6">
                <dt className="text-eyebrow text-palm">{fact.label[locale]}</dt>
                <dd className="mt-2 font-heading text-xl leading-snug text-ink">{fact.value[locale]}</dd>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{fact.note[locale]}</p>
              </div>
            ))}
          </dl>

          <div className="mt-10 rounded-2xl bg-sand p-6 lg:flex lg:items-center lg:gap-10 lg:p-8">
            <div className="shrink-0">
              <h3 className="text-h4 text-ink">{content.context.springsLabel[locale]}</h3>
              <ul role="list" className="mt-4 flex flex-wrap gap-2">
                {content.context.springs.map((spring) => (
                  <li
                    key={spring.en}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-palm-deep ring-1 ring-palm/20"
                  >
                    <DropletIcon aria-hidden className="size-3.5 text-palm" />
                    {spring[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground lg:mt-0">
              {content.context.springsNote[locale]}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="akj-quotation">
        <div className="site-container max-w-3xl">
          <h2 id="akj-quotation" className="text-h3 text-balance text-ink">
            {content.quotation.heading[locale]}
          </h2>
          <ul role="list" className="mt-6 flex flex-col gap-3">
            {content.quotation.items.map((item) => (
              <li key={item.en} className="border-s-2 border-palm/50 ps-4 text-sm leading-relaxed text-muted-foreground">
                {item[locale]}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="akj-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="akj-faq" faqs={content.faqs} />
        </div>
      </section>

      {/* CTA: a palm band split by a vertical rule */}
      <section className="bg-palm" aria-labelledby="akj-cta">
        <div className="site-container grid gap-8 py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-0 lg:py-16">
          <div className="lg:border-e lg:border-white/25 lg:pe-12">
            <p className="text-eyebrow text-palm-soft">{content.cta.eyebrow[locale]}</p>
            <h2 id="akj-cta" className="text-h3 mt-3 text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/80">{content.cta.body[locale]}</p>
          </div>
          <div className="lg:ps-12">
            <Link
              href={href(locale, "getQuote")}
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-palm-deep transition-colors hover:bg-palm-soft"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>
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
