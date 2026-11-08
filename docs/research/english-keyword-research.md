# English keyword research — Saudi Arabia

Target country: **Saudi Arabia**. Language: **English**. Arabic is researched
separately and independently in
[arabic-keyword-research.md](./arabic-keyword-research.md) — not as a
translation of this document.

## Data availability — read this first

| Data type | Available? | Consequence |
| --- | --- | --- |
| Monthly search volume | **No** | No volume figure appears in this document |
| Keyword difficulty | **No** | No difficulty score appears |
| CPC | **No** | No CPC appears |
| Traffic estimates | **No** | None given |
| Ranking positions | **No** | No ranking claim is made |
| Live SERP composition | **Yes** | Used throughout; this is the primary evidence |
| Competitor on-page targeting | **Yes** | Observed directly, 4 Nov 2026 |
| Autocomplete / related searches | **Partial** | Only as surfaced inside search results, not as a clean scrape |

Ahrefs, Semrush, Moz and Google Keyword Planner are **not available in this
environment**. Every keyword below is selected on **observed SERP composition
and intent**, which was checked, plus competitor targeting. The *demand size*
behind each is unknown and is the first thing to validate with a real tool.

**Confidence levels used below**

| Level | Meaning |
| --- | --- |
| **High** | A live SERP was run for this phrase or a close variant and its composition observed; intent is unambiguous |
| **Medium** | Intent is clear from strong adjacent evidence (competitor on-page targeting, sibling-route SERP), but no SERP was run for this exact phrase |
| **Low** | Reasoned inference from market structure; needs a SERP check before it is relied on |

---

## What the SERPs actually look like

This is the most useful finding in the document, because it tells us what kind
of page wins.

| Query run | Who occupies the results | Implication |
| --- | --- | --- |
| `Riyadh to Makkah driving distance km hours by road` | rome2rio, distancesfrom.com, bookaway, low-quality distance mirrors | Informational SERP. No operator present. |
| `Riyadh to Madinah road distance km driving time` | distancesfrom, cleartrip, himmera, travelprofy, skyscanner, an expat forum | Informational, aggregator-dominated |
| `Riyadh to Taif distance km driving time road` | rome2rio ×10, himmera, airmilescalculator, one travel blog | Informational, aggregator-dominated |
| `Riyadh to AlUla distance km driving time road trip` | rome2rio, 12go, wingie ×8, flynas, airmilescalculator, banyantree, mustseespots | **Flight-dominated.** Airlines and flight metasearch outrank road content |
| `Riyadh to Buraydah taxi private car transfer booking` | **daytrip.com ×12, blacklane.com ×3**, city-airport-taxis | Commercial SERP held by **international aggregators**. No Saudi operator. |
| `Riyadh to Hail taxi private transfer car with driver booking` | **daytrip.com ×16** (one brand, sixteen slots) | Commercial SERP, effectively **one** incumbent |
| `Riyadh to Taif private transfer taxi car booking price` | aaa.com/tripcanvas, daytrip, wingie, rome2rio, lokalee, airportstaxitransfers, **taxiserviceksa (its Riyadh–Jeddah page)** | Mixed; no page actually about Riyadh→Taif |
| `"Riyadh to Makkah" OR "Riyadh to Madinah" private car transfer taxi book` | city-airport-taxis, airportstaxitransfers, **taxiserviceksa**, umrahpathtaxi, blacklane, daytrip | Commercial, several small operators |

**Four conclusions**

1. **There is no dominant Saudi-domiciled commercial incumbent** on the
   Riyadh-origin intercity SERPs. The competitive set is international
   aggregators (Daytrip, Blacklane, city-airport-taxis, airportstaxitransfers)
   plus a handful of small operators.
2. **Daytrip is the real competitor for Buraydah and Hail**, not
   taxiserviceksa. Daytrip publishes per-person USD prices that are
   inconsistent between its own pages (US$56 vs US$261 for the same
   Riyadh–Buraydah route; €88 vs €137 for Riyadh–Hail), which is a trust
   weakness we can beat with clear, consistent "how pricing works" copy.
3. **Distance and driving-time queries are a separate, aggregator-held SERP**
   on every route. Aggregators answer the question but cannot take a booking.
   That is the gap taxiserviceksa exploits with `/distance/*` and the one real
   content moat available to us.
