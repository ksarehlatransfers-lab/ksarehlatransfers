import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, ExternalLinkIcon, PlaneLandingIcon, TicketIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { diriyah as content } from "@/lib/content/riyadh-region/diriyah";
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
}: PageProps<"/[locale]/diriyah">): Promise<Metadata> {
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
 * A Najdi stepped parapet, drawn as a clip-path. Used as the top edge of the
 * gate pillars and the place cards: the crenellation of At-Turaif's mudbrick
 * walls, abstracted. Symmetric, so it needs no RTL mirroring.
 */
const crenellation =
  "[clip-path:polygon(0_14px,12%_14px,12%_0,22%_0,22%_14px,39%_14px,39%_0,61%_0,61%_14px,78%_14px,78%_0,88%_0,88%_14px,100%_14px,100%_100%,0_100%)]";

/**
 * Diriyah.
 *
 * Design concept — "heritage gateway, access plan". The journey is short;
 * what matters is arriving at the right part of Diriyah and planning the way
 * back. So the page frames rather than describes:
 *
 * - **A centred gate**: the H1 above, a tall photograph between two solid
 *   **gate pillars** carrying the three key figures, each pillar topped with
 *   a Najdi stepped parapet. No other page uses a centred or framed hero.
 * - Signature components: **"which part of Diriyah" cards** with parapet
 *   tops, and an **access plan in three moments** (before / arrive / leave)
 *   on an ink band.
 * - A tickets notice that sends readers to the official operator, because
 *   hours and passes change and we publish neither.
 * - CTA: a centred sand panel with a parapet top — the gate again.
 */
export default async function DiriyahPage({ params }: PageProps<"/[locale]/diriyah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const [leftFact, rightFact, unesco] = content.facts;

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

      {/* The gate */}
      <section className="bg-background" aria-labelledby="dir-title">
        <div className="site-container pt-10 pb-14 lg:pt-14 lg:pb-20">
          <div className="flex justify-center">
            <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          </div>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
            <h1 id="dir-title" className="text-display mt-4 text-balance text-ink">
              {content.hero.h1[locale]}
            </h1>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 items-end gap-3 sm:gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)]">
            {[leftFact, rightFact].map((fact, index) => (
              <div
                key={fact.label.en}
                className={`${crenellation} flex flex-col justify-end rounded-b-xl bg-sand-deep px-4 pt-10 pb-5 text-center sm:px-6 md:h-80 ${
                  index === 0 ? "md:order-1" : "md:order-3"
                }`}
              >
                <p className="numeric font-heading text-2xl text-ink sm:text-3xl">{fact.value[locale]}</p>
                <p className="mt-1.5 text-xs font-semibold text-ink/70">{fact.label[locale]}</p>
              </div>
            ))}
            <div className="col-span-2 overflow-hidden rounded-t-xl rounded-b-xl md:order-2 md:col-span-1">
              <div className="relative aspect-4/5">
                <Image
                  src={photo.src}
                  alt={altText(photo, locale)}
                  width={photo.width}
                  height={photo.height}
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  priority
                  sizes="(min-width: 768px) 28rem, 100vw"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-eyebrow text-palm">
              {unesco.label[locale]} · <span className="numeric">{unesco.value[locale]}</span>
            </p>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* Which part of Diriyah */}
      <section className="section-y bg-sand" aria-labelledby="dir-places">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="dir-places" className="text-h2 text-balance text-ink">
              {content.places.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.places.lead[locale]}</p>
          </div>
          <ul role="list" className="mt-10 grid gap-4 md:grid-cols-3">
            {content.places.items.map((place) => (
              <li key={place.name.en} className={`${crenellation} flex flex-col rounded-b-2xl bg-card px-6 pt-10 pb-6`}>
                <h3 className="text-h4 text-ink">{place.name[locale]}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{place.detail[locale]}</p>
                <p className="mt-5 border-t border-ink/10 pt-4 text-[0.8125rem] font-medium leading-relaxed text-palm-deep">
                  {place.tell[locale]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The access plan, in three moments */}
      <section className="bg-ink" aria-labelledby="dir-plan">
        <div className="site-container py-16 lg:py-20">
          <h2 id="dir-plan" className="text-h2 max-w-3xl text-balance text-white">
            {content.plan.heading[locale]}
          </h2>
          <p className="mt-4 max-w-2xl text-[0.975rem] leading-relaxed text-white/70">{content.plan.lead[locale]}</p>
          <ol role="list" className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {content.plan.steps.map((step, index) => (
              <li
                key={step.label.en}
                className={index > 0 ? "md:border-s md:border-white/15 md:ps-10" : "md:pe-10"}
              >
                <p className="font-heading text-4xl text-brass">{step.label[locale]}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.detail[locale]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tickets: the official operator, not us */}
      <section className="bg-background" aria-labelledby="dir-tickets">
        <div className="site-container py-14 lg:py-16">
          <div className="flex max-w-4xl flex-col gap-5 rounded-2xl border border-brass/40 bg-sand/60 p-6 sm:flex-row sm:gap-6 lg:p-8">
            <TicketIcon aria-hidden className="size-7 shrink-0 text-brass-deep" />
            <div>
              <h2 id="dir-tickets" className="text-h4 text-ink">
                {content.tickets.heading[locale]}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{content.tickets.body[locale]}</p>
              <a
                href={content.tickets.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-palm-deep underline decoration-palm/40 underline-offset-4 hover:decoration-palm-deep"
              >
                {content.tickets.linkLabel[locale]}
                <ExternalLinkIcon aria-hidden className="size-4" />
              </a>
              <p className="mt-1.5 text-xs text-muted-foreground">{content.tickets.note[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* From the airport */}
      <section className="pb-16 lg:pb-24" aria-labelledby="dir-airport">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
            <div className="flex items-start gap-3">
              <PlaneLandingIcon aria-hidden className="mt-1.5 size-6 shrink-0 text-palm rtl:-scale-x-100" />
              <h2 id="dir-airport" className="text-h2 text-balance text-ink">
                {content.airport.heading[locale]}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {content.airport.paragraphs.map((p) => (
                <p key={p.en} className="text-body text-muted-foreground">
                  {p[locale]}
                </p>
              ))}
              <Link
                href={href(locale, "riyadhAirport")}
                className="text-sm font-semibold text-palm underline decoration-palm/40 underline-offset-4 hover:text-palm-deep"
              >
                {locale === "ar" ? "تفاصيل النقل من مطار الملك خالد" : "More about King Khalid airport transfers"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="dir-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="dir-faq" faqs={content.faqs} layout="split" />
          <div className="mt-12 max-w-3xl border-t border-ink/10 pt-8">
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

      {/* CTA: the gate again — a centred panel under a parapet */}
      <section className="bg-background pt-14 lg:pt-20" aria-labelledby="dir-cta">
        <div className="site-container">
          <div className={`${crenellation} mx-auto max-w-3xl rounded-b-3xl bg-palm-deep px-6 pt-16 pb-12 text-center sm:px-12`}>
            <p className="text-eyebrow text-palm-soft">{content.cta.eyebrow[locale]}</p>
            <h2 id="dir-cta" className="text-h2 mx-auto mt-4 max-w-xl text-balance text-white">
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

      <section className="section-y bg-background" aria-label={relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks locale={locale} heading={relatedHeading[locale]} links={content.related} />
        </div>
      </section>
    </>
  );
}
