/**
 * Runs before the legacy Astro bundles (inlined in <body> by the root layout).
 *
 * The Astro Layout bundle boots Swup, which hijacks every `a[href]` click,
 * fetches the full HTML and swaps `#swup` / `#site-header` underneath React.
 * That races Next.js client navigation and leaves pages half-rendered.
 *
 * We intercept the `window.swup = ...` assignment, destroy that instance and
 * expose a tiny shim so bundles that call `window.swup.navigate()` (e.g. the
 * home gallery) are routed through the Next.js router instead.
 */
export const SWUP_GUARD_SCRIPT = `(function(){
  var shim = {
    navigate: function (url) {
      window.dispatchEvent(new CustomEvent('app:navigate', { detail: String(url) }));
    }
  };
  Object.defineProperty(window, 'swup', {
    configurable: true,
    get: function () { return shim; },
    set: function (instance) {
      setTimeout(function () {
        try { instance && instance.destroy && instance.destroy(); } catch (e) {}
        try { history.scrollRestoration = 'auto'; } catch (e) {}
      }, 0);
    }
  });
})();`;
