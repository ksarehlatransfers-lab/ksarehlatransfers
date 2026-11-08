# CLAUDE IMPLEMENTATION PROMPT
## Build the Complete Riyadh Private Transfers Cluster in English and Arabic

You are working on our nationwide Saudi Arabia Private Transfers website.

Your current assignment is to develop the complete Riyadh destination cluster.

You must act as:
- Senior Next.js developer
- Technical SEO specialist
- Arabic and English website architect
- Professional UI/UX designer
- Content strategist
- Internal linking specialist

Read and follow the Riyadh Destination Cluster Master Specification provided separately.

That specification is mandatory.

# 1. PROJECT CONTEXT

Technology:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui

The homepage and global brand system have already been established or are being developed.

Before making changes:
1. Inspect the existing project.
2. Understand its current folder structure.
3. Identify the global typography.
4. Identify the global color tokens.
5. Identify the existing navigation.
6. Identify the existing footer.
7. Identify the existing language-routing system.
8. Identify reusable components.
9. Inspect the current metadata and SEO implementation.

Do not replace or redesign the established brand identity.

# 2. CURRENT SCOPE

Build only the following categories:

A. Riyadh airport transfers
B. Riyadh railway station transfers
C. Riyadh hotel transfers
D. Riyadh intercity transfers

Do NOT build:
- Hajj pages
- Umrah pages
- Ziyarat pages
- Pilgrimage pages
- Other unrelated service clusters

Makkah and Madinah are ordinary intercity destinations in this phase.

# 3. REQUIRED PAGES

Build the approved pages from the master specification.

Airport:
- Riyadh Airport Transfers
- Riyadh Airport to Hotel Transfers
- Riyadh Hotel to Airport Transfers

Railway:
- Riyadh Railway Station Transfers
- Riyadh North Station Transfers
- Riyadh East Station Transfers

Hotels:
- Riyadh Hotel Transfers

Intercity:
- Riyadh to Jeddah
- Riyadh to Dammam
- Riyadh to Al Khobar
- Riyadh to Makkah
- Riyadh to Madinah
- Riyadh to Taif
- Riyadh to AlUla
- Riyadh to Buraydah
- Riyadh to Hail

First perform keyword research and identify overlapping search intent.

If two proposed pages target essentially the same intent, recommend combining them rather than publishing competing thin pages. Document the decision.

Every approved page must have both English and Arabic versions.

# 4. ENGLISH AND ARABIC

Use:
- /en/ for English
- /ar/ for Arabic

The language switcher must take visitors to the equivalent page in the other language.

For example:

/en/riyadh-to-jeddah/
/ar/riyadh-to-jeddah/

Implement:
- English metadata
- Arabic metadata
- Correct language attributes
- RTL Arabic layout
- Correct Arabic typography
- Proper hreflang
- Self-referencing canonicals
- Arabic navigation labels
- Arabic CTA wording
- Arabic FAQ content

Arabic content must be naturally written, not mechanically translated.

Do not make the Arabic version a shortened or incomplete copy.

# 5. BRAND CONSISTENCY

The existing brand identity is locked.

Never change:
- Approved typography
- Approved fonts
- Primary color
- Secondary color
- Accent color
- Global button styles
- Global navigation
- Global footer
- Core design tokens

You can introduce new layouts, section compositions and visual treatments.

You cannot introduce a different brand identity for each city page.

# 6. UNIQUE PAGE DESIGNS

This requirement is extremely important.

Do not create a single reusable landing-page template and replace its text.

Each page must have a distinct design concept.

For example:

Airport page:
- Large airport photography
- Airport-focused hero
- Pickup and arrival information
- Booking form

Railway page:
- Station-focused visual design
- North/East comparison
- Train arrival transportation details

Hotel page:
- Hospitality-focused design
- Hotel pickup and drop-off presentation
- Airport and station connections

Riyadh to Jeddah:
- Long-distance journey presentation
- Route visualization
- Road journey information
- Destination-focused imagery

Riyadh to Dammam:
- Different hero composition
- Eastern Province journey context
- Different section layouts

Riyadh to Makkah:
- Route-focused visual design
- Private intercity journey information
- Practical travel guidance

Apply the same level of design differentiation to all remaining routes.

Before coding each page, write down its design concept and intended visual composition.

# 7. KEYWORD RESEARCH

Before developing each page:

1. Identify the primary keyword.
2. Identify secondary keywords.
3. Research Arabic search terms independently.
4. Understand the search intent.
5. Review relevant competing pages.
6. Identify missing information.
7. Develop a unique content outline.

Create a keyword-to-URL mapping document.

Do not optimize multiple pages for the same primary intent.

Do not invent search volume or keyword difficulty.

If a research tool is unavailable, clearly identify which information still needs validation.

# 8. SEO TITLES

Follow the master title structure:

Main Keyword + Brand/Domain + CTA

Target 50–60 characters where natural.

If the title becomes too long, omit the brand/domain.

Use natural Arabic SEO titles for Arabic pages.

Every page must have:
- Unique title
- Unique description
- Correct canonical
- Correct hreflang
- Correct H1
- Appropriate structured data

Do not use the same metadata across multiple pages.

# 9. CONTENT REQUIREMENTS

Write complete, original and useful content.

Do not write generic SEO paragraphs.

Each page must answer real customer questions.

For intercity routes, include:
- Origin
- Destination
- Journey overview
- Estimated distance
- Estimated travel duration
- Pickup arrangements
- Drop-off arrangements
- Passenger information
- Luggage considerations
- Vehicle options, if verified
- Stops and breaks
- Return journey options
- Booking process
- Relevant FAQs

