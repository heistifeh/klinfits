import { Fragment } from 'react';
import { cx } from '@/lib/cx';

type SectionHeadingProps = {
  as?: 'h1' | 'h2' | 'p';
  /** hero 56–112px · section 44–72px · band 36–56px · sub 32–44px */
  size: 'hero' | 'section' | 'band' | 'sub';
  /** Silver-300 label above the heading. */
  eyebrow?: string;
  /** Each entry starts a new line. */
  lines: readonly string[];
  /** Index of the line set in silver. Only "Train easy." uses it. */
  silverLine?: number;
  align?: 'start' | 'center';
  id?: string;
  className?: string;
};

const sizes = {
  hero: 'text-display-hero',
  section: 'text-display-section',
  band: 'text-display-band',
  sub: 'text-display-sub',
};

export function SectionHeading({
  as: Tag = 'h2',
  size,
  eyebrow,
  lines,
  silverLine,
  align = 'start',
  id,
  className,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : undefined;
  const heading = (
    <Tag id={id} className={cx('font-display uppercase', sizes[size], !eyebrow && alignClass, !eyebrow && className)}>
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {i === silverLine ? <span className="text-silver">{line}</span> : line}
        </Fragment>
      ))}
    </Tag>
  );
  // Without an eyebrow there's nothing to group, so the parent's spacing applies.
  if (!eyebrow) return heading;

  return (
    <div className={cx('flex flex-col gap-4', align === 'center' ? 'items-center' : 'items-start', alignClass, className)}>
      <p className="text-eyebrow text-silver-300">{eyebrow}</p>
      {heading}
    </div>
  );
}
