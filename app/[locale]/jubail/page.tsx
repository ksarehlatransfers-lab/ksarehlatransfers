import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, BanIcon, CheckIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { jubail as content } from "@/lib/content/eastern-province/jubail";
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
}: PageProps<"/[locale]/jubail">): Promise<Metadata> {
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

/** Home → Jubail: a destination hub in its own right. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * Jubail.
 *
 * Design concept — "two Jubails". One name, two places, and a hard line
 * between public addresses and controlled sites. The page is built from
 * halves:
 *
 * - **Hero**: a centred H1 over a two-panel split — the old town on sand (the
 *   town-centre minaret, its Arabic name set large) beside the Industrial City
 *   on ink (the marina, its Arabic name in brass), a thin rule between them.
 *   No other page opens with a split.
 * - Signature component: **public vs controlled** — a palm checklist of the
 *   addresses we cover facing an ink list of the sites we do not enter, with
 *   the access statement under both.
 * - A ruled three-figure orientation row, a stacked FAQ with a numbered
 *   quotation list, and an ink CTA split by the same thin rule.
 */
export default async function JubailPage({ params }: PageProps<"/[locale]/jubail">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const marina = image(content.imageKey);
  const town = image(content.townImageKey);
  const isArabic = locale === "ar";
  const [oldTown, industrial] = content.places;

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
              imageUrl: marina.src,
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

      {/* Hero: centred heading over the two Jubails */}
      <section className="bg-background" aria-labelledby="jbl-title">
        <div className="site-container py-10 lg:py-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
            <h1 id="jbl-title" className="text-display mt-4 text-balance text-ink">
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>

          {/* Signature split: the two places */}
          <div className="mt-12 grid overflow-hidden rounded-3xl md:grid-cols-2">
            {[
              { place: oldTown, photo: town, dark: false },
              { place: industrial, photo: marina, dark: true },
            ].map(({ place, photo, dark }) => (
              <article
                key={place.name.en}
                className={dark ? "flex flex-col bg-ink text-white md:border-s md:border-white/20" : "flex flex-col bg-sand"}
                aria-labelledby={`jbl-${dark ? "industrial" : "town"}`}
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={altText(photo, locale)}
                    width={photo.width}
                    height={photo.height}
                    placeholder="blur"
                    blurDataURL={photo.blurDataURL}
                    priority={dark}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  {isArabic ? (
                    <h2 id={`jbl-${dark ? "industrial" : "town"}`} className={dark ? "font-heading text-4xl text-brass" : "font-heading text-4xl text-palm-deep"}>
                      {place.arName}
                    </h2>
                  ) : (
                    <>
                      <p lang="ar" className={dark ? "font-heading text-4xl text-brass" : "font-heading text-4xl text-palm-deep"}>
                        {place.arName}
                      </p>
                      <h2 id={`jbl-${dark ? "industrial" : "town"}`} className={dark ? "text-h3 mt-3 text-white" : "text-h3 mt-3 text-ink"}>
                        {place.name[locale]}
                      </h2>
                    </>
                  )}
                  <p className={dark ? "text-eyebrow mt-2 text-brass/80" : "text-eyebrow mt-2 text-palm"}>{place.role[locale]}</p>
                  <p className={dark ? "mt-4 flex-1 text-[0.975rem] leading-relaxed text-white/80" : "mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink/75"}>
                    {place.detail[locale]}
                  </p>
                  <p
                    className={
                      dark
                        ? "mt-6 border-t border-white/15 pt-4 text-sm font-medium text-white/85"
                        : "mt-6 border-t border-ink/12 pt-4 text-sm font-medium text-ink/80"
                    }
                  >
                    {place.tell[locale]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signature: public addresses vs controlled sites */}
      <section className="section-y bg-sand" aria-labelledby="jbl-access">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="jbl-access" className="text-h2 text-balance text-ink">
              {content.access.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.access.lead[locale]}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-ink/8">
              <h3 className="text-h4 text-ink">{content.access.publicTitle[locale]}</h3>
              <ul role="list" className="mt-5 flex flex-col gap-3">
                {content.access.publicItems.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-[0.975rem] text-ink/85">
                    <CheckIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-palm" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-ink p-7">
              <h3 className="text-h4 text-white">{content.access.controlledTitle[locale]}</h3>
              <ul role="list" className="mt-5 flex flex-col gap-3">
                {content.access.controlledItems.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-[0.975rem] text-white/85">
                    <BanIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-brass" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-4xl rounded-2xl border-s-4 border-brass bg-white/70 p-6 text-sm leading-relaxed text-ink/80">
            {content.access.statement[locale]}
          </p>
        </div>
      </section>

      {/* Orientation: a ruled figure row */}
      <section className="section-y bg-background" aria-labelledby="jbl-where">
        <div className="site-container">
          <h2 id="jbl-where" className="text-h2 text-balance text-ink">
            {content.orientation.heading[locale]}
          </h2>
          <dl className="mt-8 grid border-y border-ink/12 md:grid-cols-3 md:divide-x md:divide-ink/12 md:rtl:divide-x-reverse">
            {content.orientation.facts.map((f) => (
              <div key={f.label.en} className="border-b border-ink/12 py-6 last:border-b-0 md:border-b-0 md:px-6 md:first:ps-0">
                <dt className="text-eyebrow text-palm">{f.label[locale]}</dt>
                <dd className="numeric mt-2 font-heading text-2xl text-ink sm:text-3xl">{f.value[locale]}</dd>
                <dd className="mt-2 text-sm text-muted-foreground">{f.note[locale]}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-12">
            {content.orientation.paragraphs.map((p) => (
              <p key={p.en} className="text-body text-muted-foreground">
                {p[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-sand/60" aria-labelledby="jbl-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="jbl-faq" faqs={content.faqs} />
          <div className="mt-12 border-t border-ink/10 pt-8">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ol role="list" className="mt-4 flex flex-col gap-3">
              {content.quotation.items.map((item, index) => (
                <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="numeric font-heading text-palm-deep">
                    {index + 1}
                  </span>
                  {item[locale]}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA: ink, split by the same thin rule */}
      <section className="bg-ink" aria-labelledby="jbl-cta">
        <div className="site-container grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:py-20">
          <div className="md:border-e md:border-white/20 md:pe-10">
            <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
            <h2 id="jbl-cta" className="text-h2 mt-3 text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="mt-3 max-w-2xl text-[0.975rem] leading-relaxed text-white/75">{content.cta.body[locale]}</p>
          </div>
          <Link
            href={href(locale, "getQuote")}
            className="group inline-flex h-13 items-center justify-center gap-2 self-start rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-sand md:self-auto"
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
