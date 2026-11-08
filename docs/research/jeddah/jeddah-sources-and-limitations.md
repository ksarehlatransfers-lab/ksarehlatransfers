# Jeddah — sources and limitations

Every factual claim in the Jeddah deliverables traces to a source listed
here. Where sources disagree, both readings are recorded and the proposed
pages publish a **range**, never a flattering single number.

---

## 1. What was and was not reachable

| Source | Outcome |
| --- | --- |
| taxiserviceksa.com route and distance pages | **Read** — HTTP status recorded per URL in the gap analysis |
| taxiserviceksa.com `sitemap.xml` | **Returns HTML, not XML.** No usable sitemap, so the competitor probe is a targeted sample rather than a census |
| King Abdulaziz International Airport official site | **Attempted 7 November 2026 and refused.** `jed.sa`, `www.jeddahairports.com.sa` and `matarat.sa` all failed at **DNS**; all four `www.kaia.sa` pages tried returned **HTTP 403**. Nothing is attributed to the airport or its operator |
| Saudi Arabia Railways (`sar.com.sa`) | **Not attempted.** Returned HTTP 401 on five separate URLs during the railway phase, including the two station pages the owner supplied |
| `web.archive.org` | **Blocked** at the fetch-tool level, as found during the railway phase |
| English Wikipedia, Saudipedia, seat61, Wikimedia Commons metadata, published travel and operator listings | **Read** |

**No fact in these deliverables is verified by an airport operator or by
SAR.** That is the same position the Riyadh airport and railway pages are in,
and it is stated on those pages. The Jeddah pages must state it too.

---

## 2. Jeddah transport geography

### Facts added 7 November 2026, for the airport page

| Fact as published | Source | Status |
| --- | --- | --- |
| The airport is **about 19 km north of Jeddah** | English Wikipedia lead | Secondary. Materially closer in than Riyadh's ~35 km, and used on the page |
| Operated by **Jeddah Airports Company**; managed under contract by an external operator since 2022 | English Wikipedia | Secondary; **not published** — it adds nothing a passenger needs |
| **A Haramain high-speed railway station is linked to the terminal** | English Wikipedia, Terminal 1 section: a transport centre linking the terminal building to the parking area and the Airport–Jeddah Haramain station | Secondary, and corroborated by the independent Haramain station list. **Published**, and it is the competitor's clearest omission |
| Hub for three Saudi carriers; 2023 passenger figure | English Wikipedia infobox | **Not published** — a dated traffic statistic is of no use to a transfer customer |
| "Three operational passenger terminals including a Hajj Terminal" | English Wikipedia lead | **Contested** — see below |
| Terminal 1, a South Terminal, a North Terminal and a Hajj Terminal listed separately; the South Terminal announced closed in June 2020 with operations moved | English Wikipedia sections | **Self-contradicting**: the lead's count of three operational terminals cannot be reconciled with the closure note. Neither reading is published |
| The North Terminal is "mainly used by non-Saudi airlines" | English Wikipedia | Secondary; **paraphrased without the terminal's name** on the page |
| A new Terminal 2 and fourth runway announced for completion by 2031 | English Wikipedia | **Not published** — a 2031 plan is not a fact about today's journey |

**Consequence, unchanged and reinforced: no terminal chart, and no numbered
terminal anywhere on the page.** The disagreement at this airport is worse
than at Riyadh, because the sources contradict each other *within a single
article*.

### Competitor claims we deliberately do not match

Read from `/services/airport-transfers/` on 7 November 2026. Each is an
operational claim nobody has confirmed for us:

| They publish | We publish |
| --- | --- |
| "Jeddah Terminal 1", meeting point "near the Aquarium in the arrivals hall" | The terminal confirmed from your flight; no chart, no landmark |
| Free waiting: 60 minutes domestic, 90 international | That a delay moves the pickup, and that the allowance is in your quotation |
| Four named vehicle models with suitcase counts | A vehicle **category**, matched to what you describe |
| "Starts from" fares for Jeddah→Makkah and →Madinah | No price anywhere |

A named landmark can be moved or renamed; a printed page cannot. That is the
stated reason on the page, and it is an argument rather than an excuse.

### King Abdulaziz International Airport (JED)

