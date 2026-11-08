import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SiteLogo } from "@/components/layout/site-logo";
import { footerNav, quoteCta } from "@/lib/content/navigation";
import { ui } from "@/lib/i18n/dictionary";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";

/**
 * The single global footer. Also the place the site is honest about what it
 * is: a private transport arranger, not an official pilgrimage operator.
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  const columns = footerNav(locale);
  const cta = quoteCta(locale);

  return (
    <footer className="mt-auto border-t bg-ink text-white/70">
      <div className="site-container py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <SiteLogo locale={locale} tone="invert" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {ui.footerIntro[locale]}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={cta.href}
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-brass px-4 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep"
              >
                {cta.label}
                <ArrowUpRightIcon className="size-4 rtl:-scale-x-100" aria-hidden />
              </Link>
              <LanguageSwitcher
                locale={locale}
                className="border-white/25 text-white hover:bg-white/10"
              />
            </div>
          </div>

          <nav
            aria-label={ui.footerNavigation[locale]}
            className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4"
          >
            {columns.map((column, index) => {
              const headingId = `footer-col-${locale}-${index}`;
              return (
                <div key={column.heading}>
                  {/* A paragraph, not a heading: these labels group links for
                      screen readers without adding to the page's H2 outline. */}
                  <p id={headingId} className="text-eyebrow text-white/55">
                    {column.heading}
                  </p>
                  <ul
                    aria-labelledby={headingId}
                    className="mt-4 flex flex-col gap-2.5"
                  >
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <p className="max-w-3xl text-xs leading-relaxed text-white/60">
            {site.name} {ui.footerDisclaimer[locale]}
          </p>

          <div className="mt-6 flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {site.name}. {ui.footerRights[locale]}
            </p>
            <p>{ui.footerPhotoCredit[locale]}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
