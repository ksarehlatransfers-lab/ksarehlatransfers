"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguagesIcon } from "lucide-react";

import { cn } from "cn";
import { ui } from "@/lib/i18n/dictionary";
import {
  isLocale,
  localeName,
  localePath,
  otherLocale,
  type Locale,
} from "@/lib/i18n/config";

/**
 * Takes the visitor to the same page in the other language.
 *
 * Slugs are shared across locales, so the equivalent URL is the current path
 * with its locale segment swapped — never a drop to the homepage. Client-side
 * only because it needs the path it is currently on; it renders a real anchor,
 * so it works before hydration and is crawlable.
 */
export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const target = otherLocale(locale);

  // Rebuilt through `localePath` rather than joined by hand: joining dropped
  // the trailing slash, so every language switch answered 308 before it
  // rendered. The path minus its locale segment is exactly what `localePath`
  // takes.
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.length > 0 && isLocale(segments[0])
    ? segments.slice(1)
    : segments;
  const href = localePath(target, rest.join("/"));

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={ui.switchLanguageLabel[locale]}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-semibold text-ink transition-colors hover:bg-secondary",
        className
      )}
    >
      <LanguagesIcon aria-hidden className="size-4 text-muted-foreground" />
      {localeName[target]}
    </Link>
  );
}
