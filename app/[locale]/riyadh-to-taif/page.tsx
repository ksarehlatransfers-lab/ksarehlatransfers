import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhToTaif as content } from "@/lib/content/riyadh/taif";
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
}: PageProps<"/[locale]/riyadh-to-taif">): Promise<Metadata> {
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

const BAND_WIDTH = 1000;
const BAND_HEIGHT = 200;
/** Leaves headroom above the highest point so the peak is not clipped. */
const BAND_TOP = 24;

/**
 * Riyadh to Taif.
 *
 * Design concept — elevation. This is the only approved route where the
 * terrain is the story, so the page's centrepiece is a profile band drawn to
 * scale from published elevations: Riyadh at 612 m, Taif at about 1,879 m,
 * Al Hada above it. The hero is a photograph with the headline on a card
 * overlapping its lower edge rather than set over the image, which is unlike
 * either of the batch-1 photographic heroes.
 *
 * Palette note: palm and sand only, no brass anywhere on this page. It reads
 * cooler than the rest of the cluster without introducing a token.
 */
export default async function RiyadhToTaifPage({
  params,
}: PageProps<"/[locale]/riyadh-to-taif">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const profile = content.elevation;

  // The band is drawn from the real metre values, so the shape is the data
  // rather than a decorative curve. Points sit at the centre of equal
  // columns, which is what lines them up with the label grid beneath.
  const peak = profile
    ? Math.max(...profile.points.map((point) => point.metres))
    : 0;
  const coords = (profile?.points ?? []).map((point, index, all) => ({
    x: ((index + 0.5) / all.length) * BAND_WIDTH,
    y:
      BAND_HEIGHT -
      (point.metres / peak) * (BAND_HEIGHT - BAND_TOP),
  }));
  const line = coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
  const area =
    coords.length > 0
      ? `0,${BAND_HEIGHT} ${line} ${BAND_WIDTH},${coords[coords.length - 1].y.toFixed(1)} ${BAND_WIDTH},${BAND_HEIGHT}`
      : "";

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

      {/* Photograph with the headline on a card across its lower edge */}
      <section className="bg-sand pb-10 lg:pb-16" aria-labelledby="route-title">
        <div className="relative aspect-16/10 w-full overflow-hidden sm:aspect-21/9">
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
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-ink/55 to-transparent pb-16">
            <div className="site-container pt-6">
              <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />
            </div>
          </div>
        </div>

        <div className="site-container">
          <div className="-mt-12 rounded-3xl bg-background p-8 shadow-xl ring-1 ring-ink/8 sm:-mt-20 lg:p-12">
            <p className="text-eyebrow text-palm">
              {content.hero.eyebrow[locale]}
            </p>
            <h1
              id="route-title"
              className="text-display mt-4 max-w-3xl text-balance text-ink"
            >
              {content.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 max-w-2xl text-pretty text-muted-foreground">
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
        </div>
      </section>

      <section aria-label={content.hero.h1[locale]} className="bg-background">
        <div className="site-container pb-4">
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="text-eyebrow text-palm">{stat.label[locale]}</dt>
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
          <p className="mt-6 text-xs text-muted-foreground">
            {content.statsChecked[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="route-overview">
        <div className="site-container max-w-3xl">
          <h2 id="route-overview" className="text-h2 text-balance text-ink">
            {content.overview.heading[locale]}
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            {content.overview.paragraphs.map((paragraph) => (
              <p key={paragraph.en} className="text-body text-muted-foreground">
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The elevation band — this page's signature element */}
      {profile ? (
        <section className="section-y bg-sand" aria-labelledby="route-elevation">
          <div className="site-container">
            <h2 id="route-elevation" className="text-h2 text-balance text-ink">
              {profile.heading[locale]}
            </h2>
            <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
              {profile.lead[locale]}
            </p>

            <div className="mt-10">
              {/* Decorative: every value is in the list below, so the
                  diagram itself carries no information of its own. The
                  profile is mirrored in Arabic so the journey still begins
                  at the reading edge. */}
              <svg
                aria-hidden
                viewBox={`0 0 ${BAND_WIDTH} ${BAND_HEIGHT}`}
                preserveAspectRatio="none"
                className="h-36 w-full rtl:-scale-x-100 sm:h-44"
              >
                <polygon points={area} className="fill-palm/15" />
                <polyline
                  points={line}
                  className="fill-none stroke-palm"
                  strokeWidth={3}
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                {coords.map((c, index) => (
                  <circle
                    key={profile.points[index].name.en}
                    cx={c.x}
                    cy={c.y}
                    r={6}
                    className="fill-palm-deep"
                  />
                ))}
              </svg>

              <ol
                role="list"
                className="grid grid-cols-2 gap-x-6 gap-y-8 border-t-2 border-palm/30 pt-6 lg:grid-cols-4"
              >
                {profile.points.map((point) => (
                  <li key={point.name.en}>
                    {/* Latin digits in both languages, grouped with a comma:
                        the `.numeric` utility isolates them inside RTL text,
                        which is how the rest of the cluster sets figures. */}
                    <p className="numeric font-heading text-2xl text-palm-deep">
                      {point.metres.toLocaleString("en-US")}
                      <span className="ms-1 text-sm text-muted-foreground">
                        {locale === "ar" ? "م" : "m"}
                      </span>
                    </p>
                    <h3 className="text-h4 mt-1.5 text-ink">
                      {point.name[locale]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.note[locale]}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
                {profile.footnote[locale]}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* Stages, as a plain wide row with no connector */}
      <section className="section-y bg-background" aria-labelledby="route-stages">
        <div className="site-container">
          <h2 id="route-stages" className="text-h2 text-balance text-ink">
            {content.stages.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
            {content.stages.lead[locale]}
          </p>

          <ol
            role="list"
            className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-5"
          >
            {content.stages.items.map((stage) => (
              <li key={stage.name.en}>
                {stage.km !== undefined ? (
                  <p className="numeric text-xs font-semibold tracking-[0.14em] text-palm uppercase">
                    {stage.km} {locale === "ar" ? "كم" : "km"}
                  </p>
                ) : null}
                <h3 className="text-h4 mt-2 text-ink">{stage.name[locale]}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="route-practical">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-2">
            {[content.pickup, content.dropoff].map((block) => (
              <div
                key={block.heading.en}
                className="rounded-2xl bg-card p-7 ring-1 ring-ink/8"
              >
                <h2 className="text-h3 text-ink">{block.heading[locale]}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <h2 id="route-practical" className="text-h2 mt-16 text-balance text-ink">
            {content.practical.heading[locale]}
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {content.practical.items.map((item) => (
              <div key={item.heading.en}>
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

          <div className="mt-14 max-w-3xl rounded-2xl border border-palm/20 bg-palm-soft/50 p-7">
            <h2 className="text-h3 text-palm-deep">
              {content.booking.heading[locale]}
            </h2>
            {content.booking.paragraphs.map((paragraph) => (
              <p
                key={paragraph.en}
                className="mt-3 text-sm leading-relaxed text-palm-deep/85"
              >
                {paragraph[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="route-faq">
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

      {/* A light closing band — the only pale CTA in the cluster */}
      <section className="bg-sand-deep" aria-labelledby="route-cta">
        <div className="site-container py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-palm-deep">
              {content.cta.eyebrow[locale]}
            </p>
            <h2 id="route-cta" className="text-h2 mt-4 text-balance text-ink">
              {content.cta.heading[locale]}
            </h2>
            <p className="text-lead mt-5 text-pretty text-muted-foreground">
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
          </div>

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