4. **AlUla is the exception: that SERP is owned by flights.** A road-transfer
   page that ignores the flight is competing with the wrong intent and will
   lose. It must address flying honestly and position the drive for the people
   the drive actually suits.

---

## 1. Brand and site-level

| Keyword | Intent | Location | Type | URL (existing / proposed) | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| private transfers saudi arabia | Commercial | KSA national | Commercial | **existing** `/en` | High | SERP composition; our own H1 |
| private car transfer saudi arabia | Commercial | KSA national | Commercial | existing `/en` | Medium | Competitor H1 on `/` |
| private transfer service saudi arabia | Commercial | KSA national | Commercial | existing `/en` (secondary) | Medium | Variant |
| car with driver saudi arabia | Commercial | KSA national | Commercial | existing `/en` (secondary) | Medium | Competitor + OneClickDrive SERP |
| english speaking driver saudi arabia | Commercial, trust | KSA national | Commercial | existing `/en` (semantic) | Medium | Competitor H1 and H3 |
| door to door transfer saudi arabia | Commercial | KSA national | Commercial | existing `/en` (semantic) | Low | Competitor H3 |

**Supporting semantic phrases for `/en`:** pre-booked private vehicle, one
vehicle for your party, price agreed in writing, no shared shuttle, not a
ride-hailing app, licensed driver, quoted per journey.

## 2. City hub

| Keyword | Intent | Location | Type | URL | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| riyadh private transfers | Commercial | Riyadh | Commercial | **existing** `/en/riyadh` | High | Published; competitor equivalent at `/locations/riyadh/` |
| riyadh taxi service | Commercial | Riyadh | Commercial | existing `/en/riyadh` (secondary) | Medium | Competitor title |
| private transfer riyadh | Commercial | Riyadh | Commercial | existing `/en/riyadh` (secondary) | Medium | Variant |
| car with driver riyadh | Commercial | Riyadh | Commercial | existing `/en/riyadh` (secondary) | High | SERP (OneClickDrive family) |
| riyadh intercity transfer | Commercial | Riyadh | Commercial | existing `/en/riyadh` (secondary) | Medium | Competitor nav + our own hub |
| jeddah private transfers | Commercial | Jeddah | Commercial | **proposed** `/en/jeddah` | Medium | Competitor `/locations/jeddah/`; 80 of 303 route slugs touch Jeddah |
| dammam private transfers | Commercial | Dammam | Commercial | **proposed** `/en/dammam` | Medium | Competitor `/locations/dammam/`; 85 route slugs |
| al khobar private transfers | Commercial | Al Khobar | Commercial | **proposed** `/en/al-khobar` | Low | Competitor `/locations/al-khobar/` |

## 3. Airport transfers

The single biggest commercial keyword family we do not yet have a page for.

| Keyword | Intent | Location | Type | URL | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| riyadh airport transfers | Commercial | Riyadh / RUH | Commercial | **proposed** `/en/riyadh-airport-transfers` *(approved, Batch 3)* | High | Competitor standalone page; our own approved architecture |
| king khalid airport transfer | Commercial | RUH | Commercial | proposed, same page | High | Competitor title + H1 |
| riyadh airport taxi | Commercial | RUH | Commercial | proposed, same page (secondary) | High | Competitor slug, title, H1 |
| RUH airport transfer | Commercial | RUH | Commercial | proposed, same page (secondary) | Medium | Competitor H2 ×2 |
| riyadh airport to hotel | Commercial | RUH | Commercial | proposed, **H2 section** of same page | High | Competitor FAQ H3; our consolidation decision |
| hotel to riyadh airport | Commercial | RUH | Commercial | proposed, **H2 section** | Medium | Mirror intent |
| riyadh airport pickup | Commercial | RUH | Commercial | proposed, H2 Arrivals | Medium | Variant |
| riyadh airport meet and greet | Commercial | RUH | Commercial | proposed, H2 Arrivals | Low | Competitor meta |
| riyadh airport to jeddah | Commercial | RUH | Commercial | proposed, H2 Onward connections | Medium | Competitor `/routes/riyadh-to-jeddah-airport/` |
| jeddah airport transfer | Commercial | JED | Commercial | **proposed** `/en/jeddah-airport-transfers` *(later batch)* | Medium | Competitor standalone page |
| dammam airport transfer | Commercial | DMM | Commercial | **proposed** `/en/dammam-airport-transfers` *(later batch)* | Low | Competitor standalone page |

