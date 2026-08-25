// components/ProjectBlocks.tsx
import { FullImageBlock } from "../blocks/FullImageBlock";
import { GalleryBlock } from "../blocks/GalleryBlock";
import { ContentBlock } from "../blocks/ContentBlock";
import ProgressBar from "../blocks/ProgressBar";
import { ProjectBlock } from "@/lib/types"

export function ProjectBlocks({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block._type) {
          case "imageBlock":
            return <FullImageBlock key={index} image={block.image} />;
          case "galleryBlock":
            return <GalleryBlock key={index} images={block.images} />;
          case "contentBlock":
            return <ContentBlock key={index} content={block.content} />;
          case "progressBlock":
            return <ProgressBar key={index} progress={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}