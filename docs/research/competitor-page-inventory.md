# Competitor page inventory — taxiserviceksa.com

Research only. Nothing in this folder changes the website.

**Crawled:** 4 November 2026, via the competitor's own `robots.txt` and
sitemap index, plus direct fetches of selected pages and HTTP status probes of
URLs that are *not* in the sitemap.

**Method and its limits.** Everything below is observed from the live site.
Nothing here is an estimate of traffic or rankings — see
[sources-and-research-limitations.md](./sources-and-research-limitations.md).
A URL being in the sitemap means the competitor *wants* it indexed, not that
Google has indexed it. I had no access to Search Console, a rank tracker or a
site-index API, so **indexation is unverified throughout.**

## robots.txt

`https://taxiserviceksa.com/robots.txt` returns 200 and is worth reading
closely, because it is a deliberate AI-search play:

```
User-agent: *          Allow: /   (Disallow: /api/ /admin/ /my-trips/
                                   /wp-content/ /booking?* /blog?* /2025/ /whatsapp)
User-agent: GPTBot            Allow: /
User-agent: ChatGPT-User      Allow: /
User-agent: ClaudeBot         Allow: /
User-agent: Google-Extended   Allow: /
User-agent: PerplexityBot     Allow: /
User-agent: anthropic-ai      Allow: /
User-agent: cohere-ai         Allow: /
User-agent: OmgiliBot         Allow: /

Content-Signal: ai-train=no, search=yes, ai-input=yes
```

Two observations:

1. They explicitly allow every major AI crawler by name, then use
   `Content-Signal` to permit AI *retrieval* while refusing AI *training*.
   That is a current, considered stance, not a default.
2. `Disallow: /wp-content/` is a leftover from a WordPress build. The live site
   is a JavaScript app (Next.js-style route segments), so this is vestigial.

## Sitemap structure

`sitemap.xml` is an index of **12** sub-sitemaps totalling **1,236 URLs**.

| Sub-sitemap | URLs | What it holds |
| --- | --- | --- |
| `sitemap-blog.xml` | 450 | Blog posts and `/guides/` |
| `sitemap-routes.xml` | 303 | City-pair transfer pages under `/routes/` |
| `sitemap-locations.xml` | 126 | City and sub-location pages under `/locations/` |
| `sitemap-pages.xml` | 117 | Standalone pages, including ~36 jobs pages |
| `sitemap-ar.xml` | 78 | Arabic |
| `sitemap-distance.xml` | 63 | Informational distance pages |
| `sitemap-ur.xml` | 48 | Urdu |
| `sitemap-services.xml` | 28 | `/services/` |
| `sitemap-borders.xml` | 12 | Land border crossings |
| `sitemap-bus.xml` | 6 | Bus routes |
| `sitemap-drivers.xml` | 5 | Individual driver profiles |
| `sitemap-fleet.xml` | **0** | **Empty — a declared sitemap containing no URLs** |

### Top-level path distribution

| Segment | Count | Segment | Count |
| --- | --- | --- | --- |
| `/blog/` | 354 | `/services/` | 29 |
| `/routes/` | 303 | `/join-as-driver/` | 18 |
| `/locations/` | 127 | `/border-crossings/` | 13 |
| `/guides/` | 94 | `/events/` | 10 |
| `/ar/` | 79 | `/bus/` | 7 |
| `/distance/` | 64 | `/drivers/` | 6 |
| `/ur/` | 49 | ~36 standalone jobs pages | 36 |

## URL conventions

Inconsistent, which matters because it produces competing URLs for one intent.

| Family | Pattern | Example |
| --- | --- | --- |
| Commercial route | `/routes/<a>-<b>/` — **no** "to" | `/routes/riyadh-jeddah/` |
| Commercial route (variant) | `/routes/<a>-to-<b>-taxi/` | `/routes/dammam-airport-to-bahrain-airport-taxi/` |
| Informational distance | `/distance/<a>-to-<b>/` | `/distance/riyadh-to-jeddah/` |
| City hub | `/locations/<city>/` | `/locations/riyadh/` |
| Sub-location | `/locations/<city>/<place>/` | `/locations/riyadh/kafd/` |
| Service | `/services/<service>/` | `/services/intercity/` |
| **Standalone duplicate** | `/<a>-to-<b>-private-car` | `/riyadh-to-jeddah-private-car` |
| Locale | `/ar/…`, `/ur/…` (English has no prefix) | `/ar/routes/riyadh-jeddah/` |

