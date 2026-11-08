# Content strategy and design plan

How our pages can be better than the competitor's, given that we cannot match
them on prices, fleet, staff or scale. Research only — nothing here is built.

> **Revised 4 November 2026 after the owner's strategy decisions:** Makkah and
> Madinah are excluded from this phase, so their design concepts are removed;
> private driver hire is approved for **hourly and full-day only**.

## The strategic position in one paragraph

taxiserviceksa.com wins on **scale and specificity**: ~1,230 URLs, published
per-route per-vehicle prices, a named fleet, named drivers and a WhatsApp
booking channel. We cannot match any of that today without fabricating it. What
they are weak on is **depth per page, Arabic, and honesty under uncertainty** —
their Arabic is 6.3% of the site with at least one page serving the wrong
language, 492 of their pages have no hreflang, four of their URLs chase the one
Riyadh–Jeddah journey, and roughly 80 of their guides are one template with a
nationality swapped in. Our opening is to be the site that **answers the
journey properly, in both languages, and is straight about what it does not
know.** That is a defensible position, it is the one our constraints actually
permit, and it happens to be what AI search engines reward.

---

## 1. Seven content principles

### 1.1 Answer before you sell

Every SERP we checked for a Riyadh-origin route is **informational-first** —
rome2rio, distance calculators and travel guides, not operators. Someone asking
"how far is Riyadh to Taif" is not yet ready to book, but they will book with
whoever answered them. Our route pages already put the stat band and journey
stages above the CTA. **Keep that order.** It is correct and it is why the
competitor built 63 distance pages to do the same job less well.

### 1.2 Publish ranges and say why they differ

Published distances for these routes genuinely disagree — Riyadh→AlUla spans
920 to 1,055 km across reputable sources. The competitor handles this honestly
too, and both of us are right to. Our advantage is that we can go one step
further and make **"why do different websites give different distances?"** a
user-facing FAQ rather than a footnote. Aggregators measure city centre to city
centre; real journeys are address to address. Explaining that is a trust
signal, it is true, and it is the kind of passage AI search quotes.

### 1.3 Compete on process where we cannot compete on price

This is the central move. They publish "Sedan 1,500 SAR". We cannot publish any
figure. But the anxiety behind a price query is not only *how much* — it is
*will it change, what is included, and when do I have to pay*. We can answer
all three truthfully:

- A **written price before anything is reserved**.
- **No payment to get a quotation.**
- **Nothing booked until you accept it.**
- An explicit **"what's included / what's quoted separately"** block.

Those four statements are true of this business today. Published consistently,
they beat a number that a competitor's own pages contradict — we observed their
Riyadh–Jeddah fare quoted as both 1,500 SAR and 1,800 SAR, and Daytrip quoting
US$56 and US$261 for the same Riyadh–Buraydah route.

### 1.4 Recommend against ourselves where it is true

Our Dammam page already tells readers the train may suit them better. That
should extend:

| Route | What we should say |
| --- | --- |
| → Buraydah, → Hail | The SAR North line serves both. Say when the train is the better answer |
| → AlUla | **Flying is the default.** ~1h10m against 10–12 hours. Say so, then offer the airport transfer at the far end |
| → Dammam | Already done; keep it |
| → Taif | No train. Say so plainly — people ask, and an honest "no" is useful |

This converts better than it looks, because the reader who *is* the right
customer — a family, heavy luggage, an address away from a station, their own
timing — now trusts the page that told them the truth.

### 1.5 Say what we do not do

The Al Khobar causeway block ("what we arrange" against "what we do not do" —
no visas, no border formalities, no immigration advice) is the best block on our
site. Generalise the pattern. On every page there is one thing a reader is most
likely to assume wrongly; name it.

### 1.6 Never publish what we cannot substantiate

