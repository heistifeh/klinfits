import Image from 'next/image';
import { SizePicker } from '@/components/sizes/SizePicker';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Drop01Content } from '@/content/types';
import fitMirror from '@/public/images/fit-mirror-bw.jpg';

type SizesProps = Drop01Content['sizes'];

export function Sizes(sizes: SizesProps) {
  return (
    <section id="sizes" aria-labelledby="sizes-title" className="bg-carbon px-page py-section">
      <div className="mx-auto flex max-w-content flex-wrap items-center gap-14">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
          <p className="text-eyebrow text-silver-300">{sizes.eyebrow}</p>
          <SectionHeading id="sizes-title" size="section" lines={sizes.heading} />
          <p className="max-w-[420px] text-advice text-ash">{sizes.advice}</p>
          <p className="text-note">{sizes.stockLine}</p>
          <Image
            src={fitMirror}
            alt={sizes.fitImageAlt}
            sizes="(max-width: 392px) calc(100vw - 32px), 360px"
            className="mt-3 h-auto w-full max-w-[360px] rounded-tile bg-graphite"
          />
        </div>
        <SizePicker
          list={sizes.list}
          defaultSize={sizes.defaultSize}
          labels={sizes.labels}
          pickerLabel={sizes.pickerLabel}
          stockUnit={sizes.stockUnit}
          soldOut={sizes.soldOut}
          product={sizes.product}
        />
      </div>
    </section>
  );
}
