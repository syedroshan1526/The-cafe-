# THE CAFÉ — Luxury Digital Film & Scroll-Driven Coffee Journey

An award-winning, interactive, scroll-driven digital experience built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Lenis Smooth Scroll**, and **GSAP ScrollTrigger**, directly adapted from high-resolution frame analysis of an artisanal specialty coffee journey.

---

## 🌟 Luxury Experience Highlights

1. **60 FPS Continuous Cinematic Scrub Engine**:
   - High-resolution 175-frame sequential playback rendered via an HTML5 `<canvas>` using responsive aspect-ratio cover math.
   - Pinned on a deliberate, unhurried **900vh runway (~9,000px)** with weighted scrub inertia (`scrub: 0.9`), allowing visitors to experience an interactive story as they scroll.
   - 100% reversible bi-directional scrubbing with zero video seek latency or buffer stalls.
   - All source watermark artifacts cleanly erased via batch OpenCV inpainting (`INPAINT_TELEA`).

2. **Art-Directed 8-Chapter Film Narrative**:
   - **Act 01 (The Entrance)**: Monumental serif headline, subtle dark vignette, glass facade reflections, and an unhurried scroll invitation.
   - **Act 02 (The Atmosphere)**: Warm arrival amidst exposed brick, glowing Edison filaments, and ambient acoustic hum.
   - **Act 03 (The Genesis)**: Ethiopian single-origin micro-lots tumbling into the glass hopper with 250µm on-demand burr grind calibration.
   - **Act 04 (Tactile Precision)**: Planar coffee bed distribution and 15 kg calibrated perpendicular tamping.
   - **Act 05 (The Extraction)**: Viscous 9-bar twin syrupy streams pooling into warm porcelain with live digital telemetry (93.5°C PID • 18g:36g • 28s).
   - **Act 06 (The Texture)**: Saturated dry steam wand whirlpool vortex whipping farm dairy into glossy micro-velvet at 65°C.
   - **Act 07 (The Artistry)**: Gentle wrist oscillations blooming intricate rosetta leaf petals across golden crema.
   - **Act 08 (The Savor)**: Sunlit window table service with fresh flaky butter croissant, hot porcelain cup, and quiet morning solace.