Standing rule, restated because the competitor makes each of these claims and
the temptation to match is real: no prices, no fleet ownership, no named
vehicles, no licences, no customer counts, no reviews, no ratings, no
guarantees, no AI-generated imagery, no photograph presented as our vehicle, no
destination photograph captioned as a road.

### 1.7 Arabic is a market, not a translation layer

Our largest structural advantage. Three things to add to what we already do:

1. **Register.** Our Arabic is formal throughout (نقل خاص). Real Saudi
   searchers and sellers use **توصيل** and **مشوار**. Keep نقل خاص as the
   primary; introduce توصيل and مشوار into H2s, FAQs and body copy.
2. **Region names.** Arabic local search appears to favour القصيم and
   المنطقة الشرقية more than English favours "Qassim" and "Eastern Province".
   Secondary terms, not new URLs.
3. **Independent FAQs.** Arabic FAQs should answer the questions Arabic
   searchers ask, which are not always translations of the English ones.

---

## 2. AI search strategy

All four named engines — Google AI surfaces, ChatGPT, Gemini, Perplexity — reward
the same things: a clear question, a short direct answer, a citable source, and
a page that is unambiguous about what it is.

### 2.1 Adopt the "Quick answer" pattern

The single most imitable thing on the competitor's site. Their distance FAQs
open with a bolded **"Quick Answer: Approximately 830–840 km"** and then
elaborate. That is a retrieval-friendly shape and it is pure formatting — no
content to copy, nothing proprietary.

**Recommendation:** every FAQ answer on our route pages opens with a one-line
direct answer, then the detail. Our answers are already well written; they
mostly bury the answer in sentence two or three.

### 2.2 Add a visible "figures last checked" date

They print "Figures last checked: August 2026" beside the stat band. Cheap,
honest, and it tells both a reader and a retrieval system how stale the data
is. We have the sourcing discipline to back it; we just do not surface it.

### 2.3 Phrase headings as the question

Their FAQ H3s read "How far is Riyadh from Jeddah by road?" — the user's own
words. Ours are closer to topics. Shift route-page FAQ headings to question
form in both languages.

### 2.4 Keep the structured data honest and extend it carefully

| Type | Status | Recommendation |
| --- | --- | --- |
| `Organization`, `WebSite`, `WebPage`, `BreadcrumbList` | We emit these | Keep |
| `Service`, `FAQPage` | We emit these | Keep. FAQ answers must match the visible text exactly |
| `TaxiService` | They emit it; we do not | **Consider.** It is a legitimate type for this business. Only with properties we can substantiate — **no** `priceRange`, **no** `aggregateRating` |
| `Offer` | They emit it with prices | **Do not emit.** An `Offer` without a price is noise; with an invented price it is a lie |
| `Trip` | They emit it on distance pages | **Consider** on route pages — `Trip` with `itinerary` genuinely describes what our stages section is |
| `Person` (drivers) | They emit it | **Do not** until real, consenting staff exist |
| `AggregateRating`, `Review` | Neither of us emits | **Never**, until real reviews exist |
| `Speakable` | They emit it on homepages | Low value; skip |

The rule that matters: **structured data must describe what is visibly on the
page.** Our existing comment in `lib/structured-data.ts` explaining why
distance and duration are *not* emitted as schema properties is exactly the
right instinct — they are approximations, and schema asserts facts.

### 2.5 Keep the AI crawler policy under review

Their `robots.txt` allows GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot,
Google-Extended, anthropic-ai, cohere-ai and OmgiliBot by name, with
`Content-Signal: ai-train=no, search=yes, ai-input=yes` — retrieval permitted,
training refused.

**Recommendation:** adopt an equivalent stance. Our [`app/robots.ts`](../../app/robots.ts)
currently allows `/` broadly, which already permits these crawlers, so the
practical position is the same. Adding the explicit per-agent allows and a
`Content-Signal` line is a small, considered improvement — **a decision for
the project owner, not a technical default.**

### 2.6 What makes a page citable

