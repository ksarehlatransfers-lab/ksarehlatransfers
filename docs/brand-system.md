# Brand system

The typography and colour defined here are fixed. Every page added later —
city pages, service pages, guides — uses exactly these tokens. Page *layouts*
should differ; the brand should not.

Everything lives in [`app/globals.css`](../app/globals.css). Components read
tokens through Tailwind utilities and never hardcode a colour, a font family
or a type size.

## Typography

Two faces, loaded and self-hosted by `next/font` in
[`app/[locale]/layout.tsx`](../app/%5Blocale%5D/layout.tsx), so there is no request to Google at
runtime and no swap-in layout shift.

| Role | Face | Bound to | Used for |
| --- | --- | --- | --- |
| Display / headings | **Instrument Serif** 400 | `--font-heading` → `font-heading` | H1, H2, H3, card titles in the editorial sections, the wordmark |
| Body / UI | **Plus Jakarta Sans** 200–800 variable | `--font-sans` → `font-sans` | Everything else: body copy, labels, buttons, navigation, small print |

The serif carries the premium, travel-brand character; the sans does the work
at small sizes where a display serif gets hard to read. Card headings (`.text-h4`)
deliberately sit in the sans for that reason.

### Arabic

Neither Latin face has Arabic glyphs, so Arabic gets its own pair — chosen to
mirror the same *relationship*, not to introduce a second identity.

| Role | Face | Mirrors |
| --- | --- | --- |
| Display / headings | **Noto Kufi Arabic** variable | Instrument Serif |
| Body / UI | **IBM Plex Sans Arabic** 400–700 | Plus Jakarta Sans |

The swap happens once, in `globals.css`, by re-pointing the two role variables
under `html[lang="ar"]`. No component knows about locale: every `font-sans`
and `font-heading` utility already in the codebase resolves correctly in both
languages.

Arabic also relaxes three things the Latin scale sets, because Arabic
letterforms carry more vertical detail: `.text-display`, `.text-h2` and
`.text-h3` take a 1.35 line height and zero tracking, and `.text-eyebrow`
drops its uppercase transform and letter-spacing (Arabic has no case, and
tracked-out Arabic breaks the joins). A `.numeric` utility isolates Latin
digits inside RTL text so distances and times read left to right.

### Scale

Fluid sizes via `clamp()`, so there are no breakpoint jumps. Use the class,
not a raw `text-*` size.

| Class | Size range | Line height | Use |
| --- | --- | --- | --- |
| `.text-display` | 2.75 → 5.25 rem | 1.02 | The single H1 on a page |
| `.text-h2` | 2 → 3.25 rem | 1.08 | Section headings |
| `.text-h3` | 1.5 → 2.125 rem | 1.16 | Sub-headings, featured card titles |
| `.text-h4` | 1.0625 → 1.25 rem | 1.3 | Card and list headings (sans, 600) |
| `.text-lead` | 1.0625 → 1.3125 rem | 1.55 | Supporting line under a heading |
| `.text-body` | 1 rem | 1.68 | Body copy |
| `.text-small` | 0.875 rem | 1.6 | Secondary copy |
| `.text-eyebrow` | 0.75 rem | 1.2 | Uppercase label above a heading, 0.14em tracking |

## Colour

A desert-luxury palette: deep palm green for authority, warm sand for the
page, brass for accent, ink for text. It reads as premium and regionally
appropriate without resorting to a flat national-flag green.

| Token | Light value | Tailwind | Role |
| --- | --- | --- | --- |
| `--ink` | `#11211a` | `text-ink` / `bg-ink` | Headings, and the dark section background |
| `--palm` | `#154e37` | `bg-palm` / `text-palm` | Primary action, links, icon accents |
| `--palm-deep` | `#043725` | `bg-palm-deep` | Primary hover |
| `--palm-soft` | `#e2f3eb` | `bg-palm-soft` | Tinted icon tiles, success states |
| `--brass` | `#cb9c49` | `bg-brass` / `text-brass` | Accent CTA on dark, eyebrows on dark |
| `--brass-deep` | `#aa782f` | `bg-brass-deep` | Brass hover |
| `--sand` | `#f5f0e8` | `bg-sand` | Alternating section background |
| `--sand-deep` | `#eae3d6` | `bg-sand-deep` | Summary strip, subtle fills |
| `--background` | `#fcfbf7` | `bg-background` | Page background (warm, not pure white) |
| `--muted-foreground` | `#57655e` | `text-muted-foreground` | Body copy |
| `--border` | `#e2ded7` | `border-border` | Hairlines |

