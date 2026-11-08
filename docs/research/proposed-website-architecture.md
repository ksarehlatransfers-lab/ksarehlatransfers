# Proposed website architecture

A recommendation. Nothing here is built. Approval required before any file
changes.

> **Revised 4 November 2026 after the project owner's strategy decisions:**
> Batch 2 reduced to four routes (Makkah and Madinah **excluded** from this
> phase), private driver hire approved for **hourly and full-day only**, and a
> **mandatory trailing slash** on every URL. See §0 and §B0.

## 0. Mandatory URL convention — trailing slash

**Every URL carries a trailing slash.** `/en/riyadh-to-buraydah/`, not
`/en/riyadh-to-buraydah/`. This applies to the registry, canonicals, hreflang,
internal links, the sitemap, navigation, breadcrumbs and structured-data URLs
alike, and no slashless internal variant may be created.

Implementation detail is in
[implementation-roadmap.md](./implementation-roadmap.md) §Stage 0 — it is a
small but genuinely cross-cutting change, and getting it half-done would be
worse than not doing it, because a canonical that redirects is a canonical
that does not work.

## Principles carried forward

1. **Slugs identical across locales**, so the switcher stays a prefix swap and
   hreflang pairs are unambiguous. `/en/<slug>/` and `/ar/<slug>/`.
2. **One primary intent per URL.** If two candidates share an intent, the
   weaker becomes an H2 and a secondary keyword, never a second page.
3. **Brand locked.** Typography, palette, buttons, header and footer do not
   change. Differentiation is composition only.
4. **Titles 50–60 characters, brand dropped** whenever it would overflow — the
   brand is 30 characters, so it is dropped on every indexable page. Enforced
   by `title: { absolute: … }` in [`lib/seo.ts`](../../lib/seo.ts).
5. **No page without a distinct purpose.** Several competitor families are
   deliberately not reproduced.
6. **Nothing published that cannot be substantiated** — no prices, fleet,
   licences, customer counts, reviews or operational guarantees.

## Architecture at a glance

```
/en/  ·  /ar/                                       ← homepage (published)
│
├── riyadh/                                         ← city hub (published)
│   ├── riyadh-to-jeddah/                           ← published
│   ├── riyadh-to-dammam/                           ← published
│   ├── riyadh-to-al-khobar/                        ← published
│   │
│   ├── riyadh-to-buraydah/       ┐
│   ├── riyadh-to-taif/           ├── Stage 2 — Batch 2, approved, not built
│   ├── riyadh-to-hail/           │   (built in this order, EN + AR together)
│   ├── riyadh-to-alula/          ┘
│   │
│   ├── riyadh-airport-transfers/                   ← BUILT 6 Nov 2026
│   ├── riyadh-railway-station-transfers/           ← BUILT 6 Nov 2026
│   │                                                 both stations, one page:
│   │                                                 no child URLs. Riyadh East
│   │                                                 is an alias, not a station
│   └── riyadh-hotel-transfers/                     ← Stage 3
│
├── private-driver-hire/                            ← BLOCKED. APPROVED: hourly + full-day only
│
├── jeddah/                                         ← Stage 4, first city hub beyond Riyadh
│   └── dammam/ · al-khobar/                        ← later
│
└── get-quote/                                      ← published, noindex
```

**Excluded from this phase by owner decision:** `riyadh-to-makkah` and
`riyadh-to-madinah`. See §B0.

**Not proposed, and why:** `/distance/*` (cannibalises our route pages),
`/women-transport` and `/wheelchair-taxi` (unconfirmed operational promises),
`/border-crossings/*` and cross-border routes (unconfirmed vehicle
permissions), `/events`, `/corporate` (unconfirmed process), driver profiles
(no named staff), `/fleet` (no confirmed fleet), weekly and monthly driver hire
(**not approved**), Urdu, and anything pilgrimage-positioned (out of scope).

---

# A. Published pages — recommended improvements only

No new URLs. These are content additions that close the gaps in
[competitor-gap-analysis.md](./competitor-gap-analysis.md) §3.

| Page | Recommended addition |
| --- | --- |
| `/en/`, `/ar/` | A "how pricing works" strip: written quotation first, no payment to get one, nothing added afterwards. Replaces nothing |
| `/riyadh/` | Trim the airport paragraph to a summary + link **when** the airport page lands, so the two do not compete |
| All four cluster pages | ① A **"What's included / Quoted separately"** block. ② **"Quick answer:"** opening sentences on the distance and duration FAQs. ③ A visible **"figures last checked"** date beside the stat band. ④ **توصيل / مشوار** register introduced into Arabic H2s and FAQs. ⑤ Per-route vehicle guidance sized to the journey length |
| `/riyadh-to-dammam/` | Expand the rail column with the verified SAR line detail; still no timetables or fares |
| `/riyadh-to-al-khobar/` | Keep the causeway block exactly as it is. It is the most honest block on the site |

