# Competitor gap analysis

> **Revised 4 November 2026 after the owner's strategy decisions:** Makkah and
> Madinah excluded from this phase; private driver hire approved for hourly and
> full-day only; all URLs now carry a trailing slash.

Our site as inspected on 4 November 2026: route registry
[`lib/i18n/routes.ts`](../../lib/i18n/routes.ts), sitemap
[`app/sitemap.ts`](../../app/sitemap.ts), navigation
[`lib/content/navigation.ts`](../../lib/content/navigation.ts), and the
published Batch 1 cluster.

## Where we stand today

| | Us | taxiserviceksa.com |
| --- | --- | --- |
| Indexable URLs | **10** | ~1,230 submitted (indexation unverified) |
| Published route pages | 4 (hub + 3 routes) × 2 locales | 303 route + 63 distance + 126 location |
| Locales | **2, both complete** | 3, one complete |
| Arabic share of URLs | **50%** | 6.3% |
| hreflang | **Complete, reciprocal, every page** | Inconsistent; absent on ~492 pages |
| Published prices | None | Per-route, per-vehicle, in meta descriptions |
| Named fleet | None | 6+ named vehicle models, photographed |
| Named staff | None | 4 driver profiles + `Person` schema |
| Trust claims | None beyond what is true | "25,000+ travellers", "100% licensed", "founded 2014" |
| Schema depth | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` | All of ours plus `TaxiService`, `Offer`, `Trip`, `City`, `Person`, `ContactPoint`, `OpeningHoursSpecification`, `SiteNavigationElement`, `Speakable` |
| Conversion mechanism | Web form, **no delivery endpoint configured** | WhatsApp, named in every CTA |
| Content honesty | Sourced ranges, stated limitations, no invented facts | Mostly honest on distances; unverifiable trust claims; scaled templated content |

Read plainly: they have scale, prices, a fleet, staff and a working booking
channel. We have **bilingual completeness, honest sourcing and a clean
architecture**. The strategy has to be built on what we actually have.

---

## The gap table

Required format. "Opportunity" is rated on whether we can realistically win,
not on assumed volume — no volume data exists.

| Competitor keyword | Competitor URL | Our existing target | Opportunity | Recommended action |
| --- | --- | --- | --- | --- |
| riyadh to jeddah taxi | `/routes/riyadh-jeddah/` (+3 more URLs) | `/en/riyadh-to-jeddah` | **Medium** — they are strong here (2,769 words, prices) but split across 4 URLs | Keep one page. Add "taxi" and "by road" as secondaries in body copy. Add a "what's included / quoted separately" block. Do **not** split off a distance page |
| riyadh to dammam taxi | `/routes/riyadh-dammam/` (+2 more) | `/en/riyadh-to-dammam` | **High** — our road-vs-rail comparison is better content than theirs | Hold. Strengthen the rail block with the verified SAR line detail |
| riyadh to al khobar | **none** (404) | `/en/riyadh-to-al-khobar` | **High** — we have a page, they do not | Hold. Add causeway secondary terms |
| riyadh to makkah taxi | `/routes/riyadh-makkah/` + `/ar/` + `/distance/` | **none** | Gap is real (their page is their *thinnest* Riyadh route — 1,052 words, 4 H2s, no FAQ schema) | **EXCLUDED from this phase by owner decision.** Do not build, register or link |
| riyadh to madinah | `/distance/riyadh-to-madinah/` only — commercial page **404** | **none** | Gap is real and larger — no commercial page in the market at all | **EXCLUDED from this phase by owner decision.** Do not build, register or link |
| riyadh to taif | `/distance/riyadh-to-taif/` only — commercial **404** | **none** | **Very high** — a live SERP for "Riyadh to Taif private transfer" returned their *Riyadh–Jeddah* page | **Build — Stage 2, build 2.** Mountain-road angle is unoccupied |
| riyadh to alula | `/distance/riyadh-to-alula/` only — commercial **404** | **none** | **High, with a caveat** — SERP is flight-dominated | **Build — Stage 2, build 4**, with a required "drive or fly" H2. Owner has made the honest comparison mandatory |
| riyadh to buraydah | **nothing — both 404** | **none** | **Very high** — SERP held by Daytrip/Blacklane with inconsistent prices | **Build — Stage 2, build 1.** No Saudi operator present at all |
| riyadh to hail | **nothing — both 404** | **none** | **Very high** — SERP is 16/16 one aggregator | **Build — Stage 2, build 3.** Add the verified SAR rail comparison |
| riyadh airport taxi / RUH transfer | `/riyadh-airport-taxi` | **none** | **Very high** — our single biggest missing commercial family | **Build (Batch 3)** as one consolidated page, already approved |
| riyadh airport to hotel · hotel to airport | `/locations/riyadh/` FAQs | **none** | High | **H2 sections** of the airport page. Not separate URLs — decision already recorded |
| private driver hire · hourly chauffeur | `/services/private-driver/`, `/riyadh-chauffeur` | **none** | **High** — a complete service family we have no page for | **Build — blocked, not scheduled.** One page, **hourly and full-day only** (approved scope). Say plainly it is not car rental. Blocked on a 10-item operational verification gate |
| chauffeur service riyadh (AR: استئجار سيارة مع سائق) | `/services/vip-chauffeur/` | none | Medium — SERP held by OneClickDrive, a *rental* marketplace | Same page as above. Target the transfer intent, not the rental intent |
| `<a>` to `<b>` distance by road | 63 × `/distance/*` | Answered **inside** our route pages' stat bands | Medium | **Do not build a distance family.** Strengthen the in-page answer: "Quick answer" FAQ phrasing, a "why figures differ" FAQ, and a visible last-checked date |
| riyadh hotel transfers | `/services/riyadh-hotel-transfer/` | none | Medium | **Build (Batch 5)** as planned |
| riyadh railway station transfer | **none** — they have Makkah/Madinah station pages but no Riyadh one | none (Batch 4 planned) | **High** — unoccupied, and the SAR North line links it to Buraydah and Hail | **Build (Batch 4).** Consult the official SAR references first |
| transfer to KAFD / Diriyah / Diplomatic Quarter | `/locations/riyadh/<place>/` × 7 | Mentioned in hub body copy only | Medium, unproven | **Do not build yet.** SERP-check first; then **one** pilot page |
| king fahd causeway transfer | `/border-crossings/taxi-king-fahd-causeway-border-crossing/` | Secondary on `/en/riyadh-to-al-khobar` | Medium | Keep as a secondary for now. A dedicated page only once vehicle-permission facts are confirmed by the business |
| salwa / al batha border crossing taxi | 12 × `/border-crossings/*` | none | Low for now | Defer. Cannot publish border content we cannot substantiate |
| riyadh to bahrain / doha / dubai private car | `/routes/riyadh-<city>/` + `/bus/*` | none | Low for now | Defer for the same reason |
| jeddah · dammam · makkah · madinah city hubs | `/locations/<city>/` | none — homepage mentions only | **High, later** | **Build after Riyadh is complete.** Jeddah first: it carries 80 of their 303 route slugs |
| event transport · wedding transport | `/services/event-transport/`, `/events/` | none | Low | Defer. A real operational capability question |
| women transport · wheelchair taxi | `/services/women-transport/`, `/services/wheelchair-taxi/` | none | **Do not build** | These promise specific operational capabilities. Only if and when the business confirms them |
| b2b / corporate travel | `/services/b2b-solutions/` ×3 overlapping pages | none | Low–medium | Defer. One page eventually, not three |
| taxi driver jobs `<city>` | ~36 recruitment pages | none | **Out of scope** | Not an SEO target for this site |
| `<nationality>` pilgrims umrah taxi | ~80 × `/guides/international/*` | none | **Avoid** | Scaled content abuse and out of approved scope |
| `<company>` dammam to bahrain taxi | 9+ named-company route pages | none | **Avoid** | Third-party trademarks, no defensible value |
| umrah / ziyarat / hajj transport | `/services/umrah-transport/`, `/guides/*`, nav slot | Homepage pilgrimage section only | **Out of scope this phase** | Leave as is. Explicitly excluded by instruction |

---

## The eight required findings

### 1. Keywords the competitor targets that we do not

In rough priority order:

1. **Riyadh airport / RUH transfers** — the largest single commercial family
   we lack. Approved for Batch 3.
2. **Private driver hire — hourly and full day** — a complete service intent
   with no page on our site at all. (Their weekly and monthly packages are
   **not** approved for us.)
3. **Riyadh railway station transfers** — and *they* do not have it either.
4. **City hubs outside Riyadh** — Jeddah, Dammam, Makkah, Madinah, Al Khobar.
5. **Sub-location transfers** — KAFD, Diriyah, Diplomatic Quarter, corniche.
6. **Distance / driving-time queries as a standalone family** — we answer the
   intent, they own the URL pattern.
7. **Hotel transfers.**
8. **Border crossings and cross-border routes.**
9. **Day trips and sightseeing** — we have guide content on the homepage but no
   commercial page.
10. **Cruise port / sea port transfers** — `/services/jeddah-port-taxi-transfer/`.

### 2. Keywords we already target adequately

- `riyadh private transfers` — our hub is comparable to theirs and better
  structured (one H1, clean hierarchy; theirs runs 17 H2s on one page).
- `riyadh to jeddah / dammam / al khobar private transfer` — all three
  published bilingually. Al Khobar beats them outright: they have no page.
- `riyadh to dammam train or car` — our two-column road-vs-rail comparison is
  more useful than their single "Private Car, Train or Bus?" H2, and it
  recommends the train where the train is better. That honesty is a
  differentiator, not a leak.
- **Arabic intercity intent generally** — by default, because they barely
  compete in Arabic.

### 3. Keywords where our content could be stronger

| Keyword | What is missing | Fix |
| --- | --- | --- |
| riyadh to `<city>` **fare / price** | We say nothing about pricing structure | Add a "what's included / quoted separately / how the quotation is built" block to every route page. No numbers |
| riyadh to `<city>` **distance** | Answered, but buried in a stat band | Add a "Quick answer" FAQ pattern and a visible "figures last checked" date. Their most citable feature, trivially matchable |
| **why distance figures differ** | We explain it in a footnote and in `docs/` | Promote to a user-facing FAQ. It is a trust-builder and we are better placed to answer it than anyone |
| **vehicle choice for N passengers** | Generic vehicle section | Per-route guidance: a 9-hour drive and a 3.5-hour drive need different advice |
| **one way / return / multi-day** | Mentioned in prose | Make it an explicit H3 set. They do; it is a real question |
| **riyadh airport as a journey origin** | Mentioned in route stage copy | Will be a proper H2 once the airport page exists |
| **Arabic colloquial register** | Our Arabic is formal throughout (نقل خاص) | Introduce توصيل and مشوار into H2s, FAQs and body copy. The formal term stays the primary |

### 4. Keywords that should **not** have separate pages

| Keyword set | Why | Where it goes instead |
| --- | --- | --- |
| airport→hotel and hotel→airport | One intent, two directions | **H2 sections** of `/riyadh-airport-transfers` (decided) |
| `<route>` distance / driving time | Same journey, informational framing | Stat band + FAQ **on the route page** |
| `<route>` taxi vs `<route>` private transfer vs `<route>` private car | Synonyms | One page. Secondaries in body copy |
| reverse directions (`jeddah to riyadh`) | Same journey | A return-leg **H2**, pending a demand check |
| Arabic spelling variants (العُلا/العلا, حائل/حايل) | Same keyword | One page; variants in body copy |
| hourly vs full-day driver hire | One product, two approved durations | Two H2s on one `/private-driver-hire/` page. Weekly and monthly are **not approved** and get no section at all |
| `riyadh to dammam` vs `riyadh to al khobar` | **Genuinely different** — business vs leisure, rail alternative vs causeway | Already correctly two pages |
| `riyadh north` vs `riyadh east` station | **Genuinely different** — different lines | Two pages, as planned |

### 5. Opportunities for additional service pages

Ranked by our ability to deliver them honestly today:

| Page | Confidence we can write it truthfully | Notes |
| --- | --- | --- |
| `/private-driver-hire` | **High** — it is a booking pattern, not a claim | Highest-value non-route page available |
| `/riyadh-airport-transfers` | **High** — approved, facts are public | Batch 3 |
| `/riyadh-railway-station-transfers` | **High** — once SAR references are read | Batch 4 |
| `/riyadh-hotel-transfers` | High | Batch 5 |
| `/riyadh-day-trips` | Medium — needs a confirmed day-hire product | Overlaps `/private-driver-hire`; may be one page |
| `/king-fahd-causeway-transfers` | **Low** — needs confirmed vehicle permissions | Do not build until the business confirms |
| `/corporate-transfers` | Low — needs a confirmed B2B process | Defer |
| `/event-transport` | Low | Defer |
| `/women-transport`, `/wheelchair-taxi` | **Low — do not build** | These are operational promises about drivers and vehicles. Publishing them without confirmation would be exactly the kind of fabrication the project rules forbid |

### 6. Opportunities for new city and route clusters

**Do not start any of these until Riyadh is complete**, per the standing
instruction. Recorded for sequencing:

| Cluster | Why | Evidence |
| --- | --- | --- |
| **Jeddah** | Their strongest city — 80 of 303 route slugs. Also the natural reverse direction of our Riyadh–Jeddah page | Inventory |
| **Dammam / Eastern Province** | 85 route slugs, heavily cross-border | Inventory |
| **Makkah / Madinah intercity** | **Excluded from the current phase by owner decision**, routes and pilgrimage positioning alike. Reconsiderable only by a separate strategic decision | Out of scope |
| **Taif, AlUla, Tabuk, Abha** | Tourism corridors; Tabuk is 78 of their slugs and almost entirely programmatic — weak content, beatable | Inventory |
| **Qassim (Buraydah, Unaizah, Ar Rass)** | **Zero competitor coverage**; the SAR rail line serves it | 404 probes + rail verification |

### 7. Potential keyword cannibalisation

**On their site** — instructive, not actionable for us: Riyadh–Jeddah has
**four** URLs, Riyadh–Dammam **three**, plus two privacy pages and three
overlapping B2B pages.

**Risks on our own site** — these are the ones to manage:

| Risk | Assessment | Mitigation |
| --- | --- | --- |
| `/riyadh` hub vs `/riyadh-airport-transfers` | **Real.** Our hub's H1 is "Private transfers in and from Riyadh" and it already discusses the airport | When the airport page lands, trim the hub's airport section to a summary plus a link. The hub stays a junction, not a competitor |
| `/riyadh-to-dammam` vs `/riyadh-to-al-khobar` | Low — deliberately separated by intent | Hold. Keep the honest "Al Khobar is the same road" framing |
| `/riyadh-to-buraydah` vs a future `/riyadh-to-qassim` | **Would be real** | Never build both. One page, city slug, region as secondary |
| `/riyadh-to-makkah` vs `/riyadh-to-taif` | Low — but they share Highway 40 west and the Taif junction | Cross-link explicitly; make the Taif detour a named stage on the Makkah page |
| `/private-driver-hire` vs `/riyadh-day-trips` | **Real** | Consider one page. Do not build both without a demonstrated intent split |
| Our homepage vs `/riyadh` hub | Low currently | Watch it as more city hubs are added |

### 8. Missing internal links

Checked against our published site. All are **recommendations**, not changes.

| Missing link | Why it matters |
| --- | --- |
| Footer/services "Airport transfers" → homepage anchor | Should point at `/riyadh-airport-transfers` once built. Already recorded in [riyadh-internal-linking.md](../riyadh-internal-linking.md) |
| Route pages → a distance/FAQ anchor | Minor: deep-link the stat band so "how far is it" has a target |
| Riyadh hub → the six Batch 2 routes | Currently plain text under "being written". Promote to links on publish |
| Future Riyadh station page ↔ Buraydah and Hail routes | **The SAR North line makes this reciprocal and genuinely useful.** Same pattern as the existing Riyadh East → Dammam/Al Khobar requirement |
| Makkah route ↔ Taif route | They share the Highway 40 corridor and the Taif junction |
| AlUla route ↔ Hail route | The fastest road route to AlUla runs **through** Hail (verified). A real, useful link, and a reason to build Hail before or with AlUla |
| Buraydah route ↔ Hail route | Highway 65 runs Riyadh → Buraydah → Hail. Buraydah is a genuine stage of the Hail journey |
| `/private-driver-hire` → city hubs and day trips | Once built |
| Homepage destinations menu → real city hubs | Seven of eight cities are `planned` text today |

---

## What we should not copy, restated

Collected here because the specification asks for a learning analysis, not an
imitation plan. Each of these would make our site worse or expose it to risk:

1. **Published per-route prices.** Their biggest advantage and our hardest
   constraint. No pricing is established for this business. The honest
   counter-position is process transparency.
2. **~80 nationality-templated pilgrimage pages.** Scaled content abuse, and
   out of scope.
3. **Named-company route pages.** Trademark exposure.
4. **Unverifiable trust claims** — "25,000+ travellers", "100% licensed",
   "founded 2014".
5. **Named-vehicle photography.** No confirmed fleet.
6. **Driver profile pages.** Only with real, consenting staff.
7. **PAA-harvested FAQs.**
8. **251 images on one page.**
9. **Four URLs per journey.**
10. **A third locale (Urdu)** before Arabic is winning.
11. **Arabic as a translation layer.** Their single clearest quality failure,
    and the thing we already do better.
