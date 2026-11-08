# Implementation roadmap

**Approved by the project owner, 4 November 2026.** **The Riyadh cluster is
complete and Jeddah has a hub and an airport page.** Stages 0–2 shipped on
4 November 2026; the Riyadh airport, railway and hotel pages on 6 November;
the **Jeddah hub and Jeddah airport page on 7 November**. Private driver hire
remains blocked on partner facts. Approval is required before any further
production file changes.

**The sequence was reordered by the owner on 6 November 2026.** Private driver
hire stays approved in scope but is **blocked** on operational information
from the driver partners, so rather than let one external dependency stall
everything, the airport page was brought forward. Driver hire is no longer
numbered: it ships when its ten facts arrive.

## Decision record

| # | Decision | Effect |
| --- | --- | --- |
| **1** | **Riyadh→Makkah and Riyadh→Madinah are excluded from the current Riyadh phase.** Not built, not registered, not linked, no pilgrimage content, not reintroduced via the homepage, hub, related routes or sitemap. Reconsiderable only by a separate strategic decision | Batch 2 drops from six routes to four |
| **2** | **Private driver hire approved for hourly and full-day only.** Weekly and monthly hire **not** approved. Arrangements must be verified with the driver partners before publishing, and nothing may be invented | New Stage 3 with a hard verification gate |
| **3** | **Every URL carries a trailing slash** — registry, canonicals, hreflang, internal links, sitemap, navigation, breadcrumbs and structured data. No slashless internal variants | Cross-cutting groundwork, due before Stage 2 |
| **4** | **Seven-stage sequence**, below | Replaces the earlier priority ordering |
| **6** | **The airport page comes before private driver hire.** Driver hire keeps its approved scope (hourly and full-day) but is blocked on operational verification; the airport page had no such dependency | Airport built 6 November 2026; driver hire unnumbered until its facts arrive |
| **7** | **Keep the one-way Buraydah→Hail editorial link**; do not force reciprocal body links; no homepage intercity cards; Destinations menu unchanged; AlUla keeps the independently supported flight-time range | Confirms the four judgement calls raised at the end of Stage 2 |
| **5** | **Hajj and Umrah stay on the homepage** as part of the nationwide service. The existing homepage pilgrimage section and footer column are **not** removed; dedicated pilgrimage pages are a later phase | Closes the question raised at the end of the decisions pass. Decision 1 remains unchanged: it excludes the two *Riyadh route pages*, not the nationwide positioning |

---

## Stage 0 — the trailing-slash convention — **DONE, 4 November 2026**

Verified against a production build (`next build` + `next start`) with
[`scripts/qa-crawl.mjs`](../../scripts/qa-crawl.mjs): 12 pages crawled, all
checks passed.

### What changed

| File | Change |
| --- | --- |
| [`next.config.ts`](../../next.config.ts) | `trailingSlash: true`; both `redirects()` destinations written with the slash (`/en/`, `/en/get-quote/`) |
| [`lib/i18n/config.ts`](../../lib/i18n/config.ts) | `localePath()` returns `/${locale}/${clean}/` and `/${locale}/` |
| [`components/layout/language-switcher.tsx`](../../components/layout/language-switcher.tsx) | Rebuilt through `localePath()` instead of joining segments by hand, which had dropped the slash |
| [`lib/content/navigation.ts`](../../lib/content/navigation.ts) | Comment only — `homeAnchor()` was already correct, now documented |
| [`app/robots.ts`](../../app/robots.ts) | Comment only — the disallow pattern was already correct, now documented |
| [`scripts/qa-crawl.mjs`](../../scripts/qa-crawl.mjs) | **New.** The crawler is now committed, and takes its URL inventory from the served sitemap and the link graph instead of a hand-written list |
| [`package.json`](../../package.json) | `typecheck` and `qa` scripts |

Nothing else needed touching: every URL on the site derives from `localePath()`
through `href()`, so canonicals, hreflang, the sitemap, navigation,
breadcrumbs, JSON-LD `@id`/`url`/`item` values and the quote form's `action`
all moved with that one function. That was the payoff of the existing
architecture.

### Correction to the plan as written

This roadmap predicted that writing the `redirects()` destinations with a slash
would make `/get-quote` a single hop. **It does not.** Next.js applies
trailing-slash normalization **before** it matches `redirects()`, so a request
for the slashless `/get-quote` is 308'd to `/get-quote/` first, and only then
does the 307 to `/en/get-quote/` fire. No `redirects()` source can catch the
slashless form, because it no longer exists by the time redirects are checked.

Measured:

