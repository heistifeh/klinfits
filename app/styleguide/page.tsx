import type { Metadata } from 'next';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Logo } from '@/components/ui/Logo';
import { PillButton } from '@/components/ui/PillButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tile } from '@/components/ui/Tile';
import { cx } from '@/lib/cx';
import favicon from '@/app/icon.png';
import { colors, containers, families, radii, spacing, types } from '@/lib/tokens';

// TEMPORARY: a review page for the foundation. Delete before launch.

export const metadata: Metadata = {
  title: 'Styleguide · Klinfits',
  robots: { index: false, follow: false },
};

// Written out in full so Tailwind can see every class.
const typeClass: Record<string, string> = {
  'display-hero': 'text-display-hero',
  'display-section': 'text-display-section',
  'display-band': 'text-display-band',
  'display-sub': 'text-display-sub',
  wordmark: 'text-wordmark',
  eyebrow: 'text-eyebrow',
  lead: 'text-lead',
  title: 'text-title',
  spec: 'text-spec',
  body: 'text-body',
  button: 'text-button',
  nav: 'text-nav',
  caption: 'text-caption',
  advice: 'text-advice',
  price: 'text-price',
  note: 'text-note',
  micro: 'text-micro',
  step: 'text-step',
};

// Swatches that need an outline to be visible on the black page.
const darkSwatches = new Set(['black', 'graphite', 'carbon', 'on-silver']);

// The family's name as written in tokens.json, e.g. the first entry of its stack.
function familyName(family: string): string {
  const stack = families.find((f) => f.name === family)?.stack ?? family;
  return stack.split(',')[0].replaceAll('"', '').trim();
}

const states = [
  { label: 'Default', demo: undefined },
  { label: 'Hover', demo: 'hover' },
  { label: 'Pressed', demo: 'pressed' },
  { label: 'Focus', demo: 'focus' },
] as const;

