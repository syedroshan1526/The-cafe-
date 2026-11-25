# Website Implementation Plan: Artisanal Café Scroll Website

## 1. Executive Concept & Creative Vision

The website translates the sensory and visual journey of **`reference/cafe-reference.mp4`** into a world-class, scroll-driven web experience. Instead of a static brochure, visitors experience the café the way a patron does:
1. Stepping off the street through the glass doors.
2. Breathing in the aroma and warm interior ambiance.
3. Witnessing the rigorous craft of coffee creation (bean selection, grinding, leveling, tamping, 9-bar extraction, milk steaming, and latte art).
4. Savoring the finished cup and freshly baked pastry at a sun-drenched wooden table.

---

## 2. Information Architecture & Section Hierarchy

```
┌────────────────────────────────────────────────────────┐
│ 1. Navigation Bar (Fixed / Blur Glassmorphism)         │
├────────────────────────────────────────────────────────┤
│ 2. Hero Section: "The Glass Threshold" (Pinned Canvas) │
├────────────────────────────────────────────────────────┤
│ 3. Brand Story & Atmosphere: "The Warmth Inside"       │
├────────────────────────────────────────────────────────┤
│ 4. Direct-Trade Origin: "The Bean & The Roast"         │
├────────────────────────────────────────────────────────┤
│ 5. Artisanal Craft: "Dose, Level & Tamp" (Interactive) │
├────────────────────────────────────────────────────────┤
│ 6. The Golden Extraction: "9-Bar Espresso Science"     │
├────────────────────────────────────────────────────────┤
│ 7. The Chemistry of Steam: "Silky Microfoam"           │
├────────────────────────────────────────────────────────┤
│ 8. Interactive Latte Art Canvas: "The Rosetta Bloom"   │
├────────────────────────────────────────────────────────┤
│ 9. Curated Menu: Coffee, Pastries & Signature Drinks   │
├────────────────────────────────────────────────────────┤
│ 10. Visit & Community: Hours, Location & Reservation   │
├────────────────────────────────────────────────────────┤
│ 11. Footer: Socials, Newsletter & Sustainability       │
└────────────────────────────────────────────────────────┘
```

---

## 3. Component Architecture

### `Navbar.jsx` / `Navigation`
- **Behavior**: Starts transparent over the hero; transforms into a compact frosted glass bar (`backdrop-blur-md bg-stone-900/80`) on scroll.
- **Items**: Logo mark, Story, The Craft, Menu, Location, "Reserve Table" CTA.

### `HeroThreshold.jsx` (Hero Section)
- **Role**: Pinned viewport sequence (0% to 15% scroll).
- **Assets**: `01-exterior-glass-facade.jpg` and `02-entrance-door-opening.jpg`.
- **Mechanics**: GSAP ScrollTrigger zooming through the facade into the café interior, with smooth split-text reveal of the cafe manifesto.

### `AmbianceGallery.jsx` (Atmosphere)
- **Role**: Parallax storytelling section showcasing the interior space.
- **Assets**: `03-cafe-interior-ambiance.jpg` and `04-barista-greeting-counter.jpg`.
- **Mechanics**: Asymmetric editorial layout with parallax vertical offsets for text vs. image cards.

### `OriginAndGrind.jsx` (Beans & Grind)
- **Role**: Educational scroll-pinned visual feature.
- **Assets**: `05-pouring-coffee-beans-hopper.jpg`, `06-grinder-touch-activation.jpg`, `07-fresh-grounds-dosing.jpg`.
- **Mechanics**: Pinned left container displaying the coffee hopper and grinder, with right side detailing bean origin (Ethiopia Yirgacheffe / Colombia Huila), tasting notes, and micrometric grind calibration.

### `CraftPrecision.jsx` (Leveling & Tamping)
- **Role**: Interactive tactile craft showcase.
- **Assets**: `08-ground-coffee-leveling.jpg`, `09-tamping-coffee-puck.jpg`, `10-portafilter-grouphead-lock.jpg`.
- **Mechanics**: User scroll drives an interactive tamping pressure gauge (0 to 15 kg) and step-by-step preparation flow.

### `ExtractionChamber.jsx` (The Golden Extraction)
- **Role**: High-impact sensory showcase of espresso flow.
- **Assets**: `11-espresso-extraction-flow.jpg` and `12-crema-cup-close-up.jpg`.
- **Mechanics**: Full-width pinned visual. Digital brew telemetry overlay (Brew Temperature: 93.5°C, Pressure: 9.0 Bar, Ratio: 18g:36g, Time: 28s) animating dynamically as the user scrolls.

### `MilkAndTexture.jsx` (Microfoam Steaming)
- **Role**: Side-by-side or carousel comparison of milk microfoam science.
- **Assets**: `13-milk-steaming-start.jpg` and `14-milk-frothing-vortex.jpg`.
- **Mechanics**: Subtle floating steam wisps (CSS/Canvas), highlighting microfoam density and milk alternatives (Oat, Almond, Organic Whole).