| Request | Response |
| --- | --- |
| `/` | 307 → `/en/` — one hop |
| `/get-quote/` | 307 → `/en/get-quote/` — one hop |
| `/get-quote` | 308 → `/get-quote/` → 307 → `/en/get-quote/` — **two hops** |
| `/en/riyadh` and the other nine published URLs | 308 → trailing-slash form — one hop each |

The only way to collapse that one chain is `skipTrailingSlashRedirect: true`
plus a `proxy.ts` normalizing every request by hand. That puts a server
function in front of an otherwise fully static site, and makes us responsible
for the file-extension and `.well-known/` exemptions Next.js currently handles,
with duplicate-URL exposure if we get it wrong — to save one hop on an alias
that nothing links to and that is not in the sitemap. **The hop stays**,
recorded as a named allowance in the crawler so it cannot be forgotten, and the
crawler fails if the allowance is ever no longer needed.

### Acceptance criteria — results

- [x] Every indexable URL returns **200 with a trailing slash** and **308 to it
      without one**. 10 sitemap URLs + 2 noindex quote pages.
- [x] Every canonical equals the final, non-redirecting URL.
- [x] Every hreflang target is a trailing-slash URL; the set is reciprocal and
      includes `x-default`.
- [x] Sitemap entries all carry trailing slashes. `/sitemap.xml` and
      `/robots.txt` do not — Next.js exempts paths with a file extension.
- [x] No internal link anywhere produces a redirect. Every internal `href` on
      every page ends in `/` or is a file.
- [x] Breadcrumb links and JSON-LD `@id`/`url`/`item` values carry trailing
      slashes.
- [x] Language switching from every page lands on a trailing-slash URL with no
      redirect, including the homepage edge case (`/en/` ⇄ `/ar/`).
- [~] `/` redirects once. `/get-quote` takes two hops — see the correction
      above; this is a framework ordering constraint, not a configuration
      defect.

### The migration this creates

**The ten published URLs changed shape**: `/en/riyadh` is now `/en/riyadh/`.
The 308s make that safe for crawlers and for anything already linked. Two
follow-ups belong to whoever operates the site, not to the code:

1. If any published URL was submitted to Search Console, **resubmit the
   sitemap** so the new forms are discovered rather than waiting for a recrawl.
2. `NEXT_PUBLIC_SITE_URL` is still unset. Until it is, canonicals and the
   sitemap are built against `http://localhost:3000` — see the launch
   blockers. This was true before Stage 0 and is unchanged by it.

---

## Stage 1 — existing-SEO improvements — **DONE, 4 November 2026**

No new URLs. Applied to the four published cluster pages, both locales.

| # | Change | Outcome |
| --- | --- | --- |
| 1.1 | **FAQ answer structure** | **Mostly already correct.** An audit of all 22 published answers found 21 already opening with a direct answer. One did not: the hub was asked "How far is King Khalid International Airport from central Riyadh?" and answered by describing the drive **without ever giving a distance.** Rewritten to open with ~35 km, re-verified first. No other answer was touched — there was nothing to fix |
| 1.2 | **Verified last-checked dates** | **Done, and the figures were genuinely re-checked first.** Every headline figure on the three route pages was re-queried against public route data; all held, so nothing was restated. A `statsChecked` line now renders under each stat band in both languages. See the re-verification log |
| 1.3 | **Question-form FAQ headings** | **Already satisfied — no work needed.** All 22 English questions were already interrogative; all 22 Arabic questions already carried ؟ and natural Arabic question forms. Reported rather than invented |
| 1.4 | **Explain route-distance variation** | **Done.** One new FAQ per route page, written separately for each route from that route's own published spread, so the three are not three copies of one answer. Inserted at position 2, leaving each page's headline distance question first |

### What changed

| File | Change |
| --- | --- |
| [`lib/content/riyadh/types.ts`](../../lib/content/riyadh/types.ts) | `RoutePageContent` gains a **required** `statsChecked: Bilingual<string>` |
| [`lib/content/riyadh/jeddah.ts`](../../lib/content/riyadh/jeddah.ts) | `statsChecked`; new distance-variation FAQ |
| [`lib/content/riyadh/dammam.ts`](../../lib/content/riyadh/dammam.ts) | `statsChecked`; new distance-variation FAQ |
| [`lib/content/riyadh/al-khobar.ts`](../../lib/content/riyadh/al-khobar.ts) | `statsChecked`; new distance-variation FAQ |
| [`lib/content/riyadh/hub.ts`](../../lib/content/riyadh/hub.ts) | The airport-distance answer now answers the question |
| The three route `page.tsx` files | Render `statsChecked` under the stat band, each in its own band's tone |
| [`riyadh-content-research.md`](../riyadh-content-research.md) | **Re-verification log** added, plus a sourced row for the airport distance |

`statsChecked` is required rather than optional on purpose: a route page with
no date would look like one that had never been checked, which is the failure
mode this item exists to prevent.

