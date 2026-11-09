import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, HotelIcon, LandmarkIcon, PlaneLandingIcon, TicketIcon, TrainFrontIcon, TreePalmIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { alAhsa as content } from "@/lib/content/eastern-province/al-ahsa";
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
}: PageProps<"/[locale]/al-ahsa">): Promise<Metadata> {
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

/** Home → Al Ahsa: a destination hub covering Hofuf and Al-Mubarraz. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/** The oasis arch: a tall rounded top over square shoulders. */
const arch = "rounded-t-[999px] rounded-b-3xl";

/**
 * Al Ahsa.
 *
 * Design concept — "the oasis grove". The service is narrow (airport and
 * hotels) and the place is large, so the page keeps the two visibly apart:
 *
 * - **Hero on palm-deep**: the only dark-green opening in the site, the H1 in
 *   white, and Qasr Ibrahim inside an **arch frame**.
 * - Two service cards (airport, hotels) on palm-soft — the whole offer, said
 *   once and plainly, with the station set apart as context.
 * - Signature component: **the grove** — a grid of place tiles (the two
 *   cities on sand, the UNESCO component parts on palm with a brass badge),
 *   given as orientation rather than as stops.
 * - A brass-edged "visiting" notice beside the Suq al-Qaysariyah photograph,
 *   a split FAQ, and a CTA panel under the same arch.
 */
export default async function AlAhsaPage({ params }: PageProps<"/[locale]/al-ahsa">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const souq = image(content.souqImageKey);
  const serviceIcons = [PlaneLandingIcon, HotelIcon];

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

      {/* Hero on palm-deep, Qasr Ibrahim in the arch */}
      <section className="bg-palm-deep text-white" aria-labelledby="ahs-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <p className="text-eyebrow text-brass">{content.hero.eyebrow[locale]}</p>
              <h1 id="ahs-title" className="text-display mt-4 text-balance text-white">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-white/80">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-brass px-6 text-sm font-semibold text-ink transition-colors hover:bg-white"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
            <div className={`relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden ${arch} ring-8 ring-white/10`}>
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                priority
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we cover: two cards, the station set apart */}
      <section className="section-y bg-palm-soft/50" aria-labelledby="ahs-service">
        <div className="site-container">
          <h2 id="ahs-service" className="text-h2 max-w-3xl text-balance text-ink">
            {content.service.heading[locale]}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {content.service.cards.map((card, index) => {
              const Icon = serviceIcons[index] ?? HotelIcon;
              return (
                <article key={card.title.en} className="rounded-3xl bg-white p-7 ring-1 ring-ink/8 sm:p-8">
                  <span className="grid size-12 place-items-center rounded-2xl bg-palm text-white">
                    <Icon aria-hidden className="size-6 rtl:-scale-x-100" />
                  </span>
                  <h3 className="text-h3 mt-5 text-ink">{card.title[locale]}</h3>
                  {card.paragraphs.map((p) => (
                    <p key={p.en} className="text-body mt-3 text-muted-foreground">
                      {p[locale]}
                    </p>
                  ))}
                </article>
              );
            })}
          </div>
          <p className="mt-6 flex max-w-3xl items-start gap-2.5 text-sm leading-relaxed text-ink/70">
            <TrainFrontIcon aria-hidden className="mt-0.5 size-4 shrink-0" />
            {content.service.railNote[locale]}
          </p>
        </div>
      </section>

      {/* Signature: the grove */}
      <section className="section-y bg-background" aria-labelledby="ahs-grove">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="ahs-grove" className="text-h2 text-balance text-ink">
              {content.grove.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.grove.lead[locale]}</p>
          </div>
          <ul role="list" className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.grove.tiles.map((tile) => (
              <li
                key={tile.name.en}
                className={tile.unesco ? "flex flex-col rounded-2xl bg-palm-deep p-5 text-white" : "flex flex-col rounded-2xl bg-sand p-5"}
              >
                <div className="flex items-start justify-between gap-3">
                  {tile.unesco ? (
                    <TreePalmIcon aria-hidden className="size-6 text-brass" />
                  ) : (
                    <LandmarkIcon aria-hidden className="size-6 text-palm-deep" />
                  )}
                  {tile.unesco ? (
                    <span className="rounded-full bg-brass px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-ink">UNESCO</span>
                  ) : null}
                </div>
                <h3 className={tile.unesco ? "mt-4 font-heading text-xl text-white" : "mt-4 font-heading text-xl text-ink"}>{tile.name[locale]}</h3>
                <p className={tile.unesco ? "text-eyebrow mt-1 text-brass/90" : "text-eyebrow mt-1 text-palm"}>{tile.kind[locale]}</p>
                <p className={tile.unesco ? "mt-3 text-sm leading-relaxed text-white/75" : "mt-3 text-sm leading-relaxed text-ink/75"}>{tile.note[locale]}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">{content.grove.unescoNote[locale]}</p>
        </div>
      </section>

      {/* Visiting: the souq photograph beside a brass notice */}
      <section className="bg-background pb-16 lg:pb-20" aria-labelledby="ahs-visit">
        <div className="site-container grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="relative aspect-3/2 overflow-hidden rounded-3xl">
            <Image
              src={souq.src}
              alt={altText(souq, locale)}
              width={souq.width}
              height={souq.height}
              placeholder="blur"
              blurDataURL={souq.blurDataURL}
              loading="lazy"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="size-full object-cover"
            />
          </div>
          <div className="rounded-3xl border-s-4 border-brass bg-sand/70 p-7 sm:p-9">
            <TicketIcon aria-hidden className="size-7 text-brass-deep" />
            <h2 id="ahs-visit" className="text-h3 mt-4 text-ink">
              {content.visit.heading[locale]}
            </h2>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-ink/80">{content.visit.body[locale]}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="ahs-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="ahs-faq" faqs={content.faqs} layout="split" />
          <div className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-ink/8">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ul role="list" className="mt-4 grid gap-4 md:grid-cols-3">
              {content.quotation.items.map((item) => (
                <li key={item.en} className="border-t-2 border-palm/40 pt-3 text-sm leading-relaxed text-muted-foreground">
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA: a palm panel under the arch */}
      <section className="bg-background py-14 lg:py-20" aria-labelledby="ahs-cta">
        <div className="site-container">
          <div className="mx-auto max-w-3xl rounded-t-[12rem] rounded-b-3xl bg-palm px-6 pt-20 pb-12 text-center sm:px-12">
            <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
            <h2 id="ahs-cta" className="text-h2 mx-auto mt-4 max-w-xl text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-xl text-pretty text-white/80">{content.cta.body[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-palm-deep transition-colors hover:bg-palm-soft"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
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
