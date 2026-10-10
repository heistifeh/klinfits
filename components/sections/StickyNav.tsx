import { PillButton } from '@/components/ui/PillButton';
import type { Drop01Content } from '@/content/types';

type StickyNavProps = Drop01Content['nav'] & {
  dmHref: string;
};

// Below 640px only the title and the DM button show; the anchor links join from 640px up.
// The strip spans the page so the bar can sit on the gutter; only the bar takes clicks.
export function StickyNav({ title, links, cta, dmHref }: StickyNavProps) {
  return (
    <nav
      aria-label={title}
      className="pointer-events-none sticky top-[calc(12px+env(safe-area-inset-top,0px))] z-10 mt-3 pr-[max(1rem,env(safe-area-inset-right))] pl-[max(1rem,env(safe-area-inset-left))]"
    >
      <div className="pointer-events-auto mx-auto flex max-w-bar flex-wrap items-center justify-between gap-3 rounded-nav border border-steel bg-graphite py-2 pr-2 pl-5">
        <span className="text-body font-semibold">{title}</span>
        <div className="flex flex-wrap items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden min-h-11 items-center px-3 text-nav text-ash hovered:text-white sm:inline-flex"
            >
              {link.label}
            </a>
          ))}
          <PillButton href={dmHref} size="nav">
            {cta}
          </PillButton>
        </div>
      </div>
    </nav>
  );
}