### Why 1.1 and 1.3 came out smaller than planned

The roadmap assumed our answers "bury the answer in sentence two or three".
Measured against the published content, that was wrong — the batch-1 pages were
already written that way. Two of the four items were therefore largely
already satisfied, and the honest result is one real content defect found and
fixed rather than 22 rewrites performed for the sake of the ticket. The one
defect was worth the audit on its own: a page that asks "how far is it" and
never says is a page that fails both the reader and the query it targets.

### Standing rule this creates

**Do not move a `statsChecked` date without adding a row to the
re-verification log in [`riyadh-content-research.md`](../riyadh-content-research.md).**
A date that nobody earned is worse than no date, because it transfers
confidence it has not earned.

### Verification

`npx tsc --noEmit`, `npx eslint .`, `next build` and `npm run qa` all pass —
12 pages, all checks. FAQ structured data picked the new questions up
automatically: Jeddah and Dammam 6→7 entries, Al Khobar 5→6, hub unchanged at
5. The new lines and answers were confirmed rendering in both `/en/` and
`/ar/`.

**Gate for Stage 2:** none from this stage.

---

## Stage 2 — Riyadh Batch 2 — **DONE, 4 November 2026**

Four routes, eight localized URLs, English and Arabic together. The cluster is
now **18 indexable URLs** plus the two noindex quote pages.

| Build | Route | EN | AR |
| --- | --- | --- | --- |
| 1 | Buraydah | `/en/riyadh-to-buraydah/` | `/ar/riyadh-to-buraydah/` |
| 2 | Taif | `/en/riyadh-to-taif/` | `/ar/riyadh-to-taif/` |
| 3 | Hail | `/en/riyadh-to-hail/` | `/ar/riyadh-to-hail/` |
| 4 | AlUla | `/en/riyadh-to-alula/` | `/ar/riyadh-to-alula/` |

### The gates, and how each closed

| Gate | Outcome |
| --- | --- |
| Buraydah hero image — **missing** | **Closed.** `King Fahad Road in Buraydah`, CC BY 4.0, Kskhh. An actual Buraydah street, which suits the practical concept |
| Hail hero image — **missing** | **Closed.** `View of Aarif Fort, Hail`, CC BY-SA 4.0, Iain Cheyne |
| Highway 65 photograph — identified, not pinned | **Closed.** `طريق القصيم الرياض السريع`, CC BY 3.0, you2011. The actual road north, used as a road photograph honestly |
| Taif and AlUla heroes | Used as held |
| Route facts | Re-sourced as ranges; see the content-research doc |
| SAR North line | Stations verified. **No schedule or fare published** — one source quotes a Riyadh–Hail fare and it is deliberately not repeated |
| Al Hada figures — contested | VisitSaudi's ~2,177 m used **with a footnote saying sources disagree**. The "93 curves" figure was dropped |
| A'arif Fort date — contested | **No date published** |
| AlUla flight frequency — single source | **No number published at all.** A FAQ says outright that we will not give one |

### The image pipeline is now committed

Two of those gates existed only because the sourcing script had been kept
outside the repository and was then lost. It is now
[`scripts/sync-images.mjs`](../../scripts/sync-images.mjs) with
[`scripts/images.manifest.json`](../../scripts/images.manifest.json): it skips
files that already exist, reads licence and author from the MediaWiki API,
refuses anything carrying usage restrictions, and is idempotent. Adding a
photograph is now a repository operation rather than a rediscovery.

### One correction to this plan, made during the build

The architecture document specified the AlUla drive-or-fly contrast as
**"1h 10m against 10–12 hrs"**. That flight time traces to a single airline's
own marketing page and is the outlier: independently published nonstop times
for this city pair run roughly **1h 35m to 2h**, against an air distance of
about 876 km. The page uses the range and states in a footnote that one
airline quotes a shorter time which we have not used. The comparison still
recommends flying — it did not need the flattering number to do so.

### Design — one signature element per page, enforced by the type

`RoutePageContent` gained five optional fields (`region`, `elevation`,
`checklist`, `routeChoice`, `itinerary`) so the design brief lives in the type
rather than in memory. No Batch 1 signature element was reused: no vertical
timeline, no branch grid, no causeway block, no bottom-anchored hero.

| Page | Concept | Signature |
| --- | --- | --- |
| Buraydah | Practical and regional | Facts-first hero with no photograph; region block; car-or-train in ruled columns; inline palm-soft CTA |
| Taif | Elevation | Headline on a card overlapping the photograph; **SVG elevation band drawn to scale from real metres**; palm and sand only, no brass; the cluster's only pale CTA |
| Hail | The planner | Photograph above the H1; route-choice cards with a default badge; preparation checklist with ordinals; ruled figure list |
| AlUla | Landscape-led | Centred headline in a tall landscape; drive-or-fly with display-numeral times, flying column first; two-stop itinerary; the only brass CTA |

