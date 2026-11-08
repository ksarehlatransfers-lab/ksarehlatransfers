# Riyadh cluster — QA report (batch 1)

Run against a production build with
`NEXT_PUBLIC_SITE_URL=https://privatetransfersacrosssaudi.com`.

> **Resolution pass, 3 November 2026.** Four outstanding items were closed
> before batch 2 began. See [the resolution pass](#resolution-pass-3-november-2026)
> at the foot of this document; the batch-1 results below are unchanged and
> were re-verified after those changes.

## Scope under test

Twelve URLs: the homepage, the Riyadh hub, three route pages and the quote
page, each in English and Arabic.

## Results

| Check | Result |
| --- | --- |
| `next build` | Pass — 23 routes generated; all ten indexable pages prerendered **static**, both quote pages partial-prerendered |
| `tsc --noEmit` | Pass, no output |
| `eslint .` | Pass, no output |
| Crawl all cluster URLs | Pass — 12/12 return 200; `/` returns 307 to `/en` |
| Exactly one `<h1>` per page | Pass — 12/12 |
| Unique title per page | Pass — no duplicates across 12 pages |
| Unique description per page | Pass — no duplicates |
| Title length ≤ 60 characters | Pass — range 35–55 |
| Self-referencing canonical | Pass — 12/12 |
| hreflang completeness | Pass — every page emits `en`, `ar` and `x-default` |
| `lang` and `dir` attributes | Pass — `en`/`ltr` and `ar`/`rtl` as expected |
| noindex only where intended | Pass — only the two quote pages |
| Internal links resolve | Pass — no link to an unregistered page |
| Locale isolation | Pass — no cross-locale link except the language switcher |
| No orphan pages | Pass — every indexable page linked from at least one other |
| Sitemap contents | Pass — 10 URLs, all indexable pages, no noindex pages, hreflang alternates on each |
| JSON-LD parses | Pass — Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage on every cluster page |
| Structured data localised | Pass — `inLanguage`, breadcrumb names, service names and FAQ entries all in the page's own language |
| Breadcrumb / JSON-LD agreement | Pass by construction — both are built from the same `Crumb[]` |
| Images carry `alt` | Pass — no `<img>` without an alt attribute |
| Arabic pages are genuinely Arabic | Pass — every `/ar` page exceeds 500 Arabic characters of body text and no section falls back to English |
| FAQ answers in rendered HTML | Pass — all answers present with collapsed panels hidden, so crawlers read the full text |
| Enquiry validation unit tests | Pass — 22/22 |
| Enquiry delivery integration tests | Pass — including "never reports a false success" |
| WCAG AA contrast | Pass after two fixes (below) |

## Defects found and fixed during QA

1. **Every cluster title was 73–83 characters.** The root layout's
   `title.template` was appending `| Private Transfers Across Saudi` to page
   titles that were already complete. Fixed in [`lib/seo.ts`](../lib/seo.ts)
   by emitting `title: { absolute: … }`, so a page's title is final.
2. **The Riyadh hub title used an ampersand**, which renders as `&amp;` and
   cost four characters of the 60-character budget, tipping it to 63.
   Reworded to avoid the entity; now 55.
3. **Brass on palm measured 3.85:1** in the Al Khobar CTA, below the 4.5:1 AA
   floor. Changed to palm-soft on palm, 8.39:1.
4. **Ink/70 on brass measured 3.83:1** in the Riyadh hub CTA eyebrow.
   Raised to ink/85, 5.22:1; the body text on the same band went from a tight
   4.70:1 to 5.22:1 at the same time.
5. **The FAQ section on the Jeddah page rendered the accordion twice**, once
   per breakpoint, duplicating all six answers in the DOM and the element ids
   with them. Replaced with a single render and a `layout="split"` option on
   the shared component.

## Measured contrast

| Pair | Ratio |
| --- | --- |
| White heading on palm | 9.65 |
| White/80 body on palm | 6.85 |
| Palm-soft eyebrow on palm | 8.39 |
| Ink heading on brass | 6.68 |
| Ink/85 body and eyebrow on brass | 5.22 |
| White on ink | 16.72 |
| White/70 body on ink | 8.71 |
| White/60 note on ink | 6.75 |
| Palm-deep on palm-soft | 11.56 |
| Palm-deep/75 meta on tinted card | 5.81 |
| Muted body on sand | 5.40 |
| Muted body on page background | 5.92 |

## Checks the spec lists that were done by inspection, not by script

- **Mobile layouts.** Every grid is mobile-first and collapses to one column;
  the hero type scales by `clamp()`. Reviewed in markup rather than on
  devices — no device lab was available here, so a pass on real phones is
  still worth doing before launch.
- **Language switching.** The switcher swaps only the locale segment and
  preserves the path, so it lands on the equivalent page rather than the
  homepage. Verified on each of the six page pairs.
- **FAQ keyboard interaction.** Handled by the shadcn/base-ui accordion
  primitive; `aria-expanded` is emitted correctly (one `true`, the rest
  `false`) and panels use `hidden` so find-in-page can open them.
- **RTL.** Cluster pages use logical properties throughout — a grep for
  physical `ml-/mr-/pl-/pr-/left-/right-/border-l/border-r` utilities across
  the cluster pages and shared components returns nothing but one
  intentionally symmetric decorative rule.

## Known gaps carried forward

These were **not** defects in what was built; they were scope that batch 1 did
not cover. Items 1–3 are now closed — see the resolution pass below.

1. ~~**Arabic alt text.**~~ **Closed.** Every image carries a hand-written
   `altAr`, and all call sites read it through `altText(photo, locale)`.
2. ~~**Route pages use destination photography.**~~ **Partly closed.** The
   western corridor now has a genuine road photograph. The eastern corridor
   (Dammam, Al Khobar) still does not — see blocker 1 below.
3. ~~**The airport-direction consolidation decision.**~~ **Closed by owner
   approval:** one page at `riyadh-airport-transfers`, build in batch 3.
4. **Keyword volume and difficulty are unvalidated** — no research tool was
   available. The research pass is now specified step by step in
   [riyadh-keyword-checklist.md](./riyadh-keyword-checklist.md), covering the
   unwritten pages as well as the published ones.
5. **Afif's position on the Riyadh–Jeddah route** rests on a weak source and
   should be confirmed against a road atlas.
6. **`NEXT_PUBLIC_SITE_URL` must be set at build time.** It is inlined during
   the build, not read at runtime, so starting a built server with a different
   value has no effect. Canonicals, hreflang and the sitemap all derive from
   it; a build without it emits `http://localhost:3000`.
7. **The enquiry form still has no delivery endpoint.** `INQUIRY_WEBHOOK_URL`
   is unset, so the form tells visitors plainly that their details were not
   sent. It has never reported a false success — that is covered by the
   integration tests.

---

## Resolution pass, 3 November 2026

Carried out before batch 2, on the four items raised by the project owner.
No page content, layout, colour, typeface, navigation or footer was changed.

### 1. Airport page architecture — resolved, documented, not built

Approved architecture: **one** page at `/en/riyadh-airport-transfers` and
`/ar/riyadh-airport-transfers`, with four required `<h2>` sections (arrivals,
departures, hotel connections, onward intercity connections). No thin
directional pages.

| Action | Where |
| --- | --- |
| Decision recorded with the H2 structure and intent mapping | [riyadh-url-inventory.md](./riyadh-url-inventory.md) |
| Two withdrawn slugs removed from the reserved list | same |
| Batch-3 linking obligations fixed in advance, including the one edit to an existing page it will require | [riyadh-internal-linking.md](./riyadh-internal-linking.md) |
| Keyword set mapped to one URL with per-section secondaries | [riyadh-keyword-checklist.md](./riyadh-keyword-checklist.md) |
| Hub copy now names one forthcoming airport page, not three | [`lib/content/riyadh/hub.ts`](../lib/content/riyadh/hub.ts) |

**Redirects: none needed.** `riyadh-airport-to-hotel-transfers` and
`riyadh-hotel-to-airport-transfers` existed only as reserved strings in the
inventory document. They were never registered in `lib/i18n/routes.ts`, never
rendered, never linked and never in the sitemap, so no URL has been published
that could need redirecting. The fallback instruction, should either turn up
live from an earlier deployment, is recorded in the inventory.

The page itself was **not** built, as instructed.

### 2. Keyword research — checklist prepared, no page rewritten

[riyadh-keyword-checklist.md](./riyadh-keyword-checklist.md) is new. It holds
the primary, secondaries and intent for every published page, the candidate
primaries for the six batch-2 routes and the batch-3 airport page, a
step-by-step pass to run with a real tool, and the four questions that remain
open. Still no volume or difficulty figure appears anywhere in the repository.

Two batch-2 cautions worth reading before those pages are written: the Makkah
and Madinah primaries need checking for how pilgrimage-framed the demand is,
since this cluster deliberately carries no Hajj or Umrah positioning; and the
AlUla primary needs checking against flight demand.

No published page was edited on the strength of an assumed figure.

### 3. Images and Arabic alt text

**Arabic alt text — closed.** The image pipeline manifest and generator now
carry a second field, `altAr`, hand-written per photograph rather than
translated from the English. `lib/site-images.ts` was regenerated; the
`SiteImage` type gained the field. A new helper,
[`lib/images.ts`](../lib/images.ts), exposes `altText(photo, locale)`, and all
ten non-decorative call sites plus the Open Graph image alt in
[`lib/seo.ts`](../lib/seo.ts) were converted to it. Rule 10 in
[brand-system.md](./brand-system.md) now forbids reading `photo.alt` directly.

Verified in rendered HTML: across the five Arabic pages, 25 non-empty `alt`
attributes, **all Arabic, none Latin**; the 15 decorative images still carry
`alt=""` in both languages; `og:image:alt` is Arabic on `/ar` and English on
`/en`.

**Road photography — one corridor fixed, one still open.** Wikimedia Commons
was searched through the MediaWiki API for photographs of the actual
corridors. `Riyadh-Makkah_Road_near_Tuwaiq_Escarpment.JPG` (CC BY-SA 3.0) is a
genuine photograph of Highway 40 west crossing the Tuwaiq escarpment out of
Riyadh — the opening stage of the Riyadh→Jeddah route — and now replaces the
generic desert highway behind that page's pickup/drop-off block. Two further
files were found and reserved for batch 2 (Highway 65, the Qassim expressway,
for Buraydah and Hail; Highway 60 for Madinah). Nothing was found for Highway
40 **east**, so the Dammam and Al Khobar pages still lead with destination
photography, captioned as the cities they are. Full audit in
[riyadh-image-inventory.md](./riyadh-image-inventory.md).

### Re-verification after the changes

| Check | Result |
| --- | --- |
| `tsc --noEmit` | Pass, no output |
| `eslint .` | Pass, no output |
| `next build` | Pass — 23 routes, unchanged; all ten indexable pages still static |
| Full QA crawl, 12 URLs | **All checks passed** — titles 35–55 characters, canonicals, hreflang, `lang`/`dir`, one H1, no cross-locale links, no orphans, sitemap 10 URLs |
| Arabic alt text in rendered HTML | Pass — 25/25 non-empty alts Arabic on `/ar`, 0 Latin |
| `og:image:alt` localised | Pass |
| New image served and referenced | Pass — `/images/highway-40-tuwaiq.webp`, 131 KB, 200 |
| Enquiry validation unit tests | Pass — 22/22 |
| Enquiry delivery integration tests | Pass, including "never reports a false success" |

## Stage 0 re-run, 4 November 2026 — trailing-slash convention

Blocker 0 of the previous pass is **closed**. The convention is implemented, so
the URL-shaped assertions were re-run in full against a production build
(`next build` with `NEXT_PUBLIC_SITE_URL` set, then `next start`).

The crawler is now committed at
[`scripts/qa-crawl.mjs`](../scripts/qa-crawl.mjs) and runs as `npm run qa`. Its
URL inventory is no longer hand-written: seeds come from the served
`/sitemap.xml`, every other page is discovered by following links, and the two
noindex quote pages are reached the way a crawler reaches them. A list that
cannot go stale was the actual fix to the stale-list problem.

| Check | Result |
| --- | --- |
| Pages crawled | 12 — 10 sitemap URLs plus the two noindex quote pages |
| Every linked URL answers 200 without redirecting | Pass |
| No slashless internal link | Pass — every internal `href` ends in `/` or is a file |
| No cross-locale link except the language switcher | Pass |
| Canonical present, singular, self-referencing, trailing slash | Pass, 12/12 |
| hreflang complete (`en`, `ar`, `x-default`), reciprocal, trailing slash | Pass, 12/12 |
| Exactly one `<h1>` per page | Pass |
| `<html lang>` and `<html dir>` match the locale | Pass — `en`/`ltr`, `ar`/`rtl` |
| Titles unique across the site | Pass, 12 distinct |
| No orphan pages | Pass — every sitemap URL has an inbound link |
| Sitemap entries carry trailing slashes | Pass, 10/10, with `alternates` |
| `/sitemap.xml`, `/robots.txt` carry none | Pass — Next.js exempts extensions |
| Breadcrumb and JSON-LD `@id`/`url`/`item` values | Pass — all trailing-slash |
| Quote form `action` | Pass — `/en/get-quote/`, `/ar/get-quote/` |
| Language switcher, every page | Pass — `/en/riyadh-to-jeddah/` ⇄ `/ar/riyadh-to-jeddah/`, and `/en/` ⇄ `/ar/` |
| Redirects: 10 published URLs, slashless → final | Pass — one 308 hop each |
| Redirects: `/` → `/en/` | Pass — one 307 hop |
| Redirects: `/get-quote` | **Two hops**, documented allowance — see below |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass — 23 static pages generated |

**The one exception.** `/get-quote` answers `308 → /get-quote/` then
`307 → /en/get-quote/`. Next.js normalizes the trailing slash *before* matching
`redirects()`, so no redirect rule can intercept the slashless form — it has
already been rewritten by the time redirects are checked. `/get-quote/` is one
hop. Rationale for leaving it, and the only alternative, are in
[research/implementation-roadmap.md](./research/implementation-roadmap.md)
§Stage 0. The crawler holds it as a named allowance and fails if a second chain
appears, or if this one ever becomes unnecessary.

**Not re-verified in this pass**, because nothing in Stage 0 could affect them:
contrast ratios, image dimensions and licensing, copy and facts, form
validation and delivery behaviour. Those results stand from the 3 November
pass above.

## Stage 1 pass, 4 November 2026 — existing-SEO improvements

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass |
| `npm run qa` (full crawl) | Pass — 12 pages, all checks |
| `statsChecked` line renders, English | Pass on all three route pages |
| `statsChecked` line renders, Arabic | Pass on all three route pages |
| New distance-variation FAQ renders, both locales | Pass — 3 pages × 2 locales |
| FAQ structured data picks up the new entries | Pass — Jeddah 6→7, Dammam 6→7, Al Khobar 5→6, hub 5 (unchanged) |
| Headline distance question still first in each accordion | Pass — the new FAQ sits at position 2, so the default-open answer is unchanged |
| Rewritten airport answer renders, both locales | Pass |
| Brand, typography, colour tokens, navigation, footer | Unchanged |

**Content audit result, recorded because it is a finding and not a task.** All
22 published FAQ answers were checked against item 1.1; 21 already opened with
a direct answer. All 22 English and all 22 Arabic questions were already in
question form, so item 1.3 required no change. One real defect was found and
fixed: the hub's airport-distance answer never gave a distance.

## Stage 2 pass, 4 November 2026 — Batch 2

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass — 39 prerendered pages |
| `npm run qa` (full crawl) | Pass — **20 pages from 18 sitemap URLs**, all checks |
| Canonical self-referencing, singular, trailing slash | Pass, 20/20 |
| hreflang complete, reciprocal, trailing slash | Pass, 20/20 |
| Exactly one `<h1>` per page | Pass |
| Titles unique across the site | Pass — 20 distinct |
| SEO titles within the 50–60 budget | Pass — EN 45/45/47/49, AR 41/43/43/45 |
| `lang` / `dir` correct | Pass |
| No orphan pages | Pass |
| No slashless internal link, no link that redirects | Pass |
| No cross-locale link except the switcher | Pass |
| Slashless → trailing-slash redirect, all 18 URLs | Pass — one 308 hop each |
| Three new images served | Pass — 149 KB, 136 KB, 59 KB, all 200 |
| Locale-correct alt text on all four new heroes | Pass — Arabic alt on `/ar/`, English on `/en/` |
| FAQ structured data on new pages | Pass — 7 questions each |
| Signature elements render, both locales | Pass — region block, elevation band, checklist + route cards, drive-or-fly figures + itinerary |
| Elevation band geometry | Pass — polyline computed from the real metre values (612 → 150.5, 2,177 → 24.0 on a 200-unit band) |
| Hub no longer names the excluded routes | Pass — the only remaining "Makkah" strings on that page are the global footer's pilgrimage column and the nationwide `knowsAbout` list, both approved to stay |
| No reference to either excluded route in `lib/`, `app/`, `components/` | Pass — grep clean |
| Brand, typography, colour tokens, navigation architecture, footer architecture | Unchanged. Navigation and footer **gained four links each**; no structural change |

**Honesty checks specific to this batch.** No price, fare, fleet claim,
licence, review or availability guarantee appears on any new page. No rail
schedule or fare is published although one was found. No A'arif Fort date is
published. No AlUla flight frequency is published, and one FAQ says plainly
that we will not give a number. The Al Hada elevation carries a footnote
saying sources disagree. The AlUla hero is captioned as the destination and
never as the road.

**One fault found and fixed during the pass.** The first edit to the Riyadh hub
inserted the four new route links *after* the `links` array had already
closed, which broke the file syntactically. Caught by `tsc` immediately, and
fixed before anything was built.

**One environment fault worth recording.** A previous `next start` survived
`TaskStop` twice and held port 3000, and a readiness check that only tested
connectivity passed against a **stale build serving 404s**. The readiness
check now asserts on page content, and the stale process is killed by PID
before building. Nothing was ever measured against the wrong build.

## Airport page pass, 6 November 2026

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass |
| `npm run qa` (full crawl) | Pass — **22 pages from 20 sitemap URLs** |
| Four mandatory `<h2>` sections present, in order, both locales | Pass |
| Onward links to every published route | Pass — all **seven** |
| Hub airport branch promoted to a live link | Pass — `/en/` and `/ar/` |
| No link to the hotel or railway pages | Pass — neither exists; the section names hotels as text |
| Canonical, hreflang, `lang`/`dir`, single `<h1>`, unique title | Pass |
| Slashless → trailing-slash redirect | Pass — one 308 hop |
| SEO title within budget | Pass — EN 52, AR 37 |
| Two airport images served | Pass — 283 KB and 134 KB, both 200 |
| Locale-correct alt text | Pass — Arabic alt on `/ar/` |
| FAQ structured data | Pass — 7 entries per locale |
| Brand, typography, colour tokens, navigation and footer architecture | Unchanged; nav and footer gained one link each |

**Honesty checks specific to this page.**

| Check | Result |
| --- | --- |
| No numbered terminal published anywhere | Pass — grep for `terminal [1-5]` and `T[1-5]` against the rendered HTML returns nothing |
| No airline named, so no airline-to-terminal claim | Pass — grep for the four hub carriers returns nothing |
| No check-in or security advice asserted | Pass — the page says no readable airport source states one and defers to the airline |
| No list of inclusions asserted | Pass — replaced by the process-based quotation section, which names what it declines to claim |
| No fares, flight frequencies or metro ticket prices | Pass |
| Arrivals panel carries no photograph captioned as arrivals | Pass — tinted header instead; only the genuine departures photograph is used |
| Source disagreements disclosed on the page, not hidden | Pass — the distance stat names both bearings; a FAQ states the terminal contradiction |

**The official sources could not be read.** `kkia.sa` and
`riyadhairports.com` both return HTTP 403 to automated requests. This is
disclosed on the page itself and recorded in
[riyadh-content-research.md](./riyadh-content-research.md). It is the one
outstanding improvement for this page: if the owner supplies the airport's own
materials, the facts can be re-attributed to the operator.

## Airport page content refinement, 6 November 2026

Owner decision: make the terminal copy customer-focused, keep the
source-by-source disagreement in the research documentation, change no verified
fact and invent no terminal assignment.

| Check | Result |
| --- | --- |
| `npx tsc --noEmit`, `npx eslint .`, `next build` | Pass |
| `npm run qa` (full crawl) | Pass — 22 pages, all checks |
| Refined FAQ renders, both locales | Pass |
| Still no numbered terminal anywhere | Pass — grep for `terminal [1-5]` / `T[1-5]` returns nothing |
| Still no airline named | Pass |
| Verified facts unchanged | Pass — five terminals, ~35 km, ~30 min, Metro Line 4 and the opening years all untouched |
| Source disagreement moved, not deleted | Pass — it remains in [riyadh-content-research.md](./riyadh-content-research.md) with both readings in a table |

**What the reader now gets instead of our sourcing problem:** that we confirm
the terminal in writing before the day, and that they can check it themselves
against their airline's booking confirmation, app or flight-status page — with
the reason a printed chart is the wrong thing to trust (terminals are
reassigned, so a stale list sends you to the wrong building). Four places were
brought into line, not just the FAQ: the FAQ, the "Which terminal" practical
note, the flight-number band, and the withheld-items list, which otherwise
would have contradicted each other in tone.

## Railway page pass, 6 November 2026

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass |
| `npm run qa` (full crawl) | Pass — **24 pages from 22 sitemap URLs** |
| Ten `<h2>` sections render in order, both locales | Pass |
| Both station sections present with distinct content | Pass — different lines, districts, opening years, platform counts, practical advice and route links |
| Corridor diagram renders, both locales | Pass — Hofuf/Abqaiq/Dammam and Majmaah/Qassim/Hail/Al-Jouf/Qurayyat chips, Arabic equivalents confirmed |
| Hub railway branch promoted to a live link | Pass — `/en/` and `/ar/` |
| Airport ⇄ railway cross-link | Pass — both directions, both locales |
| Route links from the correct station section | Pass — Dammam and Al Khobar from the East section; Buraydah, Hail and the airport from the North section |
| Canonical, hreflang, `lang`/`dir`, single `<h1>`, unique title | Pass |
| Slashless → trailing-slash redirect | Pass — one 308 hop |
| SEO title within budget | Pass — EN 48, AR 43 |
| Station images served | Pass — 193 KB and 140 KB, both 200 |
| Locale-correct alt text | Pass — Arabic alt on `/ar/` |
| FAQ structured data | Pass — 7 entries per locale |
| Brand, typography, colour tokens, navigation and footer architecture | Unchanged; nav and footer gained one link each |

**Honesty checks specific to this page.**

| Check | Result |
| --- | --- |
| No train schedule or frequency | Pass — grep for departure/interval phrasing returns nothing |
| No fare or ticket price | Pass — grep for `SAR <n>`, `SR <n>`, `<n> riyals` returns nothing |
| No station facility claim | Pass — seat61's security, bag-check and lounge mentions are not repeated |
| No named meeting point or claim that a car may wait anywhere specific | Pass — a FAQ says outright that we confirm it per booking rather than publish one |
| Riyadh North not described as being *at* the terminals | Pass — the page gives 13 km and says you cannot walk it |
| Straight-line distances labelled as such | Pass — both the stat note and the station copy say "straight line" |
| No photograph captioned as Riyadh North | Pass — tinted block with a train glyph instead |
| Station names attributed correctly | Pass — names are operator-confirmed per the owner's reading of SAR's pages; all other facts are secondary and labelled in the research doc |

**The operator's own pages are still unreadable** (HTTP 401 on all five SAR
URLs tried, and web.archive.org is blocked at the fetch-tool level). Station
codes, a dated passenger-service status and documented passenger access remain
unverified against SAR. Recorded as an open improvement in
[research/railway-architecture-validation.md](./research/railway-architecture-validation.md)
§2a.

