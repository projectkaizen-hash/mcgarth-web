"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ProgressImage {
  url: string;
  width: number;
  height: number;
}

interface ProjectProgress {
  progress25?: ProgressImage[];
  progress50?: ProgressImage[];
  progress75?: ProgressImage[];
  progress100?: ProgressImage[];
}

interface ProgressBarProps {
  progress?: ProjectProgress;
}

// ── Milestone config ──────────────────────────────────────────────────────────

const MILESTONES = [
  { value: 25,  key: "progress25",  label: "Foundation", phase: "Phase I"   },
  { value: 50,  key: "progress50",  label: "Structure",  phase: "Phase II"  },
  { value: 75,  key: "progress75",  label: "Interior",   phase: "Phase III" },
  { value: 100, key: "progress100", label: "Handover",   phase: "Phase IV"  },
] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

function getImages(progress: ProjectProgress | undefined, key: string): ProgressImage[] {
  return (progress as any)?.[key] ?? [];
}

function getHighestReached(progress: ProjectProgress | undefined): number | null {
  for (let i = MILESTONES.length - 1; i >= 0; i--) {
    if (getImages(progress, MILESTONES[i].key).length > 0) return MILESTONES[i].value;
  }
  return null;
}

function getLowestReached(progress: ProjectProgress | undefined): number | null {
  for (let i = 0; i < MILESTONES.length; i++) {
    if (getImages(progress, MILESTONES[i].key).length > 0) return MILESTONES[i].value;
  }
  return null;
}

// ── Single image tile ─────────────────────────────────────────────────────────

function ImgTile({
  img,
  alt,
  ratio,
  colSpan,
}: {
  img: ProgressImage;
  alt: string;
  ratio: string;
  colSpan?: number;
}) {
  return (
    <div
      className="c-safari-image-radius overflow-hidden rounded-[4px] bg-[#F0EDE9]"
      style={{
        aspectRatio: ratio,
        gridColumn: colSpan ? `span ${colSpan}` : undefined,
      }}
    >
      <img
        src={img.url}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover "
        width={img.width || undefined}
        height={img.height || undefined}
      />
    </div>
  );
}

// ── Image Panel ───────────────────────────────────────────────────────────────
//
//  Layout rules (uses c-grid-container col-span pattern):
//  1 image  → col-span-4 xl:col-span-12, ratio 3:1
//  2 images → each col-span-2 xl:col-span-6, ratio 3:2
//  3 images → first two col-span-2 xl:col-span-6 (3:2), third col-span-4 xl:col-span-12 (3:1)
//  4+ images → paginated (4 per page), pairs of col-span-2 xl:col-span-6,
//              lone trailing image col-span-4 xl:col-span-12

