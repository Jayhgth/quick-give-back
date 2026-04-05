# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**VolunteerNow** — A React + Vite app for discovering volunteer opportunities near a given location. Uses OpenStreetMap (Nominatim + Overpass API) via Supabase Edge Function proxy (`/functions/v1/geo-proxy`) for geocoding and POI search. No user authentication required.

## Tech Stack

- **Framework:** React 18 + TypeScript, Vite
- **Styling:** Tailwind CSS + shadcn/ui (components in `src/components/ui/`)
- **Routing:** React Router (HashRouter) — `src/App.tsx`
- **State/Data:** TanStack React Query, custom hooks
- **Backend:** Supabase client (auth + edge function proxy)
- **Testing:** Vitest + jsdom

## Key Commands

```bash
npm run dev          # Start dev server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
npm run test         # Run tests (vitest run)
npm run test:watch   # Watch mode
npm run preview      # Preview production build
```

## Architecture

### Routes (`src/App.tsx`)
- `/` → `Home` — Landing page with CTA to `/search`
- `/search` → `Search` — Main search experience
- `*` → `NotFound` — 404 fallback

### Core Data Flow
1. `Search` page uses `useVolunteerPlaces` hook for data fetching
2. Hook calls Supabase edge function proxy (`/functions/v1/geo-proxy`) which forwards to:
   - **Nominatim** for geocoding location strings → lat/lon
   - **Overpass API** for querying OSM nodes/ways matching volunteer-related tags
3. Raw OSM data is categorized into `CauseArea` types via `categorizePoi()` in the hook

### Key Files
- `src/types/volunteer.ts` — Type definitions: `VolunteerPlace`, `CauseArea`, `FilterState`, `LoadingState`
- `src/hooks/useVolunteerPlaces.ts` — Main data fetching hook (geocoding + Overpass query + data transformation)
- `src/hooks/useLocationSearch.ts` — Location input autocomplete/search
- `src/hooks/useTheme.tsx` — Dark/light theme toggle

### Components
- `src/components/LocationInput.tsx` — Search input for location
- `src/components/FilterBar.tsx` — Cause category + distance filter
- `src/components/PlaceList.tsx` — Renders filtered list of volunteer places
- `src/components/PlaceCard.tsx` / `PlaceCardGoogle.tsx` — Individual place cards
- `src/components/CauseBadge.tsx` — Visual cause category indicator
- `src/components/ui/` — shadcn/ui component library (auto-generated, generally don't modify)

### Environment Variables
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` — Supabase anon key

### Supabase
- Client auto-generated at `src/integrations/supabase/client.ts`
- Database types at `src/integrations/supabase/types.ts`
- Edge functions used as proxy to external APIs (Nominatim, Overpass) — configured in Supabase dashboard, not in this repo
