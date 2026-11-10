import { ArrowRightIcon, CalendarIcon, MapPinIcon, NavigationIcon } from "lucide-react";

import { locationOptions } from "@/lib/content/destinations";
import { homeCopy } from "@/lib/content/home-copy";
import { href } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";

/**
 * The short journey starter that sits under the hero headline.
 *
 * Deliberately only the three things a visitor already knows: where from,
 * where to, and roughly when. Everything else — passengers, luggage, flight
 * number, contact details — is asked on the quote page, so the first screen
 * stays one glance wide.
 *
 * It is a plain `method="get"` form, not a Server Action, so the hero needs no
 * client JavaScript at all and the values arrive on the next page as ordinary
 * query parameters. Nothing is submitted or confirmed here.
 */
export function QuoteStartForm({ locale }: { locale: Locale }) {
  const copy = homeCopy.starter;
  const listId = `quote-start-locations-${locale}`;

  return (
    <form
      action={href(locale, "getQuote")}
      method="get"
      className="rounded-2xl bg-card p-4 text-start shadow-2xl ring-1 ring-ink/10 sm:p-5"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_11rem_auto] lg:items-end">
        <StartField
          name="pickup"
          label={copy.pickup[locale]}
          icon={<MapPinIcon aria-hidden className="size-3.5 text-palm" />}
        >
          <input
            id="pickup"
            name="pickup"
            required
            list={listId}
            autoComplete="off"
            placeholder={copy.pickupPlaceholder[locale]}
            className={controlClass}
          />
        </StartField>

        <StartField
          name="dropoff"
          label={copy.dropoff[locale]}
          icon={<NavigationIcon aria-hidden className="size-3.5 text-palm" />}
        >
          <input
            id="dropoff"
            name="dropoff"
            required
            list={listId}
            autoComplete="off"
            placeholder={copy.dropoffPlaceholder[locale]}
            className={controlClass}
          />
        </StartField>

        <StartField
          name="date"
          label={copy.date[locale]}
          icon={<CalendarIcon aria-hidden className="size-3.5 text-palm" />}
        >
          <input id="date" name="date" type="date" className={controlClass} />
        </StartField>

        {/* Suggestions, not a closed list — any Saudi address is valid. */}
        <datalist id={listId}>
          {locationOptions[locale].map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>

        <button
          type="submit"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-palm px-7 text-sm font-semibold text-white transition-colors hover:bg-palm-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {copy.submit[locale]}
          <ArrowRightIcon
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
          />
        </button>
      </div>

      <p className="mt-3.5 text-center text-xs text-muted-foreground lg:text-start">
        {copy.note[locale]}
      </p>
    </form>
  );
}

const controlClass =
  "h-12 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-ink transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40";

function StartField({
  name,
  label,
  icon,
  children,
}: {
  name: string;
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase"
      >
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}
