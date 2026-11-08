# Riyadh railway transfers — architecture validation

**Prepared 6 November 2026.** This document answered one question the project
owner asked before any railway page was written: *is the proposed three-page
architecture justified by verified evidence?*

**The answer was no.** One of the three proposed pages described a station that
does not exist as a separate building.

> ## Outcome
>
> **Approved by the owner, 6 November 2026, and built the same day.**
>
> - **One** consolidated page: `/en/riyadh-railway-station-transfers/` and
>   `/ar/riyadh-railway-station-transfers/`, with a substantial section per
>   real station and the aliases used naturally in the copy.
> - `riyadh-east-station-transfers` **withdrawn** from the reserved slugs.
> - No separate Riyadh North page.
>
> Two things changed after the owner supplied official SAR URLs and asked for
> the Riyadh North location to be verified separately. Both are recorded
> below: §2a on what SAR does and does not confirm, and §1a on a **correction
> to this document's own description of the airport relationship**.

---

## 1. The finding that changes the architecture

The roadmap proposed three pages:

| Proposed | Verdict |
| --- | --- |
| Riyadh Railway Station Transfers | Real station |
| Riyadh North Station Transfers | Real station |
| Riyadh East Station Transfers | **Not a separate station.** "Riyadh East" is a widely used *alias* for the first one |

**Riyadh has two passenger railway stations, not three.** Every source
consulted agrees on the count, and none describes a third.

### Station 1 — the city station, on the line to Dammam

| | |
| --- | --- |
| Wikipedia name | **Riyadh railway station** |
| Arabic | محطة قطار الرياض |
| District | Sinaiyah Qadeem (coordinates 24.6504 N, 46.7406 E) |
| Line | Western terminus of the **Dammam–Riyadh line** — onward Hofuf, Abqaiq, Dammam |
| Opened | 1981 |
| Platforms | 6 |
| Parking | "Yes" (Wikipedia infobox; no detail) |

**This one station is published under at least five different names**, which is
the root of the three-page error:

| Name | Where it is used |
| --- | --- |
| Riyadh railway station | Wikipedia article title |
| **Riyadh East Station**, code **RYD** | seat61 timetable tables, and its photograph captions |
| Riyadh SRO station, code **RYD** | seat61 body text — *same code*, so the same building |
| SAR Riyadh–Dammam Station | Wikimedia Commons photograph title |
| Malaz station | One English travel guide |

The decisive evidence that "Riyadh East" is this station and not another:
seat61 gives **the same station code, RYD**, to "Riyadh East Station" and to
"Riyadh SRO station"; and a Wikimedia Commons photograph is captioned *"The
interior of Riyadh East station, the terminus of the Dammam-Riyadh rail
line"* — which is the definition of station 1.

The alias almost certainly comes from SAR's service branding: it markets the
Dammam service as the **East Train** and the Qurayyat service as the **North
Train**. Travellers then call the station the East Train leaves from "Riyadh
East". A station named after a *line* is not a second station.

### Station 2 — the station at the airport, on the line north

| | |
| --- | --- |
| Wikipedia name | **Riyadh North Station** (article title "Riyadh North railway station") |
| Arabic | محطة قطار الشمال بالرياض — commonly محطة قطار الشمال |
| Local name | Thumamah train station |
| Also published as | Riyadh KKIA station, code **RIY** (seat61) |
| Address | Al Thumamah Road, King Khalid International Airport, 13422 Riyadh (coordinates 24.8557 N, 46.7647 E) |
| Line | South terminus of the **Riyadh–Qurayyat line** — Majmaah, Qassim, Hail, Al-Jouf, Qurayyat |
| Opened | 26 February 2017 |
| Platforms | 2 |
| Distance from the centre | "about 35 km out of town, next to the airport" (seat61) |

### §1a. Correction — Riyadh North is *not* at the airport terminals

**This document originally said the station "is at King Khalid International
Airport" and that a transfer to it is "roughly the same drive as the airport
transfer".** The owner asked for the location and airport relationship to be
verified separately. It was, and the original wording was too strong.

Computed from the coordinates published in the two station articles
(great-circle distances; **road distances are longer and were not measured**):

| From | To | Straight line | Bearing |
| --- | --- | --- | --- |
| Riyadh North station | KKIA terminal reference point | **13.2 km** | north-west |
| Riyadh North station | the city station | **23.0 km** | south |
| City station | KKIA terminal reference point | 34.4 km | north |

