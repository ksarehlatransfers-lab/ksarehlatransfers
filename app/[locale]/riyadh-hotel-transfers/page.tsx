import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, ArrowUpRightIcon, DoorOpenIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhHotel as content } from "@/lib/content/riyadh/hotel";
import { riyadhHub } from "@/lib/content/riyadh/hub";
import { href } from "@/lib/i18n/routes";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { ui } from "@/lib/i18n/dictionary";
import { image } from "@/lib/site-images";
import { pageMetadata } from "@/lib/seo";
import { clusterPageJsonLd, jsonLdScript, type Crumb } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/riyadh-hotel-transfers">): Promise<Metadata> {
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
 * Riyadh hotel transfers.
 *
 * Design concept — "the meeting point", and the quietest page in the cluster
 * by deliberate decision. This is the smallest service intent and largely a
 * sub-intent of the airport page, so it does not pretend otherwise: one
 * column from top to bottom, list-led, **no hero photograph and no stat
 * band**. It is the only page in the cluster with neither.
 *
 * No stat band because the page makes no distance or duration claim, so there
 * is no figure to date-stamp. No photograph because we hold none of a Riyadh
 * hotel and will not use hotel-branded imagery — the social card uses a city
 * view instead, which is what `imageKey` is for.
 *
 * The one visual accent is the entrance list, which is also the page's reason
 * to exist: naming the right door is where hotel transfers actually fail.
 */
export default async function RiyadhHotelTransfersPage({
  params,
}: PageProps<"/[locale]/riyadh-hotel-transfers">) {
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

      {/* A plain single-column opening. No photograph, no figures. */}
      <section className="bg-sand" aria-labelledby="hotel-title">
        <div className="site-container max-w-3xl py-10 lg:py-16">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />

          <p className="text-eyebrow mt-8 text-palm">
            {content.hero.eyebrow[locale]}
          </p>
          <h1
            id="hotel-title"
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
      </section>

      {/* The page's reason to exist, and its only visual accent */}
      <section className="section-y bg-background" aria-labelledby="hotel-entrance">
        <div className="site-container max-w-3xl">
          <span className="grid size-12 place-items-center rounded-xl bg-palm-soft text-palm-deep">
            <DoorOpenIcon className="size-6 rtl:-scale-x-100" aria-hidden />
          </span>
          <h2
            id="hotel-entrance"
            className="text-h2 mt-6 text-balance text-ink"
          >
            {content.entrance.heading[locale]}
          </h2>
          <p className="text-lead mt-4 text-pretty text-muted-foreground">
            {content.entrance.lead[locale]}
          </p>

          <ul role="list" className="mt-9 flex flex-col">
            {content.entrance.kinds.map((kind) => (
              <li
                key={kind.name.en}
                className="border-t border-ink/10 py-6 last:pb-0"
              >
                <h3 className="text-h4 text-ink">{kind.name[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {kind.detail[locale]}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-2xl bg-sand p-6 text-sm leading-relaxed text-muted-foreground">
            {content.entrance.footnote[locale]}
          </p>
        </div>
      </section>

      {/* One section per kind of hotel journey, each with its own links */}
      {content.journeys.map((journey, index) => {
        const headingId = `hotel-journey-${index}`;
        return (
          <section
            key={journey.heading.en}
            className={
              index % 2 === 0 ? "section-y bg-sand" : "section-y bg-background"
            }
            aria-labelledby={headingId}
          >
            <div className="site-container max-w-3xl">
              <h2 id={headingId} className="text-h2 text-balance text-ink">
                {journey.heading[locale]}
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                {journey.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="text-body text-muted-foreground"
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </div>

              <ul role="list" className="mt-8 flex flex-col gap-3">
                {journey.links.map((link) => (
                  <li key={link.routeKey}>
                    <Link
                      href={href(locale, link.routeKey)}
                      className="group flex items-start justify-between gap-4 rounded-xl bg-card p-5 ring-1 ring-ink/8 transition-colors hover:ring-palm/35"
                    >
                      <span>
                        <span className="block text-[0.95rem] font-semibold text-ink">
                          {link.label[locale]}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {link.note[locale]}
                        </span>
                      </span>
                      <ArrowUpRightIcon
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-palm transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* The process, rather than a list of inclusions nobody confirmed */}
      <section className="section-y bg-sand" aria-labelledby="hotel-quotation">
        <div className="site-container max-w-3xl">
          <h2 id="hotel-quotation" className="text-h2 text-balance text-ink">
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

          <div className="mt-10 rounded-2xl bg-card p-7 ring-1 ring-ink/8">
            {content.quotation.booking.map((paragraph) => (
              <p
                key={paragraph.en}
                className="text-sm leading-relaxed text-muted-foreground not-first:mt-3"
              >
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="hotel-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="hotel-faq"
            faqs={content.faqs}
          />
        </div>
      </section>

      {/* The quietest closing in the cluster: no colour field at all */}
      <section className="bg-background" aria-labelledby="hotel-cta">
        <div className="site-container max-w-3xl border-t border-border py-16 lg:py-20">
          <p className="text-eyebrow text-palm">
            {content.cta.eyebrow[locale]}
          </p>
          <h2 id="hotel-cta" className="text-h2 mt-3 text-balance text-ink">
            {content.cta.heading[locale]}
          </h2>
          <p className="text-lead mt-4 text-pretty text-muted-foreground">
            {content.cta.body[locale]}
          </p>
          <Link
            href={href(locale, "getQuote")}
            className="group mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-palm px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
            />
          </Link>

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
