# Jeddah hub — image sourcing requirements

**Research only.** No image has been added to the manifest and the pipeline
has not been run.

Images go through the committed pipeline,
[`scripts/sync-images.mjs`](../../../scripts/sync-images.mjs), reading
[`scripts/images.manifest.json`](../../../scripts/images.manifest.json). It
downloads the Commons original, crops with sharp's attention strategy,
encodes WebP, computes the blur placeholder, reads licence and author from the
MediaWiki `imageinfo` API, **refuses any file carrying usage restrictions**,
and writes the credit back into the manifest. Attribution is never hand-typed.

---

## 1. What the hub needs

| Slot | Subject | Priority |
| --- | --- | --- |
| **Hero** | A wide Jeddah view that reads as a horizon — the corniche, the waterfront or the skyline | **Required** |
| Arriving band | King Abdulaziz International Airport, interior or exterior | Recommended |
| Around-Jeddah band | Al-Balad, the historic district | Recommended |
| Destination cards | None. The cards carry figures and caveats, not photographs | Not needed |
| Social card | The hero serves it | — |

**Three images at most.** The design brief calls for a shorter page than the
Riyadh hub, and the destination cards are deliberately typographic.

---

## 2. What we already hold — one lucky asset

| Key | Subject | Licence | Jeddah use |
| --- | --- | --- | --- |
| `dest-jeddah` | Jeddah waterfront | CC BY-SA 4.0 | **Hero candidate.** Already used as the homepage destination card for Jeddah, so reusing it as the hub hero gives card-to-page continuity — the same pattern approved for `dest-taif` and `guide-alula` in Batch 2 |
| **`svc-airport`** | **Jeddah airport terminal** | CC BY 4.0 (Just MRT) | **Finally usable for its actual subject.** This image was repeatedly flagged as unusable for the *Riyadh* airport page because it is Jeddah's airport. On a Jeddah page it is simply correct |

`svc-airport` is worth calling out. It has been held since Batch 1, carried a
standing warning never to let it depict KKIA, and the Jeddah phase is the
first time it can be used honestly. No new sourcing is needed for the
arriving band.

---

## 3. Candidates found on Commons

Searched 6 November 2026. **Licences not yet verified** — the pipeline reads
them at add time, and nothing below should be treated as cleared until it has.

| Subject | Files found | Notes |
| --- | --- | --- |
| **Corniche / waterfront** | `Jeddah Corniche Photo.jpg`, `Jeddah Corniche 28.jpg`, `Jeddah Corniche (1).jpg`, `Jeddah Corniche.jpg`, `Jeddah Corniche at night.jpg`, `Jeddah Seafront.jpg` | Good supply. Avoid the two `Jeddah Corniche Circuit` files — those are the **motor-racing circuit**, a different subject |
| **Skyline** | `Jeddah skyline February 2020.jpg`, `Jeddah North Skyline.png`, `Lamar towers skyline.jpg` | Dated filenames are useful: a 2020 skyline is honest about its age |
| **Al-Balad / old city** | `Old Jeddah - 55362437075.jpg`, `Old Jeddah - 55362435190.jpg`, `Old Jeddah - 55362214124.jpg`, `Old Jeddah - 55362181118.jpg`, `Jeddah - 55362179623.jpg` | Good supply for the around-Jeddah band |
| **King Fahd Fountain** | `King Fahd's Fountain 2025.jpg`, `King Fahd Fountain.jpg`, and others | A strong, recognisable Jeddah landmark; a hero alternative |
| **KAIA** | `King Abdulaziz International Airport - North Terminal 1.jpg` … `- North Terminal 4.jpg` | Four files. **Note the filenames say "North Terminal"** — a terminal name whose current status is contested. See §5 |
| **Haramain station, Jeddah** | **None found** | A real gap. See §5 |

---

## 4. Alt text requirements

Every image needs **English and Arabic** alt text in the manifest, rendered
through `altText(photo, locale)`. Never `photo.alt` directly — brand rule 10.

Draft alt text, to be finalised against the chosen files:

| Slot | EN | AR |
| --- | --- | --- |
| Hero (waterfront) | "The Jeddah waterfront on the Red Sea coast" | «واجهة جدة البحرية على ساحل البحر الأحمر» |
| Airport | "A terminal at King Abdulaziz International Airport in Jeddah" | «إحدى صالات مطار الملك عبدالعزيز الدولي في جدة» |
| Al-Balad | "Coral-stone buildings with mashrabiya balconies in Al-Balad, historic Jeddah" | «مبانٍ من الحجر المنقبي بمشربيات في البلد، جدة التاريخية» |

Decorative images take `alt=""` with `aria-hidden` in both languages.

---

## 5. Two honesty constraints

### The airport photographs are titled "North Terminal"

All four KAIA candidates name a terminal whose current operating status is
contested — some sources list North, South and Hajj terminals, one says the
South terminal has closed with all flights at Terminal 1, and another calls
the Hajj facility "Terminal 4".

**Consequence:** an airport image must be captioned as *"a terminal at King
Abdulaziz International Airport"* and **never by terminal number or name**,
however the Commons file is titled. The page publishes no terminal chart; its
alt text must not smuggle one in through the back door.

This is the same discipline the Riyadh pages applied to road photography, and
it has bitten before — `svc-airport` was nearly used to depict the wrong
airport entirely.

### No photograph of the Haramain station in Jeddah exists

A Commons search returns nothing. If a Jeddah railway page is ever built, that
section will need either a commission or the tinted-block treatment the Riyadh
railway page used for Riyadh North.

Noted now because it is the **third** service page in a row to hit this: the
railway page has no Riyadh North photograph, the hotel page has no hotel
photograph, and a Jeddah rail page would have no station photograph.

---

## 6. The standing recommendation, now stronger

A small commissioned set would serve **four** pages at once:

| Shot | Serves |
| --- | --- |
| A hotel forecourt entrance | Riyadh hotels — currently zero images |
| Riyadh North station | Riyadh railway — currently a tinted block |
| A KKIA arrivals hall | Riyadh airport — currently a tinted arrivals panel |
| The Haramain station at Jeddah airport | A future Jeddah rail page |

Every one of these is a **service** subject rather than a destination, and
open-licensed service photography of Saudi transport infrastructure is scarce
in a way destination photography is not. This is the most useful photography
spend outstanding and it is now blocking visual quality on three published
pages, not one.

---

## 7. Rules that apply without exception

- **Only openly licensed photography**, through the committed pipeline. No
  hand-typed attribution.
- **No AI-generated image** presented as a real vehicle, place or person.
- **No destination photograph captioned as a road photograph**, and no road
  photograph captioned as a specific road unless it is that road.
- **No hotel-branded photography**, and no named hotel in any caption.
- **No image of a terminal captioned by number or name.**
- **No photograph of identifiable private individuals.**
- Every image through `next/image` with explicit dimensions, a `sizes`
  attribute and the generated `blurDataURL`, so nothing shifts on load.
- Credits land in [`docs/image-credits.md`](../../image-credits.md)
  automatically; the table there is generated, not written.