function ImagePanel({ images, label }: { images: ProgressImage[]; label: string }) {
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const viewportRef    = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const count = images.length;
  if (count === 0) return null;

  // ── 1 image ───────────────────────────────────────────────────────────────
  if (count === 1) {
    return (
      <div className="c-grid-container !gap-y-[20px]">
        <div className="col-span-4 xl:col-span-12">
          <ImgTile img={images[0]} alt={`${label} — photo 1`} ratio="3/1" />
        </div>
      </div>
    );
  }

  // ── 2 images ──────────────────────────────────────────────────────────────
  if (count === 2) {
    return (
      <div className="c-grid-container !gap-y-[20px]">
        <div className="col-span-2 xl:col-span-6">
          <ImgTile img={images[0]} alt={`${label} — photo 1`} ratio="3/2" />
        </div>
        <div className="col-span-2 xl:col-span-6">
          <ImgTile img={images[1]} alt={`${label} — photo 2`} ratio="3/2" />
        </div>
      </div>
    );
  }

  // ── 3 images ──────────────────────────────────────────────────────────────
  if (count === 3) {
    return (
      <div className="c-grid-container !gap-y-[20px]">
        <div className="col-span-2 xl:col-span-6">
          <ImgTile img={images[0]} alt={`${label} — photo 1`} ratio="3/2" />
        </div>
        <div className="col-span-2 xl:col-span-6">
          <ImgTile img={images[1]} alt={`${label} — photo 2`} ratio="3/2" />
        </div>
        <div className="col-span-4 xl:col-span-12">
          <ImgTile img={images[2]} alt={`${label} — photo 3`} ratio="3/1" />
        </div>
      </div>
    );
  }

  // ── 4+ images: paginated (4 per page) ─────────────────────────────────────
  const PER_PAGE  = 4;
  const pageCount = Math.ceil(count / PER_PAGE);

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(pageCount - 1, next));
    if (viewportRef.current && sliderTrackRef.current) {
      const w = viewportRef.current.offsetWidth;
      gsap.to(sliderTrackRef.current, {
        x: -clamped * w,
        duration: 0.55,
        ease: "power3.inOut",
      });
    }
    setPage(clamped);
  };

  // Build each page as a list of { img, colSpan, ratio } descriptors
  const pages = Array.from({ length: pageCount }, (_, pi) => {
    const slice = images.slice(pi * PER_PAGE, (pi + 1) * PER_PAGE);
    const items: { img: ProgressImage; colSpan: string; ratio: string; idx: number }[] = [];

    let i = 0;
    while (i < slice.length) {
      const remaining = slice.length - i;
      if (remaining === 1) {
        items.push({ img: slice[i], colSpan: "col-span-4 xl:col-span-12", ratio: "3/1", idx: pi * PER_PAGE + i });
        i += 1;
      } else {
        items.push({ img: slice[i],     colSpan: "col-span-2 xl:col-span-6", ratio: "3/2", idx: pi * PER_PAGE + i });
        items.push({ img: slice[i + 1], colSpan: "col-span-2 xl:col-span-6", ratio: "3/2", idx: pi * PER_PAGE + i + 1 });
        i += 2;
      }
    }
    return items;
  });

  return (
    <div className="relative">
      {/* Viewport */}
      <div ref={viewportRef} className="overflow-hidden">
        <div
          ref={sliderTrackRef}
          className="flex"
          style={{ width: `${pageCount * 100}%` }}
        >
          {pages.map((pageItems, pi) => (
            <div
              key={pi}
              className="c-grid-container !gap-y-[20px]"
              style={{ width: `${100 / pageCount}%`, flexShrink: 0 }}
            >
              {pageItems.map(({ img, colSpan, ratio, idx }) => (
                <div key={idx} className={colSpan}>
                  <ImgTile
                    img={img}
                    alt={`${label} — photo ${idx + 1}`}
                    ratio={ratio}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between mt-[16px]">
        {/* Page dots */}
        <div className="flex gap-[6px] items-center">
          {Array.from({ length: pageCount }).map((_, pi) => (
            <button
              key={pi}
              onClick={() => goTo(pi)}
              aria-label={`Go to page ${pi + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width:      pi === page ? 20 : 6,
                height:     6,
                background: pi === page ? "#141415" : "#D0CEC9",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-[10px]">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="flex items-center justify-center w-[36px] h-[36px] border border-black/10 rounded-full transition-all hover:border-black/40 disabled:opacity-20"
            aria-label="Previous"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M11 6H2m0 0 3.808-3.808M2 6l3.808 3.808" stroke="#141415" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
          <button
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount - 1}
            className="flex items-center justify-center w-[36px] h-[36px] border border-black/10 rounded-full transition-all hover:border-black/40 disabled:opacity-20"
            aria-label="Next"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h9m0 0L6.192 2.192M10 6l-3.808 3.808" stroke="#141415" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function ProgressBar({ progress }: ProgressBarProps) {
  // Default to the highest reached milestone — never null if any images exist
  const initialActive = getHighestReached(progress) ?? getLowestReached(progress);
  const [active, setActive] = useState<number | null>(initialActive);
  const [imgKey, setImgKey] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const fillRef    = useRef<HTMLDivElement>(null);
  const nodeRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const panelRef   = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const hasEntered = useRef(false);

  const activeMilestone = MILESTONES.find((m) => m.value === active) ?? null;
  const activeImages    = activeMilestone ? getImages(progress, activeMilestone.key) : [];
  const isReachable     = (value: number) =>
    getImages(progress, MILESTONES.find((m) => m.value === value)!.key).length > 0;

  // Each dot sits at the centre of its column in a 4-column grid.
  // Column centres are at 12.5%, 37.5%, 62.5%, 87.5% of the track width.
  const fillWidthPct = (value: number | null): number => {
    if (value === null) return 0;
    const idx = MILESTONES.findIndex((m) => m.value === value);
    if (idx < 0) return 0;
    const n = MILESTONES.length; // 4
    return ((idx * 2 + 1) / (n * 2)) * 100; // (0*2+1)/(4*2)*100 = 12.5, 37.5, 62.5, 87.5
  };

  // ── Entrance (scroll-triggered) ──────────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set(headerRef.current,                { opacity: 0, y: 10 });
    gsap.set(labelRefs.current.filter(Boolean), { opacity: 0, y: 12 });
    gsap.set(nodeRefs.current.filter(Boolean),  { scale: 0, opacity: 0 });
    gsap.set(fillRef.current,                   { width: "0%" });
    gsap.set(panelRef.current,                  { opacity: 0, y: 18 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasEntered.current) return;
        hasEntered.current = true;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(headerRef.current, { opacity: 1, y: 0, duration: 0.45 });

        tl.to(
          labelRefs.current.filter(Boolean),
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, clearProps: "transform" },
          "-=0.25"
        );

        tl.to(
          nodeRefs.current.filter(Boolean),
          { scale: 1, opacity: 1, duration: 0.35, stagger: 0.08, ease: "back.out(2)", clearProps: "transform" },
          "-=0.4"
        );

        tl.to(
          fillRef.current,
          { width: `${fillWidthPct(active)}%`, duration: 0.8, ease: "power2.inOut" },
          "-=0.2"
        );

        tl.to(panelRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

        observer.disconnect();
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Fill on active change ────────────────────────────────────────────────
  useEffect(() => {
    if (!fillRef.current || !hasEntered.current) return;
    gsap.to(fillRef.current, {
      width: `${fillWidthPct(active)}%`,
      duration: 0.65,
      ease: "power2.inOut",
    });
  }, [active]);

  // ── Click handler — no deselect, clicking active does nothing ────────────
  const handleClick = (value: number) => {
    if (!isReachable(value)) return;
    if (value === active) return; // already selected, do nothing

    gsap.to(panelRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        setActive(value);
        setImgKey((k) => k + 1);
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.38, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <section ref={sectionRef} className="c-block-progress !mt-[80px] xl:!mt-[120px]">

      {/* ── First c-grid-container: header + tracker ─────────────────────── */}
      <div className="c-grid-container">

        {/* Section header */}
        <div
          ref={headerRef}
          className="col-span-4 xl:col-span-12 mb-[32px] xl:mb-[48px] flex items-end justify-between border-b border-black pb-[14px]"
        >
          <span className="c-text-body !text-[32px] font-medium">Construction Progress</span>
          {active !== null && (
            <span className="c-text-body font-light tabular-nums opacity-60">
              {active}% complete
            </span>
          )}
        </div>

        {/* Horizontal progress tracker */}
        <div className="col-span-4 xl:col-span-12 mb-[32px] xl:mb-[48px]">

          {/* Labels above */}
          <div className="grid grid-cols-4 mb-[20px]">
            {MILESTONES.map((milestone, i) => {
              const reached    = isReachable(milestone.value);
              const isActive   = active === milestone.value;
              const isDisabled = !reached;

              return (
                <div
                  key={milestone.value}
                  ref={(el) => { labelRefs.current[i] = el; }}
                  onClick={() => reached && handleClick(milestone.value)}
                  className={[
                    "flex flex-col items-center gap-[4px] transition-opacity duration-300",
                    isDisabled
                      ? "opacity-25 cursor-not-allowed pointer-events-none"
                      : "cursor-pointer",
                    !isActive && !isDisabled ? "opacity-60" : "",
                  ].join(" ")}
                >
                  <span
                    className="text-[13px] font-medium tracking-[0.01em] transition-colors duration-300"
                    style={{ color: isActive ? "#141415" : "#9C9A97" }}
                  >
                    {milestone.label}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.14em] transition-colors duration-300"
                    style={{ color: isActive ? "#6B6966" : "#C4C2BE" }}
                  >
                    {milestone.phase}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Track row */}
          <div className="relative h-[24px] flex items-center">

            {/* Ghost background track */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-black/[0.10]" />

            {/* Dashed future segment */}
            <div
              className="absolute top-1/2 -translate-y-1/2 right-0 h-px"
              style={{
                left: `${fillWidthPct(active)}%`,
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 5px, transparent 5px, transparent 10px)",
              }}
            />

            {/* Solid filled segment */}
            <div
              ref={fillRef}
              className="absolute top-1/2 -translate-y-1/2 left-0 h-px bg-[#141415]"
              style={{ width: "0%" }}
            />

            {/* Circle nodes */}
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
              {MILESTONES.map((milestone, i) => {
                const reached  = isReachable(milestone.value);
                const isActive = active === milestone.value;
                const isPast   = active !== null && milestone.value <= active;

                return (
                  <div
                    key={milestone.value}
                    className="flex justify-center items-center pointer-events-auto"
                    onClick={() => reached && handleClick(milestone.value)}
                    style={{ cursor: reached ? "pointer" : "default" }}
                  >
                    <div
                      ref={(el) => { nodeRefs.current[i] = el; }}
                      className="rounded-full border-[1.5px] transition-all duration-500"
                      style={{
                        width:           isActive ? 14 : 10,
                        height:          isActive ? 14 : 10,
                        borderColor:     isPast || isActive ? "#141415" : "#D0CEC9",
                        backgroundColor: isPast || isActive ? "#141415" : "#F8F6F3",
                        boxShadow:       isActive ? "0 0 0 5px rgba(20,20,21,0.09)" : "none",
                        opacity:         0, // GSAP animates in
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* % labels below */}
          <div className="grid grid-cols-4 mt-[10px]">
            {MILESTONES.map((milestone) => {
              const reached  = isReachable(milestone.value);
              const isActive = active === milestone.value;

              return (
                <div
                  key={milestone.value}
                  onClick={() => reached && handleClick(milestone.value)}
                  className={[
                    "flex justify-center transition-opacity duration-300",
                    !reached ? "opacity-25 pointer-events-none" : "cursor-pointer",
                  ].join(" ")}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.16em] tabular-nums transition-all duration-300"
                    style={{
                      color:      isActive ? "#141415" : "#C4C2BE",
                      fontWeight: isActive ? 500 : 400,
                    }}
                  >
                    {milestone.value}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>{/* end first c-grid-container */}

      {/* ── Second c-grid-container: image panel header ───────────────────── */}
      <div
        ref={panelRef}
        style={{ opacity: 0 }}
      >
        {activeMilestone && activeImages.length > 0 ? (
          <div key={imgKey}>
            <div className="c-grid-container">
              <div className="col-span-4 xl:col-span-12 flex items-baseline justify-between mb-[20px] xl:mb-[28px]">
                <h3 className="c-text-subtitle font-medium">{activeMilestone.label}</h3>
                <span className="c-text-body font-light text-[#9C9A97] tabular-nums">
                  {activeImages.length}&thinsp;
                  {activeImages.length === 1 ? "photo" : "photos"}
                </span>
              </div>
            </div>
            <ImagePanel images={activeImages} label={activeMilestone.label} />
          </div>
        ) : (
          <div className="c-grid-container">
            <div className="col-span-4 xl:col-span-12 flex min-h-[220px] xl:min-h-[280px] items-center justify-center border border-dashed border-[#D0CEC9] rounded-[4px]">
              <p className="c-text-body font-light text-[#C4C2BE] text-center px-10 leading-loose">
                No photos available for this phase yet
              </p>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}