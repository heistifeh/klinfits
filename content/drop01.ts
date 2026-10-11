import type { Drop01Content } from './types';

// Every word and fact on the Drop 01 page.
// - { todo: '...' }   not confirmed yet; shows on the page as [TODO TEXT].
// - { draft, confirm } shown as is, but still needs confirming.
// - UPDATE WHEN STOCK LANDS: the shirts arrive Oct 18–30, 2026. Rewrite these lines then.

const stockToConfirm = 'Final stock per size once the shirts arrive (Oct 18–30)';

export const drop01: Drop01Content = {
  meta: {
    title: 'Klinfits Drop 01',
    description:
      'The Black Line compression tee. Fitted, comfortable and logo-free. 14 shirts in Drop 01, orders by DM.',
  },
  brand: { name: 'Klinfits', tagline: 'Clean is the standard.' },
  totalPieces: 14,
  price: { todo: 'YOUR PRICE' },
  dm: {
    platform: { todo: 'PLATFORM' },
    handle: { todo: 'YOUR HANDLE' },
  },
  delivery: {
    city: { todo: 'CITY' },
    cityDays: { todo: 'X' },
    elsewhereDays: { todo: 'X–Y' },
  },
  model: { size: 'M', height: { todo: 'HEIGHT' } },

  globalBar: { note: 'Orders by DM' },
  nav: {
    title: 'Drop 01',
    links: [
      { label: 'Overview', href: '#features' },
      { label: 'Sizes', href: '#sizes' },
      { label: 'How to order', href: '#order' },
    ],
    cta: 'DM to order',
  },
  hero: {
    // UPDATE WHEN STOCK LANDS
    eyebrow: 'Drop 01 · Landing late October',
    headline: ['Look good.', 'Train easy.'],
    intro:
      "Black Line compression tee. Fitted enough to show the work, soft and stretchy enough that you forget it's on. You look sharp and stay comfortable from the first set to the last.",
    primaryCta: 'DM @{handle}',
    secondaryCta: 'Find your size',
    imageAlt: 'Tife wearing the Black Line compression tee, mirror selfie after training',
    onMeLabel: 'On me',
    onMeValue: 'Size {size} · {height}',
  },
  features: {
    heading: 'Built for the session.',
    tiles: [
      {
        icon: 'droplet',
        title: 'Quick-dry fabric',
        body: 'Sweat dries off fast, so it stays light and fresh from warm-up to the last set.',
      },
      {
        icon: 'shirt-sport',
        title: 'Compression fit',
        body: 'Sits close and moves with you, so you can lift, stretch and breathe without fighting the fabric. Wear it alone or under a tee.',
      },
      {
        icon: 'needle-thread',
        title: 'Black Line seams',
        body: 'Subtle contour lines that trace the shoulders and sides. Clean, no logos.',
      },
    ],
  },
  sizes: {
    eyebrow: 'Find your size',
    heading: ['Snug fit.', 'Easy feel.'],
    advice:
      'It sits close so it shows your shape, and it stretches so it never feels restrictive. Between two sizes and want a bit more room? Go one up. Not sure? Send your height and weight in the DM.',
    stockLine: 'Drop 01: S · M · L. No XL yet.',
    fitImageAlt: 'How the Black Line tee fits at the chest and arms',
    product: {
      name: 'Black Line compression tee',
      meta: 'Black · Short sleeve · S, M, L',
      imageAlt: 'Black Line compression tee, front view',
    },
    pickerLabel: 'Choose a size',
    labels: {
      chest: 'Your chest',
      waist: 'Your waist',
      height: 'Your height',
      length: 'Shirt length',
      stock: 'In Drop 01',
    },
    stockUnit: 'pcs',
    soldOut: { pill: 'Sold out', message: 'Sold out. DM to be first for the next drop.' },
    defaultSize: 'M',
    // From the Temu size charts Tife shared (Oct 10, 2026). Shirt chest and
    // sleeve figures are deliberately left out.
    list: [
      { id: 'S', chest: [92, 96], waist: [78, 82], height: [170, 175], length: 67, stock: { draft: 3, confirm: stockToConfirm } },
      { id: 'M', chest: [96, 100], waist: [82, 86], height: [175, 180], length: 69, stock: { draft: 8, confirm: stockToConfirm } },
      { id: 'L', chest: [100, 105], waist: [86, 91], height: [180, 185], length: 71, stock: { draft: 3, confirm: stockToConfirm } },
    ],
  },
  order: {
    eyebrow: 'How to get it',
    // UPDATE WHEN STOCK LANDS: only true once the shirts are in Nigeria.
    heading: ['Skip the wait.'],
    steps: [
      { title: 'DM your size', body: 'Send "KF" plus your size and area to @{handle} on {platform}.' },
      {
        title: 'Pay to confirm',
        body: 'I hold your shirt as soon as payment lands. Delivery fee depends on your location.',
      },
      // Replaces "Wear it this week", which may over-promise.
      { title: { todo: 'STEP 3 TITLE' }, body: '{city}: {cityDays} days. Elsewhere in Nigeria: {elsewhereDays} days.' },
    ],
    cta: {
      heading: 'Only {total} in Drop 01.',
      // UPDATE WHEN STOCK LANDS
      body: 'When they are gone, the next batch is weeks out.',
      button: 'DM @{handle}',
    },
  },
  footer: {
    tagline: 'Clean is the standard.',
    note: 'Orders by DM only for now · Online checkout coming soon',
  },
};
