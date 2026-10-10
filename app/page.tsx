import { SectionHeading } from '@/components/ui/SectionHeading';
import { drop01 } from '@/content/drop01';

// Placeholder until the Drop 01 sections are built.
export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-content flex-col justify-center gap-6 px-4 sm:px-6">
      <SectionHeading as="h1" size="hero" lines={drop01.hero.headline} silverLine={1} />
      <p className="text-lead text-ash">{drop01.brand.tagline}</p>
    </main>
  );
}
