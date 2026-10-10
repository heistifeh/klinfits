# Klinfits Drop 01 — build handoff for Claude Code

Read this first. It carries everything decided in the Claude Design chat (Oct 10, 2026) so the website can be built in code.

## What we're building

A one-page Next.js site for **Klinfits** ("Clean is the standard."), Tife's drop of plain black compression tees (the Temu "Black Line" short-sleeve tee, no logos). Drop 01 is 14 shirts. Orders are by DM only for now; footer says online checkout is coming soon. The page shows the shirt, the fit and sizes, and how to order.

Stack: Next.js (App Router) + TypeScript + Tailwind, GSAP for motion. Self-host every font and image from `public/`. No Google Fonts, no Fontshare CSS link, no icon CDN.

## Files in this folder

| Path | What it is |
| --- | --- |
| `design/drop01-page.dc.html` | The approved page design from Claude Design. Source of truth for layout, copy and styles. It's a canvas file: markup inside `<x-dc>`, styles inline, and a small `Component` class at the bottom that drives the size picker. Rebuild it as React; don't ship it as is. |
| `design/tokens.json` | Design tokens: colours, type styles, spacing, radii. Map these into the Tailwind theme. |
| `design/design-system-README.md` | The Klinfits brand book: principles, voice, which token for what, patterns, icons, logo, accessibility. |
| `docs/apple-design-guide.md` | Tife's Apple HIG rules (the /apple-design-guide skill). Run its checklist (section 7) before calling anything done. |
| `docs/Klinfits-Drop01-Sizes-and-Copy.xlsx` | Size guide, copy changes and animation options. |
| `public/fonts/` | Clash Display 500/600, Switzer 400/500/600 (.woff2) + licence (ITF Free Font License, commercial use OK). |
| `public/images/` | `hero-fit.jpg`, `fit-mirror-bw.jpg`, `mood-gym.jpg`, `product-tee.png`, `klinfits-logo.png`. |
| `public/icons/` | Tabler icons from Iconify at 1.5 stroke, `currentColor`. |

### Image URLs in the design file

The design file points at canvas uploads. Swap them for these:

| In `drop01-page.dc.html` | Use |
| --- | --- |
| `/_blob/7325964ace0a2bfde26674d89c1cca8c` | `/images/klinfits-logo.png` |
| `/_blob/cc6a7c72f8ff28b7390ac5560271d0ae` | `/images/hero-fit.jpg` |
| `/_blob/f327a3251ebd8e9bacc91d6b3a920abd` | `/images/fit-mirror-bw.jpg` |
| `/_blob/95c8105cc3eb2e612cf4ac9119210c21` | `/images/mood-gym.jpg` |
| `/_blob/61501650ada1f1186a30c509e53556e9` | `/images/product-tee.png` |
| `/_blob/48e6baf30d91e6c46653e0dbf4914d3b` | `/fonts/ClashDisplay-Semibold.woff2` |
| `/_blob/5238b175f00ca17ba0c9c08f6f70e718` | `/fonts/ClashDisplay-Medium.woff2` |
| `/_blob/1c978dd146828daa8c8182c4f6850eac` | `/fonts/Switzer-Regular.woff2` |
| `/_blob/5902a277395b36bd37ef2ed821e34ed6` | `/fonts/Switzer-Medium.woff2` |
| `/_blob/97d2e3734d0343e0611f7ebd091d7016` | `/fonts/Switzer-Semibold.woff2` |

## Look and feel

- Style reference: Apple iPhone 18 Pro on Refero (styles.refero.design), with Klinfits silver replacing Apple's blue.
- Black first: `#000000` page, `#0E0E0E` nav/footer, `#1D1D1F` tiles and bands, `#333336` hairlines. Text `#F5F5F7`, muted `#86868B`.
- One accent: silver gradient `#E8E8E8 → #B8B8B8 → #7A7A7A` on the main button and one headline phrase. No other colour.
- Type: Clash Display Semibold, uppercase, for headlines (Medium for the KLINFITS wordmark). Switzer for everything else. No third family.
- Shape: 28px radius tiles and photos, full pill buttons, no shadows.
- Icons: Iconify Tabler set only, 1.5 stroke, `#B8B8B8`. Never draw icons by hand.

