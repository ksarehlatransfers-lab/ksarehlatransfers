import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, MinusIcon, ShieldAlertIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { RelatedLinks } from "@/components/cluster/related-links";
import { jazan as content } from "@/lib/content/jazan-region/jazan";
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
}: PageProps<"/[locale]/jazan">): Promise<Metadata> {
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

/** Home → Jazan, Sabya & Abu Arish: a city hub, level with the other hubs. */
const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: content.crumbLabel[locale], routeKey: content.routeKey },
];

/** Panel tones for the three areas, in the order they are listed. */
const panelTone = ["bg-palm-deep text-white", "bg-ink text-white", "bg-sand text-ink ring-1 ring-ink/10"];

/** Wave lines for the coast motif. Decorative only. */
function Waves({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 120" fill="none" preserveAspectRatio="none" className={className}>
      {[20, 50, 80].map((y) => (
        <path
          key={y}
          d={`M0 ${y} C 50 ${y - 14}, 100 ${y + 14}, 150 ${y} S 250 ${y - 14}, 300 ${y} S 400 ${y + 14}, 450 ${y} S 550 ${y - 14}, 600 ${y}`}
          stroke="currentColor"
          strokeWidth={1.2}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

/**
 * Jazan, Sabya and Abu Arish.
 *
 * Design concept — "from the sea, inland". The province runs from islands
 * offshore, across a coastal plain, up to mountains; the page follows that
 * order once, in the context band, and otherwise keeps to the three
 * confirmed areas.
 *
 * Unlike the Abha contours, the Dammam coastline or the Madinah compass:
 * - a sand hero with a Red Sea photograph and brass wave lines;
 * - three equal area panels (palm, ink, sand), each anchored, each carrying
 *   the same "local transfers" line, so no area outranks another;
 * - three typographic area sections in a row (no photographs: no licensed
 *   single-author images of Sabya or Abu Arish were available);
 * - a white scope card with the border and restricted-area note;
 * - an ink "from the sea, inland" band: Farasan, the coast and airport,
 *   Fayfa, as context only;
 * - split FAQ and a palm-deep CTA.
 */
export default async function JazanPage({ params }: PageProps<"/[locale]/jazan">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image(content.imageKey);
  const places = content.context.places;
  // Order the context band from the sea inland: islands, coast, mountains.
  const seaToMountains = ["farasan", "airport", "fayfa"].map((id) => places.find((p) => p.id === id)!);

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

      {/* Hero: sand, the Red Sea photograph, brass wave lines */}
      <section className="relative isolate overflow-hidden bg-sand" aria-labelledby="jzn-title">
        <Waves className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 w-full text-brass/40" />
        <div className="site-container pt-10 pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumbs locale={locale} crumbs={crumbs(locale)} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <p className="text-eyebrow text-palm-deep">{content.hero.eyebrow[locale]}</p>
              <h1 id="jzn-title" className="text-display mt-4 text-balance text-ink">
                {content.hero.h1[locale]}
              </h1>
              <p className="text-lead mt-6 text-pretty text-ink/75">{content.hero.lead[locale]}</p>
              <Link
                href={href(locale, "getQuote")}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-palm px-6 text-sm font-semibold text-white transition-colors hover:bg-palm-deep"
              >
                {content.cta.button[locale]}
                <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </Link>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src={photo.src}
                alt={altText(photo, locale)}
                width={photo.width}
                height={photo.height}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature: three equal area panels */}
      <section className="bg-background pt-16 pb-4 lg:pt-20" aria-labelledby="jzn-areas-strip">
        <div className="site-container">
          <h2 id="jzn-areas-strip" className="text-eyebrow text-brass-deep">{content.areas.heading[locale]}</h2>
          <ul role="list" className="mt-5 grid gap-4 md:grid-cols-3">
            {content.areas.sections.map((area, index) => (
              <li key={area.id} className={`rounded-3xl p-7 ${panelTone[index]}`}>
                <p className={`text-xs font-semibold ${index === 2 ? "text-brass-deep" : "text-brass"}`}>
                  {area.role[locale]}
                </p>
                <a
                  href={`#${area.id}`}
                  className="group mt-2 inline-flex items-center gap-2 font-heading text-3xl outline-none hover:underline focus-visible:underline"
                >
                  {area.name[locale]}
                  <ArrowDownIcon aria-hidden className="size-5 text-brass transition-transform group-hover:translate-y-0.5" />
                </a>
                <p className={`mt-3 flex items-center gap-2 text-[0.975rem] ${index === 2 ? "text-ink/80" : "text-white/80"}`}>
                  <CheckIcon aria-hidden className={`size-4 shrink-0 ${index === 2 ? "text-palm" : "text-brass"}`} />
                  {content.scope.offered[index][locale]}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">{content.areas.lead[locale]}</p>
        </div>
      </section>

      {/* The three areas, each anchored */}
      <section className="section-y bg-background" aria-label={content.areas.heading[locale]}>
        <div className="site-container grid gap-10 lg:grid-cols-3 lg:gap-12">
          {content.areas.sections.map((area) => (
            <article key={area.id} id={area.id} aria-labelledby={`jzn-area-${area.id}`} className="scroll-mt-24 border-t-2 border-brass/60 pt-6">
              <p className="text-eyebrow text-palm">{area.role[locale]}</p>
              <h2 id={`jzn-area-${area.id}`} className="text-h3 mt-3 text-ink">
                {area.name[locale]}
              </h2>
              {area.paragraphs.map((p) => (
                <p key={p.en} className="text-body mt-4 text-muted-foreground">
                  {p[locale]}
                </p>
              ))}
              <p className="mt-5 border-s-2 border-palm ps-4 text-[0.975rem] leading-relaxed text-ink/85">
                {area.service[locale]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Scope: what is and is not offered */}
      <section className="bg-palm-soft/60" aria-labelledby="jzn-scope">
        <div className="site-container py-14 lg:py-16">
          <div className="grid gap-6 rounded-3xl bg-white p-7 ring-1 ring-ink/8 sm:p-9 md:grid-cols-2 md:gap-12">
            <div>
              <h2 id="jzn-scope" className="text-h3 text-ink">{content.scope.heading[locale]}</h2>
              <ul role="list" className="mt-5 flex flex-col gap-3">
                {content.scope.offered.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-[0.975rem] text-ink">
                    <CheckIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-palm" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-ink/10 pt-6 md:border-s md:border-t-0 md:ps-12 md:pt-0">
              <h3 className="text-h4 text-ink">{content.scope.notOfferedHeading[locale]}</h3>
              <ul role="list" className="mt-4 flex flex-col gap-2.5">
                {content.scope.notOffered.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <MinusIcon aria-hidden className="mt-0.5 size-4 shrink-0" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 flex items-start gap-3 rounded-2xl border-s-4 border-brass bg-white/70 p-5 text-sm leading-relaxed text-ink/80">
            <ShieldAlertIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-brass-deep" />
            {content.scope.restricted[locale]}
          </p>
        </div>
      </section>

      {/* From the sea, inland: context only */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="jzn-context">
        <div className="site-container py-14 lg:py-16">
          <div className="max-w-3xl">
            <h2 id="jzn-context" className="text-h2 text-balance text-white">
              {content.context.heading[locale]}
            </h2>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-white/70">{content.context.lead[locale]}</p>
          </div>
          <ol role="list" className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {/* The brass line from the sea inland: vertical on phones, horizontal from md */}
            <span aria-hidden className="absolute start-[7px] top-2 bottom-2 w-0.5 bg-brass/40 md:start-2 md:end-2 md:top-[7px] md:bottom-auto md:h-0.5 md:w-auto" />
            {seaToMountains.map((place) => (
              <li key={place.id} className="relative ps-8 md:ps-0 md:pt-8">
                <span aria-hidden className="absolute start-0 top-1 size-4 rounded-full bg-brass ring-4 ring-ink md:top-0" />
                <p className="numeric text-xs font-semibold text-brass">{place.marker[locale]}</p>
                <h3 className="mt-1 font-heading text-xl text-white">{place.name[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{place.detail[locale]}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/50">{place.note[locale]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-background" aria-labelledby="jzn-faq">
        <div className="site-container">
          <ClusterFaqList locale={locale} heading={content.faqHeading[locale]} headingId="jzn-faq" faqs={content.faqs} layout="split" />
          <div className="mt-12 grid gap-4 border-t border-ink/10 pt-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-16">
            <h2 className="text-h4 text-ink">{content.quotation.heading[locale]}</h2>
            <ul role="list" className="flex flex-col gap-2.5">
              {content.quotation.items.map((item) => (
                <li key={item.en} className="border-s-2 border-brass/60 ps-4 text-sm leading-relaxed text-muted-foreground">
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA: palm-deep with faint wave lines */}
      <section className="relative isolate overflow-hidden bg-palm-deep" aria-labelledby="jzn-cta">
        <Waves className="pointer-events-none absolute inset-x-0 top-6 -z-10 h-20 w-full text-white/10" />
        <div className="site-container flex flex-col gap-7 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brass">{content.cta.eyebrow[locale]}</p>
            <h2 id="jzn-cta" className="text-h2 mt-3 text-balance text-white">
              {content.cta.heading[locale]}
            </h2>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-white/80">{content.cta.body[locale]}</p>
          </div>
          <Link
            href={href(locale, "getQuote")}
            className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-brass px-8 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-white lg:self-auto"
          >
            {content.cta.button[locale]}
            <ArrowRightIcon aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
          </Link>
        </div>
      </section>

      <section className="section-y bg-background" aria-label={content.relatedHeading[locale]}>
        <div className="site-container">
          <RelatedLinks locale={locale} heading={content.relatedHeading[locale]} links={content.related} />
        </div>
      </section>
    </>
  );
}
