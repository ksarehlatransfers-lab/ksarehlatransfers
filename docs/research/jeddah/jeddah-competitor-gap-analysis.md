# Jeddah — competitor gap analysis

Competitor: **taxiserviceksa.com**, the same site analysed in the Riyadh
phase. Probed 6 November 2026; **corrected 7 November 2026.**

> ## Correction, 7 November 2026
>
> **Two headline claims in the 6 November version were wrong, and the
> recommendation that rested on them was overstated.**
>
> | Claimed | Actually |
> | --- | --- |
> | "They have no Jeddah city hub (`/jeddah/` → 404)" | They have **`/locations/jeddah/`** (200) |
> | "They have no airport page (three slugs, all 404)" | They have **`/services/airport-transfers/`** (200, nationwide, substantial) **and `/jeddah-airport-transfer/`** (200, Jeddah-specific), plus `/guides/jeddah-airport-guide/` and a fare blog post |
>
> **How it happened.** I probed guessed slugs — `/jeddah/`, `/jeddah-airport/`,
> `/jeddah-airport-transfers/`, `/airport-transfers/` — and read four 404s as
> absence of the intent. The real slugs are `/locations/<city>/` and the
> **singular** `/jeddah-airport-transfer/`.
>
> This is worse than a missed guess. The §Method section of this very document
> warned that "a 404 proves that *slug* is dead; it does not prove they have
> no page for that intent under a different slug" — and the Riyadh-phase gap
> analysis **already recorded `/locations/<city>/` as their city-hub pattern**,
> naming Jeddah explicitly. The information was in our own prior research and I
> contradicted it.
>
> **What survives.** The Jeddah hub was still worth building: our hub is a
> better page than their location page and it is the parent our Jeddah children
> need. What does *not* survive is "the intent is unclaimed". It is claimed, and
> by a page that asserts **more** than we are able to. The revised basis for
> competing is in §Where we can actually beat them, rewritten below.

**Nothing here is copied from them.** The point of the probe is to find out
what is already answered well, so we spend effort where it is not.

---

## Method, and its one limitation

Every URL below was requested with redirects followed, and the **final** HTTP
status recorded. That matters: the site 307/308-redirects slashless paths, so
an unfollowed probe reports a redirect for both live and dead pages and tells
you nothing.

**Their `sitemap.xml` is not usable.** It returns HTTP 200 with an **HTML
document**, not XML — the Next.js application serving a page where a sitemap
should be. So there is no authoritative list of their pages and the probe
below is a targeted sample, not a census.

**Limitation to hold onto:** a 404 proves that *slug* is dead. It does not
prove they have no page for that intent under a different slug. Where a 404
drives a recommendation, the recommendation is about the gap in *their
coverage of the intent*, and we checked more than one plausible slug before
concluding anything.

---

## What they have

| URL | Status | Intent |
| --- | --- | --- |
| `/routes/jeddah-makkah/` | **200** | The dominant Jeddah intent |
| `/routes/jeddah-madinah/` | **200** | |
| `/routes/jeddah-taif/` | **200** | |
| `/routes/jeddah-yanbu/` | **200** | |
| `/routes/jeddah-riyadh/` | **200** | The reverse of our published page |
| `/routes/jeddah-abha/` | **200** | |
| `/routes/makkah-madinah/` | **200** | The inter-city pilgrimage leg |
| `/routes/makkah-taif/` | **200** | |
| `/routes/` | **200** | A route index |
| `/services/intercity/` | **200** | |
| `/distance/jeddah-to-makkah/` | **200** | |
| `/distance/jeddah-to-madinah/` | **200** | |
| `/distance/jeddah-to-taif/` | **200** | |
| `/distance/jeddah-to-yanbu/` | **200** | |

**They own the Jeddah route-and-distance space.** This is the mirror image of
Riyadh, where the equivalent slugs were almost all 404 and we built four route
pages into an empty market.

## What they also have — the corrected picture

| URL | Status | Intent |
| --- | --- | --- |
| `/locations/jeddah/` | **200** | A Jeddah city page |
| `/services/airport-transfers/` | **200** | Nationwide airport transfers, 8 airports, Jeddah listed first |
| `/jeddah-airport-transfer/` | **200** | **A Jeddah-specific airport page** (note the singular slug) |
| `/guides/jeddah-airport-guide/` | **200** | An airport guide |
| `/blog/jeddah-airport-makkah-taxi-fare-2026/` | **200** | A fare post for the dominant route |
| `/locations/riyadh/` | **200** | The same pattern for Riyadh |

### What their nationwide airport page actually covers

Read in full on 7 November. It is substantial, and it asserts a good deal:

| Covered | Detail |
| --- | --- |
| Arrivals process | Driver meets at a meeting point given in the confirmation, with the driver's phone number |
| **Free waiting** | **60 minutes domestic, 90 international, counted from actual landing** |
| Flight tracking | By flight number; delays up to 3 hours at no extra cost |
| Vehicles | Four named models with passenger and suitcase counts |
| Fares | "Starts from" figures for Jeddah→Makkah and Jeddah→Madinah |
| A terminal | **"Jeddah Terminal 1", with a meeting point "near the Aquarium in the arrivals hall"** |
| Onward intercity | Jeddah→Makkah and →Madinah, Dammam→Bahrain |
| Included / quoted separately | An explicit two-column list |