| Fact | Source | Status |
| --- | --- | --- |
| Terminal 1 is the main newer terminal | English Wikipedia; a Wego airport guide stating all flights now operate from it | **Secondary, broadly consistent** |
| A dedicated Hajj Terminal exists, used in the Hajj and Umrah seasons, described as among the world's largest at ~465,000 m² | Wego guide; Wikipedia | Secondary |
| Three terminals — North, South, Hajj — with North for international and South for Saudi carriers | Some airport guides | **Contested** |
| The South terminal has closed | A Wego guide | **Contested** |
| The Hajj facility is "Terminal 4" | A transfer-operator listing | **Contested, and inconsistent with the above** |
| Hajj 2026 terminal operating dates | A blog citing official guidance it did not link | **Must not be published** |

**Conclusion carried into the architecture: publish no terminal chart and no
numbered terminal.** The disagreement here is worse than at Riyadh — there
sources disputed which airline used which building; here they dispute how many
buildings are in use and what they are called.

### Haramain High Speed Railway

| Fact | Source | Status |
| --- | --- | --- |
| Five stations: Makkah, Madinah, Jeddah Al-Sulaymaniyah, KAIA airport, KAEC | English Wikipedia; Gulf News; architectural and contractor sources | **Consistent across several independent sources** |
| 449 km, Makkah to Madinah | Wikipedia | Secondary |
| Makkah and Madinah are terminals; Jeddah and KAEC are through stations | Architectural sources | Secondary |
| KAEC is at Rabigh, not Jeddah | Gulf News | Secondary — matters, because it is not a Jeddah station |
| Makkah → Jeddah Al-Sulaymaniyah: 77 km, 43 minutes | Wikipedia | Secondary |
| Makkah → KAIA ~35–50 minutes; airport-to-Makkah ~54 minutes | Travel guides | **Inconsistent with each other** — published as "under an hour" or not at all |
| Operated by Saudi Arabia Railways; Economy and Business classes; 417 seats | Wikipedia | Secondary, and **not needed** on our pages |
| Schedules and fares | Several listings carry them | **Must not be published** |

### Road distances from Jeddah

| To | Figures found | Spread published |
| --- | --- | --- |
| **Makkah** | ~69 km straight line; 79 km and ~75 min (operator); 80 km and 60–90 min (competitor); ~85 km (operator); ~100 km quoted *airport*-to-Makkah | **79–85 km road**, 1–1.5 hrs, with the airport figure noted separately |
| **Madinah** | 405 km / 3h 47m (calculator); 420 km / ~270 min (operator); 450 km / 4–5 hrs (competitor and a travel guide, via the Haramain Expressway) | **405–450 km**, ~3h 45m – 5 hrs |
| **Taif** | 163 km / 1h 49m (route planner); ~169 km / 1h 52m (travel-time site); 170 km / 2–2.5 hrs via Al Hada (operator); 201 km / 2h 25m via Al Mukarramah Rd; ~130 km straight line | **163–201 km**, ~1h 50m – 2h 25m |
| **Yanbu** | 337 km / 3h 19m and 338.1 km / 3h 20m (Rome2Rio, both directions); 406 km / 5h 06m at an assumed 80 km/h | **~337 km**, ~3h 20m. The 406 km figure is a fixed-speed calculator estimate and is **not used** |
| **Riyadh** | ~950 km, 9–10 hrs | Already published on our own route page, re-verified in November 2026 |

**Most of these sources are commercial transfer sites and route planners, not
a road authority.** That is why every figure is published as a range with the
range disclosed — the discipline every Riyadh page already follows.

### One inconsistency in our own published content

Our site states **90 km** for Jeddah→Makkah in two places: a homepage
intercity card and the `/riyadh-to-jeddah/` FAQ. The road cluster found here
is **79–85 km**.

90 km sits at or above the top of that cluster. It may reflect an
airport-to-Haram measurement, which would be defensible. **Flagged for
re-checking and probable restatement as a range; not changed**, because this
phase is research only and those are homepage and Riyadh-cluster files.

---

## 3. Entry to Makkah

