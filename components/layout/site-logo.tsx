import Link from "next/link";

import { cn } from "cn";
import { href } from "@/lib/i18n/routes";
import { site } from "@/lib/site";
import { ui } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/config";

/** The wordmark in each language. Same two-part structure, same hierarchy. */
const wordmark = {
  en: { primary: "Private Transfers", secondary: "Across Saudi" },
  ar: { primary: "نقل خاص", secondary: "عبر السعودية" },
} as const;

/**
 * Wordmark. Drawn rather than imported so it inherits the brand colour tokens
 * and stays crisp at any size without shipping an image.
 */
export function SiteLogo({
  locale,
  className,
  tone = "default",
}: {
  locale: Locale;
  className?: string;
  /** "invert" is for placement on dark photography. */
  tone?: "default" | "invert";
}) {
  const mark = wordmark[locale];

  return (
    <Link
      href={href(locale, "home")}
      aria-label={`${site.name} — ${ui.home[locale]}`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4",
        tone === "invert" ? "text-white" : "text-ink",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-[0.6rem] transition-colors",
          tone === "invert"
            ? "bg-white/15 ring-1 ring-white/25"
            : "bg-palm text-white"
        )}
      >
        {/* A road narrowing to the horizon — the one visual mark of the brand. */}
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            d="M4.5 21 9.8 4.2a1.6 1.6 0 0 1 1.53-1.12h1.34c.7 0 1.32.45 1.53 1.12L19.5 21"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M12 6.4v2.3M12 11.6v2.3M12 16.8v2.4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[1.3rem] tracking-tight">
          {mark.primary}
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-semibold tracking-[0.22em] uppercase",
            locale === "ar" && "tracking-normal normal-case",
            tone === "invert" ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {mark.secondary}
        </span>
      </span>
    </Link>
  );
}
