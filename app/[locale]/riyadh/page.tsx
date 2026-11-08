import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ClusterFaqList } from "@/components/cluster/cluster-faq";
import { riyadhHub, type HubBranch } from "@/lib/content/riyadh/hub";
import { href } from "@/lib/i18n/routes";
import { isLocale, locales } from "@/lib/i18n/config";
import { ui } from "@/lib/i18n/dictionary";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import { pageMetadata } from "@/lib/seo";
import { clusterPageJsonLd, jsonLdScript, type Crumb } from "@/lib/structured-data";
import type { Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/riyadh">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return pageMetadata({
    locale,
    routeKey: "riyadh",
    title: riyadhHub.seo.title[locale],
    description: riyadhHub.seo.description[locale],
    imageKey: "dest-riyadh",
  });
}

const crumbs = (locale: Locale): Crumb[] => [
  { name: ui.home[locale], routeKey: "home" },
  { name: riyadhHub.crumbLabel[locale], routeKey: "riyadh" },
];

/**
 * The Riyadh hub.
 *
 * Design concept — a junction. A split hero rather than the homepage's
 * centred one, then the page's whole middle is a set of branch cards: one
 * wide card for the intercity routes that exist, three narrower ones naming
 * the airport, railway and hotel pages that are still being written. Nothing
 * here links to a page that does not exist.
 */
