import {
  CalendarClockIcon,
  LanguagesIcon,
  LuggageIcon,
  MapIcon,
  MessageSquareTextIcon,
  UserRoundCheckIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { homeCopy } from "@/lib/content/home-copy";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section G — reasons to choose this service.
 *
 * Every item describes how the service is structured, which is verifiable.
 * No licences, fleet size, customer counts, ratings or awards appear here,
 * because none of those are established.
 */
const reasonIcons = [
  UserRoundCheckIcon,
  CalendarClockIcon,
  MapIcon,
  LuggageIcon,
  MessageSquareTextIcon,
  LanguagesIcon,
] as const;

export function WhyChooseUs({ locale }: { locale: Locale }) {
  const copy = homeCopy.whyUs;

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      className="section-y scroll-mt-20 bg-background"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <SectionHeading
            id="why-us-title"
            eyebrow={copy.eyebrow[locale]}
            title={copy.title[locale]}
            lead={copy.lead[locale]}
          />

          <ul role="list" className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {copy.reasons.map((reason, index) => {
              const Icon = reasonIcons[index];
              return (
                <li key={reason.title.en}>
                  <span className="grid size-10 place-items-center rounded-xl bg-palm-soft text-palm-deep">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-h4 mt-4 text-ink">
                    {reason.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.body[locale]}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
