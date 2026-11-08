# Riyadh cluster — keyword research checklist

A working checklist for whoever runs the cluster through a real keyword tool.
It records what has been **decided** (the primary per URL, the secondaries, the
intent) and what is still **unmeasured** (everything numeric).

Companion to [riyadh-keyword-mapping.md](./riyadh-keyword-mapping.md), which
holds the mapping for the pages that are already published. This document adds
the checklist discipline and extends the mapping to the pages not yet written.

## Ground rules

1. **No volume or difficulty figure appears anywhere in this repository.** No
   research tool was available in this environment. A plausible-looking number
   would be a fabrication, and a fabricated number is worse than a blank cell
   because it gets planned against.
2. **Do not rewrite a published page on the strength of an assumption.** The
   batch-1 pages were written to observed SERP intent, which was checked. They
   stay as they are until measured data says otherwise.
3. **Measure English and Arabic separately.** They are different markets with
   different competitors, not one keyword translated twice. Arabic route
   searches are dominated by classified-ad listings from individual drivers;
   English ones by route planners and aggregators.
4. **One primary intent per URL.** If two candidates share an intent, the
   weaker becomes a secondary on the same page. The airport page is the worked
   example — see [riyadh-url-inventory.md](./riyadh-url-inventory.md).

## How to run the pass

For each row in the tables below:

- [ ] Pull monthly volume for the primary, English and Arabic separately, in
      the Saudi Arabia locale (not global, and not "Arabic" as a language with
      no country).
- [ ] Pull difficulty / competition for the primary.
- [ ] Pull the top 20 related terms and note any that are a **different**
      intent from the page's primary — those are candidate pages, not
      secondaries.
- [ ] Check the live SERP for the primary and record whether the results are
      transactional, informational or a mix. Where they are informational, the
      page must answer before it sells.
- [ ] Record whether an incumbent commercial operator ranks. None did in the
      November 2026 check; that is the whole opportunity and it will not last.
- [ ] After launch, replace the tool's guesses with Search Console query data
      for the same URL and reconcile the two.

Record results **outside** this repository, or in a new dated file beside it.
Do not edit the decided columns below to match a volume figure without saying
why in the QA report.

## Published pages — batch 1

Decided. Awaiting measurement only.

| URL | Primary | Secondaries | Intent |
| --- | --- | --- | --- |
| `/en/riyadh/` | riyadh private transfers | riyadh airport transfer, car with driver riyadh, riyadh intercity transfer | Category / navigational |
| `/en/riyadh-to-jeddah/` | riyadh to jeddah private transfer | riyadh to jeddah by road, riyadh jeddah distance, riyadh to jeddah car | Commercial with a heavy informational tail |
| `/en/riyadh-to-dammam/` | riyadh to dammam private transfer | riyadh to dammam by car, riyadh dammam distance, riyadh to dammam train or car | Commercial + comparison |
| `/en/riyadh-to-al-khobar/` | riyadh to al khobar private transfer | riyadh to khobar car, riyadh khobar distance, riyadh to bahrain causeway transfer | Commercial, leisure-weighted |
| `/ar/riyadh/` | نقل خاص في الرياض | سيارة مع سائق الرياض، توصيل من مطار الرياض، مشاوير الرياض | Category / navigational |
| `/ar/riyadh-to-jeddah/` | نقل خاص من الرياض إلى جدة | توصيل من الرياض الى جدة، مشوار الرياض جدة، المسافة بين الرياض وجدة | Commercial + informational |
| `/ar/riyadh-to-dammam/` | نقل خاص من الرياض إلى الدمام | توصيل من الرياض للدمام، الرياض الدمام بالسيارة، قطار أو سيارة الرياض الدمام | Commercial + comparison |
| `/ar/riyadh-to-al-khobar/` | نقل خاص من الرياض إلى الخبر | توصيل الرياض الخبر، مشوار الرياض الخبر، جسر الملك فهد نقل | Commercial, leisure-weighted |

## Published pages — batch 2 (four intercity routes)

**Built and published 4 November 2026.** Batch 2 was **four** routes.
Riyadh→Makkah and Riyadh→Madinah are **excluded from the current phase** by
owner decision — not targeted, registered or linked, and no pilgrimage-focused
content for either destination. See
[riyadh-url-inventory.md](./riyadh-url-inventory.md).

The primaries below are the ones the published pages target. They were chosen
from observed SERP composition and competitor gaps, **not** from volume data,
which remains unavailable. Measuring them is still outstanding — the
difference now is that Search Console will have its own data for these URLs
within weeks, which is better than any tool estimate.

