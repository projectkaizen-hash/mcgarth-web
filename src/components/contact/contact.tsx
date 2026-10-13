import { Project } from '@/lib/types';
import ProjectsMap from '@/components/map/projects-map';

interface ContactProps {
  projects?: Project[];
}

export default function Contact({ projects = [] }: ContactProps) {
  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <div>
          <c-hero
            class="c-hero undefined c-hero-centered overflow-visible"
            data-scroll="true"
            data-scroll-call="hero-contact"
            id="contact"
          >
            <div className="c-grid-container overflow-visible">
              <div className="c-hero-title_wrapper overflow-visible flex-column col-span-4 flex items-end justify-end xl:col-span-11 pt-8 xl:text-center xl:col-span-12! xl:col-start-1!">
                <h1 className="c-heading-h1 js-splitted" aria-label="Contact Us">
                  Contact <br className="xl:hidden" />Us
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
                    aria-label="Get in touch with McGrath Developments Ltd. We're here to help with your construction needs and answer any questions you may have about our projects and services."
                  >
                    <span className="c-heading-h3-indent-spacer">&nbsp;</span>
                    Get in touch with McGrath Developments Ltd. We&apos;re here to help with your
                    construction needs and answer any questions you may have
                    about our projects and services.
                  </h2>
                </div>
              </div>
            </c-block-title>

            <div className="c-block-contact">
              <c-contact className="c-contact block my-[105px] xl:my-[200px]" data-scroll="true" data-scroll-offset="5%">
                <div className="c-grid-container">
                  <div className="c-appear-up-in col-span-4 xl:col-span-9 xl:col-start-4">
                    <h2 className="c-text-label">Contact Us</h2>
                  </div>
                </div>
                <address className="c-grid-container c-heading-h2 [&_div]:border-powder mt-[37px] flex flex-col not-italic [&_div]:border-b [&_div]:py-[8px]">
                  <div className="c-appear-up-in c-appear-delay-1 ease-in-quart hover:ease-out-quad hover:border-blue col-span-4 transition-colors duration-300 xl:col-span-9 xl:col-start-4">
                    <a href="tel:01976247284" target="_blank" rel="noopener noreferrer" className="ease-in-quart hover:ease-out-quad hover:text-blue col-span-4 flex w-full transition-colors duration-300">
                      019 762 47284
                    </a>
                  </div>
                  <div className="c-appear-up-in c-appear-delay-2 ease-in-quart hover:ease-out-quad hover:border-blue col-span-4 transition-colors duration-300 xl:col-span-9 xl:col-start-4">
                    <a href="mailto:info@mcgrathbd.com" target="_blank" rel="noopener noreferrer" className="ease-in-quart hover:ease-out-quad hover:text-blue col-span-4 flex w-full transition-colors duration-300">
                      info@mcgrathbd.com
                    </a>
                  </div>
                  <div className="c-grid-cols-subgrid c-appear-up-in c-appear-delay-3 col-span-4 grid xl:col-span-9 xl:col-start-4">
                    <a href="https://maps.app.goo.gl/CCJVtn2SZoKVSzYV9" target="_blank" rel="noopener noreferrer" className="ease-in-quart hover:ease-out-quad hover:text-blue col-span-6 transition-colors duration-300">
                      SEL Rose-N-Dale Suite: 1101, 116 Kazi Nazrul Islam Avenue, Ramna, Dhaka-1217
                    </a>
                  </div>
                </address>
              </c-contact>
            </div>

            <div className="c-block-map">
              <section className="c-map my-[120px] xl:my-[200px]">
                <div className="c-grid-container">
                  <div className="col-span-4 mb-[30px] xl:col-span-4 xl:col-start-2 xl:mb-[40px]">
                    <h2 className="c-heading-h2 c-appear-blur-in">Our Projects</h2>
                  </div>
                  <div className="col-span-10 xl:col-span-10 xl:col-start-2">
                    <div className="w-full">
                      <div className="w-full rounded-lg overflow-hidden border border-powder" style={{ height: '600px' }}>
                        <ProjectsMap projects={projects} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  );
}