| Fact | Source | Status |
| --- | --- | --- |
| Saudi law prohibits non-Muslims from entering Makkah | Saudi Press Agency reporting via Arab News (2022), covering a prosecution for helping a non-Muslim journalist enter; multiple travel references | **Well corroborated** |
| Enforced at road checkpoints on the Jeddah–Makkah road | A 2014 Reuters clip showing a checkpoint sign between Jeddah and Makkah; Hajj-season reporting | **Corroborated, though the newest direct evidence is dated** |
| Reported penalties include fines and deportation | Travel references | Secondary |
| Hajj-season permit checks can apply to Muslims too, with identity and fingerprint checks at entry points | Arab News reporting | Secondary |
| The exact layout or procedure of the Jeddah-road checkpoint | **Not found** | **Must not be described** |
| Any official Saudi statement on how non-Muslims are screened | **Not found** | **Must not be characterised** |

**What the pages may say:** that entry is restricted to Muslims under Saudi
law, that checkpoints operate on the road, and that we will say so before
taking a booking we cannot complete.

**What they may not say:** how the checkpoint works, what documents are
inspected, what will happen to a particular traveller, or anything that reads
as immigration or religious advice. We arrange road transport; we do not
adjudicate anyone's eligibility.

---

## 4. Keyword and intent material

| Claim | Basis |
| --- | --- |
| Competitor coverage of Jeddah routes and distances | **Direct HTTP probe**, 6 November 2026, redirects followed, per-URL status recorded |
| Absence of a competitor Jeddah hub or airport page | Direct probe of four plausible slugs, all 404 |
| English phrasings in the keyword mapping | Observed in live search results and operator listings |
| Arabic phrasings | Observed in Arabic search results |
| `سائق خاص` is recruitment-dominated in Jeddah and Makkah results | **Observed** — the search returned mostly job postings. Independently reproduces the same finding from the Riyadh phase |
| `نقل خاص` / `توصيل` / `مشوار` register split | Observed, and consistent with the published cluster |
| **Any monthly volume, difficulty, CPC or traffic estimate** | **None. No tool available. Nothing is estimated** |
| **Any keyword described as one we or a competitor "ranks for"** | **None claimed.** No ranking data was available |

---

## 5. Image candidates

Commons searches on 6 November 2026 returned candidates for the Jeddah
corniche, skyline, Al-Balad, the King Fahd Fountain and four KAIA terminal
photographs, and **nothing** for a Haramain station in Jeddah.

**Licences were not verified for any of them.** The pipeline reads licence and
author from the MediaWiki API at add time and refuses files with usage
restrictions, so verification happens then. Nothing in the image document
should be treated as cleared.

Two images we already hold are relevant: `dest-jeddah` and `svc-airport` —
the latter being Jeddah's airport terminal, which the Riyadh pages were
repeatedly warned never to use and which is simply correct here.

---

## 6. What must never be published on a Jeddah page

- Any price, fare or rate, ours or anyone's. Several sources quote fares
  (SAR 180 sedan, SAR 250 SUV, USD 159 SUV, "from SAR 145" rail); **none is
  repeated anywhere.**
- Any train schedule, frequency or ticket price.
- A terminal chart, a numbered terminal, or an image captioned by terminal
  number.
- Hajj Terminal operating dates.
- Any claim to be an official Hajj or Umrah operator, or to arrange visas,
  permits or packages. The standing homepage disclaimer holds.
- Any description of checkpoint procedure, or advice on anyone's eligibility
  to enter Makkah.
- Any named hotel, or hotel-branded photography.
- Any claim about where a car may wait at a terminal, station or hotel.
- Any review, rating, fleet claim, licence claim or customer count.
- Any figure presented as verified by an airport operator or by SAR, since
  neither was readable.

---

## 7. Open questions a tool or Search Console would settle

1. Monthly volume and difficulty for every primary in both mappings.
2. Whether Jeddah airport intent genuinely outweighs Jeddah city intent, which
   the whole sequencing recommendation assumes.
3. Whether `توصيل` or `نقل خاص` dominates Arabic Jeddah queries.
4. Whether `مكة` or `مكة المكرمة` is the commoner query form.
5. Whether `الحرم` outperforms `مكة` for the airport-to-hotel journey.
6. Whether station-transfer intent converts at all — answerable from the
   published Riyadh railway page before a Jeddah equivalent is considered.

The published Riyadh cluster is the best available instrument for 2, 3 and 6,
and it costs nothing but waiting for its data.
