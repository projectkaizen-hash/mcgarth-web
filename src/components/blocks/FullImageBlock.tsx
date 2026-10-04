import { SanityImage } from "@/lib/types";

// components/blocks/FullImageBlock.tsx
export function FullImageBlock({ image }: { image: SanityImage }) {
  return (
    <div className="c-block-image">
      <section className="c-grid-container c-appear-blur-in grid" data-scroll>
        <div className="c-safari-image-radius col-span-4 flex items-center overflow-hidden rounded-[4px] bg-current xl:col-span-12">
          <div
            className="c-image is-loaded w-full -cover -lazy-load h-[110%] w-full"
            data-scroll="true"
            data-scroll-speed="-0.075"
            style={{
              aspectRatio: image.aspectRatio,
              "--width": image.width,
              "--height": image.height,
            } as React.CSSProperties}
          >
            <picture className="c-image_inner flex h-full w-full">
              <img
                src={`${image.url}?w=2400&auto=format`}
                alt={image.alt ?? ""}
                fetchPriority="auto"
                loading="lazy"
                className="c-image_img"
                width={image.width}
                height={image.height}
              />
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
}