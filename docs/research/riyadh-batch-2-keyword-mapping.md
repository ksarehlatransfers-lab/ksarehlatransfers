# Riyadh Batch 2 — keyword validation

> **Status: built and published, 4 November 2026.** All four routes are live in
> both languages. This document is now the record of what was targeted and
> why, not a plan. Keyword *measurement* is still outstanding — no volume or
> difficulty figure has ever been available in this environment, and the
> checklist in [../riyadh-keyword-checklist.md](../riyadh-keyword-checklist.md)
> is still the thing to run. Build notes, gate outcomes and the one correction
> made during the build are in
> [implementation-roadmap.md](./implementation-roadmap.md) §Stage 2.


> **Revised 4 November 2026 after the project owner's strategy decisions.**
> Batch 2 is now **four routes**, not six. Riyadh→Makkah and Riyadh→Madinah
> are **excluded from the current phase**. See
> [the exclusion record](#excluded-from-this-phase-makkah-and-madinah) below.

## Approved Batch 2

| # | Route | English URL | Arabic URL |
| --- | --- | --- | --- |
| 1 | Riyadh → Buraydah | `/en/riyadh-to-buraydah/` | `/ar/riyadh-to-buraydah/` |
| 2 | Riyadh → Taif | `/en/riyadh-to-taif/` | `/ar/riyadh-to-taif/` |
| 3 | Riyadh → Hail | `/en/riyadh-to-hail/` | `/ar/riyadh-to-hail/` |
| 4 | Riyadh → AlUla | `/en/riyadh-to-alula/` | `/ar/riyadh-to-alula/` |

**Eight localized URLs.** Built in English and Arabic together, in the order
above. All URLs carry a **trailing slash** — the mandatory convention recorded
in [riyadh-url-inventory.md](../riyadh-url-inventory.md).

## Standing constraint

**No search volume, keyword difficulty, CPC or ranking figure appears in this
document.** No keyword tool was available. Every recommendation rests on live
SERP composition, which was observed, and on route facts, which were sourced.
Demand *size* is unmeasured for all eight URLs.

---

## Excluded from this phase: Makkah and Madinah

**Decision: the project owner has excluded both routes from the current Riyadh
phase.** Recorded here so the research is not read as a standing
recommendation to build them.

| Requirement | Status in the documentation |
| --- | --- |
| Do not build either route page in Batch 2 | Removed from the approved list above and from [proposed-website-architecture.md](./proposed-website-architecture.md) |
| Do not include either route in the Batch 2 URL registry | Not to be added to `lib/i18n/routes.ts`. Recorded in [riyadh-url-inventory.md](../riyadh-url-inventory.md) |
| Do not add links to these unbuilt routes | Recorded in [riyadh-internal-linking.md](../riyadh-internal-linking.md) |
| Do not create pilgrimage-focused content for these destinations | Standing scope rule, unchanged |
| Do not silently reintroduce them via the homepage, Riyadh hub, related routes or sitemap | **One live inaccuracy to fix at Stage 2 — see below** |

### The one place they currently appear, and what to do about it

The published Riyadh hub lists both as forthcoming. In
[`lib/content/riyadh/hub.ts`](../../lib/content/riyadh/hub.ts) the intercity
branch's `planned` array contains `"Riyadh to Makkah"` and
`"Riyadh to Madinah"`, rendered as plain text in the hub's *"Being written:"*
line. They are **text, not links** — so no link to an unbuilt page exists, and
the sitemap and route registry are both clean.

But the text now says two pages are being written that are not being written.
**That must be corrected when Stage 2 begins.** It is not corrected now,
because the owner's instruction for this pass is to update documentation and
not modify production content. Logged as a required Stage 2 edit in
[implementation-roadmap.md](./implementation-roadmap.md).

### Pre-existing content referencing these cities as destinations

**Resolved by the owner, 4 November 2026.** Hajj and Umrah transfers are part
of the **nationwide** service and stay on the homepage; dedicated pilgrimage
pages are a later phase. So decision 1 is read narrowly and correctly: it
excludes the two **Riyadh route pages**, not the nationwide positioning.

| Where | What it is | Disposition |
| --- | --- | --- |
| `lib/content/destinations.ts` | Makkah and Madinah destination cards on the homepage | **Stays.** Destination cards, not routes. No link to an excluded page |
| `lib/content/navigation.ts` | "Makkah" and "Madinah" in the Destinations menu, marked `planned`, rendered as text. The Makkah entry's description reads *"Pilgrimage transfers"* | **Stays.** Renders as text, not a link, and the pilgrimage framing is the nationwide service, which is approved |
| Homepage pilgrimage section + footer "Pilgrimage" column | Hajj / Umrah / Ziyarat content linking to homepage anchors | **Stays.** Confirmed in scope by the owner. Pages to be built in a later phase |

None of it has been touched, and none of it now needs to be. The one thing
that *does* still need correcting is the Riyadh hub's `planned` array naming
the two withdrawn routes as "being written" — that is a factual inaccuracy
about unbuilt pages, not pilgrimage positioning, and it is a Stage 2 edit.

**What the exclusion still forbids:** building `/riyadh-to-makkah/` or
`/riyadh-to-madinah/`, registering either slug, linking to either, and writing
pilgrimage-focused *route* content for those two destinations.

### If they are reconsidered later

The research already gathered is preserved and still valid: Makkah is ~870 km
and 8.5–10 hours on Highway 40 west; Madinah is ~835 km and 7.5–8.5 hours via
Qassim, with Highway 60 running west from Buraydah. Sources are in
[sources-and-research-limitations.md](./sources-and-research-limitations.md)
§Part 3. Two findings would matter to any future decision:

1. **Makkah is the only Batch-2-candidate route the market leader actually
   covers**, and their page is their thinnest Riyadh route (1,052 words, four
   H2s, no FAQ schema).
2. **Madinah has no commercial competitor page at all** —
   `/routes/riyadh-madinah/` returns 404; only a templated distance page
   exists.
3. **Makkah and Madinah city-entry rules were never satisfactorily sourced.**
   The best available were a car-hire marketing page and a blog. No official
   Saudi government source was reached. Any future page would need that
   resolved first.

---

## Competitive position of the four approved routes

Verified by HTTP probe on 4 November 2026 against taxiserviceksa.com
(~1,230 submitted URLs, the strongest competitor in this market):

| Route | Their commercial page | Their informational page |
| --- | --- | --- |
| Riyadh → Buraydah | ❌ **404** | ❌ **404** |
| Riyadh → Taif | ❌ **404** | ✅ `/distance/riyadh-to-taif/` |
| Riyadh → Hail | ❌ **404** | ❌ **404** |
| Riyadh → AlUla | ❌ **404** | ✅ `/distance/riyadh-to-alula/` |

**The market leader has no commercial page for any of the four approved
routes.** Two have no coverage whatsoever.

## Route facts used

Every figure is a **range from multiple independent sources**, following the
practice established in Batch 1. Full citations in
[sources-and-research-limitations.md](./sources-and-research-limitations.md).

| Route | Distance (range) | Publish as | Driving time | Main road |
| --- | --- | --- | --- | --- |
| → Buraydah | 355–380 km | **~360 km** | 3.5 hrs | Highway 65 north |
| → Taif | 788–795 km | **~790 km** | 8–9 hrs | Highway 40 west |
| → Hail | 620–640 km | **~630 km** | 6–7 hrs | Highway 65 north via Qassim |
| → AlUla | 920–1,055 km | **~1,050 km** | 10–12 hrs | Hwy 65 via Qassim and Hail |

## Modal competition — checked per route

The specification asked whether users primarily search for flights, trains or
private road transfers. It mattered more than expected.

| Route | Flight? | Train? | Verdict |
| --- | --- | --- | --- |
| → Buraydah | Yes (~1h) | **Yes — SAR North line, Qassim station** | **Genuine three-way choice** |
| → Taif | Yes, direct (~1h40m) | No | Road competitive, especially families and seasonal travel |
| → Hail | Yes | **Yes — SAR North line, Hail station** | **Genuine three-way choice** |
| → AlUla | **Yes — and it dominates the SERP.** ~1h10m direct | No | **Flying is the default.** The page must say so |

### The rail finding

The SAR **North line** carries passengers Riyadh → Majmaah → **Qassim** →
**Hail** → Al-Jouf → Al-Qurayyat, roughly 1,250 km, six operational stations
(a seventh planned at Al-Zulfi). Verified across several sources.

Two consequences:

1. **Buraydah and Hail each have a real rail alternative**, exactly like
   Dammam. Our existing honest road-vs-rail comparison pattern applies
   directly, and recommending the train where it suits is the differentiator
   that already works on the Dammam page.
2. **It creates reciprocal internal linking** between the future Riyadh
   railway station pages and these two route pages — a structural
   advantage no competitor has, because none of them has any of those pages.

**Caveat:** sources disagree on opening dates and on Al-Jouf service
frequency. The pages must state only that the line and stations exist and
refer readers to the operator for schedules and fares — the same discipline the
published Dammam page already uses.

---

# Route-by-route

## 1. Riyadh → Buraydah

`/en/riyadh-to-buraydah/` · `/ar/riyadh-to-buraydah/`

**English primary:** `riyadh to buraydah private transfer`
**Arabic primary:** `نقل خاص من الرياض إلى بريدة`

| | |
| --- | --- |
| **SERP observed** | `"Riyadh to Buraydah" taxi private car transfer booking` → **daytrip.com ×12, blacklane.com ×3**, city-airport-taxis. **No Saudi operator at all.** Arabic: `نقل خاص من الرياض إلى القصيم بريدة` → **entirely classified ads** (mourjan ×6, mstaml, sabbar) |
| **Intent split** | Commercial, practical/regional. Informational tail is small — it is a short, well-known drive |
| **Reverse direction** | **Confirmed** — Blacklane and Daytrip both publish *Buraidah → Riyadh* pages, and an Arabic listing quotes "التوصيل من بريدة إلى الرياض 400 ريال". Return-leg H2, **not** a second URL |
| **Secondaries EN** | riyadh to buraydah by car · riyadh to qassim transfer · riyadh buraydah distance · highway 65 |
| **Secondaries AR** | توصيل من الرياض إلى بريدة · مشوار الرياض القصيم · نقل خاص إلى القصيم |
| **Dedicated page?** | **Yes — highest-opportunity route in the batch.** Zero competitor coverage, and the incumbents are international aggregators publishing **prices that contradict their own other pages** (US$56 vs US$261 for the same route) |
| **Confidence** | **High** — both an English and an Arabic SERP were run |

**Content that would genuinely help.** An honest car-or-train comparison, since
Qassim is a station on the SAR North line — the same pattern that already works
on the Dammam page. Same-day return as a real product: at ~3.5 hours each way
this is the one Batch 2 route where "wait and bring me back" is the natural
offer. Reaching Unaizah, Ar Rass and Al Bukayriyah, because in Qassim the
region matters more than the city. A note on the date-harvest season, when
Buraydah's date market draws heavy regional traffic — stated as a seasonal
observation, **not** as any claim about our availability.

**Arabic decision.** Keep `بريدة` in the slug and H1 for hreflang symmetry with
the English URL; make `القصيم` a prominent secondary in H2s and body copy.
Arabic local search appears to favour the region name more than English does —
the Arabic SERP returned region-level pages — but this needs tool confirmation.

## 2. Riyadh → Taif

`/en/riyadh-to-taif/` · `/ar/riyadh-to-taif/`

**English primary:** `riyadh to taif private transfer`
**Arabic primary:** `نقل خاص من الرياض إلى الطائف`

| | |
| --- | --- |
| **SERP observed** | `Riyadh to Taif distance km driving time` → rome2rio ×10, himmera, airmilescalculator. `"Riyadh to Taif" private transfer taxi car booking price` → aaa.com/tripcanvas, daytrip, wingie, lokalee, airportstaxitransfers — **and taxiserviceksa's Riyadh–Jeddah page**, because they have no Taif page |
| **Intent split** | Commercial, leisure-weighted, **seasonal** |
| **Reverse direction** | Daytrip lists **Taif → Riyadh** (784 km, 7h20m), suggesting both directions have demand. Return-leg H2 |
| **Secondaries EN** | riyadh to taif by road · riyadh taif distance · taif mountain road · al hada road |
| **Secondaries AR** | توصيل من الرياض إلى الطائف · مشوار الرياض الطائف · طريق الهدا |
| **Dedicated page?** | **Yes — high priority.** A competitor's *wrong-route* page surfacing for this query is as clear a gap signal as exists |
| **Confidence** | **High** — a SERP was run for the exact commercial phrase |

**Content that would genuinely help.** The altitude change and what it means in
practice (cooler summers, which is why the route is seasonal). The Al Hada
road's character — a long escarpment climb with many hairpin bends. Whether we
continue to Al Hada or Al Shafa beyond the city. Family luggage for an 8–9 hour
drive. Onward continuation to Jeddah, since the Taif junction is already a
named stage on our Jeddah page.

**Sourcing caution.** Specific figures circulating for the Al Hada road — a
"93 curves" count, a 2,177 m elevation, a 21 km descent — come from tourism
blogs and conflict with each other. **Publish the character of the road, not
contested numbers**, or give a range and say sources disagree. Saudipedia is
the strongest source found and should be checked directly before any figure is
published.

**Note on onward links.** With Makkah excluded, the Taif page's natural onward
links are the **Riyadh hub** and **Riyadh→Jeddah** (shared Highway 40 corridor
and the Taif junction). It must **not** link to an unbuilt Makkah page.

## 3. Riyadh → Hail

`/en/riyadh-to-hail/` · `/ar/riyadh-to-hail/`

**English primary:** `riyadh to hail private transfer`
**Arabic primary:** `نقل خاص من الرياض إلى حائل`

| | |
| --- | --- |
| **SERP observed** | `"Riyadh to Hail" taxi private transfer car with driver booking` → **daytrip.com ×16.** Sixteen of sixteen results from one brand. The least contested SERP in the entire study |
| **Intent split** | Commercial, long-distance. Also an AlUla-stage intent |
| **Reverse direction** | Daytrip publishes Hail → Riyadh. Return-leg H2 |
| **Secondaries EN** | riyadh to hail by car · riyadh hail distance · riyadh to hail drive · highway 65 north |
| **Secondaries AR** | توصيل من الرياض إلى حائل · مشوار الرياض حائل · الطريق إلى حائل |
| **Dedicated page?** | **Yes.** Zero competitor coverage and a single-aggregator SERP |
| **Confidence** | High on the gap; **low** on standalone demand — see below |

**The honest caveat on this route.** Hail may be substantially an *AlUla-stage*
intent rather than a destination intent. A published itinerary treats Riyadh →
Hail as day one of a Riyadh → AlUla road trip. The approved build order places
Hail **immediately before** AlUla, which suits this: build them as a pair and
cross-link them hard. If measurement later shows Hail is almost entirely an
AlUla-stage intent, its page's main job is to serve that journey — which the
ordering already accommodates.

**Content that would genuinely help.** The two-route choice, which is a real
and answerable question: roughly 620 km via Zulfi, Buraydah and Al Shanan
(~6 hrs), or roughly 731 km via Al Muzahimiyah, Shaqra and Al-Nabhaniyah
(~8 hrs), per a Saudi roads-authority summary. A genuine six-hour-drive
preparation section. Car-or-train, since Hail is a North line station. Hail as
the overnight stage to AlUla. What is actually in Hail — the Jubbah rock art
(UNESCO-inscribed 2015, about 90 km north-west of the city), A'arif Fort, the
Aja mountains — stated as destination context, **not** as tours we operate.

**Sourcing caution.** A'arif Fort's dating is contested (1840 vs "17th
century"). Publish no date.

## 4. Riyadh → AlUla

`/en/riyadh-to-alula/` · `/ar/riyadh-to-alula/`

**English primary:** `riyadh to alula private transfer`
**Arabic primary:** `نقل خاص من الرياض إلى العُلا`

| | |
| --- | --- |
| **SERP observed** | `Riyadh to AlUla distance km driving time road trip` → rome2rio, **12go, wingie ×8, flynas, skyscanner**, airmilescalculator, banyantree, mustseespots. `Riyadh to AlUla flight vs drive` → overwhelmingly airlines and flight metasearch |
| **Intent split** | **Flight-dominated.** The one approved route where the road is not the default answer |
| **Reverse direction** | Real but likely also flight-led |
| **Secondaries EN** | riyadh to alula by road · riyadh alula distance · riyadh to alula drive or fly · alula road trip |
| **Secondaries AR** | توصيل من الرياض إلى العلا · الطريق من الرياض إلى العُلا · الرياض العلا بالسيارة |
| **Dedicated page?** | **Yes — but reframed.** Not "book a 12-hour drive". A drive-or-fly decision page that also offers the AlUla-airport transfer |
| **Confidence** | **High** on the flight dominance — two SERPs confirmed it |

**The owner has made the honest drive-versus-flight comparison a requirement
for this page.** Concretely that means: direct flights run about 1h10m against
10–12 hours of driving; say plainly that most people should fly; say who the
drive genuinely suits (people who want the road, who are carrying things a
flight will not take, or who are stopping along the way). Then offer what
actually converts — **the AlUla-airport transfer at the far end**, and the
two-day split with an overnight at Hail, since the fastest road route runs
through Qassim and Hail (~640 km / ~6 hrs, then ~360 km / ~4 hrs).

**Do not publish the "~20 flights per week" figure.** Single source, and flight
frequencies change. Say flights are frequent and direct, and refer readers to
the airlines.

**Variant note.** Arabic users type both العُلا and العلا. **One page.** The
correct form goes in the H1 and metadata; the variant appears naturally in body
copy.

---

## Consolidated recommendation

| Order | Route | Why this position |
| --- | --- | --- |
| **1** | Buraydah | Zero competitor coverage; both SERPs run; rail comparison ready; same-day-return product; shortest page to write |
| **2** | Taif | Competitor's wrong page surfacing for the query; unoccupied; strong visual concept; facts in hand and an image already held |
| **3** | Hail | Single-aggregator SERP; sits immediately before AlUla because the two are one journey |
| **4** | AlUla | Flight-dominated, so it is the hardest page to get right — and it benefits from the Hail page existing first |

All four deserve a dedicated page. **None should be merged** — each has a
distinct destination, a distinct journey length and a distinct modal question.

Build **all four in English and Arabic together**, per the owner's instruction,
rather than shipping English first and Arabic later.

## Internal linking within the approved set

No link may point at an unbuilt page, so the link graph for these four is:

| From | Links to |
| --- | --- |
| Buraydah | Riyadh hub · **Hail** (Highway 65 continues north; Buraydah is a stage) · Riyadh→Dammam *(published)* · quote |
| Taif | Riyadh hub · **Riyadh→Jeddah** *(published — shared corridor, Taif junction)* · quote |
| Hail | Riyadh hub · **Buraydah** (midpoint) · **AlUla** (Hail is the overnight stage) · quote |
| AlUla | Riyadh hub · **Hail** (the road runs through it) · **Buraydah** (first stage) · quote |

Reciprocal, no orphans, and nothing pointing at Makkah, Madinah, the airport
page or the railway pages until those exist. English links stay on English
pages and Arabic on Arabic, except the language switcher.

## Validation checklist before writing

- [ ] Volume and difficulty for all eight primaries, Saudi locale, EN and AR
      separately.
- [ ] **Re-run every Arabic SERP from a Saudi locale** — ours were run from a
      US-located environment and Arabic SERPs are strongly locale-sensitive.
- [ ] Measure whether **Hail** is a destination intent or an AlUla-stage
      intent; it changes the page's job, though not its position in the order.
- [ ] Confirm **القصيم vs بريدة** weighting in Arabic.
- [ ] Measure reverse-direction demand on all four; each becomes an H2, never a
      URL.
- [ ] Check the official **SAR** references for the North line before
      publishing any rail comparison. Station existence is verified; schedules
      and frequencies are not and must not be published.
- [ ] Verify Al Hada road figures against **Saudipedia** directly, or publish
      none.
- [ ] Source **Buraydah** and **Hail** hero images, and pin the **Highway 65**
      photograph already identified.

~~Resolve the Makkah and Madinah pilgrimage-intent question~~ — **resolved by
the owner's decision to exclude both routes from this phase.**
