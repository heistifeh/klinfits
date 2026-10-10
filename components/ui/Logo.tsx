import Image from 'next/image';
import kfMark from '@/public/images/kf-mark.png';
import lockup from '@/public/images/klinfits-lockup.png';
import { cx } from '@/lib/cx';

// The artwork sits on solid black; mix-blend-lighten lets it melt into
// graphite. Use on dark grounds only, never on the light spec card.
const sources = { mark: kfMark, lockup };

type LogoProps = {
  /** mark: KF only (global bar, 32px). lockup: full logo (footer, up to 160px). */
  variant: 'mark' | 'lockup';
  /** Rendered height in px. */
  height: number;
  /** Hide from screen readers when the name is already written next to it. */
  decorative?: boolean;
  className?: string;
};

export function Logo({ variant, height, decorative = false, className }: LogoProps) {
  const src = sources[variant];
  const width = Math.round((src.width / src.height) * height);
  return (
    <Image
      src={src}
      alt={decorative ? '' : 'Klinfits'}
      width={width}
      height={height}
      sizes={`${width}px`}
      className={cx('mix-blend-lighten', className)}
    />
  );
}