A retrieval system quotes a passage when it is self-contained, specific and
attributable. Concretely, on each route page:

- A stat band with figures, ranges and a last-checked date.
- A one-sentence answer at the top of each FAQ.
- A named road and named stages.
- An explicit statement of what we do not do.
- No unsupported claim anywhere on the page that would make the whole page
  risky to quote.

That last point is underrated: **one fabricated claim makes an entire page
unsafe to cite.** Our refusal to publish prices is, from a retrieval point of
view, an asset.

---

## 3. Design plan

Brand locked: no change to typography, palette, buttons, header, footer or
tokens. Differentiation is composition only, continuing the Batch 1 discipline
of one structural element per page that appears nowhere else.

### 3.1 Elements already used — do not reuse

| Page | Signature element |
| --- | --- |
| Riyadh hub | Asymmetric branch grid; brass CTA band |
| → Jeddah | Vertical journey timeline; glass cards over dimmed road photo; split FAQ |
| → Dammam | Two-column road-vs-rail comparison; **dark** stat strip; horizontal stages |
| → Al Khobar | Bottom-anchored hero; bordered stat cards; causeway "do / do not" block; palm CTA |

### 3.2 Proposed elements for Batch 2

| Page | Concept | Signature element | Distinct because |
| --- | --- | --- | --- |
| → **Taif** | *Elevation* | **SVG elevation band** rising from plateau to highlands, labelled waypoints | Only page with a data-driven graphic |
| → **AlUla** | *Landscape-led* | **Drive-or-fly comparison cards** with a large numeric time contrast (`1h 10m` vs `10–12 hrs`) | Reuses the comparison *pattern* but as a modal, not modal-vs-rail, and with numerals as the visual |
| → **Buraydah** | *Practical and regional* | **Region block** — Buraydah with Unaizah / Ar Rass / Al Bukayriyah as satellite labels | Only page built around a region rather than a line; shortest page by design |
| → **Hail** | *The planner* | **Preparation checklist** as a ruled list, plus a two-route comparison table | Only page whose signature element is a checklist |

### 3.3 Proposed elements for later pages

| Page | Signature element |
| --- | --- |
| Airport | **Side-by-side arrivals/departures panels**, both visible, no JavaScript — the consolidation argument made visually |
| Private driver hire | **Two duration cards** — hourly and full day, the approved scope — a pricing table without prices. Two cards, not four: the layout follows the approved scope rather than padding it |
| Railway station | **Vertical line diagram**, stations as nodes, each linking to its route page |
| Hotel | **No hero photograph at all** — the quietest page in the set |

### 3.4 Constraints every page keeps

- Exactly one `<h1>`; `<h2>` for sections, `<h3>` within them.
- Server Components. The only client JavaScript stays the header nav, the
  mobile menu, the language switcher and the booking form.
- Logical CSS properties only (`ps-*`, `me-*`, `border-s`, `text-start`), so
  RTL mirrors without a second stylesheet. Directional icons take
  `rtl:-scale-x-100`.
- Every image through `next/image` with explicit dimensions, `sizes` and a
  generated blur placeholder.
- Every colour pairing measured against WCAG AA before it ships.
- Alt text via `altText(photo, locale)` — never `photo.alt`.
- Alternating section backgrounds; never two `bg-sand` adjacent.
- Every CTA has a working destination and its own wording.

### 3.5 Anti-patterns observed on the competitor site

| Their pattern | Why we avoid it |
| --- | --- |
| 17 `<h2>`s on one page (`/locations/riyadh/`) | No hierarchy left; the reader cannot find anything |
| 251 images on `/ar/` | Performance, and it buries the content |
| 46 `<h3>`s under 11 `<h2>`s (`/routes/riyadh-jeddah/`) | Depth for its own sake |
| PAA-scraped FAQs ("Is crazy driving common in Saudi Arabia?") | Dilutes the page and helps nobody |
| One template across 80 country pages | Scaled content abuse |
| Four URLs for one journey | Cannibalisation |