**Note on "taxi".** "Riyadh airport taxi" is likely a *different* intent from
"riyadh airport transfer": taxi skews price-led and walk-up, transfer skews
pre-booked. The competitor merges them. We should acknowledge "taxi" as a
secondary and a semantic phrase on the page, **not** build a second page for
it, and the research checklist flags confirming that split as a to-do.

## 4. Intercity — published routes

| Keyword | Intent | URL | Confidence | Source |
| --- | --- | --- | --- | --- |
| riyadh to jeddah private transfer | Commercial | **existing** `/en/riyadh-to-jeddah` | High | Published; competitor holds 4 URLs for it |
| riyadh to jeddah taxi | Commercial | existing (secondary) | High | Competitor title/H1 |
| riyadh to jeddah by road | Informational | existing (secondary) | High | SERP run |
| riyadh to jeddah distance | Informational | existing — answered in stat band | High | SERP run; aggregator-held |
| riyadh to dammam private transfer | Commercial | **existing** `/en/riyadh-to-dammam` | High | Published |
| riyadh to dammam train or car | Comparison | existing — the page's signature block | High | Competitor H2 "Private Car, Train or Bus?" |
| riyadh to al khobar private transfer | Commercial | **existing** `/en/riyadh-to-al-khobar` | High | Published |
| riyadh to bahrain causeway transfer | Commercial | existing (secondary) | Medium | Competitor `/border-crossings/taxi-king-fahd-causeway-border-crossing/` |

## 5. Intercity — Stage 2 (four routes)

Full per-route analysis with reverse-direction and modal-competition findings
is in
[riyadh-batch-2-keyword-mapping.md](./riyadh-batch-2-keyword-mapping.md).
Summary of the recommended English primaries:

| Keyword | Intent | URL | Confidence | Source |
| --- | --- | --- | --- | --- |
| riyadh to buraydah private transfer | Commercial | **proposed** `/en/riyadh-to-buraydah/` | High | SERP run; Daytrip/Blacklane only |
| riyadh to taif private transfer | Commercial | **proposed** `/en/riyadh-to-taif/` | High | SERP run; competitor 404s |
| riyadh to hail private transfer | Commercial | **proposed** `/en/riyadh-to-hail/` | High | SERP run; Daytrip only |
| riyadh to alula private transfer | Commercial | **proposed** `/en/riyadh-to-alula/` | High | SERP run — but flight-dominated |

**Excluded from this phase by owner decision:** `riyadh to makkah private
transfer` and `riyadh to madinah private transfer`. Both were researched and
both showed a real gap — Madinah has no commercial competitor page at all — but
neither is an approved target now. Not to be targeted, registered or linked.

## 6. Chauffeur and hourly driver — a whole family we have no page for

**Approved scope: hourly and full-day hire only.** Weekly and monthly hire are
not approved, so the corresponding keywords are deliberately absent from the
table below.

| Keyword | Intent | Location | Type | URL | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| hire a private driver riyadh | Commercial | Riyadh | Commercial | **proposed** `/en/private-driver-hire` | High | SERP run (Arabic equivalent); competitor page |
| private driver hire saudi arabia | Commercial | KSA | Commercial | proposed, same page | Medium | Competitor title + H1 |
| hourly driver riyadh | Commercial | Riyadh | Commercial | proposed, **H2** of same page | Medium | Competitor H2/H3 |
| car with driver by the day riyadh | Commercial | Riyadh | Commercial | proposed, H2 Full day | Medium | Competitor H3 "Full day" |
| chauffeur service riyadh | Commercial | Riyadh | Commercial | proposed, same page (secondary) | High | SERP — OneClickDrive owns this phrase |
| executive chauffeur saudi arabia | Commercial | KSA | Commercial | proposed, same page (secondary) | Low | Competitor `/services/vip-chauffeur/` |

**Important SERP note.** `chauffeur service riyadh` and its Arabic equivalent
are held by **OneClickDrive**, a car-rental-with-driver marketplace, not a
transfer operator. The intent there is partly *rental*, which is a different
product from ours. This page should be written for "I need a car and driver for
a block of time", and should say plainly that it is not a car rental.

## 7. Hotel transfers