## Hotel page pass, 6 November 2026

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass |
| `npm run qa` (full crawl) | Pass — **26 pages from 24 sitemap URLs** |
| Six `<h2>` sections render in order, both locales | Pass |
| Hub hotel branch promoted to a live link | Pass — `/en/` and `/ar/` |
| Airport ⇄ hotel cross-link | Pass — both directions, both locales |
| Canonical, hreflang, `lang`/`dir`, single `<h1>`, unique title | Pass |
| Slashless → trailing-slash redirect | Pass — one 308 hop |
| SEO title within budget | Pass — EN 44, AR 38 |
| FAQ structured data | Pass — 6 entries per locale |
| Brand, typography, colour tokens, navigation and footer architecture | Unchanged; nav and footer gained one link each |

**Honesty checks specific to this page.**

| Check | Result |
| --- | --- |
| No hotel named anywhere | Pass — grep for six major chains returns nothing |
| No price or fare | Pass |
| No waiting-time policy or free-waiting claim | Pass |
| No standing arrangement claimed for any property | Pass — the entrance footnote and a FAQ both say it is confirmed per booking, because it is the hotel's rule |
| No photograph rendered | Pass — **zero `<img>` elements**, by design; a city view serves the social card only |
| No stat band | Pass — the page makes no distance or duration claim, so there is nothing to date-stamp |

