---
name: Kinetic Logic
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecf9'
  surface-container-high: '#eae6f4'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effc'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2.5rem
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

This design system is built on a foundation of **Minimalism** and **High-Contrast** utility, tailored specifically for high-velocity SaaS environments. The brand personality is professional, precise, and unobtrusive, ensuring that the interface never competes with the user's data.

The aesthetic prioritizes clarity through generous whitespace, razor-sharp alignment, and a sophisticated use of color to signal state rather than decoration. The goal is to evoke a sense of focused productivity and "digital calm," where the UI feels like a transparent tool that recedes when not in use.

## Colors

The palette is anchored by a high-energy Indigo primary, used strictly for core actions and active states. 

- **Primary Action:** Indigo (#4F46E5) for buttons, active navigation, and primary focus states.
- **Surface & Background:** A clean, slightly cool Slate-White (#F9FAFB) minimizes eye strain during long working sessions.
- **Semantic Logic:** Color is used as a functional language. Statuses utilize distinct hues (Slate for Todo, Indigo for Progress, Green for Completion) to provide instant peripheral feedback. 
- **Urgency Matrix:** Priorities follow a standard traffic-light mental model with Rose-Red for High Priority to ensure critical tasks are never missed.

## Typography

The design system utilizes **Inter** exclusively for its exceptional legibility in data-dense interfaces. 

- **Headlines:** Use a tighter letter-spacing and heavier weights to create a strong hierarchy.
- **Body:** Standardized at 16px for primary reading and 14px for metadata/secondary info.
- **Labels:** Small caps are reserved for table headers and section titles to differentiate them from actionable text.
- **Responsiveness:** Large headlines scale down on mobile to prevent awkward line breaks in task titles.

## Layout & Spacing

The layout follows a **Fluid Grid** approach within a fixed max-width container (1440px). 

- **Grid:** A 12-column system is used for dashboard layouts.
- **Board View:** For Kanban, columns are fixed at 280px-320px width with horizontal overflow, ensuring cards maintain a readable aspect ratio.
- **List View:** Rows use a 48px or 56px fixed height to maintain vertical rhythm.
- **Spacing:** Everything is based on a 4px baseline. Use `md` (16px) for standard gutters and `lg` (24px) for major section separation.

## Elevation & Depth

This system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to denote depth.

- **Level 0 (Background):** #F9FAFB.
- **Level 1 (Cards/Sidebar):** White (#FFFFFF) with a 1px border of #E2E8F0. No shadow in rest state.
- **Level 2 (Hover/Active):** Subtle ambient shadow (Y: 4px, Blur: 6px, Opacity: 4%) to indicate interactivity.
- **Modals:** Use a higher elevation with a 12% opacity shadow and a 40% Slate backdrop blur to focus the user's attention.

## Shapes

The shape language is **Soft**, striking a balance between the clinical feel of sharp corners and the overly casual nature of fully rounded elements.

- **Base Radius:** 4px (0.25rem) for small components like checkboxes and tags.
- **Large Radius:** 8px (0.5rem) for task cards, input fields, and buttons.
- **Containers:** 12px (0.75rem) for modals and main dashboard panels.

## Components

### Buttons & Inputs
- **Primary Button:** Solid Indigo with White text. High-contrast, 8px radius.
- **Input Fields:** White background, 1px Slate-200 border. Focus state uses a 2px Indigo ring with 20% opacity.

### Task Cards
- Cards feature a left-aligned colored border (2px width) that matches their Status color.
- Interactive cards should subtly lift (Level 2 elevation) on hover.

### Badges (Status & Priority)
- **Status Badges:** Subtle pill shapes. Use a "Subtle Tint" style: Background color at 10% opacity of the hex, with 100% opacity text color for readability.
- **Priority Badges:** High-contrast text with an associated icon (e.g., Chevron Up for High, Dash for Low) to aid accessibility.

### Views
- **Kanban Board:** Columns are styled as Level 0 surfaces with "ghost" add-button placeholders at the bottom.
- **Tables:** Rows feature a hover state of #F1F5F9. Columns for Priority and Due Date must be fixed-width to ensure alignment across different task lengths.