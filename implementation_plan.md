# Velour Med Spa -- Implementation Plan
## Proof Proxy Landing Page
### Created: 6 April 2026

---

## How to Use This File

This is your persistent memory across Claude Code sessions. Feed this file to Claude Code at the start of every session. Update the checklists as phases complete. Commit to GitHub after every session.

**Rule: One phase per session. Do not skip ahead.**

---

## Pre-Build Setup

### Phase 0 -- Project Scaffolding
- [ ] Initialise Next.js 14 project with TypeScript and Tailwind CSS in `med-spa-demo` folder
- [ ] Install dependencies: framer-motion, lucide-react
- [ ] Configure Google Fonts: Cormorant Garamond + Inter via next/font
- [ ] Set up Tailwind config with custom colour palette (see build_brief.md)
- [ ] Create GitHub repo `med-spa-demo` under SubZero139
- [ ] Push initial commit to `main`
- [ ] Create `dev` branch, switch to it
- [ ] Add `github_issues_guide.md` to repo
- [ ] Commit build_brief.md and implementation_plan.md to repo
- [ ] Verify `npm run dev` runs without errors

**Acceptance: Empty Next.js project running on localhost with correct fonts loading and Tailwind configured with custom palette. Both docs committed. Working on dev branch.**

---

## Page Build (One Phase at a Time)

