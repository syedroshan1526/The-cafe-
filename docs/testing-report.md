# Testing Report: Cinematic Café Scroll Website

## 1. Overview & Verification Scope
- **Test Target**: `http://localhost:5173/` (Vite dev server & production build verified)
- **Reference Footage**: `reference/cafe-reference.mp4` (70 seconds, 1080p, 30fps)
- **Architecture**:
  - Full-screen HTML5 `<canvas>` responsive cover-rendering
  - GSAP 3 + ScrollTrigger (500vh pinned scrub container)
  - Lenis smooth inertia scrolling
  - Preloaded 175-frame high-resolution sequence (`/sequence/frame_0001.jpg` – `frame_0175.jpg`)
  - Pure floating editorial typography (zero card grids or box borders)

---

## 2. Test Execution & Visual Inspection Checklist

### Scene-by-Scene Film Progression

| Sequence | Reference Timestamp | Target Visual Content | Canvas Frame Range | Verification Status | Visual Notes |
|:---|:---:|:---|:---:|:---:|:---|
| **Act 01: The Entrance** | `00:00`–`00:06` | Dark street facade, glass reflections, customer opening door | Frames 1–21 | **PASS** | Monumental "THE CAFÉ" serif headline, subtle vignette, smooth scroll cue. |
| **Act 02: The Atmosphere** | `00:07`–`00:10` | Walking down aisle, reclaimed brick, pendant lights, barista greeting | Frames 22–44 | **PASS** | Camera moves seamlessly down aisle to the timber counter. Text floats bottom-left. |
| **Act 03: The Genesis** | `00:11`–`00:19` | Beans pouring into glass hopper, digital touch activation, dosing | Frames 45–70 | **PASS** | High-altitude Arabica falling into burrs. Text floats bottom-right. |
| **Act 04: Tactile Precision** | `00:20`–`00:31` | Finger distribution, 15 kg calibrated tamp, rim wipe, group lock | Frames 71–95 | **PASS** | Downward tamper compression and group head insertion. Text floats top-left. |
| **Act 05: The Extraction** | `00:32`–`00:40` | Twin viscous syrupy espresso streams, golden crema formation | Frames 96–122 | **PASS** | Viscous hazelnut flow into white porcelain. Live brew stats (93.5°C, 9.0 bar, 28s). |
| **Act 06: The Texture** | `00:41`–`00:49` | Steam wand aeration and whirlpool vortex emulsification | Frames 123–140 | **PASS** | Glossy microfoam vortex spinning at 65°C. Floating editorial subtitle. |
| **Act 07: The Artistry** | `00:50`–`01:00` | High-pour base, wrist oscillations, rosetta leaf bloom, pull-through | Frames 141–157 | **PASS** | White rosetta petals expanding across amber crema canvas. |
| **Act 08: The Savor** | `01:01`–`01:10` | Barista carrying wooden tray with croissant, table service, customer holding warm cup | Frames 158–175 | **PASS** | Peaceful resolution by sunlit window. Natural transition into menu and visit sections. |

---

## 3. Post-Film Editorial Sections

1. **Seasonal Menu Section**:
   - **Visual Structure**: Minimalist editorial typography with thin hairline rules. Completely free of clunky cards, metric boxes, or nested container borders.
   - **Category Navigation**: 4 categories (*Espresso & Black*, *Milk & White Creations*, *Pour-Over & Slow Bar*, *Bakery & Viennoiserie*) switch instantaneously.
   - **Item Typography**: Elegant serif titles, volume indicators, tasting notes, and sample prices (`$4.25` – `$9.50`).
2. **Visit & Table Reservation Section**:
   - **Location & Google Maps**: Clean address listing with active external Google Maps link.
   - **Direct Inquiry Options**: Direct WhatsApp link (`https://wa.me/...`) and telephone link (`tel:...`).
   - **Opening Hours**: Weekday and weekend schedules with real-time "Open Today" glowing status indicator.
   - **Table Reservation Form**: Interactive booking with party size, date, time selection, and immediate confirmation feedback with "Make Another Booking" reset option.
3. **Footer**:
   - Clean brand sign-off, newsletter signup, social media links, and functional "Back to Top" smooth scroll.

---

## 4. Reversibility & Responsiveness Verification

- **Bi-directional Scrubbing**: Scrolling backwards from Act 8 to Act 1 seamlessly reverses the canvas frame rendering with zero seek latency or buffering (verified via reverse jumps).
- **Mobile Viewport (390 × 844)**:
  - Canvas dynamically scales using aspect ratio cover math to fill mobile screens completely.
  - Floating typography scales down gracefully (`text-3xl` to `text-5xl`), with zero horizontal overflow (body, main, header, and footer widths verified at 384px inside 390px viewport).
  - Touch scrolling scrubs the film with natural inertia.
- **Console & Network Audit**: Zero runtime errors, zero unhandled promise rejections, zero missing assets.

---

## 5. Verification of Critical Fixes (Horizontal Overflow, Watermark & Pacing)

### 1. Horizontal Scrollbar Root Cause Elimination: PASS
- **Root Causes Fixed**:
  - Removed conflicting CSS `scroll-smooth` on `html` root which caused subpixel tracking mismatch with Lenis smooth scroll.
  - Hardened `html, body, #root` with `overflow-x: hidden; width: 100%; max-width: 100%`.
  - Added `.pin-spacer { overflow-x: hidden !important; max-width: 100% !important; }` in `src/index.css` to prevent GSAP pin spacer layout calculations from overflowing.
  - Replaced horizontal translations (`translate-x-8`) with vertical transitions (`translate-y-6`).
  - Replaced `inset-x-8` on bottom timeline with bounded `left-0 right-0 max-w-xl mx-auto px-6`.
- **Measurement Results**:
  - **Desktop (`1280x800`)**: `html.width = 1274px` (1280 - 6px vertical bar), `html.x = 0`. Horizontal scroll offset remains strictly 0. Zero horizontal scrollbar.
  - **Mobile (`390x844`)**: `html.width = 384px`, `html.x = 0`. Zero horizontal scrollbar or side bleed.

### 2. Elimination of Bottom-Right Star Watermark: PASS
- **Root Cause**: The Google Vids 4-pointed star watermark was baked into the bottom-right corner of the video frames.
- **Solution**: Executed batch OpenCV inpainting (`cv2.inpaint` with `INPAINT_TELEA`) over the bounding box coordinates (`1125–1195, 565–635` in 720p; `1700–1780, 860–940` in 1080p).
- **Verification**: All 175 sequence frames in `public/sequence/` and curated assets in `assets/selected/` inspected. The star watermark has been completely removed across every single frame.

### 3. Scroll Pacing & Narrative Rhythm: PASS
- **Adjustment**: Increased ScrollTrigger pinned distance from `+=500%` to `+=900%` (~9,000px scroll runway) with `scrub: 0.9`.
- **User Experience**: The film story now unfolds slowly, smoothly, and deliberately. Each of the 8 narrative acts receives ample breathing room (~110vh–125vh each), allowing visitors to absorb the visuals and typography unhurriedly.
- **Bi-directional Scrubbing**: 100% fluid both forward and backward.

### 4. HUD Polish & Timeline Progress: PASS
- Top badges (`Act 0X / 08` and `Silent Film / Ambiance On`) positioned cleanly below fixed navbar (`top-24 sm:top-28`).
- Act 4 typography vertically centered to avoid any collision with top badges on mobile and desktop.
- Bottom timeline progress bar advances continuously from 0% to 100% in perfect sync with the user's scroll.
