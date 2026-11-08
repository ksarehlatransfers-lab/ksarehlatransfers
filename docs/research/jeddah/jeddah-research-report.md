# Jeddah destination hub — research report

**Prepared 6 November 2026.**

> ## Outcome
>
> **Approved and built, 7 November 2026.** The phase-1 hub is live at
> `/en/jeddah/` and `/ar/jeddah/`. The cluster is now **26 indexable URLs**.
>
> Phases 2 and 3 — a Jeddah airport page and `/jeddah-to-makkah/` — remain
> recommended and unbuilt. Two homepage changes this document proposed were
> **deliberately held**; see §Outcome notes at the end.

This is the entry point for nine deliverables:

1. **This report**
2. [English keyword mapping](./jeddah-keyword-mapping-english.md)
3. [Arabic keyword mapping](./jeddah-keyword-mapping-arabic.md)
4. [Competitor gap analysis](./jeddah-competitor-gap-analysis.md)
5. [Proposed hub architecture](./jeddah-hub-architecture.md)
6. [Internal linking structure](./jeddah-internal-linking.md)
7. [Design brief](./jeddah-design-brief.md)
8. [Image sourcing requirements](./jeddah-image-requirements.md)
9. [Sources and limitations](./jeddah-sources-and-limitations.md)

---

## The three findings that should shape the phase

### 1. Jeddah is the inverse of Riyadh

For Riyadh, the competitor had almost nothing and we won by building routes
first. **For Jeddah they already hold the route pages** — Jeddah→Makkah,
Madinah, Taif, Yanbu, Riyadh and Abha all return 200, as do four
`/distance/jeddah-to-*/` pages.

What they do **not** have is a Jeddah **city hub** (`/jeddah/` → 404) or any
**Jeddah airport** page (three plausible slugs, all 404).

So the opening is not "more routes". It is the hub and the airport — the two
highest-intent Jeddah assets in the market, both unclaimed. Detail and HTTP
evidence in the [gap analysis](./jeddah-competitor-gap-analysis.md).

### 2. Makkah entry is restricted to Muslims, and that changes the product

Saudi law bars non-Muslims from entering Makkah, and it is enforced at road
checkpoints on the Jeddah–Makkah road. Reported penalties include fines and
deportation; a 2022 Saudi Press Agency report covered a prosecution for
helping a non-Muslim into the city.

This is not a footnote for a transfer company. **"Jeddah airport to Makkah
hotel" is the single biggest Jeddah transfer intent**, and a non-Muslim
customer who books it would be driven to a checkpoint and turned back. No
competitor page we probed says so.

Stating it plainly, high on the page, is simultaneously the most useful thing
we can tell a traveller, the thing that protects us from an undeliverable
booking, and a differentiator nobody else is willing to print. It should be a
designed element, not a line of small print.

### 3. Jeddah has two Haramain railway stations — the Riyadh problem again

The Haramain High Speed Railway has five stations: Makkah, Madinah, **Jeddah
Al-Sulaymaniyah (central Jeddah)**, **King Abdulaziz International Airport**,
and King Abdullah Economic City at Rabigh. Two of those five are in Jeddah.

That is structurally the same "which station do I need?" question the Riyadh
railway page was built to answer — and it is answered the same way, as
sections of a page rather than separate URLs. It also means the airport is a
*rail* interchange as well as an air one, which is unusual and useful.

---

## What our site already says about Jeddah

Jeddah is not a blank slate. It appears in published content in six places,
and the hub has to be consistent with all of them.