**Three stale strings fixed, two already live.** Shipping this page closed the
last "being written" promises. Two of them — the hub intro and the hub's
railway FAQ — had been **untrue since the airport and railway pages shipped
earlier the same day**, and the railway one was wrong in substance as well
(it promised per-station pages that the validated architecture rejected). The
third was the airport page's hotel paragraph.

That is the second time in this project a shipped page left another page's
prose untrue — the Riyadh hub's `planned` array was the first, during Stage 2.
The link checks cannot catch it: every link was valid, only the sentences were
wrong.

**So the crawl now checks for it.** `npm run qa` lists every page still
promising a forthcoming page, every run, under
*"pages promising a forthcoming page — confirm each is still unbuilt"*. It is
**not** a failure: saying "this page is being written" instead of linking to
nothing is the honest pattern this project uses deliberately. The point is
that the promise is impossible to miss when a page ships.

### What the new check found immediately

Two genuine promises, both legitimate and both previously untracked:

| Page | Promise | Still true? |
| --- | --- | --- |
| `/en/` | "Full guide coming soon" on three travel-guide cards | **Yes** — no travel-guide pages exist and none is in the roadmap |
| `/ar/` | "الدليل الكامل قريبًا", the same three cards | **Yes** |

### Two false positives it also found, and how they were fixed

