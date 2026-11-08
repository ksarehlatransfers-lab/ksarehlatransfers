import { destinations } from "@/lib/content/destinations";
import { faqs } from "@/lib/content/faqs";
import { services } from "@/lib/content/services";
import { htmlLang, type Locale } from "@/lib/i18n/config";
import { href, type RouteKey } from "@/lib/i18n/routes";
import { absoluteUrl, site } from "@/lib/site";

/**
 * Structured data.
 *
 * Only facts that are true of the service appear here. There is deliberately
 * no aggregateRating, review, priceRange, telephone, opening hours or postal
 * address: none of those are established, and inventing them to win a rich
 * result is exactly the kind of thing that gets a site penalised.
 *
 * Organization and WebSite are shared; each page adds its own WebPage,
 * BreadcrumbList and — where it has questions — FAQPage.
 */

const organizationId = `${site.url}/#organization`;
const websiteId = (locale: Locale) => `${site.url}/#website-${locale}`;

function organization(locale: Locale) {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    url: absoluteUrl(href(locale, "home")),
    description: site.description[locale],
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    knowsAbout: destinations.map((d) => `Private transfers in ${d.name.en}`),
  };
}

function website(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": websiteId(locale),
    url: absoluteUrl(href(locale, "home")),
    name: site.name,
    inLanguage: htmlLang[locale],
    publisher: { "@id": organizationId },
  };
}

export type Crumb = { name: string; routeKey: RouteKey };

/**
 * A BreadcrumbList for the visible breadcrumb trail. The two must always
 * agree, so both are built from the same array.
 */
export function breadcrumbJsonLd(locale: Locale, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(href(locale, crumbs[crumbs.length - 1].routeKey))}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(href(locale, crumb.routeKey)),
    })),
  };
}

export function faqJsonLd(
  locale: Locale,
  routeKey: RouteKey,
  entries: { question: string; answer: string }[]
) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(href(locale, routeKey))}#faq`,
    inLanguage: htmlLang[locale],
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

/** Structured data for the homepage. */
export function homepageJsonLd(locale: Locale, title: string) {
  const url = absoluteUrl(href(locale, "home"));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(locale),
      website(locale),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: site.description[locale],
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": websiteId(locale) },
        about: { "@id": organizationId },
        primaryImageOfPage: absoluteUrl("/images/riyadh-skyline.webp"),
      },
      {
        // The catalogue of what can be requested, without prices, since every
        // journey is quoted individually.
        "@type": "Service",
        "@id": `${site.url}/#service-${locale}`,
        serviceType: "Private ground transfer",
        provider: { "@id": organizationId },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Private transfer services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name[locale],
              description: service.detail[locale],
            },
          })),
        },
      },
      faqJsonLd(
        locale,
        "home",
        faqs.map((faq) => ({
          question: faq.question[locale],
          answer: faq.answer[locale],
        }))
      ),
    ],
  };
}

/**
 * Structured data for a page in the Riyadh cluster.
 *
 * A route page describes one journey, so it carries a Service scoped to that
 * journey rather than repeating the whole catalogue. `distanceKm` and
 * `duration` are not emitted as schema properties: there is no honest
 * schema.org field for an approximate road distance on a quoted service, and
 * putting an estimate into structured data reads as a commitment.
 */
export function clusterPageJsonLd({
  locale,
  routeKey,
  title,
  description,
  imageUrl,
  crumbs,
  serviceName,
  serviceDescription,
  faqEntries,
}: {
  locale: Locale;
  routeKey: RouteKey;
  title: string;
  description: string;
  imageUrl?: string;
  crumbs: Crumb[];
  serviceName: string;
  serviceDescription: string;
  faqEntries: { question: string; answer: string }[];
}) {
  const url = absoluteUrl(href(locale, routeKey));

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(locale),
      website(locale),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": websiteId(locale) },
        about: { "@id": organizationId },
        ...(imageUrl ? { primaryImageOfPage: absoluteUrl(imageUrl) } : {}),
        breadcrumb: {
          "@id": `${absoluteUrl(href(locale, crumbs[crumbs.length - 1].routeKey))}#breadcrumb`,
        },
      },
      breadcrumbJsonLd(locale, crumbs),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: serviceName,
        description: serviceDescription,
        serviceType: "Private ground transfer",
        provider: { "@id": organizationId },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
      },
      ...(faqEntries.length ? [faqJsonLd(locale, routeKey, faqEntries)] : []),
    ],
  };
}

/**
 * Serialises JSON-LD for embedding in a script tag, escaping `<` so a value
 * can never break out of the element.
 */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
