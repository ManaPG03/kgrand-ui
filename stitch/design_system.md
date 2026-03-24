# Design System Strategy: Warm Authority

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Curated Haven."** 

While many PG (Paying Guest) and co-living platforms lean into cold, architectural minimalism or overly energetic "startup" aesthetics, this system carves out a third path. It combines the prestige of a luxury residence with the approachability of a community-focused home. We move away from the rigid, grid-heavy editorial look to embrace a "layered" philosophy—where elements feel softly nested rather than strictly partitioned. 

By utilizing intentional asymmetry, generous breathing room (using our `24` and `20` spacing tokens), and soft corner radii (`12px` / `lg`), we create a digital environment that feels premium yet deeply practical. The goal is to move the user from "searching for a room" to "discovering their community."

---

## 2. Colors
Our palette is anchored in **Deep Navy (`primary: #051125`)** for authority and **Slate (`secondary: #47607e`)** for a modern, approachable bridge.

### The "No-Line" Rule
To maintain a high-end feel, **1px solid borders are strictly prohibited for sectioning.** We define boundaries through background color shifts. 
- A `surface-container-low` (`#f3f4f5`) card should sit on a `surface` (`#f8f9fa`) background. 
- For more emphasis, use `surface-container-highest` (`#e1e3e4`) to anchor primary content blocks without the "cheapness" of a stroke.

### Surface Hierarchy & Nesting
Think of the UI as physical layers of fine paper. 
- **Base Layer:** `surface` or `background`.
- **Primary Content Blocks:** `surface-container` tiers. 
- **Nested Detail:** Use `surface-container-lowest` (`#ffffff`) for cards inside a `surface-container` section to create a natural, "floating" lift.

### Signature Textures & Glass
To inject "soul" into the UI:
- **CTAs:** Use a subtle linear gradient from `primary` (`#051125`) to `primary_container` (`#1b263b`) at a 135-degree angle. This adds a tactile, metallic depth that flat navy cannot achieve.
- **Overlays:** Use **Glassmorphism** for navigation bars or floating action buttons. Apply a semi-transparent `surface_container_lowest` with a `20px` backdrop-blur.

---

## 3. Typography
We utilize **Inter** exclusively to ensure maximum legibility across all touchpoints, from complex lease agreements to high-impact marketing headers.

- **Display (lg/md):** Reserved for high-level value propositions. Use `display-lg` (3.5rem) with a tight letter-spacing (-0.02em) to feel authoritative and bespoke.
- **Headline (lg/md/sm):** Used for section titles. These should lead with "Benefit-First" language (e.g., "Comfort Meets Connection" instead of "Our Amenities").
- **Title (lg/md/sm):** These serve as the "workhorse" for card headers and navigation. Pair `title-md` (1.125rem) with `on_surface` for a bold, trustworthy presence.
- **Body & Label:** Use `body-md` (0.875rem) for general descriptions. For technical details (e.g., "Square Footage" or "Available From"), use `label-md` in `on_surface_variant` (#45474d) to create a clear informational hierarchy.

---

## 4. Elevation & Depth
In this system, depth is a functional tool, not a decorative one.

### Tonal Layering
Avoid the "standard" box-shadow on every card. Achieve 80% of your hierarchy through stacking surface tokens:
- **Level 0 (Floor):** `surface`
- **Level 1 (Section):** `surface-container-low`
- **Level 2 (Active Element):** `surface-container-lowest` (White)

### Ambient Shadows
When a shadow is required for a floating component (like a "Book Now" bar), use a **Double-Layer Ambient Shadow**:
- `box-shadow: 0 4px 20px rgba(5, 17, 37, 0.04), 0 10px 40px rgba(5, 17, 37, 0.06);`
- This uses a tint of our `primary` Navy instead of grey, making the shadow feel like it belongs to the environment.

### The "Ghost Border" Fallback
If contrast is needed for accessibility on white-on-white backgrounds, use a **Ghost Border**: `outline-variant` (`#c5c6cd`) at 15% opacity. It should be barely felt, only perceived.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `lg` (1rem) rounded corners. Text is `on_primary` (White).
- **Secondary:** `surface_container_high` background with `primary` text. No border.
- **Tertiary:** Text-only in `secondary`, used for "Cancel" or low-priority discovery.

### Cards & Lists (The "No-Divider" Rule)
Forbid the use of horizontal rules/lines. 
- Separate list items using **Vertical White Space** (scale `4` or `5`).
- Use a background shift (hover state using `surface_container_highest`) to define the interactive area.

### Input Fields
- **Container:** `surface_container_lowest` (Pure White).
- **Border:** Use the "Ghost Border" (15% opacity `outline-variant`).
- **Active State:** Border transitions to `secondary` (#47607e) at 100% opacity with a subtle 2px glow.

### Signature Component: The "Community Pulse" Chip
Use `tertiary_fixed` (#ffdea5) background with `on_tertiary_fixed` (#261900) text for badges related to community events or "High Demand" status. The warm gold/yellow adds the necessary "Warmth" to the cool Navy/Slate palette.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetric Layouts:** Place a headline on the left and a supporting body paragraph on the right with a 1-column offset to break the "template" feel.
- **Embrace White Space:** Use the `24` (6rem) spacing token between major sections to let the "Premium" nature of the brand breathe.
- **Prioritize Softness:** Ensure all interactive elements use the `lg` (1rem) or `md` (0.75rem) rounding scale.

### Don’t:
- **Don't use 100% Black:** Always use `on_surface` (#191c1d) for text to keep the interface feeling "warm" rather than "stark."
- **Don't use hard borders:** Never use a solid 1px border to separate the header from the body. Use a subtle `surface-container` shift instead.
- **Don't use architectural jargon:** Avoid words like "Configuration," "Unit Specs," or "Inhabitation." Use "Your Room," "Living Space," and "Ready to Move."