Of the 303 `/routes/` URLs, **192 use the bare pair form** and **111 use a
`-to-…-taxi` form**. Both exist in the same directory.

## Navigation and footer

The header `SiteNavigationElement` schema declares only **seven** items:

`Home` · `Routes` (`/routes/`) · `Fleet` (`/fleet/`) · `Locations`
(`/locations/`) · `Ziyarat Guides` (`/guides/`) · `Chauffeur Jobs`
(`/chauffeur-jobs-riyadh/`) · `Contact`

Two things stand out. "Ziyarat Guides" occupies a primary nav slot, which tells
you where the business's centre of gravity is. And a **recruitment** page
(`/chauffeur-jobs-riyadh/`) sits in the global nav — they are hiring drivers as
hard as they are selling rides.

Distribution is done in the footer, not the nav: the homepage carries links to
~45 distinct internal URLs, mostly `/locations/*` and `/routes/*`.

## Pages inspected in full

Fetched and parsed (title, description, canonical, hreflang, H1/H2/H3, JSON-LD
`@type` set, image count and alt text, body word count):

| URL | Title | H2s | Schema beyond the sitewide set | Words¹ |
| --- | --- | --- | --- | --- |
| `/` | Private Transfers, Day Trips and Hourly Drivers with Taxi Service KSA | 12 | `Speakable` | 2,023 |
| `/routes/riyadh-jeddah/` | Riyadh to Jeddah Taxi \| Private Car & Chauffeur | 11 | `Offer`, `FAQPage` | 2,769 |
| `/distance/riyadh-to-jeddah/` | Riyadh to Jeddah Distance by Road \| Driving Time & Map | 11 | `WebPage`, `Trip` | 1,645 |
| `/riyadh-to-jeddah-private-car` | Riyadh to Jeddah Private Car \| Intercity Taxi Service \| Taxi Service KSA | 5 | `Service`, `Offer` | 914 |
| `/routes/riyadh-makkah/` | Riyadh to Makkah Taxi \| Riyadh to Makkah Private Car \| Taxi Service KSA | 4 | — | 1,052 |
| `/distance/riyadh-to-madinah/` | Riyadh to Madinah Distance by Road \| Driving Time & Map | 11 | `WebPage`, `Trip` | 1,597 |
| `/distance/riyadh-to-alula/` | Riyadh to AlUla Distance by Road \| Driving Time & Map | 11 | `WebPage`, `Trip` | 1,596 |
| `/locations/riyadh/` | Riyadh Taxi & Private Transfers \| Airport, Chauffeur & Intercity | 17 | `FAQPage` | 1,684 |
| `/services/intercity/` | Intercity Taxi Saudi Arabia \| Private Car & Chauffeur | 12 | `Service`, `Offer`, `FAQPage` | 2,255 |
| `/services/private-driver/` | Private Driver Hire Saudi Arabia \| Riyadh & Jeddah | 8 | `Service`, `FAQPage` | 1,551 |
| `/riyadh-airport-taxi` | Riyadh Airport Taxi \| King Khalid International Airport (RUH) Transfer \| … | 8 | — | 1,887 |
| `/ar/` | خدمة تاكسي في السعودية \| Taxi Service KSA | 17 | `Speakable` | 2,790 |
| `/ar/services/intercity/` | **Intercity Taxi Service KSA \| Long Distance Private Transfers** | 6 | — | 1,307 |

¹ Visible text including header and footer chrome, so these overstate body
copy by roughly 250–400 words. Comparable between rows, not absolute.