---

# B. Batch 2 — four intercity routes

Approved scope, not yet built. Keyword validation detail is in
[riyadh-batch-2-keyword-mapping.md](./riyadh-batch-2-keyword-mapping.md); this
section is the architecture.

| Order | Page | EN URL | AR URL |
| --- | --- | --- | --- |
| 1 | Buraydah | `/en/riyadh-to-buraydah/` | `/ar/riyadh-to-buraydah/` |
| 2 | Taif | `/en/riyadh-to-taif/` | `/ar/riyadh-to-taif/` |
| 3 | Hail | `/en/riyadh-to-hail/` | `/ar/riyadh-to-hail/` |
| 4 | AlUla | `/en/riyadh-to-alula/` | `/ar/riyadh-to-alula/` |

Eight localized URLs, built **English and Arabic together**.

## B0. Excluded from this phase — Makkah and Madinah

**Owner decision, 4 November 2026.** `riyadh-to-makkah` and
`riyadh-to-madinah` are **not** part of Batch 2 and are **not** to be added to
the route registry, the sitemap, the navigation, the related-routes blocks or
any internal link. No pilgrimage-focused content is to be created for either
destination.

Both slugs are **withdrawn from the reserved list**, not merely deferred — see
[riyadh-url-inventory.md](../riyadh-url-inventory.md). They may be reconsidered
only by a separate strategic decision.

One live inaccuracy follows from this and must be corrected at the start of
Stage 2: the published Riyadh hub's `planned` array still names both as
"being written". They render as **text, not links**, so nothing points at a
missing page — but the text is now wrong. Logged in
[implementation-roadmap.md](./implementation-roadmap.md).

The research gathered for both routes is preserved in the keyword-mapping
document in case the decision is revisited.

---

Every Batch 2 page shares this spine, with the signature element differing:

**H2 spine** — Overview · *(signature element)* · The journey stage by stage ·
Pickup in Riyadh · Drop-off in `<city>` · What's included and what's quoted
separately · Before you travel (passengers / luggage / return) · How to book ·
FAQ · Related journeys · CTA

Every page: one H1 · `WebPage` + `BreadcrumbList` + `Service` + `FAQPage`
JSON-LD · self-referencing canonical · reciprocal hreflang · breadcrumb
Home › Riyadh › `<route>` · Server Components only.

---

## B1 · build 1 — `/en/riyadh-to-buraydah/` · `/ar/riyadh-to-buraydah/`

| Field | Value |
| --- | --- |
| **1. English URL** | `/en/riyadh-to-buraydah/` |
| **2. Arabic URL** | `/ar/riyadh-to-buraydah/` |
| **3. EN primary** | riyadh to buraydah private transfer |
| **4. AR primary** | نقل خاص من الرياض إلى بريدة |
| **5. Secondaries** | EN: riyadh to buraydah by car, riyadh to qassim transfer, riyadh buraydah distance, highway 65 · AR: توصيل من الرياض إلى بريدة، مشوار الرياض القصيم، نقل خاص إلى القصيم |
| **6. Intent** | Commercial, practical/regional. **Zero competitor coverage** — both `/routes/` and `/distance/` 404. SERP held by Daytrip and Blacklane with prices that disagree between their own pages |
| **7. SEO title** | EN `Riyadh to Buraydah Private Transfer \| Get a Quote` (49) · AR `نقل خاص من الرياض إلى بريدة والقصيم \| عرض سعر` |
| **8. Meta description** | EN: Private transfer from Riyadh to Buraydah and the Qassim region — about 360 km and 3.5 hours north on Highway 65. Door-to-door, or compare it with the train. |
| **9. H1** | EN `Riyadh to Buraydah private transfer` · AR `نقل خاص من الرياض إلى بريدة` |
| **10. H2 structure** | Spine, with **signature = "Car or the North Train?"** — Qassim is a station on the SAR North line (Riyadh → Majmaah → Qassim → Hail → Al-Jouf → Qurayyat, verified), so this route has a **genuine rail alternative**, exactly like Dammam. Reuse the honest comparison pattern. Second signature: a short **"Reaching Unaizah, Ar Rass and Al Bukayriyah"** block, because the region matters more than the city here |
| **11. FAQ topics** | How long is the drive · Is the train better for me · Can you reach Unaizah or Ar Rass · Is it a day trip with a return the same day · Can you collect from Qassim airport · What about the date-harvest season |
| **12. Internal links** | → Riyadh hub (breadcrumb + related) · → **`/riyadh-to-hail/`** (Highway 65 continues north; Buraydah is a stage of that journey) · → `/riyadh-to-dammam/` *(published)* · → quote. **Not** to the railway page until it ships |
| **13. Unique angle** | **The shortest Batch 2 route and the one real same-day-return product.** At ~3.5 hours it is a half-day each way, which makes "wait and bring me back" the natural offer — the pattern that already works on the Dammam page. Plus an unopposed SERP |
| **14. Design concept** | **"Practical and regional."** The most utilitarian layout in the set: compact split hero, a wide **region block** showing Buraydah with Unaizah / Ar Rass / Al Bukayriyah as satellite labels, car-vs-train comparison in two tick-listed columns, dense practical grid. Shortest page in the batch by design — a 3.5-hour drive does not need 2,500 words |
| **15. Image subject** | Hero: **needs sourcing** — Buraydah or Qassim cityscape. No image currently held. Secondary: Highway 65 Qassim expressway (see §E) |

