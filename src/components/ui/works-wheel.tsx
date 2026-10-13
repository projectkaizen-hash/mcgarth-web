"use client";

// A portfolio index built as a wheel you turn.
//
// At rest the work sits in a ring around a title, each card tangent to the
// circle. The first notch of scroll blows the ring open into a vertical drum:
// the card at the front lies flat and full size, the ones above and below
// rotate away into hard perspective and run off the top and bottom of the
// frame. Keep turning and the drum carries the next piece round to the front.
//
// The whole thing is one number - `turn` - read by a single rAF pass that writes
// transforms straight to the DOM. 0 is the ring, 1 is the drum with item 0 at
// the front, and every whole number after that is one more item turned past.
import * as React from "react";

import { cn, getProjectTimeline } from "@/lib/utils";
import { ProjectArea } from "@/components/ui/project-area";

export interface WorksWheelItem {
  /** Project name. Shown beside the front card and in the index. */
  title: string;
  /** Cover art. Any src an <img> takes. */
  image: string;
  /** Where the card links to. Omit for a wheel that only browses. */
  href?: string;
  /** Project location. */
  location?: string;
  /** Coordinates for reverse-geocoded area name. */
  coordinates?: { lat?: number; lng?: number };
  /** Project status ('pending' | 'active' | 'completed') */
  status?: string;
  /** Project start date */
  startDate?: string;
  /** Handover date or completion year. */
  handOverDate?: string;
  /** Project year */
  year?: number;
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  items: WorksWheelItem[];
  /** Sits in the middle of the ring. @default undefined */
  label?: React.ReactNode;
  /** Label on the card's hover affordance. Omit to drop it. @default undefined */
  action?: string;
}

/* Geometry. The card is measured against the stage; everything else is measured
   against the card, so a narrow stage - where the card is capped by width, not
   height - scales the whole wheel down with it instead of leaving a small card
   swinging on a huge drum. The three that matter are tuned together: STEP
   against DRUM sets how hard the neighbours rotate away, and DRUM against LENS
   decides whether they land inside the frame or run off it. */
const CARD_H = 0.30; // front card height, scaled so wheel comfortably fits desktop
const CARD_MAX_W = 0.26; // ... but never wider than this much of the stage
const CARD_RATIO = 1.45; // card width / height
const STEP = 40; // degrees between cards on the drum
const DRUM = 2.22; // drum radius, in card heights - and everything below likewise
const LENS = 2.7; // perspective distance
const RING_R = 1.14; // ring radius
/* The drum alone hangs the work on a plumb line. It isn't one: the strip curves
   away round an arc whose centre sits off to the LEFT, so the piece at the front
   is at the arc's near point - dead centre - and its neighbours have already
   swung back left as well as up and down. BOW is that arc's radius; nothing else
   makes the difference between a stack of cards and a wheel seen side on. */
const BOW = 1.82;
const TITLE = 0.124; // ring label and front-card title
const INDEX = 0.062; // the index down the right-hand side
/** Items either side of the front still worth drawing. Past this a card is
    edge-on, and further round it would stack up on the vanishing point. */
const CULL = 1.6;

/** How much of a wheel-notch or a dragged pixel counts as one item. */
const WHEEL_UNITS = 900;
const DRAG_UNITS = 420;
/** Quiet time after the last wheel event before the wheel settles on an item. */
const SETTLE = 140;
/** Fraction of the remaining distance closed each frame. 1 = no smoothing. */
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Stage = { w: number; h: number };

const rad = (deg: number) => (deg * Math.PI) / 180;

/** How far left the arc has carried something that has turned `drumDeg` off the
    front. Zero at the front, so the piece being read stays centred. */
const bowAt = (drumDeg: number, bow: number) =>
  -bow * (1 - Math.cos(rad(drumDeg)));

/** Both states in one chain: the ring terms fall away as `m` reaches the drum,
    and the drum terms are still zero while the ring is up. The bow is applied
    first, in the wheel's own plane, so it slides the card sideways rather than
    turning with it - and perspective still shrinks it with distance. */
function place(
  ringDeg: number,
  drumDeg: number,
  ringR: number,
  drumR: number,
  bow: number,
  m: number,
) {
  return (
    `translateX(${m * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px)` +
    ` rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`
  );
}

