"use client";
import { getProjectArticleClass } from "@/lib/utils";

interface UserProject {
  _id: string;
  title: string;
  href: string;
  image?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  year?: number;
  type?: string;
  order: number;
}

interface ProjectBlockProps {
  userProjects: UserProject[];
  loading: boolean;
}

export default function ProjectBlock({ userProjects, loading }: ProjectBlockProps) {
  return (
    <section className="block">
      <h2 className="sr-only">Your Projects</h2>
      <div className="c-grid-container">
        {loading ? (
          <div className="col-span-4 text-center py-12">
            <p className="text-gray-400">Loading projects…</p>
          </div>
        ) : userProjects.length > 0 ? (
          userProjects.map((project, index) => (
            <article
              key={project._id}
              is="c-project-card"
              className={getProjectArticleClass(Number(project.order), userProjects.length)}
              data-scroll="true"
              data-scroll-offset="10%"
            >
              <button
                type="button"
                className="c-project-card-click-catcher absolute top-0 left-0 z-1 hidden h-full w-full"
              >
                <span className="c-visually-hidden">
                  show more information
                </span>
              </button>
              <a className="c-appear-up-in" href={project.href}>
                <div className="c-aspect-ratio c-safari-image-radius relative flex w-full items-center overflow-hidden rounded-[6px] bg-current">
                  <div
                    className="c-image is-loaded w-full -cover -lazy-load c-aspect-ratio-overflow w-full"
                    data-scroll="true"
                    data-scroll-speed="-0.033"
                    style={{
                      aspectRatio: project.aspectRatio,
                      ["--width" as any]: project.width,
                      ["--height" as any]: project.height,
                    }}
                  >
                    <picture className="c-image_inner flex h-full w-full">
                      <img
                        src={project.image}
                        alt=""
                        title=""
                        fetchPriority="auto"
                        loading="lazy"
                        className="c-image_img"
                        width={project.width}
                        height={project.height}
                      />
                    </picture>
                  </div>
                </div>
                <div className="relative mt-[13px] flex w-full">
                  <div className="c-bullet-wrapper flex w-full" data-bullet-label="See">
                    <span className="c-bullet relative top-[2px]">
                      <span className="c-bullet-hover"></span>
                    </span>
                    <div className="flex max-w-[80%] flex-col ml-auto w-1/2">
                      <h3 className="c-text-subtitle flex w-full justify-end border-b pb-[8px]">
                        <span className="flex-grow">{project.title}</span>
                        <span className="w-1 border-l"></span>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                      </h3>
                      <p className="c-text-small pt-[8px]">
                        <i className="mr-0.5">{project.year}</i>
                        <span className="pr-1.5 xl:pr-0">{project.type}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))
        ) : (
          <div className="col-span-4 text-center py-12">
            <p className="text-gray-600">No projects assigned to you yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
