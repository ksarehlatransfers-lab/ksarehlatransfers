# Riyadh cluster — internal linking matrix

Links are generated from the route registry in
[`lib/i18n/routes.ts`](../lib/i18n/routes.ts), so a slug change moves every
link that points at it. English and Arabic link sets are entirely separate:
an `/ar` page never links to an `/en` page, with one deliberate exception —
the language switcher, which is the only element allowed to cross locales and
is the only link carrying `hrefLang`.

The QA crawl enforces both rules and fails on a cross-locale link or a link to
an unregistered page.

## Matrix

Rows link to columns. `H` = header navigation, `F` = footer, `B` = breadcrumb,
`C` = contextual in-body link.

| From ↓ / To → | Home | Hub | Jed | Dam | Khb | Bur | Taif | Hail | AlUla | Quote |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Home** | — | H F | H F C | H F C | H F C | H F | H F | H F | H F | H F C |
| **Riyadh hub** | H F B | — | H F C | H F C | H F C | H F C | H F C | H F C | H F C | H F C |
| **Riyadh → Jeddah** | H F B | H F B C | — | H F C | H F C | H F | H F | H F | H F | H F C |
| **Riyadh → Dammam** | H F B | H F B C | H F C | — | H F C | H F | H F | H F | H F | H F C |
| **Riyadh → Al Khobar** | H F B | H F B C | H F C | H F C | — | H F | H F | H F | H F | H F C |
| **Riyadh → Buraydah** | H F B | H F B C | H F | H F C | H F | — | H F | H F | H F | H F C |
| **Riyadh → Taif** | H F B | H F B C | H F C | H F | H F | H F | — | H F | H F | H F C |
| **Riyadh → Hail** | H F B | H F B C | H F | H F | H F | H F C | H F | — | H F C | H F C |
| **Riyadh → AlUla** | H F B | H F B C | H F | H F | H F | H F C | H F | H F C | — | H F C |
| **Quote** | H F C | H F | H F | H F | H F | H F | H F | H F | H F | — |

Every route now reaches every other route through the header group and the
footer column, so there is no path longer than two clicks inside the cluster.
The **C** cells are the ones that carry editorial weight — a contextual link
with a reason beside it — and they were chosen per route rather than applied
mechanically.

## Mandatory rules and where each is satisfied

| Rule | Where |
| --- | --- |
| Every route page links to the Riyadh hub | Breadcrumb (every page) **and** the first entry of its "related journeys" block |
| Every route page links to its destination city hub where one exists | No destination city hub is published yet. Nothing links to an unbuilt page; the Riyadh hub names them as plain text under "being written" |
| Intercity pages link to related routes where genuinely useful | Each route page's related block carries the other two, with a line saying why you would go there |
| Riyadh East station links to Dammam and Al Khobar | **Met, 6 November 2026.** The obligation was recorded under a misnomer — "Riyadh East" is an alias for the city station on the Dammam line, not a separate station. The railway page's city-station section links to **both** `/riyadh-to-dammam/` and `/riyadh-to-al-khobar/`, each with its own reason |
| Riyadh North section links to Qassim and Hail route pages | **Met, 6 November 2026.** The North line serves Qassim (the station for Buraydah) and Hail, so that section links to `/riyadh-to-buraydah/` and `/riyadh-to-hail/` — and to `/riyadh-airport-transfers/`, because the station is ~13 km from the terminals |
| Airport page ⇄ railway page | **Met, both directions.** The airport page's related block points at the railway page with the 13 km figure; the railway page's north-station section points back |
| Airport page links to hotel and railway pages | **Met, 6 November 2026.** Both pages now exist and the airport page links to both from its related block, each with its own reason. The hotel section's "a fuller page is being written" line was replaced the same day |
| All pages link to the quote page | Header CTA, footer, and at least one in-body CTA per page |
| No orphan pages | Verified by the crawl: every indexable URL is linked from at least one other page |
| No excessive exact-match anchor text | Anchors use the destination's own name plus a descriptive line. The homepage's intercity cards link on the route name once, not on a repeated "Riyadh to Jeddah private transfer" phrase |

## Batch 3 — the consolidated airport page — **BUILT, 6 November 2026**

One URL, `/<locale>/riyadh-airport-transfers/`, approved in
[riyadh-url-inventory.md](./riyadh-url-inventory.md). The obligations below
were fixed before the page was written; here is how each was met:

