import Link from "next/link";
import { BriefcaseIcon, UsersIcon } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { homeCopy } from "@/lib/content/home-copy";
import { vehicleClasses } from "@/lib/content/vehicles";
import { href } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section H — vehicle options.
 *
 * Categories only. There are deliberately no vehicle photographs, makes,
 * models or registration details here: the fleet is not confirmed, and a
 * stock photo of someone else's car presented as ours would be a lie. The
 * section is data-driven, so real vehicles slot into lib/content/vehicles.ts
 * without touching this component.
 */
export function VehicleSection({ locale }: { locale: Locale }) {
  const copy = homeCopy.vehicles;

  return (
    <section
      id="vehicles"
      aria-labelledby="vehicles-title"
      className="section-y scroll-mt-20 bg-sand"
    >
      <div className="site-container">
        <SectionHeading
          id="vehicles-title"
          eyebrow={copy.eyebrow[locale]}
          title={copy.title[locale]}
          lead={copy.lead[locale]}
        />

        <ul role="list" className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {vehicleClasses.map((vehicle) => (
            <li
              key={vehicle.slug}
              className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-ink/8"
            >
              <h3 className="text-h3 text-ink">{vehicle.name[locale]}</h3>

              <dl className="mt-4 flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <UsersIcon className="size-4 shrink-0 text-palm" aria-hidden />
                  <dt className="sr-only">{copy.passengersLabel[locale]}</dt>
                  <dd className="text-ink">{vehicle.seats[locale]}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <BriefcaseIcon
                    className="size-4 shrink-0 text-palm"
                    aria-hidden
                  />
                  <dt className="sr-only">{copy.luggageLabel[locale]}</dt>
                  <dd className="text-ink">{vehicle.luggage[locale]}</dd>
                </div>
              </dl>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {vehicle.summary[locale]}
              </p>

              <ul role="list" className="mt-5 flex flex-wrap gap-1.5 border-t pt-4">
                {vehicle.bestFor[locale].map((use) => (
                  <li
                    key={use}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {use}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          {copy.footnotePrefix[locale]}{" "}
          <Link
            href={href(locale, "getQuote")}
            className="font-semibold text-palm underline underline-offset-4 hover:text-palm-deep"
          >
            {copy.footnoteLink[locale]}
          </Link>{" "}
          {copy.footnoteSuffix[locale]}
        </p>
      </div>
    </section>
  );
}