### What it does not cover

| Absent | Why it matters to us |
| --- | --- |
| **The Haramain railway station at the airport** | No mention of rail anywhere on the page. A verifiable, useful omission |
| **Makkah entry restrictions** | Not mentioned, on a page selling Jeddah→Makkah transfers |
| A departure lead time | They decline to state one too — so neither of us can, and saying *why* is open to us |
| Licensing, reviews or ratings | Absent, same as ours |
| Terminals at any other airport | Only Jeddah's is named |

| Still 404 | Intent |
| --- | --- |
| `/routes/jeddah-kaec/` | King Abdullah Economic City |
| `/routes/jeddah-rabigh/` | Rabigh |

---

## The gap table

| Intent | Them | Us today | Gap | Verdict |
| --- | --- | --- | --- | --- |
| Jeddah city hub | **`/locations/jeddah/`** | **Published 7 Nov 2026** | Medium — claimed, but a location page is not a hub and ours is the better page | **Built** |
| Jeddah airport transfers | **Nationwide page + a Jeddah-specific page** | None yet | Medium — claimed and well covered, but it omits rail entirely and the Makkah access restriction | **Build, on honesty rather than novelty** |
| Jeddah → Makkah | Route + distance page | Homepage card, no page | **Medium** — contested, but their page omits the one fact that decides whether the journey is possible | **Build third, on honesty** |
| Jeddah → Madinah | Route + distance page | Homepage card | Low — and the train often wins this corridor | Section |
| Jeddah → Taif | Route + distance page | None | Low — but we can contrast it with our own Riyadh→Taif page | Section |
| Jeddah → Yanbu | Route + distance page | None | **None** — nothing true to add beyond the figure | Section line |
| Jeddah → Riyadh | Route page | **We publish `/riyadh-to-jeddah/`** | None | Reciprocal link; never a new URL |
| Makkah → Madinah | Route page | Homepage card | Deferred — Makkah/Madinah route pages are excluded from the current phase by standing decision | No change |
| Jeddah hotels | None | None | Low | Section |
| Jeddah railway | None | None | Medium, structurally — but unproven demand | Defer |

---

## Where we can actually beat them, and where we cannot

### Cannot — revised, and the list is longer than I first said

**Novelty on routes.** They have six Jeddah route pages and four distance
pages, indexed and established.

**Novelty on the airport.** They have a nationwide airport page and a
Jeddah-specific one. The intent is claimed.

**Operational specificity.** This is the uncomfortable one. They publish a
named terminal, a named meeting point, free-waiting minutes, named vehicle
models and indicative fares. **We cannot match any of that**, because none of
it has been confirmed with our driver partners — the same gap that blocks the
private-driver-hire page. A reader comparing the two pages side by side will
find theirs more concrete.

We should be clear-eyed about that rather than pretend otherwise. What we can
do is be *right* where being concrete is risky.

### Can

**1. The access restriction.** Their `/routes/jeddah-makkah/` page sells a
journey into a city **non-Muslims may not legally enter**, and does not say
so. A traveller who books it and is turned back at the checkpoint has been
failed by that page. Saying it plainly is free, true, and the single most
useful sentence available on this intent.

**2. The terminal question.** Sources disagree on how many terminals JED has
in use and what they are called — Terminal 1, a Hajj terminal, a North
terminal, a South terminal that may have closed, and one source calling the
Hajj facility "Terminal 4". Our Riyadh airport page already has a tested
answer to exactly this: confirm from the flight number, publish no chart. They
have no airport page at all, so the whole question is open.

**3. Price-process transparency.** The Riyadh research found their published
fares contradict each other between their own pages. Our answer there was
written price before anything is reserved, nothing added afterwards, no
payment to get a quotation. It transfers to Jeddah unchanged and needs no new
operational facts.

**4. Rail honesty.** Jeddah is the one city where the train is genuinely
competitive for the main intents: Haramain reaches Makkah and Madinah, and one
of its stations is **inside the airport**. Saying so — and saying when it beats
us — is the pattern already proven on the Dammam, Buraydah and Hail pages. A
transfer company that tells you to take the train when the train is better is
the thing this market does not have.

**5. The hub as a parent.** They have routes without a city. We can have a
city that explains which route you need — which is the same structural
advantage the Riyadh hub gave us, and the reason their route pages have no
internal linking story.

---

## What this means for sequencing — revised

The original conclusion was "build where they are absent". After the
correction, **they are not absent anywhere that matters in Jeddah.** So the
test changes from *absence* to *answerability*:

| Build when | Example |
| --- | --- |
| We can say something true that they do not say | The airport page: rail at the airport, the Makkah access restriction |
| We can be right where they are specific-but-fragile | A named meeting point and a named terminal both go stale; our flight-number answer does not |
| We cannot | A seventh Jeddah route page whose only claim is that we also drive it |

The airport page remains worth building on that revised basis. What it must
**not** do is imply the intent was ours for the taking.
