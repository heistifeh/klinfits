import { describe, expect, it } from 'vitest';
import type { Size } from '@/content/types';
import { drop01 } from '@/content/drop01';
import { isSoldOut, stockOf } from './stock';

const size = (stock: Size['stock']): Size => ({
  id: 'S',
  chest: [92, 96],
  waist: [78, 82],
  height: [170, 175],
  length: 67,
  stock,
});

describe('stock', () => {
  it('reads confirmed and draft counts', () => {
    expect(stockOf(size(5))).toBe(5);
    expect(stockOf(size({ draft: 3, confirm: 'later' }))).toBe(3);
  });

  it('treats 0 as sold out, confirmed or draft', () => {
    expect(isSoldOut(size(0))).toBe(true);
    expect(isSoldOut(size({ draft: 0, confirm: 'later' }))).toBe(true);
    expect(isSoldOut(size(1))).toBe(false);
  });

  it('adds up to the pieces in the drop', () => {
    const total = drop01.sizes.list.reduce((sum, s) => sum + stockOf(s), 0);
    expect(total).toBe(drop01.totalPieces);
  });
});
