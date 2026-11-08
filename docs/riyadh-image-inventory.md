# Riyadh cluster — image inventory and sources

Full per-file attribution, with author, licence and source page for all 24
photographs on the site, is in [image-credits.md](./image-credits.md). The
typed manifest the code reads is
[`lib/site-images.ts`](../lib/site-images.ts) — generated, not hand-written,
so `src`, dimensions, alt text, blur placeholder and credit cannot drift
apart.

## Audit of every Riyadh page

Carried out across all four published cluster pages plus the homepage, in both
languages.

| Page | Hero | Supporting | Arabic alt | Road photography |
| --- | --- | --- | --- | --- |
| Riyadh hub | `dest-riyadh` — Riyadh skyline | — | ✅ | n/a — a city hub, not a route |
| Riyadh → Jeddah | `dest-jeddah` — Jeddah | `route-highway40-west` — Highway 40 at the Tuwaiq escarpment, behind the pickup/drop-off block | ✅ | ✅ **fixed this pass** |
| Riyadh → Dammam | `dest-dammam` — Dammam | — | ✅ | ❌ no licensed photograph of the eastern corridor found |
| Riyadh → Al Khobar | `dest-khobar` — Al Khobar | — | ✅ | ❌ same corridor, same gap |
| Homepage | `hero` — Riyadh skyline at dusk | 20 others across the sections | ✅ | partial — `coverage` and `svc-intercity` are genuine highway photographs |

No two pages share a hero. That is checked by eye and enforced by the fact
that each page names its own `imageKey` in its content module.

## Arabic alt text — closed

Every image now carries two hand-written alternative texts, `alt` and
`altAr`, both authored in the pipeline manifest rather than translated from
each other. The Arabic strings name each place the way an Arabic reader would
— مكة المكرمة, المدينة المنورة, العُلا, حافة طويق — not as transliterations of
the English Wikipedia titles the files came from.

Components must not read `photo.alt` directly. They go through
`altText(photo, locale)` in [`lib/images.ts`](../lib/images.ts), which is the
single place the choice is made:

```ts
export function altText(photo: SiteImage, locale: Locale): string {
  return locale === "ar" ? photo.altAr : photo.alt;
}
```

All ten non-decorative call sites were converted, plus the Open Graph image
alt in [`lib/seo.ts`](../lib/seo.ts), so a shared link from an Arabic page now
carries Arabic alt text too. A grep for `photo.alt` or `hero.alt` outside the
helper returns nothing, which is the check worth repeating after any new page.

Decorative images — the two route-card thumbnails on the homepage, the
highway behind the Jeddah page's pickup block, the backgrounds on *How it
works* and the closing CTA — keep `alt=""` with `aria-hidden` in both
languages. That is correct and locale-independent: describing them would add
noise for a screen-reader user without adding information.

## Road photography — audit and outcome

A page about a drive ideally shows that drive. Wikimedia Commons was searched
through the MediaWiki API for photographs of the specific corridors, by
listing the images used in the articles on Saudi Highways 10, 40, 60 and 65
and on the Tuwaiq escarpment, then reading each file's licence from the API.

**Found and now in use:**

| Key | File | Licence | Why it is honest |
| --- | --- | --- | --- |
| `route-highway40-west` | `Riyadh-Makkah_Road_near_Tuwaiq_Escarpment.JPG` | CC BY-SA 3.0 | It is a photograph of the Riyadh–Makkah road — Highway 40 west — crossing the Tuwaiq escarpment on its way out of Riyadh. That is literally the opening stage of the Riyadh→Jeddah route, which the page describes as the first thing that happens. It replaced `coverage`, a generic desert highway, on that page. |

**Found and reserved for a later batch:**

| File | Licence | For |
| --- | --- | --- |
| `طريق القصيم الرياض السريع - panoramio.jpg` | CC BY 3.0 | The Riyadh–Qassim Expressway, Highway 65. This is the real corridor for **Riyadh → Buraydah** and **Riyadh → Hail** in batch 2. Pin it when those pages are written. |
| `Highway60SaudiArabia.JPG` (already in use as `svc-intercity`) | CC BY-SA 3.0 | Highway 60 is the Buraydah–Madinah road, so it is corridor-accurate for **Riyadh → Madinah** as a supporting image, provided the caption says which stretch it is. |

**Looked for and not found:**

- **Highway 40 east**, the Riyadh→Dammam and Riyadh→Al Khobar corridor. No
  openly licensed photograph of that road was reachable. The Abqaiq article
  holds only 1960s townscapes; the Highway 40 article's only other road photo
  is a branded filling station, which would be using someone else's signage as
  a stand-in for a service stop.
