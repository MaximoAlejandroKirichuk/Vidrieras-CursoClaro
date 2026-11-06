---
name: CursoClaro Collection and Institute Demonstrations
description: A restrained collection frame connecting three distinct, fictional institute experiences.
colors:
  gallery-white: "#fff"
  gallery-navy: "#142542"
  gallery-muted: "#526079"
  gallery-cobalt: "#1c5bc4"
  gallery-cobalt-dark: "#123f8f"
  gallery-divider: "#d8e2f0"
  gallery-tint: "#f3f7fd"
  gallery-preview-alondra: "#dfeafb"
  gallery-preview-bisagra: "#f3e5cb"
  gallery-preview-sauce: "#efe4d5"
  gallery-bisagra-accent: "#a63b04"
  gallery-sauce-accent: "#854029"
  alondra-paper: "#fff"
  alondra-ink: "#142542"
  alondra-muted: "#4b5f7b"
  alondra-cobalt: "#1854bd"
  alondra-cobalt-strong: "#103e90"
  alondra-line: "#bfcee4"
  alondra-soft: "#edf3fc"
  alondra-opening-blue: "#1854bd"
  alondra-level-yellow: "#ffdf72"
  alondra-focus-yellow: "#ffdf72"
  bisagra-paper: "#fff"
  bisagra-ink: "#241f1b"
  bisagra-muted: "#62584f"
  bisagra-orange: "#f47a36"
  bisagra-accent: "#a93908"
  bisagra-accent-strong: "#802a05"
  bisagra-yellow: "#f8d65a"
  bisagra-line: "#c8bfb6"
  bisagra-soft: "#f2eee8"
  sauce-paper: "#faf9f6"
  sauce-ink: "#302b30"
  sauce-muted: "#625c62"
  sauce-olive: "#414a30"
  sauce-olive-strong: "#303923"
  sauce-plum: "#50364b"
  sauce-line: "#d5d2cb"
  sauce-soft: "#e6e9d9"
  sauce-focus-plum: "#78536d"
typography:
  gallery-display:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.3vw, 3.6rem)"
    fontWeight: 680
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  gallery-body:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  alondra-display:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "clamp(1.8rem, 3.3vw, 2.7rem)"
    fontWeight: 650
    lineHeight: 1.12
  alondra-body:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  bisagra-display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.04
  bisagra-body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  sauce-display:
    fontFamily: "Lora Variable, serif"
    fontSize: "clamp(2.4rem, 5.3vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-0.04em"
  sauce-body:
    fontFamily: "Karla Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  demo-session-heading:
    fontFamily: "var(--demo-display)"
    fontSize: "clamp(1.6rem, 3vw, 2.3rem)"
    fontWeight: 650
    lineHeight: 1.15
  demo-note:
    fontFamily: "var(--demo-body)"
    fontSize: "0.9rem"
    lineHeight: 1.55
  demo-caption:
    fontFamily: "var(--demo-body)"
    fontSize: "0.85rem"
    lineHeight: 1.55
  demo-session-meta:
    fontFamily: "var(--demo-body)"
    fontSize: "0.88rem"
    lineHeight: 1.55
  demo-small:
    fontFamily: "var(--demo-body)"
    fontSize: "0.8rem"
    lineHeight: 1.55
rounded:
  gallery-action: "5px"
  gallery-preview: "8px"
  demo-control: "4px"
  demo-card: "6px"
  checkout-dialog: "12px"
spacing:
  demo-wrap-desktop: "40px"
  demo-wrap-mobile: "24px"
  action-min-height: "48px"
components:
  project-action:
    backgroundColor: "{colors.gallery-navy}"
    textColor: "{colors.gallery-white}"
    rounded: "{rounded.gallery-action}"
    height: "48px"
    padding: "11px 18px"
  alondra-primary-action:
    backgroundColor: "{colors.alondra-cobalt}"
    textColor: "#fff"
    rounded: "{rounded.demo-control}"
    height: "48px"
    padding: "12px 20px"
  bisagra-primary-action:
    backgroundColor: "{colors.bisagra-accent}"
    textColor: "{colors.bisagra-paper}"
    rounded: "{rounded.demo-control}"
    height: "48px"
    padding: "12px 20px"
  sauce-primary-action:
    backgroundColor: "{colors.sauce-olive}"
    textColor: "#fff"
    rounded: "{rounded.demo-control}"
    height: "48px"
    padding: "12px 20px"
---

# Design System: CursoClaro Collection and Institute Demonstrations

