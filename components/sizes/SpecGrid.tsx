import type { Drop01Content, Size } from '@/content/types';
import { formatCm, formatRange } from '@/lib/format';
import { isSoldOut, stockOf } from '@/lib/stock';

type SpecGridProps = {
  size: Size;
  labels: Drop01Content['sizes']['labels'];
  stockUnit: string;
  soldOutMessage: string;
};

// The five white cells. Each value carries data-spec so motion can find it later.
export function SpecGrid({ size, labels, stockUnit, soldOutMessage }: SpecGridProps) {
  const soldOut = isSoldOut(size);
  const cells = [
    { key: 'chest', label: labels.chest, value: formatRange(size.chest) },
    { key: 'waist', label: labels.waist, value: formatRange(size.waist) },
    { key: 'height', label: labels.height, value: formatRange(size.height) },
    { key: 'length', label: labels.length, value: formatCm(size.length) },
  ];

  return (
    <dl
      aria-live="polite"
      className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px overflow-hidden rounded-cell bg-hairline-light"
    >
      {cells.map((cell) => (
        <div key={cell.key} className="flex flex-col gap-1.5 bg-white p-6">
          <dt className="text-caption text-slate">{cell.label}</dt>
          <dd className="text-spec" data-spec={cell.key}>
            {cell.value}
          </dd>
        </div>
      ))}
      <div className={soldOut ? 'col-span-full flex flex-col gap-1.5 bg-white p-6' : 'flex flex-col gap-1.5 bg-white p-6'}>
        <dt className="text-caption text-slate">{labels.stock}</dt>
        {soldOut ? (
          <dd className="text-body font-semibold">{soldOutMessage}</dd>
        ) : (
          <dd className="text-spec" data-spec="stock">
            {stockOf(size)} {stockUnit}
          </dd>
        )}
      </div>
    </dl>
  );
}