export default async function RiyadhHubPage({
  params,
}: PageProps<"/[locale]/riyadh">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const photo = image("dest-riyadh");
  // Widened to the declared type on purpose. The content file uses
  // `satisfies HubBranch[]`, which checks the data but keeps the narrow
  // inferred type — so now that every branch has a page and none carries a
  // `planned` list, that key is absent from the inferred type and
  // `PlannedList` below could not be fed. The capability belongs to the type.
  const branches: HubBranch[] = riyadhHub.branches;
  const [intercity, ...supporting] = branches;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            clusterPageJsonLd({
              locale,
              routeKey: "riyadh",
              title: riyadhHub.seo.title[locale],
              description: riyadhHub.seo.description[locale],
              imageUrl: photo.src,
              crumbs: crumbs(locale),
              serviceName: riyadhHub.hero.h1[locale],
              serviceDescription: riyadhHub.seo.description[locale],
              faqEntries: riyadhHub.faqs.map((faq) => ({
                question: faq.question[locale],
                answer: faq.answer[locale],
              })),
            })
          ),
        }}
      />

      {/* Split hero — image beside the text, unlike the homepage's centred one */}
      <section className="bg-ink" aria-labelledby="riyadh-title">
        <div className="site-container grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 lg:py-16">
          <div>
            <Breadcrumbs locale={locale} crumbs={crumbs(locale)} tone="invert" />

            <p className="text-eyebrow mt-7 text-brass">
              {riyadhHub.hero.eyebrow[locale]}
            </p>
            <h1
              id="riyadh-title"
              className="text-display mt-4 text-balance text-white"
            >
              {riyadhHub.hero.h1[locale]}
            </h1>
            <p className="text-lead mt-6 max-w-xl text-pretty text-white/75">
              {riyadhHub.hero.lead[locale]}
            </p>

            <Link
              href={href(locale, "getQuote")}
              className="group mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-brass px-6 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep"
            >
              {riyadhHub.cta.button[locale]}
              <ArrowRightIcon
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              />
            </Link>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-3xl lg:aspect-4/5">
            <Image
              src={photo.src}
              alt={altText(photo, locale)}
              width={photo.width}
              height={photo.height}
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Orientation prose, kept narrow so it reads as an explanation */}
      <section className="section-y bg-background" aria-labelledby="riyadh-intro">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="riyadh-intro" className="text-h2 text-balance text-ink">
              {riyadhHub.intro.heading[locale]}
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {riyadhHub.intro.paragraphs.map((paragraph) => (
                <p key={paragraph.en} className="text-body text-muted-foreground">
                  {paragraph[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The junction itself */}
      <section className="section-y bg-sand" aria-labelledby="riyadh-branches">
        <div className="site-container">
          <h2 id="riyadh-branches" className="text-h2 text-balance text-ink">
            {riyadhHub.branchesHeading[locale]}
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {/* Intercity runs wide: it is the branch with live pages */}
            <article className="rounded-2xl bg-card p-6 ring-1 ring-ink/8 lg:col-span-2 lg:p-8">
              <h3 className="text-h3 text-ink">{intercity.title[locale]}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {intercity.summary[locale]}
              </p>

              <ul role="list" className="mt-6 grid gap-2.5 sm:grid-cols-3">
                {intercity.links?.map((link) => (
                  <li key={link.routeKey}>
                    <Link
                      href={href(locale, link.routeKey)}
                      className="group flex h-full flex-col justify-between gap-3 rounded-xl bg-palm-soft/70 p-4 transition-colors hover:bg-palm-soft"
                    >
                      <span className="flex items-start justify-between gap-2 text-[0.95rem] font-semibold text-palm-deep">
                        {link.label[locale]}
                        <ArrowUpRightIcon
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                        />
                      </span>
                      <span className="numeric text-xs font-medium text-palm-deep/75">
                        {link.meta[locale]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <PlannedList locale={locale} items={intercity.planned} />
            </article>

            {supporting.map((branch) => (
              <article
                key={branch.title.en}
                className="rounded-2xl bg-card p-6 ring-1 ring-ink/8"
              >
                <h3 className="text-h4 text-ink">{branch.title[locale]}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {branch.summary[locale]}
                </p>
                <PlannedList locale={locale} items={branch.planned} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practical notes */}
      <section
        className="section-y bg-background"
        aria-labelledby="riyadh-practical"
      >
        <div className="site-container">
          <h2 id="riyadh-practical" className="text-h2 text-balance text-ink">
            {riyadhHub.practical.heading[locale]}
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-9 md:grid-cols-3">
            {riyadhHub.practical.items.map((item) => (
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
        </div>
      </section>

      <section className="section-y bg-sand" aria-labelledby="riyadh-faq">
        <div className="site-container max-w-3xl">
          <ClusterFaqList
            locale={locale}
            heading={riyadhHub.faqHeading[locale]}
            headingId="riyadh-faq"
            faqs={riyadhHub.faqs}
          />
        </div>
      </section>

      {/* CTA — a plain brass band, distinct from the route pages' dark blocks */}
      <section className="bg-brass" aria-labelledby="riyadh-cta">
        <div className="site-container flex flex-col gap-7 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-ink/85">
              {riyadhHub.cta.eyebrow[locale]}
            </p>
            <h2
              id="riyadh-cta"
              className="text-h3 mt-3 text-balance text-ink"
            >
              {riyadhHub.cta.heading[locale]}
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">
              {riyadhHub.cta.body[locale]}
            </p>
          </div>

          <Link
            href={href(locale, "getQuote")}
            className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-8 text-[0.95rem] font-semibold text-white transition-colors hover:bg-palm-deep"
          >
            {riyadhHub.cta.button[locale]}
            <ArrowRightIcon
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
            />
          </Link>
        </div>
      </section>
    </>
  );
}

/** Pages named but not yet written — listed as text, never as dead links. */
function PlannedList({
  locale,
  items,
}: {
  locale: Locale;
  items?: { en: string; ar: string }[];
}) {
  if (!items?.length) return null;

  const label = {
    en: "Being written:",
    ar: "قيد الإعداد:",
  };

  return (
    <p className="mt-5 border-t pt-4 text-xs leading-relaxed text-muted-foreground">
      <span className="font-semibold text-ink">{label[locale]}</span>{" "}
      {items.map((item) => item[locale]).join(" · ")}
    </p>
  );
}
