import type { Size } from '@/content/types';

/** Pieces left for a size. Unconfirmed (draft) counts are used as shown. */
export function stockOf(size: Size): number {
  return typeof size.stock === 'number' ? size.stock : size.stock.draft;
}

export function isSoldOut(size: Size): boolean {
  return stockOf(size) <= 0;
}
