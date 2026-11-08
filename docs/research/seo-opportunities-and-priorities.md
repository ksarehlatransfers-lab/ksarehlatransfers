# SEO opportunities and priorities

Ranked recommendations. Research only — nothing is built.

> **Revised 4 November 2026.** The sequence below is now the owner's **approved**
> seven-stage plan — see [implementation-roadmap.md](./implementation-roadmap.md),
> which is the authoritative roadmap. Makkah and Madinah are excluded from this
> phase; private driver hire is approved for hourly and full-day only.

## How these are ranked

**Not by estimated traffic.** No volume data exists in this environment, so a
traffic-ranked list would be fabricated. The ranking is by:

1. **Competitive gap** — verified absence of a competitor page (HTTP-probed).
2. **Our ability to write it honestly today** — no unconfirmed operational
   claims required.
3. **Structural leverage** — does it strengthen other pages through linking.
4. **Readiness** — are the facts and images in hand.

---

## Priority 0 — blockers that cap everything else

These are not SEO tasks. They are the reason SEO work has limited return right
now.

| # | Item | Why it is P0 |
| --- | --- | --- |
| **0.1** | **`INQUIRY_WEBHOOK_URL` is unset** | Every CTA on the site leads to a form with no delivery endpoint. It tells visitors plainly that their details were not sent, which is honest but means **the site cannot currently convert**. Ranking a page that cannot take an enquiry is wasted work |
| **0.2** | **`NEXT_PUBLIC_SITE_URL` at build time** | Inlined at build, not read at runtime. A production build without it emits `http://localhost:3000` canonicals, hreflang and sitemap entries — which would actively harm indexing |
| **0.3** | **Decide on a WhatsApp channel** | The competitor's entire conversion mechanism, named in meta descriptions, H2s and CTAs. It is the market-appropriate channel in Saudi Arabia. A decision for the owner, but it likely matters more than any page in this document |

**Nothing below should be prioritised above these three.**

---

## Priority 1 — Batch 2, the verified open market

Approved scope: **four routes, eight URLs**, English and Arabic together. The
ordering is the owner's approved build order and matches
[riyadh-batch-2-keyword-mapping.md](./riyadh-batch-2-keyword-mapping.md) — it is
driven by competitive gap and readiness, not by alphabet or distance.

| Build | Page | Gap evidence | Readiness |
| --- | --- | --- | --- |
| **1** | `/riyadh-to-buraydah/` | Competitor 404 on **both** `/routes/` and `/distance/`. SERP held by Daytrip/Blacklane with prices contradicting their own pages. Arabic SERP is 100% classified ads | Facts ✅ · **Image needed** |
| **2** | `/riyadh-to-taif/` | Competitor 404. A live SERP for the exact commercial phrase returned their **Riyadh–Jeddah** page | Facts ✅ (minus contested Al Hada figures) · Image ✅ `dest-taif` |
| **3** | `/riyadh-to-hail/` | **16 of 16** SERP results from one aggregator — least contested result set in the study | Facts ✅ · **Image needed** |
| **4** | `/riyadh-to-alula/` | Competitor 404 — but the SERP is **flight-dominated**, so the owner has made a drive-or-fly comparison mandatory | Facts ✅ · Image ✅ `guide-alula` |

**Excluded from this phase by owner decision:** `/riyadh-to-makkah/` and
`/riyadh-to-madinah/`. The gap for both was real — Madinah has no commercial
competitor page at all — but neither is to be built, registered or linked, and
no pilgrimage-focused content is to be created for either destination. The
pilgrimage-intent question that was open against them is now **closed by
decision rather than by data.**

**Two images must be sourced** (Buraydah/Qassim, Hail) and the already-identified
**Highway 65** photograph pinned, before builds 1 and 3 can ship properly.

---

## Priority 2 — improvements to published pages

No new URLs. Each closes a verified gap against the competitor and most are
small.

