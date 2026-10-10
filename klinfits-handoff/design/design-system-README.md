# Klinfits

Clean is the standard.

Klinfits sells plain, logo-free compression tees in drops, promoted through Tife's own gym posts and sold by DM. The look borrows from a premium product launch: black stages, one product under a spotlight, rounded tiles, pill buttons. Metallic silver is the only accent. Visual reference: the Apple iPhone 18 Pro style on Refero (styles.refero.design), with Klinfits silver in place of Apple's blue.

## Principles

- Dark first. Pages sit on `black`; raised chrome uses `graphite`, tiles and bands use `carbon`.
- One accent. The silver gradient (`silver-100` → `silver-300` → `silver-500`) marks the one main action on screen and, at most, one highlighted headline phrase. No other colour.
- The product is the hero. Big photo stages, little chrome, no decoration around them.
- Round, not sharp. Tiles and media take `radius-tile`; buttons and badges are full pills (`radius-pill`).
- Flat. No shadows. Sections separate by surface colour and 1px `steel` hairlines.
- Uppercase is for the display face only. Body copy, buttons and labels are sentence case.

## Voice

Short, first-person, gym-floor plain. Tife talks to the buyer directly.

- The message is comfort plus looking good: the shirt fits close, moves with you, and makes you look sharp while you train. Say "fitted", "sits close", "snug", "moves with you", "comfortable". Never sell it as "tight", and never frame it as "the shirt I train in" (it's about what the shirt does for the wearer).
- Do: "Look good. Train easy." · "Snug fit. Easy feel." · "DM your size."
- Don't: hype words, exclamation marks, invented stats, or promises about delivery times that aren't confirmed.
- Prices in naira with the ₦ sign and a comma: ₦14,000.
- Unknown facts stay as visible placeholders in brackets, e.g. [YOUR PRICE], until they are real.

## Using tokens

| Need | Token |
| --- | --- |
| Page background | `black` |
| Nav, footer, photo stage | `graphite` |
| Tile, band | `carbon` |
| Border, hairline | `steel` |
| Main text on dark | `porcelain` |
| Muted text on dark | `ash` |
| Eyebrow label, line icons | `silver-300` |
| Primary button | gradient `silver-100` → `silver-300` → `silver-500`, label in `on-silver` |
| Secondary button | transparent, 1px `slate` outline, `porcelain` label |
| Light spec card | `porcelain` ground, `white` cells, `hairline-light` dividers, `slate` labels |

## Typography

Both faces come from Fontshare (fontshare.com, Indian Type Foundry), free for commercial use.

- `display`: **Clash Display**, Semibold 600, always uppercase, tight leading (0.95–1). Clean geometric caps with sharp, confident cuts: athletic without being loud, which matches "Clean is the standard." Use it for `display-hero`, `display-section`, `display-sub`, and Medium 500 for the `wordmark`.
- `sans`: **Switzer**, Regular 400, Medium 500 and Semibold 600. A Swiss neo-grotesk, the closest Fontshare match to Apple's SF Pro, so the Apple-style layout reads right. It handles 13–21px UI text cleanly. Use it for everything else.
- Files in `fonts/` (self-hosted .woff2 from the official Fontshare download, ITF Free Font License): ClashDisplay-Semibold (600), ClashDisplay-Medium (500), Switzer-Regular (400), Switzer-Medium (500), Switzer-Semibold (600). Use only these weights. Never mix in a third family.
- Pages load these files with `@font-face`; don't link Fontshare's CSS or Google Fonts for them. If a file fails, the stacks fall back to system fonts.

Spacing: sections get `space-section` top and bottom; tiles pad `space-8` and sit `space-4` apart. Content is capped at 1180px wide with a `space-6` gutter (`space-4` on phones).

## Patterns

No coded components yet. These are the patterns the Drop 01 page uses; build them the same way every time.

- Pill button: min height 48px (44px in the nav), `radius-pill`, `button` style. Primary is silver, secondary is outlined. One primary per screen area.
- Tile: `carbon`, `radius-tile`, `space-8` padding, a silver-300 line icon, a `title`, then `body` in `ash`.
- Sticky nav: a `graphite` bar with a `steel` border and `radius-nav`, product name on the left, `nav` links and one primary pill on the right.
- Photo stage: `graphite`, `radius-tile`, 16:10. An "On me: Size · Height" badge sits bottom-left as a pill.
- Spec card: the one light surface. A segmented S/M/L switch (track `mist`, selected pill `black` with `porcelain` text) above a grid of `white` cells.
- Step tile: a tile with a numbered circle (1px `slate` ring) for ordering steps.

## Iconography

Icons come only from Iconify (icon-sets.iconify.design), using the Tabler set. Never hand-draw or generate an icon. Use them as thin line icons: 1.5px stroke (Tabler ships at 2, so change it), 24px grid, shown at 24–32px, `silver-300` on dark, no fills, no emoji. Pick the literal match (tabler:droplet for quick-dry, tabler:shirt-sport for fit). The ones in use are in Assets › Icons.

## Logo

The KF mark lives in Assets › Logos. Use it on black only, at 32px in the global bar and up to 160px in the footer. Don't recolour, stretch or put it on the light card. Beside the mark, the name is set in the `wordmark` style.

## Accessibility

- Guaranteed pairs: `porcelain` on `black`, `graphite` or `carbon`; `ash` on `black` (5.8:1) or `carbon` (4.7:1); `silver-300` on `black`; `on-silver` on any part of the silver gradient (4.9:1 at its darkest); `slate` on `porcelain` (4.7:1).
- `steel` is for borders only, never text.
- Contrast minimums (Apple HIG): 4.5:1 for text up to 17px, 3:1 at 18px and up or bold, 3:1 for control borders, icons and focus rings.
- Touch targets at least 44 × 44px, even when the visible shape is smaller. Buttons are real `<button>` or `<a>` elements.
- Space around controls: about 12px around filled pills, about 24px around plain text links and icon buttons.
- Body text 17px; nothing below 11px. Pages must still work at 200% zoom.
- Every button and link has a pressed state (slight scale-down) and a visible focus ring (2px `porcelain`, `black` on the light card).
- One or two silver (prominent) buttons per screen area; labels start with a verb.
- Phone first: design at 390px wide with 16px side margins (`space-4`), widening to 24px (`space-6`). Keep fixed and sticky bars clear of the iPhone safe area with `env(safe-area-inset-*)`.
- The selected size is shown by a filled pill and `aria-pressed`, not by colour alone.
- The full numbers live in the /apple-design-guide skill; run its checklist before handing a design over.
