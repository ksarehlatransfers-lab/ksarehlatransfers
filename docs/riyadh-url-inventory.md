# Riyadh cluster — URL inventory

The authoritative list lives in code at [`lib/i18n/routes.ts`](../lib/i18n/routes.ts).
The sitemap, hreflang tags, breadcrumbs and every internal link are generated
from it, so this document describes that registry rather than duplicating it.

## URL scheme

Every page sits under a locale segment. Slugs are identical across locales, so
the language switcher is a prefix swap and hreflang pairs are unambiguous.

| | |
| --- | --- |
| English | `/en/<slug>/` |
| Arabic | `/ar/<slug>/` |
| Root | `/` → 307 to `/en/` (temporary, so the strategy can change later) |
| Slashless | `/en/<slug>` → 308 to `/en/<slug>/` |
| Legacy | `/get-quote/` → 307 to `/en/get-quote/`. The slashless `/get-quote` takes two hops — see below |

## Mandatory: trailing slash on every URL

**Owner decision, 4 November 2026.** Every URL carries a trailing slash —
`/en/riyadh-to-buraydah/`, never `/en/riyadh-to-buraydah`. This applies
consistently to:

- the URL registry (`lib/i18n/routes.ts` via `localePath()`)
- canonical URLs
- hreflang URLs, including `x-default`
- every internal link
- sitemap entries
- navigation
- breadcrumbs
- structured-data URLs

**No slashless internal variant may be created.** Two exceptions are inherent
and correct: files with an extension (`/sitemap.xml`, `/robots.txt`) and
anything under `.well-known/`, both of which Next.js excludes from
trailing-slash handling by design.

**Status: implemented and verified, 4 November 2026.** Every URL the site
generates now ends in a slash, and Next.js answers 308 on the slashless form.
Verified against a production build by
[`scripts/qa-crawl.mjs`](../scripts/qa-crawl.mjs) — 12 pages, all checks
passed. The full change list and results are in
[research/implementation-roadmap.md](./research/implementation-roadmap.md)
§Stage 0.

**One documented exception.** `/get-quote` — the legacy, locale-less alias —
takes **two** hops (`308 /get-quote/` then `307 /en/get-quote/`), because
Next.js normalizes the trailing slash *before* it matches `redirects()`, so no
redirect rule can catch the slashless form. `/get-quote/` is one hop, and all
ten published page URLs are one hop. Collapsing the remaining chain would mean
`skipTrailingSlashRedirect` plus a hand-written proxy on every request; it is
not worth that for an alias nothing links to. The crawler holds it as a named
allowance and fails if a second chain ever appears.

## Published

Eighteen indexable URLs plus the two noindex quote pages. Batch 2 shipped
4 November 2026.

| Page | English | Arabic | Batch | Indexed |
| --- | --- | --- | --- | --- |
| Homepage | `/en/` | `/ar/` | 1 | Yes |
| Riyadh hub | `/en/riyadh/` | `/ar/riyadh/` | 1 | Yes |
| Riyadh → Jeddah | `/en/riyadh-to-jeddah/` | `/ar/riyadh-to-jeddah/` | 1 | Yes |
| Riyadh → Dammam | `/en/riyadh-to-dammam/` | `/ar/riyadh-to-dammam/` | 1 | Yes |
| Riyadh → Al Khobar | `/en/riyadh-to-al-khobar/` | `/ar/riyadh-to-al-khobar/` | 1 | Yes |
| Riyadh → Buraydah | `/en/riyadh-to-buraydah/` | `/ar/riyadh-to-buraydah/` | 2 | Yes |
| Riyadh → Taif | `/en/riyadh-to-taif/` | `/ar/riyadh-to-taif/` | 2 | Yes |
| Riyadh → Hail | `/en/riyadh-to-hail/` | `/ar/riyadh-to-hail/` | 2 | Yes |
| Riyadh → AlUla | `/en/riyadh-to-alula/` | `/ar/riyadh-to-alula/` | 2 | Yes |
| Riyadh airport transfers | `/en/riyadh-airport-transfers/` | `/ar/riyadh-airport-transfers/` | 3 | Yes |
| Riyadh railway stations — **one page, two station sections** | `/en/riyadh-railway-station-transfers/` | `/ar/riyadh-railway-station-transfers/` | 3 | Yes |
| Riyadh hotel transfers | `/en/riyadh-hotel-transfers/` | `/ar/riyadh-hotel-transfers/` | 3 | Yes |
| **Jeddah hub** | `/en/jeddah/` | `/ar/jeddah/` | 4 | Yes |
| **Jeddah airport transfers** | `/en/jeddah-airport-transfers/` | `/ar/jeddah-airport-transfers/` | 4 | Yes |
| Quote form | `/en/get-quote/` | `/ar/get-quote/` | 1 | **No** — `noindex, follow` |

