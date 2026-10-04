# mcgrathbd.com

Marketing site + client/employee portal for McGrath BD, built with **Next.js 16 (App Router)** and **Sanity** as the content backend.

- **Pages** — home, about, services, projects (list/detail, SSG), gallery, career, contact
- **Portal** — `/login` → `/dashboard` (client) and `/analytics` (employee-only GA4 reports)
- **Auth** — NextAuth credentials against Sanity `user`/`employee` docs (bcrypt), role-aware middleware
- **Legacy Astro markup** — `c-*` custom elements driven by scoped `/_astro/*.js` scripts; content rendered through shared GROQ projections in `src/lib/sanity.ts`

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run lint` | `eslint .` (0 errors; warnings allowed) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest suite (API guards, env parsing, rate limiting, GROQ query integrity) |

## Environment

Copy `.env.example` to `.env.local` and fill in real values. The example file lists **variable names only** — never commit secrets.

| Variable | Purpose |
|---|---|
| `NEXTAUTH_SECRET`, `NEXTAUTH_URL` | NextAuth session signing / callback URL |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` | Sanity project (public ids) |
| `SANITY_READ_TOKEN` | Read-only viewer token for server-side queries (falls back to `SANITY_API_TOKEN`) |
| `SANITY_API_TOKEN` | Write-capable token, **mutations only** (e.g. job applications) |
| `GOOGLE_SERVICE_ACCOUNT_KEY`, `GA4_PROPERTY_ID` | GA4 Data API for `/api/analytics` (employee-only) |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Projects map |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, sitemap, OG tags |

Fail-fast validation lives in `src/lib/env.ts`.

## Security notes

- `/dashboard`, `/dashboard/:path*` and `/analytics` are behind `src/middleware.ts` (the canonical middleware; do not add a root-level `middleware.ts` — Next resolves `src/` first).
- `/api/analytics` requires an employee session; `/api/applications` and the credentials login are rate-limited (`src/lib/rate-limit.ts`).
- **Escalation:** the Sanity `production` dataset must be private (Sanity Access Control). Application code never selects `passwordHash`, but dataset privacy is enforced in the Sanity console, not here. See `docs/AUDIT.md` in the workspace.

## CI

`.github/workflows/ci.yml` runs lint + typecheck + tests + build on pushes and PRs.
