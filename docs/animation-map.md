# Animation Map: Café Scroll-Driven Experience

This animation map defines the exact start, progression, and end states for every sequence of the website, linking user scroll position to visual transformation parameters (pinning, scaling, opacity, translation, rotation, and parallax).

---

## Technical Stack Recommendation

- **Animation Engine**: GSAP 3 (GreenSock Animation Platform) + **ScrollTrigger** plugin
- **Smooth Scrolling**: Lenis (Studio Freight) for fluid, weighted inertia scroll feel
- **Transitions / Micro-interactions**: Tailwind CSS + CSS transforms with hardware acceleration (`will-change: transform, opacity`)
- **Visual Assets**: Responsive picture elements, canvas frame scrubber for sequence scrub, and WebM/MP4 background video with seamless fallback

---

## Master Animation Matrix

| Sequence # | Sequence Name | Scroll Trigger / Distance | Pinning | Primary Animation Tool | Keyframe Assets |
|:---:|:---|:---:|:---:|:---:|:---|
| **Seq 01** | Hero: The Glass Threshold | 0% – 15% (150vh) | Yes (`pin: true`) | GSAP ScrollTrigger | `01-exterior-glass-facade.jpg`, `02-entrance-door-opening.jpg` |
| **Seq 02** | Philosophy: Walking In | 15% – 30% (120vh) | No (Parallax flow) | GSAP + CSS Parallax | `03-cafe-interior-ambiance.jpg`, `04-barista-greeting-counter.jpg` |
| **Seq 03** | Origin: The Bean & Grind | 30% – 45% (150vh) | Yes (`pin: true`) | GSAP ScrollTrigger | `05-pouring-coffee-beans-hopper.jpg`, `06-grinder-touch-activation.jpg`, `07-fresh-grounds-dosing.jpg` |
| **Seq 04** | Craft: Leveling & Tamping | 45% – 60% (150vh) | Yes (`pin: true`) | GSAP ScrollTrigger | `08-ground-coffee-leveling.jpg`, `09-tamping-coffee-puck.jpg`, `10-portafilter-grouphead-lock.jpg` |
| **Seq 05** | Extraction: Liquid Gold | 60% – 75% (180vh) | Yes (`pin: true`) | GSAP ScrollTrigger + Canvas/SVG | `11-espresso-extraction-flow.jpg`, `12-crema-cup-close-up.jpg` |
| **Seq 06** | Texture: Microfoam Steam | 75% – 85% (120vh) | No (Sticky split) | GSAP ScrollTrigger | `13-milk-steaming-start.jpg`, `14-milk-frothing-vortex.jpg` |
| **Seq 07** | Artistry: The Rosetta Bloom | 85% – 95% (200vh) | Yes (`pin: true`) | Canvas Scrub / GSAP | `15-latte-art-initial-pour.jpg`, `16-latte-art-rosetta-bloom.jpg`, `17-finished-latte-art-cup.jpg` |
| **Seq 08** | Hospitality: Table & Savor | 95% – 100% (150vh) | No (Footer release) | GSAP Fade/Slide | `18-barista-serving-tray.jpg`, `19-table-service-customer.jpg`, `20-coffee-croissant-enjoyment.jpg` |

---

## Detailed Sequence Specifications

### Sequence 01: Hero — The Glass Threshold

```
[00:00 - 00:06 of Reference Video]
Visual: Looking through glass entrance facade -> Door opens -> Moving inside
```

- **Scroll Progression**: `0% -> 15%` of total page scroll (~150vh scroll distance).
- **Pinning**: Yes. Pinned to viewport until zoom transition completes.
- **Starting Visual State**:
  - Background image: `01-exterior-glass-facade.jpg` at `scale: 1.0`, `opacity: 1.0`, `filter: blur(0px)`.
  - Door overlay frame: `02-entrance-door-opening.jpg` at `opacity: 0`, `scale: 0.95`.
  - Brand Header: Centered serif title "ARTISAN & ROAST" at `y: 0`, `opacity: 1`.
  - Scroll indicator pill: Bouncing at bottom center.