| Where | What it says |
| --- | --- |
| `lib/content/destinations.ts` | A Jeddah card, `slug: "jeddah"`, "West — Red Sea coast", noted as "King Abdulaziz International Airport and the main gateway for pilgrims" |
| `lib/content/navigation.ts` | Jeddah in the Destinations menu, marked `planned`, described as "Red Sea gateway" — renders as text, not a link |
| `lib/content/routes.ts` | Three homepage route cards touch Jeddah: Jeddah→Makkah (90 km, 1–1.5 hrs), Makkah→Madinah (450 km), Madinah→Jeddah (420 km). None links anywhere |
| `lib/content/faqs.ts` | A homepage FAQ: *"Do you provide Jeddah Airport to Makkah transfers?"* — answered yes, with the standing "we are not an official Hajj or Umrah operator" disclaimer |
| `app/[locale]/riyadh-to-jeddah/` | A published route page whose FAQ already offers the Makkah continuation "as a separate leg of about 90 km" |
| `lib/content/form-copy.ts` | The enquiry form's location list already includes Jeddah and King Abdulaziz International Airport (JED) |

**Two consequences.** First, the Destinations menu entry becomes a live link
the moment the hub ships — the one required edit to an existing page, exactly
as the hub's airport and railway branches were. Second, the homepage's three
Jeddah route cards currently point nowhere; the hub gives them a destination.

### One inconsistency in our own published content

Our site publishes **90 km** for Jeddah→Makkah, in two places. The road
figures found in this research cluster at **79–85 km**, with ~100 km quoted
for *airport*-to-Makkah specifically and ~69 km as a straight line.

90 km is therefore at or just above the top of the road cluster. It is not
wrong enough to be a defect — it may well reflect an airport-to-Haram
measurement — but it is worth re-checking and probably restating as a range,
the way every other distance on the site is. **Flagged, not changed**: the
instruction for this phase is research only, and these are Riyadh-cluster and
homepage files.

---

## Jeddah's transport geography, as verified

Every figure is published-source material, given as a range where sources
disagree. Attribution and the full conflict list are in
[sources and limitations](./jeddah-sources-and-limitations.md).

### King Abdulaziz International Airport (JED)

| | |
| --- | --- |
| Main terminal | **Terminal 1**, the newer terminal; one guide states all flights now operate from it |
| Hajj Terminal | A dedicated terminal used in the Hajj and Umrah seasons, described as among the world's largest |
| North / South terminals | **Status contested.** Some sources list three terminals (North, South, Hajj); one says the South terminal has closed; another calls the Hajj facility "Terminal 4" |

**The terminal position is worse than at Riyadh**, where sources merely
disagreed about which airline used which building. Here they disagree about
how many terminals are in use and what they are called. The precedent set by
the Riyadh airport page applies with more force: **publish no terminal chart,
and confirm the terminal from the flight number.** The Commons photographs of
this airport are themselves titled "North Terminal", which tells you how
embedded the ambiguity is.

The **seasonal** nature of the Hajj Terminal is a genuinely useful fact for
pilgrim arrivals and can be stated. Its operating dates cannot: the only
source found was a blog citing guidance it did not link.

### The Haramain High Speed Railway

| | |
| --- | --- |
| Line | 449 km, Makkah to Madinah |
| Stations | Makkah · Madinah · **Jeddah Al-Sulaymaniyah** · **KAIA (airport)** · KAEC (Rabigh) |
| Structure | Makkah and Madinah are terminals; Jeddah and KAEC are through stations |
| Operator | Saudi Arabia Railways |
| Makkah → Jeddah Al-Sulaymaniyah | 77 km, 43 minutes (one source); ~54 minutes airport-to-Makkah (another) |

**No schedule or fare will be published**, consistent with every rail mention
already on the site. SAR's own site returned HTTP 401 throughout the Riyadh
railway research and was not retried here.

### Road distances from Jeddah

| To | Published road distance | Published driving time | Note |
| --- | --- | --- | --- |
| Makkah | **79–85 km** cluster; ~100 km quoted airport-to-Makkah | 1–1.5 hrs | **Entry restricted to Muslims** — see above |
| Madinah | **405–450 km** | ~3h 45m – 5 hrs | Via the Haramain Expressway |
| Taif | **163–201 km** | ~1h 50m – 2h 25m | Mountain route via Al Hada; a longer alternative via Al Sail is cited for fog or rain |
| Yanbu | **~337 km** | ~3h 20m | Two independent readings agree closely; one fixed-speed calculator gives 406 km and is not used |
| Riyadh | ~950 km | 9–10 hrs | Already published on our own route page |

