'use client';

import { useCallback, useState } from 'react';
import type { Size, SizeId } from '@/content/types';

// Which size is selected, kept apart from the markup. Motion (GSAP) will read
// `index` and `selected` later without changing how the picker renders.
export function useSizeSelection(list: readonly Size[], defaultSize: SizeId) {
  const [selectedId, setSelectedId] = useState<SizeId>(defaultSize);
  const index = Math.max(
    0,
    list.findIndex((s) => s.id === selectedId),
  );

  const select = useCallback((id: SizeId) => setSelectedId(id), []);

  return { selected: list[index], index, select };
}