Worth recording, because they are the reason the check is narrow rather than
broad:

1. **`قريبًا` matched inside `تقريبًا`** ("approximately"), which appears in
   almost every Arabic paragraph on the site. A lookbehind for a preceding
   Arabic letter fixed that.
2. **`قريبًا` then still matched legitimately-used prose** — the Taif page
   says one journey is *close to* another in length. Arabic `قريبًا` means
   both "soon" and "near", so no bare-word pattern can disambiguate it.

The pattern is therefore the full phrase `الدليل الكامل قريبًا` rather than
the bare word. **A narrow check that gets read beats a broad one that gets
ignored** — and the script says so, with a note to add a pattern if a future
Arabic promise is worded differently.

## Jeddah hub pass, 7 November 2026

The first page outside the Riyadh cluster.

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass |
| `npm run qa` (full crawl) | Pass — **28 pages from 26 sitemap URLs** |
| Eight `<h2>` sections render in order, both locales | Pass |
| Canonical self-referencing, trailing slash | Pass — `/en/jeddah/`, `/ar/jeddah/` |
| Slashless → trailing-slash redirect | Pass — one 308 hop each |
| hreflang complete and reciprocal | Pass |
| SEO title within budget | Pass — EN 53, AR 48 |
| FAQ structured data | Pass — 8 entries per locale |
| Destinations menu: Jeddah now a live link | Pass — both locales |
| New Jeddah header group and footer column | Pass |
| Reciprocity: `/riyadh-to-jeddah/` → hub | Pass — both locales |
| Three images served | Pass — 223 KB, 146 KB, 62 KB |
| Locale-correct Arabic alt text | Pass |
| Brand, typography, colour tokens, navigation and footer architecture | Unchanged; nav and footer gained a group and a column |

