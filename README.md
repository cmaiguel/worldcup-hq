# World Cup HQ ⚽

A premium, retro-inspired dashboard for the **FIFA World Cup 2026** — hosted across the USA, Canada, and Mexico. Built to feel like ESPN, FIFA.com, and an arcade scoreboard had a baby.

---

## Features

- **Live Countdown** — Real-time countdown to the June 11, 2026 opening match (Mexico vs South Africa)
- **Opening Match Banner** — Broadcast-style featured card for the tournament opener
- **Match Calendar** — All 104 matches with filters by stage, group, stadium, and country
- **Teams** — All 48 qualified teams with FIFA rankings, coaches, squad, and fixture path
- **Stadiums** — All 16 host venues across USA, Canada, and Mexico
- **Statistics** — Pre-tournament power rankings, group standings, top scorers, and disciplinary tracker
- **News** — Categorized tournament news with featured stories
- **Ask AI** — Claude-powered assistant that answers questions using real tournament data

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 |
| AI | Anthropic Claude (`claude-opus-4-7`) |
| Data | Seed layer (swap for live API via `adapters.ts`) |
| Deployment | Vercel |

---

## Local Setup

### 1. Clone and install

```bash
git clone https://github.com/cmaiguel/worldcup-hq.git
cd worldcup-hq
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
ANTHROPIC_API_KEY=sk-ant-...       # required for Ask AI
NEWS_API_KEY=                       # optional, for live news
NEWS_PROVIDER=                      # optional: newsapi | sportmonks
NEXT_PUBLIC_APP_NAME=World Cup HQ  # already set
```

Get your Anthropic key at [console.anthropic.com](https://console.anthropic.com).

The app runs without `ANTHROPIC_API_KEY` — the Ask AI feature returns a friendly error if the key is missing.

### 3. Validate tournament data

```bash
npm run validate:data
```

Runs `scripts/validate-data.mjs` — a pure Node.js data integrity checker that verifies:
- 48 teams across 12 groups of 4
- All official group assignments (Argentina → J, USA → D, Brazil → C, Mexico → A, etc.)
- Opening match: Mexico vs South Africa, June 11 at Estadio Azteca
- Final: July 19, 2026 at MetLife Stadium
- Official naming: Türkiye, IR Iran, Korea Republic, Czechia, Côte d'Ivoire, Cabo Verde, Congo DR
- No non-qualifying teams present

### 4. Run the dev server

```bash
npm run dev
# Open http://localhost:3000
```

---

## Official Groups (FIFA World Cup 2026)

| Group | Teams |
|-------|-------|
| A | Mexico · South Africa · Korea Republic · Czechia |
| B | Canada · Bosnia-Herzegovina · Qatar · Switzerland |
| C | Brazil · Morocco · Haiti · Scotland |
| D | USA · Paraguay · Australia · Türkiye |
| E | Germany · Curaçao · Côte d'Ivoire · Ecuador |
| F | Netherlands · Japan · Sweden · Tunisia |
| G | Belgium · Egypt · IR Iran · New Zealand |
| H | Spain · Cabo Verde · Saudi Arabia · Uruguay |
| I | France · Senegal · Iraq · Norway |
| J | Argentina · Algeria · Austria · Jordan |
| K | Portugal · Congo DR · Uzbekistan · Colombia |
| L | England · Croatia · Ghana · Panama |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home dashboard
│   ├── matches/page.tsx         # Match calendar (104 fixtures)
│   ├── teams/
│   │   ├── page.tsx             # Teams browser (48 teams)
│   │   └── [slug]/page.tsx      # Team detail page
│   ├── stadiums/page.tsx        # Stadium browser (16 venues)
│   ├── stats/page.tsx           # Statistics & standings
│   ├── news/page.tsx            # News room
│   └── api/ask/route.ts         # Secure AI API route (server-only)
├── components/
│   ├── ai/                      # CommandCenter, FloatingAsk, AskBar
│   ├── dashboard/               # CountdownHero, QuickStats, FeaturedStadium
│   ├── layout/                  # RetroHeader, Sidebar, NewsTicker
│   ├── matches/                 # MatchCard, OpeningMatchBanner
│   ├── news/                    # NewsCard
│   ├── stadiums/                # StadiumCard
│   ├── stats/                   # StatCard, GroupTable, TopScorers, PowerRankings
│   ├── teams/                   # TeamCard, PlayerCard, FollowButton, MyTeams
│   └── ui/                      # Badge, SectionHeader, FilterBar, ViewAllLink, etc.
└── lib/
    ├── data/
    │   ├── seed.ts              # All tournament data (source of truth)
    │   ├── adapters.ts          # Async data access layer
    │   └── validate.ts          # TypeScript validation types
    ├── ai/
    │   └── anthropic.ts         # Server-only AI client
    ├── types.ts                 # TypeScript interfaces
    ├── utils.ts                 # Formatting helpers
    └── env.ts                   # Env variable accessor (throws if missing)

scripts/
└── validate-data.mjs            # Pure Node.js data integrity checker
```

---

## Connecting a Live Data API

All data flows through `src/lib/data/adapters.ts`. Each function is `async` with a stable return type. To switch to a live API:

1. Replace the function bodies in `adapters.ts` with live API calls
2. Map the response to types in `lib/types.ts`
3. Zero changes required elsewhere in the app

---

## Security

- `ANTHROPIC_API_KEY` is accessed **only** in `lib/ai/anthropic.ts` (server) and `app/api/ask/route.ts` (API route)
- The key is **never** imported into any client component
- All AI calls are proxied through the `/api/ask` server route
- `lib/env.ts` throws at runtime if required env vars are missing
- `NEWS_API_KEY` is server-only — never prefixed with `NEXT_PUBLIC_`

---

## GitHub Workflow

After changes pass all checks:

```bash
npm run validate:data   # check tournament data
npm run lint            # ESLint
npm run build           # TypeScript + Next.js production build
git add .
git commit -m "your message"
git push origin main
```

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Add environment variables in the Vercel dashboard:

   | Variable | Required | Notes |
   |----------|----------|-------|
   | `ANTHROPIC_API_KEY` | Yes (for AI) | From console.anthropic.com |
   | `NEWS_API_KEY` | No | For live news integration |
   | `NEWS_PROVIDER` | No | `newsapi` \| `sportmonks` |
   | `NEXT_PUBLIC_APP_NAME` | No | Defaults to `World Cup HQ` |

4. Click **Deploy** — Vercel runs `npm run build` automatically

> The app builds and runs without any env vars set (AI and news features degrade gracefully).

---

## Pre-deployment Checklist

```bash
npm run validate:data   # ✅ all 48 teams, 12 groups, correct fixtures
npm run lint            # ✅ 0 ESLint errors
npm run build           # ✅ 0 TypeScript errors, clean production build
npm run start           # ✅ verify on http://localhost:3000
```

---

## License

MIT
