# Preferred Tech Stack & Implementation Rules

When generating code or UI components for Relledomi Entertainment, you **MUST** strictly adhere to the following technology choices.

## Core Stack
* **Framework:** Next.js 14+ (App Router, static export preferred)
* **3D Engine:** `@react-three/fiber` (R3F) + `@react-three/drei` (mandatory for the core web experience)
* **Styling Engine:** Tailwind CSS (Mandatory. Do not use plain CSS or styled-components unless explicitly asked.)
* **Component Library:** shadcn/ui (Use these primitives as the base for all standard HTML DOM components.)
* **Animations:** GSAP (for 3D Camera / timeline sequences) + Framer Motion (for HTML UI overlays)
* **Scrolling:** Lenis (smooth scrolling for scroll-driven 3D animations)

## Implementation Guidelines

### 1. Tailwind Usage
* Use utility classes directly in JSX for all floating UI and overlay components.
* Utilize the color tokens defined in `design-tokens.json` mapped to Tailwind configuration.
* **Dark Mode:** The platform is natively dark-mode first (`bg-[#060608]`) to match the night/voxel aesthetic.

### 2. General 3D Patterns
* **Voxel Assets:** Always assume 3D geometry is loaded via `.glb` using `useGLTF` from `@react-three/drei`. Maintain strict performance budgets (<5MB for the scene).
* **Scroll-driven Camera:** The principal navigation is scroll-driven via a CatmullRomCurve3 spline. Do not implement standard standard HTML vertical layouts for the core experience; the layout is a fixed-position WebGL canvas and overlays.
* **Component Splitting:** Keep 3D components (`<Canvas />`, meshes, lights) clearly isolated from HTML overlays.

### 3. Forbidden Patterns
* Do NOT use jQuery.
* Do NOT use Bootstrap classes.
* Do NOT create new CSS files; keep styles located within component files via Tailwind.
* Do NOT use standard image-based `.png/.jpg` illustrations for the primary visual experience — it must be **Voxel 3D**.
