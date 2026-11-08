# Jeddah hub — proposed architecture

**Proposal only. Nothing is implemented.** Awaiting the owner's approval.

---

## 0. Mandatory URL convention

Every URL carries a **trailing slash** — `/en/jeddah/`, never `/en/jeddah`.
This applies to the canonical, every hreflang target including `x-default`,
every internal link, the sitemap entry, navigation, breadcrumbs and every
structured-data `url`, `item` and `@id` value.

Nothing new is required to achieve it: the site's URLs all derive from
`localePath()` through `href()`, and `trailingSlash: true` has been in force
since Stage 0. A new route key inherits the convention automatically. The
rule is restated here only so that a reviewer can check it rather than assume
it.

---

## 1. The full field specification

| Field | Value |
| --- | --- |
| **1. English URL** | `/en/jeddah/` |
| **2. Arabic URL** | `/ar/jeddah/` |
| **3. Route key** | `jeddah`, to be added to `lib/i18n/routes.ts` **with** the page, never before — a registered route with no page puts a 404 in the sitemap |
| **4. EN primary** | jeddah private transfers |
| **5. AR primary** | نقل خاص في جدة |
| **6. Secondaries** | EN: private transfer jeddah, jeddah car with driver, jeddah airport to makkah, jeddah intercity transfer, transfers in jeddah · AR: توصيل في جدة، سيارة مع سائق في جدة، من جدة إلى مكة المكرمة، مشاوير جدة |
| **7. Intent** | Category / navigational, with one very large commercial sub-intent (the Makkah leg) sitting inside it |
| **8. SEO title** | EN `Jeddah Private Transfers \| Airport, Makkah, Intercity` (53) · AR `نقل خاص في جدة: المطار ومكة وبين المدن \| عرض سعر` |
| **9. Meta description** | EN: Private car and van transfers in and from Jeddah — King Abdulaziz airport arrivals, the road to Makkah, and intercity journeys. Request a written quotation. |
| **10. H1** | EN `Private transfers in and from Jeddah` · AR `نقل خاص في جدة ومنها` |
| **11. Sitemap priority** | 0.9 — level with the Riyadh hub, since this is a city parent rather than a leaf page |
| **12. Indexed** | Yes |

### Why the title is not "Jeddah Transfers | Get a Quote"

Every other page in the cluster closes on the quote CTA. The Jeddah hub's job
is to tell a searcher that we cover **three different things** from this city,
because that is the question a hub answers. Naming airport, Makkah and
intercity in the title does more work than repeating the CTA, and it stays
inside the 50–60 character budget at 53.

---

## 2. The organising idea — and how it differs from Riyadh

**Riyadh is a junction. Jeddah is a doorway.**

The Riyadh hub is organised by **service type** — intercity, airport, railway,
hotels — because people already in the capital want to know what kinds of
journey we run. That is the right shape for Riyadh and the wrong shape for
Jeddah.

People do not go *to* Jeddah as often as they go *through* it. They land at
King Abdulaziz, and the question in their head is not "what services do you
offer" but **"how do I get from here to where I am actually going"** — Makkah,
most often. So the Jeddah hub is organised by **destination**, not by service.

This is a genuine architectural difference, not a reskin:

| | Riyadh hub | Jeddah hub |
| --- | --- | --- |
| Organising axis | Service type | **Where you are going next** |
| First question answered | "What do you do?" | **"I have landed — now what?"** |
| Section order | Intercity · airport · railway · hotels | Arriving · **to Makkah** · around the city · onward by road |
| Signature element | Asymmetric branch grid | **Destination cards carrying caveats** |
| Emotional register | Capable, comprehensive | Reassuring at the moment of arrival |

---

## 3. Heading hierarchy

```
H1  Private transfers in and from Jeddah

H2  Arriving at King Abdulaziz International Airport
    H3  Which terminal — and why we confirm it from your flight
    H3  Meeting you on arrival
    H3  The Haramain station inside the airport

H2  Going on to Makkah
    H3  Before you book: entry to Makkah is restricted to Muslims
    H3  The drive, and how long it really takes
    H3  Arriving at a Haram-area hotel

H2  Around Jeddah
    H3  The corniche, Al-Balad and the city addresses
    H3  Hotel pickups and a named entrance

H2  Onward by road from Jeddah
    H3  Madinah
    H3  Taif — and why most Taif traffic comes this way
    H3  Yanbu and the coast
    H3  Riyadh — the long one east

H2  How a Jeddah quotation works

H2  Jeddah transfers: common questions

H2  Related journeys

H2  [CTA heading]
```

**Nine `<h2>`s, four of them destination-led.** Compare the Riyadh hub, whose
H2s are service-led. The orders are not interchangeable.

---

## 4. The destination cards — signature element