| # | Change | Applies to | Effort | Why |
| --- | --- | --- | --- | --- |
| **2.1** | **"Quick answer" first line on every FAQ** | All 4 cluster pages, both locales | Low | Their most citable feature. Pure formatting — our answers are already good, they just bury the answer |
| **2.2** | **"What's included / quoted separately" block** | All 4 cluster pages | Medium | The honest answer to price intent, which is our biggest keyword gap. **Needs owner confirmation of the contents** |
| **2.3** | **Visible "figures last checked" date** beside the stat band | All 4 cluster pages | Low | Cheap honesty signal; we have the sourcing to back it |
| **2.4** | **Promote "why do distance figures differ?" to a user-facing FAQ** | All route pages | Low | Currently a footnote and a `docs/` note. It is a trust-builder and we are better placed to answer it than anyone |
| **2.5** | **FAQ headings in question form** | All pages, both locales | Low | Theirs read as the user's own words; ours read as topics |
| **2.6** | **Arabic register: introduce توصيل and مشوار** into H2s, FAQs, body | All Arabic pages | Medium | Our Arabic is formal throughout. Real searchers use these words. Primary stays نقل خاص |
| **2.7** | **Region secondaries** — القصيم, المنطقة الشرقية | Arabic route pages | Low | Arabic local search appears to favour regions more than English does |
| **2.8** | **Per-route vehicle guidance** sized to journey length | All route pages | Low | A 9-hour drive and a 3.5-hour drive need different advice. Currently generic |
| **2.9** | **One-way / return / multi-day as explicit H3s** | All route pages | Low | A real question, currently buried in prose |
| **2.10** | **Expand the Dammam rail column** with the verified SAR line detail | `/riyadh-to-dammam` | Low | Still no timetables or fares |
| **2.11** | **Trim the hub's airport section** to a summary + link | `/riyadh` | Low | **Only when the airport page ships.** Prevents the one real cannibalisation risk on our own site |

**2.1 through 2.5 are a single cheap pass** with a disproportionate effect on AI
citability. If only one group of items from this document is actioned, it should
be that one.

---

## Priority 3 — the missing commercial families

| # | Page | Gap | Blocker |
| --- | --- | --- | --- |
| **3.1** | **`/private-driver-hire/`** (Stage 3) | A complete service intent with **no page on our site at all**. Competitor has `/services/private-driver/` plus `/riyadh-chauffeur`. Both the English and Arabic SERPs are held by OneClickDrive, a *rental* marketplace — so the page that explains "this is not a car rental" has a real job to do | **Scope approved: hourly + full-day only.** Now blocked on a **10-item operational verification gate** with the driver partners — see [implementation-roadmap.md](./implementation-roadmap.md) §Stage 3 |
| **3.2** | **`/riyadh-airport-transfers/`** (Stage 4) | Our single largest missing commercial family. Architecture already approved: one page, four H2s | Read the **official KKIA references** first. Source a KKIA image — `svc-airport` is *Jeddah's* airport and must not stand in |
| **3.3** | **`/riyadh-railway-station-transfers/`** (Stage 5) | **Unoccupied by the competitor too** — they have Makkah and Madinah station pages but none for Riyadh. The SAR North line makes it reciprocally linkable to Buraydah and Hail | Read the **official SAR references** first |
| **3.4** | **`/riyadh-hotel-transfers/`** (Stage 6) | Competitor has `/services/riyadh-hotel-transfer/` | None, but it is the smallest intent of the four |

---

## Priority 4 — after the Riyadh cluster is complete

Standing instruction: do not move to another city until Riyadh is properly
implemented, documented and tested.

| # | Cluster | Why this order |
| --- | --- | --- |
| **4.1** | **Jeddah city hub + routes** | Their strongest city — 80 of 303 route slugs. Also the reverse direction of our best page |
| **4.2** | **Dammam / Eastern Province hub** | 85 route slugs; we already hold two route pages into the region |
| **4.3** | **Qassim regional cluster** (Unaizah, Ar Rass) | **Zero competitor coverage**; the SAR line serves it; builds on Batch 2 |
| **4.4** | **Taif, AlUla, Tabuk, Abha tourism corridors** | Tabuk is 78 of their slugs and almost entirely programmatic — weak content, beatable |
| **4.5** | **Sub-location pages** (KAFD, Diriyah, …) | Their best structural idea. **SERP-check first, then build exactly one as a pilot.** Four thin pages would undo the consolidation discipline we just applied |

---

## Priority 5 — deferred pending facts we do not have

Not low value. **Blocked.** Each needs the business to confirm an operational
reality before a word can be published.

| Page | What must be confirmed first |
| --- | --- |
| `/king-fahd-causeway-transfers` | Vehicle permissions for crossing, insurance position. Our Al Khobar page currently says plainly that we do **not** handle visas or border formalities — any causeway page must repeat that or not exist |
| Cross-border routes (Bahrain, Qatar, UAE) | Same, plus whether the service exists at all |
| `/women-transport` | Whether female drivers or a specific service can actually be arranged |
| `/wheelchair-taxi` | Whether accessible vehicles can actually be arranged |
| `/event-transport`, `/corporate-transfers` | Whether a group/B2B process exists |
| Driver profile pages | Real, consenting, named staff |
| `/fleet` | A confirmed fleet |
| Any page with a price | Established pricing |

Publishing any of these on assumption would breach the project's standing
honesty rules. **These stay blocked, not deprioritised** — the distinction
matters.

---

