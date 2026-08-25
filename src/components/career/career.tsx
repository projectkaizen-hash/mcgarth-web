'use client';

import { useEffect, useState } from 'react';
import { sanityClient, jobVacanciesQuery } from '@/lib/sanity';
import { JobVacancy } from '@/lib/types';
import ApplicationForm from "./application-form";

export default function Career() {
  const [jobVacancies, setJobVacancies] = useState<JobVacancy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobVacancies() {
      try {
        console.log('Fetching job vacancies from API...');
        const response = await fetch('/api/job-vacancies');
        const data = await response.json();
        console.log('Fetched data:', data);
        setJobVacancies(data);
      } catch (error) {
        console.error('Error fetching job vacancies:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobVacancies();
  }, []);
  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <div>
          <c-hero
            className="c-hero undefined false overflow-visible"
            data-scroll="true"
            data-scroll-call="hero-career"
            id="career"
          >
            <div className="c-grid-container overflow-visible">
              <div className="c-hero-title_wrapper overflow-visible flex-column col-span-4 flex items-end justify-end xl:col-span-11 pt-8">
                <h1 className="c-heading-h1 js-splitted" aria-label="Careers">
                  Careers
                </h1>
              </div>
              <div className="col-span-4 border-b border-black xl:col-span-12 mt-1"></div>
            </div>
          </c-hero>

          <c-intro-career className="c-intro-about" data-scroll="true">
            <div className="c-grid-container">
              <div className="c-intro__card c-grid-cols-subgrid relative col-span-2 grid grid-rows-2 pt-1 pb-2 xl:col-span-6">
                <span className="c-text-body c-appear-blur-in c-appear-delay-1 col-span-2 font-medium xl:col-span-6">
                  Build your future
                </span>
                <div className="col-span-2 mt-auto xl:col-span-3">
                  <p className="c-text-body-indent intro-text c-appear-blur-in c-appear-delay-2">
                    We're always looking for talented individuals to join our team. If you're passionate about construction and want to build something meaningful, we'd love to hear from you.
                  </p>
                </div>
              </div>
              <div className="c-intro__card c-grid-cols-subgrid relative col-span-2 grid grid-rows-2 pt-1 pb-2 before:absolute before:top-1 before:bottom-1 before:-left-1 before:w-[1px] before:bg-black before:content-[''] xl:col-span-6 xl:pl-2">
                <div className="c-text-body c-appear-blur-in c-appear-delay-3 col-span-2 flex flex-row justify-between font-medium xl:col-span-6">
                  <span>Join</span> <span>Our Team</span>
                </div>
                <span className="c-heading-h1 c-appear-blur-in c-appear-delay-4 col-span-2 mt-auto xl:col-span-5">
                  2024
                </span>
              </div>
            </div>
          </c-intro-career>

          <div className="c-blocks">
            {/* Full-width Image Block */}
            <div className="c-block-image c-space-cancel">
              <section className="c-grid-container c-appear-blur-in grid" data-scroll>
                <div className="c-safari-image-radius col-span-4 flex items-center overflow-hidden rounded-[4px] bg-current xl:col-span-12">
                  <div
                    className="c-image is-loaded w-full -cover -lazy-load h-[110%] w-full"
                    style={{ aspectRatio: "1.6" }}
                    data-scroll="true"
                    data-scroll-speed="-0.075"
                  >
                    <picture className="c-image_inner flex h-full w-full">
                      <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2400&h=1500&fit=crop"
                        alt="Construction team working"
                        className="c-image_img"
                        width={2400}
                        height={1500}
                      />
                    </picture>
                  </div>
                </div>
              </section>
            </div>

            {/* Block Title */}
            <div className="c-block-title">
              <c-block-title
                className="undefined"
                data-scroll="true"
                data-scroll-offset="10%"
              >
                <div className="c-grid-container">
                  <div className="col-span-4 grid grid-cols-subgrid xl:col-span-9 xl:col-start-4">
                    <h2
                      className="c-heading-h3-indented js-splitted col-span-4 xl:col-span-9"
                      aria-label="Join our team and build your career with McGrath BD. We're looking for passionate individuals who share our commitment to excellence and innovation in construction."
                    >
                      <span className="c-heading-h3-indent-spacer">&nbsp;</span> Join our team and build your career with McGrath BD. We're looking for passionate individuals who share our commitment to excellence and innovation in construction.
                    </h2>
                  </div>
                </div>
              </c-block-title>
            </div>

            {/* Open Positions Block - Using Services-style numbered cards */}
            <div className="c-block-services">
              <c-services className="c-services">
                <div className="c-grid-container mt-[120px] items-start xl:mt-[200px]">
                  <div className="col-span-4 grid grid-cols-subgrid xl:sticky xl:top-0 xl:left-0 xl:col-span-8 xl:pt-4" data-scroll data-scroll-offset="40%">
                    <div className="col-span-3 mb-[74px] self-start xl:col-span-4 xl:col-start-2 xl:mb-0">
                      <h2 className="c-heading-h2 c-appear-blur-in">Open Positions</h2>
                    </div>
                    <div className="col-span-2 col-start-3 mx-auto xl:col-span-3 xl:col-start-5 xl:mt-[210px]">
                      <p className="c-text-body-indent c-appear-blur-in c-appear-delay-2">
                        {loading ? (
                          "Loading positions..."
                        ) : jobVacancies.length === 0 ? (
                          "No open positions at the moment. Please check back later."
                        ) : (
                          `We currently have ${jobVacancies.length} open position${jobVacancies.length > 1 ? 's' : ''} available. Join our team and contribute to building excellence in Bangladesh.`
                        )}
                      </p>
                    </div>
                  </div>

                  <ul className="l:mt-[499px] col-span-4 mt-[64px] flex flex-col gap-[20px] self-start xl:col-start-9 xl:row-start-1 xl:mt-0" data-scroll data-scroll-offset="15%">
                    {loading ? (
                      <li className="c-text-body">Loading positions...</li>
                    ) : jobVacancies.length === 0 ? (
                      <li className="c-text-body">No open positions at the moment.</li>
                    ) : (
                      jobVacancies.map((job, index) => (
                        <li key={job._id} className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                            <span className="c-heading-h4-alt after:content-['']">{String(index + 1).padStart(2, '0')}</span>
                            <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                              {job.title}
                            </h3>
                          </div>
                          <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                            <p className="mb-2">{job.description}</p>
                            <p className="c-text-label">{job.location} • {job.employmentType}</p>
                            {job.salary && <p className="c-text-label mt-1">{job.salary}</p>}
                          </div>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </c-services>
            </div>

            {/* About Block - Why McGrath BD */}
            <div className="c-block-about">
              <section className="c-about my-[120px] xl:my-[200px]">
                <div className="c-grid-container before:bg-powder relative before:absolute before:top-0 before:right-[var(--grid-edge-xl)] before:left-[var(--grid-edge-xl)] before:h-[1px] before:content-[''] max-xl:before:hidden xl:items-start xl:before:left-[var(--grid-edge-xl)]">
                  <div className="col-span-3 row-start-1 mb-[64px] xl:sticky xl:top-0 xl:col-span-4 xl:col-start-2 xl:mb-0 xl:py-[272px]">
                    <div className="w-full" data-scroll data-scroll-offset="10%">
                      <h2 className="c-heading-h2 c-appear-blur-in">Why McGrath BD?</h2>
                    </div>
                  </div>
                  <div className="col-span-2 row-start-2 xl:col-span-3 xl:col-start-5 xl:row-start-1 xl:mt-auto" data-scroll data-scroll-offset="5%">
                    <p className="c-text-body-indent c-appear-blur-in c-appear-delay-1">
                      We believe in building careers as strongly as we build structures. Our team is our greatest asset, and we invest in their growth and success.
                    </p>
                  </div>
                  <div className="before:bg-powder relative col-span-2 row-start-2 before:absolute before:top-[16px] before:bottom-0 before:-left-[var(--grid-gutter-xl)] before:w-[1px] before:content-[''] max-xl:before:hidden xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:pt-[272px]" data-scroll data-scroll-offset="5%">
                    <div className="c-appear-up-in c-appear-delay-2 flex aspect-[453/724] w-full items-center overflow-hidden rounded-lg" data-scroll>
                      <div className="c-image is-loaded w-full -cover -lazy-load h-[104%] w-full" style={{ aspectRatio: "0.625" }} data-scroll="true" data-scroll-speed="-0.05">
                        <picture className="c-image_inner flex h-full w-full">
                          <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=450&h=720&fit=crop"
                            alt="Team collaboration"
                            className="c-image_img"
                            width={450}
                            height={720}
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="c-grid-container mt-[44px] space-y-[20px]" data-scroll data-scroll-offset="5%">
                  <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-1">
                    <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                      <span className="c-heading-h4-alt after:content-['']">01</span>
                      <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                        Growth & Development
                      </h3>
                    </div>
                    <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                      <p>Continuous learning opportunities and clear career progression paths for every team member.</p>
                    </div>
                  </li>
                  <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-2">
                    <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                      <span className="c-heading-h4-alt after:content-['']">02</span>
                      <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                        Competitive Compensation
                      </h3>
                    </div>
                    <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                      <p>Industry-leading salaries and comprehensive benefits package.</p>
                    </div>
                  </li>
                  <li className="relative col-span-4 flex xl:h-full flex-col rounded-md border border-powder p-[16px] c-appear-blur-in c-appear-delay-3">
                    <div className="c-heading-h4 border-powder relative flex flex-row items-center gap-[64px] border-b px-[32px] pt-[16px] pb-[23px]">
                      <span className="c-heading-h4-alt after:content-['']">03</span>
                      <h3 className="before:bg-powder before:absolute before:top-0 before:left-[90px] before:h-[54px] before:w-[1px] before:content-[''] xl:before:h-[64px]">
                        Collaborative Culture
                      </h3>
                    </div>
                    <div className="card-rich-text mt-auto pt-[122px] xl:pt-[190px]">
                      <p>A supportive environment where ideas are valued and teamwork thrives.</p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>

            <ApplicationForm jobVacancies={jobVacancies} />

            <div className="c-block-content">
              <section className="undefined" data-scroll>
                <div className="c-grid-container my-[80px] xl:my-[115px]">
                  <h2 className="c-heading-h2 c-appear-blur-in col-span-3 mb-[92px] xl:col-span-4 xl:col-start-2 xl:mb-0">
                    Get in touch
                  </h2>
                  <div className="c-p-no-split columns-1 xl:columns-2 gap-2 xl:col-span-6 col-span-3 col-start-2 xl:col-start-7 c-appear-blur-in c-appear-delay-1">
                    <p>
                      Don't see a position that matches your skills? Send us your CV and we'll keep you in mind for future opportunities.
                    </p>
                    <p>
                      We're always looking for talented individuals to join our team. If you're passionate about construction and want to build something meaningful, we'd love to hear from you.
                    </p>
                  </div>
                  <div className="xl:col-span-6 col-span-3 col-start-2 xl:col-start-7 mt-8">
                    <div className="c-appear-up-in c-appear-delay-1">
                      <a
                        href="mailto:careers@mcgrathbd.com"
                        data-astro-cid-n7iexiqw="true"
                        className="c-button c-text-cta c-button-m inline-block"
                      >
                        <span className="c-button-bg" data-astro-cid-n7iexiqw="true"></span>
                        <span className="c-button_inner" data-astro-cid-n7iexiqw="true">
                          <span className="c-bullet" data-astro-cid-n7iexiqw="true">
                            <span className="c-bullet-hover" data-astro-cid-n7iexiqw="true"></span>
                          </span>
                          <span className="c-button_label" data-astro-cid-n7iexiqw="true">
                            <span className="c-button_label-hover lowercase" data-astro-cid-n7iexiqw="true">careers@mcgrathbd.com</span>
                          </span>
                        </span>
                      </a>
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
