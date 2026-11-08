import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";
import type { ClusterFaq, ClusterCta, RelatedLink } from "@/lib/content/riyadh/types";

/**
 * Shapes for the Jeddah hub.
 *
 * Deliberately **not** the Riyadh hub's `HubBranch` shape. Riyadh is a
 * junction and is organised by service type; Jeddah is a doorway and is
 * organised by **where you are going next**. Reusing Riyadh's type would have
 * quietly imposed Riyadh's architecture, which is the thing the brief for this
 * phase ruled out.
 *
 * Shared leaf types (`ClusterFaq`, `ClusterCta`, `RelatedLink`) are imported
 * rather than duplicated: those are data shapes, not layout decisions, and the
 * accordion and related-links components already consume them.
 */

/**
 * A destination reachable from Jeddah, with its figures and — where one
 * honestly exists — a caveat.
 *
 * The caveat is the point. Every competitor card says "book now"; a card that
 * says "the train is often better for this one" is a different kind of object,
 * and it is the design expression of the editorial position the published
 * cluster already takes.
 */
export type JeddahDestination = {
  name: Bilingual<string>;
  /** One line on why people go. */
  reason: Bilingual<string>;
  distance: Bilingual<string>;
  duration: Bilingual<string>;
  /** Set where there is something true the reader needs before booking. */
  caveat?: Bilingual<string>;
  /** Only where a published page actually exists. */
  routeKey?: RouteKey;
  /** Named as text where a page is planned but not built. */
  plannedNote?: Bilingual<string>;
  /** Visually weighted above the others — at most one. */
  primary?: boolean;
};

/**
 * The access notice.
 *
 * Its own type because it is the only element of its kind in the project: a
 * fact that can make a booking undeliverable, given a designed block rather
 * than a line of small print. `weight` lets the Arabic rendering carry the
 * same facts with less visual emphasis — the Arabic audience is overwhelmingly
 * Muslim and the restriction is common knowledge, so a bordered warning there
 * would read as condescending. Same facts, localised emphasis.
 */
export type AccessNotice = {
  heading: Bilingual<string>;
  body: Bilingual<string>[];
  /** What we will not do, stated so the limit is explicit. */
  limit: Bilingual<string>;
  /** A contextual link to the page that carries the full rules. */
  link?: { routeKey: RouteKey; label: Bilingual<string> };
};

/** A step in the traveller's day, rendered as a full-width band. */
export type ThresholdBand = {
  heading: Bilingual<string>;
  lead: Bilingual<string>;
  paragraphs: Bilingual<string>[];
  imageKey?: SiteImageKey;
  links?: RelatedLink[];
};

export type JeddahHubContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: Bilingual<string>; description: Bilingual<string> };
  crumbLabel: Bilingual<string>;
  hero: {
    eyebrow: Bilingual<string>;
    h1: Bilingual<string>;
    lead: Bilingual<string>;
  };
  access: AccessNotice;
  destinations: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    items: JeddahDestination[];
    footnote: Bilingual<string>;
  };
  bands: ThresholdBand[];
  quotation: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    items: Bilingual<string>[];
  };
  faqHeading: Bilingual<string>;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};