## Page sections

1. Thin global bar (logo + "Orders by DM") and a sticky pill nav: Drop 01 · Overview · Sizes · How to order · "DM to order".
2. Hero, split: "LOOK GOOD. TRAIN EASY." + intro + price + "DM @handle" (silver) and "Find your size" (outline). Right: `hero-fit.jpg` at 4:5 with an "On me: Size · Height" pill.
3. "Built for the session." over `mood-gym.jpg` darkened (gradient ≥74% black): three tiles: quick-dry (droplet), compression fit (shirt-sport), Black Line seams (needle-thread).
4. Sizes on `#1D1D1F`: "SNUG FIT. EASY FEEL." + advice + `fit-mirror-bw.jpg`. Light card: product thumbnail, S/M/L segmented switch, cells for Your chest / Your waist / Your height / Shirt length / In Drop 01.
5. How to get it: three step tiles (DM your size → pay to confirm → delivered) and an "Only 14 in Drop 01" block with the DM button.
6. Footer: logo, "Clean is the standard.", "Orders by DM only for now · Online checkout coming soon".

## Sizes (from the Temu charts Tife shared)

| Size | Your chest | Your waist | Your height | Shirt length | Stock |
| --- | --- | --- | --- | --- | --- |
| S | 92–96 cm | 78–82 cm | 170–175 cm | 67 cm | 3 |
| M | 96–100 cm | 82–86 cm | 175–180 cm | 69 cm | 8 |
| L | 100–105 cm | 86–91 cm | 180–185 cm | 71 cm | 3 |

The stock split is assumed until the shirts arrive (Oct 18–30). Don't show the chart's shirt-chest or sleeve figures. Don't use the Temu size chart images.

## Voice rules

- Sell comfort plus looking good: fitted, sits close, snug, moves with you, comfortable. Never "tight", and never "the shirt I train in".
- Short and first person. No hype, no exclamation marks, no invented stats.
- Prices as ₦14,000. Unknown facts stay as visible [PLACEHOLDERS] until real.

## Still open (ask Tife, don't invent)

- Price (range discussed: ₦13,000–15,000)
- Handle and platform. The DM buttons should open the DM directly (e.g. `https://ig.me/m/<handle>` for Instagram).
- Tife's size and height for the "On me" pill
- Delivery: city + days, elsewhere + days
- Final stock per size
- Copy: "Wear it this week" (may over-promise) and "No waiting on Temu" (names the supplier; suggested "No waiting weeks for a parcel")
- Hero line about stock being in Nigeria: only once it is

## Motion (GSAP), agreed but not built

- Size switch: option 1. Numbers roll to the new values, the selected pill slides, the product thumbnail scales slightly. Options 2 and 3 (resized photo, one model per size) wait for new photos.
- Page: hero fades up, tiles rise on scroll (ScrollTrigger), a slow shimmer across silver buttons.
- Keep it calm: 0.4–0.8s, ease-out; respect `prefers-reduced-motion`.

## Rules carried from the design pass

- Tap targets ≥44px; ~12px around pills, ~24px around text links.
- Body 17px, nothing under 11px; works at 200% zoom.
- Contrast 4.5:1 up to 17px, 3:1 at 18px+ or bold. Use the README's guaranteed pairs.
- Pressed state (scale 0.97) and a visible focus ring on every button and link.
- Phone first: 390px wide, 16px margins, widening to 24px. Sticky nav clear of the iPhone safe area (`viewport-fit=cover` + `env(safe-area-inset-top)`).
- At most two silver buttons in view; labels start with a verb.

## Where the design lives

- Canvas: https://claude.ai/artifact/HHSJGK9YkZvgewo3hLpsDm
- Design system: https://claude.ai/artifact/QLCYU2Fq3eq72Dbv64Kevf
- Project doc: `claude/klinfits-design-handoff.md` in the KLINFITS claude.ai project
