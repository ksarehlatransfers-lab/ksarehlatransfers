import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { href } from "@/lib/i18n/routes";
import type { RelatedLink } from "@/lib/content/riyadh/types";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "cn";

/**
 * Contextual links out of a cluster page.
 *
 * Anchor text is the destination's own name plus a line saying why you would
 * go there, rather than a repeated exact-match keyword. Every route page
 * carries the Riyadh hub in this list, which is what keeps the cluster from
 * having orphans.
 */
export function RelatedLinks({
  locale,
  heading,
  links,
  tone = "default",
  className,
}: {
  locale: Locale;
  heading: string;
  links: RelatedLink[];
  tone?: "default" | "invert";
  className?: string;
}) {
  const invert = tone === "invert";

  return (
    <div className={className}>
      <h2
        className={cn(
          "text-h3 text-balance",
          invert ? "text-white" : "text-ink"
        )}
      >
        {heading}
      </h2>

      <ul role="list" className="mt-6 grid gap-3 sm:grid-cols-3">
        {links.map((link) => (
          <li key={link.routeKey}>
            <Link
              href={href(locale, link.routeKey)}
              className={cn(
                "group flex h-full flex-col rounded-xl p-5 transition-colors",
                invert
                  ? "bg-white/8 ring-1 ring-white/15 hover:bg-white/14"
                  : "bg-card ring-1 ring-ink/8 hover:bg-sand"
              )}
            >
              <span
                className={cn(
                  "flex items-start justify-between gap-3 text-[0.95rem] font-semibold",
                  invert ? "text-white" : "text-ink"
                )}
              >
                {link.label[locale]}
                <ArrowUpRightIcon
                  aria-hidden
                  className="mt-0.5 size-4 shrink-0 text-palm transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
                />
              </span>
              <span
                className={cn(
                  "mt-1.5 text-sm leading-relaxed",
                  invert ? "text-white/65" : "text-muted-foreground"
                )}
              >
                {link.note[locale]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
