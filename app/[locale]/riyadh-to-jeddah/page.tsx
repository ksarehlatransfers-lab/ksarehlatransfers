import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhToJeddah as content } from "@/lib/content/riyadh/jeddah";
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
}: PageProps<"/[locale]/riyadh-to-jeddah">): Promise<Metadata> {
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

const relatedHeading = {
  en: "Other journeys from Riyadh",
  ar: "رحلات أخرى من الرياض",
};

/**
 * Riyadh to Jeddah.
 *
 * Design concept — the long haul, told as a journey. A full-bleed photograph
 * of the destination behind the headline, a stat band straddling the fold,
 * then the page's centrepiece: a vertical timeline of the route with the
 * distance marked at each stage. Nothing else in the cluster uses that shape,
 * because no other route is long enough to earn it.
 */
export default async function RiyadhToJeddahPage({
  params,
}: PageProps<"/[locale]/riyadh-to-jeddah">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  // Highway 40 climbing the Tuwaiq escarpment: the actual opening stretch of
  // this route, rather than a generic highway. Decorative here (the block has
  // its own heading), so it carries an empty alt.
  const road = image("route-highway40-west");

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

      {/* Full-bleed destination photography */}
      <section
        className="relative isolate overflow-hidden bg-ink"
        aria-labelledby="route-title"
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
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/88 via-ink/72 to-ink/95"
        />

        <div className="site-container relative py-12 lg:py-20">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />

          <div className="mt-8 max-w-3xl">
            <p className="text-eyebrow text-brass">
              {content.hero.eyebrow[locale]}
            </p>
            <h1
              id="route-title"
              className="text-display mt-4 text-balance text-white"
            >
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 text-pretty text-white/75">
              {content.hero.lead[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* Stat band, overlapping the hero */}
      <section
        aria-label={content.hero.h1[locale]}
        className="relative z-10 -mt-px bg-sand-deep/50"
      >
        <div className="site-container">
          <dl className="grid gap-x-8 gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="text-eyebrow text-palm">
                  {stat.label[locale]}
                </dt>
                <dd className="numeric mt-2 font-heading text-2xl text-ink">
                  {stat.value[locale]}
                </dd>
                {stat.note ? (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {stat.note[locale]}
                  </p>
                ) : null}
              </div>
            ))}
          </dl>
          <p className="-mt-3 pb-10 text-xs text-muted-foreground">
            {content.statsChecked[locale]}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-y bg-background" aria-labelledby="route-overview">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <h2
              id="route-overview"
              className="text-h2 text-balance text-ink lg:sticky lg:top-28 lg:self-start"
            >
              {content.overview.heading[locale]}
            </h2>
            <div className="flex flex-col gap-5">
              {content.overview.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="text-body text-muted-foreground">
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The timeline — this page's signature element */}
      <section className="section-y bg-sand" aria-labelledby="route-stages">
        <div className="site-container">
          <h2 id="route-stages" className="text-h2 text-balance text-ink">
            {content.stages.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.stages.lead[locale]}
          </p>

          <ol role="list" className="relative mt-12 max-w-3xl">
            {/* The road itself */}
            <span
              aria-hidden
              className="absolute top-2 bottom-2 start-[0.4375rem] w-px bg-palm/25"
            />

            {content.stages.items.map((stage) => (
              <li key={stage.name.en} className="relative ps-10 pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute start-0 top-1.5 size-3.5 rounded-full bg-palm ring-4 ring-sand"
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-2xl leading-tight text-ink">
                    {stage.name[locale]}
                  </h3>
                  {stage.km !== undefined ? (
                    <span className="numeric rounded-full bg-palm-soft px-2.5 py-0.5 text-xs font-semibold text-palm-deep">
                      {stage.km === 0
                        ? locale === "ar"
                          ? "البداية"
                          : "Start"
                        : `${stage.km} ${locale === "ar" ? "كم" : "km"}`}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pickup and drop-off, side by side over the road photograph */}
      <section
        className="relative isolate overflow-hidden bg-ink"
        aria-labelledby="route-ends"
      >
        <Image
          src={road.src}
          alt=""
          aria-hidden
          width={road.width}
          height={road.height}
          placeholder="blur"
          blurDataURL={road.blurDataURL}
          loading="lazy"
          sizes="100vw"
          className="absolute inset-0 -z-20 size-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/90 to-ink"
        />

        <div className="site-container section-y relative">
          <h2 id="route-ends" className="sr-only">
            {content.pickup.heading[locale]} · {content.dropoff.heading[locale]}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {[content.pickup, content.dropoff].map((block) => (
              <div
                key={block.heading.en}
                className="rounded-2xl border border-white/12 bg-white/5 p-7 backdrop-blur-sm"
              >
                <h3 className="text-h3 text-white">{block.heading[locale]}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="mt-4 text-sm leading-relaxed text-white/70"
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical notes */}
      <section
        className="section-y bg-background"
        aria-labelledby="route-practical"
      >
        <div className="site-container">
          <h2 id="route-practical" className="text-h2 text-balance text-ink">
            {content.practical.heading[locale]}
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {content.practical.items.map((item) => (
              <div key={item.heading.en} className="border-s-2 border-palm/25 ps-5">
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

          <div className="mt-14 max-w-3xl rounded-2xl bg-sand p-7">
            <h2 className="text-h3 text-ink">{content.booking.heading[locale]}</h2>
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
        <div className="site-container">
          <ClusterFaqList
            locale={locale}
            heading={content.faqHeading[locale]}
            headingId="route-faq"
            faqs={content.faqs}
            layout="split"
          />
        </div>
      </section>

      {/* CTA — dark, full width, with the related links inside it */}
      <section className="bg-ink" aria-labelledby="route-cta">
        <div className="site-container py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
            <h2 id="route-cta" className="text-h2 mt-4 text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="text-lead mt-5 text-pretty text-white/70">
              {content.cta.body[locale]}
            </p>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-13 items-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep"
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