## B2 · build 2 — `/en/riyadh-to-taif/` · `/ar/riyadh-to-taif/`

| Field | Value |
| --- | --- |
| **1. English URL** | `/en/riyadh-to-taif/` |
| **2. Arabic URL** | `/ar/riyadh-to-taif/` |
| **3. EN primary** | riyadh to taif private transfer |
| **4. AR primary** | نقل خاص من الرياض إلى الطائف |
| **5. Secondaries** | EN: riyadh to taif by road, riyadh taif distance, taif mountain road, al hada road · AR: توصيل من الرياض إلى الطائف، مشوار الرياض الطائف، طريق الهدا |
| **6. Intent** | Commercial, leisure-weighted and **seasonal** (summer, the highland resorts). Competitor page 404s; a live SERP for this intent returned their Riyadh–**Jeddah** page |
| **7. SEO title** | EN `Riyadh to Taif Private Transfer \| Get a Quote` (45) · AR `نقل خاص من الرياض إلى الطائف \| اطلب عرض سعر` |
| **8. Meta description** | EN: Private transfer from Riyadh to Taif — about 790 km and 8–9 hours, climbing to the highlands. Door-to-door for families and summer travel. Request a quotation. |
| **9. H1** | EN `Riyadh to Taif private transfer` · AR `نقل خاص من الرياض إلى الطائف` |
| **10. H2 structure** | Spine, with **signature = "The climb into the highlands"** — an elevation-profile block. Taif sits high; the approach gains real altitude. Facts only: Al Hada road, the escarpment, cooler summer temperatures |
| **11. FAQ topics** | How long is the drive · Is the mountain road difficult · Is summer the busy season · Can you continue to Al Shafa or Al Hada · What luggage fits for a family · Is there a train (no) |
| **12. Internal links** | → Riyadh hub · → **`/riyadh-to-jeddah/`** *(published — shared Highway 40 corridor, and the Taif detour is already a named stage there)* · → quote. **Must not** link to a Makkah page: excluded from this phase |
| **13. Unique angle** | The only approved route where the destination's **geography** is the story. Nobody in the market has a Riyadh→Taif page at all |
| **14. Design concept** | **"Elevation."** Signature element is a horizontal **elevation band** — a simple SVG profile rising from Riyadh's plateau to Taif's highlands with labelled waypoints. Cool-side use of the existing palette (palm and sand, no brass) to read "highland" without new tokens |
| **15. Image subject** | Hero: Taif seen from the Al Hada mountains (`dest-taif`, held, CC BY-SA 3.0, EN + AR alt already present). No secondary required |

## B3 · build 3 — `/en/riyadh-to-hail/` · `/ar/riyadh-to-hail/`