**Sitewide JSON-LD** (present on every page fetched): `Organization`,
`TaxiService`, `WebSite` + `SearchAction`, `BreadcrumbList`, `ItemList`,
`SiteNavigationElement`, `City`, `AdministrativeArea`, `Country`,
`PostalAddress`, `ContactPoint`, `OpeningHoursSpecification`, `Person`,
`ImageObject`. This is a genuinely thorough implementation and the single most
transferable thing on the site.

## Content families in detail

### `/routes/` — 303 pages

City-token frequency across the 303 route slugs (a slug can contain two):

| Token | Count | Token | Count | Token | Count |
| --- | --- | --- | --- | --- | --- |
| dammam | 85 | makkah | 45 | dubai | 10 |
| jeddah | 80 | madinah | 39 | abu-dhabi | 10 |
| tabuk | 78 | **riyadh** | **24** | alula | 9 |
| bahrain | 48 | kuwait | 14 | khobar | 6 |
| | | doha / amman | 11 each | taif | 5 |
| | | muscat | 10 | hail | 2 |
| | | | | buraidah | 1 |
| | | | | **qassim** | **0** |

**Riyadh appears in only 24 of 303 route pages.** The Eastern Province
(Dammam/Bahrain corridor), the Umrah corridor (Jeddah–Makkah–Madinah) and a
large programmatic Tabuk set carry the site. Riyadh is their thinnest major
city.

The Dammam set includes **named-company route pages** —
`baker-hughes-dammam-to-bahrain-taxi`, `dhl-dammam-to-bahrain-taxi`,
`bechtel-dammam-to-bahrain-taxi`, `db-schenker-…`, `totalenergies-dammam`,
`technip-energies-dammam`, `weatherford-dammam`, `toyota-dammam`,
`carrefour-dammam-to-bahrain-taxi`. These target third-party company names in
the URL. Noted as a tactic; see the strategy document for why we should not
copy it.

### `/distance/` — 63 pages, one template

The distance pages are programmatic. Three fetched independently returned
**1,645 / 1,597 / 1,596 words** and an identical 11-H2 skeleton:

> Road Distance · Driving Time · Road Map · Route · by Car · Taxi · Journey
> Planning · Best Time to Travel · FAQ · Related Distance Guides · Related
> Taxi Routes

Meta descriptions are templated too: *"<A> to <B> distance by road, estimated
driving time, route map and journey information. See how far <B> is from <A>
by car."*

