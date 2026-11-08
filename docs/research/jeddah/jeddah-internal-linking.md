# Jeddah hub — internal linking structure

> **Built 7 November 2026**, with two proposals held. Four of the six inbound
> links were made; both homepage changes were **not**, because the homepage is
> a surface the owner has twice asked to preserve and neither change is a
> correctness fix. Marked ✅ / ⏸ in §2 below.

Links on this site are generated from the route registry in
`lib/i18n/routes.ts` through `href()`, so a slug change moves every link that
points at it and the trailing slash is inherited automatically. The crawl
(`npm run qa`) fails on a link to an unregistered route, a slashless internal
link, a link that redirects, and a cross-locale link that is not the language
switcher. Those four mechanisms enforce most of what follows.

---

## 1. The rule that governs everything here

**English links to English, Arabic links to Arabic.** The language switcher is
the only element permitted to cross locales, and the only one carrying
`hrefLang`. The Jeddah hub changes nothing about that.

**Nothing links to a page that does not exist.** Where the hub names a
forthcoming Jeddah page, it names it as text, exactly as the Riyadh hub did —
and the QA crawl now **lists every such promise on every run**, so it cannot
be left behind when the page ships. That check exists because this project
left stale promises twice.

---

## 2. Inbound — how the hub gets found

| From | Link | Change required |
| --- | --- | --- |
| ✅ **Destinations menu** (header) | "Jeddah" was `planned: true` and rendered as **text**; it is now a real link to `/<locale>/jeddah/` | **Done.** The established required-edit pattern, exactly as the Riyadh hub's airport, railway and hotel branches each were |
| ⏸ **Homepage destinations section** | The Jeddah card would become a link | **Held.** Those cards have *never* linked — not even Riyadh's, which has had a hub for days. Making Jeddah's a link adds new behaviour to a protected section rather than fixing a fault |
| ⏸ **Homepage intercity cards** | Three Jeddah-touching cards render as plain text with no link, because they carry no `routeKey` | **Held, and recommended.** Pointing them at the hub turns three dead cards into links and needs the `routeKey` union in `lib/content/routes.ts` widened. A real improvement, but a homepage change and so the owner's call |
| ✅ **Footer** | A "Jeddah transfers" column mirroring the Riyadh one | **Done** |
| ✅ **Header** | A "Jeddah" group beside "Riyadh routes", hub first | **Done** |
| ✅ **`/riyadh-to-jeddah/`** | Its related block gains the Jeddah hub | **Done** — the reciprocity gap in §4 is closed |
| **Riyadh hub** | No link. Riyadh is not a parent of Jeddah | None, as planned |

### On the nationwide Services column

The footer's **Services** column stays pointed at the homepage services
section, for the same reason it does for airport transfers: that column
describes the service across the whole country, and sending it to a
Jeddah-only page would be the wrong answer for every other city. The city
columns carry city pages; the services column carries nationwide services.
This was decided when the Riyadh airport page shipped and it holds here.

---

## 3. Outbound — where the hub sends people

| Target | Placement | Exists today? |
| --- | --- | --- |
| `/<locale>/riyadh-to-jeddah/` | Contextual, from the "Riyadh — the long one east" destination card | **Yes** |
| Quote page | Header CTA, footer, and a page-specific closing CTA | Yes |
| Homepage | Breadcrumb root | Yes |
| A Jeddah airport page | Contextual, from the arrivals `<h2>` | **No — name as text until phase 2** |
| `/jeddah-to-makkah/` | Contextual, from the Makkah `<h2>` and card | **No — text until phase 3** |
| Madinah, Taif, Yanbu | Sections on the hub; no links, because no pages are planned | No |
| `/<locale>/riyadh/` | **Not from the body.** Riyadh is a sibling city, not a related journey | n/a |

### The one cross-cluster link worth making

**Taif.** We publish `/riyadh-to-taif/` at ~790 km. From Jeddah, Taif is
~170 km — roughly a fifth of the distance. The Jeddah hub's Taif section can
say so and link to the Riyadh page, and that link is genuinely useful in both
directions: it tells a Jeddah reader that Taif is close, and it tells a Riyadh
reader why the Jeddah route exists. It is the only Riyadh-cluster route page
the Jeddah hub should link to besides Riyadh→Jeddah itself.

**Not** Buraydah, Hail, AlUla, Dammam or Al Khobar. None has a natural
relationship to Jeddah, and linking them would be the mechanical
cross-linking this project has refused twice before.

