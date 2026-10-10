import Image from 'next/image';
import { PillButton } from '@/components/ui/PillButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Drop01Content } from '@/content/types';
import { fill, formatNaira, show } from '@/lib/format';
import heroFit from '@/public/images/hero-fit.jpg';

type HeroProps = {
  hero: Drop01Content['hero'];
  price: Drop01Content['price'];
  handle: Drop01Content['dm']['handle'];
  model: Drop01Content['model'];
  dmHref: string;
};

// Stacked below 864px (440 + 56 + 320 + gutters), side by side above, where
// the photo column settles at about 320px.
const heroImageSizes = '(max-width: 863px) min(calc(100vw - 32px), 480px), 340px';

export function Hero({ hero, price, handle, model, dmHref }: HeroProps) {
  return (
    <section className="px-page pt-16 pb-26">
      <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-14 gap-y-12">
        <div className="flex min-w-0 flex-[999_1_440px] flex-col items-start gap-6">
          <p className="text-eyebrow text-silver-300">{hero.eyebrow}</p>
          <SectionHeading as="h1" size="hero" lines={hero.headline} silverLine={1} />
          <p className="max-w-[520px] text-lead text-ash">{hero.intro}</p>
          <div className="mt-2 flex flex-col items-start gap-4">
            <p className="text-price">{formatNaira(price)}</p>
            <div className="flex flex-wrap gap-3">
              <PillButton href={dmHref}>{fill(hero.primaryCta, { handle: show(handle) })}</PillButton>
              <PillButton href="#sizes" variant="secondary">
                {hero.secondaryCta}
              </PillButton>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[480px] min-w-0 flex-[1_1_320px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-tile bg-graphite">
            <Image
              src={heroFit}
              alt={hero.imageAlt}
              fill
              preload
              sizes={heroImageSizes}
              className="object-cover object-[50%_32%]"
            />
          </div>
          <p className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-pill border border-steel bg-carbon/92 px-4.5 py-2.5">
            <span className="text-micro text-ash">{hero.onMeLabel}</span>{' '}
            <span className="text-note font-semibold">
              {fill(hero.onMeValue, { size: show(model.size), height: show(model.height) })}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