| Keyword | Intent | Location | Type | URL | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| riyadh hotel transfers | Commercial | Riyadh | Commercial | **proposed** `/en/riyadh-hotel-transfers` *(Batch 5)* | Medium | Competitor `/services/riyadh-hotel-transfer/` |
| hotel to airport transfer riyadh | Commercial | Riyadh | Commercial | → **H2 of the airport page**, not its own URL | High | Our consolidation decision |
| hotel pickup riyadh | Commercial | Riyadh | Commercial | proposed (secondary) | Low | Variant |

## 8. Railway station transfers

| Keyword | Intent | Location | Type | URL | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| riyadh railway station transfer | Commercial | Riyadh | Commercial | **proposed** `/en/riyadh-railway-station-transfers` *(Batch 4)* | Low | Our own planned slug; competitor has `/locations/makkah/train-station/` and `/locations/madinah/train-station/` but **no Riyadh station page** |
| riyadh train station taxi | Commercial | Riyadh | Commercial | proposed (secondary) | Low | Inference from competitor's Makkah/Madinah equivalents |
| SAR north train station riyadh transfer | Commercial | Riyadh | Commercial | proposed (semantic) | Low | Verified the line exists (see Batch 2 doc) |

Competitor coverage here is genuinely thin, and the SAR North line we verified
during this research (Riyadh → Majmaah → Qassim → Hail → Al-Jouf → Qurayyat)
gives the Riyadh station page a natural internal link to the Buraydah and Hail
route pages. That reciprocity is a real structural advantage.

## 9. Day trips and sightseeing

| Keyword | Intent | Location | Type | URL | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| riyadh day trip private car | Commercial | Riyadh | Commercial | **proposed** `/en/riyadh-day-trips` | Low | Competitor `/services/tours/`, `/taif-day-trip`, homepage H3 "Sightseeing day trips" |
| diriyah transfer from riyadh | Commercial | Riyadh | Commercial | proposed, H2 or sub-location page | Medium | Competitor `/locations/riyadh/diriyah/` |
| edge of the world trip from riyadh | Commercial | Riyadh | Commercial | proposed, H2 | Low | Our existing homepage guide content |

## 10. Sub-location transfers (the competitor's best idea)

Low confidence across the board — these need SERP checks before any are built.
Listed because the pattern is strong, not because the demand is proven.

| Keyword | URL pattern | Confidence |
| --- | --- | --- |
| transfer to KAFD riyadh | `/en/riyadh/kafd` | Low |
| diriyah / bujairi terrace transfer | `/en/riyadh/diriyah` | Low |
| diplomatic quarter transfer riyadh | `/en/riyadh/diplomatic-quarter` | Low |
| riyadh front / boulevard world transfer | `/en/riyadh/<place>` | Low |

**Recommendation: do not build these yet.** Four thin sub-location pages would
undo the consolidation discipline we just applied to the airport page. Build
them only where a SERP check shows a distinct intent, and start with **one**
(KAFD or Diriyah) as a test.

## 11. Border and cross-border

| Keyword | Intent | Location | Type | URL | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- |
| king fahd causeway transfer | Commercial | Al Khobar / Bahrain | Commercial | existing `/en/riyadh-to-al-khobar` (secondary) → later `/en/king-fahd-causeway-transfers` | Medium | Competitor `/border-crossings/taxi-king-fahd-causeway-border-crossing/` |
| salwa border crossing taxi | Commercial | Salwa | Commercial | **proposed, later batch** | Low | Competitor page |
| riyadh to bahrain private car | Commercial | Cross-border | Commercial | **proposed, later batch** | Low | Competitor `/routes/riyadh-bahrain/` + `/bus/riyadh-to-bahrain/` |

Cross-border raises real operational questions (vehicle permissions, insurance,
border formalities) that we must not answer until the business confirms them.
Our Al Khobar page already states plainly that we do not handle visas or border
formalities. **Any cross-border page must repeat that or not exist.**

## 12. Informational keywords — the distance family

