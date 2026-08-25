// components/blocks/GalleryBlock.tsx

import { SanityImage } from '../../lib/types';

export function GalleryBlock({ images }: { images: SanityImage[] }) {
  const pairs: SanityImage[][] = [];
  for (let i = 0; i < images.length; i += 2) {
    pairs.push(images.slice(i, i + 2));
  }

  return (
    <div className="c-block-gallery">
      <section>
        <div className="c-grid-container items-center !gap-y-[20px]">
          {pairs.map((pair, pairIdx) =>
            pair.map((img, imgIdx) => (
              <div
                key={`${pairIdx}-${imgIdx}`}
                className={`col-span-4 xl:col-span-6 ${imgIdx === 1 ? "xl:col-start-7" : ""}`}
              >
                <div className="relative flex h-full w-full items-center overflow-hidden rounded-sm" data-scroll>
                  <div
                    className="c-image is-loaded w-full -cover -lazy-load h-[105%]"
                    data-scroll="true"
                    data-scroll-speed="-0.025"
                    style={{
                      aspectRatio: img.aspectRatio,
                      ["--width" as any]: img.width,
                      ["--height" as any]: img.height,
                    }}
                  >
                    <picture className="c-image_inner flex h-full w-full">
                      <img
                        src={`${img.url}?w=2400&auto=format`}
                        alt={img.alt ?? ""}
                        fetchPriority="auto"
                        loading="lazy"
                        className="c-image_img"
                        width={img.width}
                        height={img.height}
                      />
                    </picture>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}