### Phase 1 -- Navigation + Hero
- [ ] Build sticky navbar: transparent on hero, solid on scroll (#0F0F0F with 80% opacity backdrop blur)
- [ ] Logo: "VELOUR" text, uppercase, letter-spaced, dark purple (#7B5EA7)
- [ ] Nav links: Services, About, Results, Contact (anchor links to page sections)
- [ ] CTA pill button: "Book Consultation" in bright purple (#9B7EC8)
- [ ] Mobile hamburger menu
- [ ] Hero section: full-bleed background image with dark gradient overlay
- [ ] Source hero image from Unsplash (search: "luxury spa interior" or "aesthetic treatment room")
- [ ] Download, convert to WebP, place in /public
- [ ] Ken Burns slow zoom animation on hero image (CSS or Framer Motion)
- [ ] Hero headline: "Where science meets refinement" (Cormorant Garamond, 56-64px)
- [ ] Hero subheadline: "Board-certified aesthetics in Beverly Hills..." (Inter, 18px, #A39E98)
- [ ] Dual CTAs: "Book Your Consultation" (filled) + "View Treatments" (outline)
- [ ] Hero min-height: 100vh desktop, 80vh mobile
- [ ] Voice agent placeholder button in hero: "Speak to Our AI Concierge" (styled but non-functional)
- [ ] Test at 375px, 768px, 1440px

**Acceptance: Hero looks stunning at all viewports. Nav transitions from transparent to solid on scroll. Image loads fast. CTAs visible above fold on mobile.**

### Phase 2 -- Trust Strip + Services
- [ ] Trust strip: 4 items in a row (stack 2x2 on mobile)
- [ ] Items: Board Certified, 10,000+ Treatments, 5-Star Rated, Complimentary Consultations
- [ ] Lucide React icons for each
- [ ] Card background #1E1E22, subtle top border in dark purple
- [ ] Services section heading: "Our treatments" with accent colour on "treatments"
- [ ] 5 service cards in responsive grid (3 col desktop, 2 tablet, 1 mobile)
- [ ] Card styling: #1E1E22 bg, 2px left border in dark purple, hover scale + shadow
- [ ] All 5 service descriptions from build brief (no placeholder text)
- [ ] "Learn more" links in bright purple on each card
- [ ] Scroll reveal animation on section entry (fade + slide up)
- [ ] Test at 375px, 768px, 1440px

**Acceptance: Trust strip and services section look polished. Cards have hover states. Grid reflows cleanly on all breakpoints.**

### Phase 3 -- Why Velour + Social Proof
- [ ] Why Velour section: 3 differentiator cards in a row (stack on mobile)
- [ ] Icons from Lucide React, tinted dark purple
- [ ] All 3 differentiator titles and copy from build brief
- [ ] Social proof section heading: "What our patients say"
- [ ] 3 testimonial cards with star ratings (bright purple stars)
- [ ] Quote text in italic Cormorant Garamond
- [ ] Patient name + treatment type in #A39E98
- [ ] "Results may vary" disclaimer text below testimonials (small, muted)
- [ ] Scroll reveal animations on both sections
- [ ] Test at 375px, 768px, 1440px

**Acceptance: Both sections read as premium. Testimonials feel real. Compliance disclaimer present.**

### Phase 4 -- Meet the Doctor + FAQ
- [ ] Doctor section on alt bg (#1A1A1E)
- [ ] Two-column: placeholder image left, content right (reverse stack on mobile)
- [ ] Doctor placeholder: elegant silhouette or abstract shape on dark purple tinted bg
- [ ] Name, title, bio copy, credentials from build brief
- [ ] FAQ section: accordion with 6 questions from build brief
- [ ] Accordion: click to expand/collapse, smooth animation
- [ ] Only one FAQ open at a time
- [ ] FAQPage JSON-LD schema markup in page head
- [ ] Scroll reveal on both sections
- [ ] Test at 375px, 768px, 1440px

**Acceptance: Doctor section looks intentional (not like a missing image). FAQ accordion works smoothly. Schema markup valid.**

### Phase 5 -- Final CTA + Footer
- [ ] Final CTA section on #1A1A1E
- [ ] Heading: "Your transformation starts here" with dark purple accent
- [ ] Subheading + single large CTA button
- [ ] Phone number below CTA in muted text
- [ ] Footer on #0A0A0A
- [ ] 4-column layout (stack on mobile)
- [ ] Logo + tagline + social icons (Instagram, TikTok, Facebook as Lucide icons)
- [ ] Quick links column
- [ ] Contact info column (fictional Beverly Hills address, phone, email, hours)
- [ ] CTA column with button + "accepting new patients" text
- [ ] Bottom bar: copyright + Privacy Policy + Terms links
- [ ] Chat widget placeholder div (id="chat-widget-container", bottom-right, non-functional)
- [ ] Test at 375px, 768px, 1440px

**Acceptance: Page is complete top to bottom. Footer is comprehensive. Chat placeholder positioned.**

---

## Polish and Optimisation

### Phase 6 -- SEO + Performance
- [ ] Title tag set: "Velour Med Spa | Board-Certified Aesthetics in Beverly Hills"
- [ ] Meta description set (under 155 chars)
- [ ] Canonical URL configured
- [ ] OG image created and referenced (simple branded card)
- [ ] Twitter card meta tags
- [ ] JSON-LD: Organization schema
- [ ] JSON-LD: WebPage schema
- [ ] JSON-LD: FAQPage schema (verify all 6 Q&As included)
- [ ] All images have descriptive alt text
- [ ] All images in WebP format
- [ ] Images below fold are lazy loaded
- [ ] sitemap.xml generated
- [ ] robots.txt configured (allow all, point to sitemap)
- [ ] Lighthouse audit: Performance 90+
- [ ] Lighthouse audit: Accessibility 90+
- [ ] Lighthouse audit: SEO 90+
- [ ] Fix any issues from Lighthouse audits

**Acceptance: All metadata in place. Schema markup validates. Lighthouse scores 90+ across all three categories.**

### Phase 7 -- Responsive QA + Final Review
- [ ] Full page test at 375px (iPhone SE)
- [ ] Full page test at 390px (iPhone 14)
- [ ] Full page test at 768px (iPad)
- [ ] Full page test at 1024px (iPad landscape)
- [ ] Full page test at 1440px (desktop)
- [ ] Full page test at 1920px (large desktop)
- [ ] CTA visible above fold on ALL viewports
- [ ] No horizontal scroll on any viewport
- [ ] All animations smooth (no jank)
- [ ] All hover states work
- [ ] FAQ accordion works correctly
- [ ] Nav hamburger menu works on mobile
- [ ] All anchor links scroll to correct sections
- [ ] No console errors
- [ ] No broken images
- [ ] No placeholder text remaining
- [ ] Copy review: does it sound human, not AI-generated?

**Acceptance: Page is pixel-perfect at every breakpoint. Zero console errors. Every interaction works.**

---

## Deployment

### Phase 8 -- Deploy to Vercel
- [ ] Merge `dev` branch to `main` via pull request
- [ ] Connect GitHub repo to Vercel
- [ ] Deploy from `main` branch
- [ ] Verify deployed site loads correctly
- [ ] Test deployed site at all viewports
- [ ] Verify meta tags render correctly (use meta tag checker)
- [ ] Verify OG image shows when sharing URL
- [ ] Share deployed URL for demo use

**Acceptance: Live on Vercel. Shareable URL works. Meta tags and OG image render on social sharing.**

---

## Post-Deploy (Separate Phase, Not Blocking)

### Phase 9 -- Agent Integration
- [ ] Embed chat widget into chat-widget-container div
- [ ] Configure voice agent trigger button
- [ ] Test both agents on deployed site
- [ ] Verify agents don't break page performance

**Acceptance: Voice and chat agents are live and functional on the deployed page.**

---

## Session Log

Track what was completed in each session.

| Date | Phase | What Was Done | Committed |
|------|-------|--------------|-----------|
| | | | |

---

## Notes

- Hero image: must be a REAL photo from Unsplash/Pexels. Search terms: "luxury spa interior", "modern treatment room", "aesthetic clinic interior". Avoid images with people's faces.
- Doctor photo: placeholder only. Will be replaced with real photo for actual client projects.
- Agent embeds (Phase 9) happen AFTER the page is deployed and working. Do not block deployment for agent integration.
- This is a proof proxy. Build quality matters more than speed. If something looks off, fix it before moving on.