**Honesty checks specific to this page.**

| Check | Result |
| --- | --- |
| No price or fare | Pass — grep for `SAR <n>`, `SR <n>`, `USD <n>`, `riyals`, `ريال` returns nothing |
| No rail schedule or frequency | Pass |
| **No numbered terminal, either locale** | Pass — grep for `terminal [1-5]`, `T[1-5]`, `الصالة الأولى` returns nothing. See the correction below |
| No Hajj Terminal operating dates | Pass |
| No named hotel | Pass |
| No Hajj or Umrah operator claim | Pass — the standing "road transport only, not an official operator" position is restated |
| No checkpoint procedure described, no eligibility judged | Pass — the access notice states its own limit explicitly |
| Distances published as ranges with the spread disclosed | Pass — 405–450 km, 163–201 km and so on, with a footnote saying why |
| Access notice renders at two weights | Pass — bordered `palm-soft` block with icon in English; quiet `border-s` rule in Arabic |
| Destination caveats render | Pass — three cards carry one, each behind a `border-s` brass rule that mirrors in RTL |

### One thing corrected during the build

The airport section originally wrote **"Terminal 1"** while explaining that
published sources disagree about this airport's terminals. That broke the rule
set for the Riyadh airport page — *no numbered terminal anywhere* — because a
skim-reader could take the numeral as our guidance rather than as part of a
description of the disagreement. Rewritten in both locales to describe the
conflict without numbers, rebuilt, and re-verified by grep.

