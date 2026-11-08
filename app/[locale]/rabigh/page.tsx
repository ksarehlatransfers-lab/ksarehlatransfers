import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, BriefcaseBusinessIcon, LandmarkIcon, TrainFrontIcon, WavesIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { rabigh as content } from "@/lib/content/makkah-region/rabigh";
import { jeddahHub } from "@/lib/content/jeddah/hub";
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
}: PageProps<"/[locale]/rabigh">): Promise<Metadata> {
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

/** Home → Jeddah → Rabigh: most Rabigh journeys start in Jeddah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: jeddahHub.crumbLabel[locale], routeKey: "jeddah" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };
const columnIcons = [BriefcaseBusinessIcon, WavesIcon] as const;

/**
 * Rabigh.
 *
 * Design concept — "Red Sea coast, two destinations". Rabigh is a working
 * coastal governorate, and King Abdullah Economic City sits inside it as a
 * different trip. The composition is built on that split:
 *
 * - **Reversed split hero**: a tall photograph at the start edge with the
 *   text and three stacked fact rows at the end, on palm-soft — the mirror of
 *   the Riyadh hub's ink split, in a different field and order.
 * - Signature component: **"Rabigh or KAEC?"** — two columns, each with what
 *   is there, who goes, and what to tell us; the KAEC column carries its own
 *   photograph.
 * - A ruled list of the journeys we quote, a train answer that points out the
 *   station is in KAEC and not in Rabigh town, and a short heritage band.
 * - CTA: a split two-field band, sand and palm.
 */
export default async function RabighPage({ params }: PageProps<"/[locale]/rabigh">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const kaec = image(content.kaecImageKey);

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

      {/* Reversed split hero: photograph first, words and facts after */}
      <section className="bg-palm-soft/50" aria-labelledby="rbg-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl lg:aspect-auto lg:min-h-[30rem]">
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
              <h1 id="rbg-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
              <dl className="mt-8 flex flex-col divide-y divide-ink/10 border-y border-ink/10">
                {content.facts.map((fact) => (
                  <div key={fact.label.en} className="grid grid-cols-[7rem_minmax(0,1fr)] items-baseline gap-4 py-3.5 sm:grid-cols-[9rem_minmax(0,1fr)]">
                    <dt className="text-eyebrow text-palm">{fact.label[locale]}</dt>
                    <dd>
                      <span className="numeric font-heading text-xl text-ink">{fact.value[locale]}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{fact.note[locale]}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-12 items-center gap-2 self-start rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature: Rabigh or KAEC */}
      <section className="section-y bg-background" aria-labelledby="rbg-split">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="rbg-split" className="text-h2 text-balance text-ink">
              {content.split.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.split.lead[locale]}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {content.split.columns.map((col, index) => {
              const Icon = columnIcons[index] ?? BriefcaseBusinessIcon;
              return (
                <article key={col.name.en} className="flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-ink/8">
                  {index === 1 ? (
                    <div className="relative aspect-16/9">
                      <Image
                        src={kaec.src}
                        alt={altText(kaec, locale)}
                        width={kaec.width}
                        height={kaec.height}
                        placeholder="blur"
                        blurDataURL={kaec.blurDataURL}
                        loading="lazy"
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="size-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-16/9 items-end bg-sand p-7">
                      <Icon aria-hidden className="size-16 text-palm/70" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-h3 text-ink">{col.name[locale]}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{col.what[locale]}</p>
                    <ul role="list" className="mt-5 flex flex-wrap gap-2">
                      {col.points.map((point) => (
                        <li key={point.en} className="rounded-full bg-palm-soft px-3 py-1.5 text-xs font-semibold text-palm-deep">
                          {point[locale]}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <p className="border-t border-ink/10 pt-4 text-[0.8125rem] font-medium leading-relaxed text-ink/80">
                        {col.tell[locale]}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* The journeys we quote, as a ruled list */}
      <section className="section-y bg-sand" aria-labelledby="rbg-journeys">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <h2 id="rbg-journeys" className="text-h2 text-balance text-ink lg:sticky lg:top-28 lg:self-start">
            {content.journeys.heading[locale]}
          </h2>
          <ol role="list" className="flex flex-col">
            {content.journeys.rows.map((row, index) => (
              <li key={row.title.en} className="flex gap-5 border-t border-ink/12 py-6 last:pb-0">
                <span aria-hidden className="numeric font-heading text-2xl leading-none text-palm/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h4 text-ink">{row.title[locale]}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{row.detail[locale]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The train answer */}
      <section className="bg-background" aria-labelledby="rbg-train">
        <div className="site-container py-14 lg:py-16">
          <div className="grid gap-6 rounded-3xl border border-border p-7 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10 lg:p-10">
            <span className="grid size-14 place-items-center rounded-2xl bg-palm-deep text-white">
              <TrainFrontIcon aria-hidden className="size-7 rtl:-scale-x-100" />
            </span>
            <div className="max-w-3xl">
              <h2 id="rbg-train" className="text-h3 text-balance text-ink">
                {content.train.heading[locale]}
              </h2>
              {content.train.paragraphs.map((p) => (
                <p key={p.en} className="text-body mt-4 text-muted-foreground">
                  {p[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage band */}
      <section className="bg-ink" aria-labelledby="rbg-heritage">
        <div className="site-container flex flex-col gap-5 py-12 sm:flex-row sm:items-start sm:gap-8 lg:py-14">
          <LandmarkIcon aria-hidden className="size-8 shrink-0 text-brass" />
          <div className="max-w-3xl">
            <h2 id="rbg-heritage" className="text-h4 text-white">
              {content.heritage.heading[locale]}
            </h2>
            <p className="mt-2 text-[0.975rem] leading-relaxed text-white/75">{content.heritage.body[locale]}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="rbg-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="rbg-faq" faqs={content.faqs} />
          <div className="mt-12 rounded-2xl bg-sand p-6">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ul role="list" className="mt-4 flex flex-col gap-2.5">
              {content.quotation.items.map((item) => (
                <li key={item.en} className="text-sm leading-relaxed text-muted-foreground">
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA: two fields, sand and palm */}
      <section className="bg-background pb-14 lg:pb-20" aria-labelledby="rbg-cta">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-3xl lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <div className="bg-sand px-6 py-10 sm:px-10">
              <p className="text-eyebrow text-palm">{content.cta.eyebrow[locale]}</p>
              <h2 id="rbg-cta" className="text-h3 mt-3 text-balance text-ink">
                {content.cta.heading[locale]}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{content.cta.body[locale]}</p>
            </div>
            <div className="flex items-center justify-center bg-palm px-6 py-10">
              <Link
                href={href(locale, "getQuote")}
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-palm-deep transition-colors hover:bg-palm-soft"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background pt-0" aria-label={relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks locale={locale} heading={relatedHeading[locale]} links={content.related} />
        </div>
      </section>
    </>
  );
}
