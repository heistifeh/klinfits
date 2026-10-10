import { Logo } from '@/components/ui/Logo';
import type { Drop01Content } from '@/content/types';

type FooterProps = Drop01Content['footer'];

export function Footer({ tagline, note }: FooterProps) {
  return (
    <footer className="border-t border-carbon bg-graphite px-page">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 pt-14 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-center">
        <Logo variant="lockup" height={120} />
        <p className="font-display text-wordmark uppercase">{tagline}</p>
        <p className="text-micro text-ash">{note}</p>
      </div>
    </footer>
  );
}
