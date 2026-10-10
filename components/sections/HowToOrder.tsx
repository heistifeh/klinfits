import { PillButton } from '@/components/ui/PillButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tile } from '@/components/ui/Tile';
import type { Drop01Content } from '@/content/types';
import { platformNames } from '@/lib/dm';
import { fill, isPlaceholder, show } from '@/lib/format';

type HowToOrderProps = {
  order: Drop01Content['order'];
  dm: Drop01Content['dm'];
  delivery: Drop01Content['delivery'];
  totalPieces: number;
  dmHref: string;
};

export function HowToOrder({ order, dm, delivery, totalPieces, dmHref }: HowToOrderProps) {
  const values = {
    handle: show(dm.handle),
    platform: isPlaceholder(dm.platform) ? show(dm.platform) : platformNames[dm.platform],
    city: show(delivery.city),
    cityDays: show(delivery.cityDays),
    elsewhereDays: show(delivery.elsewhereDays),
    total: totalPieces,
  };

  return (
    <section id="order" aria-labelledby="order-title" className="px-page py-section">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <SectionHeading id="order-title" size="section" eyebrow={order.eyebrow} lines={order.heading} align="center" />

        <ol className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {order.steps.map((step, i) => (
            <Tile key={i} as="li" step={i + 1} title={show(step.title)}>
              <p>{fill(step.body, values)}</p>
            </Tile>
          ))}
        </ol>

        <div className="flex flex-col items-center gap-4 rounded-tile border border-steel bg-graphite px-8 py-12 text-center">
          <SectionHeading as="p" size="sub" lines={[fill(order.cta.heading, values)]} />
          <p className="text-body text-ash">{order.cta.body}</p>
          <PillButton href={dmHref} className="mt-2">
            {fill(order.cta.button, values)}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
