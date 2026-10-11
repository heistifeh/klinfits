# Klinfits — project rules for Claude

One-page site for **Klinfits** ("Clean is the standard."): Drop 01, 14 plain black compression tees, orders by DM only.
Read [HANDOFF.md](klinfits-handoff/HANDOFF.md) at the start of any build session. This file is the summary; the handoff files win if they disagree.

## Source files

| File | Use it for |
| --- | --- |
| [docs/BUILD-PLAN.md](docs/BUILD-PLAN.md) | Agreed build plan and Tife's decisions. Follow its build order; its decisions override the handoff where they differ |
| [HANDOFF.md](klinfits-handoff/HANDOFF.md) | Scope, page sections, size table, open questions, motion plan, image URL swaps |
| [design/drop01-page.dc.html](klinfits-handoff/design/drop01-page.dc.html) | Approved design. Source of truth for layout, copy and styles. Rebuild as React; never ship it as is |
| [design/tokens.json](klinfits-handoff/design/tokens.json) | Colours, type styles, spacing, radii. Map into the Tailwind theme; don't hard-code hex values in components |
| [design/design-system-README.md](klinfits-handoff/design/design-system-README.md) | Brand book: principles, voice, token usage, patterns, icons, logo, accessibility |
| [docs/apple-design-guide.md](klinfits-handoff/docs/apple-design-guide.md) | Apple HIG numbers and the pre-handover checklist (section 7) |
| [docs/Klinfits-Drop01-Sizes-and-Copy.xlsx](klinfits-handoff/docs/Klinfits-Drop01-Sizes-and-Copy.xlsx) | Size guide, copy changes, animation options |
| `klinfits-handoff/public/` | Original assets. Images and icons are copied into `public/`, fonts into `assets/fonts/` |

The design file references `/_blob/...` canvas uploads. Replace them using the table in HANDOFF.md ("Image URLs in the design file").

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind v4. GSAP (+ ScrollTrigger) for motion. Read `AGENTS.md` and the bundled Next docs before using an unfamiliar API.
- Self-host every font, image and icon. No Google Fonts, no Fontshare CSS link, no icon CDN.
- Tokens: edit `klinfits-handoff/design/tokens.json` or `tokens/extra.json`, then `npm run tokens` (writes `app/theme.css` + `tokens/resolved.json`; never edit those by hand). In TS, read values via `lib/tokens.ts`.
- `npm run check:tokens` fails on hex colours or font names outside `app/theme.css` / `app/fonts.ts`. Run it with `lint`, `typecheck` and `build` before calling work done.
- Fonts: `app/fonts.ts` (next/font/local) loads `assets/fonts/*.woff2`. Not in `public/`, so only next/font's hashed copies are served.
- Font files are gitignored while github.com/heistifeh/klinfits is public (the ITF licence bans redistribution). Only remove that ignore rule after `gh repo view heistifeh/klinfits --json visibility` says PRIVATE.
- Logos: `npm run logos` rebuilds `public/images/kf-mark.png`, `klinfits-lockup.png`, `app/icon.png` and `app/apple-icon.png` from the handoff PNG (crop/resize only).

## Brand rules

- **Dark first.** Grounds: `black` #000000 page, `graphite` #0E0E0E nav/footer/photo stage, `carbon` #1D1D1F tiles and bands, `steel` #333336 hairlines (borders only, never text).
- **Text:** `porcelain` #F5F5F7 main, `ash` #86868B muted, `silver-300` #B8B8B8 eyebrows and icons.
- **One accent:** silver gradient `silver-100` #E8E8E8 → `silver-300` #B8B8B8 → `silver-500` #7A7A7A, label in `on-silver` (black). Only on the main button and at most one headline phrase. No other colour, anywhere.
- **Type:** Clash Display Semibold 600, always uppercase, leading 0.95–1, for headlines; Clash Display Medium 500 for the KLINFITS wordmark only. Switzer 400/500/600 for everything else, in sentence case. No third family, no other weights.
- **Shape:** 28px radius (`radius-tile`) on tiles and photos, full pills for buttons and badges. Flat: no shadows. Separate sections by surface colour and 1px `steel` hairlines.
- **Icons:** Iconify Tabler set only, 1.5 stroke (Tabler ships at 2), 24px grid shown at 24–32px, `silver-300`, `currentColor`, no fills, no emoji. Never hand-draw or generate an icon. In use: droplet, shirt-sport, needle-thread, camera.
- **Logo:** KF mark on black only, 32px in the global bar, up to 160px in the footer. Never recolour, stretch or put it on the light card.
- **Light spec card** is the only light surface: `porcelain` ground, `white` cells, `hairline-light` dividers, `slate` labels, S/M/L switch on a `mist` track with a `black` selected pill.
- **Layout:** content max 1180px; gutter 16px on phones, 24px wider. Sections use `space-section`; tiles pad `space-8`, gap `space-4`.
- Build the patterns (pill button, tile, sticky nav, photo stage, spec card, step tile) exactly as described in the README's "Patterns" section, and reuse them.

