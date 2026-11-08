import Image from "next/image";
import {
  CarFrontIcon,
  CircleCheckIcon,
  FileTextIcon,
  PencilLineIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { homeCopy } from "@/lib/content/home-copy";
import { image } from "@/lib/site-images";
import type { Locale } from "@/lib/i18n/config";

const stepIcons = [
  PencilLineIcon,
  FileTextIcon,
  CircleCheckIcon,
  CarFrontIcon,
] as const;

/**
 * Section F — the booking process.
 *
 * Told along a road: a photograph of an open highway behind, the four steps
 * laid out on a line that runs through them.
 */
export function HowItWorks({ locale }: { locale: Locale }) {
  const copy = homeCopy.howItWorks;
  const photo = image("coverage");

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-sand"
    >
      <Image
        src={photo.src}
        alt=""
        width={photo.width}
        height={photo.height}
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        loading="lazy"
        sizes="100vw"
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-20 h-64 w-full object-cover object-top opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-sand via-sand/92 to-sand/70"
      />

      <div className="site-container section-y relative">
        <SectionHeading
          align="center"
          className="mx-auto items-center text-center"
          id="how-it-works-title"
          eyebrow={copy.eyebrow[locale]}
          title={copy.title[locale]}
          lead={copy.lead[locale]}
        />

        <ol
          role="list"
          className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {/* The road running between the steps on wide screens. */}
          <span
            aria-hidden
            className="absolute top-7 right-[12.5%] left-[12.5%] -z-10 hidden border-t-2 border-dashed border-palm/25 lg:block"
          />

          {copy.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <li
                key={step.title.en}
                className="flex flex-col items-center text-center"
              >
                <span className="grid size-14 place-items-center rounded-full bg-palm text-white shadow-lg shadow-palm/20 ring-8 ring-sand">
                  <Icon className="size-6" aria-hidden />
                </span>
                <p className="mt-5 text-[0.7rem] font-semibold tracking-[0.18em] text-palm uppercase">
                  {copy.stepLabel[locale]}{" "}
                  <span className="numeric">{index + 1}</span>
                </p>
                <h3 className="text-h4 mt-1.5 text-ink">{step.title[locale]}</h3>
                <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.body[locale]}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
