import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, CheckIcon, PlaneTakeoffIcon, CarFrontIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhToAlUla as content } from "@/lib/content/riyadh/alula";
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
}: PageProps<"/[locale]/riyadh-to-alula">): Promise<Metadata> {
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

/** Fly column first, drive second — the order the recommendation implies. */
const comparisonIcons = [PlaneTakeoffIcon, CarFrontIcon] as const;

/**
 * Riyadh to AlUla.
 *
 * Design concept — landscape-led, and built around a recommendation that
 * costs us the sale. The search results for this route are dominated by
 * flights, so the page's centrepiece is a drive-or-fly comparison with the
 * two times set large enough to settle the argument on sight: under two
 * hours in the air against ten to twelve on the road. The flying column
 * comes first, because that is the honest order.
 *
 * The hero is a tall full-bleed landscape with the headline centred in it —
 * not anchored to the foot, which is the Jeddah page's move. The second
 * signature element is the two-day itinerary, drawn as two linked stops.
 *
 * The hero photograph is AlUla itself and is captioned as the destination.
 * It is not a road photograph and must never be presented as one.
 */
export default async function RiyadhToAlUlaPage({
  params,
}: PageProps<"/[locale]/riyadh-to-alula">) {
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

      {/* Tall landscape hero, headline centred rather than bottom-anchored */}
      <section
        className="relative isolate flex min-h-[32rem] flex-col justify-center overflow-hidden bg-ink lg:min-h-[38rem]"
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
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-ink/55"
        />

        <div className="absolute inset-x-0 top-0">
          <div className="site-container pt-6">
            <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />
          </div>
        </div>

        <div className="site-container py-20 text-center">
          <p className="text-eyebrow text-brass">
            {content.hero.eyebrow[locale]}
          </p>
          <h1
            id="route-title"
            className="text-display mx-auto mt-5 max-w-4xl text-balance text-white"
          >
            {content.hero.h1[locale]}
          </h1>
          <p className="text-lead mx-auto mt-6 max-w-2xl text-pretty text-white/80">
            {content.hero.lead[locale]}
          </p>
          <Link
            href={href(locale, "getQuote")}
            className="group mt-9 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
            />
          </Link>
        </div>
      </section>

      {/* Figures on a light strip */}
      <section aria-label={content.hero.h1[locale]} className="bg-sand-deep">
        <div className="site-container">
          <dl className="grid gap-x-8 gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label.en}>
                <dt className="text-eyebrow text-palm-deep">
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

      {/* Signature element one — drive or fly, with the times set large */}
      {content.comparison ? (
        <section className="section-y bg-sand" aria-labelledby="route-compare">
          <div className="site-container">
            <h2 id="route-compare" className="text-h2 text-balance text-ink">
              {content.comparison.heading[locale]}
            </h2>
            <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
              {content.comparison.lead[locale]}
            </p>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {content.comparison.columns.map((column, index) => {
                const Icon = comparisonIcons[index] ?? CarFrontIcon;
                return (
                  <div
                    key={column.title.en}
                    className="flex flex-col rounded-3xl bg-card p-8 ring-1 ring-ink/8 lg:p-10"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="grid size-11 place-items-center rounded-xl bg-palm-soft text-palm-deep">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <h3 className="text-h3 mt-5 text-ink">
                          {column.title[locale]}
                        </h3>
                      </div>
                      {column.headline ? (
                        <p className="numeric shrink-0 font-heading text-3xl leading-none text-palm-deep sm:text-4xl">
                          {column.headline[locale]}
                        </p>
                      ) : null}
                    </div>

                    <ul role="list" className="mt-7 flex flex-col gap-3.5">
                      {column.points.map((point) => (
                        <li key={point.en} className="flex gap-2.5 text-sm">
                          <CheckIcon
                            aria-hidden
                            className="mt-0.5 size-4 shrink-0 text-palm"
                          />
                          <span className="leading-relaxed text-muted-foreground">
                            {point[locale]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
              {content.comparison.footnote[locale]}
            </p>
          </div>
        </section>
      ) : null}

      {/* Signature element two — the two-day split, as two linked stops */}
      {content.itinerary ? (
        <section className="section-y bg-background" aria-labelledby="route-itinerary">
          <div className="site-container">
            <h2 id="route-itinerary" className="text-h2 text-balance text-ink">
              {content.itinerary.heading[locale]}
            </h2>
            <p className="text-lead mt-4 max-w-2xl text-pretty text-muted-foreground">
              {content.itinerary.lead[locale]}
            </p>

            <ol
              role="list"
              className="mt-10 grid items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
            >
              {content.itinerary.stops.map((stop, index) => (
                <li
                  key={stop.name.en}
                  className="contents"
                >
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="hidden self-center text-palm/40 md:block"
                    >
                      <ArrowRightIcon className="size-7 rtl:-scale-x-100" />
                    </span>
                  ) : null}
                  <div className="rounded-2xl border-2 border-palm/25 bg-palm-soft/35 p-7">
                    <p className="text-eyebrow text-palm-deep">
                      {stop.day[locale]}
                    </p>
                    <h3 className="text-h3 mt-2 text-ink">
                      {stop.name[locale]}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {stop.detail[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
              {content.itinerary.footnote[locale]}
            </p>
          </div>
        </section>
      ) : null}

      <section className="section-y bg-sand" aria-labelledby="route-stages">
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
              <li key={stage.name.en} className="rounded-xl bg-card p-5 ring-1 ring-ink/8">
                {stage.km !== undefined ? (
                  <p className="numeric text-xs font-semibold tracking-[0.14em] text-palm uppercase">
                    {stage.km.toLocaleString("en-US")}{" "}
                    {locale === "ar" ? "كم" : "km"}
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

      {/* If you fly, we can still help — the business answer */}
      {content.onward ? (
        <section className="bg-ink" aria-labelledby="route-onward">
          <div className="site-container py-16 lg:py-20">
            <h2 id="route-onward" className="text-h2 max-w-2xl text-balance text-white">
              {content.onward.heading[locale]}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {content.onward.items.map((item) => (
                <div
                  key={item.heading.en}
                  className="rounded-2xl bg-white/8 p-7 ring-1 ring-white/15"
                >
                  <h3 className="text-h4 text-white">{item.heading[locale]}</h3>
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.en}
                      className="mt-3 text-sm leading-relaxed text-white/70"
                    >
                      {paragraph[locale]}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-y bg-background" aria-labelledby="route-practical">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-2">
            {[content.pickup, content.dropoff].map((block) => (
              <div key={block.heading.en}>
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

      {/* Brass closing band — the only one in the cluster */}
      <section className="bg-brass" aria-labelledby="route-cta">
        <div className="site-container py-16 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-eyebrow text-ink/70">
                {content.cta.eyebrow[locale]}
              </p>
              <h2 id="route-cta" className="text-h2 mt-3 text-balance text-ink">
                {content.cta.heading[locale]}
              </h2>
              <p className="text-lead mt-4 text-pretty text-ink/80">
                {content.cta.body[locale]}
              </p>
            </div>
            <Link
              href={href(locale, "getQuote")}
              className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
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