## Overview

**Creative North Star: "Three Institute Worlds, One Honest Frame"**

CursoClaro is a work-first collection, not one universal storefront theme. Its homepage uses a restrained white, navy, cobalt, and Figtree gallery frame to introduce three fictional demonstrations. Each route then owns its own typography, palette, and composition: Alondra Idiomas is a cobalt timetable-first language school; Bisagra is an orange-and-yellow practical-trades course sheet; Casa Sauce is a plum-and-olive principal training edition. Do not flatten these identities into a shared marketing-page template.

The routes share useful behavior and infrastructure: the demo shell, accessible baseline, action primitives, native disclosures and controls, session filtering, and simulated checkout. Those shared mechanics take each route's scoped variables; they do not dictate common section order or visual composition. The examples and payment journey are explicitly demonstrations, not real institutes, integrations, proof, or administration tools.

**Key Characteristics:**
- The homepage is a quiet collection frame; demo routes have independent visual worlds.
- Alondra leads with a preselected A1 timetable and scannable session rows.
- Bisagra reads as a practical course sheet, reservation strip, and open course rows.
- Casa Sauce reads as a principal training edition with editorial serif display and olive course surfaces.
- Shared behavior is functional infrastructure, not a common marketing composition.

## Colors

The homepage uses a cool gallery palette; each demo has its own scoped accents and surfaces, defined by its route stylesheet rather than a shared global color identity.

The homepage preview frames retain their original pale blue and sand grounds. They are collection-context tokens, not the new institute palettes; the actual screenshot inside each frame carries the current demo's colors.

### Primary
- **Gallery Cobalt** and **Deep Cobalt**: homepage links, focus, and project actions.
- **Alondra Cobalt**: language-school masthead/opening, links, selection, and actions; yellow marks the level disclosure and header focus.
- **Bisagra Burnt Orange**: actions and practical course details; **Workshop Orange** and **Tool Yellow** distinguish the intensive and reservation strip.
- **Sauce Olive**: course/action accent; **Training Plum** anchors the invitation panel, with plum also used for focus.

### Neutral
- **Gallery White**, **Gallery Navy**, **Muted Slate**, **Pale Divider**, and **Pale Blue Tint** belong to the homepage frame.
- **Alondra Paper**, ink, muted blue-grey, pale blue lines, and soft blue surfaces support its timetable and catalog.
- **Bisagra Paper**, near-black brown ink, warm muted text, warm rules, and stone surfaces support the course-sheet reading rhythm.
- **Sauce Paper**, charcoal-plum ink, muted text, warm rules, and soft olive surfaces support the training edition.

### Named Rules
**The Scoped-World Rule.** A route's palette applies only within that institute context. Shared components consume the active demo variables; never translate three accents into a single global palette.

## Typography

**Display Font:** Figtree Variable on the homepage and Alondra; Barlow Condensed on Bisagra; Lora Variable on Casa Sauce.
**Body Font:** Figtree Variable on the homepage and Alondra; Barlow on Bisagra; Karla Variable on Casa Sauce.

**Character:** The gallery and Alondra use a clear contemporary sans-serif voice. Bisagra's condensed display face gives its practical course sheet a direct, workshop-like hierarchy. Casa Sauce pairs an expressive serif with a readable sans-serif for an editorial training-edition character.

### Hierarchy
- **Display (homepage):** weight 680, responsive 2.25–3.6rem, line-height 1.04; collection introduction.
- **Alondra headline:** weight 650, responsive 1.8–2.7rem, line-height 1.12; language-group invitation.
- **Bisagra headline:** Barlow Condensed, weight 700, responsive 2.25–3.6rem, line-height 1.04; intensive course sheet.
- **Sauce headline:** Lora Variable, weight 400, responsive 2.4–4.6rem, line-height 1.13; training invitation.
- **Body:** route-specific family at 1rem/1.55 baseline; sizes and weights step up for pricing, schedule, and navigation labels as implemented.
- **Shared session heading:** 1.6–2.3rem at weight 650; Alondra intentionally overrides its instance to 1.45rem. Shared notes, captions, schedule metadata, and small price suffixes use 0.9rem, 0.85rem, 0.88rem, and 0.8rem respectively, inheriting the active institute's body family.

### Named Rules
**The Three-Family Rule.** Keep Figtree, Barlow/Barlow Condensed, and Lora/Karla assigned to their actual collection, Alondra, Bisagra, and Sauce contexts respectively.

## Layout