| Direction | Obligation |
| --- | --- |
| Airport page → Riyadh hub | Breadcrumb **and** a contextual link. It is a child of the hub, not a sibling. |
| Airport page → each published intercity route | Contextual, inside the "onward intercity connections" `<h2>`. Anchor on the destination name plus the reason, as elsewhere. |
| Airport page → hotel page | Contextual, from the "hotel connections" `<h2>` — **only once batch 5 publishes it.** Until then that section names hotels as text with no link, the same pattern the hub already uses. |
| Airport page → railway pages | Contextual — **only once batch 4 publishes them.** |
| Airport page → quote page | Header CTA, footer, and a page-specific in-body CTA with its own wording. |
| Riyadh hub → airport page | Promote the hub's airport branch from a "being written" text note to a real card link. **This is the one edit to an existing page that batch 3 must make**, and it is the only thing currently stopping the airport branch from being a live link. |
| Each published route page → airport page | Add to the "related journeys" block where the journey genuinely starts at the airport. Review all nine route pages when the airport page lands; do not add it mechanically to every one. |
| Homepage services section → airport page | The "Airport transfers" footer and services links currently point at a homepage anchor. Repoint them at the airport page. |

### How each obligation was met

| Obligation | Outcome |
| --- | --- |
| Airport → Riyadh hub | **Done** — breadcrumb and the first related-journeys card |
| Airport → each published intercity route | **Done** — all **seven** routes, each a card in the onward-connections `<h2>` with its own reason, anchored on the destination rather than a repeated keyword |
| Airport → hotel page | **Not linked**, correctly: the page does not exist. The hotel-connections section names hotels as text and says a fuller page is being written — the pattern the hub already used |
| Airport → railway pages | **Not linked**, correctly: they do not exist |
| Airport → quote page | **Done** — header CTA, footer, hero button and a page-specific closing CTA |
| Riyadh hub → airport page | **Done.** The hub's airport branch is promoted from a "being written" note to a live link with `routeKey` and a meta line. This was the one required edit to an existing page |
| Each published route page → airport page | **Deliberately not done.** The obligation said to review all route pages and "do not add it mechanically to every one". Reviewed: no route page's body has a natural reason to send a reader to the airport — they are origin-to-destination pages, and the airport is a *pickup point* for them, which is the direction the airport page already covers. All seven are reachable from the header group and footer column. Revisit if Search Console shows airport-qualified queries landing on route pages |
| Homepage / footer "Airport transfers" link | **Partly repointed, deliberately.** See below |

### The one deviation from the plan, and why

The plan said to repoint the footer and homepage "Airport transfers" links at
this page. Only the footer has such a link, and it sits in the **Services**
column, which describes the *nationwide* airport service across Riyadh,
Jeddah, Madinah, Dammam and Abha. Pointing it at a Riyadh-only page would be
the wrong answer for four of those five airports.

So instead: **"Riyadh airport transfers" was added to the Riyadh column** of
the footer and to the header's Riyadh group, and the nationwide Services entry
still points at the nationwide services section. The homepage's service cards
carry no individual links, so there was nothing there to repoint.

When a nationwide airport page exists, the Services entry should point at
*that*, with this page as its Riyadh child.

The crawl fails on a link to an unregistered route, which is the mechanism
that enforced all of this.

## Trailing-slash convention

**Owner decision, 4 November 2026 — implemented the same day.** Every
internal link targets a trailing-slash URL. Because every link on the site is
generated from `href()` → `localePath()`, this was one change in one function
rather than a sweep through components. The one hand-built path, the language
switcher, now goes through `localePath()` too.

A link that produces a redirect is a link that leaks, so
[`scripts/qa-crawl.mjs`](../scripts/qa-crawl.mjs) asserts that **no internal
link redirects** and that **no internal href is slashless**. Both pass. Detail
in [research/implementation-roadmap.md](./research/implementation-roadmap.md)
§Stage 0; convention recorded in
[riyadh-url-inventory.md](./riyadh-url-inventory.md).

## Excluded routes — no links, now or later

**Riyadh→Makkah and Riyadh→Madinah are excluded from the current phase.** No
internal link may point at either, in either language, from any page —
including the related-journeys blocks, the Riyadh hub's branch cards, the
homepage intercity section, the navigation and the footer.

Nothing links to them today. The only trace is the Riyadh hub's `planned`
array, which names them as text in the "Being written:" line; that text must be
removed when Stage 2 begins, as recorded in the URL inventory.

The practical consequence for Stage 2: the **Taif** page's natural onward link
would have been Makkah (shared Highway 40 corridor and the Taif junction). With
Makkah excluded, Taif links to the **Riyadh hub** and to the published
**Riyadh→Jeddah** page instead, where the Taif detour is already a named stage.