- Both pages therefore still lead with genuine photographs of the destination
  cities, captioned as the cities they are. Nothing on either page claims to
  be the road. **Commissioned or stock-licensed photography of Highway 40 east
  is the required replacement**, and it is the only outstanding image gap in
  batch 1.

## Batch 2 — three photographs added, 4 November 2026

| Key | Used as | Photograph | Author | Licence |
| --- | --- | --- | --- | --- |
| `dest-buraydah` | Buraydah hero, 1200×900 | King Fahad Road in Buraydah | Kskhh | CC BY 4.0 |
| `dest-hail` | Hail hero, 1200×900 | View of A'arif Fort, Hail | Iain Cheyne | CC BY-SA 4.0 |
| `route-highway65-north` | Buraydah booking band, 1600×900 | طريق القصيم الرياض السريع | you2011 | CC BY 3.0 |

All three carry English and Arabic alt text in the generated manifest and are
rendered through `altText(photo, locale)`.

**On honest subjects.** The Buraydah hero is a street in Buraydah, not a
generic cityscape — which suits a page whose concept is practical. The
Highway 65 photograph is the **actual Qassim–Riyadh expressway**, so it is used
as a road photograph legitimately, the way `route-highway40-west` is on the
Jeddah page. The Hail hero is A'arif Fort above the city; **no date is
published for it**, because sources conflict.

### Two heroes are shared with homepage cards

`dest-taif` and `guide-alula` were already held and are used as the Taif and
AlUla heroes. Both also appear as cards on the homepage, so those photographs
now appear twice on the site. That was the approved plan and it reads as
continuity — the card you clicked becomes the page you land on. It is still
the strongest argument for commissioned photography: see below.

### The pipeline is committed now

Two of these three images were a **build gate** for Batch 2 purely because the
sourcing script had been kept outside the repository and was then lost. It is
now [`scripts/sync-images.mjs`](../scripts/sync-images.mjs). See
[image-credits.md](./image-credits.md) for how to add a photograph, and for
the one-time blur-placeholder change that regenerating the manifest caused.

## Airport page — two photographs added, 6 November 2026

| Key | Used as | Photograph | Author | Licence |
| --- | --- | --- | --- | --- |
| `kkia-central` | Airport hero, 1600×900 | Central area of King Khalid International Airport | Kritzolina | CC BY-SA 4.0 |
| `kkia-departures` | Departures panel, 1200×900 | Domestic departures, King Khalid International Airport | Kskhh | CC BY-SA 3.0 |

Both carry English and Arabic alt text and render through
`altText(photo, locale)`.

**`svc-airport` was correctly not used.** It is **Jeddah's** airport terminal,
held for the nationwide services section, and the architecture document
flagged it as something that must never depict KKIA. It did not.

**Why only one of the two direction panels has a photograph.** We hold an
honest picture of a KKIA *departures* hall and no equivalent of its arrivals
hall. Rather than caption the departures photograph as arrivals, or use a
generic terminal interior for a section about being met on arrival, the
arrivals panel takes a tinted `palm-soft` header. The visual asymmetry is the
honest choice; an arrivals photograph remains a worthwhile commission.

## Railway page — two photographs added, 6 November 2026

| Key | Used as | Photograph | Author | Licence |
| --- | --- | --- | --- | --- |
| `station-riyadh` | Social card and JSON-LD primary image | Riyadh Station, Saudi Railways Organization | haitham alfalah | CC BY 3.0 |
| `station-riyadh-interior` | City-station section, 1200×900 | Interior of Riyadh East station, the Dammam line terminus | Zach1055 | CC BY-SA 4.0 |

**`station-riyadh` is deliberately not rendered on the page.** The railway
page's hero is a departure board rather than a photograph — that is its design
concept — so the station exterior serves the Open Graph card and the
structured data's `primaryImageOfPage`, which is what `imageKey` exists for.
Recorded here so it is not mistaken for an unused asset.

**No photograph of Riyadh North Station exists** under an open licence: the
Wikipedia article carries none and a Commons file search returns nothing. That
section of the page uses a tinted block with a train glyph rather than a
generic train or the airport terminal captioned as something it is not — the
same choice as the airport page's arrivals panel. **An original photograph of
Riyadh North is the single most useful image commission outstanding.**

Two further city-station photographs were found, verified as openly licensed
and left unused: `Riyadh train station, Saudi Arabia.jpg` (CC BY-SA 4.0,
Synaps commons) and `SAR Riyadh-Dammam Station, Riyadh.jpg` (CC BY-SA 4.0,
Ahmed). They are alternatives if either chosen image needs replacing.

