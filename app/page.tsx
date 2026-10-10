import { GlobalBar } from '@/components/sections/GlobalBar';
import { Hero } from '@/components/sections/Hero';
import { StickyNav } from '@/components/sections/StickyNav';
import { drop01 } from '@/content/drop01';
import { dmHref } from '@/lib/dm';

export default function Home() {
  const dm = dmHref(drop01.dm);
  return (
    <>
      <GlobalBar brand={drop01.brand.name} note={drop01.globalBar.note} />
      <StickyNav {...drop01.nav} dmHref={dm} />
      <main>
        <Hero hero={drop01.hero} price={drop01.price} handle={drop01.dm.handle} model={drop01.model} dmHref={dm} />
      </main>
    </>
  );
}