So the station **carries the airport's postal address and sits inside the
airport's very large land area** — Saudipedia gives the airport 375 km² — but
it is a **separate site about 13 km from the passenger terminals**. You cannot
walk between them, and a terminal-to-station transfer is a real journey.

The published page states exactly this, and a FAQ answers "Is Riyadh North
station at the airport?" with the 13 km figure rather than the loose "next to
the airport" phrasing found in secondary sources. The third row above also
independently corroborates the ~35 km airport-to-centre figure already used on
the airport page.

### Passenger service status — an honest limitation

Both Wikipedia station pages describe the two as passenger stations, and
seat61 (updated 3 June 2026) writes about both in the present tense with
timetables and a booking process. **No source gives a dated
"currently operating" statement**, and the one source that could settle it —
the operator — is unreadable. See §2.

Riyadh also has a **Riyadh Dry Port**, listed under the SAR *cargo* line. It is
not a passenger station and must not appear in this architecture.

Riyadh Metro is a separate system and out of scope here, except that Metro
Line 4 serves the airport terminals and therefore the area around Riyadh North
— already noted on the airport page.

---

## 2. Official SAR sources could not be read

The owner asked for official Saudi Arabia Railways sources to be preferred,
and for the limitation to be documented plainly if they could not be reached.

| Source | Outcome |
| --- | --- |
| `sar.com.sa` | **HTTP 401 Unauthorized** |
| `sar.com.sa/en` | **HTTP 401 Unauthorized** |
| `sar.com.sa/east-train/EastStations/` | **HTTP 401 Unauthorized** |
| `sar.com.sa/northern-train/stations/` | **HTTP 401 Unauthorized** |
| `sar.com.sa/about-sar/railnetwork/` | **HTTP 401 Unauthorized** |
| `web.archive.org` snapshots of the above | **Blocked** at the fetch-tool level; the availability API reports no capture for the East stations path |

**Nothing in this document is verified by SAR.** Every fact above comes from
the English Wikipedia articles on the two stations and the list of Saudi
railway stations, from seat61 (an independent rail-travel reference), from
Wikimedia Commons photograph metadata, and from Arabic press coverage of the
North line's launch. Where those sources conflict, both readings are given.

This is the same wall the airport page hit with `kkia.sa` and
`riyadhairports.com`, both of which returned 403. Three official Saudi
transport sites now refuse automated requests.

**What would fix it:** the owner opening `sar.com.sa` in a browser and pasting
the station pages, or supplying SAR's published materials. Station codes,
current passenger status and any documented passenger access could then be
attributed to the operator. Until then the page can be written — but not with
SAR's authority behind it.

### §2a. What SAR *does* confirm, and what it does not

The owner supplied three official SAR URLs found through indexed search
results, and reported that **they explicitly identify Riyadh East and Riyadh
North under their respective networks**:

- `https://www.sar.com.sa/east-train/EastStations/`
- `https://www.sar.com.sa/northern-train/stations/`
- `https://www.sar.com.sa/about-sar/railnetwork/`

| Fact | Status |
| --- | --- |
| The operator names a **Riyadh East** station under its **East Train** network, and a **Riyadh North** station under its **Northern Train** network | **Confirmed by SAR**, as reported by the project owner from SAR's own indexed pages. Not independently readable here — the pages return 401 to us |
| SAR organises these as two **networks** (`east-train`, `northern-train`), each with its own station list | **Confirmed by SAR's own URL structure**, which is itself evidence — and it corroborates the central finding that "East" and "North" name *networks*, not two Riyadh stations |
| Districts, coordinates, opening years, platform counts, stop sequences, the five-alias set | **Secondary only** — English Wikipedia station articles, seat61, Wikimedia Commons metadata, Arabic launch coverage |
| Straight-line distances in §1a | **Computed by us** from the coordinates Wikipedia publishes. Labelled as straight-line on the page |
| Station pickup zones, exact meeting points, whether a car may collect inside a concourse | **Not confirmed by anything.** The owner's instruction was explicit that the official pages must not be assumed to confirm these, and they are not claimed anywhere on the page |

**The practical effect on the published page:** the station *names* are used
with confidence, because the operator uses them. Everything else is phrased as
published-reference material, and the page carries a section saying plainly
which things it will not guess at.

### Facts that are therefore unavailable, and must not be invented

- **Train schedules and frequencies.** Arabic launch-era coverage mentions
  weekly departures and one specific Saturday evening service; those are from
  2017 and must not be republished.
- **Ticket prices.** seat61 and a Time Out article both list fares. Neither is
  the operator and both change. **No fare goes on our pages.**
