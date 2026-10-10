import type { IconName } from '@/content/types';

// Tabler icons from Iconify at 1.5 stroke. Paths are copied unchanged from
// public/icons/tabler-*.svg; inline so they take currentColor.
const paths: Record<IconName, string[]> = {
  droplet: [
    'M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0s3.262-5.708 1.566-8.546l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423',
  ],
  'shirt-sport': ['m15 4l6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 0 0 6 0', 'M10.5 11H13l-1.5 5'],
  'needle-thread': [
    'M3 21Q2 20 14.785 4.291a3.5 3.5 0 1 1 5.078 4.791Q4.001 22 3 21M17.5 6.5l-1 1',
    'M17 7c-2.333-2.667-3.5-4-5-4s-2 1-2 2c0 4 8.161 8.406 6 11c-1.056 1.268-3.363 1.285-5.75.808m-4.511-1.383C4.346 14.86 2 13.5 2 12m17.5-2.5L21 11',
  ],
  camera: [
    'M5 7h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2',
    'M9 13a3 3 0 1 0 6 0a3 3 0 0 0-6 0',
  ],
};

type IconProps = {
  name: IconName;
  size?: 24 | 32;
  className?: string;
};

export function Icon({ name, size = 32, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        {paths[name].map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