### Required edit to an existing page — done

The Riyadh hub's intercity `planned` array named Riyadh→Makkah and
Riyadh→Madinah as "being written". **Both are gone**, and the four new routes
are live links with distance and duration. No `planned` list remains on that
branch. `grep` confirms **no reference to either excluded route anywhere in
`lib/`, `app/` or `components/`**.

The hub's meta description was also widened, since it named three intercity
routes when the hub now links to seven.

### Verification

`tsc --noEmit`, `eslint .`, `next build` (23 → 39 prerendered pages) and
`npm run qa` all pass. The crawl covers **20 pages from 18 sitemap URLs**:
canonicals self-referencing, hreflang complete and reciprocal, no orphan, one
`<h1>` each, 20 unique titles, correct `lang`/`dir`, no slashless internal
link, no cross-locale link, every published URL one 308 hop from its slashless
form. All four signature elements and all four hero images confirmed rendering
in both locales, with locale-correct alt text.

**Gate for Stage 3:** none from this stage. Stage 3 remains blocked on the ten
operational facts, not on anything here.

---

## Private driver hire — **BLOCKED, not scheduled**

Scope stays as approved: **hourly and full-day only**. It is not numbered
because it does not wait on us — it waits on the ten operational facts from
the driver partners listed at the end of this section. The airport page was
brought forward past it on 6 November 2026 so one external dependency did
not stall the cluster.

`/en/private-driver-hire/` · `/ar/private-driver-hire/`

**Approved scope: hourly hire and full-day hire only.** Weekly and monthly hire
are not approved and must not appear anywhere on the page — not in H2s, not in
keywords, not in FAQs, not in metadata, not in structured data.

### Verification gate — the operational information still required

This is the answer to the owner's question 8. The page **cannot be written**
until these are confirmed with the driver partners, because each is
load-bearing for a section or an FAQ answer, and each is something the
instruction explicitly forbids inventing.

| # | Required information | What it blocks | If it stays unknown |
| --- | --- | --- | --- |
| 1 | **Minimum booking duration for hourly hire** | The hourly section; the "what is the minimum" FAQ | Say the minimum is confirmed in the written quotation. Do **not** guess a figure |
| 2 | **How many hours constitutes a full day** | The full-day section | Describe it as a full day's use with the hours confirmed at quotation. The competitor's "10 hours" is *their* figure and must not be borrowed |
| 3 | **Whether waiting time between stops is included or charged** | "What's included / quoted separately"; the waiting FAQ | Omit the claim entirely rather than imply either |
| 4 | **Included mileage or distance limit, if any** | "What's included"; the "can it leave the city" FAQ | Omit |
| 5 | **Overrun / overtime arrangement** | The overrun FAQ | Drop the FAQ |
| 6 | **Which vehicle categories can actually be arranged for day hire** | Vehicle guidance | List none. Only categories that can genuinely be arranged may appear |
| 7 | **Whether the vehicle may leave Riyadh on an hourly or full-day booking** | The "can it leave the city" FAQ; cross-links to route pages | Drop the FAQ and the cross-link rationale |
| 8 | **Whether the same driver can be held across a multi-day booking** | The multi-day FAQ | Drop the FAQ. Avoid the word "guaranteed" either way |
| 9 | **Notice required to book** | "How to book" | Say notice is confirmed on enquiry |
| 10 | **Days or hours when day hire is unavailable** | Any availability statement | **Publish no availability claim at all** |

Plus the two standing items that apply to every page: **no prices** and **no
operational guarantees.**

### What the page can say truthfully today

Even with all ten unanswered, there is a publishable page — it is just a
narrower one:

- What hourly and full-day hire *are*, and how they differ from a
  point-to-point transfer.
- That the vehicle stays with you between stops rather than leaving and
  returning.
- That **it is not a car rental** — the differentiator, since both the English
  and Arabic SERPs for this intent are held by OneClickDrive, a
  rental-with-driver marketplace.
- That the price is agreed in writing before anything is reserved, that no
  payment is taken to get a quotation, and that nothing is booked until
  accepted.
- What people typically use it for.

**Recommendation:** get items 1, 2 and 3 answered at minimum. Without those
three the page cannot describe either product concretely enough to be useful,
and a vague service page converts badly.

---

## Riyadh airport transfers — **DONE, 6 November 2026**

Brought forward ahead of private driver hire by owner decision. One URL per
locale; the cluster is now **20 indexable URLs** plus the two noindex quote
pages.

