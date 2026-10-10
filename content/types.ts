// Content model for the Drop 01 page. All copy and facts live in content/drop01.ts.

/** A fact Tife hasn't confirmed yet. Rendered visibly as "[TODO TEXT]". */
export type Placeholder = { readonly todo: string };

/** A value that's shown on the page but still needs Tife's confirmation. */
export type Draft<T> = { readonly draft: T; readonly confirm: string };

/** Either a confirmed value or a placeholder. */
export type Open<T> = T | Placeholder;

export type SizeId = 'S' | 'M' | 'L';

/** Body measurement range in cm, inclusive. */
export type RangeCm = readonly [min: number, max: number];

export type Platform = 'instagram' | 'tiktok' | 'x';

export type IconName = 'droplet' | 'shirt-sport' | 'needle-thread' | 'camera';

export type Size = {
  id: SizeId;
  /** The buyer's own measurements. */
  chest: RangeCm;
  waist: RangeCm;
  height: RangeCm;
  /** Shirt length in cm. */
  length: number;
  /** Pieces in this drop. 0 means sold out. */
  stock: number | Draft<number>;
};

/**
 * Copy may contain these tokens, filled in at render time:
 * {handle} {platform} {city} {cityDays} {elsewhereDays} {total}
 */
export type Drop01Content = {
  meta: { title: string; description: string };
  brand: { name: string; tagline: string };
  /** Shirts in the drop, shown as "Only 14 in Drop 01." */
  totalPieces: number;
  /** Whole naira, shown as ₦14,000. */
  price: Open<number>;
  /** Handle without the @. */
  dm: { platform: Open<Platform>; handle: Open<string> };
  delivery: { city: Open<string>; cityDays: Open<string>; elsewhereDays: Open<string> };
  /** The "On me" badge on the hero photo. */
  model: { size: Open<SizeId>; height: Open<string> };

  globalBar: { note: string };
  nav: { title: string; links: readonly { label: string; href: `#${string}` }[]; cta: string };
  hero: {
    eyebrow: string;
    /** The second line is the one silver phrase on the page. */
    headline: readonly [plain: string, silver: string];
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    onMeLabel: string;
    /** Uses {size} and {height}. */
    onMeValue: string;
  };
  features: {
    heading: string;
    tiles: readonly { icon: IconName; title: string; body: string }[];
  };
  sizes: {
    eyebrow: string;
    heading: readonly [string, string];
    advice: string;
    stockLine: string;
    fitImageAlt: string;
    product: { name: string; meta: string; imageAlt: string };
    labels: Record<'chest' | 'waist' | 'height' | 'length' | 'stock', string>;
    stockUnit: string;
    soldOut: { pill: string; message: string };
    defaultSize: SizeId;
    list: readonly Size[];
  };
  order: {
    eyebrow: string;
    /** Plain heading, no silver. */
    heading: readonly [string, string];
    steps: readonly { title: Open<string>; body: string }[];
    cta: { heading: string; body: string; button: string };
  };
  footer: { tagline: string; note: string };
};
