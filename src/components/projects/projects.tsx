import { sanityClient, projectsQuery } from "@/lib/sanity";
import { Project } from "@/lib/types"; // keep the interface
import { getProjectArticleClass } from '@/lib/utils'

interface ProjectsProps {
  filter?: 'ongoing' | 'upcoming' | 'completed';
}

export default async function Projects({ filter }: ProjectsProps = {}) {

  const allProjects: Project[] = await sanityClient.fetch(projectsQuery);
  
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
                <h1 className="c-heading-h1 js-splitted" aria-label={`Projects ${projectLength}`}>
                  Projects <br className="xl:hidden" />{projectLength}
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
                    aria-label="McGrath builds sustainable homes where quality, design and innovation meet. From single-family homes to large-scale residential projects, every construction reflects our expertise and commitment. Explore our realisations and find inspiration for your future home."
                  >
                    <span className="c-heading-h3-indent-spacer">&nbsp;</span>
                    McGrath builds sustainable homes where quality, design and
                    innovation meet. From single-family homes to large-scale
                    residential projects, every construction reflects our
                    expertise and commitment. Explore our realisations and find
                    inspiration for your future home.
                  </h2>
                </div>
              </div>
            </c-block-title>

            <section className="block">
              <h2 className="sr-only">Projects</h2>
              <div className="c-grid-container">

                {projects.map((project, index) => (
                  <article
                    key={project._id}
                    is="c-project-card"
                    className={getProjectArticleClass(Number(project.order), projects.length)}

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
                ))}
              </div>
            </section>

            {/* Empty div for spacer reset */}
            <div></div>

            <div className="c-block-about">
              <section className="c-about my-[120px] xl:my-[200px]">
                <div className="c-grid-container before:bg-powder relative before:absolute before:top-0 before:right-[var(--grid-edge-xl)] before:left-[var(--grid-edge-xl)] before:h-[1px] before:content-[''] max-xl:before:hidden xl:items-start xl:before:left-[var(--grid-edge-xl)]">
                  <div className="col-span-3 row-start-1 mb-[64px] xl:sticky xl:top-0 xl:col-span-4 xl:col-start-2 xl:mb-0 xl:py-[272px]">
                    <div className="w-full" data-scroll={true} data-scroll-offset="10%">
                      <h2 className="c-heading-h2 c-appear-blur-in">
                        A history of trust and knowledge
                      </h2>
                    </div>
                  </div>

                  <div
                    className="col-span-2 row-start-2 xl:col-span-3 xl:col-start-5 xl:row-start-1 xl:mt-auto"
                    data-scroll={true}
                    data-scroll-offset="5%"
                  >
                    <p className="c-text-body-indent c-appear-blur-in c-appear-delay-1">
                      With a tradition rooted in know-how, McGrath builds
                      sustainable homes with passion and rigor. Commitment,
                      quality and innovation are the cornerstones of each and
                      every one of our projects. Discover our history, our
                      values and our expertise in residential construction.
                    </p>
                    <div className="c-appear-up-in c-appear-delay-2 mt-[20px] xl:mt-[22px]">
                      <a
                        href="/about-us"
                        target="_self"
                        title="About us"
                        data-astro-cid-n7iexiqw="true"
                        className="c-button c-text-cta c-button-m c-button-appear"
                      >
                        <span className="c-button-bg" data-astro-cid-n7iexiqw></span>
                        <span className="c-button_inner" data-astro-cid-n7iexiqw>
                          <span className="c-bullet" data-astro-cid-n7iexiqw>
                            <span className="c-bullet-hover" data-astro-cid-n7iexiqw></span>
                          </span>
                          <span className="c-button_label" data-astro-cid-n7iexiqw>
                            <span className="c-button_label-hover" data-astro-cid-n7iexiqw>
                              About us
                            </span>
                          </span>
                          {/* {Tag === 'a' && target === '_blank' && <span aria-hidden="true">↗</span>} */}
                        </span>
                      </a>
                    </div>
                  </div>

                  <div
                    className="before:bg-powder relative col-span-2 row-start-2 before:absolute before:top-[16px] before:bottom-0 before:-left-[var(--grid-gutter-xl)] before:w-[1px] before:content-[''] max-xl:before:hidden xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:pt-[272px]"
                    data-scroll={true}
                    data-scroll-offset="5%"
                  >
                    <div
                      className="c-appear-up-in c-appear-delay-2 flex aspect-[453/724] w-full items-center overflow-hidden rounded-lg"
                      data-scroll={true}
                    >
                      <div
                        className="c-image is-loaded w-full -cover -lazy-load h-[104%] w-full"
                        data-scroll="true"
                        data-scroll-speed="-0.05"
                        style={{
                          aspectRatio: "0.7679180887372014",
                          "--width": 450,
                          "--height": 586,
                        } as React.CSSProperties}
                      >
                        <picture className="c-image_inner flex h-full w-full">

                          <img
                            src="/img/4.jpg"
                            alt=""
                            title=""
                            fetchPriority="auto"
                            loading="lazy"
                            className="c-image_img"

                            width={450}
                            height={586}
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>

                <ul
                  className="c-grid-container mt-[44px] space-y-[20px]"
                  data-scroll={true}
                  data-scroll-offset="5%"
                ></ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
