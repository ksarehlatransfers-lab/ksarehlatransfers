import type { Bilingual } from "@/lib/i18n/config";
import type { RouteKey } from "@/lib/i18n/routes";
import type { SiteImageKey } from "@/lib/site-images";

/** Shared shapes for the Riyadh cluster's page content. */

export type ClusterFaq = {
  question: Bilingual<string>;
  answer: Bilingual<string>;
};

export type ClusterStat = {
  label: Bilingual<string>;
  value: Bilingual<string>;
  /** Shown as a footnote where the figure is an estimate, not a commitment. */
  note?: Bilingual<string>;
};

export type ClusterBlock = {
  heading: Bilingual<string>;
  paragraphs: Bilingual<string>[];
};

export type RelatedLink = {
  routeKey: RouteKey;
  label: Bilingual<string>;
  note: Bilingual<string>;
};

export type JourneyStage = {
  name: Bilingual<string>;
  detail: Bilingual<string>;
  /** Approximate distance from the origin, in km. */
  km?: number;
};

export type PlannedLink = {
  label: Bilingual<string>;
  note: Bilingual<string>;
};

export type ClusterCta = {
  eyebrow: Bilingual<string>;
  heading: Bilingual<string>;
  body: Bilingual<string>;
  button: Bilingual<string>;
};

/**
 * A side-by-side weighing of two travel options. Only pages where the choice
 * is genuinely open carry one — the Dammam corridor has a rail alternative
 * worth comparing honestly, the Jeddah one does not.
 */
export type Comparison = {
  heading: Bilingual<string>;
  lead: Bilingual<string>;
  columns: {
    title: Bilingual<string>;
    /**
     * A single figure set large above the column — "10–12 hrs" against
     * "1h 35m–2h". Only used where the contrast *is* the argument, which so
     * far is drive-or-fly on the AlUla page.
     */
    headline?: Bilingual<string>;
    points: Bilingual<string>[];
  }[];
  footnote: Bilingual<string>;
};

/**
 * A region and the towns around its centre.
 *
 * Only the Qassim page carries one. There the region is the better answer
 * than the city: people search for Qassim and arrive at Buraydah, and the
 * places they actually want are often Unaizah or Ar Rass.
 */
export type RegionBlock = {
  heading: Bilingual<string>;
  lead: Bilingual<string>;
  centre: { name: Bilingual<string>; note: Bilingual<string> };
  satellites: { name: Bilingual<string>; note: Bilingual<string> }[];
};

/**
 * Labelled points on an elevation profile, drawn as a simple SVG band.
 *
 * Only the Taif page has one, because it is the only approved route where
 * the terrain is the story. `metres` are real published elevations, not
 * drawing coordinates — the component scales them.
 */
export type ElevationProfile = {
  heading: Bilingual<string>;
  lead: Bilingual<string>;
  points: { name: Bilingual<string>; metres: number; note: Bilingual<string> }[];
  footnote: Bilingual<string>;
};

/** A preparation checklist. Only the Hail page carries one. */
export type Checklist = {
  heading: Bilingual<string>;
  lead: Bilingual<string>;
  items: { title: Bilingual<string>; detail: Bilingual<string> }[];
};

/**
 * Two roads to the same destination. Only the Hail page carries one, where
 * "which way" is a real question with a published answer.
 */
export type RouteChoice = {
  heading: Bilingual<string>;
  lead: Bilingual<string>;
  options: {
    name: Bilingual<string>;
    via: Bilingual<string>;
    distance: Bilingual<string>;
    duration: Bilingual<string>;
    note: Bilingual<string>;
  }[];
  footnote: Bilingual<string>;
};

/**
 * The consolidated airport page.
 *
 * Not a `RoutePageContent`: it has no origin and destination, and its shape is
 * set by the four mandatory `<h2>` sections approved in
 * docs/riyadh-url-inventory.md — arrivals, departures, hotel connections and
 * onward intercity connections. Two directions, one page.
 */