- **Ending Visual State**:
  - Background image: `scale: 1.25`, `opacity: 0`, `filter: blur(8px)`.
  - Door overlay: `scale: 1.1`, `opacity: 1`, then fades into interior image `03-cafe-interior-ambiance.jpg`.
  - Text: Splits left/right and fades out (`opacity: 0`, `y: -50px`).
- **Elements That Move**:
  - Facade zoom scaling (`scale: 1.0 -> 1.25`).
  - Door frame opening perspective (`transform: perspective(1000px) rotateY(-35deg)`).
  - Headline fades and shifts upward.
- **Elements That Remain Fixed**:
  - Global navigation bar (fixed header with logo and "Reserve / Menu" buttons).
  - Screen center focal point.
- **Transform Parameters**:
  - **Scale**: `1.0 -> 1.25`
  - **Rotation**: `0deg -> -35deg` (simulated 3D door swing on mask layer)
  - **Opacity**: Fade out `1.0 -> 0.0`
  - **Parallax**: Background moves at `0.2x` scroll velocity.
- **Engine Recommendation**: **GSAP ScrollTrigger** with `scrub: 1`.

---

### Sequence 02: Atmosphere — Walking Into The Warmth

```
[00:07 - 00:10 of Reference Video]
Visual: Walking between wooden tables, brick walls, approaching coffee counter
```

- **Scroll Progression**: `15% -> 30%` (~120vh scroll distance).
- **Pinning**: No. Natural flowing section with multi-layered parallax.
- **Starting Visual State**:
  - `03-cafe-interior-ambiance.jpg` covers background with subtle dark vignette (`opacity: 0.85`).
  - Floating editorial text blocks start off-screen (`y: 80px`, `opacity: 0`).
  - Welcome quote: "Where every morning finds its quiet rhythm."
- **Ending Visual State**:
  - Foreground cards scroll past with differential speeds.
  - Barista greeting card (`04-barista-greeting-counter.jpg`) scales into view in an asymmetric magazine layout (`scale: 1.0`, `opacity: 1.0`).
- **Elements That Move**:
  - Background image translates upward at `y: -15%` (parallax).
  - Text block translates upward with staggered reveal (`stagger: 0.15s`).
  - Feature badges ("Single Origin", "Slow Living", "Fresh Roast") float into place.
- **Elements That Remain Fixed**:
  - Ambient warm glow overlay.
- **Transform Parameters**:
  - **Scale**: Image container `0.92 -> 1.0`.
  - **Rotation**: `0deg` (clean linear motion).
  - **Opacity**: `0.0 -> 1.0`.
  - **Parallax**: Background layer `0.3x`, text layer `1.0x`, floating badges `1.2x`.
- **Engine Recommendation**: **GSAP ScrollTrigger** + CSS `will-change: transform`.

---

### Sequence 03: The Origin — Whole Beans & On-Demand Grinding

```
[00:11 - 00:19 of Reference Video]
Visual: Pouring roasted beans into hopper -> Digital display touch -> Grounds stream into portafilter
```

- **Scroll Progression**: `30% -> 45%` (~150vh scroll distance).
- **Pinning**: Yes. Pinned split-screen (Left: Sticky interactive visual; Right: Scrolling feature steps).
- **Starting Visual State**:
  - Left panel: `05-pouring-coffee-beans-hopper.jpg` pinned in high-definition frame.
  - Right panel: Step 1 active: "1. The Selection — 100% Arabica, Altitude 1,850m".
  - Floating bean icon with roast profile chart.
- **Ending Visual State**:
  - Crossfade to `06-grinder-touch-activation.jpg` then to `07-fresh-grounds-dosing.jpg`.
  - Right panel: Step 2 active: "2. Precision Grind — Micrometric Burrs calibrated to 250 microns".
- **Elements That Move**:
  - Right-hand text steps slide and crossfade as user scrolls.
  - Image cross-dissolves with subtle scale punch (`scale: 1.0 -> 1.04`).
  - Circular progress ring fills from `0%` to `100%`.
- **Elements That Remain Fixed**:
  - Left-hand image frame container.
  - Section title header.