## Explicitly rejected

| Rejected | Reason |
| --- | --- |
| A `/distance/` page family | Would cannibalise our route pages and reproduce the competitor's four-URLs-per-journey problem. Our stat band already answers the intent better. **Revisit only if a real tool shows distance demand is large and genuinely separable** |
| Nationality-templated pilgrimage pages | Scaled content abuse; out of scope |
| Third-party company-name route pages | Trademark exposure, no defensible value |
| Urdu | Not before Arabic is winning |
| Separate airport-direction pages | Already decided against |
| Separate pages for `taxi` / `private car` / `private transfer` synonyms | Same intent; secondaries in body copy |
| Separate pages for Arabic spelling variants | Same keyword; one page |
| Pilgrimage positioning | Out of scope this phase, by instruction |

---

## The five biggest opportunities, stated plainly

1. **Riyadh → Buraydah and Riyadh → Hail have no competitor page anywhere.**
   Both 404 on the market leader's commercial *and* informational URLs. The
   English SERPs are held by international aggregators publishing prices that
   contradict their own other pages; the Arabic SERP is entirely individual
   drivers on classified-ad sites. Both routes have a verified rail
   alternative, which is exactly the honest-comparison content we have already
   proven on the Dammam page. **This is the clearest open market found in the
   entire study.**

2. **Arabic.** The competitor is 6.3% Arabic, has at least one Arabic URL
   serving English content, has no Arabic distance pages, no Arabic Riyadh city
   hub, and no hreflang on 492 of its pages. We are 50% Arabic with complete
   reciprocal hreflang, hand-written Arabic, Arabic typography and now Arabic
   alt text. **We are already ahead here and it cost us nothing new.** The
   remaining work is register, not coverage.

3. **The price question, answered without a price.** Their strongest commercial
   asset is published fares — which their own pages contradict. "A written
   price before anything is reserved, no payment to get one, nothing added
   afterwards" is true of this business and is what a price-anxious searcher
   actually wants to know. This is a positioning win available immediately at
   near-zero cost.

4. **Depth per page.** They have 1,230 URLs and their Riyadh–Makkah page is
   1,052 words with four H2s and no FAQ schema. Scale came at the cost of
   depth. On any individual route we can be the better page.

5. **The railway page nobody has.** They have Makkah and Madinah station pages
   and no Riyadh one. The SAR North line connects a Riyadh station page
   reciprocally to Buraydah, Hail and Dammam — three route pages we will own.
   That is a small cluster with no incumbent at all.

## The five biggest risks

1. **The enquiry form cannot deliver.** Everything else is secondary to this.
2. **We cannot compete on price, and price intent is a large share of
   commercial search.** Mitigated by process transparency, not solved by it.
3. **No volume data.** Every priority here is intent-ranked. A real tool could
   reorder this list, and the Hail/AlUla relationship in particular could
   change the build order.
4. **The Makkah and Madinah scope question is unresolved.** Two of six Batch 2
   pages rest on it.
5. **Scale asymmetry.** 10 indexable URLs against ~1,230. Depth and bilingual
   completeness are the right answer, but they are a slower answer, and the
   gap will not close on content quality alone.

---

## Recommended implementation sequence

**Superseded by the owner's approved plan.** The authoritative sequence, with
every gate, is [implementation-roadmap.md](./implementation-roadmap.md). In
summary:

| Stage | Work |
| --- | --- |
| **P0** | Fix `INQUIRY_WEBHOOK_URL`; set `NEXT_PUBLIC_SITE_URL` in the build; decide on WhatsApp. *Not an SEO task, and it caps everything below* |
| **0** | **Trailing-slash convention** across registry, canonicals, hreflang, links, sitemap, nav, breadcrumbs and structured data. Groundwork, due before Stage 2 |
| **1** | Existing-SEO improvements — FAQ answer structure, verified last-checked dates, question-form FAQ headings, route-distance variation explained |
| **2** | **Batch 2** — Buraydah, Taif, Hail, AlUla, EN + AR together |
| **3** | **Private driver hire** — hourly and full-day only |
| **4** | **Riyadh airport transfers** |
| **5** | **Riyadh railway station transfers** — main, north, east |
| **6** | **Riyadh hotel transfers** |
| **7** | **Jeddah destination hub** |

Two items from Priority 2 sit outside that list because they need an owner
answer rather than a build slot: **2.2** (the "what's included" block — needs
the table contents confirmed) and **2.6/2.7** (the Arabic register pass — best
done after a Saudi-locale SERP re-run). Both can land alongside any stage.

A real keyword tool should be run **before Stage 2** if one is obtainable. It
would not change P0, Stage 0 or Stage 1, which are correct regardless.
