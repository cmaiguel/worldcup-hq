# World Cup HQ ⚽

A retro-inspired, premium dashboard for the **FIFA World Cup 2026** — hosted across the USA, Canada, and Mexico. Built to feel like ESPN, FIFA.com, and an arcade scoreboard had a baby.

---

## Features

- **Live Countdown** — Real-time countdown to the June 11 opening match
- **Match Calendar** — All 104 matches with filters by stage, group, stadium, and country
- **Teams** — All 48 qualified teams with FIFA rankings, coaches, and key players
- **Stadiums** — All 16 host venues with capacities and match counts
- **Statistics** — Group standings, top scorers, and team stats (adapters ready for live API)
- **News** — Categorized news cards with featured stories
- **Ask AI** — Claude-powered AI that answers questions using real tournament data

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **AI**: Anthropic Claude (`claude-opus-4-7`)
- **Deployment**: Vercel-ready

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
ANTHROPIC_API_KEY=your_key_here
NEXT_PUBLIC_APP_NAME=World Cup HQ
```

Get your Anthropic API key at [console.anthropic.com](https://console.anthropic.com).

The app runs without `ANTHROPIC_API_KEY` — the Ask AI feature will gracefully return an error message if it's missing.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home dashboard
│   ├── matches/page.tsx    # Match calendar
│   ├── teams/page.tsx      # Teams browser
│   ├── stadiums/page.tsx   # Stadium browser
│   ├── stats/page.tsx      # Statistics
│   ├── news/page.tsx       # News
│   └── api/ask/route.ts    # Secure AI API route (server-only)
├── components/
│   ├── layout/             # Header, sidebar, news ticker
│   ├── dashboard/          # Countdown hero, quick stats, featured stadium
│   ├── matches/            # MatchCard
│   ├── teams/              # TeamCard
│   ├── stadiums/           # StadiumCard
│   ├── stats/              # StatCard, TopScorers, GroupTable
│   ├── news/               # NewsCard
│   ├── ai/                 # AskBar (client component)
│   └── ui/                 # Badge, FilterBar, EmptyState, LoadingCard
└── lib/
    ├── data/
    │   ├── seed.ts          # All tournament data (48 teams, 104 matches, 16 stadiums)
    │   └── adapters.ts      # Data access layer (swap for live API later)
    ├── ai/
    │   └── anthropic.ts     # Server-only AI integration
    ├── types.ts             # TypeScript interfaces
    ├── utils.ts             # Formatting, sorting helpers
    └── env.ts               # Environment variable validation
```

---

## Connecting a Live API

All data access flows through `src/lib/data/adapters.ts`. Each function is async with a stable signature. To connect a live API:

1. Replace the function bodies in `adapters.ts` to call your API endpoint
2. Map the API response to the types defined in `lib/types.ts`
3. The rest of the app requires zero changes

---

## Deploying to Vercel

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add `ANTHROPIC_API_KEY` in the Vercel environment variables panel
4. Deploy — the `NEXT_PUBLIC_APP_NAME` default is already set

---

## Security Notes

- `ANTHROPIC_API_KEY` is **only** accessed in `lib/ai/anthropic.ts` (server-side) and `app/api/ask/route.ts`
- The key is **never** imported into client components
- All AI calls go through the `/api/ask` server route
- `lib/env.ts` provides a typed accessor that throws at runtime if the key is missing

---

## License

MIT
