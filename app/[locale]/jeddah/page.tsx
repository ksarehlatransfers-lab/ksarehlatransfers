import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CircleAlertIcon,
  ClockIcon,
  RouteIcon,
} from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { jeddahHub as content } from "@/lib/content/jeddah/hub";
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
}: PageProps<"/[locale]/jeddah">): Promise<Metadata> {
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

/** Two levels, not three: Jeddah is a city parent, like the Riyadh hub. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * The Jeddah destination hub.
 *
 * Design concept — "the doorway". Riyadh is a junction and its hub is a
 * signpost organised by service type. Jeddah is a doorway: most people are
 * passing through, and the moment the page has to meet is *arrival*. So the
 * composition is a sequence of thresholds rather than a grid of services, and
 * the axis is **where you are going next**.
 *
 * Deliberately unlike every published page (checked against all eleven in
 * docs/research/jeddah/jeddah-design-brief.md):
 *
 * - the hero content sits in **one narrow measure at the start edge** of a
 *   wide short photograph — not centred (AlUla), at the foot (Al Khobar), in
 *   a card (Taif), split (Dammam), bleeding off the end (airport) or absent
 *   (Buraydah, hotels);
 * - **no stat band at all** — the figures live on the destination cards,
 *   where they are actually useful;
 * - the signature element is a **caveat-carrying destination card**, which no
 *   existing card type has;
 * - the access notice is the first full-width element after the hero, because
 *   a reader who cannot legally complete the journey should learn that before
 *   they read a distance;
 * - the service sections are **full-width bands divided by rules** rather
 *   than alternating background colour;
 * - the CTA is **two-tone**, ink beside sand.
 */
export default async function JeddahPage({
  params,
}: PageProps<"/[locale]/jeddah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
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

      {/* Hero: a horizon, with the words in one narrow measure at the start edge */}
      <section
        className="relative isolate flex min-h-[26rem] flex-col justify-center overflow-hidden bg-ink lg:min-h-[30rem]"
        aria-labelledby="jeddah-title"
      >
        <Image
          src={photo.src}
          alt={altText(photo, locale)}
          width={photo.width}
          height={photo.height}
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-ink/60" />

        <div className="absolute inset-x-0 top-0">
          <div className="site-container pt-6">
            <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />
          </div>
        </div>

        <div className="site-container py-16">
          <div className="max-w-xl">
            <p className="text-eyebrow text-brass">
              {content.hero.eyebrow[locale]}
            </p>
            <h1
              id="jeddah-title"
              className="text-display mt-4 text-balance text-white"
            >
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 text-pretty text-white/80">
              {content.hero.lead[locale]}
            </p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-brass px-6 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              />
            </Link>
          </div>
        </div>
      </section>

      {/*
        The access notice. Placed before the destination cards on purpose.

        English gets a bordered block: that audience includes non-Muslim
        business and leisure travellers who may genuinely not know, and for
        them this is the fact that decides whether the journey exists.

        Arabic gets the same facts at lower visual weight — a bordered warning
        would read as condescending to an audience for whom this is common
        knowledge. Localised emphasis, identical facts.
      */}
      <section
        className={
          isArabic
            ? "bg-background"
            : "bg-palm-soft"
        }
        aria-labelledby="jeddah-access"
      >
        <div className="site-container py-10 lg:py-14">
          <div
            className={
              isArabic
                ? "max-w-3xl border-s-2 border-palm/40 ps-6"
                : "flex max-w-4xl gap-5"
            }
          >
            {isArabic ? null : (
              <span className="mt-0.5 shrink-0 text-palm-deep">
                <CircleAlertIcon className="size-7" aria-hidden />
              </span>
            )}
            <div>
              <h2
                id="jeddah-access"
                className={
                  isArabic
                    ? "text-h4 text-ink"
                    : "text-h3 text-balance text-palm-deep"
                }
              >
                {content.access.heading[locale]}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {content.access.body.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className={
                      isArabic
                        ? "text-sm leading-relaxed text-muted-foreground"
                        : "text-[0.975rem] leading-relaxed text-palm-deep/90"
                    }
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </div>
              <p
                className={
                  isArabic
                    ? "mt-4 text-sm leading-relaxed text-muted-foreground"
                    : "mt-4 border-t border-palm/25 pt-4 text-sm leading-relaxed text-palm-deep/80"
                }
              >
                {content.access.limit[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature element: destination cards that carry caveats */}
      <section className="section-y bg-background" aria-labelledby="jeddah-destinations">
        <div className="site-container">
          <h2 id="jeddah-destinations" className="text-h2 text-balance text-ink">
            {content.destinations.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.destinations.lead[locale]}
          </p>

          <ul role="list" className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.destinations.items.map((item) => (
              <li
                key={item.name.en}
                className={
                  item.primary
                    ? "flex flex-col rounded-2xl border-2 border-palm/35 bg-palm-soft/40 p-7 md:col-span-2 lg:col-span-1 lg:row-span-2"
                    : "flex flex-col rounded-2xl border border-border bg-card p-7"
                }
              >
                <h3 className="text-h3 text-ink">{item.name[locale]}</h3>

                <dl className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink/10 py-3.5 text-sm">
                  <div className="flex items-center gap-1.5">
                    <RouteIcon className="size-4 shrink-0 text-palm" aria-hidden />
                    <dt className="sr-only">
                      {isArabic ? "المسافة" : "Distance"}
                    </dt>
                    <dd className="numeric text-muted-foreground">
                      {item.distance[locale]}
                    </dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="size-4 shrink-0 text-palm" aria-hidden />
                    <dt className="sr-only">
                      {isArabic ? "الزمن" : "Driving time"}
                    </dt>
                    <dd className="numeric text-muted-foreground">
                      {item.duration[locale]}
                    </dd>
                  </div>
                </dl>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.reason[locale]}
                </p>

                {/* The caveat, in its own register. The start-edge rule
                    mirrors in Arabic because it is `border-s`. */}
                {item.caveat ? (
                  <p className="mt-5 border-s-2 border-brass/60 ps-3.5 text-[0.8125rem] leading-relaxed text-ink/75">
                    {item.caveat[locale]}
                  </p>
                ) : null}

                {item.routeKey ? (
                  <Link
                    href={href(locale, item.routeKey)}
                    className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-palm transition-colors hover:text-palm-deep"
                  >
                    {isArabic ? "تفاصيل المسار" : "Route details"}
                    <ArrowUpRightIcon
                      aria-hidden
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                    />
                  </Link>
                ) : item.plannedNote ? (
                  <p className="mt-5 text-xs text-muted-foreground">
                    {item.plannedNote[locale]}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
            {content.destinations.footnote[locale]}
          </p>
        </div>
      </section>

      {/* Threshold bands: steps in the day, divided by rules not by colour */}
      {content.bands.map((band, index) => {
        const bandPhoto = band.imageKey ? image(band.imageKey) : null;
        const headingId = `jeddah-band-${index}`;

        return (
          <section
            key={band.heading.en}
            className="border-t border-border bg-background"
            aria-labelledby={headingId}
          >
            <div className="site-container py-14 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
                <div>
                  <h2 id={headingId} className="text-h2 text-balance text-ink">
                    {band.heading[locale]}
                  </h2>
                  <p className="text-lead mt-4 text-pretty text-muted-foreground">
                    {band.lead[locale]}
                  </p>
                  <div className="mt-6 flex flex-col gap-5">
                    {band.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.en}
                        className="text-body text-muted-foreground"
                      >
                        {paragraph[locale]}
                      </p>
                    ))}
                  </div>
                </div>

                {bandPhoto ? (
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:sticky lg:top-28 lg:self-start">
                    <Image
                      src={bandPhoto.src}
                      alt={altText(bandPhoto, locale)}
                      width={bandPhoto.width}
                      height={bandPhoto.height}
                      placeholder="blur"
                      blurDataURL={bandPhoto.blurDataURL}
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="size-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        );
      })}

      {/* How a quotation works — the process, not an inclusions list */}
      <section className="border-t border-border bg-sand" aria-labelledby="jeddah-quotation">
        <div className="site-container py-14 lg:py-20">
          <div className="max-w-3xl">
            <h2 id="jeddah-quotation" className="text-h2 text-balance text-ink">
              {content.quotation.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">
              {content.quotation.lead[locale]}
            </p>

            <ol role="list" className="mt-8 flex flex-col">
              {content.quotation.items.map((item, index) => (
                <li
                  key={item.en}
                  className="flex gap-4 border-t border-ink/10 py-5 last:pb-0"
                >
                  <span
                    aria-hidden
                    className="numeric font-heading text-base leading-none text-palm/50"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item[locale]}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="jeddah-faq">
        <div className="site-container">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="jeddah-faq"
            faqs={content.faqs}
            layout="split"
          />
        </div>
      </section>

      {/* Two-tone CTA: ink beside sand. Not used anywhere else. */}
      <section aria-labelledby="jeddah-cta">
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="bg-ink">
            <div className="site-container py-14 lg:ps-10 lg:pe-14 lg:py-20 xl:ps-16">
              <div className="lg:ms-auto lg:max-w-xl">
                <p className="text-eyebrow text-brass">
                  {content.cta.eyebrow[locale]}
                </p>
                <h2
                  id="jeddah-cta"
                  className="text-h2 mt-3 text-balance text-white"
                >
                  {content.cta.heading[locale]}
                </h2>
                <p className="text-lead mt-4 text-pretty text-white/75">
                  {content.cta.body[locale]}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-sand">
            <div className="site-container py-10 lg:px-10 lg:py-20">
              <Link
                href={href(locale, "getQuote")}
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-palm px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-label={relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks
            locale={locale}
            heading={relatedHeading[locale]}
            links={content.related}
          />
        </div>
      </section>
    </>
  );
}