function Section({ id, title, note, children }: { id: string; title: string; note?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="flex flex-col gap-6 border-t border-steel py-14">
      <div className="flex flex-col gap-2">
        <h2 id={`${id}-title`} className="text-title">
          {title}
        </h2>
        {note && <p className="max-w-2xl text-caption text-ash">{note}</p>}
      </div>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <main className="mx-auto max-w-content px-4 pb-section sm:px-6">
      <header className="flex flex-col gap-4 pt-16 pb-14">
        <p className="text-eyebrow text-silver-300">Temporary review page</p>
        <h1 className="font-display text-display-section uppercase">Styleguide</h1>
        <p className="max-w-2xl text-lead text-ash">
          Every token from tokens.json and tokens/extra.json, the shared components and the KF mark. Nothing here is
          the Drop 01 page.
        </p>
      </header>

      <Section id="colours" title="Colours" note="All 14 colour tokens. Tailwind's default palette is switched off.">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((c) => (
            <li key={c.name} className="flex gap-4 rounded-cell bg-carbon p-4">
              <span
                className={cx('size-16 shrink-0 rounded-cell', darkSwatches.has(c.name) && 'border border-steel')}
                style={{ backgroundColor: `var(--color-${c.name})` }}
                aria-hidden="true"
              />
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-note font-semibold">{c.name}</span>
                <span className="text-caption text-silver-300">{c.value}</span>
                <span className="text-caption text-ash">{c.usage}</span>
              </span>
            </li>
          ))}
          <li className="flex gap-4 rounded-cell bg-carbon p-4">
            <span className="size-16 shrink-0 rounded-cell bg-silver" aria-hidden="true" />
            <span className="flex min-w-0 flex-col gap-1">
              <span className="text-note font-semibold">bg-silver</span>
              <span className="text-caption text-silver-300">silver-100 → silver-300 → silver-500, 100°</span>
              <span className="text-caption text-ash">Primary pill only.</span>
            </span>
          </li>
        </ul>
      </Section>

      <Section
        id="type"
        title="Type"
        note={`Every type style. Display: ${familyName('display')}, uppercase. Text: ${familyName('sans')}. Fluid sizes grow from 390px wide to where the design reaches its maximum.`}
      >
        <ul className="flex flex-col">
          {types.map((t) => (
            <li key={t.name} className="flex flex-col gap-3 border-b border-steel py-6 last:border-b-0">
              <span className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-ash">
                <span className="font-semibold text-porcelain">{t.name}</span>
                <span>{t.fluid ? `${t.fluid[0]}–${t.fluid[1]}px fluid` : t.fontSize}</span>
                <span>
                  {familyName(t.family)} {t.fontWeight}
                </span>
                <span>line height {t.lineHeight}</span>
                {t.letterSpacing && <span>tracking {t.letterSpacing}</span>}
                {t.source === 'extra.json' && <span className="text-silver-300">from extra.json</span>}
              </span>
              <span
                className={cx(
                  'min-w-0 break-words',
                  typeClass[t.name] ?? 'text-body',
                  t.family === 'display' && 'font-display uppercase',
                )}
              >
                {typeClass[t.name] ? t.sample : `Missing utility for ${t.name}`}
              </span>
              <span className="text-caption text-ash">{t.usage}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 rounded-tile bg-graphite p-8">
          <p className="text-caption text-ash">Silver headline phrase (text-silver), the only one on the page:</p>
          <SectionHeading as="p" size="hero" lines={['Look good.', 'Train easy.']} silverLine={1} />
        </div>
      </Section>

      <Section id="buttons" title="Pill buttons" note="Hover, pressed and focus are forced on for review. The live row underneath responds to your mouse, finger and Tab key.">
        <div className="flex flex-col gap-8">
          {(['primary', 'secondary'] as const).map((variant) => (
            <div key={variant} className="flex flex-col gap-4">
              <h3 className="text-eyebrow text-silver-300">{variant === 'primary' ? 'Primary (silver)' : 'Secondary (outline)'}</h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-6">
                {states.map((s) => (
                  <li key={s.label} className="flex flex-col items-start gap-2">
                    <PillButton href="#buttons" variant={variant} data-demo={s.demo} tabIndex={-1} aria-hidden="true">
                      {variant === 'primary' ? 'DM to order' : 'Find your size'}
                    </PillButton>
                    <span className="text-caption text-ash">{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h3 className="text-eyebrow text-silver-300">Live</h3>
            <div className="flex flex-wrap items-center gap-3">
              <PillButton href="#buttons">DM @[YOUR HANDLE]</PillButton>
              <PillButton href="#buttons" variant="secondary">
                Find your size
              </PillButton>
              <span className="rounded-nav border border-steel bg-graphite p-2">
                <PillButton href="#buttons" size="nav">
                  DM to order
                </PillButton>
              </span>
            </div>
            <p className="text-caption text-ash">Default 48px tall · nav size 44px tall, shown in a graphite nav bar.</p>
          </div>
        </div>
      </Section>

      <Section id="tiles" title="Tiles" note="Feature tile with a Tabler icon at 1.5 stroke, and a step tile.">
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Tile as="li" icon="droplet" title="Quick-dry fabric">
            Sweat dries off fast, so it stays light and fresh from warm-up to the last set.
          </Tile>
          <Tile as="li" step={1} title="DM your size">
            Send &quot;KF&quot; plus your size and area to @[YOUR HANDLE] on [PLATFORM].
          </Tile>
        </ol>
      </Section>

      <Section id="logo" title="Logo" note="The cropped KF mark (global bar, favicon) and the full lockup (footer only). Dark grounds only.">
        <div className="flex flex-col gap-6">
          <div className="flex min-h-11 items-center gap-2.5 rounded-cell bg-graphite px-4">
            <Logo variant="mark" height={32} decorative />
            <span className="font-display text-wordmark uppercase">Klinfits</span>
          </div>
          <div className="flex flex-wrap items-end gap-8">
            <figure className="flex flex-col items-start gap-2">
              <Logo variant="mark" height={32} />
              <figcaption className="text-caption text-ash">Mark, 32px</figcaption>
            </figure>
            <figure className="flex flex-col items-start gap-2">
              <Image src={favicon} alt="Favicon" width={64} height={64} className="rounded-cell" />
              <figcaption className="text-caption text-ash">Favicon (app/icon.png)</figcaption>
            </figure>
            <figure className="flex flex-col items-start gap-2 rounded-cell bg-graphite p-4">
              <Logo variant="lockup" height={120} />
              <figcaption className="text-caption text-ash">Lockup, 120px (footer)</figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section id="shape" title="Radii, spacing, widths">
        <ul className="flex flex-wrap gap-4">
          {radii
            .filter((r) => r.name !== 'radius-none')
            .map((r) => (
              <li key={r.name} className="flex flex-col items-start gap-2">
                <span className="block h-16 w-28 border border-steel bg-carbon" style={{ borderRadius: `var(--${r.name})` }} />
                <span className="text-caption text-ash">
                  {r.name} · {r.value}
                </span>
              </li>
            ))}
        </ul>
        <ul className="flex flex-col gap-2">
          {spacing.map((s) => (
            <li key={s.name} className="flex items-center gap-4">
              <span className="w-28 shrink-0 text-caption text-ash">
                {s.name} · {s.value}
              </span>
              <span className="block h-3 max-w-full bg-silver-300" style={{ width: s.value }} />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-1 text-caption text-ash">
          {containers.map((c) => (
            <li key={c.name}>
              max-w-{c.name} · {c.value} · {c.usage}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
