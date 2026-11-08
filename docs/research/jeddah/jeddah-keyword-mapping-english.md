# Jeddah — English keyword mapping

**No volume, difficulty, CPC or traffic figure appears in this document.** No
keyword tool is available in this environment, and a plausible-looking number
would be a fabrication that gets planned against. Every row is labelled with
what it actually rests on.

| Basis | Meaning |
| --- | --- |
| **Observed** | The phrasing appears in live search results, operator listings or source material read during this research |
| **Structural** | Derived from a verified fact about Jeddah (two rail stations, contested terminals, the access restriction) |
| **Inferred** | Our judgement from the pattern of the other intents; weakest category |

---

## The decision this document exists to make

The brief asks whether every proposed route deserves a URL. **It does not.**
Three tests, applied in order:

1. **Is the intent distinct?** Does a searcher want a different *answer*, not
   just a different place name?
2. **Can we answer it better than what already ranks?** If the honest answer
   is "the same as theirs but newer", that is not a page.
3. **Do we have something true to say that nobody else is saying?**

A route that fails all three is a section, not a URL.

---

## Hub — `/en/jeddah/`

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| **Primary** | jeddah private transfers | Observed — matches the published cluster pattern and the competitor's own service naming |
| Secondary | private transfer jeddah, jeddah car with driver, jeddah chauffeur service, transfers in jeddah, jeddah transport service | Observed |
| Navigational | jeddah transfers, jeddah taxi service | Observed; "taxi" is a different, price-led intent to acknowledge rather than chase |
| `<h2>` Arriving in Jeddah | arriving in jeddah transport, jeddah airport to city | Structural |
| `<h2>` Going to Makkah | jeddah to makkah transfer, jeddah airport to makkah | Observed — the dominant Jeddah intent |
| `<h2>` Around the city | jeddah city transfers, jeddah hotel transfer, al balad transfer, jeddah corniche | Inferred |
| `<h2>` Onward by road | jeddah intercity transfer, jeddah to madinah/taif/yanbu | Observed |

**Why the hub is first.** It is the only Jeddah asset the competitor does not
hold at all, and it is the parent every later Jeddah page needs. Verdict:
**own URL, build first.**

---

## Jeddah airport — own URL, build second

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| **Primary** | jeddah airport transfers | Observed |
| Secondary | king abdulaziz airport transfer, JED airport transfer, jeddah airport taxi, jeddah airport pickup, jeddah airport to makkah hotel, jeddah airport meet and greet | Observed — all appear in live operator listings |
| `<h2>` Arrivals | jeddah airport arrivals pickup, meet and greet jeddah airport | Observed |
| `<h2>` Which terminal | jeddah airport terminal 1, jeddah hajj terminal, which terminal jeddah airport | **Structural** — the terminal position is contested, which is exactly why the query exists |
| `<h2>` To Makkah | jeddah airport to makkah, jeddah airport to haram | Observed |
| `<h2>` To Madinah | jeddah airport to madinah | Observed |
| `<h2>` Rail from the airport | haramain train jeddah airport, airport station to makkah | Structural — the airport is a Haramain station |

**Verdict: own URL.** Distinct intent (an airport, not a city), three
competitor 404s, and we hold a correctly-labelled photograph of this airport
already. It is the strongest single page available in this phase.

---

## Jeddah → Makkah — own URL, build third

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| **Primary** | jeddah to makkah private transfer | Observed |
| Secondary | jeddah to makkah taxi, jeddah airport to makkah transfer, jeddah to makkah distance, jeddah to makkah by car, makkah to jeddah airport | Observed |
| **The differentiating intent** | can non muslims go to makkah, makkah entry rules, makkah checkpoint | **Observed, and nobody serving transfers answers it** |
| Reverse | makkah to jeddah airport transfer | Observed — the departure leg is a distinct booking |

**Verdict: own URL, and the one contested route worth taking.** The
competitor holds `/routes/jeddah-makkah/` and a `/distance/` page, so we
cannot win on novelty. We can win on the thing their page does not say:
**entry to Makkah is restricted to Muslims and enforced at a checkpoint.**

Note the reverse direction is a real second intent (hotel → airport, timed to
a flight) but it is the **same answer** — so it is an `<h2>`, not a second
URL. Same reasoning as the consolidated Riyadh airport page.