| Field | Value |
| --- | --- |
| **1. English URL** | `/en/riyadh-to-hail/` |
| **2. Arabic URL** | `/ar/riyadh-to-hail/` |
| **3. EN primary** | riyadh to hail private transfer |
| **4. AR primary** | نقل خاص من الرياض إلى حائل |
| **5. Secondaries** | EN: riyadh to hail by car, riyadh hail distance, riyadh to hail drive, highway 65 north · AR: توصيل من الرياض إلى حائل، مشوار الرياض حائل، الطريق إلى حائل |
| **6. Intent** | Commercial, long-distance. **Zero competitor coverage.** The SERP returned **16 of 16** results from a single aggregator (Daytrip) — the least contested result set in the whole study |
| **7. SEO title** | EN `Riyadh to Hail Private Transfer \| Get a Quote` (45) · AR `نقل خاص من الرياض إلى حائل \| اطلب عرض سعر` |
| **8. Meta description** | EN: Private transfer from Riyadh to Hail — about 620–640 km and 6 hours north via Qassim on Highway 65. Door-to-door, with AlUla a further stage north. |
| **9. H1** | EN `Riyadh to Hail private transfer` · AR `نقل خاص من الرياض إلى حائل` |
| **10. H2 structure** | Spine, with **signature = "Planning a six-hour drive"** — a genuine preparation checklist (departure timing, where the stops are, what to carry, and why travel sources advise against night driving on unlit stretches because of livestock, attributed as advice rather than stated as a rule). Second signature: **"Hail as a stage to AlUla"** |
| **11. FAQ topics** | How long is the drive · Which route (two exist: ~620 km via Zulfi/Buraydah/Al Shanan, or ~731 km via Al Muzahimiyah/Shaqra/Al-Nabhaniyah) · Is the train an option · Can you continue to AlUla · Is night driving advisable · Can you collect from Hail airport |
| **12. Internal links** | → Riyadh hub · → **`/riyadh-to-buraydah/`** (the midpoint) · → **`/riyadh-to-alula/`** (Hail is the natural overnight stop on the road to AlUla — verified) · → quote |
| **13. Unique angle** | **The journey-preparation page.** The one approved route long enough to need preparation but short enough to do in a day, and the gateway to AlUla. The two-route choice is a real, answerable question nobody else answers |
| **14. Design concept** | **"The planner."** Signature element is a **preparation checklist** rendered as a bordered list with section rules — visually unlike anything else in the cluster. Route-choice comparison as a compact two-column table. Dark closing CTA band. Numbered stage markers down the start edge |
| **15. Image subject** | Hero: **needs sourcing** — Hail landscape, the Aja mountains, or A'arif Fort. No image held. **Publish no date for A'arif Fort** — sources conflict (1840 vs 17th century). Secondary: Highway 65 (see §E) |

## B4 · build 4 — `/en/riyadh-to-alula/` · `/ar/riyadh-to-alula/`

| Field | Value |
| --- | --- |
| **1. English URL** | `/en/riyadh-to-alula/` |
| **2. Arabic URL** | `/ar/riyadh-to-alula/` |
| **3. EN primary** | riyadh to alula private transfer |
| **4. AR primary** | نقل خاص من الرياض إلى العُلا |
| **5. Secondaries** | EN: riyadh to alula by road, riyadh alula distance, riyadh to alula drive or fly, alula road trip · AR: توصيل من الرياض إلى العلا، الطريق من الرياض إلى العُلا، الرياض العلا بالسيارة |
| **6. Intent** | Commercial, tourism — **but the SERP is flight-dominated.** A page that ignores flying is answering the wrong question |
| **7. SEO title** | EN `Riyadh to AlUla Private Transfer \| Drive or Fly` (47) · AR `نقل خاص من الرياض إلى العُلا \| اطلب عرض سعر` |
| **8. Meta description** | EN: Private transfer from Riyadh to AlUla — about 1,050 km and 10–12 hours via Qassim and Hail. When the drive makes sense, when flying does, and how to book either leg. |
| **9. H1** | EN `Riyadh to AlUla private transfer` · AR `نقل خاص من الرياض إلى العُلا` |
| **10. H2 structure** | Spine, with **signature = "Drive or fly? An honest comparison"** — **required by the owner's decision.** Same two-column pattern as the Dammam road-vs-rail block, and it must **recommend flying** for travellers it genuinely suits. Direct flights run about 1h10m; the drive is 10–12 hours |
| **11. FAQ topics** | Should I drive or fly · How long is the drive really · Can it be split over two days with a stop at Hail · Can you collect me from AlUla airport instead · Is there a train (no) · What about the return |
| **12. Internal links** | → Riyadh hub · → **`/riyadh-to-hail/`** (the fastest road route runs *through* Hail — verified; a two-day split is the natural product) · → **`/riyadh-to-buraydah/`** (Qassim is the first stage) · → quote |
| **13. Unique angle** | **The honest modal comparison, plus the airport-transfer upsell.** Recommending the flight and then offering the AlUla-airport transfer is a better business answer than pretending a 12-hour drive is the default. No competitor page does this |
| **14. Design concept** | **"Landscape-led."** Full-bleed landscape hero at a tall aspect, headline centred low. Drive-or-fly comparison as two large cards with a visible time contrast (`1h 10m` against `10–12 hrs`) set in the numeric style. Two-day itinerary as a simple two-stop diagram |
| **15. Image subject** | Hero: AlUla sandstone formations (`guide-alula`, held, CC BY 2.0). **Must not be captioned as the road** — it is the destination. Secondary: Highway 65 Qassim expressway (see §E). **Do not publish the "~20 flights per week" figure** — single source, and frequencies change |

