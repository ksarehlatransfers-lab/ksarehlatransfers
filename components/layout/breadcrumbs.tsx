import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "cn";
import { href } from "@/lib/i18n/routes";
import { ui } from "@/lib/i18n/dictionary";
import type { Crumb } from "@/lib/structured-data";
import type { Locale } from "@/lib/i18n/config";

/**
 * The visible breadcrumb trail.
 *
 * Takes the same `Crumb[]` that builds the BreadcrumbList structured data, so
 * the two can never disagree. The last crumb is the current page and is not a
 * link; it carries `aria-current="page"`.
 */
export function Breadcrumbs({
  locale,
  crumbs,
  tone = "default",
  className,
}: {
  locale: Locale;
  crumbs: Crumb[];
  /** "invert" is for placement on dark photography. */
  tone?: "default" | "invert";
  className?: string;
}) {
  return (
    <nav aria-label={ui.breadcrumb[locale]} className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs",
          tone === "invert" ? "text-white/65" : "text-muted-foreground"
        )}
      >
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={crumb.routeKey} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRightIcon
                  aria-hidden
                  className="size-3.5 shrink-0 opacity-60 rtl:-scale-x-100"
                />
              ) : null}

              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-medium",
                    tone === "invert" ? "text-white" : "text-ink"
                  )}
                >
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={href(locale, crumb.routeKey)}
                  className={cn(
                    "transition-colors",
                    tone === "invert" ? "hover:text-white" : "hover:text-palm"
                  )}
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