For airport pages:
- King Khalid International Airport
- Airport arrival information
- Pickup arrangements
- Terminal information
- Flight details
- Hotel connections
- Intercity connections

For railway pages:
- Riyadh North
- Riyadh East
- Station distinctions
- Train arrival pickup
- Station-to-hotel transportation
- Station-to-airport transportation

For hotel pages:
- Hotel pickups
- Hotel drop-offs
- Airport connections
- Railway connections
- Intercity transportation

Never invent operational details, prices, reviews, business registrations, fleet ownership or service guarantees.

# 10. INTERNAL LINKING

Implement the linking architecture in the master document.

Every page must have contextual internal links.

Mandatory linking rules:

- Every route page links to the Riyadh hub.
- Every route page links to its destination city hub when available.
- Airport pages link to relevant hotel and railway pages.
- Railway pages link to the relevant individual station pages.
- Hotel pages link to airport and railway pages.
- Riyadh East Station links to Dammam and Al Khobar route pages.
- Intercity pages link to related routes where genuinely useful.
- All pages link to the appropriate quote or inquiry page.

Do not create orphan pages.

Do not use excessive exact-match anchor text.

Maintain separate English and Arabic internal links.

# 11. UNIQUE CTA SECTIONS

Every page needs its own CTA wording and visual section.

Examples:
- Arrange Your Riyadh Airport Pickup
- Book Your Railway Station Transfer
- Plan Your Private Journey to Jeddah
- Get Your Dammam Transfer Quote
- Reserve Your Private Ride to Al Khobar

Arabic CTAs must sound natural.

Every CTA must have a working destination.

Do not leave non-functional buttons.

# 12. FAQ ACCORDIONS

Every relevant page needs unique questions and answers.

Requirements:
- Expandable and collapsible
- Accessible
- Keyboard-friendly
- Appropriate ARIA attributes
- Mobile-friendly
- English and Arabic versions

Do not reuse the same FAQ list everywhere.

Do not add unsupported claims to FAQ answers.

# 13. IMAGES

Use real, relevant, licensed images.

Examples:
- King Khalid Airport
- Riyadh North railway station
- Riyadh East railway station
- Riyadh hotels
- Riyadh–Jeddah road
- Riyadh–Dammam road
- Riyadh–Al Khobar journey
- Saudi highway landscapes
- Relevant destination photography

Do not use the same hero image on every page.

Optimize every image.

Use meaningful English and Arabic alt text.

# 14. TECHNICAL REQUIREMENTS

Implement:
- Server Components by default
- Reusable components
- Centralized metadata
- Correct canonical URLs
- Hreflang
- Sitemap
- Robots
- Breadcrumbs
- Semantic HTML
- Correct heading hierarchy
- Optimized images
- Responsive layouts
- Accessible interactions

Exactly one H1 per page.

Use H2 and H3 in logical order.

Do not unnecessarily introduce client-side JavaScript.

# 15. IMPLEMENTATION ORDER

Develop in manageable batches.

Batch 1:
- Riyadh to Jeddah
- Riyadh to Dammam
- Riyadh to Al Khobar

Batch 2:
- Riyadh to Makkah
- Riyadh to Madinah
- Riyadh to Taif
- Riyadh to AlUla
- Riyadh to Buraydah
- Riyadh to Hail

Batch 3:
- Riyadh Airport Transfers
- Airport to Hotel Transfers
- Hotel to Airport Transfers

Batch 4:
- Riyadh Railway Station Transfers
- Riyadh North Station Transfers
- Riyadh East Station Transfers

Batch 5:
- Riyadh Hotel Transfers

Within each batch, build English and Arabic together, not as an afterthought.

Do not publish incomplete pages.

# 16. DOCUMENTATION

Maintain the following project documents:

1. Riyadh URL inventory
2. English keyword mapping
3. Arabic keyword mapping
4. SEO title inventory
5. Internal linking matrix
6. Page design concepts
7. Image inventory and sources
8. Content research references
9. QA report

Update these documents as pages are implemented.

# 17. QUALITY ASSURANCE

After development:

- Run the production build.
- Run TypeScript checks.
- Run lint.
- Crawl all Riyadh URLs.
- Verify internal links.
- Verify canonical URLs.
- Verify hreflang.
- Verify exactly one H1 per page.
- Verify unique metadata.
- Check Arabic RTL.
- Test language switching.
- Test FAQ interactions.
- Test inquiry forms.
- Test mobile layouts.
- Check image optimization.
- Check for duplicate content.
- Check for orphan pages.

Resolve all issues before declaring the cluster complete.

# FINAL EXPECTATION

Deliver a fully connected, bilingual Riyadh private-transfer cluster.

The main commercial focus is intercity and city-to-city transfers.

Airport, railway and hotel pages should support the wider transportation architecture.

All pages must preserve the approved brand identity while having their own distinctive layouts.

Do not build Hajj or Umrah pages in this phase.

Do not move to another city until the Riyadh cluster is properly implemented, documented and tested.


3. Recommended internal linking structure
Here is the linking logic I want your agent to implement. This is more important than simply placing a list of related links at the bottom of every page.
RIYADH DESTINATION HUB

Main city landing page

Airport

RUH transfers

Airport to hotel

Hotel to airport


Railway

SAR stations

Riyadh North

Riyadh East


Hotels

Hotel transportation


Intercity

Main commercial cluster



Intercity route pages
Jeddah


Dammam


Al Khobar


Makkah


Madinah


Taif


AlUla


Buraydah


Hail




All branches should link contextually to relevant supporting pages, while route pages connect to their destination city hubs as those are developed.