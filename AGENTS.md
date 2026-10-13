# mcgrathbd.com — Agent Guide (vibe-coding rules)

Read first: `../docs/ARCHITECTURE.md`, `../docs/NAVIGATION-ISSUE.md`. Sanity rules in `../AGENTS.md` still apply.

## Rules
1. **Next 16 / React 19 / React Compiler** — read `node_modules/next/dist/docs` if unsure; APIs differ from older Next. Server components by default; add `"use client"` only for hooks/browser APIs.
2. **Two-router hazard**: the site embeds Astro's Swup + scroll engine from `public/_astro/`. Never add new Swup-style DOM swapping; any new effect must init in `useEffect` and **clean up on unmount**, and must re-run on route change (`usePathname`).
3. Don't rename/delete files in `public/_astro/` (hashed names are hardcoded in `layout.tsx` and `page.tsx`).
4. Shared chrome (Header/Footer/ContactModal) belongs in `layout.tsx`, not per page (migration pending).
5. GROQ: use `defineQuery`/shared projections in `src/lib/sanity.ts`; never select `passwordHash` in public queries (test enforces it).
6. Env access only via `src/lib/env.ts`; never hardcode tokens.
7. No `any` for Sanity content; types in `src/lib/types.ts`.
8. Protected routes: edit only `src/middleware.ts` (no root middleware).
9. API routes: try/catch, generic error messages, `requireEmployee`/rate-limit where applicable.

## Definition of done
`npm run lint && npm run typecheck && npm test && npm run build` all green; manually click through nav (Home → Projects → detail → About → Contact → Back) with no console errors.

## Pitfalls log (append learnings here)
- Scripts via `next/script type="module"` run once per URL → don't rely on them for per-page init.
- `createRef` in components resets each render → use `useRef`.
- Dev server: `npm run dev`; ISR pages need `npm run build && npm start` to test caching.