export function WorksWheel({
  items,
  label = "Works '26",
  action = "View",
  className,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLElement | null)[]>([]);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  // The wheel's position, and where it is heading. Only `active` is state -
  // everything else is written to the DOM, so turning the wheel is not a render.
  const turn = React.useRef(0);
  const target = React.useRef(0);
  const [active, setActive] = React.useState(0);
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 });

  const count = items.length;
  const last = Math.max(count - 1, 0);

  // Read after mount, not during render: the server has no matchMedia, and
  // branching on it inline is a hydration mismatch. Reduced motion drops the
  // easing, so the wheel lands where it is put instead of gliding there.
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const isMobile = stage.w > 0 && stage.w < 768;

  const metrics = React.useMemo(() => {
    const { w, h } = stage;
    const isSmall = w > 0 && w < 768;

    // Responsive sizing: on mobile, cards can take up to 52% of width so they are
    // clearly visible, while on desktop they are neatly constrained to 26%.
    const effectiveCardH = isSmall ? 0.28 : CARD_H;
    const effectiveMaxW = isSmall ? 0.52 : CARD_MAX_W;
    const effectiveBow = isSmall ? 0.45 : BOW; // Flatter horizontal curve on mobile so cards stay fully in frame

    const cardW = Math.min(h * effectiveCardH * CARD_RATIO, w * effectiveMaxW);
    const cardH = cardW / CARD_RATIO;
    const drumR = cardH * (isSmall ? 2.0 : DRUM);
    const ringR = cardH * (isSmall ? 1.05 : RING_R);

    const ringScale = count
      ? clamp((((2 * Math.PI * ringR) / count) * (isSmall ? 0.95 : 0.82)) / (cardW || 1), 0.16, 1)
      : 1;

    return {
      isSmall,
      cardW,
      cardH,
      ringR,
      ringScale,
      drumR,
      bow: cardH * effectiveBow,
      depth: cardH * (isSmall ? 2.2 : LENS),
      title: Math.max(cardH * (isSmall ? 0.16 : TITLE), isSmall ? 18 : 14),
      index: cardH * INDEX,
    };
  }, [stage, count]);

  // One pass per frame: ease toward the target, then write every transform.
  React.useEffect(() => {
    if (!stage.h) return;
    let frame = 0;
    const { ringR, ringScale, drumR, bow } = metrics;

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) turn.current = target.current;
      else turn.current += gap * (reduced ? 1 : EASE);

      const t = turn.current;
      const m = clamp(t, 0, 1);
      const pos = Math.max(0, t - 1);

      // The drum is pulled back so its front face lands on the picture plane.
      // That set-back has to arrive with the drum, or the ring would sit at the
      // far side of the perspective and render at half its size.
      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateZ(${-m * drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs.current[i];
        if (card) {
          card.style.transform = place(
            d * (360 / count),
            drumDeg,
            ringR,
            drumR,
            bow,
            m,
          );
          // Culled by distance, not by angle: at a full turn the far side comes
          // back round to face us, and everything past the neighbours lands on
          // the vanishing point in a heap.
          card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? "0" : "1";
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));
        }
        const face = card?.firstElementChild as HTMLElement | null;
        if (face) face.style.transform = `scale(${lerp(ringScale, 1, m)})`;
      }

      if (labelRef.current) labelRef.current.style.opacity = String(1 - m);
      if (titleRef.current) titleRef.current.style.opacity = String(m);
      const near = clamp(Math.round(pos), 0, last);
      setActive((prev) => (prev === near ? prev : near));
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [metrics, stage.h, count, last, reduced]);

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last + 1);
    },
    [last],
  );

  // Sync with page scroll while the container is pinned (sticky).
  // When the section enters and remains pinned in the viewport, the distance
  // scrolled through the section directly turns the wheel.
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    // Find the enclosing pinned section or scroll track
    const track = el.closest(".c-block-home-gallery") as HTMLElement | null;

    const handleScroll = () => {
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight - window.innerHeight;
      if (trackHeight <= 0) return;

      // Scrolled progress through the track: 0 when top hits screen, 1 when track finishes
      const scrolled = -rect.top;
      const progress = clamp(scrolled / trackHeight, 0, 1);

      // Map progress [0..1] across [0 .. last + 1] turns
      const currentTurn = progress * (last + 1);
      target.current = currentTurn;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Wheel event: smooth scroll the page if inside the pinned track
    const onWheel = (event: WheelEvent) => {
      if (!track) return;
      const rect = track.getBoundingClientRect();
      // If we are currently pinned in view
      if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
        const next = target.current + event.deltaY / WHEEL_UNITS;
        if (next > 0 && next < last + 1) {
          // let normal page scroll handle it through sticky pinning
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, [to, last]);

  const drag = React.useRef<number | null>(null);
  const settling = React.useRef(0);

  return (
    <section
      aria-label={typeof label === "string" ? label : "Works Wheel"}
      className={cn(
        "bg-background text-foreground relative h-full min-h-[24rem] w-full overflow-hidden select-none",
        className,
      )}
      {...props}
    >
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={typeof label === "string" ? label : "Works Wheel"}
        aria-activedescendant={`works-wheel-${active}`}
        className="focus-visible:outline-foreground absolute inset-0 cursor-grab touch-pan-y outline-none focus-visible:outline-2 focus-visible:-outline-offset-4 active:cursor-grabbing"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => {
          drag.current = event.clientY;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (drag.current === null) return;
          to(target.current + (drag.current - event.clientY) / DRAG_UNITS);
          drag.current = event.clientY;
        }}
        onPointerUp={() => {
          // Land on an item rather than between two.
          drag.current = null;
          if (target.current > 1) to(Math.round(target.current));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") to(Math.round(target.current) + 1);
          else if (event.key === "ArrowUp") to(Math.round(target.current) - 1);
          else return;
          event.preventDefault();
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, i) => {
            const Tag = (item.href ? "a" : "div") as "a";
            return (
              <React.Fragment key={item.title + i}>
                <Tag
                  id={`works-wheel-${i}`}
                  role="option"
                  aria-selected={i === active}
                  href={item.href}
                  ref={(node: HTMLElement | null) => {
                    cardRefs.current[i] = node;
                  }}
                  className="group absolute [backface-visibility:hidden]"
                  style={{
                    width: metrics.cardW,
                    height: metrics.cardH,
                    marginLeft: -metrics.cardW / 2,
                    marginTop: -metrics.cardH / 2,
                  }}
                >
                  <span className="bg-muted shadow-foreground/12 relative block size-full overflow-hidden rounded-lg shadow-[0_18px_40px_-18px_var(--tw-shadow-color)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className="size-full object-cover"
                    />
                    {action && item.href ? (
                      <span className="bg-background/90 text-foreground pointer-events-none absolute right-2 bottom-2 flex translate-y-1 items-center rounded-full px-1.5 py-0.5 text-[0.52rem] sm:text-[0.56rem] font-medium opacity-0 backdrop-blur-sm shadow-xs transition group-hover:translate-y-0 group-hover:opacity-100 uppercase tracking-wider">
                        {action}
                      </span>
                    ) : null}
                  </span>
                </Tag>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Ring title and front-card title trade places across the transition.
          Type is sized off the measured stage, not vh, so the wheel keeps its
          proportions inside a card as well as at full bleed. */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 grid place-items-center tracking-tight font-light"
        style={{ fontSize: metrics.title }}
      >
        {label}
      </div>
      {/* Responsive details: Top-left on mobile to prevent overlapping with center drum cards, side-left on desktop */}
      <div
        ref={titleRef}
        className="pointer-events-none absolute top-4 left-4 max-w-[calc(100%-80px)] md:top-1/2 md:left-[6%] xl:left-[8%] md:-translate-y-1/2 md:max-w-[24vw] tracking-tight opacity-0 flex flex-col gap-0.5 z-20"
      >
        {(() => {
          const current = items[active];
          if (!current) return null;
          const timeline = getProjectTimeline(current);

          return (
            <>
              <h3
                className="font-medium text-foreground leading-[1.1] truncate"
                style={{ fontSize: metrics.title }}
              >
                {current.title}
              </h3>
              {(current.coordinates || current.location || timeline.value) && (
                <div className="flex flex-col text-muted-foreground text-[11px] sm:text-xs xl:text-sm font-light tracking-normal">
                  {(current.coordinates || current.location) && (
                    <ProjectArea
                      coordinates={current.coordinates}
                      fallback={current.location}
                      className="truncate block"
                    />
                  )}
                  {timeline.value && (
                    <div className="flex items-center justify-between gap-2 pt-0.5">
                      <span>{timeline.label}</span>
                      <span>{timeline.value}</span>
                    </div>
                  )}
                </div>
              )}
            </>
          );
        })()}
      </div>

      {/* Mobile index badge: compact current / total indicator in top-right */}
      <div className="md:hidden absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-xs text-xs font-medium text-foreground shadow-xs pointer-events-none">
        <span className="text-foreground">{String(active + 1).padStart(2, '0')}</span>
        <span className="text-muted-foreground/60">/</span>
        <span className="text-muted-foreground">{String(count).padStart(2, '0')}</span>
      </div>

      {/* Desktop index list down right-hand side */}
      <ol
        className="hidden md:block text-muted-foreground absolute top-[7.5%] right-[2.5%] text-right leading-[1.75] max-h-[85vh] overflow-y-auto z-20"
        style={{ fontSize: metrics.index }}
      >
        {items.map((item, i) => (
          <li key={item.title + i}>
            <button
              type="button"
              onClick={() => to(i + 1)}
              className={cn(
                "focus-visible:outline-foreground cursor-pointer transition-colors outline-none focus-visible:outline-1 opacity-70 hover:opacity-100",
                i === active && "text-foreground font-semibold opacity-100",
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default WorksWheel;