A grid of destination cards, each carrying **the verified distance range, the
driving-time range, and a caveat where one honestly exists.** The caveat is
the part no competitor card has.

| Card | Distance | Time | Caveat on the card |
| --- | --- | --- | --- |
| **Makkah** | ~80 km (published 79–85) | 1–1.5 hrs | **Entry restricted to Muslims; checkpoints on the road** |
| **Madinah** | 405–450 km | ~3h 45m – 5 hrs | The Haramain train is often the better answer |
| **Taif** | 163–201 km | ~1h 50m – 2h 25m | Mountain road via Al Hada; a longer alternative in fog or rain |
| **Yanbu** | ~337 km | ~3h 20m | Coastal road; a single well-corroborated figure |
| **Riyadh** | ~950 km | 9–10 hrs | A full day — links to our published route page |

Cards for Makkah and Madinah describe **the road journey we drive**, and carry
the standing disclaimer that we are not an official Hajj or Umrah operator and
arrange road transport only. That is the same position already published in
the homepage FAQ, so the hub is consistent with it rather than extending it.

**Note on scope.** The standing decision excluding *Riyadh*→Makkah and
→Madinah route pages from the Riyadh phase does not reach these cards: they
are Jeddah destination cards on a Jeddah hub, and Hajj and Umrah remain
approved nationwide offerings. No `/jeddah-to-makkah/` URL is proposed in this
document — only the card and the `<h2>`.

---

## 5. Service sections

Three, in this order, because it is the order of a traveller's day:

1. **Arriving at the airport** — the terminal question, meeting on arrival,
   and the fact that a Haramain station sits inside the airport.
2. **Around Jeddah** — city addresses, the named-entrance lesson carried over
   from the Riyadh hotel page, Al-Balad and the corniche as real destinations.
3. **How a Jeddah quotation works** — the process answer: written price before
   anything is reserved, nothing added afterwards, no payment to get a
   quotation. **No inclusions list**, for the same reason as every other page:
   nobody has confirmed them.

---

## 6. FAQ topics

Eight, chosen so that no answer duplicates a Riyadh page's answer:

1. Can you take me from Jeddah airport to a hotel in Makkah?
2. **Can non-Muslims travel to Makkah?** — the honest answer, and the most
   important question on the page
3. Which terminal will you meet me at?
4. Is the Haramain train better than driving to Makkah or Madinah?
5. How long does the drive to Makkah actually take?
6. Can you collect me from the Haramain station in Jeddah — and which one?
7. Do you arrange Umrah transport? *(Yes, road legs only; not an official
   operator; no visas or permits)*
8. Can you take me on to Riyadh?

---

## 7. CTA — unique to this page

| | |
| --- | --- |
| Eyebrow | EN "Landed, or leaving" · AR "وصلت أو تغادر" |
| Heading | EN **"Tell us where you are going from Jeddah"** · AR «أخبرنا إلى أين تتجه من جدة» |
| Body | The destination, the date, how many of you and what luggage. We reply with a written price and the terminal or entrance confirmed. |
| Button | EN "Get a Jeddah quote" · AR «اطلب سعر رحلة جدة» |

Deliberately destination-led rather than service-led, matching the page's
axis — and different from every existing CTA, all of which ask for a journey
rather than a destination.

---

## 8. Phased URL plan

| Phase | Page | Status |
| --- | --- | --- |
| **1** | `/en/jeddah/` · `/ar/jeddah/` | **This proposal** |
| 2 | A Jeddah airport page | Recommended next; slug to be decided with that proposal |
| 3 | `/en/jeddah-to-makkah/` · `/ar/…` | Recommended third, on the access-restriction angle |
| Later | Madinah, Taif | Hub sections until there is a reason to drive them |
| **Never** | `/jeddah-to-riyadh/` | A near-duplicate of our published `/riyadh-to-jeddah/` |
| **No** | Jeddah → Yanbu, Jeddah hotels | Sections only |
| Deferred | A Jeddah railway page | After the Riyadh railway page reports |

**Only the phase-1 hub is being proposed for approval now.** The rest is
recorded so the hub can be built with its children in mind rather than
retrofitted later — the lesson from the Riyadh airport page, whose linking
obligations were fixed before it was written and were met exactly.

---

## 9. What this page will not contain

- No price, fare or rate of any kind.
- No train schedule, frequency or ticket price.
- No terminal chart, and no numbered terminal. The terminal position at this
  airport is **more** contested than at Riyadh, not less.
- No Hajj Terminal operating dates — the only source was a blog citing
  guidance it did not link.
- No claim to be a Hajj or Umrah operator, no visas, no permits, no packages.
- No named hotel, and no hotel-branded photography.
- No claim about where a car may wait at any specific property or terminal.
- No fabricated review, rating, fleet claim or customer count.
