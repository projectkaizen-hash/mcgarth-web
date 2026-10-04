// components/ProjectBlocks.tsx
import { FullImageBlock } from "../blocks/FullImageBlock";
import { GalleryBlock } from "../blocks/GalleryBlock";
import { ContentBlock } from "../blocks/ContentBlock";
import ProgressBar from "../blocks/ProgressBar";
import { ProjectBlock } from "@/lib/types"

export function ProjectBlocks({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case "imageBlock":
            return <FullImageBlock key={block._key} image={block.image} />;
          case "galleryBlock":
            return <GalleryBlock key={block._key} images={block.images} />;
          case "contentBlock":
            return <ContentBlock key={block._key} content={block.content} />;
          case "progressBlock":
            return <ProgressBar key={block._key} progress={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}