---

## 4. Per-page content shape

The recommended shape for a Batch 2 route page, in order. Roughly 1,400–2,000
words of genuine content per language — comparable to their best page (2,769
words including chrome) and well above their Makkah page (1,052).

1. **Breadcrumb** — Home › Riyadh › `<route>`.
2. **H1 + lead** — the route named plainly, and what kind of journey it is.
3. **Stat band** — distance range, driving time range, main road, modal
   alternative. Each with a source-spread note. **Plus a last-checked date.**
4. **Overview** — what this journey is *for*, and who takes it.
5. **Signature element** — the comparison, elevation band, checklist or region
   block.
6. **Stages** — the drive, named towns, approximate distances from Riyadh.
7. **Pickup in Riyadh** / **Drop-off in `<city>`** — specifics, including what
   we need from the customer.
8. **What's included / quoted separately** — **new; the answer to price intent.**
9. **Before you travel** — passengers, luggage, waiting, return.
10. **How to book** — written price first, no payment for a quotation, nothing
    reserved until accepted.
11. **FAQ** — 5–6 unique questions, each opening with a one-line answer, each
    phrased as the user's question. No list reused between pages.
12. **Related journeys** — destination name plus a reason, never exact-match
    anchors.
13. **CTA** — unique wording per page, working destination.

### What to put in "What's included / quoted separately"

Only what is actually true of this business. Draft, for review by the project
owner before publication:

| Included | Quoted separately, if you need it |
| --- | --- |
| One vehicle reserved for your party | Extra stops beyond the agreed route |
| A driver for the whole journey | Waiting time at the destination |
| The agreed pickup and drop-off addresses | A return leg |
| A price agreed in writing before anything is reserved | A different vehicle category than quoted |

**Nothing in that table may be published until the owner confirms it.** It is a
proposal, not a statement of fact.

---

## 5. What we must not do, even though it would work

Collected deliberately, because each is a real tactic with real upside:

1. **Publish prices.** It would win price queries immediately. No pricing is
   established; inventing one is the single most damaging thing available to
   us.
2. **Name vehicles and photograph them.** Their Camry/Yukon/Escalade grid is
   persuasive. We have no confirmed fleet.
3. **Claim volume or licensing** — "25,000+ travellers", "100% licensed",
   "founded 2014".
4. **Build a nationality-templated page set.**
5. **Target third-party company names.**
6. **Build a `/distance/` family.** It would capture the informational URL
   pattern, but it would cannibalise our route pages and hand us the same
   four-URLs-per-journey problem we just criticised.
7. **Add Urdu.** Not before Arabic is winning.
8. **Pilgrimage positioning.** Out of scope by instruction, and it is their
   deepest moat — a fight to pick later, deliberately, or not at all.

---

## 6. Launch blockers that limit all of this

Carried from [riyadh-qa-report.md](../riyadh-qa-report.md); restated because
they cap the return on everything above.

1. **`INQUIRY_WEBHOOK_URL` is unset.** The enquiry form has no delivery
   endpoint and tells visitors so. **Every CTA in this plan leads to a form
   that cannot deliver.** This is the highest-priority item on the whole
   project and no amount of content strategy compensates for it.
2. **`NEXT_PUBLIC_SITE_URL` must be set at build time.** It is inlined, not
   read at runtime; a build without it emits `localhost:3000` canonicals.
3. **No WhatsApp channel.** The competitor's entire conversion mechanism, and
   the market-appropriate one. Worth a decision.
4. **Keyword volumes unmeasured.** Everything here is intent-led, not
   demand-led.
5. **Highway 40 east photography** still missing, plus new images needed for
   Buraydah, Hail and KKIA.
6. **The "what's included" table above needs owner confirmation** before it can
   be published anywhere.