- **Transform Parameters**:
  - **Scale**: `1.0 -> 1.05` on step changes.
  - **Rotation**: `0deg`.
  - **Opacity**: Crossfade steps (`opacity: 0 -> 1 -> 0`).
  - **Pinning**: `pin: true`, `scrub: 0.5`.
- **Engine Recommendation**: **GSAP ScrollTrigger** timeline with crossfade tween.

---

### Sequence 04: The Craft — Leveling & Calibrated Tamp

```
[00:20 - 00:31 of Reference Video]
Visual: Leveling coffee bed with fingers -> 15kg tamper compression -> Clean rim
```

- **Scroll Progression**: `45% -> 60%` (~150vh scroll distance).
- **Pinning**: Yes. Pinned centerpiece view with 3 sequential states.
- **Starting Visual State**:
  - Center showcase: `08-ground-coffee-leveling.jpg` with caption "Distribution: Creating a uniform coffee bed".
  - Tamping pressure meter at bottom: `0 kg`.
- **Middle Visual State (Scroll 52%)**:
  - Transition to `09-tamping-coffee-puck.jpg`.
  - Tamping meter animates to `15 kg / 33 lbs` with golden highlight.
- **Ending Visual State (Scroll 60%)**:
  - Transition to `10-portafilter-grouphead-lock.jpg`.
  - Caption: "Group Head Lock: Sealed under 9 atmospheres of pressure".
- **Elements That Move**:
  - Pressure dial SVG pointer rotates from `0deg -> 120deg`.
  - Image cross-dissolve with slight vertical push (`y: 20px -> 0px`).
  - Text captions wipe horizontally.
- **Elements That Remain Fixed**:
  - Center frame wrapper.
  - Circular pressure dial housing.
- **Transform Parameters**:
  - **Scale**: `1.0`.
  - **Rotation**: Pressure gauge needle `0deg -> 120deg`.
  - **Opacity**: `0.0 -> 1.0`.
  - **Pinning**: `pin: true`.
- **Engine Recommendation**: **GSAP ScrollTrigger** with stepped timeline.

---

### Sequence 05: The Extraction — 9-Bar Liquid Gold

```
[00:32 - 00:40 of Reference Video]
Visual: Locking into group head -> Dual streams -> Golden crema fills white cup
```

- **Scroll Progression**: `60% -> 75%` (~180vh scroll distance).
- **Pinning**: Yes. Pinned cinematic full-width hero presentation.
- **Starting Visual State**:
  - `11-espresso-extraction-flow.jpg` full-bleed background.
  - Twin espresso streams pouring down.
  - Floating metric card on left: "Pre-infusion: 4s @ 3 bar".
- **Ending Visual State**:
  - Zoom & transition into `12-crema-cup-close-up.jpg`.
  - Rich thick crema with micro-bubbles occupying center frame.
  - Floating metric card: "Yield: 36g in 28s | Total Dissolved Solids: 9.8%".
- **Elements That Move**:
  - Extraction progress bar fills vertically from top to cup base.
  - Metric counters count up smoothly (`0s -> 28s`, `0g -> 36g`).
  - Zoom into crema (`scale: 1.0 -> 1.15`).
- **Elements That Remain Fixed**:
  - Center alignment of the porcelain cup.
- **Transform Parameters**:
  - **Scale**: `1.0 -> 1.15`.
  - **Rotation**: `0deg`.
  - **Opacity**: Seamless dissolve between extraction flow and crema close-up.
  - **Pinning**: `pin: true`, `scrub: 1`.
- **Engine Recommendation**: **GSAP ScrollTrigger** + counter scrub script.

---

### Sequence 06: The Texture — Silky Microfoam Whirlpool

```
[00:41 - 00:49 of Reference Video]
Visual: Steam wand valve open -> Steaming milk whirlpool in stainless pitcher
```

- **Scroll Progression**: `75% -> 85%` (~120vh scroll distance).
- **Pinning**: No (Sticky dual-card layout).
- **Starting Visual State**:
  - Card 1: `13-milk-steaming-start.jpg` ("Temperature: 65°C / 149°F").
  - Card 2: `14-milk-frothing-vortex.jpg` ("Velvety Microfoam: Zero large bubbles").