### `LatteArtScrubber.jsx` (The Rosetta Canvas)
- **Role**: Scrubbable frame animation canvas.
- **Assets**: `15-latte-art-initial-pour.jpg`, `16-latte-art-rosetta-bloom.jpg`, `17-finished-latte-art-cup.jpg`.
- **Mechanics**: Interactive scrubber allowing the user to control the exact milk pour progression back and forth with scroll or cursor drag.

### `MenuShowcase.jsx` (The Menu & Offerings)
- **Role**: Interactive tabbed menu with dietary filters.
- **Assets**: `17-finished-latte-art-cup.jpg` (Signature Latte), `18-barista-serving-tray.jpg` (Pastry & Coffee Pairings).
- **Categories**: Espresso & Black, Milk & White, Pour-Over & Filter, Artisanal Pastries & Bakery.

### `TableExperience.jsx` (Hospitality & Visit)
- **Role**: Warm closing section with visit details and table booking.
- **Assets**: `19-table-service-customer.jpg` and `20-coffee-croissant-enjoyment.jpg`.
- **Mechanics**: Integrated opening hours badge with live open/closed status, interactive Google Maps card, reservation booking form modal.

---

## 4. Animation & Interaction Strategy

1. **Inertia Scrolling**:
   - Integration of **Lenis** smooth scroll to normalize mousewheel, trackpad, and touch inertia across Mac, Windows, and mobile devices.
2. **GSAP ScrollTrigger Pinned Stages**:
   - Pinned scrub stages for key narrative sequences (Hero, Grind, Tamp, Extraction, Latte Art).
   - Non-scrub sections use staggered batch reveal triggers with gentle easing (`power3.out`).
3. **Typography Animation**:
   - Character and word split reveals using GSAP `SplitText` or CSS line masks for an editorial magazine feel.
4. **Reduced Motion Graceful Degradation**:
   - Full support for `prefers-reduced-motion: reduce`:
     - Disables pinning and scrubs.
     - Replaces complex transform animations with clean, instant fades.
     - Maintains complete accessibility compliance (WCAG 2.1 AAA).

---

## 5. Technology Stack & Tooling

- **Framework**: Modern Vite + React (or Vanilla/Alpine if lightweight static architecture is preferred)
- **Styling**: Tailwind CSS for responsive utility styling and custom design tokens
- **Animation Libraries**:
  - `gsap` (core engine)
  - `gsap/ScrollTrigger` (scroll synchronization)
  - `@studio-freight/lenis` (smooth inertia scrolling)
  - `lucide-react` (clean, lightweight icons)
- **Build & Bundle**: Vite with modern tree-shaking, code-splitting, and asset hashing

---

## 6. Performance & Responsiveness Plan

### Performance Budgets
- **Lighthouse Performance Score**: Target **95+** on desktop, **90+** on mobile.
- **First Contentful Paint (FCP)**: `< 0.9s`
- **Largest Contentful Paint (LCP)**: `< 1.8s`
- **Cumulative Layout Shift (CLS)**: `< 0.05`
- **First Input Delay / INP**: `< 50ms`

### Image Optimization Strategy
- Convert all active frame assets into **WebP** and **AVIF** formats.
- Generate responsive image resolutions (`@1x`, `@2x`, and mobile-optimized dimensions).
- Implement native `loading="lazy"` on all off-screen imagery, reserving `loading="eager"` and `fetchpriority="high"` exclusively for the Hero frame (`01-exterior-glass-facade.jpg`).

### Responsive Layout Breakpoints
- **Mobile (`< 640px`)**: Single-column vertical stream, touch-friendly touch targets (min 48px), simplified non-pinned vertical card progress.
- **Tablet (`640px – 1024px`)**: Two-column layout, adaptive pinned stages.
- **Desktop (`1024px – 1536px`)**: Full cinematic scroll experience with split-screen pinning and interactive telemetry.
- **Ultra-Wide (`> 1536px`)**: Max-width content constraint (`max-w-7xl` / `1600px`) centered with elegant ambient backdrop.

---

## 7. Phased Implementation Roadmap

1. **Phase 1: Project Setup & Foundations** *(Current Complete)*
   - Project directory structure established.
   - Video inspected, 70 frames extracted, contact sheets generated and visually analyzed.
   - 20 high-value descriptive frames curated into `assets/selected/`.
   - Comprehensive documentation created in `docs/`.
2. **Phase 2: Frontend Scaffolding & Setup** *(Awaiting User Approval)*
   - Initialize Vite + React project in `cafe-scroll-website/`.
   - Install dependencies (`gsap`, `@studio-freight/lenis`, `tailwindcss`, `lucide-react`).
   - Configure Tailwind typography and coffee color palette tokens.
3. **Phase 3: Component Assembly & ScrollTrigger Integration**
   - Build individual section components following the animation map.
   - Implement Lenis smooth scroll and GSAP ScrollTrigger timelines.
   - Wire up responsive image assets from `assets/selected/`.
4. **Phase 4: Polish, Optimization & Verification**
   - Fine-tune scroll scrub responsiveness and easing curves.
   - Test across desktop, tablet, and mobile viewport sizes.
   - Verify performance metrics and accessibility standards.
