# Riyadh cluster — page design concepts

The brand is locked: the same two type pairs, the same palm / brass / sand /
ink palette, the same button styles, the same global header and footer. What
differs between pages is **composition** — which is where the differentiation
has to come from, since a different palette per city would just be four
brands.

Each page below was given a concept before it was coded, and each has one
structural element that appears nowhere else in the cluster.

---

## Riyadh hub — *the junction*

**Concept.** The capital is where journeys start, so the page is a signpost
rather than a sales page.

- **Hero:** split, photograph boxed beside the text in a tall 4:5 frame.
  Deliberately not the homepage's centred full-bleed hero.
- **Signature element:** an asymmetric branch grid — one wide card for
  intercity (the branch with live pages, carrying three route tiles with
  distance and duration), three narrow cards for airport, railway and hotels.
  The unbuilt pages are named in a "being written" line rather than linked.
- **CTA:** a flat **brass band** with the button in ink. The only brass-field
  CTA in the cluster.
- **FAQ:** stacked and centred in a narrow column.

## Riyadh → Jeddah — *the long haul*

**Concept.** 950 km is the story. The page is paced like the drive.

- **Hero:** full-bleed destination photography, heavy dark gradient, headline
  over the image.
- **Signature element:** a **vertical journey timeline** — a road drawn down
  the page with a node at each stage and the distance from Riyadh as a pill.
  Six stages, from the city exit to arrival. No other page uses a vertical
  timeline, because no other route is long enough to earn one.
- **Second distinctive block:** pickup and drop-off as two glass cards over a
  dimmed highway photograph.
- **Stat band:** light sand strip directly beneath the hero.
- **CTA:** dark ink block with the related-links grid nested inside it.
- **FAQ:** split layout — heading sticky in the left column, questions right.

## Riyadh → Dammam — *the decision*

**Concept.** This is the one route with a credible rail alternative, so the
page's job is to help someone choose, including recommending the train.

- **Hero:** **light** sand background, split, photograph in a 3:2 rounded
  frame with a shadow. The inverse of the Jeddah hero.
- **Signature element:** a **two-column road-vs-rail comparison** with an icon
  per column and tick-listed conditions under each — "a private car makes
  sense when…" against "the train probably suits you better when…".