export type AirportPageContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: Bilingual<string>; description: Bilingual<string> };
  crumbLabel: Bilingual<string>;
  hero: {
    eyebrow: Bilingual<string>;
    h1: Bilingual<string>;
    lead: Bilingual<string>;
  };
  stats: ClusterStat[];
  statsChecked: Bilingual<string>;
  overview: ClusterBlock;
  /**
   * The signature element: arrivals and departures side by side, each with its
   * own `<h2>`. Both are always visible — the page makes the argument for
   * consolidating two directions into one URL by answering both at once, with
   * no switcher and no JavaScript.
   */
  directions: {
    lead: Bilingual<string>;
    panels: {
      heading: Bilingual<string>;
      lead: Bilingual<string>;
      steps: { title: Bilingual<string>; detail: Bilingual<string> }[];
    }[];
  };
  /** The page's unique angle, given its own band. */
  flightNumber: {
    eyebrow: Bilingual<string>;
    heading: Bilingual<string>;
    paragraphs: Bilingual<string>[];
  };
  /** `<h2>` three of four. No link until the hotel page exists. */
  hotels: ClusterBlock;
  /** `<h2>` four of four: the airport as a starting point for a long drive. */
  onward: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    links: RelatedLink[];
  };
  /**
   * What the written quotation states, rather than a list of inclusions.
   * Deliberate: the inclusions themselves are unconfirmed operational
   * information, so the page describes the *process* it can vouch for.
   */
  quotation: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    stated: Bilingual<string>[];
    withheld: Bilingual<string>[];
    footnote: Bilingual<string>;
  };
  practical: { heading: Bilingual<string>; items: ClusterBlock[] };
  booking: ClusterBlock;
  faqHeading: Bilingual<string>;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

/**
 * The consolidated railway station page.
 *
 * Riyadh has **two** passenger railway stations, not three: the city station
 * on the Dammam line (which SAR's network pages and most travellers call
 * *Riyadh East*) and Riyadh North at Thumamah on the Qurayyat line. "Riyadh
 * East" is an alias for the first, not a third station — see
 * docs/research/railway-architecture-validation.md.
 *
 * So one page, with a substantial section per real station, and the aliases
 * used naturally in the copy rather than split across duplicate URLs.
 */
export type StationPageContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: Bilingual<string>; description: Bilingual<string> };
  crumbLabel: Bilingual<string>;
  hero: {
    eyebrow: Bilingual<string>;
    h1: Bilingual<string>;
    lead: Bilingual<string>;
  };
  /**
   * The departure-board panel in the hero: one row per station, naming its
   * line and where that line goes. Destinations only — never a time or a
   * fare, neither of which we can know.
   */
  board: {
    caption: Bilingual<string>;
    rows: {
      station: Bilingual<string>;
      line: Bilingual<string>;
      towards: Bilingual<string>;
    }[];
  };
  stats: ClusterStat[];
  statsChecked: Bilingual<string>;
  overview: ClusterBlock;
  /**
   * The signature element: the two corridors drawn as parallel lines of
   * station chips, so "which station do I need" is answered by looking at
   * where you are going.
   */
  corridors: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    lines: {
      name: Bilingual<string>;
      from: Bilingual<string>;
      stops: Bilingual<string>[];
      note: Bilingual<string>;
    }[];
    footnote: Bilingual<string>;
  };
  /** One block per real station, each with its own `<h2>`. */
  stations: {
    heading: Bilingual<string>;
    aliases: Bilingual<string>;
    lead: Bilingual<string>;
    /** Published facts about the station, as a short labelled list. */
    facts: { label: Bilingual<string>; value: Bilingual<string> }[];
    paragraphs: Bilingual<string>[];
    /** Route pages this station's line actually serves. */
    links: RelatedLink[];
    /** Omitted where no honest photograph of that station exists. */
    imageKey?: SiteImageKey;
  }[];
  /** What is documented and what is not — stated plainly, not buried. */
  limits: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    items: Bilingual<string>[];
  };
  practical: { heading: Bilingual<string>; items: ClusterBlock[] };
  booking: ClusterBlock;
  faqHeading: Bilingual<string>;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

