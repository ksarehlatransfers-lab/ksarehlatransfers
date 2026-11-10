import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { BookingForm } from "@/components/home/booking-form";
import { href } from "@/lib/i18n/routes";
import { isLocale, locales, type Bilingual, type Locale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { PASSENGER_OPTIONS, type FormValues } from "@/lib/inquiry/schema";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Step two of the quote flow.
 *
 * The hero starter on the homepage collects where from, where to and when and
 * sends them here as query parameters; this page asks for everything else.
 *
 * Not indexed: it is a form step rather than a page worth landing on from
 * search, and it has no content of its own to rank. hreflang still points at
 * the matching page in the other language so the switcher stays correct.
 */
const copy = {
  // This page is noindex, so the title is for the browser tab rather than a
  // search result. It carries the brand because there is room for it here.
  title: {
    en: "Get a quote | Private Transfers Across Saudi",
    ar: "اطلب عرض سعر | نقل خاص عبر السعودية",
  },
  description: {
    en:
      "Send your journey details — route, date, passengers and contact — and " +
      "receive a quotation for a private transfer in Saudi Arabia.",
    ar:
      "أرسل تفاصيل رحلتك — المسار والتاريخ وعدد الركاب وبيانات التواصل — " +
      "واحصل على عرض سعر لنقل خاص داخل المملكة.",
  },
  back: { en: "Back to home", ar: "العودة إلى الرئيسية" },
  step: { en: "Step 2 of 2", ar: "الخطوة 2 من 2" },
  heading: {
    en: "Tell us about the journey",
    ar: "أخبرنا عن رحلتك",
  },
  lead: {
    en: "We reply with a written quotation. Nothing is booked and no payment is taken on this page.",
    ar: "نرد عليك بعرض سعر مكتوب. لا يُحجز شيء ولا يُدفع أي مبلغ في هذه الصفحة.",
  },
} satisfies Record<string, Bilingual<string>>;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/get-quote">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return pageMetadata({
    locale,
    routeKey: "getQuote",
    title: copy.title[locale],
    description: copy.description[locale],
    noindex: true,
  });
}

export default async function GetQuotePage({
  params,
  searchParams,
}: PageProps<"/[locale]/get-quote">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <section className="section-y bg-sand">
      <div className="site-container">
        <div className="mx-auto max-w-2xl">
          <Link
            href={href(locale, "home")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-palm transition-colors hover:text-palm-deep"
          >
            <ArrowLeftIcon aria-hidden className="size-4 rtl:-scale-x-100" />
            {copy.back[locale]}
          </Link>

          <p className="text-eyebrow mt-8 text-palm">{copy.step[locale]}</p>
          <h1 className="text-h2 mt-3 text-balance text-ink">
            {copy.heading[locale]}
          </h1>
          <p className="text-lead mt-4 text-pretty text-muted-foreground">
            {copy.lead[locale]}
          </p>

          <div className="mt-9">
            <Suspense fallback={<FormSkeleton />}>
              <PrefilledBookingForm
                locale={locale}
                searchParams={searchParams}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Reads the starter's values at request time. Isolated behind `<Suspense>` so
 * the rest of the page still prerenders as a static shell.
 */
async function PrefilledBookingForm({
  locale,
  searchParams,
}: {
  locale: Locale;
} & Pick<PageProps<"/[locale]/get-quote">, "searchParams">) {
  const params = await searchParams;

  return (
    <BookingForm
      locale={locale}
      showIntro={false}
      // Same lead context as the original site's Get a Quote page.
      serviceType="Get Quote page"
      defaults={readDefaults(params)}
    />
  );
}

type RawParams = Awaited<PageProps<"/[locale]/get-quote">["searchParams"]>;

/**
 * The same prefill fields as the original form (pickup, dropoff, date, time,
 * passengers), each sanity-checked. `destination` is still read as a
 * fallback for `dropoff` so older starter links keep working. A query string
 * is attacker-controlled, so values are trimmed, length-capped and
 * shape-checked before they reach an input; the server action re-validates
 * everything on submit regardless.
 */
function readDefaults(params: RawParams): Partial<FormValues> {
  const first = (value: RawParams[string]) =>
    (Array.isArray(value) ? value[0] : value)?.trim().slice(0, 160) ?? "";

  const date = first(params.date);
  const time = first(params.time);
  const passengers = first(params.passengers);
  const defaults: Partial<FormValues> = {
    pickup: first(params.pickup),
    dropoff: first(params.dropoff) || first(params.destination),
    date: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "",
    time: /^\d{2}:\d{2}$/.test(time) ? time : "",
  };
  if ((PASSENGER_OPTIONS as readonly string[]).includes(passengers)) defaults.passengers = passengers;
  return defaults;
}

function FormSkeleton() {
  return (
    <div
      aria-hidden
      className="h-[42rem] animate-pulse rounded-2xl bg-card shadow-xl ring-1 ring-ink/10"
    />
  );
}