- **Stat band:** dark ink strip (the Jeddah page's is light), so the two pages
  do not read as the same template inverted by accident.
- **Stages:** horizontal, four milestones on a dashed line — a shorter journey
  gets a shorter-looking diagram.
- **CTA:** centred on ink, with the related links in their own preceding
  section rather than nested.

## Riyadh → Al Khobar — *the destination*

**Concept.** People going to Al Khobar care about the corniche and the
causeway, not the road. The page foregrounds where you end up.

- **Hero:** tall photograph with the headline at the **foot** of the image and
  the breadcrumb pinned to the top — the only bottom-anchored hero in the set.
- **Stats:** four bordered cards rather than a band.
- **Signature element:** the **causeway block** — a dark two-card split
  reading "what we arrange" against "what we do not do", stating plainly that
  we do not issue visas, process border formalities or give immigration
  advice. It is the page's most prominent block on purpose: it is the thing
  most likely to be assumed wrongly.
- **Stages:** numbered milestone cards in a four-up grid.
- **CTA:** a **palm** band with a brass button — the only palm-field CTA.
- **Order:** related links come *after* the CTA here, not before.

---

## Riyadh → Buraydah — *practical and regional*

**Concept.** A three-and-a-half-hour drive does not need a cinematic opening
or 2,500 words. This is deliberately the most compact page in the cluster.

- **Hero:** headline, lead and **all four figures in one sand band**, with no
  photograph beside them. The photograph arrives *afterwards*, as a full-bleed
  21:9 strip. Nothing else in the cluster opens facts-first.
- **Signature element one:** a **region block** — Buraydah as a wide palm card
  with Unaizah, Ar Rass and Al Bukayriyah hanging off it beneath a short
  connector. Earned by the search behaviour: people look for Qassim and want
  one of the satellites.
- **Signature element two:** car-or-train in **two ruled columns** separated by
  a vertical border, with no cards and no icon tiles — so it does not read like
  the Dammam page's comparison even though it answers the same kind of
  question.
- **Stages:** a measured row with the kilometre figure set large, divided by
  start-edge rules. Not a timeline and not a dotted rail.
- **CTA:** a light **palm-soft panel** with the button inline beside the text.
  The only side-by-side CTA in the cluster.

## Riyadh → Taif — *elevation*

**Concept.** The only route where the terrain is the story, so the terrain is
the centrepiece.

- **Hero:** full-width photograph with the headline on a **card overlapping its
  lower edge** — neither set over the image (Jeddah) nor at its foot
  (Al Khobar).
- **Signature element:** an **SVG elevation band** drawn to scale from
  published metres — Riyadh 612 m, the plateau crossing, Taif ~1,879 m, Al Hada
  ~2,177 m. The path is the data, not a decorative curve. Mirrored under
  `rtl:-scale-x-100` so the journey still begins at the reading edge, and
  `aria-hidden`, because every value is in the list beneath it.
- **Palette:** palm and sand only. **No brass anywhere on this page**, which
  reads cooler than the rest of the cluster without adding a token.
- **CTA:** the only **pale closing band** in the cluster, on `sand-deep`.
- **FAQ:** split layout, heading in a sticky column.

## Riyadh → Hail — *the planner*

**Concept.** Six hours north with long gaps between services. The page is
something you read before you go, not a brochure.

- **Hero:** **photograph first, words second** — a 21:9 image directly under
  the breadcrumb, then the headline and lead in two columns below it. No other
  page puts the image above the H1.
- **Signature element one:** a **route-choice pair** of cards with distance and
  driving time as a small inner table, the faster route outlined and badged
  "Our default". The transport authority publishes two roads to Hail; nobody
  else in this market writes down which to take.
- **Signature element two:** a **preparation checklist** as a ruled list with
  large muted ordinals in the gutter.
- **Figures:** a **ruled definition list**, label against value, rather than
  cards or a band.
- **Stages:** numbered `01`–`05` against start-edge rules. Not the Jeddah
  timeline.
- **CTA:** dark band with the related links inside it, divided by a hairline.

## Riyadh → AlUla — *landscape-led*

**Concept.** The search results are flight-dominated, so the page's job is to
give an honest recommendation that costs us the sale, and to sell the airport
transfer instead.

- **Hero:** tall full-bleed landscape with the headline **centred** in it —
  deliberately not anchored to the foot, which is the Jeddah page's move.
- **Signature element one:** **drive-or-fly** as two large cards with the times
  set in display numerals beside each heading — `~1h 35m–2h` against
  `10–12 hrs`. The contrast settles the argument on sight, and the **flying
  column comes first** because that is the honest order.
- **Signature element two:** the **two-day itinerary** as two linked stops with
  an arrow between them, mirrored for RTL.
- **Stages:** light cards rather than bare columns, so the longest journey in
  the cluster does not read as an undifferentiated row of five.
- **CTA:** the only **brass field** CTA among the route pages, with an ink
  button. Ink on brass measures 6.68:1.
- **Honesty constraint recorded in the page itself:** the hero is AlUla, the
  destination. It is captioned as such and must never be presented as a
  photograph of the road.

## Riyadh airport transfers — *two directions*

**Concept.** The page exists because arrivals and departures are one intent
read two ways. The layout has to make that argument, or the single URL looks
like a compromise instead of a decision.

- **Hero:** an asymmetric split that **bleeds the photograph off the end edge
  of the viewport** — the text column carries its own gutters rather than
  `.site-container`, because a centred max-width wrapper would prevent exactly
  that. No other page in the cluster breaks the container.
- **Signature element:** the two directions as **equal side-by-side panels**,
  both always visible, each with its own `<h2>` and its own numbered steps.
  **No switcher, no tabs, no JavaScript** — a switcher would hide half the
  answer and reintroduce the split the consolidation decision removed.
- **An honesty constraint shaped the panels.** Only the departures panel
  carries a photograph, because the one we hold is genuinely a departures
  hall. The arrivals panel takes a tinted `palm-soft` header instead rather
  than captioning a picture as something it is not. The asymmetry is the
  honest choice, not an oversight.
- **The unique angle gets its own band:** the flight-number mechanic sits in a
  full-width **palm field**, not buried in a list, because it is the single
  most useful thing on the page.
- **Quotation section:** two columns, "stated in your quotation" against "not
  published here" — the only place in the cluster where a block's second
  column is a list of things we decline to claim.
- **CTA:** a **palm-deep** band with the related links inside it. That shade is
  used nowhere else in the cluster.

## Riyadh railway stations — *the departure board*

**Concept.** The page's job is to stop someone booking a car to the wrong
building. Everything else is secondary to that, so the disambiguation leads.

- **Hero:** the headline beside a **departure-board panel** on ink — one row
  per station, each naming its line and where that line goes, with brass
  labels and hairline dividers. **Destinations only, never times or fares**,
  because destinations are the part we can actually know. No other page in the
  cluster opens with a data panel.
- **Signature element:** the **corridor diagram** — the two lines drawn as
  parallel runs of station chips, the origin chip filled palm and the stops
  outlined, joined by short rules. "Which station do I need" is answered by
  finding your destination. It mirrors for RTL automatically, because the flex
  row reverses under `dir="rtl"`.
- **Station sections:** one per real station, alternating `background` and a
  tinted `palm-soft/40`, each with a labelled fact list and its own route
  links. The aliases sit under each heading as a quiet line — five names for
  one station is the reason the page exists.
- **An honesty constraint shaped the second section.** No photograph of Riyadh
  North exists under an open licence, so that section uses a **tinted block
  with a train glyph** rather than a generic train or the airport terminal
  captioned as something it is not. Same choice, same reason, as the airport
  page's arrivals panel.
- **"What we will not guess"** is given its own section rather than a footnote:
  no schedules, no fares, no facilities, no meeting points.
- **CTA:** a full-bleed **palm-soft** band with palm-deep type. Used nowhere
  else in the cluster.

## Riyadh hotel transfers — *the meeting point*

**Concept.** The smallest service intent in the cluster and largely a
sub-intent of the airport page, so the page does not pretend otherwise. It is
**the quietest page in the set by deliberate decision**, and the only one with
**neither a hero photograph nor a stat band**.

- **No stat band**, because the page makes no distance or duration claim and
  therefore has no figure to date-stamp. Every other page in the cluster has
  one; this is the exception that proves it was never decoration.
- **No photograph anywhere on the page.** We hold none of a Riyadh hotel and
  will not use hotel-branded imagery, so the social card takes a city view
  (`dest-riyadh`) and the page itself carries none. Zero `<img>` elements —
  verified in QA.
- **One column from top to bottom**, `max-w-3xl` throughout. Every other page
  breaks into a grid somewhere; this one never does.
- **Signature element:** the **entrance list** — four kinds of hotel door with
  what each implies, under a palm-soft door glyph. It is also the page's reason
  to exist: naming the right door is where hotel transfers actually fail, and
  it is advice we can give without anything confirmed by a partner.
- **Quotation section:** a numbered ruled list, ending on the one item that
  says what the quotation does *not* state.
- **CTA:** no colour field at all — `background` with a single hairline rule
  above it. The quietest closing in the cluster, and unique for having no
  tinted band.

## Jeddah hub — *the doorway*

**Concept.** Riyadh is a junction; its hub is a signpost organised by service
type. **Jeddah is a doorway** — most people are passing through it, and the
moment the page has to meet is *arrival*. So the axis is **where you are going
next**, and the composition is a sequence of thresholds rather than a grid of
services.

- **Hero:** a wide, short photograph read as a **horizon**, with the words in
  **one narrow measure at the start edge**. Not centred (AlUla), not at the
  foot (Al Khobar), not in a card (Taif), not split (Dammam, Riyadh hub), not
  bleeding off the end (airport), not absent (Buraydah, hotels).
- **No stat band at all.** The figures live on the destination cards, where
  they are actually useful. Only the hotel page also omits one, and that page
  omits it because it has no figures; this one has plenty and places them
  differently.
- **Signature element: destination cards that carry caveats.** Each card has
  the distance and time as ranges, a reason to go, and — where one honestly
  exists — a **caveat in its own register**, set behind a `border-s` brass
  rule. Makkah's card is weighted largest and carries the heaviest caveat;
  that tension is the point. No existing card type in the cluster carries a
  caveat.
- **The access notice** is the first full-width element after the hero,
  because a reader who cannot legally complete the journey should learn that
  before reading a distance. **It renders at two weights**: a bordered
  `palm-soft` block with an icon in English, and a quiet `border-s` rule in
  Arabic, where the restriction is common knowledge and a warning would read
  as condescending. Same facts, localised emphasis — the first time this
  cluster has varied emphasis rather than wording between locales.
- **Service sections are full-width bands divided by `border-t` rules**, not
  by alternating background colour. The Riyadh hub's grid inverted.
- **CTA is two-tone** — ink beside sand, split on desktop and stacked on
  mobile. Nothing else in the cluster is two-tone.

## Jeddah airport transfers — *the onward choice*

**Concept.** The Riyadh airport page is built around **two directions**,
because at Riyadh the question is which way you are travelling. At Jeddah
almost nobody lands and stays — where you are going next decides the drive,
the timing, whether a checkpoint is involved and whether a car is even the
right answer. So this page **opens with that choice**.

- **No hero photograph.** The opening is the decision itself: H1, lead, then
  three onward cards (Makkah · Madinah · into Jeddah) with distance, a reason
  and a caveat. Buraydah opens facts-first and the hotel page carries no
  photograph at all, but **no page opens with a choice**.
- **The terminal photograph appears later**, in the terminal section, where it
  is the subject rather than decoration. Captioned as *"a terminal"* and never
  by number or name, whatever the source file is titled.
- **Both directions as one ruled two-column comparison**, divided by a
  `border-s` rule — deliberately not the Riyadh page's twin cards. Same honest
  content, a different object.
- **The terminal question gets its own `<h2>`.** At Riyadh the refusal to
  publish a chart was a FAQ answer; here it needs a section, because
  competitors publish a terminal *and* a landmark to stand beside, and
  declining to match that has to be argued rather than asserted.
- **A rail section**, because a Haramain station is linked to this terminal
  and the competitor's airport page does not mention rail anywhere.
- **CTA: centred on sand under a heavy `border-t-4` palm rule.** The
  AA-passing full-field colours are genuinely exhausted after twelve pages —
  `brass-deep` was measured at **3.86:1** against white and **4.33:1** against
  ink and rejected — so this CTA is distinguished by composition and rule
  weight rather than by a new colour. Recorded here so the next page does not
  waste time hunting for a thirteenth field.

## What is shared, and why that is fine

The accordion primitive, the breadcrumb component and the related-links grid
are shared. They are interaction patterns, not layouts: a FAQ that behaves
differently on every page would be worse, not more distinctive. The
*questions* inside them are unique per page, which is what the specification
actually asks for — no FAQ list is reused anywhere in the cluster.

## Shared constraints every page honours

- Exactly one `<h1>`; `<h2>` for sections, `<h3>` within them.
- Server Components throughout. The only client JavaScript on a cluster page
  is the header's navigation and the language switcher.
- Every image through `next/image` with explicit dimensions, a `sizes`
  attribute and a generated blur placeholder, so nothing shifts on load.
- Logical CSS properties (`ps-*`, `me-*`, `border-s`, `text-start`) rather
  than physical ones, so RTL mirrors without a second stylesheet. Directional
  icons carry `rtl:-scale-x-100`.
- Every colour pairing measured against WCAG AA. Two introduced during this
  batch failed and were changed: brass on palm (3.85:1 → palm-soft on palm,
  8.39:1) and ink/70 on brass (3.83:1 → ink/85, 5.22:1).