---

## Jeddah → Madinah — section first, URL later

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| Primary | jeddah to madinah private transfer | Observed |
| Secondary | jeddah to madinah by road, jeddah to madinah distance, jeddah airport to madinah | Observed |
| Competing mode | haramain train jeddah to madinah | Observed — and the train is genuinely strong here |

**Verdict: hub section now, own URL later.** The competitor holds the route
and the distance page, the honest answer often favours the train on this
corridor, and a 405–450 km range is a weak basis for a page whose main
message would be "consider the train". Earn the URL when there is a reason to
drive it.

---

## Jeddah → Taif — section first, URL later

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| Primary | jeddah to taif private transfer | Observed |
| Secondary | jeddah to taif distance, jeddah to taif road, al hada road | Observed |
| Structural angle | taif from jeddah vs from riyadh | **Structural** — we already publish Riyadh→Taif at ~790 km; from Jeddah it is ~170 km |

**Verdict: hub section now.** The distance contrast with our own Riyadh→Taif
page is a genuinely useful thing to say and costs nothing to say in a section.

---

## Jeddah → Yanbu — section, not a URL

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| Primary | jeddah to yanbu private transfer | Observed |
| Secondary | jeddah to yanbu distance, yanbu to jeddah airport | Observed |

**Verdict: no URL in this phase.** ~337 km on a coastal road with nothing
distinctive to add beyond the figure, against a competitor page that already
exists. Fails test 3. A line in the onward section is the right weight.

---

## Jeddah → Riyadh — no new URL, ever

We already publish `/riyadh-to-jeddah/`. The reverse direction is **the same
road, the same distance, the same vehicles**, and the only difference is which
end you start at.

**Verdict: no page.** It becomes a reciprocal link from the Jeddah hub to the
existing Riyadh route page, and a line in the existing page acknowledging the
reverse. Creating `/jeddah-to-riyadh/` would be a near-duplicate of a page we
already rank — the precise mistake the airport consolidation decision exists
to prevent.

---

## Jeddah hotel transfers — section, not a URL

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| Primary | jeddah hotel transfers | Inferred |
| Secondary | jeddah hotel to airport, hotel pickup jeddah | Inferred |

**Verdict: hub section.** The Riyadh hotel page taught us this intent is the
smallest in a cluster and largely a sub-intent of the airport page. In Jeddah
it is smaller still, because the dominant hotel journey is *to Makkah*, which
belongs on the Makkah page. Revisit only if Search Console shows Jeddah hotel
queries landing anywhere.

---

## Jeddah railway — not in this phase

| Mapped to | Candidates | Basis |
| --- | --- | --- |
| Primary | haramain train jeddah station transfer | Structural |
| Secondary | jeddah al sulaymaniyah station, jeddah airport haramain station, which jeddah train station | Structural |

**Verdict: deferred.** Two Haramain stations in Jeddah is the same genuine
"which station" question the Riyadh railway page answers, so the pattern is
proven — but let the Riyadh page show whether station transfers convert at all
before building a second one. Until then, the hub names both stations.

---

## Summary of URL verdicts

| Intent | Own URL? | When |
| --- | --- | --- |
| Jeddah hub | **Yes** | Phase 1 |
| Jeddah airport | **Yes** | Phase 2 |
| Jeddah → Makkah | **Yes** | Phase 3 |
| Jeddah → Madinah | Later | Needs a reason to drive |
| Jeddah → Taif | Later | Section now |
| Jeddah → Yanbu | **No** | Section only |
| Jeddah → Riyadh | **Never** | Reciprocal link to the existing page |
| Jeddah hotels | **No** | Section only |
| Jeddah railway | Later | After Riyadh's rail page reports |

Three URLs in this phase, not nine. Every omission is a decision with a
reason attached, which is what makes it reversible later.

---

## Still unmeasured

Unchanged in kind from every previous phase: monthly volume and difficulty for
every primary above. The difference now is that the published Riyadh cluster
will have Search Console data of its own within weeks, and **"airport
transfers" versus "hotel transfers" relative performance in Riyadh is the best
available predictor** of the same split in Jeddah. That is a better instrument
than any tool estimate, and it costs nothing but patience.
