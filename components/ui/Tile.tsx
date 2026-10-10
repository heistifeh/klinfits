import type { ReactNode } from 'react';
import type { IconName } from '@/content/types';
import { cx } from '@/lib/cx';
import { Icon } from './Icon';

type TileProps = {
  /** li when the tile is a step in an ordered list. */
  as?: 'div' | 'li';
  /** Feature tile: a silver-300 line icon. */
  icon?: IconName;
  /** Step tile: a numbered circle. */
  step?: number;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Tile({ as: Tag = 'div', icon, step, title, children, className }: TileProps) {
  return (
    <Tag className={cx('flex flex-col gap-3 rounded-tile bg-carbon px-8', icon ? 'min-h-65 py-10' : 'py-9', className)}>
      {icon && <Icon name={icon} size={32} className="text-silver-300" />}
      {step !== undefined && (
        <span className="flex size-10 items-center justify-center rounded-pill border border-slate text-step" aria-hidden="true">
          {step}
        </span>
      )}
      <h3 className="mt-3 text-title">
        {step !== undefined && <span className="sr-only">Step {step}: </span>}
        {title}
      </h3>
      <div className="text-body text-ash">{children}</div>
    </Tag>
  );
}
