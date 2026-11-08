import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, CircleAlertIcon, CircleCheckIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { riyadhToAlKhobar as content } from "@/lib/content/riyadh/al-khobar";
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
}: PageProps<"/[locale]/riyadh-to-al-khobar">): Promise<Metadata> {
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
  en: "Where else this road goes",
  ar: "إلى أين يصل هذا الطريق أيضًا",
};

/**
 * Riyadh to Al Khobar.
 *
 * Design concept — the destination, not the drive. The hero puts the
 * headline at the foot of a tall photograph rather than above it, the stages
 * run as a horizontal rail of milestones, and the page's distinctive block is
 * the causeway section: a two-card "what we arrange / what we do not do"
 * split that states the border limits plainly rather than burying them.
 */
export default async function RiyadhToAlKhobarPage({
  params,
}: PageProps<"/[locale]/riyadh-to-al-khobar">) {
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

      {/* Tall photograph with the headline sitting at its foot */}
      <section
        className="relative isolate flex min-h-[32rem] flex-col justify-between overflow-hidden bg-ink lg:min-h-[38rem]"
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
          className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/40 to-ink"
        />

        <div className="site-container pt-10">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />
        </div>

        <div className="site-container pb-12 lg:pb-16">
          <p className="text-eyebrow text-brass">
            {content.hero.eyebrow[locale]}
          </p>
          <h1
            id="route-title"
            className="text-display mt-4 max-w-4xl text-balance text-white"
          >
            {content.hero.h1[locale]}
          </h1>
          <p className="text-lead mt-6 max-w-2xl text-pretty text-white/75">
            {content.hero.lead[locale]}
          </p>
        </div>
      </section>

      {/* Stats as bordered cards rather than a band */}
      <section
        aria-label={content.hero.h1[locale]}
        className="bg-background pt-10 lg:pt-14"
      >
        <div className="site-container">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div
                key={stat.label.en}
                className="rounded-2xl border border-border bg-card p-5"
              >
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
          <p className="mt-4 text-xs text-muted-foreground">
            {content.statsChecked[locale]}
          </p>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="route-overview">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <h2 id="route-overview" className="text-h2 text-balance text-ink">
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

      {/* Milestone rail */}
      <section className="section-y bg-sand" aria-labelledby="route-stages">
        <div className="site-container">
          <h2 id="route-stages" className="text-h2 text-balance text-ink">
            {content.stages.heading[locale]}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {content.stages.lead[locale]}
          </p>

          <ol role="list" className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.stages.items.map((stage, index) => (
              <li
                key={stage.name.en}
                className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-ink/8"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="numeric text-[0.7rem] font-semibold tracking-[0.18em] text-palm uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {stage.km !== undefined ? (
                    <span className="numeric rounded-full bg-sand px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                      {stage.km} {locale === "ar" ? "كم" : "km"}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-h4 mt-3 text-ink">{stage.name[locale]}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ends of the journey */}
      <section className="section-y bg-background" aria-labelledby="route-ends">
        <div className="site-container">
          <h2 id="route-ends" className="sr-only">
            {content.pickup.heading[locale]} · {content.dropoff.heading[locale]}
          </h2>
          <div className="grid gap-x-12 gap-y-9 md:grid-cols-2">
            {[content.pickup, content.dropoff].map((block) => (
              <div key={block.heading.en}>
                <h3 className="text-h3 text-ink">{block.heading[locale]}</h3>
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
        </div>
      </section>

      {/* The causeway block — this page's signature element */}
      {content.onward ? (
        <section className="bg-ink" aria-labelledby="route-onward">
          <div className="site-container section-y">
            <h2
              id="route-onward"
              className="text-h2 max-w-2xl text-balance text-white"
            >
              {content.onward.heading[locale]}
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {content.onward.items.map((item, index) => {
                const Icon = index === 0 ? CircleCheckIcon : CircleAlertIcon;
                return (
                  <div
                    key={item.heading.en}
                    className="rounded-2xl border border-white/12 bg-white/5 p-7"
                  >
                    <span
                      className={
                        index === 0
                          ? "grid size-10 place-items-center rounded-xl bg-brass/20 text-brass"
                          : "grid size-10 place-items-center rounded-xl bg-white/10 text-white/70"
                      }
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="text-h4 mt-5 text-white">
                      {item.heading[locale]}
                    </h3>
                    {item.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.en}
                        className="mt-3 text-sm leading-relaxed text-white/70"
                      >
                        {paragraph[locale]}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* Practical notes, 2x2 */}
      <section className="section-y bg-sand" aria-labelledby="route-practical">
        <div className="site-container">
          <h2 id="route-practical" className="text-h2 text-balance text-ink">
            {content.practical.heading[locale]}
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.practical.items.map((item) => (
              <div key={item.heading.en} className="rounded-2xl bg-card p-6">
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

          <div className="mt-14 max-w-3xl">
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

      {/* CTA — brass band with the related links beneath, on sand */}
      <section className="bg-palm" aria-labelledby="route-cta">
        <div className="site-container py-14 lg:py-16">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              {/* palm-soft, not brass: brass on the palm background measures
                  3.85:1, below the 4.5:1 AA floor for text this size. */}
              <p className="text-eyebrow text-palm-soft">
                {content.cta.eyebrow[locale]}
              </p>
              <h2
                id="route-cta"
                className="text-h3 mt-3 text-balance text-white"
              >
                {content.cta.heading[locale]}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/80">
                {content.cta.body[locale]}
              </p>
            </div>

            <Link
              href={href(locale, "getQuote")}
              className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brass-deep"
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

      <section className="section-y bg-sand" aria-label={relatedHeading[locale]}>
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