- **Station facilities.** seat61 mentions airport-style security, bag check-in
  and a business lounge at Riyadh North; a traveller quote describes the taxi
  drop-off area. These are second-hand and some are a named individual's
  report. **Not publishable as facilities we assert.**
- **Meeting points and pickup zones.** One travel guide says the taxi stand is
  outside the main entrance of the city station; another quotes a fixed SR 100
  fare to the centre. Single-sourced, not official, and a fare besides. **Not
  publishable.**
- **Whether we can collect from inside either station concourse.** This is an
  operational question for our driver partners, in the same class as the ten
  facts that block the private-driver-hire page.

---

## 3. Does each station warrant its own landing page?

### The three-page proposal: rejected

Two of the three pages would describe one building. Publishing
`/riyadh-railway-station-transfers/` *and* `/riyadh-east-station-transfers/`
would create two pages competing for one intent with near-identical content —
precisely the near-duplicate problem the approved airport consolidation exists
to avoid. The third slug should be **withdrawn, not deferred**.

### Recommended: one page, two station sections

`/en/riyadh-railway-station-transfers/` · `/ar/riyadh-railway-station-transfers/`

The page's central job is the question a searcher actually has: **which station
do I need?** That question cannot be answered on a page about only one station,
and it is the question our competitors do not answer at all.

| Argument | Detail |
| --- | --- |
| **One undecided searcher** | Someone searching "Riyadh train station transfer" usually does not yet know which station their train uses. Disambiguating *is* the service. Two pages would each answer half |
| **The aliases favour one page** | Five published names for station 1, three for station 2. One page can legitimately own the whole alias set; two pages would compete for it |
| **No photography for Riyadh North** | Commons has **four** licensed photographs of the city station and **none** of Riyadh North. A dedicated North page would have no honest image of its own subject — and using a generic train or the airport terminal would be the mislabelling we refuse elsewhere |
| **No operational depth available for either** | With SAR unreadable, neither page can carry documented access, facilities or meeting points. Two thin pages are worse than one solid one |
| **Small market** | Rail is a minority choice for these corridors and our own route pages already weigh car against train honestly. Splitting a small intent halves it |
| **Precedent** | This is the airport consolidation argument, and the two-panel layout pattern already exists to answer a two-sided question on one page |

**The honest counter-argument**, stated fairly: the two stations are 35 km
apart, serve different corridors and are genuinely different journeys at
different prices. That is real — and it is handled by giving each station its
own `<h2>` and its own practical detail, exactly as arrivals and departures
each have their own panel on the airport page. It argues for *sections*, not
for separate URLs.

### This reverses an earlier documented decision

[riyadh-url-inventory.md](../riyadh-url-inventory.md) previously recorded, under
"Cases that stay separate":

> **Riyadh North** and **Riyadh East** stations serve different lines, so
> "which station do I need" is the actual question and a combined page would
> answer it worse.

**That reasoning was inverted, and it rested on a factual error.** It treated
"Riyadh East" as a second station, when it is an alias for the first — so the
comparison it drew was between two pages that were never two stations. And on
the substance: if "which station do I need" is the actual question, a combined
page answers it *better*, because both options have to be visible to be
compared. The earlier note is superseded by this document, subject to approval.

### Alternative, if the owner prefers two pages

| | |
| --- | --- |
| `/riyadh-railway-station-transfers/` | The city station, Dammam line |
| `/riyadh-north-station-transfers/` | Riyadh North, Qurayyat line |

Workable, and the slugs are already reserved. Costs: the North page ships
without a photograph of its own station; the disambiguation has to be
duplicated on both pages or it is on neither; and both pages carry the same
thin operational content. **Not recommended**, but it is a legitimate choice
and the third page is withdrawn either way.

---

## 4. Keyword and intent mapping

No volume or difficulty data is available in this environment — unchanged from
every previous phase. Selection below is grounded in observed naming, the
alias set and the structure of the question, and is labelled as such.

### English

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| Primary (page) | riyadh train station transfer, riyadh railway station transfer | Alias-led; both forms are in live use |
| Secondary | riyadh east station transfer, riyadh north station transfer, riyadh train station taxi, how to get to riyadh train station, sar station riyadh transfer | Observed aliases and the access question |
| `<h2>` Which station | which riyadh train station, riyadh north or riyadh east station | The disambiguation intent |
| `<h2>` City station | riyadh railway station to hotel, malaz station transfer | Alias plus the common journey |
| `<h2>` Riyadh North | riyadh north station to city, thumamah station transfer, riyadh kkia station | Local and operator-side names |

