import { Logo } from '@/components/ui/Logo';

type GlobalBarProps = {
  brand: string;
  note: string;
};

export function GlobalBar({ brand, note }: GlobalBarProps) {
  return (
    <header className="border-b border-carbon bg-graphite px-page pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex min-h-11 max-w-bar items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Logo variant="mark" height={32} decorative />
          <span className="font-display text-wordmark uppercase">{brand}</span>
        </div>
        <p className="text-micro text-ash">{note}</p>
      </div>
    </header>
  );
}
