'use client';

import Image from 'next/image';
import type { Drop01Content } from '@/content/types';
import productTee from '@/public/images/product-tee.png';
import { SizeSwitch } from './SizeSwitch';
import { SpecGrid } from './SpecGrid';
import { useSizeSelection } from './useSizeSelection';

type SizePickerProps = Pick<
  Drop01Content['sizes'],
  'list' | 'defaultSize' | 'labels' | 'pickerLabel' | 'stockUnit' | 'soldOut' | 'product'
>;

// The light spec card. data-surface="light" switches focus rings to black.
export function SizePicker({ list, defaultSize, labels, pickerLabel, stockUnit, soldOut, product }: SizePickerProps) {
  const { selected, index, select } = useSizeSelection(list, defaultSize);

  return (
    <div
      data-surface="light"
      data-size={selected.id}
      className="flex min-w-0 flex-[999_1_500px] flex-col gap-7 rounded-tile bg-porcelain p-8 text-carbon"
    >
      <div className="flex items-center gap-4">
        <div data-size-thumb className="shrink-0 overflow-hidden rounded-cell bg-white">
          <Image src={productTee} alt={product.imageAlt} width={88} height={88} sizes="88px" className="size-22 object-contain" />
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-body font-semibold">{product.name}</p>
          <p className="text-caption text-slate">{product.meta}</p>
        </div>
      </div>
      <SizeSwitch sizes={list} index={index} onSelect={select} label={pickerLabel} soldOutLabel={soldOut.pill} />
      <SpecGrid size={selected} labels={labels} stockUnit={stockUnit} soldOutMessage={soldOut.message} />
    </div>
  );
}
