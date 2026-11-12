# Design System Specification: The Ethereal Professional

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Digital Curator."** It moves beyond the utilitarian nature of standard SaaS platforms to create an environment that feels editorial, intentional, and high-end. 

The experience is defined by **Soft Minimalism**. We achieve this not by adding elements, but by perfecting the relationship between space, light, and typography. The system rejects the rigid, "boxed-in" layout of traditional software in favor of an expansive, airy canvas. Through intentional asymmetry—such as oversized headings paired with generous lateral margins—we signal to the user that this is a premium tool designed for focus and clarity.

---

## 2. Colors & Surface Philosophy
Our palette is anchored in a sophisticated "Cool Slate" foundation, punctuated by a high-energy "Electric Indigo" primary accent.

### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be created through:
*   **Background Shifts:** Distinguish the sidebar from the main canvas using `surface` (#f6fafe) against `surface_container_low` (#f0f4f8).
*   **Tonal Nesting:** Use `surface_container_lowest` (#ffffff) for primary cards to make them "pop" naturally against the `background` without needing an outline.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of fine paper.
*   **Base:** `background` (#f6fafe)
*   **Sectioning:** `surface_container` (#eaeef2)
*   **Elevated Content:** `surface_container_lowest` (#ffffff) for cards and modals.

### The Glass & Gradient Rule
*   **Glassmorphism:** Navigation headers and floating menus must use a semi-transparent `surface` color with a `20px` backdrop-blur. This ensures the UI feels like a single cohesive environment rather than fragmented parts.
*   **Signature Textures:** Apply a subtle linear gradient from `primary` (#3525cd) to `primary_container` (#4f46e5) on main CTAs to give them "soul" and depth.

---

## 3. Typography
We utilize **Inter** for its neutral, highly legible characteristics, but we apply an aggressive scale to create an authoritative hierarchy.

| Level | Token | Size | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | 3.5rem | 700 | Hero moments, high-impact landing areas. |
| **Headline** | `headline-md` | 1.75rem | 600 | Page titles and primary section headers. |
| **Title** | `title-md` | 1.125rem | 600 | Card titles and sub-section labels. |
| **Body** | `body-md` | 0.875rem | 400 | Primary reading text (Slate/Charcoal `on_surface`). |
| **Label** | `label-md` | 0.75rem | 500 | Metadata, status badges, and small caps. |

**Editorial Note:** Use `on_surface_variant` (#464555) for secondary body text to create a soft contrast that guides the eye toward the most important information.

---

## 4. Elevation & Depth
In this system, depth is a function of light and layering, not structural lines.

*   **The Layering Principle:** Avoid shadows where tonal shifts can suffice. A `surface_container_lowest` (#ffffff) card sitting on a `surface_container_low` (#f0f4f8) background creates a "natural lift."
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use an extra-diffused shadow: `0px 12px 32px rgba(23, 28, 31, 0.06)`. Note the use of `on_surface` (#171c1f) at a very low opacity to mimic real-world ambient occlusion.
*   **The Ghost Border:** If a visual anchor is required for accessibility, use a "Ghost Border" of `outline_variant` at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Background `primary` (#3525cd), text `on_primary` (#ffffff). High-gloss finish with `1.5rem` (xl) rounded corners.
*   **Secondary:** Background `surface_container_high` (#e4e9ed), text `on_surface` (#171c1f).
*   **Interaction:** On hover, primary buttons should shift slightly toward `primary_container` with a subtle `2px` vertical lift.

### Status Badges
*   **Style:** Small caps `label-sm`, high-letter spacing (+0.05em).
*   **Container:** Use `surface_container_highest` (#dfe3e7) with a `full` (9999px) radius for a "pill" look that feels integrated.

### Input Fields
*   **Resting:** `surface_container_lowest` (#ffffff) background with a `1rem` (lg) corner radius.
*   **Focus:** Transition the "Ghost Border" to `primary` (#3525cd) at 40% opacity. Avoid heavy glow effects; keep the focus sharp and minimal.

### Cards
*   **Construction:** Zero borders. Radius set to `1.5rem` (xl). 
*   **Spacing:** Minimum internal padding of `32px` (generous white space). 
*   **Anti-Pattern:** **Never use horizontal dividers.** Use vertical white space from the spacing scale to separate header, body, and footer content within a card.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace "Wasted Space." If a layout feels a bit too empty, it’s likely just right.
*   **Do** use asymmetrical margins to create a sense of movement.
*   **Do** use `primary_fixed` (#e2dfff) for subtle background highlights behind icons or chips to draw the eye without overwhelming it.

### Don’t:
*   **Don’t** use pure black (#000000). Always use the `on_surface` (#171c1f) slate/charcoal for text.
*   **Don’t** use sharp corners. Every interactive element must have a minimum radius of `0.75rem` (md) to maintain the "Soft Minimalist" aesthetic.
*   **Don’t** use dividers or lines to separate list items. Use tonal shifts in the background hover state (`surface_container_low`) to define the hit area.