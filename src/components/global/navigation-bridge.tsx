'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/** Event the legacy Scroll (Locomotive) bundle listens to for re-scanning `[data-scroll]`. */
const SCROLL_REFRESH_EVENT = 'storyblok-live-preview-updated';

/** Hashed Astro module exporting the static scroll engine `S` (Locomotive + Lenis). */
const SCROLL_MODULE = '/_astro/Scroll.BVHAPhMX.js';

export default function NavigationBridge() {
  const router = useRouter();
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Route legacy `window.swup.navigate()` calls through Next.js.
  useEffect(() => {
    const onNavigate = (event: Event) => {
      const url = (event as CustomEvent<string>).detail;
      if (url) router.push(url);
    };
    window.addEventListener('app:navigate', onNavigate);
    return () => window.removeEventListener('app:navigate', onNavigate);
  }, [router]);

  // After each client navigation, rebuild the Locomotive Scroll engine against the
  // new DOM — exactly what Swup did (`destroy()` before, `init()` after content swap).
  // `updateScrollElements` (remove+add) is not enough: it leaves stale wrappers for
  // detached nodes in the IntersectionObserver lists, so `data-scroll-call` events
  // (e.g. the homepage rotating wheel) can be swallowed.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      try {
        // Same URL as the Astro bundle's import => same module instance (static class).
        const mod = (await import(/* webpackIgnore: true */ SCROLL_MODULE)) as {
          S: { init(): void; destroy(): void };
        };
        if (cancelled) return;
        mod.S.destroy();
        mod.S.init();
        window.dispatchEvent(new Event('resize'));
      } catch {
        document.dispatchEvent(new Event(SCROLL_REFRESH_EVENT));
      }
    }, 150);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [pathname]);


  return null;
}