---

# C. Batch 3 — the consolidated airport page

Already approved and documented in
[riyadh-url-inventory.md](../riyadh-url-inventory.md). Restated here in
architecture form.

| Field | Value |
| --- | --- |
| **1–2. URLs** | `/en/riyadh-airport-transfers/` · `/ar/riyadh-airport-transfers/` |
| **3. EN primary** | riyadh airport transfers |
| **4. AR primary** | نقل خاص من مطار الرياض |
| **5. Secondaries** | EN: king khalid airport transfer, riyadh airport taxi, RUH transfer, riyadh airport to hotel, hotel to riyadh airport, riyadh airport pickup · AR: توصيل من مطار الرياض، استقبال من مطار الملك خالد، توصيل إلى مطار الرياض، مشوار للمطار |
| **6. Intent** | Commercial, high. Two directions, one answer |
| **7. SEO title** | EN `Riyadh Airport Transfers \| King Khalid \| Get a Quote` · AR `نقل خاص من مطار الرياض \| اطلب عرض سعر` |
| **8. Meta description** | EN: Private transfers at King Khalid International Airport — arrivals met inside the terminal, departures timed from your flight, hotel and intercity connections. Request a quotation. |
| **9. H1** | EN `Riyadh airport transfers` · AR `نقل خاص من مطار الرياض` |
| **10. H2 structure** | **The four approved sections, mandatory:** Arrivals at King Khalid International Airport · Departures from Riyadh · Hotel connections · Onward intercity connections from the airport. Then: What's included · Before you travel · How to book · FAQ · Related journeys · CTA |
| **11. FAQ topics** | How do you find me on arrival · What if my flight is delayed · Why do you need the flight number · How early for a departure · Can you take me straight to Jeddah/Dammam from the airport · Which terminal · Can I book a return |
| **12. Internal links** | → Riyadh hub (breadcrumb + contextual; **and the hub's airport branch becomes a live link** — the one required edit to an existing page) · → every published route page, from the onward-connections H2 · → hotel page **only once Batch 5 ships** · → railway pages **only once Batch 4 ships** · → quote. Repoint the footer and homepage "Airport transfers" links here |
| **13. Unique angle** | The flight-number mechanic, explained: we set the pickup from your flight so a delay does not leave you without a vehicle. Honest, specific, and it answers the real anxiety |
| **14. Design concept** | **"Two directions."** Signature element is a **split arrivals/departures switcher rendered as two side-by-side panels** (no JavaScript — both visible, each with its own heading and icon), so the page visibly answers both directions at once. That is the layout argument for consolidation made in the design itself |
| **15. Image subject** | Airport terminal interior or KKIA exterior. We hold `svc-airport` but it is **Jeddah's** airport — **must not** be used to depict KKIA. Needs sourcing |

**Required reading before writing this page:** the official King Khalid
International Airport references the project owner supplied. Still unconsulted.

---

# D. Proposed new pages

## D1. `/en/private-driver-hire/` · `/ar/private-driver-hire/` — Stage 3

> **APPROVED SCOPE: hourly hire and full-day hire only.**
> Weekly and monthly hire are **not approved** and must not appear on the
> page, in its metadata, its keywords, its FAQs or its structured data.

| Field | Value |
| --- | --- |
| **1. English URL** | `/en/private-driver-hire/` |
| **2. Arabic URL** | `/ar/private-driver-hire/` |
| **3. EN primary** | hire a private driver riyadh |
| **4. AR primary** | استئجار سيارة مع سائق في الرياض |
| **5. Secondaries** | EN: private driver hire saudi arabia, hourly driver riyadh, car with driver by the day, chauffeur service riyadh · AR: سائق خاص بالساعة، سائق خاص يومي، سيارة مع سائق. **Removed from the set:** `monthly driver hire`, `weekly driver hire`, `مشاوير شهرية` — out of approved scope |
| **6. Intent** | Commercial. A **different product** from a point-to-point transfer: you are buying a block of time, not a journey |
| **7. SEO title** | EN `Hire a Private Driver in Riyadh \| By Hour or Day` (48) · AR `استئجار سيارة مع سائق في الرياض \| عرض سعر` |
| **8. Meta description** | EN: Hire a car and driver in Riyadh by the hour or for a full day. The vehicle stays with you between stops. Not a car rental — a driver, and a price agreed before you book. |
| **9. H1** | EN `Hire a private driver in Riyadh` · AR `استئجار سيارة مع سائق في الرياض` |
| **10. H2 structure** | How this differs from a point-to-point transfer · **Hourly hire** · **Full-day hire** · What people use it for · What's included and what's quoted separately · **This is not a car rental** · How to book · FAQ · Related services · CTA. **No "longer stays" section** — weekly and monthly are out of scope |
| **11. FAQ topics** | How does hourly hire work · How does full-day hire work · Does the driver wait between stops · Can I change the plan during the day · Is this a car rental (no — explain) · Can it leave the city · Is it better value than several separate transfers. **Every answer must be written from confirmed arrangements** — see the verification gate below |
| **12. Internal links** | → Riyadh hub · → `/riyadh-airport-transfers/` *(published)* · → published route pages, for the "it can leave the city" case · → quote |
| **13. Unique angle** | **Say plainly it is not a car rental.** The Arabic and English SERPs for this intent are held by OneClickDrive, a rental-with-driver marketplace. Someone searching this phrase is often unsure which product they want. Being the page that clears that up is both useful and differentiating |
| **14. Design concept** | **"Two blocks of time."** Signature element is a **two-card duration block** — hourly and full day, side by side — each saying what it suits and what it includes. Visually a pricing table *without prices*, which is the honest version of the competitor's package grid. Two cards, not four: the layout follows the approved scope rather than padding it |
| **15. Image subject** | Deliberately **no vehicle photography** — no confirmed fleet. Use a Riyadh cityscape already held (`dest-riyadh`) or an abstract typographic treatment. This is the page where faking a fleet photo would be most tempting and most damaging |

### Verification gate — operational information required before publishing

The owner's instruction is explicit: verify the actual arrangements with the
driver partners first, and invent nothing. The page **cannot be written** until
the following are confirmed, because each one is load-bearing for a section or
an FAQ answer:

| # | Required before publishing | Which part of the page it blocks |
| --- | --- | --- |
| 1 | **Is there a minimum booking duration for hourly hire?** If so, what is it? | The hourly H2 and the "what is the minimum" FAQ. If unknown, the page must say the minimum is confirmed at quotation — not guess a number |
| 2 | **How many hours is a "full day"?** | The full-day H2. The competitor says 10 hours; that is *their* figure and must not be borrowed |
| 3 | **Is waiting time between stops included, or charged?** | "What's included / quoted separately", and the waiting FAQ |
| 4 | **Is there an included mileage or distance limit?** | "What's included", and the "can it leave the city" FAQ |
| 5 | **What happens if the booking overruns?** Is there an overtime arrangement? | The overrun FAQ. Currently unanswerable |
| 6 | **Which vehicle categories can actually be arranged for day hire?** | The vehicle guidance. Only categories that can genuinely be arranged may be listed |
| 7 | **Can the vehicle leave Riyadh on an hourly or full-day booking?** | The "can it leave the city" FAQ and the route-page cross-links |
| 8 | **Is the same driver guaranteed for a multi-day booking?** | Drop the multi-day FAQ entirely unless confirmed — and "guaranteed" is a word to avoid either way |
| 9 | **What notice is needed to book?** | The "how to book" section |
| 10 | **Are there days or hours when day hire is not available?** | Availability statements. **No availability claim may be published without this** |

**None of these may be inferred from the competitor's page, from the
aggregators, or from what is customary.** Where an answer is not available, the
page says the arrangement is confirmed in the written quotation — which is
true, useful, and the pattern already used across the site.

Until items 1–10 are answered, this page is **blocked, not deprioritised.**

## D2. `/en/riyadh-railway-station-transfers/` — Batch 4

| Field | Value |
| --- | --- |
| **1–2. URLs** | `/en/riyadh-railway-station-transfers/` · `/ar/riyadh-railway-station-transfers/` |
| **3–4. Primaries** | EN riyadh railway station transfer · AR نقل من محطة قطار الرياض |
| **5. Secondaries** | EN: riyadh train station taxi, SAR station transfer riyadh, riyadh north station, riyadh east station · AR: توصيل من محطة القطار، محطة قطار الشمال |
| **6. Intent** | Commercial. **Unoccupied** — the competitor has Makkah and Madinah station pages but none for Riyadh |
| **7. SEO title** | EN `Riyadh Railway Station Transfers \| Get a Quote` |
| **8. Meta description** | Private transfers to and from Riyadh's railway stations — which station serves which line, and door-to-door onward travel. Request a quotation. |
| **9. H1** | `Riyadh railway station transfers` |
| **10. H2s** | Which station do you need · The North line (Qassim, Hail, Al-Jouf, Qurayyat) · The Eastern line (Dammam) · Arrivals · Departures · What's included · FAQ · Related journeys · CTA |
| **11. FAQ topics** | Which station for my train · How far is each station from the centre · Can you meet an arriving train · What if the train is late · Can you take me onward to another city |
| **12. Internal links** | → Riyadh hub · → **`/riyadh-to-dammam/` and `/riyadh-to-al-khobar/`** from the Eastern-line section (the existing recorded requirement) · → **`/riyadh-to-buraydah/` and `/riyadh-to-hail/`** from the North-line section (**new** — both are stations on that line) · → airport page · → quote |
| **13. Unique angle** | "Which station do I need" is the actual question, and answering it well requires the line structure we have now verified |
| **14. Design concept** | **"The line diagram."** Signature element is a **vertical line diagram** of the two lines with station stops as nodes, each node linking to the matching route page where one exists. A navigational page, not a sales page |
| **15. Image subject** | Needs sourcing. A station exterior, or the line diagram alone with no photograph |

**Required reading first:** the official SAR station directory and network
references the project owner supplied. Still unconsulted.

## D3. `/en/riyadh-hotel-transfers/` — Batch 5

| Field | Value |
| --- | --- |
| **1–2. URLs** | `/en/riyadh-hotel-transfers/` · `/ar/riyadh-hotel-transfers/` |
| **3–4. Primaries** | EN riyadh hotel transfers · AR نقل من فنادق الرياض |
| **5. Secondaries** | EN: hotel pickup riyadh, hotel to airport riyadh (→ airport page), riyadh hotel to meeting · AR: توصيل من الفندق، مشوار من الفندق |
| **6. Intent** | Commercial, moderate. Largely a sub-intent of the airport page |
| **7. SEO title** | EN `Riyadh Hotel Transfers \| Door to Door Quotes` |
| **8–9.** | Meta: Private transfers to and from Riyadh hotels — a named entrance, a driver who waits, and a price agreed in writing. · H1 `Riyadh hotel transfers` |
| **10. H2s** | Pickup from a named entrance · To and from the airport · Across the city · Onward to another city · What's included · FAQ · Related · CTA |
| **11. FAQ topics** | Where exactly will the driver wait · Can the hotel book on my behalf · Can you collect from a compound or serviced apartment · Can I book several transfers across a stay |
| **12. Internal links** | → Riyadh hub · → airport page (reciprocal) · → `/private-driver-hire/` (a day of meetings is day hire, not four transfers) · → quote |
| **13. Unique angle** | "A named entrance" — large Riyadh hotels have several, and saying which one is where transfers actually go wrong |
| **14. Design concept** | **"The meeting point."** Restrained, list-led, single column, no hero photograph. The quietest page in the set, befitting the smallest intent |
| **15. Image subject** | None, or a Riyadh cityscape already held. **No hotel-branded photography** |

## D4. City hubs — after Riyadh is complete

Do not start these until the Riyadh cluster is finished, per the standing
instruction. Recorded for sequencing only.

| Page | EN primary | AR primary | Title | Priority |
| --- | --- | --- | --- | --- |
| `/en/jeddah/` · `/ar/jeddah/` | jeddah private transfers | نقل خاص في جدة | `Jeddah Private Transfers \| Airport and Intercity` | **First** — 80 of their 303 route slugs; the reverse of our strongest route |
| `/en/dammam/` · `/ar/dammam/` | dammam private transfers | نقل خاص في الدمام | `Dammam Private Transfers \| Airport and Intercity` | Second — 85 slugs |
| `/en/al-khobar/` · `/ar/al-khobar/` | al khobar private transfers | نقل خاص في الخبر | `Al Khobar Private Transfers \| Get a Quote` | Third — we already have the route page |

Each mirrors the Riyadh hub's **junction** role: orient, then branch. Each needs
a **different** composition from the Riyadh hub so the cluster does not become
a template.

---

# E. Images required

| Need | Status | Action |
| --- | --- | --- |
| **Highway 65 / Qassim expressway** | **Identified, not yet pinned** — `طريق القصيم الرياض السريع - panoramio.jpg`, CC BY 3.0 | Pin via the existing pipeline **before Stage 2**. It is the corridor for all three northern routes: Buraydah, Hail and AlUla |
| **Buraydah / Qassim cityscape** | **Missing — blocks build 1** | Source from Commons |
| **Hail landscape / Aja mountains / A'arif Fort** | **Missing — blocks build 3** | Source from Commons |
| Taif destination | **Held** (`dest-taif`, CC BY-SA 3.0, EN + AR alt) | Hero for build 2. Nothing to source |
| AlUla destination | **Held** (`guide-alula`, CC BY 2.0, EN + AR alt) | Hero for build 4. Never captioned as the road |
| **King Khalid International Airport** | **Sourced 6 November 2026** — `kkia-central` and `kkia-departures`, both genuinely KKIA. `svc-airport` is *Jeddah's* airport and was correctly not used | Done |
| Riyadh railway station | **Missing** | Source before the railway stage, or use the line diagram alone |
| Highway 40 west / Tuwaiq escarpment | **Held** (`route-highway40-west`, CC BY-SA 3.0) | In use on the published Jeddah page. **No longer needed for a Makkah page** — that route is excluded |
| Highway 60, Makkah and Madinah destination images | **Held** (`svc-intercity`, `dest-makkah`, `dest-madinah`) | **Not used by Batch 2.** `svc-intercity` stays in service on the homepage; the two destination images remain on the homepage destination cards |
| Highway 40 **east** (Dammam corridor) | **Missing, none openly licensed found** | Outstanding Batch 1 gap; needs commissioned or stock-licensed photography |

Every new image needs **both** `alt` and `altAr` in the pipeline manifest — the
rule now enforced by `altText(photo, locale)` and rule 10 of
[brand-system.md](../brand-system.md).

---

# F. Title length check

All proposed English titles measured against the 50–60 character target.

| Title | Chars | Verdict |
| --- | --- | --- |
| `Riyadh to Buraydah Private Transfer \| Get a Quote` | 49 | OK |
| `Riyadh to Taif Private Transfer \| Get a Quote` | 45 | OK |
| `Riyadh to Hail Private Transfer \| Get a Quote` | 45 | OK |
| `Riyadh to AlUla Private Transfer \| Drive or Fly` | 47 | OK |
| `Riyadh Airport Transfers \| King Khalid \| Get a Quote` | 52 | OK |
| `Hire a Private Driver in Riyadh \| By Hour or Day` | 48 | OK |
| `Riyadh Railway Station Transfers \| Get a Quote` | 46 | OK |
| `Riyadh Hotel Transfers \| Door to Door Quotes` | 44 | OK |
| `Jeddah Private Transfers \| Airport and Intercity` | 48 | OK |
| `Dammam Private Transfers \| Airport and Intercity` | 48 | OK |
| `Al Khobar Private Transfers \| Get a Quote` | 41 | OK |

Lengths verified by script, not counted by hand. Brand omitted throughout, per
the established rule. No title uses an ampersand — `&` renders as `&amp;` and
costs four characters of the budget, the defect that pushed the Riyadh hub
title to 63 during Batch 1 QA.

The two withdrawn titles (Makkah, Madinah) are removed rather than kept as
"deferred", so nothing in this document can be mistaken for an approved page.

---

# G. Sequencing summary

The owner's approved seven-stage sequence. Full detail, including the
trailing-slash work and the per-stage gates, is in
[implementation-roadmap.md](./implementation-roadmap.md).

| Stage | Work | Gate before starting |
| --- | --- | --- |
| **1** | Existing-SEO improvements to the four published pages — FAQ answer structure, verified last-checked dates, question-form FAQ headings, route-distance variation explained | None |
| **2** | **Batch 2** — Buraydah, Taif, Hail, AlUla, EN + AR together | 2 images to source; correct the hub's `planned` list |
| **3** | **`/private-driver-hire/`** — hourly and full-day only | **The 10-item verification gate in §D1.** Blocked until answered |
| **4** | **Riyadh airport transfers** | Read the official KKIA references; source a KKIA image |
| **5** | **Riyadh railway station transfers** — main, north, east | Read the official SAR references |
| **6** | **Riyadh hotel transfers** | — |
| **7** | **Jeddah destination hub** | Riyadh cluster complete, documented, tested |
| — | Everything in §"Not proposed", plus weekly/monthly driver hire | Not approved, or blocked on unverifiable operational facts |

The trailing-slash convention (§0) is prerequisite groundwork and should land
**before Stage 2**, so no new page is ever published at a slashless URL.
