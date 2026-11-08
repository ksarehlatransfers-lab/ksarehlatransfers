import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/layout/site-logo";
import { quoteCta } from "@/lib/content/navigation";
import type { Locale } from "@/lib/i18n/config";

/**
 * The single global header. Sections must never render their own navigation
 * bar — everything site-wide lives here.
 */
export function SiteHeader({ locale }: { locale: Locale }) {
  const cta = quoteCta(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/70">
      <div className="site-container flex h-16 items-center justify-between gap-4 md:h-18">
        <SiteLogo locale={locale} />

        <DesktopNav locale={locale} />

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} className="hidden sm:inline-flex" />

          <Link
            href={cta.href}
            className="group hidden h-10 items-center gap-2 rounded-lg bg-palm px-4 text-sm font-semibold text-white transition-colors hover:bg-palm-deep md:inline-flex"
          >
            {cta.label}
            <ArrowRightIcon
              className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
              aria-hidden
            />
          </Link>

          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}