The quote page is excluded from the sitemap and carries a `noindex` meta tag.
It is deliberately *not* disallowed in `robots.txt`: a disallowed URL cannot be
crawled, so the `noindex` would never be read.

## Planned — later batches

Slugs are reserved here so internal linking and the hub copy stay consistent
when the pages are written. **None of these are linked anywhere yet** — the
Riyadh hub names them as text with a "being written" note instead.

| Stage | Page | Slug |
| --- | --- | --- |
| — | Private driver hire — **hourly and full-day only**, blocked on operational verification | `private-driver-hire` |
| ~~—~~ | ~~Riyadh North station~~ — **withdrawn: a section of the railway page, not a URL** | ~~`riyadh-north-station-transfers`~~ |
| ~~—~~ | ~~Riyadh East station~~ — **withdrawn: no such station exists** | ~~`riyadh-east-station-transfers`~~ |
| — | Jeddah → Makkah — recommended | `jeddah-to-makkah` |

## Withdrawn: Riyadh → Makkah and Riyadh → Madinah

**Owner decision, 4 November 2026.** Both routes are **excluded from the
current Riyadh phase.** The slugs `riyadh-to-makkah` and `riyadh-to-madinah`
are **withdrawn from the reserved list**, not deferred within it, so that
nothing in this document can be read as an approved page.

| Requirement | Enforcement |
| --- | --- |
| Not built in Batch 2 | Removed from the table above |
| Not in the URL registry | Must not be added to `lib/i18n/routes.ts`. Nothing is in the registry today |
| No links to them | No link exists. See [riyadh-internal-linking.md](./riyadh-internal-linking.md) |
| No pilgrimage-focused content for these destinations | Standing scope rule |
| Not reintroduced via the homepage, hub, related routes or sitemap | Sitemap and registry are clean. **One text inaccuracy remains in the hub** — see below |

**Nothing has been published at either slug**, so — as with the two withdrawn
airport-direction slugs — **no redirect is required.** They were reserved
strings in this document and nothing more.

**One correction owed at the start of Stage 2.** The published Riyadh hub's
intercity branch still names both routes in its `planned` array in
[`lib/content/riyadh/hub.ts`](../lib/content/riyadh/hub.ts), rendered as plain
text in the *"Being written:"* line. They are **text, not links**, so no link
points at a missing page — but the statement is now untrue and must be removed
when Stage 2 begins. It is not corrected in this documentation pass, because
the instruction for this pass was to update documentation and leave production
content alone.

Both routes may be reconsidered only by a separate strategic decision. The
research gathered for them — distances, durations, sources, and the unresolved
city-entry-rule question — is preserved in
[research/riyadh-batch-2-keyword-mapping.md](./research/riyadh-batch-2-keyword-mapping.md)
and
[research/sources-and-research-limitations.md](./research/sources-and-research-limitations.md).

## Resolved: railway station architecture

**The proposed three-page architecture was not justified, and is withdrawn.**
Verified 6 November 2026: Riyadh has **two** passenger railway stations, and
"Riyadh East" is an alias for the first of them, not a third station.

**Owner decision, 6 November 2026: one consolidated page**, built the same
day, with a substantial section per real station and the aliases used
naturally in the copy. **Both** `riyadh-east-station-transfers` and
`riyadh-north-station-transfers` are **withdrawn** — nothing was ever published
at either, so no redirect is required, the same as the two withdrawn
airport-direction slugs.

| Station | Line | Location |
| --- | --- | --- |
| Riyadh railway station — also published as *Riyadh East*, *Riyadh SRO*, *SAR Riyadh–Dammam*, *Malaz* | Dammam–Riyadh | Sinaiyah Qadeem, in the city |
| Riyadh North Station — locally *Thumamah*, also *Riyadh KKIA station* | Riyadh–Qurayyat | **At King Khalid International Airport**, ~35 km out |

