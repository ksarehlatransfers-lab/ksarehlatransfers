# Riyadh cluster — keyword mapping (English and Arabic)

One primary intent per URL. Where two candidate keywords share an intent, the
weaker one is a secondary on the same page rather than a page of its own.

## What is and is not evidenced here

**No search volume or keyword difficulty figures appear in this document.**
No keyword research tool was available in this environment, so any number
would be invented. The keyword *selection* below is grounded in what the live
SERPs returned for these terms, which was checked; the demand behind them was
not, and needs validating before you commit budget to the cluster.

Still to validate with a real tool (Ahrefs, Semrush, Google Keyword Planner,
or Search Console once the site has impressions):

1. Monthly volume for each primary, English and Arabic separately.
2. Whether Arabic searchers for these routes use **توصيل**, **نقل** or
   **مشوار** most — the live results suggest all three are in use, with
   classified-ad sites dominating, but the split is unknown.
3. Whether "Riyadh to Dammam" demand is materially larger than
   "Riyadh to Al Khobar", which would change how much depth each page earns.
4. ~~Whether the two airport-direction phrasings justify separate pages.~~
   **Resolved by decision:** one consolidated page at
   `riyadh-airport-transfers`. See
   [riyadh-url-inventory.md](./riyadh-url-inventory.md).

The step-by-step research pass, including the pages not yet written, is in
[riyadh-keyword-checklist.md](./riyadh-keyword-checklist.md). Nothing on a
published page may be rewritten on the strength of an assumed volume figure.

## SERP observations (checked, November 2026)

- These routes have **no strong commercial incumbent**. English results are
  dominated by route-planner and aggregator pages (rome2rio, distance
  calculators) plus a few small taxi operators. Arabic results are dominated
  by classified-ad listings from individual drivers.
- That means the gap is **informational depth attached to a commercial offer**:
  aggregators answer "how far is it" without being able to take the booking,
  and the classifieds take the booking without answering anything. Each route
  page here is built to do both, which is why the journey detail comes before
  the call to action.
- Published distance and duration figures **disagree with each other** across
  sources. Every figure on the site is therefore presented as approximate and
  given as a range, with the spread explained in a footnote.

## English mapping

| URL | Primary keyword | Secondary keywords | Intent |
| --- | --- | --- | --- |
| `/en/riyadh/` | riyadh private transfers | riyadh airport transfer, car with driver riyadh, riyadh intercity transfer | Navigational / category — "who can move me around Riyadh" |
| `/en/riyadh-to-jeddah/` | riyadh to jeddah private transfer | riyadh to jeddah by road, riyadh jeddah distance, riyadh to jeddah car | Commercial, with a strong informational tail ("how long is the drive") |
| `/en/riyadh-to-dammam/` | riyadh to dammam private transfer | riyadh to dammam by car, riyadh dammam distance, riyadh to dammam train or car | Commercial + comparison — the rail alternative is part of the query set |
| `/en/riyadh-to-al-khobar/` | riyadh to al khobar private transfer | riyadh to khobar car, riyadh khobar distance, riyadh to bahrain causeway transfer | Commercial, leisure-weighted, with an onward-travel tail |
| `/en/get-quote/` | — (noindex) | — | Conversion step, not a landing page |

## Arabic mapping

Arabic terms were chosen independently rather than translated from the English
column. The commercial verb differs: Arabic searchers use **توصيل** (delivery
/ a ride) and **مشوار** (a trip) far more than a literal rendering of
"transfer", while **نقل خاص** is the formal term a business would use.
Both registers appear in the copy.

| URL | Primary keyword | Secondary keywords | Notes |
| --- | --- | --- | --- |
| `/ar/riyadh/` | نقل خاص في الرياض | سيارة مع سائق الرياض، توصيل من مطار الرياض، مشاوير الرياض | "سيارة مع سائق" is the phrase people actually type |
| `/ar/riyadh-to-jeddah/` | نقل خاص من الرياض إلى جدة | توصيل من الرياض الى جدة، مشوار الرياض جدة، المسافة بين الرياض وجدة | The distance query is high-intent here too |
| `/ar/riyadh-to-dammam/` | نقل خاص من الرياض إلى الدمام | توصيل من الرياض للدمام، الرياض الدمام بالسيارة، قطار أو سيارة الرياض الدمام | Rail comparison matters in Arabic as well |
| `/ar/riyadh-to-al-khobar/` | نقل خاص من الرياض إلى الخبر | توصيل الرياض الخبر، مشوار الرياض الخبر، جسر الملك فهد نقل | Causeway term carries its own small intent |
| `/ar/get-quote/` | — (noindex) | — | Conversion step |

## Rules applied

- One primary per URL; no two pages target the same primary in either language.
- Arabic pages are not shortened versions of the English. Each carries the same
  section structure and comparable word count, written in Arabic rather than
  translated phrase by phrase.
- Titles follow *main keyword + CTA*, 50–60 characters, with the brand dropped
  whenever including it would exceed the limit — which, given the brand is
  30 characters, is on every cluster page. See
  [riyadh-seo-titles.md](./riyadh-seo-titles.md).
