import { sanityClient, projectsSummaryQuery } from "@/lib/sanity";
import { Project } from "@/lib/types"; // keep the interface
import { getProjectArticleClass, getProjectTimeline } from '@/lib/utils';
import { ProjectArea } from "@/components/ui/project-area";

interface ProjectsProps {
  filter?: 'ongoing' | 'upcoming' | 'completed';
}

const CATEGORY_TITLES: Record<NonNullable<ProjectsProps['filter']>, string> = {
  ongoing: 'Ongoing Projects',
  upcoming: 'Upcoming Projects',
  completed: 'Completed Projects',
};

export default async function Projects({ filter }: ProjectsProps = {}) {

  const allProjects: Project[] = await sanityClient.fetch(projectsSummaryQuery);
  
  // Filter projects based on the filter prop
  const filteredProjects = filter 
    ? allProjects.filter(project => {
        if (filter === 'ongoing') return project.status === 'active';
        if (filter === 'upcoming') return project.status === 'pending';
        if (filter === 'completed') return project.status === 'completed';
        return true;
      })
    : allProjects;
  
  const projects = filteredProjects;
  const projectLength = `(${projects.length})`;
  const pageTitle = filter ? CATEGORY_TITLES[filter] : 'Projects';

  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <div>
          <c-hero
            class="c-hero undefined c-hero-centered overflow-visible"
            data-scroll="true"
            data-scroll-call="hero-projects"
            id="projects"
          >
            <div className="c-grid-container overflow-visible">
              <div className="c-hero-title_wrapper overflow-visible flex-column col-span-4 flex items-end justify-end xl:col-span-11 pt-8 xl:text-center xl:col-span-12! xl:col-start-1!">
                <h1 className="c-heading-h1 js-splitted" aria-label={`${pageTitle} ${projectLength}`}>
                  {pageTitle} <br className="xl:hidden" />{projectLength}
                </h1>
              </div>
              <div className="false"></div>
            </div>
          </c-hero>

          <div className="pb-[30px] xl:pb-[200px]"></div>

          <div className="c-blocks">
            <c-block-title
              class="undefined"
              data-scroll="true"
              data-scroll-offset="10%"
            >
              <div className="c-grid-container">
                <div className="col-span-4 grid grid-cols-subgrid xl:col-span-9 xl:col-start-4">
                  <h2
                    className="c-heading-h3-indented js-splitted col-span-4 xl:col-span-9"
                    aria-label="Creating spaces for the way people live. Our projects range from individual residential developments to larger multi-unit communities. Each one presents a different opportunity, but the objective remains the same: to create homes that balance thoughtful design, practical living and quality construction. Explore our portfolio and discover the projects behind the McGrath name."
                  >
                    <span className="c-heading-h3-indent-spacer">&nbsp;</span>
                    Creating spaces for the way people live.
                    Our projects range from individual residential developments to larger multi-unit communities. Each one presents a different opportunity, but the objective remains the same: to create homes that balance thoughtful design, practical living and quality construction. Explore our portfolio and discover the projects behind the McGrath name.
                  </h2>
                </div>
              </div>
            </c-block-title>

            <section className="block">
              <h2 className="sr-only">{pageTitle}</h2>
              <div className="c-grid-container">

                {projects.map((project, index) => (
                  <article
                    key={project._id}
                    is="c-project-card"
                    className={getProjectArticleClass(index + 1, projects.length)}

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
                            "--width": project.width,
                            "--height": project.height,
                          } as React.CSSProperties}
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
                              <ProjectArea coordinates={project.coordinates} fallback={project.location} />
                            </h3>
                            {(() => {
                              const timeline = getProjectTimeline(project);
                              return (
                                <p className="c-text-small flex w-full justify-between items-baseline pt-[8px]">
                                  <i className="not-italic">{timeline.label}</i>
                                  <span className="pr-1.5 xl:pr-0">{timeline.value}</span>
                                </p>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {/* Empty div for spacer reset */}
            <div></div>

            
          </div>
        </div>
      </div>
    </main>
  );
}
