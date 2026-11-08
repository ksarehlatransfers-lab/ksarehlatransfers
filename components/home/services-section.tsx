import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { homeCopy } from "@/lib/content/home-copy";
import { services } from "@/lib/content/services";
import { href } from "@/lib/i18n/routes";
import { altText } from "@/lib/images";
import { image } from "@/lib/site-images";
import { cn } from "cn";
import type { Locale } from "@/lib/i18n/config";

/**
 * Section C — the eight services.
 *
 * An editorial grid rather than eight identical boxes: the two lead services
 * run wide with the photograph above the copy, the rest are compact cards
 * with the image beside it.
 */
export function ServicesSection({ locale }: { locale: Locale }) {
  const copy = homeCopy.services;
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-y scroll-mt-20 bg-sand"
    >
      <div className="site-container">
        <SectionHeading
          id="services-title"
          eyebrow={copy.eyebrow[locale]}
          title={copy.title[locale]}
          lead={copy.lead[locale]}
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {featured.map((service) => {
            const photo = image(service.imageKey);
            return (
              <article
                key={service.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-ink/8 transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={altText(photo, locale)}
                    width={photo.width}
                    height={photo.height}
                    placeholder="blur"
                    blurDataURL={photo.blurDataURL}
                    loading="lazy"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-h3 text-ink">{service.name[locale]}</h3>
                  <p className="text-body mt-3 flex-1 text-muted-foreground">
                    {service.detail[locale]}
                  </p>
                  <ServiceLink locale={locale} service={service.name[locale]} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map((service) => {
            const photo = image(service.imageKey);
            return (
              <article
                key={service.slug}
                className="group flex overflow-hidden rounded-2xl bg-card ring-1 ring-ink/8 transition-shadow hover:shadow-lg"
              >
                <div className="relative w-28 shrink-0 overflow-hidden sm:w-32">
                  <Image
                    src={photo.src}
                    alt={altText(photo, locale)}
                    width={photo.width}
                    height={photo.height}
                    placeholder="blur"
                    blurDataURL={photo.blurDataURL}
                    loading="lazy"
                    sizes="128px"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-h4 text-ink">{service.name[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.summary[locale]}
                  </p>
                  <ServiceLink
                    locale={locale}
                    service={service.name[locale]}
                    compact
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Every card's action goes to the quote page rather than a service page that
 * does not exist yet, so no link on the page is a dead end. The service name
 * is appended for screen readers, since six identical "Get a quote" links
 * would otherwise be indistinguishable out of context.
 */
function ServiceLink({
  locale,
  service,
  compact,
}: {
  locale: Locale;
  service: string;
  compact?: boolean;
}) {
  const copy = homeCopy.services;

  return (
    <Link
      href={href(locale, "getQuote")}
      className={cn(
        "mt-4 inline-flex items-center gap-1.5 font-semibold text-palm transition-colors hover:text-palm-deep",
        compact ? "text-sm" : "text-[0.95rem]"
      )}
    >
      {copy.cardCta[locale]}
      <span className="sr-only">
        {" "}
        {copy.cardCtaFor[locale]} {service}
      </span>
      <ArrowUpRightIcon className="size-4 rtl:-scale-x-100" aria-hidden />
    </Link>
  );
}
