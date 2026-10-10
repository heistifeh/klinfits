import type { Open, Placeholder } from '@/content/types';

export function isPlaceholder(value: unknown): value is Placeholder {
  return typeof value === 'object' && value !== null && 'todo' in value;
}

/** A confirmed value as text, or a placeholder as "[YOUR PRICE]". */
export function show(value: Open<string | number>): string {
  return isPlaceholder(value) ? `[${value.todo}]` : String(value);
}

/** 14000 → "₦14,000". A placeholder keeps the sign: "₦[YOUR PRICE]". */
export function formatNaira(value: Open<number>): string {
  return `₦${isPlaceholder(value) ? show(value) : value.toLocaleString('en-US')}`;
}

/** Fills {name} tokens in copy, e.g. fill('DM @{handle}', { handle: 'klinfits' }). */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (token, name: string) => (name in values ? String(values[name]) : token));
}
