import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, ArrowUpRightIcon, Building2Icon, PlaneLandingIcon, ShieldAlertIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { yanbu as content } from "@/lib/content/madinah-region/yanbu";
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
}: PageProps<"/[locale]/yanbu">): Promise<Metadata> {
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

/** Home → Yanbu: a destination hub in its own right. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

const relatedHeading = { en: "Related journeys", ar: "رحلات ذات صلة" };

/** A gentle Red Sea swell along an edge, drawn as a clip-path. */
const waveBottom =
  "[clip-path:polygon(0_0,100%_0,100%_88%,92%_92%,83%_95%,74%_93%,65%_89%,56%_88%,47%_91%,38%_95%,29%_96%,20%_93%,11%_89%,0_90%)]";
const waveTop =
  "[clip-path:polygon(0_10%,9%_6%,18%_4%,27%_6%,36%_10%,45%_12%,54%_10%,63%_6%,72%_4%,81%_6%,90%_10%,100%_8%,100%_100%,0_100%)]";

/**
 * Yanbu.
 *
 * Design concept — "three cities on one coast". Yanbu is Yanbu Al-Bahr, Yanbu
 * Al-Nakhl and Yanbu Industrial City, and Saudi searchers name them apart. The
 * page's job is to keep them apart too:
 *
 * - **Text-first hero, then the old-town photograph with a swell along its
 *   lower edge** — a wave clip, unlike Taif's ridge (top edge) or Shaqra's
 *   plain panorama.
 * - Signature component: **"three cities, one name"** — three tall columns,
 *   each led by its Arabic name set large (marked `lang="ar"` on the English
 *   page), with its role, what is there and what to tell us.
 * - The Industrial City gets a split section with an **ink limit card** stating
 *   what we do not claim (port, secured sites, gates, worker transport).
 * - An airport band, ruled road rows, and a palm-deep CTA with the swell along
 *   its top edge.
 */
export default async function YanbuPage({ params }: PageProps<"/[locale]/yanbu">) {
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

      {/* Text first, then the old town with a swell along its edge */}
      <section className="bg-background" aria-labelledby="ynb-title">
        <div className="site-container pt-10 lg:pt-14">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
            <div>
              <p className="text-eyebrow text-palm">{content.hero.eyebrow[locale]}</p>
              <h1 id="ynb-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
            </div>
            <div>
              <p className="text-lead text-pretty text-muted-foreground">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-7 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${waveBottom} relative mt-12 aspect-16/9 w-full overflow-hidden sm:aspect-[21/8]`}>
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
      </section>

      {/* Signature: three cities, one name */}
      <section className="section-y bg-background" aria-labelledby="ynb-three">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="ynb-three" className="text-h2 text-balance text-ink">
              {content.three.heading[locale]}
            </h2>
            <p className="text-lead mt-4 text-pretty text-muted-foreground">{content.three.lead[locale]}</p>
          </div>
          <ol role="list" className="mt-10 grid gap-4 md:grid-cols-3">
            {content.three.cities.map((city, index) => (
              <li
                key={city.name.en}
                className={
                  index === 2
                    ? "flex flex-col rounded-3xl bg-ink p-7 text-white"
                    : "flex flex-col rounded-3xl bg-sand p-7"
                }
              >
                {isArabic ? (
                  <h3 className={index === 2 ? "font-heading text-4xl text-brass" : "font-heading text-4xl text-palm-deep"}>
                    {city.arName}
                  </h3>
                ) : (
                  <>
                    <p
                      lang="ar"
                      className={index === 2 ? "font-heading text-4xl text-brass" : "font-heading text-4xl text-palm-deep"}
                    >
                      {city.arName}
                    </p>
                    <h3 className={index === 2 ? "mt-3 text-h4 text-white" : "mt-3 text-h4 text-ink"}>{city.name[locale]}</h3>
                  </>
                )}
                <p className={index === 2 ? "text-eyebrow mt-2 text-brass/80" : "text-eyebrow mt-2 text-palm"}>{city.role[locale]}</p>
                <p className={index === 2 ? "mt-4 flex-1 text-sm leading-relaxed text-white/80" : "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground"}>
                  {city.detail[locale]}
                </p>
                <p
                  className={
                    index === 2
                      ? "mt-5 border-t border-white/15 pt-4 text-[0.8125rem] font-medium text-white/85"
                      : "mt-5 border-t border-ink/10 pt-4 text-[0.8125rem] font-medium text-ink/80"
                  }
                >
                  {city.tell[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Business travel to the Industrial City, with the limit card */}
      <section className="section-y bg-sand" aria-labelledby="ynb-industrial">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div>
            <Building2Icon aria-hidden className="size-8 text-palm" />
            <h2 id="ynb-industrial" className="text-h2 mt-4 text-balance text-ink">
              {content.industrial.heading[locale]}
            </h2>
            {content.industrial.paragraphs.map((p) => (
              <p key={p.en} className="text-body mt-5 text-muted-foreground">
                {p[locale]}
              </p>
            ))}
          </div>
          <div className="self-start rounded-3xl bg-ink p-7">
            <ShieldAlertIcon aria-hidden className="size-7 text-brass" />
            <p className="mt-4 text-[0.975rem] leading-relaxed text-white/85">{content.industrial.limit[locale]}</p>
          </div>
        </div>
      </section>

      {/* Airport band */}
      <section className="bg-background" aria-labelledby="ynb-airport">
        <div className="site-container grid gap-6 py-14 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-10 lg:py-16">
          <span className="grid size-14 place-items-center rounded-2xl bg-palm-soft text-palm-deep">
            <PlaneLandingIcon aria-hidden className="size-7 rtl:-scale-x-100" />
          </span>
          <div className="max-w-3xl">
            <h2 id="ynb-airport" className="text-h3 text-balance text-ink">
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

      {/* Road rows */}
      <section className="bg-background pb-16 lg:pb-20" aria-labelledby="ynb-routes">
        <div className="site-container">
          <h2 id="ynb-routes" className="text-h2 text-balance text-ink">
            {content.routes.heading[locale]}
          </h2>
          <ul role="list" className="mt-8 flex flex-col border-t border-ink/12">
            {content.routes.rows.map((row) => (
              <li key={row.from.en} className="grid gap-2 border-b border-ink/12 py-5 sm:grid-cols-[12rem_8rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <h3 className="text-h4 text-ink">{row.from[locale]}</h3>
                <p className="numeric font-heading text-xl text-palm-deep">{row.distance[locale]}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {row.note[locale]}{" "}
                  {row.link ? (
                    <Link href={href(locale, row.link.routeKey)} className="group inline-flex items-center gap-1 font-semibold text-palm hover:text-palm-deep">
                      {row.link.label[locale]}
                      <ArrowUpRightIcon aria-hidden className="size-3.5 rtl:-scale-x-100" />
                    </Link>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">{content.routes.footnote[locale]}</p>
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="ynb-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="ynb-faq" faqs={content.faqs} layout="split" />
          <div className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-ink/8">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ul role="list" className="mt-4 grid gap-4 md:grid-cols-3">
              {content.quotation.items.map((item) => (
                <li key={item.en} className="text-sm leading-relaxed text-muted-foreground">
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA: palm-deep with the swell along its top */}
      <section className="bg-background pt-14 lg:pt-20" aria-labelledby="ynb-cta">
        <div className={`${waveTop} bg-palm-deep`}>
          <div className="site-container flex flex-col gap-7 pt-20 pb-14 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
            <div className="max-w-2xl">
              <p className="text-eyebrow text-palm-soft">{content.cta.eyebrow[locale]}</p>
              <h2 id="ynb-cta" className="text-h2 mt-3 text-balance text-white">
                {content.cta.heading[locale]}
              </h2>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-white/80">{content.cta.body[locale]}</p>
            </div>
            <Link
              href={href(locale, "getQuote")}
              className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-white px-8 text-[0.95rem] font-semibold text-palm-deep transition-colors hover:bg-palm-soft lg:self-auto"
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
