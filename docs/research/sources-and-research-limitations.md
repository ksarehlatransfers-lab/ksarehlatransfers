# Sources and research limitations

Every claim in this folder traces here. Read this before acting on any other
document in it.

**Research carried out:** 4 November 2026.

> **Scope note, 4 November 2026.** The owner has since **excluded**
> Riyadh→Makkah and Riyadh→Madinah from the current phase, and approved private
> driver hire for **hourly and full-day only**. The sources for the two excluded
> routes are **retained below**, unchanged, so the research is not lost if the
> decision is revisited — but they are no longer sources for an approved page.

---

# Part 1 — What was NOT available

Stated first, because it bounds everything else.

| Data type | Available | Consequence for this research |
| --- | --- | --- |
| Ahrefs | **No** | No volume, difficulty, backlink or traffic data |
| Semrush | **No** | Same |
| Moz | **No** | Same |
| Google Keyword Planner | **No** | No volume, no competition, no CPC |
| Google Search Console (ours or theirs) | **No** | No query, impression or position data |
| Any rank tracker | **No** | **No keyword in this folder is labelled a "ranking keyword"** |
| Google Analytics | **No** | No traffic or behaviour data |
| Site-index / `site:` enumeration API | **No** | **Competitor indexation is unverified throughout.** Sitemap presence means "submitted", not "indexed" |
| Clean autocomplete / related-searches scrape | **No** | Only what surfaced inside search results |
| Saudi-located search | **No** | Searches ran from a **US-located** environment |
| Backlink or authority data | **No** | No domain-strength comparison is made |

## The four limitations that matter most

**1. No volume, difficulty, CPC, traffic or ranking figure appears anywhere in
this folder.** Every keyword was selected on observed SERP composition and
intent. The *demand size* behind every single recommendation is unmeasured.
This is the first thing to fix with a real tool.

**2. Searches ran from a US environment.** Arabic SERPs are strongly
locale-sensitive — more so than English ones. The Arabic findings in
[arabic-keyword-research.md](./arabic-keyword-research.md) are the most
affected, and **every Arabic query should be re-run from a Saudi IP or locale
before being relied on.** This is flagged in that document too.

**3. Competitor indexation is unverified.** The ~1,230 URLs are what they
submit. How many Google has indexed is unknown, and for ~80 near-identical
templated guide pages it may be a small fraction.

**4. 354 `/blog/` URLs and several smaller families were enumerated but not
read.** Their content is not characterised anywhere in this folder and must not
be assumed. See Part 4.

---

# Part 2 — Competitor research sources

All fetched directly, 4 November 2026.

## Machine-readable

| Source | What it gave |
| --- | --- |
| `https://taxiserviceksa.com/robots.txt` | Crawl rules; the named AI-crawler allowlist; the `Content-Signal` line; the sitemap pointer |
| `https://taxiserviceksa.com/sitemap.xml` | Index of 12 sub-sitemaps |
| `sitemap-pages.xml` (117) · `sitemap-services.xml` (28) · `sitemap-locations.xml` (126) · `sitemap-blog.xml` (450) · `sitemap-routes.xml` (303) · `sitemap-fleet.xml` (**0**) · `sitemap-distance.xml` (63) · `sitemap-borders.xml` (12) · `sitemap-bus.xml` (6) · `sitemap-drivers.xml` (5) · `sitemap-ar.xml` (78) · `sitemap-ur.xml` (48) | **1,236 URLs total.** All URL counts, path distributions and city-token frequencies in [competitor-page-inventory.md](./competitor-page-inventory.md) are computed from this set |

## Pages fetched and parsed in full

Title, meta description, canonical, hreflang, H1/H2/H3, JSON-LD `@type` set,
image count and alt text, and visible word count were extracted from each:

1. `https://taxiserviceksa.com/`
2. `https://taxiserviceksa.com/ar/`
3. `https://taxiserviceksa.com/routes/riyadh-jeddah/`
4. `https://taxiserviceksa.com/routes/riyadh-makkah/`
5. `https://taxiserviceksa.com/riyadh-to-jeddah-private-car`
6. `https://taxiserviceksa.com/distance/riyadh-to-jeddah/`
7. `https://taxiserviceksa.com/distance/riyadh-to-madinah/`
8. `https://taxiserviceksa.com/distance/riyadh-to-alula/`
9. `https://taxiserviceksa.com/locations/riyadh/`
10. `https://taxiserviceksa.com/services/intercity/`
11. `https://taxiserviceksa.com/services/private-driver/`
12. `https://taxiserviceksa.com/ar/services/intercity/`
13. `https://taxiserviceksa.com/riyadh-airport-taxi`

Raw HTML saved to the session scratchpad at
`C:\Users\MK\AppData\Local\Temp\claude\d--Mine-Projects-private-transfer-across-saudia\76fbec49-3765-4f68-b6fa-05a3322d8223\scratchpad\competitor\pages\`
— outside the repository, and not committed.

## HTTP status probes

Run to test whether absence from the sitemap meant absence from the site. This
is the evidence behind the central finding of the study.

| URL | Status |
| --- | --- |
| `/routes/riyadh-makkah/` | 200 |
| `/routes/riyadh-madinah/` | **404** |
| `/routes/riyadh-taif/` | **404** |
| `/routes/riyadh-alula/` | **404** |
| `/routes/riyadh-buraidah/` | **404** |
| `/routes/riyadh-hail/` | **404** |
| `/riyadh-to-madinah-taxi/` | **404** |
| `/distance/riyadh-to-buraidah/` | **404** |
| `/distance/riyadh-to-hail/` | **404** |

**Caveat on the 404s.** They rule out those exact slugs. The competitor could
serve the same intent at a slug we did not guess. We probed the two naming
conventions they actually use (`/routes/<a>-<b>/` and `/distance/<a>-to-<b>/`)
plus one standalone form, and cross-checked against the full 1,236-URL sitemap,
where no Madinah, Taif, AlUla, Buraydah or Hail route page from Riyadh appears.
The conclusion is well supported but is not a proof of non-existence.

## Competitor figures quoted in this folder

Taken verbatim from their pages, for comparison only:

| Figure | Source page |
| --- | --- |
| Riyadh–Jeddah ~950 km (948–967), 9–11 hrs | `/distance/riyadh-to-jeddah/` |
| Riyadh–Madinah ~835 km (830–840), 7–8.5 hrs | `/distance/riyadh-to-madinah/` |
| Riyadh–AlUla ~1,080 km (1,050–1,150), 10–12 hrs | `/distance/riyadh-to-alula/` |
| Riyadh–Makkah ~870 km, 8–9 hrs | cross-links on the above |
| Dammam–Riyadh ~410 km, 3.5–4 hrs | cross-links on the above |
| "Sedan 1,500 SAR, Staria VIP 1,700 SAR, GMC Yukon XL 2,500 SAR one way per vehicle" | `/routes/riyadh-jeddah/` meta description |
| "Jeddah–Makkah from 300 SAR" | `/services/intercity/` meta description |
| "25,000+ travelers" · "100% licensed" · "founded 2014" | `/`, `/ar/` |
| "Figures last checked: August 2026" | all `/distance/*` |

**These are their claims, reported as their claims.** None is verified and none
is reproduced on our site. The 1,500 vs 1,800 SAR discrepancy noted in the
inventory comes from comparing their meta description against a third-party
search snippet quoting the same site — we did not establish which is current.

---

# Part 3 — Route fact sources

Sources for the distances, durations and route facts in
[riyadh-batch-2-keyword-mapping.md](./riyadh-batch-2-keyword-mapping.md). Every
published figure is a **range across independent sources**, following Batch 1
practice.

## Riyadh → Makkah (~870 km, 8.5–10 hrs) — **route excluded from this phase**

- [Rome2Rio — Riyadh to Makkah](https://www.rome2rio.com/s/Riyadh/Makkah) — 874.5 km, 8h 47m
- [Rome2Rio — Riyadh to Mecca](https://www.rome2rio.com/s/Riyadh/Mecca) — 869.3 km
- [Rome2Rio — Riyadh to Al Ḩaram](https://www.rome2rio.com/s/Riyadh/Al-%E1%B8%A8aram) — 870 km, 8h 43m
- [DistancesFrom — Riyadh to Makkah via Halban](https://www.distancesfrom.com/sa/distance-from-Riyadh-to-Makkah-via-Halban/DistanceHistory/40215590.aspx) — 888 km
- [Highway 40 (Saudi Arabia) — Wikipedia](https://en.wikipedia.org/wiki/Highway_40_(Saudi_Arabia))
- [Saudipedia — Highway Forty](https://saudipedia.com/en/highway-forty)

Spread 869–888 km. One outlier (~791 km, Bookaway) is almost certainly
straight-line and was discarded.

## Riyadh → Madinah (~835 km, 7.5–8.5 hrs) — **route excluded from this phase**

- [DistancesFrom — Riyadh to Madinah](https://www.distancesfrom.com/sa/travel-time-from-Riyadh-to-Madinah-Saudi-Arabia/TravelTimeHistory/42289657.aspx) — 839 km
- [Himmera — Riyadh to Medina](https://distancecalculator.himmera.com/distance-riyadh-medina-155707.html) — 841 km
- [TravelProfy — Riyadh to Medina](https://www.travelprofy.com/riyadh/medina) — 838.64 km, ~7h 53m
- [Cleartrip — Riyadh to Al Madinah routes](https://www.cleartrip.com/tourism/routes/ii/amp/riyadh-to-al-madinah-route.html) — ~899.67 km (**outlier**)
- [Highway 60 (Saudi Arabia) — Wikipedia](https://en.wikipedia.org/wiki/Highway_60_(Saudi_Arabia)) — 812 km total, links Qassim, Medina, Yanbu, Rabigh, Thuwal
- [Highway 65 (Saudi Arabia) — Wikipedia](https://en.wikipedia.org/wiki/Highway_65_(Saudi_Arabia)) — Hwy 65 and 60 run concurrently to Buraidah, where 60 continues west toward Medina
- [Expat.com forum thread](https://www.expat.com/en/forum/middle-east/saudi-arabia/riyadh/450850-road-trip-from-riyadh-to-madina.html) — the night-driving/livestock caution. **A forum. Advice, not a rule, and must be attributed as such**

## Riyadh → Taif (~790 km, 8–9 hrs)

- [Rome2Rio — Riyadh to Ta'if](https://www.rome2rio.com/s/Riyadh/Ta-if) — 787.7 km, ~7h 53m
- [Himmera — Taif to Riyadh](https://distancecalculator.himmera.com/distance-taif-riyadh-180340.html) — 795 km, 8h 51m
- [Air Miles Calculator — RUH to TIF](https://www.airmilescalculator.com/distance/ruh-to-tif/) — 792.3 km, ~8h 42m
- [Daytrip — Taif to Riyadh](https://daytrip.com/en/transfers/taif-sa/riyadh-sa) — 784 km, 7h 20m

**Al Hada road — contested, do not publish without checking Saudipedia
directly:**

- [Saudipedia — Aqabat al-Kurr](https://saudipedia.com/en/aqabat-al-kurr) — 87 km total; 20 km from Al Hada to Taif. **Strongest source**
- [VisitSaudi — Al-Hada Mountain](https://visitsaudi.com/en/destinations/taif/attractions/alhada-mountain-in-taif) — 2,177 m elevation
- A "93 curves" count and a "21 km descent" circulate on tourism blogs and
  conflict with the above. **Not to be published.**

## Riyadh → AlUla (~1,050 km, 10–12 hrs)

- [Rome2Rio — Riyadh to Banyan Tree AlUla](https://www.rome2rio.com/s/Riyadh/Banyan-Tree-AlUla) — 1,047.2 km, ~11h 50m
- [Air Miles Calculator — RUH to ULH](https://www.airmilescalculator.com/distance/ruh-to-ulh/) — 1,055 km, ~11h 19m
- [MustSeeSpots — Riyadh to AlUla](https://www.mustseespots.com/saudi-arabia/articles/how-to-get-from-riyadh-to-alula-transportation-options-explained/) — ~950–1,000 km, 9–11 hrs
- [Banyan Tree AlUla — location](https://www.banyantree.com/saudi-arabia/alula/location) — ~920 km, 9–10 hrs (city-centre measured, most optimistic)
- [SaudiAuto — scenic routes Riyadh to AlUla](https://saudiauto.com.sa/en/scenic-routes-riyadh-alula/) — **two routes**: via Qassim and Hail ~1,040 km / ~11 hrs; via Qassim and Madinah ~1,163 km / ~11h 35m. Attributed to the Roads General Authority
- [Arab News — roads to AlUla](https://www.arabnews.pk/saudi-arabia/roads-to-alula-offer-scenic-journey-through-saudi-arabias-diverse-landscapes-2654607)

**Flight competition:** [Flynas — Riyadh to AlUla](https://www.flynas.com/en/flights-from-riyadh-to-alula)
(~1h 10m direct) · [Experience AlUla — getting there](https://experiencealula.com/en/plan-your-trip/flying-to-alula) ·
[12Go](https://www.12go.asia/en/avia/riyadh/alula) · Skyscanner route pages. One
source reports ~20 flights/week AlUla→Riyadh as of August 2026 — **not
independently verified, and flight frequencies change; do not publish it as a
fact.**

## Riyadh → Buraydah (~360 km, ~3.5 hrs)

- [Air Miles Calculator — RUH to ELQ](https://www.airmilescalculator.com/distance/ruh-to-elq/) — 379.7 km, ~3h 45m
- [Himmera — Riyadh to Buraydah](https://distancecalculator.himmera.com/distance-riyadh-buraydah-146248.html) — 358 km, 3h 32m
- [TravelProfy — Buraydah to Riyadh airport](https://www.travelprofy.com/buraydah/riyadh-airport-ruh) — 355.46 km, ~3h 31m
- [Daytrip — Riyadh to Buraydah](https://daytrip.com/en/transfers/riyadh-sa/buraydah-sa) — 357 km, ~3h 30m
- [Blacklane — Buraidah to Riyadh](https://www.blacklane.com/en-sa/city-to-city/buraidah-riyadh/) — 365 km
- [Buraydah — Wikipedia](https://en.wikipedia.org/wiki/Buraydah,_Saudi_Arabia) — date market and camel market

**Note on "world's largest" claims.** The date market and camel market are
*widely described* as the largest of their kind. We found no independent
measurement. If mentioned at all, they must be attributed ("widely described
as") and never stated as fact.

## Riyadh → Hail (~630 km, 6–7 hrs)

- [Air Miles Calculator — RUH to HAS](https://www.airmilescalculator.com/distance/ruh-to-has/) — 624.3 km, ~6h 08m
- [Khaleej Calculators — Riyadh to Hail](https://khaleejcalculators.com/distance/riyadh/hail) — ~640 km via Qassim (Route 65); 584 km straight line
- [Daytrip — Riyadh to Hail](https://daytrip.com/en/transfers/riyadh-sa/hail-sa) — 624 km, ~6 hrs
- [Highway 65 (Saudi Arabia) — Wikipedia](https://en.wikipedia.org/wiki/Highway_65_(Saudi_Arabia)) — 1,427 km total; Riyadh–Qassim Expressway; runs north through Buraidah into Ha'il Province
- [AARoads wiki — Highway 65](https://wiki.aaroads.com/wiki/Highway_65_(Saudi_Arabia))
- [Gulf Construction — RGA routes Riyadh to Hail](https://gulfconstructiononline.com/ArticleTA/465896) and [TradeArabia](https://tradearabia.com/News/465896/Saudi-RGA-outlines-key-routes-linking-Riyadh-to-Hail-heritage-sites/TTN) — **two routes**: ~620 km via Al-Zulfi, Buraidah, Al-Shanan (~6 hrs); ~731 km via Al Muzahimiyah, Shaqra, Al-Nabhaniyah (~8 hrs)
- [Rock Art in the Hail Region — UNESCO](https://whc.unesco.org/en/list/1472) and [Wikipedia](https://en.wikipedia.org/wiki/Rock_Art_of_Hail_Province) — inscribed 2015; Jabal Umm Sinman at Jubbah ~90 km north-west of Hail
- [Saudipedia — visual icons in Hail Province](https://saudipedia.com/en/article/2019/culture/visual-arts/list-of-visual-icons-in-hail-province)

**A'arif Fort dating is contested** — sources give 1840 and "17th century". Do
not publish a date.

## Rail — the SAR North line

- [North–South railway (Saudi Arabia) — Wikipedia](https://en.wikipedia.org/wiki/North%E2%80%93South_railway_(Saudi_Arabia)) — passenger line ~1,250 km, Riyadh to Al-Qurayyat via Al-Majma'ah, Al-Qassim, Hail, Al-Jawf
- [Saudipedia — Saudi Arabia Railways](https://saudipedia.com/en/saudi-arabia-railways-%22sar%22)
- [Railway Gazette — SAR seeks more passenger trains](https://www.railwaygazette.com/traction-and-rolling-stock/saudi-arabia-railways-seeks-more-passenger-trains/70288.article)
- [Argaam — SAR to build new station in Al Zulfi](https://www.argaam.com/en/article/articledetail/id/1837284) — a seventh station, planned
- [12Go — SAR North Train](https://12go.asia/en/operator/sar-north-train)

**Verified:** the line exists and serves six operational passenger stations
including Qassim and Hail. **Not verified:** opening dates (sources conflict),
service frequencies, timetables, fares. Al-Jouf frequency is described as lower
than the rest by one travel guide only.

**Pages must state only that the line and stations exist, and refer readers to
the operator** — the same discipline the published Dammam page uses.

## Rail — what does NOT exist

- [Arab News — Riyadh–Jeddah railway planned by 2034](https://www.arabnews.pk/node/2630157)
- [Gulf News — $7bn Landbridge](https://gulfnews.com/amp/story/world%2Fgulf%2Fsaudi%2Fsaudi-arabia-to-build-7b-high-speed-rail-linking-red-sea-to-gulf-riyadh-to-jeddah-under-4-hours-1.500313330)
- [InfraPPP World — Landbridge launch](https://www.infrapppworld.com/update/saudi-arabia-launches-us7-billion-landbridge-railway-project-from-jeddah-on-red-sea-to-dammam-on-arabian-gulf)

**No Riyadh–Madinah passenger rail.** Haramain serves Makkah–Jeddah–KAEC–Madinah
only. The Riyadh–Jeddah Landbridge is **planned in phases to 2034** and not
running. Hail and Qassim appear in *freight* plans separately from the
passenger line. **Do not imply any Landbridge service exists.**

## Makkah city-entry rules — unresolved, and now moot for this phase

Searched and **not satisfactorily resolved.**

- [Enterprise car hire — Makkah](https://enterprise-perf1-aem.enterprise.fr/en/car-hire-locations/sa/makkah.html) — describes the city as off-limits to non-Muslims and the Makkah Gate on Highway 40 as the boundary marker. **A car-hire marketing page. Weak.**
- [Arab News](https://www.arabnews.pk/node/979841) — reports 12 entry checkpoints; officers examine Hajj permits and iqamas
- [Wego blog — Makkah entry permit explained](https://blog.wego.com/makkah-entry-permit-explained/) — describes a seasonal permit requirement and says that temporary restriction has ended. **A blog.**
- Madinah: sources conflict badly on whether and where a central-area
  restriction applies, and on enforcement.

**No official Saudi government source was reached for either city.**

**Therefore:** the Makkah page may state that entry rules exist, are set by the
authorities, change, and should be checked with official sources — and nothing
more specific. **No permit advice, no boundary claims, no enforcement
description.** The Madinah page should say less still. Getting this wrong would
be both a factual error and a sensitivity failure.

---

# Part 4 — Our own site

Inspected directly in the repository, 4 November 2026:

- [`lib/i18n/routes.ts`](../../lib/i18n/routes.ts) — the URL registry
- [`lib/i18n/config.ts`](../../lib/i18n/config.ts) — locale primitives
- [`lib/seo.ts`](../../lib/seo.ts) — metadata, canonicals, hreflang
- [`lib/structured-data.ts`](../../lib/structured-data.ts) — JSON-LD
- [`lib/content/navigation.ts`](../../lib/content/navigation.ts) — nav and footer
- [`lib/content/riyadh/`](../../lib/content/riyadh/) — the four cluster content modules
- [`lib/site-images.ts`](../../lib/site-images.ts) · [`lib/images.ts`](../../lib/images.ts) — image manifest and the locale-aware alt helper
- [`app/sitemap.ts`](../../app/sitemap.ts) · [`app/robots.ts`](../../app/robots.ts)
- `app/[locale]/` — all four published cluster pages and the homepage

Existing documentation reused rather than duplicated:

- [riyadh-url-inventory.md](../riyadh-url-inventory.md) — including the approved airport-page decision
- [riyadh-keyword-mapping.md](../riyadh-keyword-mapping.md) and [riyadh-keyword-checklist.md](../riyadh-keyword-checklist.md)
- [riyadh-internal-linking.md](../riyadh-internal-linking.md)
- [riyadh-seo-titles.md](../riyadh-seo-titles.md) — the title rule
- [riyadh-design-concepts.md](../riyadh-design-concepts.md) — Batch 1 signature elements, so Batch 2 does not repeat them
- [riyadh-image-inventory.md](../riyadh-image-inventory.md)
- [riyadh-content-research.md](../riyadh-content-research.md) — Batch 1 route sources
- [riyadh-qa-report.md](../riyadh-qa-report.md) — the launch blockers
- [brand-system.md](../brand-system.md) — the locked brand

## What was NOT inspected on our own site

- `/blog` — we have none.
- Server logs, analytics, Search Console — none available.
- Real-device rendering — reviewed in markup only, as in Batch 1.

---

# Part 5 — Method

1. Fetched the competitor's `robots.txt` and sitemap index; downloaded all 12
   sub-sitemaps; extracted and categorised all 1,236 URLs with a script.
2. Computed path distributions and city-token frequencies from that set.
3. Fetched 13 representative pages and extracted their on-page SEO surface with
   a script (same extraction for every page, so the rows are comparable).
4. Probed 9 URLs absent from the sitemap to test whether the gaps were real.
5. Ran 12 live web searches — 9 English, 3 Arabic — covering each Batch 2
   route's commercial and informational intent, plus rail and modal
   alternatives.
6. Read our own registry, metadata helpers, content modules and existing
   documentation.
7. Cross-checked every published route figure against at least two independent
   sources and recorded the spread rather than picking one.

## Classification discipline used throughout

| Label | Meaning |
| --- | --- |
| **Verified fact** | Multiple independent sources agree, or it is directly observable (an HTTP status, a sitemap count) |
| **Observed competitor content** | Read from their live page on 4 Nov 2026. Reported as theirs, not endorsed |
| **Keyword-tool data** | **None exists in this folder** |
| **SERP observation** | We ran the query and recorded what came back. Not a ranking |
| **Our recommendation** | A judgement, labelled as one |
| **Needs verification** | Flagged inline wherever it applies |

---

# Part 6 — Consolidated "must verify before publishing" list

| # | Item | Why |
| --- | --- | --- |
| 1 | **All volume and difficulty data** | Nothing is measured. Every priority is intent-ranked |
| 2 | **Re-run all Arabic SERPs from a Saudi locale** | Ours ran from a US environment; Arabic SERPs are strongly locale-sensitive |
| 3 | ~~Makkah and Madinah pilgrimage-intent share~~ | **Closed by owner decision:** both routes are excluded from this phase, so the question no longer gates any approved page |
| 4 | **Makkah / Madinah city-entry rules — official sources only** | Still unresolved, but **no longer blocking**: neither route is in scope. Must be settled before any future reconsideration |
| 5 | **SAR North line schedules and frequencies** | Station existence verified; service detail is not |
| 6 | **Al Hada road figures** | Check Saudipedia directly or publish none |
| 7 | **A'arif Fort dating** | Sources give 1840 and 17th century |
| 8 | **AlUla flight frequency (~20/week)** | Single source; frequencies change |
| 9 | **Buraydah "world's largest" market claims** | Widely repeated, never measured. Attribute or omit |
| 10 | **Competitor indexation** | Sitemap presence ≠ indexed |
| 11 | **Whether Hail is a destination or an AlUla-stage intent** | Changes the page's job. The approved order already places Hail immediately before AlUla, so it no longer changes the sequence |
| 12 | **The "what's included" table** in [content-strategy-and-design-plan.md](./content-strategy-and-design-plan.md) | A **proposal**. Needs owner confirmation; it is not yet a statement of fact |
| 13 | **Private driver hire — ten operational facts** (minimum hourly booking, hours in a full day, waiting time, included mileage, overrun, vehicle categories, leaving the city, multi-day driver continuity, notice required, unavailable periods) | **Blocks `/private-driver-hire/` entirely.** Scope is approved (hourly + full day); the arrangements are not confirmed. Full gate in [implementation-roadmap.md](./implementation-roadmap.md) §Stage 3 |
| 14 | **Official KKIA references** | Primary source for Batch 3; still unconsulted |
| 15 | **Official SAR station directory and network references** | Primary source for Batch 4; still unconsulted |
| 16 | **354 competitor `/blog/` URLs** | Enumerated, not read. Their content is not characterised anywhere here |

---

# Part 7 — Honest summary of this research's reliability

**Strong and directly evidenced:**

- The competitor's URL inventory, page families and naming conventions.
- The on-page SEO surface of the 13 pages fetched.
- The sitemap defects, the Arabic-serving-English page, and the missing
  hreflang on three large families.
- The **absence of competitor pages for five of our six Batch 2 routes** — the
  central finding, backed by both the full sitemap and direct 404 probes.
- Route distances and durations, each a cross-checked range.
- The existence of the SAR North line and its passenger stations.
- That the Riyadh→AlUla SERP is flight-dominated, and that Riyadh→Buraydah and
  Riyadh→Hail SERPs are held by international aggregators with inconsistent
  pricing.
- That Arabic commercial SERPs for these routes return classified ads rather
  than professional operators.

**Weak or unmeasured:**

- **All demand sizing.** Every single keyword.
- Competitor indexation and therefore their real visibility.
- Arabic SERP composition, because of the search locale.
- Anything about their 354 blog URLs.
- Makkah and Madinah entry rules.
- Whether Hail has standalone demand.

**The honest bottom line.** This research reliably establishes **where the
competitor is absent and where our content can be better**. It does **not**
establish **how much traffic any of it is worth**. The recommendations are
therefore sequenced by competitive gap and by our ability to publish honestly —
which is the right sequencing in the absence of data, and which a real keyword
tool could reorder.