The homepage is a centered 1328px-capped collection frame with its own 1000px and 799px responsive changes. Demo routes share a 1280px-capped `.demo-wrap`, 40px desktop gutters and 24px at 760px and below; this shared foundation does not prescribe page composition. Alondra shifts its timetable rows at 1080px, moves to a one-column reading layout by 760px, and simplifies rows further at 480px. Bisagra adapts its sheet/reservation strip at 1000px, stacks its sheet and catalog at 760px, and compacts specifications below 440px. Casa Sauce shifts its header and multi-column reading sections at 760px and stacks training facts below 430px. Preserve the distinct route-specific responsive behavior rather than imposing one breakpoint model.

Alondra's primary information architecture is a schedule with course/group filters and session rows, followed by level guidance, expandable course details, and FAQs. The initial group filter is A1. Bisagra uses a featured intensive sheet with adjacent specifications, a distinct reservation strip, open course details with booking information, and reservation/FAQ sections. Casa Sauce centers on the next training edition, followed by program information, related courses, and questions. These different compositions are intentional product expressions, not reusable page templates.

## Elevation & Depth

The systems are mostly flat and use tonal blocks, rules, and spacing to establish hierarchy. The homepage alone gives captured previews a subtle shadow (`0 6px 20px rgb(20 37 66 / 9%)`); the shared demo baseline uses a restrained toast shadow (`0 8px 30px rgb(0 0 0 / 12%)`). The checkout is a native modal dialog with a dark backdrop, not a sticky sales overlay. No shared elevation scale is established.

## Shapes

The gallery uses 5px actions and 8px preview frames. Demo controls and buttons use modest 4px corners; course qualification and checkout selections use 6px; the checkout dialog uses 12px. Rule lines, open disclosures, and native form controls preserve a utilitarian/editorial rhythm. These values describe reusable controls, not a demand to box every section.

## Components

### Navigation
Each route retains its own wordmark, spacing, and responsive navigation treatment. The shared shell adds a demo notice, skip link, and footer; it does not replace institute navigation with one branded component.

### Buttons
Shared demo buttons are 48px minimum-height, 4px radius, and use the active route's accent and strong accent on hover. Alondra's yellow level disclosure is a route-specific signature; Bisagra's reservation action sits in the yellow strip; Sauce's actions sit within the olive/plum editorial palette. Focus treatment is scoped by each demo.

### Inputs / Fields
The SessionPicker uses native labelled selects, native session rows, an announced result count, and an explicit empty state with a reset action. Filtering is scoped per picker. Selecting a level/course elsewhere updates the corresponding native filter and returns focus to it. Keep functional controls native and avoid replacing them with decorative mock controls.

Its script is intentionally plain JavaScript in an Astro `is:inline` block. This preserves filtering when the built demo is opened directly through `file://`, where a separately loaded module may be blocked. There is one picker per route, so no script deduplication is needed.

### Cards / Containers
Do not introduce a generic card system. Alondra's schedule is a list of ruled rows and its courses are native open disclosures. Bisagra's featured course sheet and reservation strip are broad color fields with open catalog rows. Casa Sauce's training sections use editorial blocks and native course/FAQ disclosures.

### Signature Component: Simulated Checkout
The shared checkout uses a native dialog and a route-themed three-step plan, details, and simulated payment flow. The scrolling content is `#cc-cuerpo`; its separate toolbar keeps the close button available while the body scrolls. The finished confirmation reports only what the demo did; do not invent onward actions, real reservations, messages, or payment effects. Checkout interactions remain explicitly simulated.

## Do's and Don'ts

### Do:
- **Do** keep gallery tokens and composition scoped to the homepage and each demo's tokens scoped to its route.
- **Do** preserve Alondra's A1-initial timetable and the session picker's native filtering, count, empty state, reset, and focus behavior.
- **Do** preserve Bisagra's course-sheet/reservation-strip composition and Casa Sauce's training-edition composition.
- **Do** reuse shared shell, accessible controls, session filtering, and simulated checkout as behavior without forcing common marketing sections.
- **Do** describe fictional institutes and simulated payment honestly; use only verified content and implemented behavior.

### Don't:
- **Don't** apply homepage typography or color tokens to all three demos, or consolidate their distinct visual worlds.
- **Don't** treat legacy styles or unused generic marketing components/data as active design authority for these routes.
- **Don't** claim real customers, testimonials, outcomes, payments, reservations, confirmation actions, or an administrative panel.
- **Don't** replace native selects, disclosures, or dialog behavior with nonfunctional visual stand-ins.
