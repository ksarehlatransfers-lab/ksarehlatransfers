# Riyadh cluster — SEO title and description inventory

## The title rule in force

`Main keyword + Brand/Domain + CTA`, targeting 50–60 characters, **and the
brand is dropped whenever the title would otherwise exceed that range**.

The brand — *Private Transfers Across Saudi* — is 30 characters. Added to a
route keyword and a call to action it lands every title in the 75–83 character
range, which search results truncate. The brand is therefore omitted from
every indexable page in this cluster. That is the rule applied, not an
oversight.

Mechanically this is enforced in [`lib/seo.ts`](../lib/seo.ts), which emits
`title: { absolute: … }` so the root layout's `"%s | brand"` template cannot
re-append the brand behind a page's back. An earlier build did exactly that
and pushed all six cluster titles over 60; the QA crawl caught it.

## Titles as published

Lengths are of the rendered `<title>` text. HTML entities count against the
budget, which is why no title uses an ampersand.

| URL | Title | Chars |
| --- | --- | --- |
| `/en` | Private Transfers Across Saudi Arabia \| Get a Quote | 51 |
| `/ar` | نقل خاص في جميع أنحاء السعودية \| اطلب عرض سعر | 45 |
| `/en/riyadh` | Riyadh Private Transfers \| Airport and Intercity Quotes | 55 |
| `/ar/riyadh` | نقل خاص في الرياض: المطار وبين المدن \| اطلب عرض سعر | 51 |
| `/en/riyadh-to-jeddah` | Riyadh to Jeddah Private Transfer \| Get a Quote | 47 |
| `/ar/riyadh-to-jeddah` | نقل خاص من الرياض إلى جدة \| اطلب عرض سعر | 40 |
| `/en/riyadh-to-dammam` | Riyadh to Dammam Private Transfer \| Get a Quote | 47 |
| `/ar/riyadh-to-dammam` | نقل خاص من الرياض إلى الدمام \| اطلب عرض سعر | 43 |
| `/en/riyadh-to-al-khobar` | Riyadh to Al Khobar Private Transfer \| Get a Quote | 50 |
| `/ar/riyadh-to-al-khobar` | نقل خاص من الرياض إلى الخبر \| اطلب عرض سعر | 42 |
| `/en/riyadh-to-buraydah/` | Riyadh to Buraydah Private Transfer \| Get a Quote | 49 |
| `/ar/riyadh-to-buraydah/` | نقل خاص من الرياض إلى بريدة والقصيم \| عرض سعر | 45 |
| `/en/riyadh-to-taif/` | Riyadh to Taif Private Transfer \| Get a Quote | 45 |
| `/ar/riyadh-to-taif/` | نقل خاص من الرياض إلى الطائف \| اطلب عرض سعر | 43 |
| `/en/riyadh-to-hail/` | Riyadh to Hail Private Transfer \| Get a Quote | 45 |
| `/ar/riyadh-to-hail/` | نقل خاص من الرياض إلى حائل \| اطلب عرض سعر | 41 |
| `/en/riyadh-to-alula/` | Riyadh to AlUla Private Transfer \| Drive or Fly | 47 |
| `/ar/riyadh-to-alula/` | نقل خاص من الرياض إلى العُلا \| اطلب عرض سعر | 43 |
| `/en/riyadh-airport-transfers/` | Riyadh Airport Transfers \| King Khalid \| Get a Quote | 52 |
| `/ar/riyadh-airport-transfers/` | نقل خاص من مطار الرياض \| اطلب عرض سعر | 37 |
| `/en/riyadh-railway-station-transfers/` | Riyadh Railway Station Transfers \| Both Stations | 48 |
| `/ar/riyadh-railway-station-transfers/` | نقل خاص من محطات قطار الرياض \| اطلب عرض سعر | 43 |
| `/en/riyadh-hotel-transfers/` | Riyadh Hotel Transfers \| Door to Door Quotes | 44 |
| `/ar/riyadh-hotel-transfers/` | نقل خاص من فنادق الرياض \| اطلب عرض سعر | 38 |
| `/en/jeddah/` | Jeddah Private Transfers \| Airport, Makkah, Intercity | 53 |
| `/ar/jeddah/` | نقل خاص في جدة: المطار ومكة وبين المدن \| عرض سعر | 48 |
| `/en/jeddah-airport-transfers/` | Jeddah Airport Transfers \| King Abdulaziz \| Get a Quote | 55 |
| `/ar/jeddah-airport-transfers/` | نقل خاص من مطار جدة \| الملك عبدالعزيز \| عرض سعر | 47 |
| `/en/get-quote` *(noindex)* | Get a quote \| Private Transfers Across Saudi | 44 |
| `/ar/get-quote` *(noindex)* | اطلب عرض سعر \| نقل خاص عبر السعودية | 35 |

The two quote-page titles *do* carry the brand: they are `noindex`, so the
title is a browser-tab label rather than a search result, and there is room.

Arabic titles are written for Arabic searchers rather than translated. They
lead with **نقل خاص** (the formal commercial term) and close with
**اطلب عرض سعر**, which is the natural Arabic call to action — not a literal
rendering of "Get a Quote".

## Descriptions

Every page has its own. None is reused, and none repeats a sentence from
another page. They are written to state the route, the approximate distance
and duration, who the journey suits, and that the next step is a quotation —
so the snippet answers the query even when it is not clicked.

Verified unique by the QA crawl, which fails the build check if any two pages
share a title or a description.

## Uniqueness check

Run against the production build:

```
node <scratchpad>/bin/crawl.mjs
```

It asserts, for all twelve URLs: a unique title, a unique description, a title
at or under 60 characters, a self-referencing canonical, a complete hreflang
set (en, ar, x-default), exactly one `<h1>`, the correct `lang` and `dir`, and
that only the quote pages carry `noindex`.