## Hotel page — no new photography, 6 November 2026

**The hotel transfers page carries no photograph at all** — zero `<img>`
elements, verified in QA. Two reasons, both deliberate:

1. **We hold no photograph of a Riyadh hotel**, and none was sourced.
2. **No hotel-branded photography is to be used**, per the architecture
   specification. A recognisable hotel in our imagery would read as a
   partnership we do not have.

`dest-riyadh` (King Abdullah Financial District, already held) serves the
social card and the structured data's `primaryImageOfPage`. It is a city view
with no hotel in it.

This is now the **second** page using an image for the social card only — the
railway page is the other. Both are recorded here so neither looks like an
unused asset, and both are a consequence of the same thing: we are running out
of honest photography for service pages rather than destinations. A small
commissioned set — a hotel forecourt, a station entrance, an arrivals hall —
would serve three pages at once and is the most useful photography spend
outstanding.

## Jeddah hub — two photographs added, 7 November 2026

| Key | Used as | Photograph | Author | Licence |
| --- | --- | --- | --- | --- |
| `jeddah-corniche` | Hero, 1920×800 | The Jeddah corniche on the Red Sea | Kolaiel | **CC0** |
| `jeddah-albalad` | Around-Jeddah band, 1200×900 | Al-Balad, historic Jeddah | xiquinhosilva | CC BY 4.0 |

The hero source is 6144×8192, so the wide 1920×800 crop the design brief calls
for still keeps ample detail. CC0 is the most permissive licence in the whole
manifest.

### Used twice now, both times correctly

`svc-airport` serves the Jeddah hub's arriving band **and** the Jeddah airport
page's terminal section (added 7 November 2026). No new image was needed for
the airport page.

On both pages it is captioned *"a terminal at King Abdulaziz International
Airport"* — never by number or name. The Commons photographs of this airport
are titled "North Terminal 1–4", a terminal name whose current status is
contested, and the alt text must not smuggle a terminal assignment in through
the back door.

### `svc-airport` is finally used for its actual subject

Held since Batch 1, it is **King Abdulaziz International Airport** — Jeddah's.
It carried a standing warning never to let it depict KKIA, and the Riyadh
airport page honoured that by sourcing its own photographs. On the Jeddah hub
it is simply correct, and the arriving band needed no new sourcing.

### An honesty constraint on airport imagery

The Commons photographs of this airport are titled "**North Terminal** 1–4" —
a terminal name whose current status is contested. Any airport image on a
Jeddah page is captioned *"a terminal at King Abdulaziz International
Airport"* and **never by number or name**, however the source file is titled.
The page publishes no terminal chart and its alt text must not smuggle one in.

### Still outstanding

No photograph of a Haramain station in Jeddah exists on Commons. That is the
**fourth** service subject in a row with no open-licensed image — after the
Riyadh hotel forecourt, Riyadh North station and the KKIA arrivals hall. The
commissioned-set recommendation below now covers four pages.

## Licensing

Every image is a real photograph of the place it depicts, sourced through the
MediaWiki API from Wikimedia Commons and used under CC0, CC BY 2.0–4.0,
CC BY-SA 2.0–4.0 or public domain. Author and licence came from the API
response rather than being written by hand.

Several are CC BY-SA, which requires attribution. A credit line appears in the
global footer on every page, in both languages.

## Optimisation

One caveat on re-running the pipeline: it resolves `sharp` from the project,
but `sharp` is **not** a declared dependency in `package.json` — it is present
only as a transitive install. Add it as a `devDependency` before relying on
the pipeline from a fresh checkout.

Each file was cropped with sharp using a saliency-based strategy, resized to
the shape its slot needs, encoded to WebP, and given a generated blur
placeholder. They are served through `next/image` with explicit `width` and
`height` and a `sizes` attribute, so no image causes layout shift. Hero images
are `priority`; everything else is lazy.

## What was not done, deliberately

- No AI-generated images anywhere. The specification forbids them as
  representations of real vehicles, customers or locations, and these pages
  depict real locations.
- No vehicle photography. The fleet is not confirmed, so a stock photo of
  someone else's car presented as ours would be a fabrication. The vehicle
  section is icon and data driven for exactly this reason.
- No destination photograph is presented as a road photograph. Where the road
  itself was unavailable, the page shows the city and says so.
- No remote or hotlinked image URLs. Every file is in `public/images/` and
  served from this origin.