---

## 4. A reciprocity gap in the published site

`/riyadh-to-jeddah/` is a **published** page about travelling to Jeddah. Its
related block currently carries the Riyadh hub, Dammam and Al Khobar — the
three Riyadh-side relations — and nothing about Jeddah itself.

Once the hub exists, that page should gain a link to it. This is the mirror of
the obligation the airport page met: **the parent of the destination is a
genuinely related page**, and a reader who has just read about a 950 km drive
to Jeddah is the single best-qualified reader for what happens when they
arrive.

**Done, 7 November 2026.** `/riyadh-to-jeddah/`'s related block now carries
*"Arriving in Jeddah"* as its first entry, ahead of the Dammam and Al Khobar
siblings — a reader who has just read about a 950 km drive to Jeddah is the
best-qualified reader for what happens when they arrive. One edit to one
published Riyadh page, and the only one this phase needed.

---

## 5. Proposed link matrix

`H` = header, `F` = footer, `B` = breadcrumb, `C` = contextual in-body,
`T` = named as text, not yet linked.

| From ↓ / To → | Home | Jeddah hub | Riyadh hub | Riyadh→Jeddah | Riyadh→Taif | JED airport | Jeddah→Makkah | Quote |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Home** | — | **H F C** | H F C | H F C | H F | — | — | H F C |
| **Jeddah hub** | H F B | — | H F | **H F C** | **C** | **T** | **T** | H F C |
| **Riyadh hub** | H F B | H F | — | H F C | H F C | — | — | H F C |
| **Riyadh→Jeddah** | H F B | **H F C** | H F B C | — | H F | — | — | H F C |
| **Riyadh→Taif** | H F B | H F | H F B C | H F C | — | — | — | H F C |
| **Quote** | H F C | H F | H F | H F | H F | — | — | — |

Bold marks what this phase adds. Everything unbolded already exists or is
unchanged.

**No orphan is created**, and the hub has five inbound paths on day one:
Destinations menu, homepage destination card, homepage intercity cards,
footer column and header group.

---

## 6. Anchor text

Following the existing convention — the destination's own name plus a reason,
never a repeated exact-match phrase.

| Target | English anchors | Arabic anchors |
| --- | --- | --- |
| Jeddah hub | Jeddah; Jeddah transfers; All Jeddah journeys | جدة؛ نقل خاص في جدة؛ جميع رحلات جدة |
| Riyadh→Jeddah | Riyadh to Jeddah; the road from Riyadh | الرياض إلى جدة؛ الطريق من الرياض |
| Riyadh→Taif | Riyadh to Taif; Taif the long way | الرياض إلى الطائف؛ الطائف من الرياض |

The hub's own CTA button is **"Get a Jeddah quote"** — distinct from all nine
existing CTA buttons, none of which is reused anywhere in the cluster.

---

## 7. Breadcrumbs and structured data

| | |
| --- | --- |
| Breadcrumb | Home → Jeddah. **Two levels, not three** — Jeddah is a city parent, the same depth as the Riyadh hub |
| Future children | Home → Jeddah → *page*, three levels, matching the Riyadh route pages |
| `BreadcrumbList` | Generated from the same `Crumb[]` that renders the visible trail, so the two cannot disagree |
| All `url` / `item` / `@id` values | Absolute, trailing-slash, via `absoluteUrl(href(...))` |
| hreflang | `en`, `ar` and `x-default`, reciprocal, trailing-slash — generated by `pageMetadata()` |

---

## 8. What the QA crawl will check

No new checks are needed. The existing suite covers it:

- the hub answers 200 at `/en/jeddah/` and `/ar/jeddah/`, and 308 from the
  slashless form;
- its canonical is self-referencing and its hreflang set reciprocal;
- no internal link on it redirects or is slashless;
- no cross-locale link except the switcher;
- it is not an orphan;
- exactly one `<h1>`, and a title unique across the site;
- any "being written" text on it is **listed in the promise report**, so the
  Jeddah airport and Makkah mentions cannot be forgotten when those pages
  ship.

Expected crawl size after the hub: **28 pages from 26 sitemap URLs.**

**Measured, 7 November 2026: 28 pages from 26 sitemap URLs, all checks
passed.** The promise report correctly lists `/en/jeddah/` and `/ar/jeddah/`
for the Makkah page named as text — which is the mechanism working, not a
fault.