| | |
| --- | --- |
| English | `/en/riyadh-airport-transfers/` |
| Arabic | `/ar/riyadh-airport-transfers/` |
| Route key | `riyadhAirport`, sitemap priority 0.8 |

### The consolidation decision held

Four mandatory `<h2>` sections, verified rendering in both locales in the
approved order: **Arrivals at King Khalid International Airport · Departures
from Riyadh · Hotel connections · Onward intercity connections from the
airport**, then the quotation section, before-you-travel, how-to-book, FAQ,
related journeys and the CTA. No thin directional page was created.

The layout makes the same argument: the two directions are **equal
side-by-side panels, both always visible, with no switcher and no
JavaScript**. A switcher would have hidden half the answer and quietly
reintroduced the split the single URL exists to remove.

### Official sources: attempted, refused, disclosed

The owner asked for official KKIA references to be consulted first. Both the
airport's own site (`kkia.sa`) and its operator's (`riyadhairports.com`)
returned **HTTP 403** to every request. Nothing on the page is therefore
attributed to the airport itself; it cites Saudipedia (Ministry of Media) and
Wikipedia, both named in
[riyadh-content-research.md](../riyadh-content-research.md), and the page tells
the reader where that leaves them.

**If the owner can supply the airport's own materials, the page can be
upgraded to cite the operator directly.** That is the one open improvement.

### The significant editorial decision: no terminal map

The sources contradict each other on which terminal serves which airline —
Saudipedia has the fifth terminal as domestic for all carriers, Wikipedia has
it as international for all foreign carriers — and trade press shows terminals
closing and reopening, so assignments move.

A wrong terminal chart does not merely misinform; it sends a passenger to the
wrong building at an airport with five of them. So **the page publishes no
chart and no numbered terminal anywhere** (verified by grep against the
rendered HTML), and answers "which terminal" from the flight number. One FAQ
states the disagreement plainly.

That turned a gap into the page's strongest asset: it makes the flight-number
mechanic — the page's unique angle — *necessary* rather than merely nice.

### "What's included" became "what your quotation covers"

The planned inclusions block would have asserted waiting time, meet-and-greet
detail, tolls and child seats: the same unconfirmed operational class that
still blocks driver hire. The section instead describes the **process** we can
vouch for and lists, in a second column, what it declines to claim. A
deliberate substitution, recorded here so it is not read as an omission.

### Images

Two photographs added through the committed pipeline, both genuinely of this
airport:

| Key | Use | Photograph | Author | Licence |
| --- | --- | --- | --- | --- |
| `kkia-central` | Hero | Central area of KKIA | Kritzolina | CC BY-SA 4.0 |
| `kkia-departures` | Departures panel | Domestic departures, KKIA | Kskhh | CC BY-SA 3.0 |

The held `svc-airport` image is **Jeddah's** airport and was correctly not
used. Only the departures panel carries a photograph, because that is the only
one of the two directions we hold an honest picture of — the arrivals panel
takes a tinted header rather than a mislabelled image.

### Verification

`tsc --noEmit`, `eslint .`, `next build` and `npm run qa` all pass. The crawl
covers **22 pages from 20 sitemap URLs**, all checks green. Seven onward route
links, the hub's airport branch promoted to a live link, FAQ structured data
at 7 entries per locale, locale-correct Arabic alt text, title 52 characters.

**Gate for the railway and hotel pages:** none from this stage. The airport
page correctly links to neither, because neither exists.

---

## Riyadh railway station transfers — **DONE, 6 November 2026**

**The three-page proposal was rejected on the evidence and replaced with one
page.** Riyadh has **two** passenger railway stations, and "Riyadh East" is
the name of the East Train network and of the city station it leaves from —
not a third station.

| | |
| --- | --- |
| English | `/en/riyadh-railway-station-transfers/` |
| Arabic | `/ar/riyadh-railway-station-transfers/` |
| Route key | `riyadhRailway`, sitemap priority 0.7 |
| Withdrawn | `riyadh-east-station-transfers` (no such station) and `riyadh-north-station-transfers` (a section, not a page) |

Full evidence, keyword mapping, linking plan, photography audit and the
owner's decisions:
[railway-architecture-validation.md](./railway-architecture-validation.md).

### Two stations, one page

| Section | Station | Line |
| --- | --- | --- |
| 1 | Riyadh railway station — *Riyadh East*, *Riyadh SRO*, *SAR Riyadh–Dammam*, *Malaz* | East Train: Hofuf · Abqaiq · Dammam |
| 2 | Riyadh North — *Thumamah*, sometimes *Riyadh airport station* | North Train: Majmaah · Qassim · Hail · Al-Jouf · Qurayyat |

Five published names for the first station and three for the second is
precisely why the page exists, and why the aliases are used in the copy
rather than split across duplicate URLs.

