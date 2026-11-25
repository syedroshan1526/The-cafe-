# Asset Manifest: Café Scroll Website

This manifest catalogs all primary visual assets extracted and curated from the reference video (`reference/cafe-reference.mp4`), detailing their technical specs, semantic description, and planned usage across the website components.

---

## 1. Selected High-Resolution Frames (`assets/selected/`)

| File Name | Original Source | Timestamp | Resolution | Primary Role / Component Placement |
|:---|:---:|:---:|:---:|:---|
| **`01-exterior-glass-facade.jpg`** | `frame_0001.jpg` | `00:00:01` | 1920×1080 | **Hero Section**: Initial background canvas; establishes architectural identity, street facade, and welcoming atmosphere. |
| **`02-entrance-door-opening.jpg`** | `frame_0004.jpg` | `00:00:04` | 1920×1080 | **Hero Scroll Transition**: Interactive entrance trigger layer; zooms and dissolves to simulate pushing the glass door open. |
| **`03-cafe-interior-ambiance.jpg`** | `frame_0007.jpg` | `00:00:07` | 1920×1080 | **Ambiance & Philosophy Section**: Background parallax image showing brick walls, Edison pendant lighting, and warm communal tables. |
| **`04-barista-greeting-counter.jpg`** | `frame_0010.jpg` | `00:00:10` | 1920×1080 | **Hospitality Card**: Introduces the human element — barista smiling at the wooden bar counter with chalkboard menu. |
| **`05-pouring-coffee-beans-hopper.jpg`** | `frame_0014.jpg` | `00:00:14` | 1920×1080 | **The Origin Section**: Hero visual for single-origin beans tumbling into the glass grinder hopper; highlights raw quality. |
| **`06-grinder-touch-activation.jpg`** | `frame_0019.jpg` | `00:00:19` | 1920×1080 | **Process Step 1**: Barista's hand tapping digital capacitive touch screen on modern espresso grinder. |
| **`07-fresh-grounds-dosing.jpg`** | `frame_0020.jpg` | `00:00:20` | 1920×1080 | **Process Step 2**: Close-up of ground coffee dosing directly into the stainless steel portafilter basket. |
| **`08-ground-coffee-leveling.jpg`** | `frame_0022.jpg` | `00:00:22` | 1920×1080 | **Craft & Precision Card**: Barista leveling and distributing the ground coffee bed prior to tamping. |
| **`09-tamping-coffee-puck.jpg`** | `frame_0025.jpg` | `00:00:25` | 1920×1080 | **Craft & Precision Hero**: Firm, calibrated 15 kg tamp compression creating the flat, polished coffee puck. |
| **`10-portafilter-grouphead-lock.jpg`** | `frame_0033.jpg` | `00:00:33` | 1920×1080 | **Brewing Setup Step**: Locking portafilter into the commercial group head with mechanical precision. |
| **`11-espresso-extraction-flow.jpg`** | `frame_0037.jpg` | `00:00:37` | 1920×1080 | **Extraction Feature**: Macro shot of twin syrupy espresso streams pouring into the white ceramic cup. |
| **`12-crema-cup-close-up.jpg`** | `frame_0039.jpg` | `00:00:39` | 1920×1080 | **Extraction Climax**: Golden-hazelnut crema pooling in the cup; hero image for flavor profile and brewing science specs. |
| **`13-milk-steaming-start.jpg`** | `frame_0043.jpg` | `00:00:43` | 1920×1080 | **Steam & Texture Step 1**: Barista activating commercial steam wand into cold milk pitcher. |
| **`14-milk-frothing-vortex.jpg`** | `frame_0046.jpg` | `00:00:46` | 1920×1080 | **Steam & Texture Step 2**: Silky microfoam whirlpool vortex in stainless pitcher; milk texture explanation. |
| **`15-latte-art-initial-pour.jpg`** | `frame_0052.jpg` | `00:00:52` | 1920×1080 | **Artistry Sequence 1**: High-angle close-up of pouring steamed milk into the tilted espresso cup. |
| **`16-latte-art-rosetta-bloom.jpg`** | `frame_0056.jpg` | `00:00:56` | 1920×1080 | **Artistry Sequence 2**: Intricate white rosetta leaf pattern blooming across the golden surface. |
| **`17-finished-latte-art-cup.jpg`** | `frame_0061.jpg` | `00:01:01` | 1920×1080 | **Beverage Menu Hero**: Complete, master-crafted cup with flawless leaf latte art. Main product visual for coffee offerings. |
| **`18-barista-serving-tray.jpg`** | `frame_0063.jpg` | `00:01:03` | 1920×1080 | **Menu & Pairings**: Barista carrying handcrafted wooden tray with latte and flaky golden croissant. |
| **`19-table-service-customer.jpg`** | `frame_0067.jpg` | `00:01:07` | 1920×1080 | **Experience & Warmth**: Delivering the order to the smiling customer at a sunlit wooden window table. |
| **`20-coffee-croissant-enjoyment.jpg`** | `frame_0070.jpg` | `00:01:10` | 1920×1080 | **Closing / CTA Hero**: Hands holding the warm cup with croissant beside it on weathered timber. Final call-to-action background. |

---

## 2. Contact Sheets (`assets/frames/contact-sheets/`)

- **`contact_sheet_01.jpg`**: Frames 01–16 (`00:00`–`00:16`) — Arrival, entrance, counter approach, coffee bean hopper loading.
- **`contact_sheet_02.jpg`**: Frames 17–32 (`00:16`–`00:32`) — Grinder activation, dosing, leveling, calibrated tamping, rim cleaning.
- **`contact_sheet_03.jpg`**: Frames 33–48 (`00:32`–`00:48`) — Portafilter group head lock, twin espresso flow, crema formation, milk steaming vortex.
- **`contact_sheet_04.jpg`**: Frames 49–64 (`00:48`–`01:04`) — Pitcher swirl, latte art pour sequence (rosetta bloom), tray prep, walking to table.
- **`contact_sheet_05.jpg`**: Frames 65–70 (`01:04`–`01:10`) — Table delivery, guest interaction, final warm cup and croissant enjoyment.

---

## 3. Web Optimization & Derived Assets Strategy (For Future Phase)

When proceeding to website construction, the following asset pipelines will be applied:
1. **Next-Gen WebP / AVIF Generation**:
   - Convert primary JPEG frames into high-efficiency `.webp` and `.avif` formats (typically 40–60% smaller file size with zero perceptible quality loss).
2. **Responsive srcset Variants**:
   - `large` (1920w): Desktop viewports (1440px+).
   - `medium` (1280w): Laptops and tablets.
   - `small` (768w): Mobile screens.
3. **Optimized Video Loops**:
   - Convert key micro-sequences (such as the 3-second espresso extraction and 4-second latte art pour) into lightweight muted WebM/MP4 video clips for ambient video loop components.
