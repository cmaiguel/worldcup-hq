/**
 * Data adapter layer — swap these implementations to connect a real API.
 * All functions are async so the signature stays stable when we hit a live endpoint.
 */

import {
  TEAMS, STADIUMS, MATCHES, PLAYER_STATS, TEAM_STATS, NEWS, PLAYERS,
} from './seed';
import type {
  Team, Stadium, MatchWithStadium, PlayerStat, TeamStat, NewsItem, Player,
  FilterOptions, AppData,
} from '../types';

// ─── Teams ───────────────────────────────────────────────────────────────────

export async function getTeams(opts: FilterOptions = {}): Promise<Team[]> {
  let teams = [...TEAMS];
  if (opts.group) teams = teams.filter(t => t.group === opts.group);
  if (opts.confederation) teams = teams.filter(t => t.confederation === opts.confederation);
  return teams.sort((a, b) => a.fifaRanking - b.fifaRanking);
}

export async function getTeamById(id: string): Promise<Team | null> {
  return TEAMS.find(t => t.id === id) ?? null;
}

export async function getTeamBySlug(slug: string): Promise<Team | null> {
  return TEAMS.find(t => t.code.toLowerCase() === slug.toLowerCase()) ?? null;
}

// ─── Players ─────────────────────────────────────────────────────────────────

export async function getPlayersByTeam(teamId: string): Promise<Player[]> {
  return PLAYERS.filter(p => p.teamId === teamId);
}

export async function getAllPlayers(): Promise<Player[]> {
  return [...PLAYERS];
}

// ─── Stadiums ────────────────────────────────────────────────────────────────

export async function getStadiums(opts: FilterOptions = {}): Promise<Stadium[]> {
  let stadiums = [...STADIUMS];
  if (opts.country) stadiums = stadiums.filter(s => s.country === opts.country);
  return stadiums.sort((a, b) => b.capacity - a.capacity);
}

export async function getStadiumById(id: string): Promise<Stadium | null> {
  return STADIUMS.find(s => s.id === id) ?? null;
}

// ─── Matches ─────────────────────────────────────────────────────────────────

export async function getMatches(opts: FilterOptions = {}): Promise<MatchWithStadium[]> {
  let matches = [...MATCHES];

  if (opts.date) {
    matches = matches.filter(m => m.date.startsWith(opts.date!));
  }
  if (opts.group) {
    matches = matches.filter(m => m.group === opts.group);
  }
  if (opts.stage) {
    matches = matches.filter(m => m.stage === opts.stage);
  }
  if (opts.stadiumId) {
    matches = matches.filter(m => m.stadiumId === opts.stadiumId);
  }
  if (opts.teamId) {
    matches = matches.filter(
      m => m.homeTeam?.id === opts.teamId || m.awayTeam?.id === opts.teamId,
    );
  }
  if (opts.country) {
    matches = matches.filter(m => m.stadium.country === opts.country);
  }

  return matches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export async function getMatchById(id: string): Promise<MatchWithStadium | null> {
  return MATCHES.find(m => m.id === id) ?? null;
}

export async function getUpcomingMatches(limit = 6): Promise<MatchWithStadium[]> {
  const now = new Date().toISOString();
  return MATCHES
    .filter(m => m.date >= now && m.status === 'scheduled')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);
}

// ─── Stats ───────────────────────────────────────────────────────────────────

export async function getPlayerStats(): Promise<PlayerStat[]> {
  return [...PLAYER_STATS];
}

export async function getTeamStats(group?: string): Promise<TeamStat[]> {
  let stats = [...TEAM_STATS];
  if (group) stats = stats.filter(s => s.group === group);
  return stats;
}

// ─── News ────────────────────────────────────────────────────────────────────

export async function getNews(opts: FilterOptions = {}): Promise<NewsItem[]> {
  let news = [...NEWS];
  if (opts.category) news = news.filter(n => n.category === opts.category);
  return news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getFeaturedNews(limit = 4): Promise<NewsItem[]> {
  return NEWS
    .filter(n => n.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

// ─── Aggregate ───────────────────────────────────────────────────────────────

export async function getAppData(): Promise<AppData> {
  const [teams, stadiums, matches, playerStats, teamStats, news, players] = await Promise.all([
    getTeams(),
    getStadiums(),
    getMatches(),
    getPlayerStats(),
    getTeamStats(),
    getNews(),
    getAllPlayers(),
  ]);
  return { teams, stadiums, matches, playerStats, teamStats, news, players };
}
