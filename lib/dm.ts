import type { Drop01Content, Platform } from '@/content/types';
import { isPlaceholder } from './format';

// Where every "DM" button goes. Instagram has a link that opens the DM thread
// directly; TikTok and X only offer the profile from a handle (X's DM link
// needs the numeric account ID).
const builders: Record<Platform, (handle: string) => string> = {
  instagram: (handle) => `https://ig.me/m/${encodeURIComponent(handle)}`,
  tiktok: (handle) => `https://www.tiktok.com/@${encodeURIComponent(handle)}`,
  x: (handle) => `https://x.com/${encodeURIComponent(handle)}`,
};

/** Until the platform and handle are confirmed, DM buttons scroll to "How to order". */
export const DM_FALLBACK = '#order';

export function dmHref({ platform, handle }: Drop01Content['dm']): string {
  if (isPlaceholder(platform) || isPlaceholder(handle)) return DM_FALLBACK;
  return builders[platform](handle.replace(/^@/, ''));
}
