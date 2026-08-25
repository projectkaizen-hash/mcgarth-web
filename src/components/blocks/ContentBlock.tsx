// components/blocks/ContentBlock.tsx
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

export function ContentBlock({ content }: { content: PortableTextBlock[] }) {
  return (
    <div className="c-block-content">
      <section className="undefined" data-scroll>
        <div className="c-grid-container my-[80px] xl:my-[115px]">
          <div className="c-p-no-split columns-1 xl:columns-2 gap-2 xl:col-span-6 col-span-3 col-start-2 xl:col-start-7 c-appear-blur-in">
            <PortableText value={content} />
          </div>
        </div>
      </section>
    </div>
  );
}