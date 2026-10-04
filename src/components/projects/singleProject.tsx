'use client';

import Link from "next/link";
import { useRef, useEffect, useState } from 'react';
import { Project } from '@/lib/types';
import { ProjectBlocks } from './ProjectBlocks';
import ProgressBar from '../blocks/ProgressBar';

// ── helpers ──────────────────────────────────────────────────────────────────

function computeCountdown(deadline: string) {
  const now = new Date();
  const end = new Date(deadline);
  const totalMs = Math.max(0, end.getTime() - now.getTime());

  const totalSeconds = Math.floor(totalMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = totalDays % 30;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  return [
    { value: years, label: 'years' },
    { value: months, label: 'months' },
    { value: days, label: 'days' },
    { value: hours, label: 'hours' },
    { value: minutes, label: 'minutes' },
  ];
}

function toDigits(value: number): number[] {
  return String(value).padStart(2, '0').split('').map(Number);
}

// ── DigitWindow ───────────────────────────────────────────────────────────────

function DigitWindow({ value, delay, animated }: { value: number; delay: number; animated: boolean }) {
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;  // ← only run when parent says so
    const column = columnRef.current;
    if (!column) return;
    const digitHeight = column.parentElement?.offsetHeight ?? 0;
    setTimeout(() => {
      column.style.transform = `translateY(-${value * digitHeight}px)`;
    }, delay);
  }, [animated, value, delay]);

  return (
    <div className="scarano-digit-window">
      <div
        ref={columnRef}
        className="scarano-digit-column"
        data-value={value}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="scarano-digit">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SingleProject ─────────────────────────────────────────────────────────────

export default function SingleProject({
  project,
  index,
  allProjects,
}: {
  project: Project;
  index: number;
  allProjects: Project[];
}) {
  const nextProjectIndex = (index + 1) % allProjects.length;
  const nextProject = allProjects[nextProjectIndex];

  // ── live countdown ──────────────────────────────────────────────────────────
  const [counters, setCounters] = useState(() =>
    project.deadline ? computeCountdown(project.deadline) : []
  );

  useEffect(() => {
    if (!project.deadline) return;

    // update every minute so minutes tick live
    const id = setInterval(() => {
      setCounters(computeCountdown(project.deadline!));
    }, 60_000);

    return () => clearInterval(id);
  }, [project.deadline]);

  // ── intersection observer for scroll-triggered animation ───────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            setHasAnimated(true);

            const columns = section.querySelectorAll<HTMLDivElement>(
              '.scarano-digit-column'
            );
            columns.forEach((column, i) => {
              const targetValue = parseInt(
                column.getAttribute('data-value') ?? '0',
                10
              );
              setTimeout(() => {
                const digitHeight = column.parentElement?.offsetHeight ?? 0;
                column.style.transform = `translateY(-${targetValue * digitHeight}px)`;
              }, 300 + i * 150);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main id="swup" className="transition-fade">
      <div id="content">
        <div>
          <c-hero
            className="c-hero undefined false overflow-visible"
            data-scroll="true"
            data-scroll-call="hero-project"
            id="project"
          >
            <div className="c-grid-container overflow-visible">
              <div className="c-hero-title_wrapper overflow-visible flex-column col-span-4 flex items-end justify-end xl:col-span-11 pt-8">
                <h1 className="c-heading-h1 js-splitted" aria-label={project.title}>
                  {project.title}
                </h1>
              </div>
              <div className="col-span-4 border-b border-black xl:col-span-12 mt-1"></div>
            </div>
          </c-hero>

          <c-intro-project className="c-intro-project pb-1 block" data-scroll="true">
            <div className="c-grid-container">
              <div className="relative z-5 col-span-2 flex grid-cols-subgrid flex-col pt-1 pb-0 xl:col-span-6">
                <Link
                  href="/projects"
                  className="c-appear-up-in c-underline-link c-appear-delay-1 hidden w-fit cursor-pointer items-center gap-x-[11px] xl:flex xl:flex-row"
                >
                  <span className="c-icon flex! w-[12px]" data-astro-cid-nw4aqlt6>
                    <svg
                      width="1em"
                      height="1em"
                      className="svg-arrowAlt undefined"
                      aria-hidden="true"
                      focusable="false"
                      data-astro-cid-nw4aqlt6="true"
                      data-icon="arrowAlt"
                    >
                      <symbol id="ai:local:arrowAlt" viewBox="0 0 12 12">
                        <path
                          fill="none"
                          stroke="#141415"
                          strokeLinecap="square"
                          strokeWidth="2"
                          d="M11 6H2m0 0 3.808-3.808M2 6l3.808 3.808"
                        />
                      </symbol>
                      <use href="#ai:local:arrowAlt"></use>
                    </svg>
                  </span>
                  <span className="c-text-body font-medium">Projets</span>
                </Link>

                <dl className="c-appear-up-in c-appear-delay-2 mt-auto grid columns-2 gap-x-[20px] max-xl:hidden">
                  <div className="flex flex-row border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Land Area</dt>
                    <dd className="c-text-body w-1/2 font-light">{project.landArea}</dd>
                  </div>

                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Number of Floors</dt>
                    <dd className="c-text-body w-1/2 font-light">{project.numberOfFloors}</dd>
                  </div>
                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Total Units</dt>
                    <dd className="c-text-body w-1/2 font-light">{project.totalUnits}</dd>
                  </div>
                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Brochure</dt>
                    <dd className="c-text-body w-1/2 font-light">
                      {project.brochure ? (
                        <a
                          href={`${project.brochure}?dl`}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline"
                        >
                          Download
                        </a>
                      ) : (
                        'Download'
                      )}
                    </dd>
                  </div>
                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Inspection Report</dt>
                    <dd className="c-text-body w-1/2 font-light">
                      {project.inspectionReports && project.inspectionReports.length > 0 ? (
                        <div className="flex items-center gap-1">
                          <select
                            onChange={(e) => {
                              const selectedReport = project.inspectionReports?.find(
                                (r) => r.title === e.target.value
                              );
                              if (selectedReport?.file) {
                                window.open(`${selectedReport.file}?dl`, '_blank');
                              }
                            }}
                            className="bg-transparent focus:outline-none appearance-none cursor-pointer font-medium"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select Report
                            </option>
                            {project.inspectionReports.map((report) => (
                              <option key={report.title} value={report.title}>
                                {report.title}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 1L5 5L9 1" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        'No reports'
                      )}
                    </dd>
                  </div>
                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px] pb-[6px]!">
                    <dt className="c-text-body w-1/2 font-medium">Location</dt>
                    <dd className="c-text-body w-1/2 font-light">{project.location}</dd>
                  </div>
                </dl>
              </div>

              <div className="relative z-5 col-span-2 grid grid-cols-subgrid grid-rows-2 pt-1 pb-1 before:absolute before:top-1 before:bottom-1 before:-left-1 before:w-[1px] before:bg-black before:content-[''] xl:col-span-6 xl:pl-2">
                <div className="c-text-body c-appear-blur-in c-appear-delay-3 col-span-6 mb-auto hidden flex-row justify-between pb-15 font-medium xl:flex">
                  <span>Construction</span> <span>McGrath</span>
                </div>
                <span className="c-heading-h1 c-appear-blur-in c-appear-delay-4 relative col-span-3 row-start-2 mt-5 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="c-appear-up-in c-appear-delay-4 absolute right-0 bottom-[6px] text-[15px] font-light xl:text-[18px]">
                  / {String(allProjects.length).padStart(2, '0')}
                </span>

              </div>

              <div className="col-span-4 xl:hidden">
                <dl className="c-appear-up-in c-appear-delay-2 mt-auto grid columns-2 gap-x-[20px]">
                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Type du projet</dt>
                    <dd className="c-text-body w-1/2 pl-1.5 xl:pl-0">{project.type}</dd>
                  </div>
                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Date</dt>
                    <dd className="c-text-body w-1/2 pl-1.5 xl:pl-0">{project.year}</dd>
                  </div>
                  <div className="flex flex-row border-t-[1px] border-black py-[8px] xl:py-[12px]">
                    <dt className="c-text-body w-1/2 font-medium">Emplacement</dt>
                    <dd className="c-text-body w-1/2 pl-1.5 xl:pl-0">{project.location}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </c-intro-project>

          <div className="c-blocks">
            <section className="c-grid-container c-appear-blur-in grid" data-scroll>
              <div className="c-safari-image-radius col-span-4 flex items-center overflow-hidden rounded-[4px] bg-current xl:col-span-12">
                <div
                  className="c-image is-loaded w-full -cover -lazy-load h-[110%] w-full"
                  data-scroll="true"
                  data-scroll-speed="-0.075"
                  style={{
                    aspectRatio: "1.499063085571518",
                    "--width": 2400,
                    "--height": 1601,
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

                      width={2400}
                      height={1601}
                    />
                  </picture>
                </div>
              </div>
            </section>

            <div className="c-block-title">
              <section ref={sectionRef} className="scarano-counter-section">
                <div className="scarano-counter-inner">
                  {project.deadline ? (
                    <div className="scarano-counter-wrapper">
                      {counters.map((counter, counterIndex) => {
                        const digits = toDigits(counter.value);
                        // global digit index used for staggered delay
                        const globalOffset = counters
                          .slice(0, counterIndex)
                          .reduce((sum, c) => sum + toDigits(c.value).length, 0);

                        return (
                          <div key={counterIndex} className="scarano-counter-item">
                            <div className="scarano-counter-number">
                              {digits.map((digit, digitIndex) => (
                                <DigitWindow
                                  key={digitIndex}
                                  value={digit}
                                  delay={300 + (globalOffset + digitIndex) * 150}
                                  animated={hasAnimated}  // ← add this
                                />
                              ))}
                            </div>
                            <div className="scarano-counter-label">
                              {counter.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="c-text-body">No deadline set.</p>
                  )}

                  <div className="scarano-counter-description">
                    <p className='c-text-body !text-[32px] font-medium'>
                      {project.description}
                    </p>
                  </div>
                </div>
              </section>
            </div>
            {project.blocks && <ProjectBlocks blocks={project.blocks} />}
          </div>
        </div>

        <c-full-project-card
          className="c-full-project-card block mt-[220px]"
          data-astro-cid-wipjvxqe="true"
        >
          <div className="c-grid-container" data-scroll data-astro-cid-wipjvxqe>
            <h2
              className="c-heading-h2 c-appear-blur-in col-span-4 mb-[24px] whitespace-pre-line xl:col-span-6 xl:col-start-7"
              data-astro-cid-wipjvxqe
            >
              Next<br />Project
            </h2>
          </div>
          <a
            href={nextProject.href}
            className="c-grid-container relative aspect-[8-4]"
            aria-label={`Voir le projet: ${nextProject.title}`}
            data-astro-cid-wipjvxqe
          >
            <div
              className="c-safari-image-radius relative col-span-4 flex items-center justify-center overflow-hidden rounded-[8px] bg-current xl:col-span-12"
              data-astro-cid-wipjvxqe
            >
              <div
                className="c-image is-loaded w-full -cover -lazy-load h-[110%] w-full"
                data-scroll="true"
                data-astro-cid-wipjvxqe="true"
                data-scroll-speed="-0.075"
                style={{
                  aspectRatio: "1.499063085571518",
                  "--width": 2400,
                  "--height": 1601,
                } as React.CSSProperties}
              >
                <picture className="c-image_inner flex h-full w-full">
                  <img
                    src={nextProject.image}
                    alt=""
                    title=""
                    fetchPriority="auto"
                    loading="lazy"
                    className="c-image_img"

                    width={2400}
                    height={1601}
                  />
                </picture>
              </div>
            </div>

            <div
              className="c-grid-container absolute top-0 right-0 xl:h-full xl:items-end"
              data-astro-cid-wipjvxqe
            >
              <div
                className="col-span-4 py-[6px] pr-[6px] pl-[6px] xl:sticky xl:bottom-8 xl:left-0 xl:col-span-6 xl:col-start-7 xl:pr-[4px] xl:pl-[4px]"
                data-astro-cid-wipjvxqe
              >
                <div
                  className="c-bullet-wrapper flex justify-between rounded bg-white p-[8px] xl:p-[15px]"
                  data-bullet-label="See"
                  data-astro-cid-wipjvxqe
                >
                  <span className="c-bullet relative top-[2px]" data-astro-cid-wipjvxqe>
                    <span className="c-bullet-hover" data-astro-cid-wipjvxqe></span>
                  </span>
                  <div className="flex max-w-[80%] flex-col w-fit xl:w-[320px]">
                    <p className="c-text-subtitle flex w-full justify-end border-b pb-[8px]">
                      <span className="flex-grow">{nextProject.title}</span>
                      <span className="w-1 border-l"></span>
                      <span>{String(nextProjectIndex + 1).padStart(2, '0')}</span>
                    </p>
                    <p className="c-text-small pt-[8px]">
                      <i className="mr-0.5">{nextProject.year}</i>
                      <span className="pr-1.5 xl:pr-0">{nextProject.type}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </c-full-project-card>
      </div>
    </main>
  );
}
