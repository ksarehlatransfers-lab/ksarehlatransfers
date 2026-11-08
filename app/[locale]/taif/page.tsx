import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, ArrowUpRightIcon, FlowerIcon, MountainIcon, PlaneLandingIcon, RouteIcon, UsersIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { taif as content } from "@/lib/content/makkah-region/taif";
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
}: PageProps<"/[locale]/taif">): Promise<Metadata> {
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

/** Home → Taif. A city hub, at the same depth as Makkah and Jeddah. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/**
 * A mountain ridge drawn as a clip-path along the photograph's top edge.
 * Asymmetric on purpose, so it reads as a skyline rather than a pattern.
 */
const ridge =
  "[clip-path:polygon(0_18%,8%_9%,15%_14%,24%_2%,33%_12%,41%_6%,52%_16%,61%_4%,70%_11%,79%_0,88%_10%,95%_5%,100%_12%,100%_100%,0_100%)]";

/**
 * Taif.
 *
 * Design concept — "mountain gateway". Taif is reached by climbing, so the page
 * is about elevation and the roads up:
 *
 * - **Typographic hero on sand, then a landscape cut by a ridge line** — the
 *   photograph's top edge is a mountain skyline (clip-path), with a four-figure
 *   **distance strip** beneath it. No other hero shapes its photograph's edge
 *   like this.
 * - Signature component: **"two roads up"** — Al Hada and Al Sail as paired
 *   panels, dark and light, carrying the facts that decide which road a
 *   journey takes (vehicle size, fog and rain).
 * - The Jeddah section carries the non-Muslim route note as a brass callout;
 *   the airport gets its own band; Al Hada and Al Shafa are editorial tiles
 *   with the rose figures in a palm-soft band.
 * - CTA: a palm-deep panel with the ridge line along its top.
 */
export default async function TaifPage({ params }: PageProps<"/[locale]/taif">) {
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

      {/* Typographic hero, then a landscape cut by a ridge line */}
      <section className="bg-sand" aria-labelledby="taf-title">
        <div className="site-container pt-10 pb-16 lg:pt-14 lg:pb-24">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <p className="text-eyebrow mt-8 text-palm">{content.hero.eyebrow[locale]}</p>
          <h1 id="taf-title" className="text-display mt-4 max-w-4xl text-balance text-ink">
            {content.hero.h1[locale]}
          </h1>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-end lg:gap-12">
            <p className="text-lead max-w-3xl text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
            <Link
              href={href(locale, "getQuote")}
              className="group inline-flex h-12 items-center gap-2 justify-self-start rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
            >
              {content.cta.button[locale]}
              <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>
      <div className={`${ridge} relative -mt-10 aspect-16/9 w-full overflow-hidden sm:-mt-14 sm:aspect-[21/8]`}>
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
      </div>

      {/* Distance strip */}
      <section className="bg-ink" aria-label={locale === "ar" ? "المسافات إلى الطائف" : "Distances to Taif"}>
        <dl className="site-container grid grid-cols-2 gap-px py-8 lg:grid-cols-4">
          {content.distances.map((d) => (
            <div key={d.from.en} className="px-2 py-3 sm:px-4">
              <dt className="text-eyebrow text-brass">{d.from[locale]}</dt>
              <dd className="numeric mt-2 font-heading text-2xl text-white sm:text-3xl">{d.value[locale]}</dd>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60">{d.note[locale]}</p>
              {d.link ? (
                <Link href={href(locale, d.link.routeKey)} className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-brass hover:text-white">
                  {d.link.label[locale]}
                  <ArrowUpRightIcon aria-hidden className="size-3 rtl:-scale-x-100" />
                </Link>
              ) : null}
            </div>
          ))}
        </dl>
      </section>

      {/* Signature: two roads up */}
      <section className="section-y bg-background" aria-labelledby="taf-roads">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="taf-roads" className="text-h2 text-balance text-ink">
              {content.roads.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.roads.lead[locale]}</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {[
              { road: content.roads.hada, dark: true, Icon: MountainIcon },
              { road: content.roads.sail, dark: false, Icon: RouteIcon },
            ].map(({ road, dark, Icon }) => (
              <article
                key={road.name.en}
                className={dark ? "rounded-3xl bg-palm-deep p-7 lg:p-9" : "rounded-3xl bg-sand p-7 ring-1 ring-ink/8 lg:p-9"}
              >
                <Icon aria-hidden className={dark ? "size-7 text-brass" : "size-7 text-palm"} />
                <h3 className={dark ? "text-h3 mt-4 text-white" : "text-h3 mt-4 text-ink"}>{road.name[locale]}</h3>
                <ul role="list" className="mt-5 flex flex-col gap-3">
                  {road.facts.map((fact) => (
                    <li
                      key={fact.en}
                      className={
                        dark
                          ? "border-s-2 border-brass/60 ps-4 text-sm leading-relaxed text-white/85"
                          : "border-s-2 border-palm/50 ps-4 text-sm leading-relaxed text-ink/80"
                      }
                    >
                      {fact[locale]}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/80">{content.roads.note[locale]}</p>
        </div>
      </section>

      {/* From Jeddah, with the non-Muslim route note */}
      <section className="section-y bg-sand" aria-labelledby="taf-jeddah">
        <div className="site-container grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 id="taf-jeddah" className="text-h2 text-balance text-ink">
              {content.jeddah.heading[locale]}
            </h2>
            {content.jeddah.paragraphs.map((p) => (
              <p key={p.en} className="text-body mt-5 text-muted-foreground">
                {p[locale]}
              </p>
            ))}
          </div>
          <div className="flex gap-4 self-start rounded-2xl border border-brass/50 bg-white p-6">
            <UsersIcon aria-hidden className="mt-0.5 size-6 shrink-0 text-brass-deep" />
            <p className="text-[0.95rem] leading-relaxed text-ink">{content.jeddah.nonMuslim[locale]}</p>
          </div>
        </div>
      </section>

      {/* Airport band */}
      <section className="bg-background" aria-labelledby="taf-airport">
        <div className="site-container grid gap-6 py-14 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10 lg:py-16">
          <span className="grid size-14 place-items-center rounded-2xl bg-ink text-brass">
            <PlaneLandingIcon aria-hidden className="size-7 rtl:-scale-x-100" />
          </span>
          <div className="max-w-3xl">
            <h2 id="taf-airport" className="text-h3 text-balance text-ink">
              {content.airport.heading[locale]}
            </h2>
            {content.airport.paragraphs.map((p) => (
              <p key={p.en} className="text-body mt-4 text-muted-foreground">
                {p[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Al Hada and Al Shafa */}
      <section className="section-y bg-background pt-0" aria-labelledby="taf-highlands">
        <div className="site-container">
          <h2 id="taf-highlands" className="text-h2 text-balance text-ink">
            {content.highlands.heading[locale]}
          </h2>
          <p className="text-lead mt-4 max-w-3xl text-pretty text-muted-foreground">{content.highlands.lead[locale]}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {content.highlands.places.map((place) => (
              <article key={place.name.en} className="rounded-2xl border border-border p-7">
                <h3 className="font-heading text-3xl text-ink">{place.name[locale]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{place.detail[locale]}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-4 rounded-2xl bg-palm-soft/60 p-6 sm:flex-row sm:items-center sm:gap-6">
            <FlowerIcon aria-hidden className="size-8 shrink-0 text-palm-deep" />
            <p className="text-[0.95rem] leading-relaxed text-palm-deep">{content.highlands.roses[locale]}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="taf-faq">
        <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-16">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="taf-faq" faqs={content.faqs} />
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ul role="list" className="mt-4 flex flex-col gap-3">
              {content.quotation.items.map((item) => (
                <li key={item.en} className="border-s-2 border-palm/50 ps-4 text-sm leading-relaxed text-muted-foreground">
                  {item[locale]}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* CTA: a palm-deep panel under the ridge line */}
      <section className="bg-background pt-14 lg:pt-20" aria-labelledby="taf-cta">
        <div className="site-container">
          <div className={`${ridge} rounded-b-3xl bg-palm-deep px-6 pt-20 pb-12 sm:px-12 lg:flex lg:items-end lg:justify-between lg:gap-10`}>
            <div className="max-w-2xl">
              <p className="text-eyebrow text-palm-soft">{content.cta.eyebrow[locale]}</p>
              <h2 id="taf-cta" className="text-h2 mt-3 text-balance text-white">
                {content.cta.heading[locale]}
              </h2>
              <p className="mt-4 text-[0.975rem] leading-relaxed text-white/80">{content.cta.body[locale]}</p>
            </div>
            <Link
              href={href(locale, "getQuote")}
              className="group mt-8 inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-palm-deep transition-colors hover:bg-palm-soft lg:mt-0"
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