Worth recording because it is the second time the terminal rule has had to be
enforced against my own draft, and the failure mode is the same each time:
quoting a contested fact accurately still puts the number on the page.

### A note on the promise report

The crawl's promise report now lists `/en/jeddah/` and `/ar/jeddah/`, for the
Makkah page named as text on the Makkah destination card. **That is the check
working, not a fault** — it is exactly the mechanism added after two stale
promises were left behind, and it will make the Makkah page's arrival
impossible to miss.

## Jeddah airport page pass, 7 November 2026

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | Pass |
| `next build` | Pass |
| `npm run qa` (full crawl) | Pass — **30 pages from 28 sitemap URLs** |
| Ten `<h2>` sections in order, both locales | Pass |
| Canonical self-referencing, trailing slash | Pass |
| Slashless → trailing-slash redirect | Pass — 308 both locales |
| SEO title within budget | Pass — EN 55, AR 47 |
| FAQ structured data | Pass — 8 entries per locale |
| Hub ⇄ airport links | Pass — both directions, both locales |
| Riyadh airport → Jeddah airport sibling link | Pass — both locales |
| Header Jeddah group and footer column gained the page | Pass |
| `svc-airport` reused, captioned as "a terminal" | Pass |
| Brand, typography, colour tokens, navigation and footer architecture | Unchanged |