### Arabic

| Mapped to | Candidates | Note |
| --- | --- | --- |
| Primary (page) | نقل خاص من محطة قطار الرياض | Matches the published cluster pattern (نقل خاص …) |
| Secondary | توصيل من محطة قطار الرياض، مشوار من محطة القطار، نقل خاص إلى محطة قطار الشمال | توصيل and مشوار are the colloquial forms already used across the cluster |
| `<h2>` Riyadh North | محطة قطار الشمال، محطة قطار الشمال بالرياض | **Confirmed as the natural Arabic name** in Arabic press coverage |
| `<h2>` City station | محطة قطار الرياض، محطة سار الرياض | |

Open question for the research pass, unchanged in kind from earlier phases:
whether Arabic searchers use **محطة القطار** generically or name the line
(**قطار الشمال** / **قطار الشرق**). The alias problem exists in Arabic too.

---

## 5. Internal linking, if approved

| Direction | Link |
| --- | --- |
| → Riyadh hub | Breadcrumb and a contextual link. The hub's railway branch is promoted from a "being written" note to a live link — the one required edit to an existing page, exactly as the airport page did |
| City-station section → `/riyadh-to-dammam/` and `/riyadh-to-al-khobar/` | **This finally satisfies the long-standing obligation** recorded in [riyadh-internal-linking.md](../riyadh-internal-linking.md): "Riyadh East station links to Dammam and Al Khobar". Both are published |
| Riyadh North section → `/riyadh-to-buraydah/` and `/riyadh-to-hail/` | The North line serves Qassim and Hail; both route pages are published and both already carry an honest car-versus-train comparison, so the links are reciprocal in substance |
| ⇄ `/riyadh-airport-transfers/` | **New, and it matters.** Riyadh North is *at* King Khalid International Airport. The railway page should link to the airport page, and the airport page should gain a line pointing at the railway page — a passenger landing at KKIA and continuing north by train is one journey across two of our pages |
| → quote | Header CTA, footer, and a page-specific closing CTA |
| → hotel page | **Not until it exists** |

The existing route pages should **not** gain mechanical links back to the
railway page; the same review applied after the airport page found no natural
editorial reason, and the header and footer already connect them.

---

## 6. Photography

| Subject | Availability |
| --- | --- |
| City station — exterior | `Riyadh train station, Saudi Arabia.jpg`, CC BY-SA 4.0, Synaps commons |
| City station — exterior | `SAR Riyadh-Dammam Station, Riyadh.jpg`, CC BY-SA 4.0, Ahmed |
| City station — interior | `Riyadh East station interior … January 2024.jpg`, CC BY-SA 4.0, Zach1055 |
| City station — exterior | `Riyadh Station.JPG`, CC BY 3.0, haitham alfalah |
| **Riyadh North** | **None found.** The Wikipedia article carries no photograph, and a Commons file search returns nothing |

All four city-station candidates carry open licences and no usage
restrictions. They would go through the committed pipeline
([`scripts/sync-images.mjs`](../../scripts/sync-images.mjs)) like every other
image.

The missing Riyadh North photograph is a real constraint, not a cosmetic one:
it is the second strongest argument for one page rather than two, and it is a
worthwhile commission if the owner wants that station given visual weight.

---

## 7. Owner decisions — all taken, 6 November 2026

| Asked | Decided |
| --- | --- |
| Withdraw the three-page architecture and the `riyadh-east-station-transfers` slug | **Confirmed.** Withdrawn completely; Riyadh East is not a third station or a separate page |
| One page or two | **One** consolidated page, English and Arabic |
| Two substantial station sections | **Approved** — Riyadh Railway Station / Riyadh East (East Train, Dammam corridor) and Riyadh North / Thumamah (North Train corridor) |
| Aliases | **Use them naturally** in headings and body copy, without duplicate URLs |
| Nothing carries SAR's authority unless supplied | **Partly resolved** — see §2a. SAR confirms the station *names*; everything else stays secondary |
| No schedule, fare, facility, meeting point or pickup arrangement | **Accepted and implemented.** The page has a section stating what it will not guess |

### Still open

- **SAR's own station pages remain unreadable here** (401), so station codes,
  a dated passenger-service status and any documented passenger access are
  still unverified against the operator.
- **No photograph of Riyadh North exists** under an open licence. That section
  of the page uses a tinted block rather than a mislabelled image. A
  commission would fix it.
- **Whether we may collect from inside either concourse** is a question for
  the driver partners, in the same class as the ten facts blocking private
  driver hire.
