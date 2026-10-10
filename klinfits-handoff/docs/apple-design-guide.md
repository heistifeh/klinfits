---
name: "apple-design-guide"
description: "Apply Apple Human Interface Guidelines numbers (tap targets, type scale, spacing, contrast, color) whenever Tife designs an app or mobile screen, and on the Klinfits website."
---

# Apple design guide

A working summary of Apple's Human Interface Guidelines (HIG), written as rules to check designs against. Numbers come from the HIG's own tables (developer.apple.com/design/human-interface-guidelines, read October 2026) unless marked **Convention**, which means a common iOS value the HIG does not state as a rule. If something here looks out of date, re-check the live HIG page before relying on it.

## When to use

- Any app or mobile screen: iOS, iPadOS, React Native / Expo, Flutter, mobile web, app mockups.
- The Klinfits website (the Drop 01 page and anything after it). Use the web mapping below, and let the Klinfits design system win on brand choices (Anton headlines, silver accent, black grounds).
- Use it while designing, then run the checklist at the end before handing the design over.

## 1. Tap targets and control size

| Platform | Default control size | Minimum control size |
| --- | --- | --- |
| iOS, iPadOS | 44 × 44 pt | 28 × 28 pt |
| macOS | 28 × 28 pt | 20 × 20 pt |
| tvOS | 66 × 66 pt | 56 × 56 pt |
| visionOS | 60 × 60 pt | 28 × 28 pt |
| watchOS | 44 × 44 pt | 28 × 28 pt |

- Every button's hit region is at least 44 × 44 pt (60 × 60 pt in visionOS), even when the visible shape is smaller. Pad the hit area instead of shrinking it.
- Spacing around controls: about 12 pt around controls that have a bezel (a visible shape or fill); about 24 pt around the visible edges of controls without one (plain text or icon buttons).
- visionOS: button sizes Mini 28, Small 32, Regular 44, Large 52, Extra large 64 pt. Button centres at least 60 pt apart. Buttons 60 pt or larger get 4 pt of extra padding for hover.
- macOS image buttons: about 10 px between the image and the button edge.

## 2. Type

### Default and minimum sizes

| Platform | Default | Minimum |
| --- | --- | --- |
| iOS, iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

### iOS / iPadOS Dynamic Type, Large (default) size

| Style | Weight | Size | Leading | Emphasized |
| --- | --- | --- | --- | --- |
| Large Title | Regular | 34 | 41 | Bold |
| Title 1 | Regular | 28 | 34 | Bold |
| Title 2 | Regular | 22 | 28 | Bold |
| Title 3 | Regular | 20 | 25 | Semibold |
| Headline | Semibold | 17 | 22 | Semibold |
| Body | Regular | 17 | 22 | Semibold |
| Callout | Regular | 16 | 21 | Semibold |
| Subhead | Regular | 15 | 20 | Semibold |
| Footnote | Regular | 13 | 18 | Semibold |
| Caption 1 | Regular | 12 | 16 | Semibold |
| Caption 2 | Regular | 11 | 13 | Semibold |

All sizes in pt. Point sizes assume 144 ppi for @2x and 216 ppi for @3x artwork.

### macOS built-in styles

| Style | Weight | Size | Line height | Emphasized |
| --- | --- | --- | --- | --- |
| Large Title | Regular | 26 | 32 | Bold |
| Title 1 | Regular | 22 | 26 | Bold |
| Title 2 | Regular | 17 | 22 | Bold |
| Title 3 | Regular | 15 | 20 | Semibold |
| Headline | Bold | 13 | 16 | Heavy |
| Body | Regular | 13 | 16 | Semibold |
| Callout | Regular | 12 | 15 | Semibold |
| Subheadline | Regular | 11 | 14 | Semibold |
| Footnote | Regular | 10 | 13 | Semibold |
| Caption 1 | Regular | 10 | 13 | Medium |
| Caption 2 | Medium | 10 | 13 | Semibold |

### tvOS (partial)

Title 1 Medium 76/96, Title 2 Medium 57/66, Title 3 Medium 48/56, Headline Medium 38/46, Subtitle 1 Regular 38/46 (size/leading in pt).

### Type rules

- Text should scale to at least 200% (140% on watchOS) without breaking the layout. Design every screen at the default size and at a large accessibility size.
- Prefer Regular, Medium, Semibold or Bold. Avoid Ultralight, Thin and Light, especially at small sizes. A thin custom font needs sizes above the minimums.
- Use the text styles, not one-off sizes. Body text is 17 pt on iPhone; nothing below 11 pt.
- visionOS uses bolder Body and Title styles and adds Extra Large Title 1 and 2.

## 3. Contrast and colour

| Text size | Weight | Minimum contrast |
| --- | --- | --- |
| Up to 17 pt | Any | 4.5:1 |
| 18 pt and up | Any | 3:1 |
| Any size | Bold | 3:1 |

- Never use colour alone to show status or interactivity; add a label, icon shape or fill change.
- Every custom colour needs a light and a dark variant, plus an increased-contrast version of each.
- Keep one colour meaning one thing across the app. Apply accent colour sparingly: status and primary actions, not the background of many controls.
- Don't repurpose semantic colours (for example, separator colour as text).
- Background hierarchy: primary for the whole view, secondary for groups in it, tertiary for groups inside those (grouped variants for grouped lists).
- Wide-colour images: Display P3, 16 bits per channel, PNG. sRGB is the safe default.
- Don't hard-code system colours in native code (use the system colour APIs). For mockups and the web, these are the reference values:

| Colour | Light | Dark | Light, high contrast | Dark, high contrast |
| --- | --- | --- | --- | --- |
| Red | 255 56 60 | 255 66 69 | 233 21 45 | 255 97 101 |
| Orange | 255 141 40 | 255 146 48 | 197 83 0 | 255 160 86 |
| Yellow | 255 204 0 | 255 214 0 | 161 106 0 | 254 223 67 |
| Green | 52 199 89 | 48 209 88 | 0 137 50 | 74 217 104 |
| Mint | 0 200 179 | 0 218 195 | 0 133 117 | 84 223 203 |
| Teal | 0 195 208 | 0 210 224 | 0 129 152 | 59 221 236 |
| Cyan | 0 192 232 | 60 211 254 | 0 126 174 | 109 217 255 |
| Blue | 0 136 255 | 0 145 255 | 30 110 244 | 92 184 255 |
| Indigo | 97 85 245 | 109 124 255 | 86 74 222 | 167 170 255 |
| Purple | 203 48 224 | 219 52 242 | 176 47 194 | 234 141 255 |
| Pink | 255 45 85 | 255 55 95 | 231 18 77 | 255 138 196 |
| Brown | 172 127 94 | 183 138 102 | 149 109 81 | 219 166 121 |

(RGB values. Red and green differ mostly in hue, so never pair them as the only signal.)

## 4. Layout and spacing

- Respect safe areas: nothing interactive under the status bar, Dynamic Island, rounded corners or home indicator.
- Size classes: compact and regular, per width and height. Design for compact width (iPhone portrait) first, then regular.
- **Convention:** standard side margins 16 pt on iPhone (compact width), 20 pt on iPad (regular width).
- **Convention:** navigation bar 44 pt (standard title), tab bar 49 pt plus the home-indicator inset.
- **Convention:** common iPhone canvases 390 × 844 pt and 430 × 932 pt (Pro Max class); iPad 820 × 1180 pt (11-inch class) and 1024 × 1366 pt (13-inch class). Check new device sizes before a release.
- tvOS: inset content 60 pt top and bottom, 80 pt at the sides; grids use 40 pt horizontal and at least 100 pt vertical spacing (2 columns 860 pt wide, 3 → 560, 4 → 410, 5 → 320, 6 → 260, 7 → 217, 8 → 184, 9 → 160).
- One main task per screen where you can; break long flows into steps.

## 5. Components

### Buttons

- One or two prominent (filled) buttons per view, for the most likely action.
- Show which option is preferred by style, not size. Buttons in a set share one size.
- Labels say the action and start with a verb ("Add to cart", "DM to order").
- Never give the primary role to a destructive action, even if it is the likely choice.
- Every custom button has a pressed state.
- If an action takes time, show a spinner or change the label ("Checkout" → "Checking out…").
- Button labels must not use a colour close to the background they sit on.

### Tab bars

- Tabs are for moving between sections, never for actions (actions go in a toolbar).
- Keep the tab bar visible across sections; only a modal may cover it.
- Use as few tabs as the app needs; on iPadOS, keep a customisable default list to five or fewer. Avoid overflow into a More tab.
- Every tab has a label (one word where possible) and a filled SF Symbol style icon.
- Don't hide or disable a tab when its content is empty; show an empty state that explains why.
- Badges (red oval, white number or "!") only for critical information.

## 6. The Klinfits website

The HIG is written for apps, so on the web treat 1 pt as 1 CSS px and apply it like this:

- Every link and button at least 44 × 44 px; pills in the Klinfits system are 48 px (44 px in the sticky nav). Keep about 12 px between filled pills and 24 px around text links.
- Body copy 17 px, nothing under 11 px; captions 13 px. Text must survive 200% browser zoom without overlapping or horizontal scroll.
- Contrast: 4.5:1 for text up to 17 px, 3:1 at 18 px and up or bold. Use the Klinfits README's guaranteed pairs (porcelain on black, ash on black or carbon, black on the silver gradient).
- At most one or two silver (prominent) buttons per screen area.
- Phone width first: design at 390 px wide with 16 px side margins, then widen. Keep the sticky nav clear of the iPhone safe area (use `env(safe-area-inset-*)` with `viewport-fit=cover`).
- Brand choices (Anton, uppercase headlines, silver gradient, black grounds) come from the Klinfits design system and override Apple's look; the numbers above still apply.

## 7. Checklist before handing over a design

1. Every tappable thing is at least 44 × 44 pt (60 in visionOS) with 12 / 24 pt of space around it.
2. Text uses the platform's text styles; body 17 pt on iPhone; nothing under the platform minimum.
3. Every text/background pair meets 4.5:1 (≤ 17 pt) or 3:1 (≥ 18 pt or bold).
4. No state or meaning shown by colour alone.
5. Light, dark and increased-contrast variants exist for custom colours (native apps).
6. Layout works at the default text size and at 200%.
7. Safe areas respected; margins 16 pt (iPhone) / 20 pt (iPad).
8. One or two prominent buttons per view; verb labels; pressed and loading states; destructive actions never primary.
9. Tab bar for navigation only, always labelled, nothing hidden or disabled.
10. Say which checks you could not verify (for example, contrast of text over a photo).