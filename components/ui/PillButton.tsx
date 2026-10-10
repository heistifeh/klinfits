import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cx } from '@/lib/cx';

type PillButtonProps = Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'children'> & {
  href: string;
  /** primary: the silver main action (one per screen area). secondary: outlined. */
  variant?: 'primary' | 'secondary';
  /** nav: 44px tall for the sticky nav. default: 48px. */
  size?: 'default' | 'nav';
  children: ReactNode;
};

// Pressed (scale 0.97) and focus ring come from globals.css for every link.
// The 1px border is transparent on primary so forced-colors mode can draw it.
const variants = {
  primary: 'bg-silver text-on-silver border-transparent hovered:brightness-110',
  secondary: 'border-slate text-porcelain font-medium hovered:border-porcelain hovered:text-white',
};

const sizes = {
  default: 'min-h-12 px-7 text-button',
  nav: 'min-h-11 px-5 text-note font-semibold',
};

export function PillButton({ href, variant = 'primary', size = 'default', className, children, ...rest }: PillButtonProps) {
  return (
    <a
      href={href}
      className={cx(
        'inline-flex items-center justify-center rounded-pill border py-2 text-center no-underline',
        sizes[size],
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
