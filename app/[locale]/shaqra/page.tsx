import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, CarFrontIcon, GraduationCapIcon, LandmarkIcon, UsersIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { shaqra as content } from "@/lib/content/riyadh-region/shaqra";
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
}: PageProps<"/[locale]/shaqra">): Promise<Metadata> {
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
const reasonIcons = [GraduationCapIcon, UsersIcon, LandmarkIcon] as const;

/**
 * Shaqra.
 *
 * Design concept — "historic town, road trip". A long single road to an old
 * town, and a second heritage town beyond it. The page reads like a journey:
 *
 * - **Text-first hero, then a 3:1 panorama** of the old walls as a captioned
 *   `<figure>` — the landscape after the words, at a wider ratio than any
 *   other page's photograph.
 * - Signature component: a **horizontal road ruler** — Riyadh 0 → Shaqra 180
 *   → Ushaiqer +18 — with milestone markers on a dashed road line; it turns
 *   vertical on small screens and mirrors for Arabic.
 * - **Two heritage towns side by side**, Ushaiqer with its own photograph.
 * - "Why people make the journey" as three icon tiles, with the
 *   no-commuting limit stated plainly beneath them.
 * - CTA: an ink panel with a dashed road line along its top edge.
 */
export default async function ShaqraPage({ params }: PageProps<"/[locale]/shaqra">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const ushaiqer = image(content.ushaiqerImageKey);
  const isArabic = locale === "ar";

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

      {/* Text first, then the panorama */}
      <section className="bg-background" aria-labelledby="shq-title">
        <div className="site-container pt-10 lg:pt-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 max-w-4xl">
            <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
            <h1 id="shq-title" className="text-display mt-4 text-balance text-ink">
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 max-w-3xl text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
        <figure className="mt-12">
          <div className="relative aspect-[2/1] w-full overflow-hidden sm:aspect-[3/1]">
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
          <figcaption className="site-container pt-3 text-xs text-muted-foreground">
            {content.hero.caption[locale]}
          </figcaption>
        </figure>
      </section>

      {/* Signature: the road ruler */}
      <section className="section-y bg-background" aria-labelledby="shq-road">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="shq-road" className="text-h2 text-balance text-ink">
              {content.road.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.road.lead[locale]}</p>
          </div>

          <ol role="list" className="relative mt-12 flex flex-col gap-10 md:flex-row md:gap-0">
            {/* The road line: vertical on mobile, horizontal from md */}
            <span
              aria-hidden
              className="absolute start-[0.6875rem] top-3 bottom-3 border-s-2 border-dashed border-palm/50 md:start-0 md:end-0 md:top-[0.6875rem] md:bottom-auto md:border-s-0 md:border-t-2"
            />
            {content.road.stops.map((stop, index) => (
              <li key={stop.name.en} className="relative flex gap-5 md:flex-1 md:flex-col md:gap-0 md:pe-8">
                <span
                  aria-hidden
                  className={`relative z-10 mt-0.5 size-6 shrink-0 rounded-full border-4 border-background ${
                    index === 1 ? "bg-palm" : "bg-brass"
                  }`}
                />
                <div className="md:mt-5">
                  <p className="numeric font-heading text-3xl text-ink">
                    {stop.km}
                    <span className="ms-1 text-base text-muted-foreground">{isArabic ? "كم" : "km"}</span>
                  </p>
                  <h3 className="mt-1 text-h4 text-ink">{stop.name[locale]}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{stop.note[locale]}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-2 rounded-2xl bg-sand p-5 sm:flex-row sm:items-center sm:gap-4">
            <CarFrontIcon aria-hidden className="size-5 shrink-0 text-palm rtl:-scale-x-100" />
            <p className="text-sm font-semibold text-ink">{content.road.estimate[locale]}</p>
            <p className="text-xs leading-relaxed text-muted-foreground sm:ms-auto sm:max-w-md">{content.road.footnote[locale]}</p>
          </div>
        </div>
      </section>

      {/* Two heritage towns side by side */}
      <section className="section-y bg-sand" aria-labelledby="shq-heritage">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="shq-heritage" className="text-h2 text-balance text-ink">
              {content.heritage.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.heritage.lead[locale]}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {content.heritage.stops.map((stop, index) => (
              <article key={stop.name.en} className="flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-ink/8">
                {index === 1 ? (
                  <div className="relative aspect-16/9">
                    <Image
                      src={ushaiqer.src}
                      alt={altText(ushaiqer, locale)}
                      width={ushaiqer.width}
                      height={ushaiqer.height}
                      placeholder="blur"
                      blurDataURL={ushaiqer.blurDataURL}
                      loading="lazy"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="size-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-16/9 items-end bg-palm-deep p-6">
                    <p className="numeric font-heading text-6xl leading-none text-palm-soft">1817</p>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h3 className="text-h3 text-ink">{stop.name[locale]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stop.summary[locale]}</p>
                  <ul role="list" className="mt-5 flex flex-col gap-2">
                    {stop.points.map((point) => (
                      <li key={point.en} className="flex gap-3 text-sm text-ink/85">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" />
                        {point[locale]}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/80">{content.heritage.dayTrip[locale]}</p>
        </div>
      </section>

      {/* Why people make the journey */}
      <section className="section-y bg-background" aria-labelledby="shq-reasons">
        <div className="site-container">
          <h2 id="shq-reasons" className="text-h2 text-balance text-ink">
            {content.reasons.heading[locale]}
          </h2>
          <ul role="list" className="mt-10 grid gap-4 md:grid-cols-3">
            {content.reasons.items.map((item, index) => {
              const Icon = reasonIcons[index] ?? LandmarkIcon;
              return (
                <li key={item.title.en} className="rounded-2xl border border-border p-6">
                  <Icon aria-hidden className="size-6 text-palm" />
                  <h3 className="mt-4 text-h4 text-ink">{item.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail[locale]}</p>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm font-medium text-ink/80">{content.reasons.limit[locale]}</p>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="shq-faq">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
            <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="shq-faq" faqs={content.faqs} />
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
              <ol role="list" className="mt-4 flex flex-col gap-3">
                {content.quotation.items.map((item, index) => (
                  <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="numeric font-heading text-palm/60">
                      {index + 1}
                    </span>
                    {item[locale]}
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA: an ink panel under a dashed road line */}
      <section className="bg-background py-14 lg:py-20" aria-labelledby="shq-cta">
        <div className="site-container">
          <div className="rounded-3xl border-t-4 border-dashed border-brass bg-ink px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
              <h2 id="shq-cta" className="text-h3 mt-3 text-balance text-white">
                {content.cta.heading[locale]}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">{content.cta.body[locale]}</p>
            </div>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep lg:mt-0"
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