### What SAR confirms, and what it does not

SAR's own pages return **HTTP 401** to us and the Internet Archive is blocked
here, so nothing was read from the operator directly. The owner supplied three
official SAR URLs and reported that they **name Riyadh East under the East
Train network and Riyadh North under the Northern Train network** — so the
station *names* are operator-confirmed, and SAR's own URL structure
(`east-train`, `northern-train`) independently corroborates that "East" and
"North" are networks rather than two Riyadh stations.

Everything else — districts, opening years, platform counts, stop sequences —
is secondary-sourced and labelled as such. **Nothing about pickup zones,
meeting points or collecting inside a concourse is claimed anywhere.**

### A correction the separate verification produced

The owner asked for the Riyadh North location and airport relationship to be
verified independently. Doing so **corrected the validation document's own
wording.** It had said the station "is at King Khalid International Airport".
Computed from the published coordinates, it is **13.2 km from the terminal
reference point** in a straight line — inside the airport's 375 km² land area
and carrying its postal address, but a separate site you cannot walk to. The
page states the 13 km figure and a FAQ answers the question directly.

The two stations are **23.0 km apart** in a straight line, which is the page's
core practical warning: going to the wrong one is not a short mistake.

### Design — "the departure board"

The hero is a board of the two stations, their lines and their destinations —
**destinations only, never times or fares**. The signature element is the
corridor diagram: two parallel runs of station chips, mirrored for RTL. The
second station section uses a **tinted block rather than a photograph**,
because none of Riyadh North exists under an open licence and a generic train
would be a mislabelled image. The CTA is a full-bleed palm-soft band, used
nowhere else.

### Verification

`tsc --noEmit`, `eslint .`, `next build` and `npm run qa` all pass. The crawl
covers **24 pages from 22 sitemap URLs**, all checks green. The hub's railway
branch is promoted to a live link; the airport page and the railway page link
to each other in both directions; FAQ structured data at 7 entries per locale;
locale-correct Arabic alt text; title 48 characters. No fare, schedule,
facility or meeting-point string appears on the page.

---

## Riyadh hotel transfers — **DONE, 6 November 2026**

`/en/riyadh-hotel-transfers/` · `/ar/riyadh-hotel-transfers/` · route key
`riyadhHotel`, sitemap priority 0.6 — the lowest of the published pages,
because this is the smallest intent and largely a sub-intent of the airport
page.

With this the **Riyadh cluster's service pages are complete**: hub, seven
intercity routes, airport, railway and hotels. Twenty-four indexable URLs.

### The angle

Large Riyadh hotels have several entrances — a main lobby, a separate
conference or ballroom door, a basement car park, sometimes a residence tower
with its own address. **Naming the right one is where hotel transfers actually
fail**, and it is advice we can give without anything confirmed by a partner.
That is the first `<h2>` and the page's reason to exist.

The six `<h2>` sections follow the specification: a named entrance · to and
from the airport · across the city · onward to another city · what the
quotation covers · FAQ, then related and the CTA.

### What it does not claim

No waiting-time policy, no meet-and-greet arrangement, no statement about
where a car may stand at any particular property, **no hotel named anywhere**,
and no price. Where a vehicle can wait is set by each hotel and by whoever is
managing the forecourt that day; our own waiting and inclusions are
unconfirmed with the driver partners — the same gap that blocks private driver
hire. The quotation section describes the process and closes on an item saying
what it does *not* state.

Verified by grep against the rendered page: no hotel brand, no fare, no
free-waiting claim.

### Design — "the meeting point"

**The quietest page in the cluster, and the only one with neither a hero
photograph nor a stat band.** No stat band because the page makes no distance
or duration claim and so has no figure to date-stamp. No photograph because we
hold none of a Riyadh hotel and will not use hotel-branded imagery — zero
`<img>` elements, with a city view serving the social card. One column
throughout; the CTA has no colour field at all.

### Three stale strings fixed, two of which were already live

Shipping this page closed the last "being written" promises, and in doing so
corrected **two inaccuracies that had been live since the airport and railway
pages shipped earlier the same day**:

| Where | Was | Now |
| --- | --- | --- |
| Hub intro | "the airport, railway and hotel pages are being written" | Every branch has a page, so each card is a link rather than a promise |
| Hub railway FAQ | "Dedicated pages for the individual stations are being written" | Wrong in substance too — there is **one** railway page, because there are two stations and no per-station pages. Now points at it |
| Airport page, hotel section | "A fuller page … is still being written" | Describes what the hotel page covers and links to it |

I should have caught the first two when those pages shipped. They are the
exact failure mode the Riyadh hub's `planned` array was corrected for during
Stage 2, and the lesson is the same: **a page that ships makes some other
page's prose untrue, and nothing checks prose.**