| Keyword pattern | Intent | Where it should live | Confidence | Source |
| --- | --- | --- | --- | --- |
| riyadh to `<city>` distance | Informational | **Inside the route page's stat band + FAQ**, not a separate URL | High | SERP run on 6 routes; aggregator-held |
| how far is `<city>` from riyadh | Informational | Route page FAQ, phrased as the question | High | Competitor FAQ H3 pattern |
| riyadh to `<city>` driving time | Informational | Route page stat band | High | SERP run |
| how long does riyadh to `<city>` take by car | Informational | Route page FAQ | High | Competitor FAQ H3 |
| why do distance figures differ between websites | Informational, trust | Route page FAQ | Medium | Competitor FAQ H3 — and **our strongest honest angle** |
| riyadh to alula flight or drive | Comparison | **AlUla route page, a required H2** | High | SERP run — flights dominate |
| riyadh to dammam train or car | Comparison | Existing Dammam page comparison block | High | Published |
| is there a train from riyadh to `<city>` | Informational | Route page FAQ, per route | High | Verified SAR network (see Batch 2 doc) |

### The architectural decision this raises

The competitor splits distance onto 63 separate URLs. **Recommendation: do
not.** Reasons:

1. Our route pages already answer the distance question in a sourced stat band
   with an honest range and a footnote explaining the spread — which is better
   content than a templated distance page.
2. A `/distance/riyadh-to-jeddah` page alongside `/riyadh-to-jeddah` would
   create exactly the cannibalisation we just criticised in the competitor,
   who has four URLs for that one journey.
3. Our differentiator is *one page that answers the question and can take the
   booking*. Splitting it gives that up.

Revisit **only** if a real keyword tool later shows that distance demand is
large and genuinely separable from booking demand. Recorded as an open question
in [seo-opportunities-and-priorities.md](./seo-opportunities-and-priorities.md).

## 13. Price-related keywords — and how to compete without prices

| Keyword | Intent | Can we target it? | Approach |
| --- | --- | --- | --- |
| riyadh to jeddah taxi fare / price | Commercial, price-led | **Partially** | Answer *how* pricing works, what is included, what is quoted separately — never a number |
| how much does a private car from riyadh to `<city>` cost | Commercial, price-led | Partially | FAQ: what the quotation depends on and what is never added afterwards |
| fixed price taxi saudi arabia | Commercial, trust | **Yes** | We genuinely do agree the price in writing before anything is reserved. That is a true claim and a strong one |
| what's included in a private transfer | Informational, trust | **Yes** | Direct match for the "Included / Quoted separately" pattern |
| cheap taxi riyadh | Price-led | **No** | Wrong product and we cannot substantiate it |

**This is the central strategic tension.** The competitor wins price queries by
publishing prices in meta descriptions. We cannot. The honest counter-position
is the *process*: a written quotation before anything is reserved, no payment
to get a quote, nothing added afterwards. Pages should say that plainly and
often, because it is true and it is what a price-anxious searcher actually
wants to know.

## 14. Keywords to deliberately avoid

| Keyword | Why avoid |
| --- | --- |
| hajj / umrah / ziyarat transfer terms | Explicitly out of scope for this phase. Makkah and Madinah are ordinary intercity destinations here |
| `<nationality>` pilgrims taxi | Scaled content abuse; out of scope |
| cheapest taxi / lowest price `<route>` | Cannot substantiate; wrong positioning |
| airport taxi stand / walk-up taxi | Not our product |
| `<company name>` transfer (Aramco, DHL, Bechtel…) | Third-party trademarks, no defensible user value |
| limousine hire | Implies a fleet class we have not confirmed |
| licensed / government-approved operator | Not verified for this business |

## 15. Validation checklist for this document

Run before any of the proposed pages is written:

- [ ] Pull volume and difficulty for every **primary** above, Saudi Arabia
      locale, English, separately from Arabic.
- [ ] Confirm `riyadh airport taxi` vs `riyadh airport transfers` are one
      intent or two. If two, the second becomes a documented secondary, not a
      new page.
- [ ] Confirm `chauffeur service riyadh` intent is transfer-led and not
      rental-led. If rental-led, de-prioritise it as a primary.
- [ ] Measure distance-query demand per route and decide the `/distance/` split
      question above on data, not on principle.
- [ ] Check reverse-direction demand for all nine route pages
      (`jeddah to riyadh` etc.). If substantial, it is a return-leg H2, not a
      URL.
- [ ] Check whether sub-location queries (KAFD, Diriyah) have distinct intent
      before building any of them.
- [ ] After launch, reconcile all of the above against Search Console query
      data for the same URLs.
