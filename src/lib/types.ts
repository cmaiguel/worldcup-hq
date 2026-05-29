export type Stage =
  | 'Group Stage'
  | 'Round of 32'
  | 'Round of 16'
  | 'Quarter-Final'
  | 'Semi-Final'
  | 'Third Place'
  | 'Final';

export type MatchStatus = 'scheduled' | 'live' | 'finished' | 'postponed';

export type Confederation = 'UEFA' | 'CONMEBOL' | 'CONCACAF' | 'AFC' | 'CAF' | 'OFC';

export interface Team {
  id: string;
  name: string;
  code: string; // 3-letter code e.g. ARG
  flag: string; // emoji flag
  confederation: Confederation;
  fifaRanking: number;
  group: string; // 'A'-'L'
  colors: { primary: string; secondary: string };
  coach: string;
  keyPlayers: string[];
}

export interface Stadium {
  id: string;
  name: string;
  city: string;
  country: 'USA' | 'Canada' | 'Mexico';
  state?: string;
  capacity: number;
  surface: string;
  imageUrl?: string;
  matchesHosted: number;
  coordinates: { lat: number; lng: number };
  openedYear: number;
}

export interface Match {
  id: string;
  stage: Stage;
  group?: string;
  matchNumber: number;
  homeTeam: Team | null; // null = TBD
  awayTeam: Team | null;
  homeScore?: number;
  awayScore?: number;
  date: string; // ISO string
  stadiumId: string;
  status: MatchStatus;
  attendance?: number;
}

export interface MatchWithStadium extends Match {
  stadium: Stadium;
}

export interface PlayerStat {
  id: string;
  name: string;
  teamId: string;
  teamCode: string;
  teamFlag: string;
  position: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  appearances: number;
  minutesPlayed: number;
}

export interface TeamStat {
  teamId: string;
  teamCode: string;
  teamName: string;
  teamFlag: string;
  group: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  source: string;
  publishedAt: string; // ISO string
  imageUrl?: string;
  featured: boolean;
  tags: string[];
}

export type NewsCategory =
  | 'Match Preview'
  | 'Match Report'
  | 'Team News'
  | 'Transfer'
  | 'Injury'
  | 'Tournament'
  | 'History'
  | 'Analysis';

export interface AskResponse {
  answer: string;
  sources?: string[];
  confidence: 'high' | 'medium' | 'low';
}

export interface AppData {
  teams: Team[];
  stadiums: Stadium[];
  matches: MatchWithStadium[];
  playerStats: PlayerStat[];
  teamStats: TeamStat[];
  news: NewsItem[];
}

export interface FilterOptions {
  date?: string;
  teamId?: string;
  group?: string;
  stadiumId?: string;
  country?: string;
  stage?: Stage;
  category?: NewsCategory;
  confederation?: Confederation;
}
