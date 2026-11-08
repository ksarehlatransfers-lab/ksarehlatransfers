# Jeddah hub — design brief

**Proposal only.** Nothing is implemented.

The brief is explicit: the Jeddah hub must not reuse the Riyadh hub's
signature elements or duplicate its layout. This document defines a
composition that cannot collide with any of the ten pages already published,
and proves it by listing them.

---

## 1. The concept — "the doorway"

Riyadh is a junction; the hub there is a signpost. **Jeddah is a doorway**:
most people are passing through it on the way to somewhere else, and the
emotional moment the page has to meet is *arrival* — you have just landed,
possibly after a long flight, and you need to know how you get to Makkah.

So the page is composed as a sequence of **thresholds** rather than a grid of
services: you arrive, you decide where you are going, you go. The axis is
destination, not service type. The register is reassurance rather than
capability.

---

## 2. Anti-collision check

Every published page's signature, and what the Jeddah hub does instead.

| Page | Its signature | Jeddah hub must avoid |
| --- | --- | --- |
| Homepage | Centred full-bleed hero | A centred full-bleed hero |
| Riyadh hub | Split hero with the photo boxed 4:5; **asymmetric branch grid**; brass CTA; stacked FAQ | Any branch grid; a boxed 4:5 hero photo |
| Riyadh→Jeddah | Dark full-bleed photo hero; **vertical timeline**; stat band overlapping the hero | A vertical timeline; an overlapping stat band |
| Riyadh→Dammam | Light split hero, boxed photo; **two-column comparison cards with icon tiles**; dark centred CTA | Icon-tiled comparison cards |
| Riyadh→Al Khobar | Tall photo with **headline at its foot**; bordered stat cards; **causeway block on ink**; palm CTA | A headline anchored at a photo's foot |
| Riyadh→Buraydah | **Facts-first hero with no photograph**, photo as a 21:9 strip after; **region block**; ruled comparison columns; palm-soft panel CTA | A facts-first opening; a 21:9 strip after the hero; a centre-plus-satellites block |
| Riyadh→Taif | **Headline on a card overlapping the photo**; **SVG elevation band**; sand-deep CTA | A card overlapping the hero photo |
| Riyadh→Hail | **Photograph above the H1**; route-choice cards with a default badge; **ordinal checklist**; ink CTA | Photo-above-H1; large-ordinal lists |
| Riyadh→AlUla | **Tall landscape, headline centred in it**; drive-or-fly **display-numeral contrast**; two-stop itinerary; brass CTA | A centred headline over a tall photo; display-numeral figure contrast |
| Riyadh airport | **Asymmetric hero bleeding off the end edge**; **two equal side-by-side panels**; palm band; palm-deep CTA | An edge-bleeding hero; twin equal panels |
| Riyadh railway | **Departure-board panel** in the hero; **corridor chips diagram**; palm-soft full-bleed CTA | A data panel in the hero; chip runs |
| Riyadh hotels | **No hero photo and no stat band**; single column throughout; **no-colour CTA** | A single-column-only layout; a colourless CTA |

Eleven compositions already spoken for. What remains genuinely unused:

- a hero where **the photograph is the full background and the content sits in
  a single narrow measure at the start edge**, rather than centred, at the
  foot, in a card, or in a split column;
- a **stacked threshold sequence** — full-width horizontal bands, each a step
  in the journey, divided by rules rather than by alternating background
  colour;
- a **caveat-carrying destination card**, which no existing card type has;
- an **inline notice block** of real prominence, which the cluster has never
  needed before because no previous page had a fact this important;
- a **two-tone CTA** split between a dark field and a sand field.

---

## 3. Proposed composition

### Hero — "the threshold"

- Full-bleed photograph of Jeddah, darkened, at a **wide short aspect**
  (roughly 2.4:1 on desktop) so it reads as a horizon rather than a portrait.
- Content in a **single narrow measure hugging the start edge** — eyebrow, H1,
  lead, CTA — vertically centred. Not centred horizontally (AlUla), not at the
  foot (Al Khobar), not in a card (Taif), not a split column (Dammam, hub).
- Breadcrumbs over the image at the top, `tone="invert"`.
- No stat band overlapping it, and **no stat band on this page at all**: the
  figures live on the destination cards where they are actually useful.

### The access notice — the page's most important element

Immediately below the hero, before anything else: a **full-width bordered
notice** stating that entry to Makkah is restricted to Muslims and enforced at
checkpoints on the road.

- `palm-soft` field with a `palm` start-edge rule and `palm-deep` type.
- An `<h2>`-level heading, not a decorative aside.
- **Placed above the destination cards on purpose.** A traveller who cannot
  legally complete the journey should learn that before they read a distance.