**Honesty checks, by grep against the rendered page, both locales.**

| Check | Result |
| --- | --- |
| No numbered terminal | Pass — `terminal [1-5]`, `T[1-5]`, `الصالة الأولى` all return nothing |
| No price or fare | Pass |
| **No waiting-minute allowance** | Pass — the one "free waiting" hit is the FAQ *question*; its answer explicitly declines to publish a figure |
| **No named vehicle model** | Pass — Camry, Staria, Yukon, Hiace, Sprinter, Coaster all absent |
| **No name-board or meeting-landmark claim** | Pass |
| No rail schedule or fare | Pass |
| No Hajj Terminal operating dates | Pass |
| No Hajj or Umrah operator claim | Pass — Ihram timing is referred to the Ministry and the group organiser, not answered |

### Two process notes

**A false alarm I chased and should not have.** The promise report appeared to
flag the English airport page but not the Arabic one, which looked like a
locale rendering bug. It was my own `head -8` truncating the list — both
locales were flagged, six legitimate promises in all. Verified by counting the
phrase inside and outside `<script>` on both pages before concluding. Worth
recording because the next person to see a short promise list should suspect
their own pipe before the page.

**The CTA palette is exhausted.** `brass-deep` was the last unused full-field
colour and it **fails AA** — 3.86:1 against white, 4.33:1 against ink,
measured rather than assumed. From here, new pages differentiate their closing
band by composition, not colour. Recorded in
[riyadh-design-concepts.md](./riyadh-design-concepts.md).

### Remaining blockers

1. **Highway 40 east photography.** Commissioned or stock-licensed road
   photography for the Riyadh→Dammam and Riyadh→Al Khobar corridor. The only
   outstanding image gap in batch 1.
2. **Keyword volumes still unmeasured.** Needs a real tool; the checklist is
   ready to run.
3. **`NEXT_PUBLIC_SITE_URL` at build time.** Unchanged, and still a launch
   blocker — a build without it emits `http://localhost:3000` canonicals.
4. **`INQUIRY_WEBHOOK_URL` unset.** The enquiry form has no delivery endpoint
   and tells visitors so. Nothing silently fails; nothing is falsely confirmed.
5. **Afif's position on the Jeddah route** still rests on a weak source.
6. **Mobile layouts** still reviewed in markup rather than on real devices.
7. **Official KKIA and SAR references** still unconsulted — they are the
   primary sources for batches 3 and 4 and should be read before those pages
   are written.
