import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/home/section-heading";
import { faqs } from "@/lib/content/faqs";
import { homeCopy } from "@/lib/content/home-copy";
import { href } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section J — frequently asked questions.
 *
 * `hiddenUntilFound` keeps every answer in the rendered HTML instead of
 * mounting it on click, so search engines and AI crawlers read the full text
 * and the browser's own find-in-page can open a collapsed answer. The ARIA
 * wiring comes from the underlying accordion primitive.
 *
 * This stays a Server Component — the interactivity lives inside the
 * primitive, so no page-level JavaScript is added here.
 */
export function FaqSection({ locale }: { locale: Locale }) {
  const copy = homeCopy.faq;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-y scroll-mt-20 bg-sand"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="faq-title"
              eyebrow={copy.eyebrow[locale]}
              title={copy.title[locale]}
              lead={
                <>
                  {copy.leadPrefix[locale]}{" "}
                  <Link
                    href={href(locale, "getQuote")}
                    className="font-semibold text-palm underline underline-offset-4 hover:text-palm-deep"
                  >
                    {copy.leadLink[locale]}
                  </Link>{" "}
                  {copy.leadSuffix[locale]}
                </>
              }
            />
          </div>

          <Accordion
            hiddenUntilFound
            defaultValue={[faqs[0].question[locale]]}
            className="rounded-2xl bg-card px-5 ring-1 ring-ink/8 sm:px-7"
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
      </div>
    </section>
  );
}
