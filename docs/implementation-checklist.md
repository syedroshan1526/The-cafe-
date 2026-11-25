# Cinematic Café Scroll Website — Implementation Checklist

## Project Status: COMPLETED & VERIFIED

### Reference
- `reference/cafe-reference.mp4` (70s, 1080p, 30fps)
- `public/sequence/frame_0001.jpg` – `frame_0175.jpg` (175 high-resolution sequence frames)

---

## Stage Checklist

### [x] Task 1: Video Inspection & Planning
- [x] Read `docs/video-analysis.md`
- [x] Read `docs/animation-map.md`
- [x] Read `docs/asset-manifest.md`
- [x] Read `docs/website-plan.md`
- [x] Preserve all original reference files and extracted frames
- [x] Create implementation checklist in `docs/implementation-checklist.md`

### [x] Task 2: Frontend Setup
- [x] Initialize React + TypeScript + Vite project
- [x] Configure Tailwind CSS with coffee color tokens and typography
- [x] Install `gsap`, `@studio-freight/lenis`, `lucide-react`
- [x] Verify production build (`npm run build`) compiles with zero errors

### [x] Task 3: Brand Identity & Centralized Config
- [x] Create `src/config/cafeConfig.ts` for editable brand name, address, phone, WhatsApp, Google Maps, and hours
- [x] Create `src/config/menuData.ts` for editable menu items, categories, tasting notes, and placeholder prices
- [x] Establish luxury dark cinema aesthetic (deep espresso black `#0C0A09`, amber crema `#C89552`)

### [x] Task 4 & 5: Full-Screen Cinematic Film Engine
- [x] Eliminate the photo-card / dashboard grid approach
- [x] Extract 175 dense sequence frames from `reference/cafe-reference.mp4` into `public/sequence/`
- [x] Build `CinematicFilm.tsx` with full-screen `<canvas>` cover-rendering pinned via GSAP ScrollTrigger
- [x] Synchronize 8 film chapters to exact reference video progression:
  - Act 01: The Entrance (00:00–00:06)
  - Act 02: The Atmosphere (00:07–00:10)
  - Act 03: The Genesis / Beans & Mill (00:11–00:19)
  - Act 04: Tactile Precision / 15 kg Tamp (00:20–00:31)
  - Act 05: 9-Bar Extraction / Liquid Gold Crema (00:32–00:40)
  - Act 06: The Texture / Whirlpool Vortex (00:41–00:49)
  - Act 07: The Handcrafted Rosetta Bloom (00:50–01:00)
  - Act 08: The Savor & Window Table (01:01–01:10)
- [x] Layer pure, floating editorial typography with zero box borders or card containers
- [x] Ensure 100% reversible scrubbing (scrolling up reverses the film seamlessly)

### [x] Task 6: Animation Mechanics & Smooth Scrolling
- [x] Synchronize Lenis smooth inertia scrolling with `ScrollTrigger.update()`
- [x] Preload frames progressively with loading status bar
- [x] Natural scroll inertia with zero scroll hijacking
- [x] Full support for `prefers-reduced-motion`

### [x] Task 7: Curated Menu Section
- [x] Redesign menu as a refined typographic tasting menu (no clunky cards)
- [x] Filterable category tabs (*Espresso & Black*, *Milk & White*, *Pour-Over*, *Bakery*)
- [x] Tasting notes, volume specs, badges, and sample prices clearly marked as editable

### [x] Task 8: Business Information & Visit Section
- [x] Real-time opening hours with live Open/Closed badge
- [x] Clickable Google Maps location link
- [x] Clickable WhatsApp direct message link
- [x] Interactive Table Reservation form with confirmation modal feedback

### [x] Task 9: Mobile Responsiveness
- [x] Responsive canvas aspect-ratio cover math for mobile screens
- [x] Fluid typography scaling without horizontal overflow
- [x] Tested and verified on mobile viewport dimensions

### [x] Task 10: Performance & Documentation
- [x] Lightweight static bundle (dist build ~350KB JS gzip ~106KB)
- [x] Complete instructions in `README.md`
- [x] Comprehensive test report in `docs/testing-report.md`