3. **Floating Island Scene-Aware Adaptive Navbar**:
   - Floating, rounded-full glassmorphic pill centered at top of viewport (`max-w-5xl px-7 py-3`) allowing edge-to-edge canvas footage to bleed behind and around it.
   - **Dynamic Lighting Awareness**:
     - *Acts 1–7 (Dark/Atmospheric Footage)*: Subtle dark translucent pill (`bg-coffee-950/45`) with warm ivory typography and gold accents.
     - *Act 8 (Bright Sunlit Table Footage)*: Gracefully switches to a high-contrast frosted sunlight glass pill (`bg-coffee-50/85`) with rich espresso typography and dark button.
     - *Editorial Sections (#menu, #visit)*: Smoothly transitions into dark editorial mode (`bg-coffee-950/75`).
   - Smooth Lenis anchor navigation to `#film`, `#menu`, `#visit`, and `#reservation`.
   - Responsive mobile navigation with compact floating pill and frosted glass dropdown.

4. **Curated Editorial Menu**:
   - Minimalist typographic layout with delicate hairline rules (`border-coffee-900/70`) and generous breathing room.
   - Interactive category switching (*Espresso & Black*, *Milk & White Creations*, *Pour-Over & Slow Bar*, *Bakery & Viennoiserie*).
   - Volume indicators, tabular monospace pricing, terroir tasting notes, and craft badges.

5. **Visit, Concierge & Table Hospitality**:
   - Real-time service status ("Open Today").
   - Configurable live links: Google Maps location, direct WhatsApp concierge (`wa.me`), and telephone link.
   - Dual-mode reservation: integrated in-page booking card and full-screen floating reservation modal accessible from the navbar button anywhere on the page.

6. **Restrained Luxury Design System**:
   - **Palette**: Deep espresso (`#0c0a09`), dark roasted bean (`#171210`), roasted timber (`#211a16`), warm taupe (`#4a3b32`), muted antique gold (`#c89552`), soft ivory (`#f0dfc8`), and porcelain white (`#faf7f2`).
   - **Typography**: Editorial serif (*Playfair Display*), refined modern sans (*Plus Jakarta Sans*), and precise technical monospace (*JetBrains Mono*).
   - **Restraint**: Unnecessary blinking badges, harsh borders, and decorative clutter removed in favor of quiet, intentional sophistication.

---

## 📁 Project Structure

```text
cafe-scroll-website/
├── reference/
│   └── cafe-reference.mp4        # Original 1080p reference video (preserved)
├── assets/
│   ├── frames/                   # 70 master 1-fps video frames
│   │   └── contact-sheets/       # 5 chronological 4x4 contact sheets
│   └── selected/                 # 20 curated master reference images
├── public/
│   ├── assets/selected/          # Optimized static reference assets
│   └── sequence/                 # 175 sequential frames (frame_0001.jpg – frame_0175.jpg)
├── src/
│   ├── config/
│   │   ├── cafeConfig.ts         # Centralized business info (name, address, hours, phone, WhatsApp)
│   │   ├── menuData.ts           # Centralized menu items, tasting notes, volume, sample prices
│   │   └── sceneThemes.ts        # Scene-aware adaptive contrast & navbar theme tokens
│   ├── components/
│   │   ├── Navbar.tsx            # Floating island adaptive scene-aware navigation
│   │   ├── CinematicFilm.tsx     # 175-frame HTML5 canvas scrub engine (900vh runway)
│   │   ├── MenuSection.tsx       # Editorial seasonal menu with category switching
│   │   ├── VisitAndReservation.tsx # Opening hours, map, WhatsApp & reservation modal
│   │   └── Footer.tsx            # Brand sign-off, newsletter dispatch & smooth back-to-top
│   ├── App.tsx                   # Master app with Lenis + ScrollTrigger synchronization
│   ├── index.css                 # Custom Tailwind utilities & glassmorphic tokens
│   └── main.tsx                  # React DOM entry point
├── docs/
│   ├── video-analysis.md         # Detailed chronological breakdown
│   ├── animation-map.md          # Complete GSAP ScrollTrigger animation matrix
│   ├── asset-manifest.md         # Image catalog & usage descriptions
│   ├── website-plan.md           # Implementation blueprint
│   ├── implementation-checklist.md # Stage-by-stage completion checklist
│   ├── testing-report.md         # Comprehensive QA testing report
│   └── final-polish-report.md    # Final luxury design pass and verification report
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Installation & Development

### 1. Prerequisites
- Node.js (v18+ recommended, verified with v24.16.0)
- npm (v9+ recommended, verified with v11.7.0)

### 2. Install Dependencies
```bash
cd cafe-scroll-website
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## ✍️ Customizing Café Details

All café business information, menu items, and styling themes are centralized in TypeScript configuration files:

### 1. Café Business Information, Hours & Links
Edit **`src/config/cafeConfig.ts`**:
```typescript
export const CAFE_CONFIG = {
  brandName: "THE CAFÉ",
  tagline: "Artisanal Roasters & Specialty Coffee",
  contact: {
    phone: "+1 (555) 789-2041",
    displayPhone: "+1 (555) 789-2041",
    whatsapp: "15557892041", // Digits only for direct wa.me link
    email: "hello@thecafe-artisanal.com"
  },
  location: {
    addressLine1: "142 Grand Heritage Street",
    cityStateZip: "Design District, NY 10013",
    neighborhood: "Historic North Corner",
    googleMapsUrl: "https://maps.google.com/?q=142+Grand+St+New+York"
  },
  hours: {
    weekdays: "Monday – Friday: 7:00 AM – 6:00 PM",
    weekends: "Saturday – Sunday: 8:00 AM – 7:00 PM",
    roasteryRoastDays: "Tuesdays & Thursdays (Fresh Batch Roasting)"
  }
};
```

### 2. Seasonal Menu Offerings, Notes & Pricing
Edit **`src/config/menuData.ts`**:
- Add, update, or remove items in `MENU_CATEGORIES`.
- Configure item names, tasting notes, volume specs, badges, and pricing.

### 3. Adaptive Scene Themes & Contrast
Edit **`src/config/sceneThemes.ts`**:
- Fine-tune navbar background opacity, text colors, and button styles for each chapter (Acts 1–8) and post-film sections.

---

## 🛡️ Quality Assurance & Cross-Browser Verification

- **Pacing & Scroll Runway**: 900vh (~9,000px) provides ~110vh–125vh per chapter.
- **ScrollTrigger Stability**: Rock-solid lifecycle management with zero `.pin-spacer` collapse across both forward and reverse scrubbing.
- **Responsive Layout**: Verified on desktop (1280×800) and mobile (390×844) viewports.
- **Zero Horizontal Overflow**: `document.documentElement.scrollWidth === document.documentElement.clientWidth` verified across all scroll positions.
- **No Dependencies on External APIs or Keys**: Runs 100% locally with zero third-party tracking or keys required.
