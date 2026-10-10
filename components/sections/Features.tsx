import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tile } from '@/components/ui/Tile';
import type { Drop01Content } from '@/content/types';
import moodGym from '@/public/images/mood-gym.jpg';

type FeaturesProps = Drop01Content['features'];

export function Features({ heading, tiles }: FeaturesProps) {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      {/* Atmosphere only: decorative, and always under the dark overlay. */}
      <Image
        src={moodGym}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-mood-overlay" aria-hidden="true" />

      <section id="features" aria-labelledby="features-title" className="px-page py-section">
        <div className="mx-auto flex max-w-content flex-col gap-10">
          <SectionHeading id="features-title" size="band" lines={[heading]} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {tiles.map((tile) => (
              <Tile key={tile.title} icon={tile.icon} title={tile.title}>
                <p>{tile.body}</p>
              </Tile>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
