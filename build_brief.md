# Velour Med Spa -- Build Brief
## Proof Proxy Landing Page for AutonomIQ
### Created: 6 April 2026

---

## What This File Is

The single source of truth for building the Velour Med Spa landing page. Read this file completely before writing any code. Every design decision, copy direction, and technical requirement is documented here. Do not deviate from this brief without explicit approval.

---

## Project Context

Velour Med Spa is a fictional med spa created as a proof proxy for AutonomIQ, an AI agency. This site will be shown to real med spa owners during sales demos to demonstrate build quality. It must look and feel like a real business commissioned it. No placeholder text, no template energy, no shortcuts.

The landing page is part of a complete website (nav links suggest other pages exist) but only this page needs to be built. The page carries the full weight of the demo.

**Location:** Beverly Hills, California, USA (fictional address)
**Business type:** Medical aesthetics practice
**Services:** Botox, dermal fillers, chemical peels, laser treatments, facials

---

## Design System

### Theme
Dark luxury. Deep blacks with purple accents. Think high-end clinical meets fashion editorial.

### Colour Palette

| Role | Hex | Usage |
|------|-----|-------|
| Primary background | #0F0F0F | Deep black. Page base. |
| Section alt bg | #1A1A1E | Subtle alternating sections. |
| Brand accent (dark purple) | #7B5EA7 | Logo, heading accents, card borders, section dividers, icon tints. Structural elements. |
| CTA accent (bright purple) | #9B7EC8 | Buttons, links, hover states, "learn more" text, chat widget accent. Clickable elements. |
| CTA hover | #7E5FAF | Hover/pressed state on CTA buttons. |
| Primary text | #F5F0EB | Warm cream. All headings and primary copy. |
| Secondary text | #A39E98 | Body copy, descriptions, supporting text. |
| Card/surface bg | #1E1E22 | Elevated card surfaces. |
| Border/divider | #2A2A2E | Section separators, card borders. |

