import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { DestinationsSection } from "@/components/home/destinations-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { IntercitySection } from "@/components/home/intercity-section";
import { PilgrimageSection } from "@/components/home/pilgrimage-section";
import { ServiceSummary } from "@/components/home/service-summary";
import { ServicesSection } from "@/components/home/services-section";
import { TravelGuidesSection } from "@/components/home/travel-guides-section";
import { VehicleSection } from "@/components/home/vehicle-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { isLocale, locales, type Bilingual } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { homepageJsonLd, jsonLdScript } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Homepage SEO.
 *
 * English title is "main keyword + CTA" at 51 characters. The brand is left
 * out on purpose: adding it pushed the title past the ~60 character display
 * limit, and the rule is to drop the brand before the keyword or the CTA.
 * The Arabic title is written for Arabic searchers rather than translated,
 * and lands at 44 characters.
 */
const title: Bilingual<string> = {
  en: "Private Transfers Across Saudi Arabia | Get a Quote",
  ar: "نقل خاص في جميع أنحاء السعودية | اطلب عرض سعر",
};

const description: Bilingual<string> = {
  en:
    "Private car, van and minibus transfers across Saudi Arabia — airport " +
    "pickups, city-to-city routes, hotel transfers and Hajj, Umrah and " +
    "Ziyarat journeys. Send your journey details for a quotation.",
  ar:
    "نقل خاص بالسيارات والڤانات والحافلات الصغيرة في جميع أنحاء السعودية — " +
    "استقبال من المطارات، ورحلات بين المدن، ونقل من الفنادق، ورحلات الحج " +
    "والعمرة والزيارة. أرسل تفاصيل رحلتك واحصل على عرض سعر.",
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return pageMetadata({
    locale,
    routeKey: "home",
    title: title[locale],
    description: description[locale],
    imageKey: "hero",
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        // Serialised through a helper that escapes `<`.
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(homepageJsonLd(locale, title[locale])),
        }}
      />

      {/* A — nationwide proposition and the journey starter */}
      <HeroSection locale={locale} />

      {/* Plain-language summary, high in the page for people and crawlers */}
      <ServiceSummary locale={locale} />

      {/* B — where journeys can be arranged */}
      <DestinationsSection locale={locale} />

      {/* C — the eight services */}
      <ServicesSection locale={locale} />

      {/* D — Hajj, Umrah and Ziyarat */}
      <PilgrimageSection locale={locale} />

      {/* E — example intercity routes, linking into the Riyadh cluster */}
      <IntercitySection locale={locale} />

      {/* F — the booking process */}
      <HowItWorks locale={locale} />

      {/* G — what the service commits to */}
      <WhyChooseUs locale={locale} />

      {/* H — vehicle categories */}
      <VehicleSection locale={locale} />

      {/* I — travel guides, the start of the content cluster */}
      <TravelGuidesSection locale={locale} />

      {/* J — questions, with answers in the rendered HTML */}
      <FaqSection locale={locale} />

      {/* K — closing call to action */}
      <FinalCta locale={locale} />
    </>
  );
}