| Build | Slug | English primary (as published) | Arabic primary (as published) | Intent to verify |
| --- | --- | --- | --- | --- |
| 1 | `riyadh-to-buraydah` | riyadh to buraydah private transfer | نقل خاص من الرياض إلى بريدة | Commercial, regional / practical. Check whether **القصيم** (the region) outranks **بريدة** (the city) in Arabic |
| 2 | `riyadh-to-taif` | riyadh to taif private transfer | نقل خاص من الرياض إلى الطائف | Commercial; strong seasonal leisure component (summer, the highland resorts) — check for seasonality, not just an annual average |
| 3 | `riyadh-to-hail` | riyadh to hail private transfer | نقل خاص من الرياض إلى حائل | Commercial, long-distance. Check whether Hail demand is largely a leg of AlUla trips, which changes what the page is for |
| 4 | `riyadh-to-alula` | riyadh to alula private transfer | نقل خاص من الرياض إلى العُلا | Commercial, tourism. **Flight demand dominates the observed SERP** — the owner has made an honest drive-versus-flight comparison mandatory on this page |

Additional per-route items for this batch:

- [ ] For every route, check the **distance** query ("riyadh to X distance",
      "المسافة بين الرياض و…") separately. On the batch-1 pages that query is a
      real share of the traffic and is answered in the stat band.
- [ ] Check the **reverse direction** ("jeddah to riyadh", "مكة إلى الرياض").
      If reverse demand is substantial it is a return-leg H2 on the same page,
      not a new URL — the same consolidation logic as the airport page.

## Blocked page — private driver hire

One URL pair, `/en/private-driver-hire/` and `/ar/private-driver-hire/`.
**Approved scope: hourly and full-day hire only.** Weekly and monthly hire are
**not approved** and must not be targeted.

| Mapped to | English candidates | Arabic candidates |
| --- | --- | --- |
| Primary (page) | hire a private driver riyadh | استئجار سيارة مع سائق في الرياض |
| `<h2>` Hourly | hourly driver riyadh, private driver by the hour | سائق خاص بالساعة |
| `<h2>` Full day | car with driver by the day, full day driver hire | سائق خاص يومي |
| Secondary | private driver hire saudi arabia, chauffeur service riyadh | سيارة مع سائق |
| **Excluded** | ~~weekly driver hire~~, ~~monthly driver hire~~ | ~~مشاوير شهرية~~, ~~سائق خاص شهري~~ |

- [ ] Confirm `chauffeur service riyadh` and
      `استئجار سيارة مع سائق` intent is **transfer**-led, not car-**rental**-led.
      Both observed SERPs were held by OneClickDrive, a rental marketplace. If
      the intent is predominantly rental, de-prioritise it as a primary.
- [ ] Confirm `سائق خاص` SERPs are service-led, not **job**-led — two of our
      Arabic searches returned recruitment ads for that phrase.

**This page is blocked on operational verification, not on keywords.** Ten
facts must be confirmed with the driver partners first; the gate is in
[research/implementation-roadmap.md](./research/implementation-roadmap.md)
§Private driver hire.

## Published page — the consolidated airport page

**Built and published 6 November 2026.** One URL,
`riyadh-airport-transfers`. The directional phrasings map to its `<h2>`
sections, not to separate pages — and the page's layout makes that argument
visible by showing both directions at once.

| Mapped to | English candidates | Arabic candidates |
| --- | --- | --- |
| Primary (page) | riyadh airport transfers | نقل خاص من مطار الرياض |
| `<h2>` Arrivals | riyadh airport to hotel, king khalid airport pickup, riyadh airport taxi | توصيل من مطار الرياض، استقبال مطار الملك خالد |
| `<h2>` Departures | hotel to riyadh airport, riyadh airport drop off | توصيل إلى مطار الرياض، مشوار للمطار |
| `<h2>` Hotel connections | riyadh hotel transfer, airport transfer to \<hotel\> | نقل من فنادق الرياض |
| `<h2>` Onward intercity | riyadh airport to jeddah, riyadh airport to dammam | من مطار الرياض إلى جدة |

- [ ] Confirm the two directional phrasings really do return near-identical
      SERPs. This is the one assumption the consolidation decision rests on.
      It was **not** measurable before building and remains unmeasured — but
      the page is now live, so Search Console will answer it directly: if
      "airport to hotel" and "hotel to airport" queries both land here and
      both convert, the decision was right. That is better evidence than any
      SERP snapshot would have been.
- [ ] Check whether "riyadh airport taxi" is a distinct intent (price-led,
      walk-up) from "riyadh airport transfer" (pre-booked). If so it is a
      secondary to acknowledge, not a primary to chase.

## Open questions carried from batch 1

Unchanged and still unanswered:

1. Monthly volume for every primary above, English and Arabic separately.
2. Which Arabic commercial verb dominates — **توصيل**, **نقل** or **مشوار**.
   All three are in live use; the split is unknown and it affects headings,
   not just metadata.
3. Whether "Riyadh to Dammam" demand is materially larger than "Riyadh to Al
   Khobar", which would change how much depth each page earns.
4. Whether the Arabic pages should target the region name (**القصيم**,
   **المنطقة الشرقية**) alongside the city, which is common in Arabic local
   search but not in English.

Item 4 of the original batch-1 list — whether the two airport-direction
phrasings justify separate pages — is now **resolved** by decision rather than
by data, and is recorded in
[riyadh-url-inventory.md](./riyadh-url-inventory.md). The checkbox above asks
the research pass to confirm the assumption behind it anyway.
