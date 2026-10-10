import { describe, expect, it } from 'vitest';
import { DM_FALLBACK, dmHref, platformNames } from './dm';

describe('dmHref', () => {
  it('opens the Instagram DM thread directly', () => {
    expect(dmHref({ platform: 'instagram', handle: 'klinfits' })).toBe('https://ig.me/m/klinfits');
    expect(dmHref({ platform: 'instagram', handle: '@klinfits' })).toBe('https://ig.me/m/klinfits');
  });

  it('falls back to the profile on TikTok and X', () => {
    expect(dmHref({ platform: 'tiktok', handle: 'klinfits' })).toBe('https://www.tiktok.com/@klinfits');
    expect(dmHref({ platform: 'x', handle: 'klinfits' })).toBe('https://x.com/klinfits');
  });

  it('scrolls to How to order while the handle or platform is a placeholder', () => {
    expect(dmHref({ platform: { todo: 'PLATFORM' }, handle: { todo: 'YOUR HANDLE' } })).toBe(DM_FALLBACK);
    expect(dmHref({ platform: 'instagram', handle: { todo: 'YOUR HANDLE' } })).toBe(DM_FALLBACK);
    expect(dmHref({ platform: { todo: 'PLATFORM' }, handle: 'klinfits' })).toBe(DM_FALLBACK);
  });

  it('names each platform for copy', () => {
    expect(platformNames.instagram).toBe('Instagram');
    expect(platformNames.tiktok).toBe('TikTok');
  });
});
