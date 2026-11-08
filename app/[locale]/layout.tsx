import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Sans_Arabic,
  Instrument_Serif,
  Noto_Kufi_Arabic,
  Plus_Jakarta_Sans,
} from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ui } from "@/lib/i18n/dictionary";
import {
  direction,
  htmlLang,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { site } from "@/lib/site";

import "../globals.css";

/**
 * Brand typography. The Latin pair is fixed and unchanged: Instrument Serif
 * for display headings, Plus Jakarta Sans for everything else.
 *
 * Arabic cannot use those faces, so it gets a pair that mirrors the same
 * relationship rather than a different identity — Noto Kufi Arabic carries the
 * display weight that Instrument Serif carries in English, and IBM Plex Sans
 * Arabic does the body and interface work that Plus Jakarta Sans does. The
 * swap happens in globals.css against `html[lang="ar"]`, so every existing
 * `font-sans` and `font-heading` utility keeps working untouched.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

const kufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-kufi",
  display: "swap",
});

const fontVars = [
  jakarta.variable,
  instrument.variable,
  plexArabic.variable,
  kufiArabic.variable,
].join(" ");

/** One static branch per locale; no request-time locale detection. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    metadataBase: new URL(site.url),
    // Pages supply their own full title; this template only appends the brand
    // where a page title is short enough to carry it.
    title: { default: site.name, template: `%s | ${site.brand}` },
    applicationName: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "travel",
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#121a17" },
  ],
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const active: Locale = locale;

  return (
    <html
      lang={htmlLang[active]}
      dir={direction[active]}
      className={`${fontVars} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only rounded-lg bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-[100]"
        >
          {ui.skipToContent[active]}
        </a>
        <SiteHeader locale={active} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={active} />
      </body>
    </html>
  );
}