These also drive the shadcn semantic tokens (`--primary`, `--secondary`,
`--accent`, `--ring` and the rest), so any shadcn component dropped into the
project inherits the brand without extra styling. A dark palette is defined
under `.dark` for the same tokens.

### Contrast

Measured against WCAG 2.1 AA (4.5:1 for normal text):

| Pair | Ratio |
| --- | --- |
| Body text on page background | 5.92 |
| Body text on sand sections | 5.40 |
| Headings on page background | 16.14 |
| Palm links/eyebrows on background | 9.32 |
| White on palm buttons | 9.32 |
| Ink on brass buttons | 6.68 |
| Brass on ink backgrounds | 6.68 |

Translucent white text over dark photography is kept at `/55` or above, which
is where it clears 4.5:1 against `--ink`.

## Layout

| Class | Behaviour |
| --- | --- |
| `.site-container` | Max width 80rem, gutters 1rem → 1.5rem → 2.5rem |
| `.section-y` | Vertical rhythm, `clamp(3.5rem, 2rem + 6vw, 7rem)` |

Radii come off a single `--radius: 0.75rem`, scaled by the `--radius-*` theme
keys. Section backgrounds alternate `bg-background` and `bg-sand`, with
`bg-ink` reserved for the two moments that need weight: the pilgrimage section
and the closing CTA.

## Rules for future pages

1. One `<h1>` per page, then `.text-h2` for sections.
2. Use `SectionHeading` for the eyebrow/heading/lead block so rhythm stays
   consistent; vary what sits *under* it.
3. Alternate section backgrounds; do not put two `bg-sand` sections adjacent.
4. Never add a second navigation bar — `SiteHeader` and `SiteFooter` in
   `app/[locale]/layout.tsx` are global.
5. Images go through `next/image` with a `sizes` attribute, explicit
   dimensions and the generated `blurDataURL`, so nothing shifts on load.
6. Keep pages Server Components. The only client components anywhere are the
   booking form, the mobile menu, the desktop nav and the language switcher.
7. Use **logical** spacing and border utilities — `ps-*`, `me-*`, `border-s`,
   `text-start`, `start-0` — never `pl-*`, `mr-*`, `border-l`, `text-left`.
   Arabic mirrors the whole layout and physical properties do not follow.
   Directional icons take `rtl:-scale-x-100`.
8. Every page's metadata goes through `pageMetadata()` in `lib/seo.ts`, which
   supplies the canonical, the hreflang set and the Open Graph tags. Titles
   are written to 50–60 characters with the brand dropped where it does not
   fit, and are emitted as `absolute` so nothing re-appends it.
9. Register every new URL in `lib/i18n/routes.ts`. The sitemap, hreflang,
   breadcrumbs and internal links all read from it, so a page that is not
   registered is a page that cannot be linked or found.
10. Never read `photo.alt` directly. Alternative text goes through
    `altText(photo, locale)` in `lib/images.ts`, which picks `alt` or `altAr`
    from the generated manifest. A decorative image keeps `alt=""` with
    `aria-hidden` in both languages instead.
11. **Every URL carries a trailing slash** — `/en/riyadh/`, never
    `/en/riyadh`. Never hand-write a path: build it with `href()`, or
    `localePath()` where the slug is not a registered route, so the convention
    holds across canonicals, hreflang, the sitemap, navigation, breadcrumbs and
    structured data at once. Files with an extension and `.well-known/` paths
    are the only exceptions, and Next.js handles those. Enforced by
    `npm run qa`, which fails on a slashless internal link or a link that
    redirects.
