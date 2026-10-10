import { describe, expect, it } from 'vitest';
import { fill, formatCm, formatNaira, formatRange, isPlaceholder, show } from './format';

describe('format', () => {
  it('formats naira with the sign and a comma', () => {
    expect(formatNaira(14000)).toBe('₦14,000');
    expect(formatNaira(13500)).toBe('₦13,500');
  });

  it('keeps placeholders visible', () => {
    expect(formatNaira({ todo: 'YOUR PRICE' })).toBe('₦[YOUR PRICE]');
    expect(show({ todo: 'HEIGHT' })).toBe('[HEIGHT]');
    expect(show('M')).toBe('M');
    expect(isPlaceholder({ todo: 'X' })).toBe(true);
    expect(isPlaceholder('X')).toBe(false);
  });

  it('formats measurements in cm', () => {
    expect(formatRange([92, 96])).toBe('92–96 cm');
    expect(formatCm(67)).toBe('67 cm');
  });

  it('fills tokens and leaves unknown ones alone', () => {
    expect(fill('DM @{handle}', { handle: 'klinfits' })).toBe('DM @klinfits');
    expect(fill('Only {total} in Drop 01.', { total: 14 })).toBe('Only 14 in Drop 01.');
    expect(fill('{city}: {cityDays} days', { city: 'Lagos' })).toBe('Lagos: {cityDays} days');
  });
});