Taif is the interesting one: the **same destination we already serve from
Riyadh**, reachable from Jeddah in a fifth of the distance. The Riyadh→Taif
page can honestly point out that most Taif traffic comes the short way.

---

## Recommendation

**Build the hub first, then the airport page. Do not chase the route pages
the competitor already holds.**

| Priority | Page | Why |
| --- | --- | --- |
| **1** | `/en/jeddah/` · `/ar/jeddah/` | Unclaimed by the competitor, gives the homepage's three Jeddah cards and the Destinations menu somewhere to point, and establishes the city before its children |
| **2** | A Jeddah airport page | The highest-intent Jeddah query, three competitor 404s, and we already hold a correctly-labelled photograph of this airport |
| **3** | Jeddah→Makkah | Contested, but winnable on the access restriction alone. Needs the honest treatment, not a price list |
| **4** | Jeddah→Madinah, →Taif, →Yanbu | Contested and lower intent. Build when there is something better to say than theirs |
| **Not yet** | A Jeddah railway page | Two Haramain stations is a real question, but the Riyadh railway page should be given time to show whether station transfers convert at all |

The hub architecture, with the full field specification, is in
[jeddah-hub-architecture.md](./jeddah-hub-architecture.md). It is **not** a
copy of the Riyadh hub: Riyadh is a junction and is organised by service type,
whereas Jeddah is a doorway and is organised by **where you are going next**.
The reasoning and the explicit anti-collision checks are in the
[design brief](./jeddah-design-brief.md).

## Outcome notes, 7 November 2026

### Built

| | |
| --- | --- |
| URLs | `/en/jeddah/` · `/ar/jeddah/` |
| Route key | `jeddah`, sitemap priority **0.9** — level with the Riyadh hub, since this is a city parent |
| Title | EN 53 characters, AR 48 |
| Sections | 8 `<h2>`s: the access notice · where are you going · arriving at the airport · around Jeddah · how a quotation works · FAQ · CTA · related |
| Images | `jeddah-corniche` (CC0) as the hero, `jeddah-albalad` (CC BY 4.0), and **`svc-airport`** — held since Batch 1 and finally used for its actual subject |

### Linking changes made

| Change | File |
| --- | --- |
| Destinations menu: Jeddah `planned` → **live link** | `lib/content/navigation.ts` |
| New **Jeddah header group** (hub + Riyadh→Jeddah) | `lib/content/navigation.ts` |
| New **Jeddah footer column** | `lib/content/navigation.ts` |
| **The reciprocity gap closed**: `/riyadh-to-jeddah/` now links to the hub | `lib/content/riyadh/jeddah.ts` |

### Two proposals deliberately held

Both touch the **homepage**, which the owner has twice asked to preserve.
Neither is a correctness fix, so neither was made unilaterally:

1. **Linking the homepage Jeddah destination card.** Those cards have *never*
   linked — not even Riyadh's, which has had a published hub for days. Making
   Jeddah's a link would introduce new behaviour to that section rather than
   fix something broken.
2. **Repointing the three homepage intercity cards** that touch Jeddah
   (Jeddah→Makkah, Makkah→Madinah, Madinah→Jeddah). They render as plain text
   with no link because they have no `routeKey`. Pointing them at the hub
   would turn three dead cards into links — a real improvement, and it needs
   the `routeKey` union in `lib/content/routes.ts` widened.

Both are recommended and both are the owner's call.

### One thing corrected during the build

The airport section originally named a numbered terminal while explaining that
sources disagree about the terminals. That broke the rule this project set for
the Riyadh airport page — **no numbered terminal anywhere** — because a
skim-reader could take it as our guidance rather than as a description of the
disagreement. Rewritten to describe the conflict without numbers, in both
locales, and verified by grep.
