import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ClusterFaq } from "@/lib/content/riyadh/types";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "cn";

/**
 * The accordion behaviour is shared across the cluster; the questions never
 * are. Each page passes its own list, and no two pages carry the same one.
 *
 * `hiddenUntilFound` keeps every answer in the rendered HTML rather than
 * mounting it on click, so crawlers read the full text and the browser's own
 * find-in-page can open a collapsed answer. ARIA wiring, keyboard handling
 * and focus management come from the underlying primitive, so this stays a
 * Server Component and adds no page-level JavaScript.
 */
export function ClusterFaqList({
  locale,
  heading,
  headingId,
  faqs,
  layout = "stacked",
  className,
}: {
  locale: Locale;
  heading: string;
  headingId: string;
  faqs: ClusterFaq[];
  /** "split" puts the heading in a sticky column beside the questions. */
  layout?: "stacked" | "split";
  className?: string;
}) {
  return (
    <div
      className={cn(
        layout === "split" &&
          "grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16",
        className
      )}
    >
      <h2
        id={headingId}
        className={cn(
          "text-h2 text-balance text-ink",
          layout === "split" && "lg:sticky lg:top-28 lg:self-start"
        )}
      >
        {heading}
      </h2>

      <Accordion
        hiddenUntilFound
        defaultValue={[faqs[0].question[locale]]}
        className={cn(
          "rounded-2xl bg-card px-5 ring-1 ring-ink/8 sm:px-7",
          layout === "stacked" && "mt-8"
        )}
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.question.en}
            value={faq.question[locale]}
            className="not-last:border-b"
          >
            <AccordionTrigger className="gap-6 py-5 text-start text-[0.975rem] font-semibold text-ink hover:no-underline **:data-[slot=accordion-trigger-icon]:mt-0.5 **:data-[slot=accordion-trigger-icon]:text-palm">
              {faq.question[locale]}
            </AccordionTrigger>
            <AccordionContent className="pe-8 pb-5 text-[0.925rem] leading-relaxed text-muted-foreground">
              {faq.answer[locale]}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