**Accent split rule:** Dark purple (#7B5EA7) for branding and structure. Bright purple (#9B7EC8) for anything interactive or clickable. Same family, two jobs.

**No other colours.** No gradients on backgrounds. No additional accent colours.

### Typography

| Role | Font | Weight | Size Range |
|------|------|--------|------------|
| Display / Hero H1 | Cormorant Garamond | 500 | 56-64px |
| Section heading H2 | Cormorant Garamond | 500 | 40-48px |
| Card heading H3 | Cormorant Garamond | 600 | 24-28px |
| Body | Inter | 400 | 16-18px |
| Labels / Tags | Inter | 500 | 12-14px, uppercase, letter-spacing: 2px |

Load via Google Fonts. Max content width: 1280px. Hero text max width: ~640px.

### Corners and Shapes
- Cards: border-radius 12-16px
- CTA buttons: pill shape (border-radius 9999px)
- Service cards: subtle left border accent using dark purple

### Animations
1. **Scroll reveal** -- sections fade + slide up on viewport entry. Framer Motion or Intersection Observer.
2. **Hero image** -- subtle slow zoom (Ken Burns effect), 20s cycle, very gentle.
3. **Hover states** -- scale + shadow lift on cards, colour shift on buttons, underline slide on nav links.
4. **Counter animation** -- any statistics tick up on scroll into view.

No parallax. No heavy animation libraries.

---

## Page Structure (Build in This Order)

### 1. Navigation
- Transparent over hero image, becomes solid (#0F0F0F) on scroll
- Logo left: "VELOUR" in uppercase, letter-spaced, dark purple (#7B5EA7)
- Links: Services, About, Results, Contact (these don't need to go anywhere, use #anchors to sections)
- Right: "Book Consultation" pill CTA in bright purple (#9B7EC8)
- Sticky on scroll
- Mobile: hamburger menu

### 2. Hero Section
- **Full-bleed stock image** of a luxury treatment room or elegant spa interior (Unsplash/Pexels, NOT AI-generated)
- Dark gradient overlay: left side darker (for text), right side lighter (image visible)
- Gradient: `linear-gradient(to right, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.6) 50%, rgba(15,15,15,0.3) 100%)`
- Subtle Ken Burns zoom on the image (very slow, 20s)
- **Headline:** "Where science meets refinement" (Cormorant Garamond, 56-64px, #F5F0EB)
- **Subheadline:** "Board-certified aesthetics in Beverly Hills. Personalised treatments. Natural results." (#A39E98, Inter, 18px)
- **Dual CTAs:**
  - Primary: "Book Your Consultation" (bright purple pill)
  - Secondary: "View Treatments" (outline, bright purple border)
- Min height: 100vh on desktop, 80vh on mobile
- Text aligned left, vertically centred

### 3. Trust Strip
- Horizontal row of 4 trust signals
- Dark card background (#1E1E22), subtle border
- Items: "Board Certified" | "10,000+ Treatments" | "5-Star Rated" | "Complimentary Consultations"
- Each with a simple icon (Lucide React) and text
- Centred, contained width
- Subtle top border in dark purple

### 4. Services Section
- Section heading: "Our treatments" with "treatments" in dark purple
- Subheading: one line of supporting copy in #A39E98
- **5 service cards** in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Each card:
  - Card bg: #1E1E22
  - Left border: 2px solid #7B5EA7
  - Service name (Cormorant Garamond, 24px, #F5F0EB)
  - 2-line description (#A39E98, Inter)
  - "Learn more" link in bright purple (#9B7EC8)
  - Hover: subtle scale + shadow lift
- Services:
  1. **Botox & Dysport** -- "Smooth fine lines and prevent new ones. Precise placement for natural expression."
  2. **Dermal Fillers** -- "Restore volume and contour with precision-placed hyaluronic acid. Subtle, natural results."
  3. **Chemical Peels** -- "Reveal brighter, smoother skin. Medical-grade peels customised to your skin type."
  4. **Laser Treatments** -- "Advanced laser technology for skin resurfacing, pigmentation, and rejuvenation."
  5. **Signature Facials** -- "Clinical-grade facials combining advanced serums, LED therapy, and expert technique."

### 5. Why Velour (Differentiators)
- Section heading: "Why patients choose Velour"
- 3 differentiator cards in a row (stack on mobile)
- Each card:
  - Icon (Lucide React, tinted dark purple)
  - Title (Cormorant Garamond, #F5F0EB)
  - 2-3 lines of copy (#A39E98)
- Differentiators:
  1. **Physician-led, always** -- "Every treatment plan is designed and supervised by our board-certified physician. No shortcuts, no handoffs."
  2. **Your results, not a template** -- "We don't do cookie-cutter. Every treatment is mapped to your anatomy, your goals, your comfort level."
  3. **Technology that delivers** -- "Medical-grade equipment, FDA-cleared treatments, and techniques refined over 10,000+ procedures."

### 6. Results / Social Proof
- Section heading: "What our patients say"
- 3 testimonial cards
- Each card:
  - Star rating (5 stars, bright purple)
  - Quote text (#F5F0EB, italic Cormorant Garamond)
  - Patient name and treatment type (#A39E98)
- **COMPLIANCE RULE:** No clinical outcomes, no before/after claims, no specific conditions mentioned. Experience and professionalism only.
- Testimonials:
  1. "The team made me feel completely at ease from the first consultation. The results exceeded my expectations." -- Sarah M., Facial Rejuvenation
  2. "I've been to several clinics in LA. Velour is the only one where I felt the doctor actually listened to what I wanted." -- Jessica R., Dermal Fillers
  3. "Professional, discreet, and genuinely caring. I wouldn't trust anyone else with my skin." -- Amanda K., Laser Treatment

### 7. Meet the Doctor
- Section alt bg (#1A1A1E)
- Two-column layout: image left (placeholder silhouette for now), content right
- Doctor name: "Dr. Elena Vasquez, MD" (fictional)
- Title: "Board-Certified Aesthetic Physician"
- 3-4 lines of bio copy
- Bio: "With over 15 years in aesthetic medicine and fellowship training in facial anatomy, Dr. Vasquez founded Velour to bring a physician-first approach to medical aesthetics. Every treatment plan begins with a thorough consultation because your results should be as individual as you are."
- Credentials listed below bio: "Harvard Medical School | UCLA Dermatology | ABMS Board Certified | 10,000+ procedures"
- Image placeholder: elegant silhouette or abstract shape on dark purple tinted background

### 8. FAQ Section (AEO-Optimised)
- Section heading: "Common questions"
- Accordion style (click to expand)
- 6 FAQs, written as natural patient questions:
  1. "How do I know which treatment is right for me?" -- "Every new patient starts with a complimentary consultation. Dr. Vasquez will assess your skin, discuss your goals, and recommend a personalised treatment plan. There is no pressure to book anything during your first visit."
  2. "Is Botox safe?" -- "Botox has been FDA-approved for cosmetic use since 2002 and has one of the longest safety records of any aesthetic treatment. At Velour, all injections are performed by our board-certified physician using precise, conservative techniques."
  3. "How long do filler results last?" -- "Most hyaluronic acid fillers last between 6 and 18 months depending on the treatment area and product used. Dr. Vasquez will discuss expected longevity during your consultation."
  4. "What is the downtime after a chemical peel?" -- "Downtime varies by peel depth. Light peels have little to no downtime. Medium-depth peels may involve 3 to 5 days of peeling and redness. We will advise you on aftercare and what to expect."
  5. "Do you offer payment plans?" -- "Yes. We partner with CareCredit and Cherry to offer flexible payment plans for qualifying patients. Our team can walk you through options during your visit."
  6. "What should I expect at my first visit?" -- "Your first visit begins with a private consultation with Dr. Vasquez. We will review your medical history, discuss your goals, and if appropriate, can perform same-day treatments. Most consultations take 30 to 45 minutes."
- **Schema markup:** FAQPage JSON-LD for all questions

### 9. Final CTA Section
- Full-width section, slightly elevated bg (#1A1A1E)
- Centred layout
- Heading: "Your transformation starts here" (Cormorant Garamond, dark purple accent on "transformation")
- Subheading: "Complimentary consultations available. No pressure, no obligation." (#A39E98)
- Single CTA: "Book Your Free Consultation" (bright purple pill, large)
- Below CTA: "Or call us at (310) 555-0172" in muted text

### 10. Footer
- Dark background (#0A0A0A)
- 4-column layout (stack on mobile):
  - **Column 1:** Velour logo + one-line tagline + social icons (Instagram, TikTok, Facebook)
  - **Column 2:** Quick links (Services, About, Results, FAQ, Contact)
  - **Column 3:** Contact info (address, phone, email, hours)
  - **Column 4:** "Book a Consultation" CTA button + "We're accepting new patients" text
- Bottom bar: "2026 Velour Med Spa. All rights reserved." | Privacy Policy | Terms of Service
- Privacy policy link can be a # for now

---

## Technical Requirements

### Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Google Fonts (Cormorant Garamond + Inter)

### Deployment
- Vercel
- GitHub repo: `med-spa-demo` (SubZero139)

### Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse SEO: 90+
- First Contentful Paint: under 1.5s
- Images: WebP format, lazy loaded below fold

### SEO (On-Page)
- Title tag: "Velour Med Spa | Board-Certified Aesthetics in Beverly Hills"
- Meta description: "Personalised Botox, fillers, peels, and laser treatments by a board-certified physician. Complimentary consultations available. Beverly Hills, CA."
- One H1 per page (the hero headline)
- H2 for section headings, H3 for card headings
- Canonical URL set
- OG image (create a simple branded card)
- JSON-LD: Organization + WebPage + FAQPage schemas
- sitemap.xml
- robots.txt

### Images
- Hero: real stock photo from Unsplash (luxury spa/treatment room aesthetic)
- All images: WebP, lazy loaded below fold, proper alt text
- **NO AI-generated photos of people**
- Doctor photo: use a tasteful placeholder (silhouette or abstract)

### Accessibility
- All images have alt text
- Colour contrast meets WCAG 2.1 AA
- Keyboard navigable
- Focus indicators visible
- ARIA labels on interactive elements

### Agent Embed Placeholders
- Bottom-right: placeholder div for chat widget (id="chat-widget-container")
- In hero or CTA section: placeholder for voice agent trigger button ("Speak to Our AI Concierge")
- These will be connected separately after the page is built

---

## Copy Rules (Non-Negotiable)

1. No tool names. Not Claude, not Voiceflow, not Retell, not any technology name.
2. No outcome guarantees. Never say "guaranteed results" or promise specific outcomes.
3. Testimonials reference experience and professionalism only. No clinical outcomes or specific conditions.
4. No AI-generated photos of people.
5. No lorem ipsum or placeholder text anywhere.
6. US English throughout (color, personalized, etc.).
7. "Results may vary" near any results/testimonials section.
8. Every CTA tells the visitor exactly what happens next.

---

## What "Done" Looks Like

The page loads. A med spa owner looks at it and thinks it is a real business. The design is unlike any med spa site they have seen before (dark purple, not the usual gold/rose). The copy sounds human. The page is fast, mobile-perfect, and the CTAs are visible above the fold on every device. There are placeholder hooks for voice and chat agents that will be connected in the next phase.