### A type fix the completion forced

With no branch carrying a `planned` list any more, TypeScript narrowed that
key out of the hub's inferred type and the build broke — `satisfies
HubBranch[]` validates the data but keeps the narrow inferred type rather than
widening to the declared one. Fixed at the use site in the hub page with an
explicit `HubBranch[]` annotation, so the honest "being written" rendering
stays available for any branch added later. The capability belongs to the
type, not to whether today's data happens to use it.

### Verification

`tsc --noEmit`, `eslint .`, `next build` and `npm run qa` all pass. The crawl
covers **26 pages from 24 sitemap URLs**, all checks green. Hub hotel branch
promoted to a live link; airport ⇄ hotel cross-links in both locales; FAQ
structured data at 6 entries per locale; title 44 characters.

---

## Jeddah destination hub — **DONE, 7 November 2026**

`/en/jeddah/` · `/ar/jeddah/` · route key `jeddah`, sitemap priority **0.9** —
level with the Riyadh hub, because this is a city parent rather than a leaf.

The site now covers **two cities**: 26 indexable URLs.

Nine research deliverables preceded it, in
[`docs/research/jeddah/`](./jeddah/jeddah-research-report.md).

### The three findings that shaped it

1. **Jeddah is the inverse of Riyadh.** The competitor already holds the
   Jeddah route pages — Makkah, Madinah, Taif, Yanbu, Riyadh, Abha, plus four
   `/distance/` pages, all 200. What they have **no** page for is a Jeddah
   city hub (404) or an airport page (three slugs, all 404). So the opening
   was the hub and the airport, not more routes.
2. **Entry to Makkah is restricted to Muslims**, enforced at checkpoints on
   the Jeddah road. The biggest Jeddah intent is "airport to a Makkah hotel",
   so a non-Muslim booking it would be driven to a checkpoint and turned back.
   Their Makkah route page does not say so. Ours says it **above the
   destination cards**, before any distance.
3. **Jeddah has two Haramain stations** — Al-Sulaymaniyah and one *inside* the
   airport — so the Riyadh "which station" question recurs, and the airport is
   a rail interchange too.

### Architecture: destination-led, not service-led

Riyadh's hub is organised by service type because people there want to know
what we do. **Jeddah is a doorway**: people are passing through, and the
question is "I have landed — now what?" So the hub is organised by *where you
are going next*, with eight `<h2>`s of which four are destination-led, against
the Riyadh hub's service-led four. The content type is its own
(`lib/content/jeddah/types.ts`) rather than Riyadh's `HubBranch`, because
reusing that type would have quietly imposed Riyadh's architecture.

### Three URLs recommended, one built

| Verdict | Intent |
| --- | --- |
| **Built** | The hub |
| Recommended next | A Jeddah airport page — highest intent, three competitor 404s |
| Recommended third | `/jeddah-to-makkah/` — contested, winnable on the access restriction |
| Section only | Madinah, Taif, Yanbu, hotels |
| **Never** | `/jeddah-to-riyadh/` — a near-duplicate of our published `/riyadh-to-jeddah/` |
| Deferred | A Jeddah railway page, until Riyadh's reports |

Nine intents, three URLs. Every omission has a reason recorded.

### Two homepage proposals held

Linking the homepage Jeddah destination card, and repointing the three
homepage intercity cards that touch Jeddah. Both are improvements; neither is
a correctness fix, and the homepage is a surface the owner has twice asked to
preserve. **Recommended and left to the owner.**

### Verification

`tsc --noEmit`, `eslint .`, `next build` and `npm run qa` all pass — **28
pages from 26 sitemap URLs**, all checks green. Title EN 53 / AR 48. FAQ
structured data 8 entries per locale. Canonical self-referencing, 308 from the
slashless form, Arabic alt text correct. Greps confirm **no price, no
schedule and no numbered terminal** in either locale.

**No airport or rail operator source was readable** — this airport's operator
family returns 403, SAR returns 401, the Internet Archive is blocked. Nothing
on the page is attributed to an operator, and the page says so where it
matters.

---

## Jeddah airport transfers — **DONE, 7 November 2026**

`/en/jeddah-airport-transfers/` · `/ar/jeddah-airport-transfers/` · route key
`jeddahAirport`, sitemap priority **0.8** — level with the Riyadh airport page.

**28 indexable URLs.** Two cities, each with a hub and an airport page.

### A correction to the research that justified this page

The 6 November gap analysis claimed the competitor had **no** Jeddah airport
page and **no** Jeddah city page. **Both claims were wrong.** They have
`/services/airport-transfers/` (nationwide, substantial), a Jeddah-specific
`/jeddah-airport-transfer/` (singular slug), `/guides/jeddah-airport-guide/`,
a fare blog post, and `/locations/jeddah/`.

I had probed guessed slugs and read four 404s as absence. Worse, the Riyadh
gap analysis **already recorded `/locations/<city>/` as their city pattern and
named Jeddah** — the information was in our own prior research. The correction,
with the revised basis for competing, is at the top of
[jeddah-competitor-gap-analysis.md](./jeddah/jeddah-competitor-gap-analysis.md).

**The page was still worth building**, but on a different footing: not
"unclaimed intent" but "we can be right where they are specific-but-fragile".

### What they publish that we deliberately do not

| They publish | We publish |
| --- | --- |
| "Jeddah Terminal 1", meeting point "near the Aquarium in the arrivals hall" | The terminal confirmed from your flight; no chart, no landmark |
| Free waiting: 60 min domestic, 90 international | That a delay moves the pickup; the allowance is in your quotation |
| Four named vehicle models with suitcase counts | A vehicle **category** matched to what you describe |
| "Starts from" fares | No price anywhere |

A named landmark can be moved or renamed; a printed page cannot. The page
makes that argument openly rather than going quiet.

### What they omit, and we do not

- **Rail.** A Haramain high-speed station is linked to this terminal and
  serves both holy cities. Their airport page does not mention rail at all.
  Ours gives it a section and says when the train wins.
- **The Makkah access restriction**, on a page selling Jeddah→Makkah
  transfers. Our onward card carries it.

### Official sources: attempted and refused

`jed.sa`, `www.jeddahairports.com.sa` and `matarat.sa` all failed at **DNS**;
all four `www.kaia.sa` pages returned **HTTP 403**. Nothing on the page is
attributed to the airport or its operator, and the page says so where the
terminal question is answered.

### Design — "the onward choice"

Opens with the **decision**, not a photograph: three onward cards (Makkah ·
Madinah · into Jeddah), each with distance, a reason and a caveat. The
terminal photograph appears later in the terminal section, where it is the
subject. Both directions are one ruled two-column comparison rather than the
Riyadh page's twin panels. The terminal refusal gets its own `<h2>`, because
declining to match a competitor's specificity has to be argued.

**A note for the next page:** the AA-passing full-field CTA colours are
exhausted. `brass-deep` was measured at 3.86:1 against white and 4.33:1
against ink and rejected. This CTA is distinguished by composition and a heavy
rule instead.

### Verification

`tsc --noEmit`, `eslint .`, `next build` and `npm run qa` all pass — **30
pages from 28 sitemap URLs**, all checks green. Ten `<h2>`s in order in both
locales. Title EN 55 / AR 47. FAQ structured data 8 per locale. 308 from the
slashless form. Hub ⇄ airport and Riyadh-airport → Jeddah-airport links in
both locales.

Greps against the rendered page confirm **no numbered terminal, no price, no
waiting-minute allowance, no vehicle model and no name-board claim** in either
locale. The single "free waiting" hit is the FAQ *question*, whose answer
declines to publish a figure.

---

## Blocked, not deprioritised

Each needs the business to confirm an operational reality before a word can be
published. They are not scheduled because they cannot be.

| Item | Blocked on |
| --- | --- |
| Weekly / monthly driver hire | **Not approved** |
| Riyadh→Makkah, Riyadh→Madinah | **Excluded from this phase** |
| King Fahd causeway page, cross-border routes | Vehicle permissions, insurance position |
| `/women-transport`, `/wheelchair-taxi` | Whether those arrangements can actually be made |
| Event and corporate transfers | Whether a group/B2B process exists |
| Driver profile pages | Real, consenting, named staff |
| `/fleet` | A confirmed fleet |
| Any page stating a price | Established pricing |
| A `/distance/` page family | **Rejected** — would cannibalise the route pages |

---

## Launch blockers that cap the whole roadmap

Unchanged, and none is an SEO task:

1. **`INQUIRY_WEBHOOK_URL` is unset.** The enquiry form has no delivery
   endpoint and tells visitors so. **Every CTA in every stage above leads to a
   form that cannot deliver.** Nothing here returns value until this is fixed.
2. **`NEXT_PUBLIC_SITE_URL` must be set at build time.** It is inlined, not
   read at runtime; a build without it emits `http://localhost:3000`
   canonicals, hreflang and sitemap entries.
3. **No WhatsApp channel.** The competitor's entire conversion mechanism and
   the market-appropriate one. A decision for the owner.
4. **Keyword volumes unmeasured.** Every priority here is intent-ranked, not
   demand-ranked. A real tool could reorder Stage 2's internal order — though
   not the stages themselves.
5. **Highway 40 east photography** still missing for the published Dammam and
   Al Khobar pages.