- **Ending Visual State**:
  - Cards slide into adjacent side-by-side comparison with glowing border.
  - Particle/steam CSS animation floating up gently.
- **Elements That Move**:
  - Left card slides in from `x: -60px`, right card from `x: +60px`.
  - Steam wisps float upward with subtle CSS animation (`translateY(-40px)`, `opacity: 0`).
- **Elements That Remain Fixed**:
  - Background dark timber gradient.
- **Transform Parameters**:
  - **Scale**: `0.96 -> 1.0`.
  - **Rotation**: Subtle card tilt (`rotate: -1deg` and `rotate: 1deg`).
  - **Opacity**: `0.0 -> 1.0`.
- **Engine Recommendation**: **GSAP ScrollTrigger** batch reveal.

---

### Sequence 07: The Artistry — The Rosetta Pour

```
[00:50 - 01:00 of Reference Video]
Visual: Initial pour -> Rosetta leaf formation -> Clean pull-through
```

- **Scroll Progression**: `85% -> 95%` (~200vh scroll distance).
- **Pinning**: Yes. Pinned Interactive Canvas / Scrub Container.
- **Starting Visual State**:
  - `15-latte-art-initial-pour.jpg` pinned in round ceramic-inspired frame.
  - Header: "The Canvas of Milk & Crema".
- **Middle Visual State (Scroll 90%)**:
  - Scrub transitions to `16-latte-art-rosetta-bloom.jpg`.
  - White rosetta ripples expand across the gold surface.
- **Ending Visual State (Scroll 95%)**:
  - Scrub settles on `17-finished-latte-art-cup.jpg`.
  - Pristine symmetry and contrast.
  - Interactive beverage selector appears below: [Latte] [Flat White] [Cappuccino] [Macchiato].
- **Elements That Move**:
  - Frame scrub progression coordinated 1:1 with user wheel/touch scroll.
  - Circular mask expands (`clip-path: circle(30%) -> circle(100%)`).
  - Floating descriptor tags fade in.
- **Elements That Remain Fixed**:
  - Pinned cup container.
- **Transform Parameters**:
  - **Scale**: `1.0 -> 1.08`.
  - **Rotation**: `0deg`.
  - **Opacity**: Continuous cross-fading frames.
  - **Pinning**: `pin: true`, `scrub: 0.5`.
- **Engine Recommendation**: **GSAP ScrollTrigger** scrubbing an HTML5 `<canvas>` or dual-layered image stack.

---

### Sequence 08: Hospitality — Table Service & The Savor

```
[01:01 - 01:10 of Reference Video]
Visual: Barista carrying tray -> Serving at sunny table -> Customer holding warm cup
```

- **Scroll Progression**: `95% -> 100%` (~150vh scroll distance).
- **Pinning**: No (releases into interactive menu & visit footer).
- **Starting Visual State**:
  - Full-width presentation of `18-barista-serving-tray.jpg` (The Pairing: Latte + Flaky Croissant).
  - Story text: "More than coffee — a sanctuary of taste and calm."
- **Middle Visual State**:
  - Asymmetric gallery grid featuring `19-table-service-customer.jpg` and `20-coffee-croissant-enjoyment.jpg`.
- **Ending Visual State**:
  - Interactive "Visit Our Café" section with live opening status ("Open today 7:00 AM – 6:00 PM"), Google Maps integration card, and "Reserve a Table" button.
- **Elements That Move**:
  - Grid images reveal with subtle staggered parallax (`y: 40px -> 0px`).
  - Action buttons pulse gently with golden ambient glow.
- **Elements That Remain Fixed**:
  - Footer bottom credits.
- **Transform Parameters**:
  - **Scale**: `0.98 -> 1.0`.
  - **Rotation**: `0deg`.
  - **Opacity**: `0.0 -> 1.0`.
- **Engine Recommendation**: Standard **GSAP ScrollTrigger** fade-ins and CSS transitions.