/**
 * The hotel transfers page.
 *
 * The smallest service intent in the Riyadh cluster, and shaped accordingly:
 * no stat band, because the page makes no distance or duration claim; no hero
 * photograph, because we hold none and will not use hotel-branded imagery; one
 * column throughout. The quietest page in the set by design.
 *
 * Its one real insight is that large Riyadh hotels have several entrances, and
 * naming the right one is where transfers actually go wrong. That is advice we
 * can give without needing anything confirmed by a partner.
 */
export type HotelPageContent = {
  routeKey: RouteKey;
  /** Social card and structured data only; nothing is rendered on the page. */
  imageKey: SiteImageKey;
  seo: { title: Bilingual<string>; description: Bilingual<string> };
  crumbLabel: Bilingual<string>;
  hero: {
    eyebrow: Bilingual<string>;
    h1: Bilingual<string>;
    lead: Bilingual<string>;
  };
  /** The unique angle, given the first `<h2>`. */
  entrance: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    kinds: { name: Bilingual<string>; detail: Bilingual<string> }[];
    footnote: Bilingual<string>;
  };
  /** One `<h2>` per kind of hotel journey, each with its own links. */
  journeys: {
    heading: Bilingual<string>;
    paragraphs: Bilingual<string>[];
    links: RelatedLink[];
  }[];
  /** The process, not a list of inclusions nobody has confirmed. */
  quotation: {
    heading: Bilingual<string>;
    lead: Bilingual<string>;
    items: Bilingual<string>[];
    booking: Bilingual<string>[];
  };
  faqHeading: Bilingual<string>;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};

/** A journey split across days. Only the AlUla page carries one. */
export type Itinerary = {
  heading: Bilingual<string>;
  lead: Bilingual<string>;
  stops: { day: Bilingual<string>; name: Bilingual<string>; detail: Bilingual<string> }[];
  footnote: Bilingual<string>;
};

export type RoutePageContent = {
  routeKey: RouteKey;
  imageKey: SiteImageKey;
  seo: { title: Bilingual<string>; description: Bilingual<string> };
  crumbLabel: Bilingual<string>;
  hero: {
    eyebrow: Bilingual<string>;
    h1: Bilingual<string>;
    lead: Bilingual<string>;
  };
  stats: ClusterStat[];
  /**
   * When the distance and driving-time figures above were last verified
   * against public route data, written out in both languages.
   *
   * Required, not optional: a route page without a date would silently look
   * like one that had never been checked. Only move the date when the figures
   * have actually been re-checked — a stale "last checked" line is worse than
   * none, because it transfers confidence it has not earned.
   */
  statsChecked: Bilingual<string>;
  overview: ClusterBlock;
  stages: { heading: Bilingual<string>; lead: Bilingual<string>; items: JourneyStage[] };
  pickup: ClusterBlock;
  dropoff: ClusterBlock;
  practical: { heading: Bilingual<string>; items: ClusterBlock[] };
  booking: ClusterBlock;
  /** Only on routes where a real alternative exists. */
  comparison?: Comparison;
  /** Only on routes that lead somewhere further. */
  onward?: { heading: Bilingual<string>; items: ClusterBlock[] };
  /**
   * The signature element, one per page. Each route page in the cluster owns
   * exactly one of these so no two pages read the same way — the design brief
   * in docs/riyadh-design-concepts.md is enforced here by the type rather
   * than by memory.
   */
  region?: RegionBlock;
  elevation?: ElevationProfile;
  checklist?: Checklist;
  routeChoice?: RouteChoice;
  itinerary?: Itinerary;
  faqHeading: Bilingual<string>;
  faqs: ClusterFaq[];
  related: RelatedLink[];
  cta: ClusterCta;
};
