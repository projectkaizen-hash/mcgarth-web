import type { HTMLAttributes, DetailedHTMLProps } from "react";

type CustomElement<T = object> = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  T & {
    class?: string;
  };

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "c-site-header": CustomElement<{
        id?: string;
      }>;

      "c-site-footer": CustomElement<{
        "data-scroll"?: string | boolean;
        "data-scroll-offset"?: string;
      }>;

      "c-contact-modal": CustomElement<{
        open?: boolean;
      }>;

      "c-logo-text-only": CustomElement<{
        dir?: string;
        appear?: string;
        "data-scroll"?: string;
        "data-scroll-css-progress"?: string;
      }>;

      "c-inline-video": CustomElement<{
        "data-scroll"?: string;
        "data-scroll-repeat"?: string;
        "data-scroll-call"?: string;
        "data-scroll-ignore-fold"?: string;
      }>;

      "c-block-video": CustomElement<{
        "data-scroll"?: string;
      }>;

      "c-home-gallery": CustomElement<{
        id?: string;
        "data-gallery-route"?: string;
      }>;

      "c-rotating-images": CustomElement<{
        id?: string;
        "data-scroll"?: string;
        "data-scroll-repeat"?: string;
        "data-scroll-call"?: string;
      }>;

      "c-full-project-card": CustomElement<{
        "data-astro-cid-wipjvxqe"?: string;
      }>;

      "c-services": CustomElement;

      "c-block-title": CustomElement<{
        "data-scroll"?: string;
        "data-scroll-offset"?: string;
      }>;

      "c-hero": CustomElement<{
        id?: string;
        "data-scroll"?: string;
        "data-scroll-call"?: string;
      }>;
      
      "c-intro-project": CustomElement<{
        "data-scroll"?: string;
      }>;

      "c-intro-services": CustomElement<{
        "data-scroll"?: string;
      }>;

      "c-gallery-scroller": CustomElement<{
        class?: string;
      }>;

      "c-slider": CustomElement<{
        className?: string;
        "data-scroll"?: string;
      }>;

      "c-slideshow": CustomElement<{
        class?: string;
        "data-scroll"?: string;
      }>;

      "c-intro-about": CustomElement<{
        "data-scroll"?: string | boolean;
      }>;

      "c-intro-career": CustomElement<{
        "data-scroll"?: string | boolean;
      }>; 

      "c-contact": CustomElement<{
        "data-scroll"?: string;
        "data-scroll-offset"?: string;
      }>;

      "mux-video": CustomElement<{
        "playback-id"?: string;
        "disable-tracking"?: string;
        "disable-cookies"?: string;
        "data-scroll"?: string;
        "data-scroll-speed"?: string;
        poster?: string;
        loop?: boolean;
        muted?: boolean;
        playsInline?: boolean;
        disablePictureInPicture?: boolean;
        disableRemotePlayback?: boolean;
        preload?: string;
      }>;
    }
  }
}

export {};