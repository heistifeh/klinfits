'use client';

import { useRef, type KeyboardEvent } from 'react';
import type { Size, SizeId } from '@/content/types';
import { cx } from '@/lib/cx';
import { isSoldOut } from '@/lib/stock';

type SizeSwitchProps = {
  sizes: readonly Size[];
  index: number;
  onSelect: (id: SizeId) => void;
  label: string;
  soldOutLabel: string;
};

const NEXT_KEYS = ['ArrowRight', 'ArrowDown'];
const PREV_KEYS = ['ArrowLeft', 'ArrowUp'];

// Segmented S/M/L switch with radio-group semantics: one option is always
// checked. Only the checked one is in the Tab order; arrow keys, Home and End
// move the selection.
export function SizeSwitch({ sizes, index, onSelect, label, soldOutLabel }: SizeSwitchProps) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function move(to: number) {
    const next = (to + sizes.length) % sizes.length;
    onSelect(sizes[next].id);
    buttons.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (NEXT_KEYS.includes(event.key)) move(index + 1);
    else if (PREV_KEYS.includes(event.key)) move(index - 1);
    else if (event.key === 'Home') move(0);
    else if (event.key === 'End') move(sizes.length - 1);
    else return;
    event.preventDefault();
  }

  return (
    <div
      role="radiogroup"
      aria-label={label}
      onKeyDown={onKeyDown}
      className="relative grid grid-cols-3 gap-1 rounded-pill bg-mist p-1"
    >
      {/* The selected pill is its own element so it can slide later. */}
      <span
        data-size-indicator
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 w-[calc((100%-1rem)/3)] rounded-pill bg-black"
        style={{ transform: `translateX(calc(${index} * (100% + 0.25rem)))` }}
      />
      {sizes.map((size, i) => {
        const checked = i === index;
        const soldOut = isSoldOut(size);
        return (
          <button
            key={size.id}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={soldOut ? `${size.id}, ${soldOutLabel}` : undefined}
            tabIndex={checked ? 0 : -1}
            onClick={() => onSelect(size.id)}
            className={cx(
              'relative flex min-h-12 cursor-pointer flex-col items-center justify-center rounded-pill text-button',
              checked ? 'text-porcelain' : 'text-carbon',
            )}
          >
            {size.id}
            {soldOut && <span className="mt-0.5 text-micro">{soldOutLabel}</span>}
          </button>
        );
      })}
    </div>
  );
}