This is the only element in the cluster given this treatment, and it is
earned: it is the one fact on the site that can make a booking undeliverable.

In Arabic the same notice appears with **less visual weight** — a short
matter-of-fact line rather than a bordered block — because the Arabic audience
is overwhelmingly Muslim and the restriction is common knowledge. Same facts,
localised emphasis. Reasoning in the
[Arabic keyword mapping](./jeddah-keyword-mapping-arabic.md).

### Destination cards — signature element

A grid of five cards (Makkah, Madinah, Taif, Yanbu, Riyadh), each carrying:

- the destination name as an `<h3>`;
- **distance and time as ranges**, set in `.numeric`;
- a one-line reason to go;
- **a caveat line in a visually distinct register** — smaller, with a start-edge
  rule — where one honestly exists.

The caveat line is the whole point. Every competitor card says "book now". A
card that says "the train is often better for this one" is a different kind of
object, and it is the design expression of the editorial position the cluster
already takes on the Dammam, Buraydah, Hail and AlUla pages.

Makkah's card is visually weighted above the other four — it is the dominant
intent — but carries the heaviest caveat. That tension is intentional.

### Threshold bands — the service sections

Three full-width horizontal bands, divided by hairline rules rather than
alternating background colour, each a step in the traveller's day:

1. **Arriving at King Abdulaziz** — the terminal question, meeting on arrival,
   and the Haramain station inside the airport.
2. **Around Jeddah** — city addresses, named entrances, Al-Balad and the
   corniche.
3. **How a Jeddah quotation works** — the process, no inclusions list.

Bands rather than cards, so the page reads as a sequence rather than a menu.
That is the structural inverse of the Riyadh hub's grid.

### FAQ

**Split layout** with the heading in a sticky start-edge column. Already used
on four pages, so it is a shared interaction pattern rather than a signature —
which is the established position: the accordion behaviour is shared, the
questions never are.

### CTA — two-tone

A band split into two fields: the heading and body on `ink`, the button on an
adjoining `sand` field, divided vertically on desktop and stacked on mobile.
No existing CTA is two-tone.

---

## 4. Preserved without exception

| | |
| --- | --- |
| **Typography** | Instrument Serif display + Plus Jakarta Sans body; Noto Kufi Arabic + IBM Plex Sans Arabic under `html[lang="ar"]`. No new face, no new size outside the existing scale classes |
| **Colour** | Only existing tokens. No new token, no hardcoded colour |
| **Navigation and footer** | `SiteHeader` and `SiteFooter` unchanged in architecture; they gain links, not structure |
| **Components** | Existing `Breadcrumbs`, `ClusterFaqList`, `RelatedLinks`, `next/image` with `sizes` and generated `blurDataURL` |
| **Server Components** | The page adds no client JavaScript. The only client components on the site remain the booking form, mobile menu, desktop nav and language switcher |
| **One `<h1>`** | Then `.text-h2` for sections, `.text-h3`/`.text-h4` within them |

---

## 5. Accessibility and RTL

| Requirement | How |
| --- | --- |
| **Contrast** | Every new pairing measured against WCAG AA before it ships. The access notice's `palm-deep` on `palm-soft` and the two-tone CTA's ink/sand split both need measuring, not assuming |
| **Logical properties** | `ps-*`, `me-*`, `border-s`, `text-start`, `start-0` throughout — never `pl-*`, `mr-*`, `border-l`, `text-left`. The start-edge hero and the start-edge caveat rules mirror automatically |
| **Directional icons** | `rtl:-scale-x-100` on every arrow |
| **The destination grid in RTL** | Card order reverses with the writing direction; no absolute positioning that would strand a rule on the wrong edge |
| **The notice block** | Its start-edge rule must be `border-s`, so it moves to the right edge in Arabic. A `border-l` here would be the classic RTL bug |
| **Arabic line height** | `.text-display`, `.text-h2` and `.text-h3` already relax to 1.35 with zero tracking under `html[lang="ar"]`; `.text-eyebrow` drops its uppercase and tracking |
| **Latin digits in RTL** | Distances and times use `.numeric` so figures read left to right inside Arabic text |
| **Decorative images** | `alt=""` with `aria-hidden`; everything else through `altText(photo, locale)`, never `photo.alt` |
| **The notice is not colour-alone** | It carries a heading and explicit text, so its meaning survives without the tint |

---

## 6. One deliberate restraint

The hub will be **shorter than the Riyadh hub**. Riyadh's hub has four
service branches to explain and seven routes to index. Jeddah's has one
dominant intent, two secondary ones, and five destination cards — and a page
that pads to match its sibling's length is a page that has stopped answering
the question. The Riyadh hotel page established that the right length is the
one the intent deserves.