Each carries a `Trip` + `WebPage` schema, a stat strip ("Road Distance ~835 km
/ Driving Time ~7–8.5 hrs"), a **"Figures last checked: August 2026"** line,
and FAQ answers opening with a bolded **"Quick Answer:"**. That last pattern is
the most citation-friendly thing on the site and is worth learning from.

Figures they publish, for comparison with ours:

| Route | Their figure | Our published figure |
| --- | --- | --- |
| Riyadh–Jeddah | ~950 km (948–967), 9–11 hrs | ~950 km, 9–10 hrs |
| Riyadh–Dammam | ~410 km, 3.5–4 hrs | ~400 km (402–418), 3.5–4.5 hrs |
| Riyadh–Makkah | ~870 km, 8–9 hrs | *(no page)* |
| Riyadh–Madinah | ~835 km (830–840), 7–8.5 hrs | *(no page)* |
| Riyadh–AlUla | ~1,080 km (1,050–1,150), 10–12 hrs | *(no page)* |

Independently corroborated against route planners during our own research — see
[riyadh-batch-2-keyword-mapping.md](./riyadh-batch-2-keyword-mapping.md). Their
numbers are honest and roughly agree with ours.

### `/locations/` — 126 pages, three tiers

- **City hubs:** riyadh, jeddah, makkah, madinah, dammam, al-khobar, taif,
  alula, tabuk, abha, hail, buraidah, unaizah, al-qassim, hofuf, jubail, neom,
  kaec, yanbu, najran, arar, sakaka and ~60 smaller towns.
- **Sub-locations:** `/locations/riyadh/kafd/`, `/olaya/`, `/diriyah/`,
  `/diplomatic-quarter/`, `/boulevard-world/`, `/bujairi-terrace/`, `/front/`;
  `/makkah/aziziyah|jabal-omar|jarwal|kudai|misfalah|train-station/`;
  `/madinah/central-area|quba|uhud|qiblatain|sultana|train-station|madinah-airport/`;
  `/taif/al-hada|al-shafa|miqat-qarn-al-manazil/`;
  `/al-khobar/corniche|half-moon-bay|bahrain-causeway/`;
  `/alula/hegra|elephant-rock|airport|private-driver/`.
- **Long tail:** afif, al-ghat, al-majma-ah, al-quway-iyah, zulfi, dawadmi,
  thadiq, huraymila, rumah and similar — towns on the corridors, no demand
  verified.

The sub-location tier is the strongest idea on the site and we have no
equivalent. A page for "transfer to KAFD" or "transfer to Diriyah" answers a
real question our Riyadh hub only gestures at.

### `/guides/` — 94 pages, ~80 of them one template

`/guides/international/<country>-pilgrims-umrah-taxi-jeddah-makkah-madinah/`
exists for roughly **80 countries** — afghanistan, albania, algeria,
argentina, australia, austria, azerbaijan, bahrain, bangladesh, belgium,
bosnia, brazil … through to qatar and beyond. One template, one swapped
nationality.

This is scaled content with no per-country substance, which is the pattern
Google's spam policies describe as scaled content abuse. **Flagged as a risk
to avoid, not an opportunity.**

The remaining ~14 guides are substantive and Umrah-centred:
`haram-gates-access`, `meeqat-locations`, `seven-mosques`, `quba-walking-path`,
`uhud-history`, `umrah-tawaf-guide`, `madinah-prayer-times`, `madinah-food`,
`makkah-shopping`, `jeddah-airport-guide`, `riyadh-business-guide`,
`currency`, `avoid-taxi-scams`.

### `/border-crossings/` — 12 pages

Salwa, Al Batha, King Fahd Causeway, Khafji, Nuwaiseeb, Al Salmi, Al Haditha,
Halat Ammar, Al Durrah, Abu Samra, Ramlat Khaliya, Rub Al Khali. A genuinely
differentiated family with clear intent, and we have nothing like it.

### `/drivers/` — 5 pages

Named individual driver profiles (`ghulam`, `jahid`, `mohammed-abdullah`,
`usman-ahmed`), plus `Person` schema sitewide. A real E-E-A-T signal. We cannot
copy it without real staff to name.

## Defects observed on the competitor site

Recorded because each is an opportunity for us, and because we should not copy
them.

1. **Arabic URLs serving English content.**
   `/ar/services/intercity/` returns an English `<title>`, English meta
   description, an English `<h1>` ("Intercity Taxi Service Saudi Arabia") and
   six English `<h2>`s. The URL, the hreflang and the canonical all say
   Arabic. This is the clearest quality gap on the site.
2. **The Arabic homepage is a hybrid.** `/ar/` is substantially Arabic but
   carries untranslated English headings inside it — "Why TaxiServiceKSA is the
   Trusted Choice Across Saudi Arabia & the GCC", "Official License",
   "Prayer-Time Synced", "High-Frequency Corridors", "Choose Your Service".
3. **hreflang is applied inconsistently.** Present on `/`, `/ar/`,
   `/services/*` and `/riyadh-airport-taxi`. **Absent** on `/routes/*`,
   `/distance/*` and `/locations/*` — the three largest families, 492 pages.
   `/routes/riyadh-jeddah/` emits no hreflang at all despite
   `/ar/routes/riyadh-jeddah/` existing.
4. **An unrendered dynamic segment is in the sitemap.**
   `/ar/locations/[city]/` and `/ur/locations/[city]/` are submitted literally,
   brackets included.
5. **A declared sitemap with zero URLs** (`sitemap-fleet.xml`), while
   `/fleet/` sits in the primary navigation.
6. **Three URLs competing for one intent.** `/routes/riyadh-jeddah/` (2,769
   words, prices, FAQ schema), `/distance/riyadh-to-jeddah/` (1,645 words) and
   `/riyadh-to-jeddah-private-car` (914 words, no unique angle). The third adds
   nothing the first does not do better.
7. **Price inconsistency between their own pages.** The `/routes/riyadh-jeddah/`
   meta description states "Sedan 1,500 SAR"; a third-party search snippet
   quotes the same site at "starting at SAR 1800". We did not verify which is
   current, but published prices that disagree across a site are a trust
   problem.
8. **PAA-scraped FAQs.** `/riyadh-airport-taxi` answers "Is crazy driving
   common in Saudi Arabia?", "Is Riyadh, Saudi Arabia open to foreigners?" and
   "What's your best advice for traveling in Saudi Arabia?" — questions
   harvested for keywords, not asked by someone booking a transfer.
9. **Two privacy URLs** (`/privacy` and `/privacy-policy`), a duplicate-content
   pattern.

## Pages confirmed absent (HTTP probe, 4 November 2026)

This is the central finding of the whole inventory. Probed directly because
their absence from the sitemap is not proof they do not exist:

| URL probed | Status |
| --- | --- |
| `/routes/riyadh-makkah/` | **200** |
| `/routes/riyadh-madinah/` | **404** |
| `/routes/riyadh-taif/` | **404** |
| `/routes/riyadh-alula/` | **404** |
| `/routes/riyadh-buraidah/` | **404** |
| `/routes/riyadh-hail/` | **404** |
| `/riyadh-to-madinah-taxi/` | **404** |
| `/distance/riyadh-to-buraidah/` | **404** |
| `/distance/riyadh-to-hail/` | **404** |

Of our six planned Batch 2 routes, the strongest competitor in this market has
a commercial page for **exactly one** (Makkah), informational-only coverage of
three (Madinah, Taif, AlUla), and **nothing at all** for two (Buraydah, Hail).

## Arabic and Urdu coverage

| | URLs | Share of 1,236 |
| --- | --- | --- |
| English | ~1,109 | ~90% |
| Arabic | 78 | 6.3% |
| Urdu | 48 | 3.9% |

Arabic covers the `/ar/` homepage, 14 guides, 10 locations, 16 routes, 25
services and 5 standalone pages. **Arabic has no `/distance/` pages, no
`/border-crossings/`, no `/bus/` and no Riyadh location hub** — there is no
`/ar/locations/riyadh/`, although `/ur/locations/riyadh/` exists.

Against that, our own site is **100% bilingual with complete, hand-written
Arabic and reciprocal hreflang on every page**. That is our single largest
structural advantage and it is documented in
[competitor-gap-analysis.md](./competitor-gap-analysis.md).

## Image usage

| Page | Images | Missing alt | Empty alt |
| --- | --- | --- | --- |
| `/` | 20 | 0 | 0 |
| `/ar/` | 251 | 0 | 0 |
| `/routes/riyadh-jeddah/` | 3 | 0 | 0 |
| `/services/intercity/` | 5 | 0 | 0 |
| `/distance/*` | **0** | — | — |
| `/locations/riyadh/` | 1 | 0 | 0 |
| `/riyadh-airport-taxi` | 1 | 0 | 0 |

Alt text is uniformly present and descriptive — "Toyota Camry sedan used for
Riyadh to Jeddah trips", "Door-to-door pickup at Jeddah airport terminal". Alt
text is **English on the Arabic homepage**, the same defect we closed on our
own site on 3 November 2026.

Two further notes: the Arabic homepage loading **251 images** is a performance
problem worth not imitating, and they photograph **named vehicles** (Camry,
Yukon XL, Staria, Escalade, S-Class, Hiace) because they have a real fleet to
photograph. We do not, and must not fake it.

## What was not accessible

- **Indexation status.** No Search Console, no index API. Every URL here is
  "submitted", not "indexed".
- **Rankings, traffic, volumes, authority.** No Ahrefs, Semrush, Moz or
  Keyword Planner in this environment.
- **`/blog/` (354 URLs) and `/events/`, `/insights/`, `/partners/`,
  `/web-stories/`, `/calculator/`, `/map/`.** Enumerated from the sitemap but
  not individually fetched. Their content is **not** characterised here, and
  should not be assumed.
- **Client-rendered content.** Fetches captured server-rendered HTML. Anything
  injected after hydration is invisible to this inventory.