## Stage 2 link graph — **built, 4 November 2026**

Reciprocal, no orphans, and nothing pointing at a page that does not exist.
Because all four shipped in one pass, the "add each link as its target ships"
rule below was satisfied at once rather than in sequence:

| From | Links to |
| --- | --- |
| **Buraydah** | Riyadh hub (breadcrumb + related) · **Hail** (Highway 65 continues north; Buraydah is a stage of that journey) · Riyadh→Dammam *(published)* · quote |
| **Taif** | Riyadh hub · **Riyadh→Jeddah** *(published — shared corridor, Taif junction)* · quote |
| **Hail** | Riyadh hub · **Buraydah** (the midpoint) · **AlUla** (Hail is the overnight stage) · quote |
| **AlUla** | Riyadh hub · **Hail** (the road runs through it) · **Buraydah** (the first stage) · quote |

All four shipped together, so every link above is live and none ever pointed
at a missing page. Verified by the crawl, which fails on any link that does
not answer 200.

**One link in the plan was not built.** Buraydah was to link to
Riyadh→Dammam as "the other route where the train is a genuine alternative",
and it does. Taif was to link to Riyadh→Jeddah, and it does. But the plan also
had Buraydah→Hail *and* Hail→Buraydah as a reciprocal pair, and only
Hail→Buraydah carries a contextual link: on the Buraydah page, Hail is a
longer journey the reader has no reason to want, while on the Hail page
Buraydah is genuinely the midpoint. The header and footer still connect both
directions. Reciprocity in the navigation, editorial judgement in the body.

## Private driver hire — blocked, not scheduled

`/en/private-driver-hire/` · `/ar/private-driver-hire/`

| Direction | Obligation |
| --- | --- |
| → Riyadh hub | Breadcrumb and a contextual link |
| → published route pages | Only from the "can it leave the city" context, **and only if that arrangement is confirmed** — see the operational gate |
| → airport page | **Now available** — the airport page shipped 6 November 2026, so a driver-hire page may link to it |
| → quote | Header CTA, footer, and a page-specific in-body CTA |
| Riyadh hub → this page | Add a service entry once it ships |
| Hotel page → this page | At the hotel stage: a day of meetings is day hire, not four transfers |

## The railway page — **BUILT, 6 November 2026**

One page, two station sections. The North line serves Qassim and Hail; the
East line serves Dammam. Both halves of the old requirement are now met from
within a single URL:

| Section | Links to |
| --- | --- |
| Riyadh North (North Train) | **Buraydah** and **Hail** route pages, plus the **airport** page |
| Riyadh railway station / Riyadh East (East Train) | **Dammam** and **Al Khobar** route pages |

This satisfies the pre-existing "Riyadh East station links to Dammam and Al
Khobar" requirement, extended north — without the two extra URLs the original
roadmap assumed, because `riyadh-east-station-transfers` was never a real
station and `riyadh-north-station-transfers` is a section rather than a page.
No competitor holds any of this.

## Entry points into the cluster

- **Header** — a "Riyadh routes" group listing the hub and all three routes,
  in both languages.
- **Footer** — a "Riyadh transfers" column with the same four links.
- **Homepage, intercity section** — the three route cards that have pages now
  link to them; the other three routes still point at the quote page, so no
  card is a dead end.
- **Homepage, destinations menu** — "Riyadh" links to the hub. The other seven
  cities are marked `planned` and render as text, not links.

## Anchor text used

| Target | English anchors | Arabic anchors |
| --- | --- | --- |
| Riyadh hub | Riyadh; All Riyadh transfers; Riyadh transfers | الرياض؛ جميع خدمات الرياض؛ خدمات النقل في الرياض |
| Jeddah route | Riyadh to Jeddah; Route details | الرياض إلى جدة؛ تفاصيل المسار |
| Dammam route | Riyadh to Dammam; Route details | الرياض إلى الدمام؛ تفاصيل المسار |
| Al Khobar route | Riyadh to Al Khobar; Route details | الرياض إلى الخبر؛ تفاصيل المسار |
| Quote | Request a quote; Get a quote; plus a different page-specific CTA button on every page | اطلب عرض سعر؛ وزر دعوة مختلف في كل صفحة |

Each page's primary CTA button carries its own wording — "Get a Jeddah
transfer quote", "Request a Dammam quotation", "Get an Al Khobar quote",
"Get a Riyadh quote" — so the conversion link is never six identical buttons.
