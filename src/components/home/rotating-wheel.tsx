"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export interface FeaturedImage {
  image: {
    asset: { url: string };
    alt?: string;
    title?: string;
  };
  title?: string | null;
  href?: string | null;
  year?: number | null;
  type?: string | null;
  location?: string | null;
}

interface RotatingWheelProps {
  featuredImages: FeaturedImage[];
}

const REVOLVING_DURATION = 30;

export default function RotatingWheel({ featuredImages }: RotatingWheelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const orbit = orbitRef.current;
    if (!container || !orbit || featuredImages.length === 0) return;

    const items = Array.from(orbit.querySelectorAll<HTMLElement>(".js-rotating-image"));
    const count = items.length;
    if (count === 0) return;

    const updateRadiusAndPositions = () => {
      const radius = window.innerWidth > 1023 ? 230 : 150;
      items.forEach((item, index) => {
        const angle = (index / count) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius;
        gsap.set(item, { x, y, xPercent: -50, yPercent: -50 });
      });
    };

    updateRadiusAndPositions();

    const orbitTimeline = gsap.timeline({ repeat: -1, ease: "none" });
    orbitTimeline.to(orbit, {
      rotation: 360,
      duration: REVOLVING_DURATION,
      ease: "none",
      transformOrigin: "center center",
    });

    const imageTimelines = items.map((item) => {
      const tl = gsap.timeline({ repeat: -1, ease: "none" });
      tl.to(item, {
        rotation: -360,
        duration: REVOLVING_DURATION,
        ease: "none",
        transformOrigin: "center center",
      });
      return tl;
    });

    // Start paused until in view
    orbitTimeline.pause();
    imageTimelines.forEach((tl) => tl.pause());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            orbitTimeline.play();
            imageTimelines.forEach((tl) => tl.play());
          } else {
            orbitTimeline.pause();
            imageTimelines.forEach((tl) => tl.pause());
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    const onResize = () => {
      updateRadiusAndPositions();
    };
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      orbitTimeline.kill();
      imageTimelines.forEach((tl) => tl.kill());
    };
  }, [featuredImages]);

  return (
    <div
      ref={containerRef}
      className="gallery-container absolute top-0 left-0 h-full w-full overflow-hidden"
    >
      <div ref={orbitRef} className="orbit absolute top-1/2 left-1/2 h-0 w-0">
        {featuredImages.map((item, index) => {
          const meta = [item.year, item.type].filter(Boolean).join(" · ");
          const hasInfo = Boolean(item.title || meta || item.location);
          const boxClassName =
            "image-box-container js-rotating-image group absolute w-[28vw] max-w-[160px] overflow-hidden rounded-md bg-black";
          const boxStyle = { aspectRatio: "1.499267935578331" };
          const inner = (
            <>
              <div
                className="c-image is-loaded w-full -cover -lazy-load"
                style={
                  {
                    "--width": 160,
                    "--height": 107,
                    aspectRatio: "1.4953271028037383",
                  } as React.CSSProperties
                }
              >
                <picture className="c-image_inner flex h-full w-full">
                  <img
                    src={item.image.asset.url}
                    alt={item.image.alt ?? ""}
                    title={item.image.title ?? ""}
                    fetchPriority="auto"
                    loading="lazy"
                    className="c-image_img"
                    width="160"
                    height="107"
                  />
                </picture>
              </div>
              {hasInfo && (
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-[1px] px-[8px] pb-[6px] pt-[22px] text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.45) 55%, rgba(0,0,0,0))",
                  }}
                >
                  {item.title && (
                    <span className="truncate text-[11px] leading-[1.3] font-medium text-white">
                      {item.title}
                    </span>
                  )}
                  {meta && (
                    <span className="truncate text-[9px] leading-[1.3] text-white/85">
                      {meta}
                    </span>
                  )}
                  {item.location && (
                    <span className="truncate text-[9px] leading-[1.3] text-white/70">
                      {item.location}
                    </span>
                  )}
                </span>
              )}
            </>
          );

          if (item.href) {
            return (
              <Link
                key={index}
                href={item.href}
                className={boxClassName}
                style={boxStyle}
                aria-label={item.title ? `View project: ${item.title}` : "View project"}
              >
                {inner}
              </Link>
            );
          }
          return (
            <div key={index} className={boxClassName} style={boxStyle}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}