The slug `riyadh-east-station-transfers` is **withdrawn, not deferred** —
nothing was ever published at it, so no redirect is required, the same as the
two withdrawn airport-direction slugs.

Recommendation (one page, a section per station), the fairly stated two-page
alternative, keyword mapping, linking plan and photography availability are in
[research/railway-architecture-validation.md](./research/railway-architecture-validation.md).
**Nothing is implemented until the owner approves an architecture.**

## Resolved: airport page architecture

**Status: approved, and built. Published 6 November 2026.**

The consolidation decision survived implementation intact: one URL, four
mandatory `<h2>` sections, no thin directional pages. The layout argues the
same case — arrivals and departures sit side by side as equal panels, both
always visible, so the page answers both directions at once.

"Riyadh Airport to Hotel Transfers" and "Riyadh Hotel to Airport Transfers"
are the same journey in two directions. Searchers phrase it both ways, but the
*answer* is nearly identical: same airport, same terminals, same hotels, same
vehicle categories. Two pages there would be two thin pages competing for one
intent, and the weaker would be treated as a near-duplicate.

The approved architecture is therefore **one** page:

| | |
| --- | --- |
| English | `/en/riyadh-airport-transfers/` |
| Arabic | `/ar/riyadh-airport-transfers/` |
| Route key | `riyadhAirport`, registered in `lib/i18n/routes.ts` with the page |
| Sitemap priority | 0.8 — level with the batch-1 routes, above batch 2 |
| Indexed | Yes |

It carries four required `<h2>` sections, which also serve as the in-page
anchor targets that absorb the directional phrasings:

| `<h2>` | Absorbs the intent of |
| --- | --- |
| Arrivals at King Khalid International Airport | "airport to hotel", "airport pickup Riyadh", meet-and-greet queries |
| Departures from Riyadh | "hotel to airport", "Riyadh airport drop-off", flight-timing queries |
| Hotel connections | Named-hotel queries in both directions |
| Onward intercity connections from the airport | "airport to Jeddah/Dammam/Al Khobar", landing-then-driving queries |

No separate thin pages are to be created for any of those four.

### Redirects

**None are required.** The slugs `riyadh-airport-to-hotel-transfers` and
`riyadh-hotel-to-airport-transfers` were only ever reserved in this document —
they were never registered in `lib/i18n/routes.ts`, never rendered, never
linked and never in the sitemap, so nothing has been published to redirect
from. Both slugs are now withdrawn rather than redirected.

If either URL is ever found live (for example from an earlier deployment
outside this repository), add a permanent redirect to
`/<locale>/riyadh-airport-transfers` in the `redirects()` block of
[`next.config.ts`](../next.config.ts), which already holds the root and
legacy-quote redirects. Use **308/permanent** there, not the 307s used for the
root, because a withdrawn URL is not coming back.

### Reflected in

- [`lib/content/riyadh/hub.ts`](../lib/content/riyadh/hub.ts) — the hub's
  airport branch now names one forthcoming page instead of three.
- [riyadh-internal-linking.md](./riyadh-internal-linking.md) — the batch-3
  linking obligations.
- [riyadh-keyword-checklist.md](./riyadh-keyword-checklist.md) — the airport
  keyword set is mapped to one URL with per-section secondaries.

## Cases that stay separate

Two cases are genuinely distinct and should stay separate:

- **Riyadh → Dammam** and **Riyadh → Al Khobar** share a road but not an
  intent: Dammam searches skew business and have a real rail alternative to
  weigh; Al Khobar searches skew leisure, the corniche and the Bahrain
  causeway. Both pages are published and their content reflects that split.
- ~~**Riyadh North** and **Riyadh East** stations serve different lines, so
  "which station do I need" is the actual question and a combined page would
  answer it worse.~~ **Superseded, 6 November 2026.** This rested on a factual
  error: **"Riyadh East" is not a separate station**, it is a widely used alias
  for the city station on the Dammam line. Riyadh has **two** passenger
  stations, not three. And on the substance the reasoning was inverted — if
  "which station do I need" is the question, both options must be visible to be
  compared, which argues for one page with a section per station. Evidence and
  recommendation in
  [research/railway-architecture-validation.md](./research/railway-architecture-validation.md);
  **awaiting owner approval.**
