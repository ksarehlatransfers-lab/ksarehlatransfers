import Image from "next/image";
import { ArrowRightIcon, MapPinnedIcon, PlaneLandingIcon } from "lucide-react";

import { QuoteStartForm } from "@/components/home/quote-start-form";
import { homeCopy } from "@/lib/content/home-copy";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section A — the first screen.
 *
 * Centred: what the service is, where it operates, then the journey starter
 * spanning the full width. The starter asks only where from, where to and
 * when; the quote page collects the rest.
 */
export function HeroSection({ locale }: { locale: Locale }) {
  const copy = homeCopy.hero;
  const hero = image("hero");

  return (
    <section
      className="relative isolate overflow-hidden bg-ink"
      aria-labelledby="hero-title"
    >
      {/* Photography, dimmed enough for AA-contrast text over it. */}
      <Image
        src={hero.src}
        alt={altText(hero, locale)}
        width={hero.width}
        height={hero.height}
        placeholder="blur"
        blurDataURL={hero.blurDataURL}
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/92 via-ink/78 to-ink/94"
      />

      <div className="site-container relative py-14 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow text-brass">{copy.eyebrow[locale]}</p>

          <h1
            id="hero-title"
            className="text-display mt-5 text-balance text-white"
          >
            {copy.title[locale]}
          </h1>

          <p className="text-lead mx-auto mt-6 max-w-2xl text-pretty text-white/75">
            {copy.lead[locale]}
          </p>
        </div>

        <div id="quote" className="mt-10 scroll-mt-24 lg:mt-12">
          <QuoteStartForm locale={locale} />
        </div>

        {/* Three factual orientation points, not invented statistics. */}
        <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-white/15 pt-9 sm:grid-cols-3">
          <HeroFact
            icon={<MapPinnedIcon aria-hidden className="size-4" />}
            term={copy.facts.coverage.term[locale]}
            detail={copy.facts.coverage.detail[locale]}
          />
          <HeroFact
            icon={<PlaneLandingIcon aria-hidden className="size-4" />}
            term={copy.facts.airports.term[locale]}
            detail={copy.facts.airports.detail[locale]}
          />
          <HeroFact
            icon={<ArrowRightIcon aria-hidden className="size-4 rtl:-scale-x-100" />}
            term={copy.facts.process.term[locale]}
            detail={copy.facts.process.detail[locale]}
          />
        </dl>
      </div>
    </section>
  );
}

function HeroFact({
  icon,
  term,
  detail,
}: {
  icon: React.ReactNode;
  term: string;
  detail: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-brass uppercase">
        {icon}
        {term}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-white/70">{detail}</dd>
    </div>
  );
}