## Voice rules

- Short, first person, gym-floor plain. Tife talks to the buyer directly.
- Sell comfort plus looking good: "fitted", "sits close", "snug", "moves with you", "comfortable".
- Never "tight". Never "the shirt I train in".
- No hype words, no exclamation marks, no invented stats, no unconfirmed delivery promises.
- Prices as ₦14,000 (₦ sign, comma).
- Button labels start with a verb ("DM to order", "Find your size").
- Unknown facts stay as visible bracketed placeholders, e.g. `[YOUR PRICE]`, until Tife confirms them.

## Do not invent — ask Tife

These are open (see HANDOFF.md "Still open"). Use placeholders, not guesses:

- Price (range discussed ₦13,000–15,000)
- DM handle and platform (buttons must open the DM directly, e.g. `https://ig.me/m/<handle>`)
- Tife's size and height for the "On me" pill
- Delivery city/days and elsewhere/days
- Final stock per size (current S 3 / M 8 / L 3 is assumed)
- Copy: "Wear it this week" and "No waiting on Temu" (suggested: "No waiting weeks for a parcel")
- Any "stock is in Nigeria" line, until it is true

Size data: use only Your chest / Your waist / Your height / Shirt length / stock from the HANDOFF size table. Never show the Temu shirt-chest or sleeve figures, and never use the Temu size chart images.

## Motion

- Agreed: size switch option 1 (numbers roll, selected pill slides, thumbnail scales slightly); hero fades up; tiles rise on scroll; slow shimmer on silver buttons.
- Calm: 0.4–0.8s, ease-out. Respect `prefers-reduced-motion` (no movement, instant state changes).
- Size-switch options 2 and 3 wait for new photos. Don't build them.

## Apple checklist (run before calling anything done)

Web mapping: 1pt = 1 CSS px. Full detail in [apple-design-guide.md §7](klinfits-handoff/docs/apple-design-guide.md).

1. Every link and button has a hit area of at least 44 × 44px (pills are 48px, 44px in the nav), with ~12px around filled pills and ~24px around text links and icon buttons.
2. Body 17px, captions 13px, nothing under 11px.
3. Contrast: 4.5:1 for text up to 17px, 3:1 at 18px+ or bold, 3:1 for control borders, icons and focus rings. Stick to the README's guaranteed pairs.
4. No state shown by colour alone. The selected size uses a filled pill and `aria-checked` (radio group).
5. Works at 200% browser zoom: no overlap, no horizontal scroll.
6. Phone first at 390px wide, 16px margins, widening to 24px. `viewport-fit=cover` + `env(safe-area-inset-*)` keep the sticky nav clear of the notch.
7. At most two silver buttons in view; verb labels; real `<button>`/`<a>` elements.
8. Every button and link has a pressed state (scale 0.97) and a visible focus ring (2px `porcelain`, `black` on the light card). Show loading states for slow actions.
9. Reduced motion honoured.
10. Report which checks you could not verify (e.g. contrast of text over photos, the darkened `mood-gym.jpg` band needs a ≥74% black gradient).

## Reference links

- Design canvas: https://claude.ai/artifact/HHSJGK9YkZvgewo3hLpsDm
- Design system: https://claude.ai/artifact/QLCYU2Fq3eq72Dbv64Kevf
