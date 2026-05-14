---
name: coffee-shop-design
description: Apply the Cozy Coffee Shop aesthetic to all UI components and pages in the bingo mixer app.
---

# Cozy Coffee Shop Design Guide

## Overview
Maintain a warm, inviting coffee shop atmosphere throughout the bingo mixer app. Use coffee-themed metaphors, warm color palettes, and tactile design elements to create a cozy, approachable experience.

## Color Palette
Use these CSS custom properties defined in `@theme`:
- `--color-bean`: #3e2c24 (dark espresso brown for primary text and accents)
- `--color-espresso`: #1f120c (deep black-brown for headings)
- `--color-cream`: #f8efe3 (soft cream for backgrounds and cards)
- `--color-card`: #fff4e8 (warm white for elevated surfaces)
- `--color-latte`: #c9a17e (medium brown for marked states)
- `--color-honey`: #d18f5d (golden brown for winning states)
- `--color-mocha`: #8f5f3f (muted brown for secondary text)
- `--color-ink`: #3a2316 (readable text on light backgrounds)
- `--color-milk`: #fff7ef (page background gradient base)

## Typography
- **Display font**: Georgia/Cambria serif for headings and branding
- **Body font**: System UI sans-serif for readable text
- **Hierarchy**: Use serif for main titles, sans for body and UI elements
- **Sizes**: Large, readable text with generous line heights

## Component Patterns
- **Cards**: Rounded corners (1.5-2rem), soft shadows, warm backgrounds
- **Buttons**: Rounded, elevated with shadow, hover lift effect
- **Layout**: Centered content, layered backgrounds with subtle gradients
- **Spacing**: Generous padding, breathing room between elements

## Coffee Shop Metaphors
- Bingo board → Menu board with "Today's board" header
- Free space → "Barista's choice"
- Winning → "Perfect pour" or "Bingo badge"
- Start game → "Start brewing"
- Keep playing → "Keep sipping"

## Animation & Interaction
- Subtle hover effects: translate-y lift, color transitions
- Page entrance: float-in animation for modals
- Active states: scale down on press
- Duration: 200ms for quick feedback

## Background & Atmosphere
- Layered gradients: Radial highlights, linear warm tones
- Blurred elements: Soft coffee ring effects
- Icons: Coffee cup emoji (☕) for branding

## Implementation Notes
- Use Tailwind v4 `@theme` for consistent tokens
- Prefer CSS custom properties over hardcoded values
- Maintain accessibility with good contrast ratios
- Test on various screen sizes for responsive warmth

## Code Examples

### Theme Setup (src/index.css)
```css
@theme {
  --color-bean: #3e2c24;
  --color-espresso: #1f120c;
  --color-cream: #f8efe3;
  /* ... other colors */
  --font-display: 'Georgia', serif;
  --font-body: ui-sans-serif, sans-serif;
}
```

### Card Component
```tsx
<div className="rounded-[2rem] border border-[rgba(62,44,36,0.12)] bg-[var(--color-card)] p-8 shadow-[var(--shadow-soft)]">
  {/* content */}
</div>
```

### Button Style
```tsx
<button className="rounded-[1.5rem] bg-[var(--color-bean)] px-6 py-4 text-[var(--color-cream)] shadow-[0_16px_40px_rgba(62,44,36,0.18)] transition hover:-translate-y-0.5">
  Start brewing
</button>
```

## When to Apply
- All new UI components and pages
- Updates to existing screens
- Modal and overlay designs
- Icon and illustration choices

## Exceptions
- Do not apply to non-UI code or backend logic
- Override only if a stronger theme fits the specific feature</content>
<parameter name="filePath">/workspaces/my-bingo-mixer/.github/instructions/coffee-shop-design.instructions.md