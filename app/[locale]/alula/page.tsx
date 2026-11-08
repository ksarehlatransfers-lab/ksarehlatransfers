import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, PlaneLandingIcon, TicketIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { alula as content } from "@/lib/content/madinah-region/alula";
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
}: PageProps<"/[locale]/alula">): Promise<Metadata> {
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

/** Home → AlUla: a destination hub in its own right. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/** Asymmetric, wind-worn corners — the sandstone outline used across the page. */
const eroded = "rounded-tl-[4.5rem] rounded-br-[4.5rem] rounded-tr-xl rounded-bl-xl";

/**
 * AlUla.
 *
 * Design concept — "heritage oasis, three layers". The page's job is to keep
 * three things apart: the governorate, the town and the individual sites.
 *
 * - **Hero on sand-deep**: the H1 at the start, the Hegra photograph at the
 *   end inside an **eroded sandstone outline** (asymmetric corners) — a shape
 *   used nowhere else.
 * - Signature component: a **nested layers diagram** — governorate (dashed
 *   frame) containing town (solid frame) containing the sites as chips with
 *   distances — beside the Elephant Rock photograph.
 * - An ink airport band, a three-column Madinah→AlUla figure row with vertical
 *   rules, and a brass-edged ticket notice.
 * - CTA: a sand-deep panel in the eroded outline.
 */
export default async function AlUlaPage({ params }: PageProps<"/[locale]/alula">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const elephant = image(content.elephantImageKey);
  const layers = content.layers;

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

      {/* Hero on sand-deep, the photograph in an eroded outline */}
      <section className="bg-sand-deep" aria-labelledby="ula-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <p className="text-eyebrow text-palm-deep">{content.hero.eyebrow[locale]}</p>
              <h1 id="ula-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-ink/75">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
            <div className={`relative aspect-4/5 overflow-hidden ${eroded} sm:aspect-3/2 lg:aspect-4/5`}>
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature: governorate → town → sites */}
      <section className="section-y bg-background" aria-labelledby="ula-layers">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="ula-layers" className="text-h2 text-balance text-ink">
              {layers.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{layers.lead[locale]}</p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-12">
            <div className="rounded-3xl border-2 border-dashed border-brass/60 p-5 sm:p-7">
              <h3 className="text-eyebrow text-brass-deep">{layers.governorate.name[locale]}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{layers.governorate.detail[locale]}</p>
              <div className="mt-6 rounded-2xl border-2 border-palm/50 bg-palm-soft/30 p-5 sm:p-6">
                <h3 className="text-eyebrow text-palm-deep">{layers.town.name[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{layers.town.detail[locale]}</p>
                <ul role="list" className="mt-5 grid gap-3 sm:grid-cols-3">
                  {layers.sites.map((site) => (
                    <li key={site.name.en} className="rounded-xl bg-white p-4 ring-1 ring-ink/8">
                      <p className="numeric text-xs font-semibold text-palm">{site.distance[locale]}</p>
                      <h4 className="mt-1 text-[0.95rem] font-semibold text-ink">{site.name[locale]}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{site.detail[locale]}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`relative aspect-3/2 self-start overflow-hidden ${eroded} lg:aspect-4/5`}>
              <Image
                src={elephant.src}
                alt={altText(elephant, locale)}
                width={elephant.width}
                height={elephant.height}
                placeholder="blur"
                blurDataURL={elephant.blurDataURL}
                loading="lazy"
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Airport band */}
      <section className="bg-ink" aria-labelledby="ula-airport">
        <div className="site-container grid gap-6 py-14 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10 lg:py-16">
          <span className="grid size-14 place-items-center rounded-2xl bg-brass text-ink">
            <PlaneLandingIcon aria-hidden className="size-7 rtl:-scale-x-100" />
          </span>
          <div className="max-w-3xl">
            <h2 id="ula-airport" className="text-h3 text-balance text-white">
              {content.airport.heading[locale]}
            </h2>
            {content.airport.paragraphs.map((p) => (
              <p key={p.en} className="mt-4 text-[0.975rem] leading-relaxed text-white/75">
                {p[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* From Madinah: a figure row with vertical rules */}
      <section className="section-y bg-background" aria-labelledby="ula-madinah">
        <div className="site-container">
          <h2 id="ula-madinah" className="text-h2 text-balance text-ink">
            {content.madinah.heading[locale]}
          </h2>
          <dl className="mt-8 grid grid-cols-3 divide-x divide-ink/12 border-y border-ink/12 rtl:divide-x-reverse">
            {content.madinah.facts.map((f) => (
              <div key={f.label.en} className="px-3 py-5 sm:px-6">
                <dt className="text-eyebrow text-palm">{f.label[locale]}</dt>
                <dd className="numeric mt-2 font-heading text-2xl text-ink sm:text-3xl">{f.value[locale]}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-12">
            {content.madinah.paragraphs.map((p) => (
              <p key={p.en} className="text-body text-muted-foreground">
                {p[locale]}
              </p>
            ))}
          </div>
          <Link
            href={href(locale, "madinah")}
            className="mt-6 inline-flex text-sm font-semibold text-palm underline decoration-palm/40 underline-offset-4 hover:text-palm-deep"
          >
            {locale === "ar" ? "التوصيل في المدينة المنورة: المطار والقطار والفنادق" : "Madinah transfers: airport, station and hotels"}
          </Link>
        </div>
      </section>

      {/* Tickets and access: the official operators, not us */}
      <section className="bg-background pb-16 lg:pb-20" aria-labelledby="ula-access">
        <div className="site-container">
          <div className="flex max-w-4xl flex-col gap-4 rounded-2xl border-s-4 border-brass bg-sand/60 p-6 sm:flex-row sm:gap-6 lg:p-8">
            <TicketIcon aria-hidden className="size-7 shrink-0 text-brass-deep" />
            <div>
              <h2 id="ula-access" className="text-h4 text-ink">
                {content.access.heading[locale]}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{content.access.body[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="ula-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="ula-faq" faqs={content.faqs} />
          <div className="mt-12 border-t border-ink/10 pt-8">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ol role="list" className="mt-4 flex flex-col gap-3">
              {content.quotation.items.map((item, index) => (
                <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="numeric font-heading text-brass-deep">
                    {index + 1}
                  </span>
                  {item[locale]}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA: sand-deep in the eroded outline */}
      <section className="bg-background py-14 lg:py-20" aria-labelledby="ula-cta">
        <div className="site-container">
          <div className={`mx-auto max-w-4xl bg-sand-deep px-6 py-12 text-center sm:px-12 ${eroded}`}>
            <p className="text-eyebrow text-palm-deep">{content.cta.eyebrow[locale]}</p>
            <h2 id="ula-cta" className="text-h2 mx-auto mt-4 max-w-xl text-balance text-ink">
              {content.cta.heading[locale]}
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-xl text-pretty text-ink/75">{content.cta.body[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-ink px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
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
