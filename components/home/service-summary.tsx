import { homeCopy } from "@/lib/content/home-copy";
import type { Locale } from "@/lib/i18n/config";

/**
 * A short, factual summary placed high in the page.
 *
 * Written so a person skimming — or a search engine or AI assistant
 * extracting an answer — gets what the service is, where it runs, what it
 * covers and how to start, from plain rendered HTML rather than from
 * marketing copy spread over ten sections.
 */
export function ServiceSummary({ locale }: { locale: Locale }) {
  const copy = homeCopy.summary;

  return (
    <section
      aria-label={copy.label[locale]}
      className="border-b bg-sand-deep/35 py-10 lg:py-12"
    >
      <div className="site-container">
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {copy.facts.map((fact) => (
            <div key={fact.term.en}>
              <dt className="text-eyebrow text-palm">{fact.term[locale]}</dt>
              <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {fact.detail[locale]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
