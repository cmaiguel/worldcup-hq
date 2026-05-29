import type { Team, Stadium, PlayerStat, TeamStat, NewsItem, MatchWithStadium } from '../types';

// ─── STADIUMS ────────────────────────────────────────────────────────────────

export const STADIUMS: Stadium[] = [
  { id: 'metlife', name: 'MetLife Stadium', city: 'New York / New Jersey', state: 'NJ', country: 'USA', capacity: 82500, surface: 'Grass', matchesHosted: 8, openedYear: 2010, coordinates: { lat: 40.8135, lng: -74.0745 } },
  { id: 'att', name: 'AT&T Stadium', city: 'Dallas', state: 'TX', country: 'USA', capacity: 80000, surface: 'Artificial Turf', matchesHosted: 7, openedYear: 2009, coordinates: { lat: 32.7473, lng: -97.0945 } },
  { id: 'levis', name: "Levi's Stadium", city: 'San Francisco Bay Area', state: 'CA', country: 'USA', capacity: 68500, surface: 'Grass', matchesHosted: 6, openedYear: 2014, coordinates: { lat: 37.4033, lng: -121.9694 } },
  { id: 'sofi', name: 'SoFi Stadium', city: 'Los Angeles', state: 'CA', country: 'USA', capacity: 70240, surface: 'Artificial Turf', matchesHosted: 7, openedYear: 2020, coordinates: { lat: 33.9535, lng: -118.3392 } },
  { id: 'lumen', name: 'Lumen Field', city: 'Seattle', state: 'WA', country: 'USA', capacity: 68740, surface: 'Artificial Turf', matchesHosted: 6, openedYear: 2002, coordinates: { lat: 47.5952, lng: -122.3316 } },
  { id: 'lincoln', name: 'Lincoln Financial Field', city: 'Philadelphia', state: 'PA', country: 'USA', capacity: 69176, surface: 'Grass', matchesHosted: 6, openedYear: 2003, coordinates: { lat: 39.9008, lng: -75.1675 } },
  { id: 'arrowhead', name: 'Arrowhead Stadium', city: 'Kansas City', state: 'MO', country: 'USA', capacity: 76416, surface: 'Grass', matchesHosted: 6, openedYear: 1972, coordinates: { lat: 39.0489, lng: -94.4839 } },
  { id: 'mercedesbenz', name: 'Mercedes-Benz Stadium', city: 'Atlanta', state: 'GA', country: 'USA', capacity: 71000, surface: 'Artificial Turf', matchesHosted: 6, openedYear: 2017, coordinates: { lat: 33.7554, lng: -84.4008 } },
  { id: 'gillette', name: 'Gillette Stadium', city: 'Boston', state: 'MA', country: 'USA', capacity: 65878, surface: 'Artificial Turf', matchesHosted: 6, openedYear: 2002, coordinates: { lat: 42.0909, lng: -71.2643 } },
  { id: 'hardrock', name: 'Hard Rock Stadium', city: 'Miami', state: 'FL', country: 'USA', capacity: 65326, surface: 'Grass', matchesHosted: 7, openedYear: 1987, coordinates: { lat: 25.9579, lng: -80.2389 } },
  { id: 'nrg', name: 'NRG Stadium', city: 'Houston', state: 'TX', country: 'USA', capacity: 72220, surface: 'Grass', matchesHosted: 6, openedYear: 2002, coordinates: { lat: 29.6847, lng: -95.4107 } },
  { id: 'bmo', name: 'BMO Field', city: 'Toronto', country: 'Canada', capacity: 45736, surface: 'Artificial Turf', matchesHosted: 4, openedYear: 2007, coordinates: { lat: 43.6333, lng: -79.4189 } },
  { id: 'bc', name: 'BC Place', city: 'Vancouver', country: 'Canada', capacity: 54500, surface: 'Artificial Turf', matchesHosted: 4, openedYear: 1983, coordinates: { lat: 49.2768, lng: -123.1118 } },
  { id: 'azteca', name: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico', capacity: 87523, surface: 'Grass', matchesHosted: 5, openedYear: 1966, coordinates: { lat: 19.3029, lng: -99.1505 } },
  { id: 'akron', name: 'Estadio Akron', city: 'Guadalajara', country: 'Mexico', capacity: 49850, surface: 'Grass', matchesHosted: 4, openedYear: 2010, coordinates: { lat: 20.6868, lng: -103.4671 } },
  { id: 'bbva', name: 'Estadio BBVA', city: 'Monterrey', country: 'Mexico', capacity: 53500, surface: 'Grass', matchesHosted: 4, openedYear: 2015, coordinates: { lat: 25.6693, lng: -100.2434 } },
];

// ─── TEAMS ───────────────────────────────────────────────────────────────────

export const TEAMS: Team[] = [
  // Group A
  { id: 'usa', name: 'United States', code: 'USA', flag: '🇺🇸', confederation: 'CONCACAF', fifaRanking: 13, group: 'A', colors: { primary: '#002868', secondary: '#BF0A30' }, coach: 'Mauricio Pochettino', keyPlayers: ['Christian Pulisic', 'Gio Reyna', 'Tyler Adams'] },
  { id: 'mex', name: 'Mexico', code: 'MEX', flag: '🇲🇽', confederation: 'CONCACAF', fifaRanking: 16, group: 'A', colors: { primary: '#006847', secondary: '#FFFFFF' }, coach: 'Javier Aguirre', keyPlayers: ['Hirving Lozano', 'Raúl Jiménez', 'Santiago Giménez'] },
  { id: 'can', name: 'Canada', code: 'CAN', flag: '🇨🇦', confederation: 'CONCACAF', fifaRanking: 42, group: 'A', colors: { primary: '#FF0000', secondary: '#FFFFFF' }, coach: 'Jesse Marsch', keyPlayers: ['Alphonso Davies', 'Jonathan David', 'Cyle Larin'] },
  { id: 'nzl', name: 'New Zealand', code: 'NZL', flag: '🇳🇿', confederation: 'OFC', fifaRanking: 91, group: 'A', colors: { primary: '#000000', secondary: '#FFFFFF' }, coach: 'Darren Bazeley', keyPlayers: ['Chris Wood', 'Winston Reid', 'Tim Payne'] },
  // Group B
  { id: 'arg', name: 'Argentina', code: 'ARG', flag: '🇦🇷', confederation: 'CONMEBOL', fifaRanking: 1, group: 'B', colors: { primary: '#74ACDF', secondary: '#FFFFFF' }, coach: 'Lionel Scaloni', keyPlayers: ['Lionel Messi', 'Julian Alvarez', 'Enzo Fernández'] },
  { id: 'cro', name: 'Croatia', code: 'CRO', flag: '🇭🇷', confederation: 'UEFA', fifaRanking: 9, group: 'B', colors: { primary: '#FF0000', secondary: '#FFFFFF' }, coach: 'Zlatko Dalić', keyPlayers: ['Luka Modrić', 'Ivan Perišić', 'Joško Gvardiol'] },
  { id: 'mar', name: 'Morocco', code: 'MAR', flag: '🇲🇦', confederation: 'CAF', fifaRanking: 14, group: 'B', colors: { primary: '#C1272D', secondary: '#006233' }, coach: 'Walid Regragui', keyPlayers: ['Achraf Hakimi', 'Hakim Ziyech', 'Youssef En-Nesyri'] },
  { id: 'irn', name: 'Iran', code: 'IRN', flag: '🇮🇷', confederation: 'AFC', fifaRanking: 24, group: 'B', colors: { primary: '#239F40', secondary: '#FFFFFF' }, coach: 'Amir Ghalenoei', keyPlayers: ['Mehdi Taremi', 'Sardar Azmoun', 'Alireza Jahanbakhsh'] },
  // Group C
  { id: 'fra', name: 'France', code: 'FRA', flag: '🇫🇷', confederation: 'UEFA', fifaRanking: 2, group: 'C', colors: { primary: '#002395', secondary: '#ED2939' }, coach: 'Didier Deschamps', keyPlayers: ['Kylian Mbappé', 'Antoine Griezmann', 'Aurélien Tchouaméni'] },
  { id: 'bra', name: 'Brazil', code: 'BRA', flag: '🇧🇷', confederation: 'CONMEBOL', fifaRanking: 5, group: 'C', colors: { primary: '#009C3B', secondary: '#FFDF00' }, coach: 'Dorival Júnior', keyPlayers: ['Vinícius Jr.', 'Rodrygo', 'Marquinhos'] },
  { id: 'bel', name: 'Belgium', code: 'BEL', flag: '🇧🇪', confederation: 'UEFA', fifaRanking: 3, group: 'C', colors: { primary: '#EF3340', secondary: '#000000' }, coach: 'Domenico Tedesco', keyPlayers: ['Kevin De Bruyne', 'Romelu Lukaku', 'Thibaut Courtois'] },
  { id: 'jap', name: 'Japan', code: 'JPN', flag: '🇯🇵', confederation: 'AFC', fifaRanking: 18, group: 'C', colors: { primary: '#002569', secondary: '#FFFFFF' }, coach: 'Hajime Moriyasu', keyPlayers: ['Takumi Minamino', 'Daichi Kamada', 'Ritsu Doan'] },
  // Group D
  { id: 'eng', name: 'England', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', confederation: 'UEFA', fifaRanking: 4, group: 'D', colors: { primary: '#FFFFFF', secondary: '#CE1124' }, coach: 'Thomas Tuchel', keyPlayers: ['Jude Bellingham', 'Harry Kane', 'Phil Foden'] },
  { id: 'esp', name: 'Spain', code: 'ESP', flag: '🇪🇸', confederation: 'UEFA', fifaRanking: 6, group: 'D', colors: { primary: '#AA151B', secondary: '#F1BF00' }, coach: 'Luis de la Fuente', keyPlayers: ['Pedri', 'Lamine Yamal', 'Álvaro Morata'] },
  { id: 'ned', name: 'Netherlands', code: 'NED', flag: '🇳🇱', confederation: 'UEFA', fifaRanking: 7, group: 'D', colors: { primary: '#FF6900', secondary: '#FFFFFF' }, coach: 'Ronald Koeman', keyPlayers: ['Virgil van Dijk', 'Memphis Depay', 'Cody Gakpo'] },
  { id: 'sen', name: 'Senegal', code: 'SEN', flag: '🇸🇳', confederation: 'CAF', fifaRanking: 19, group: 'D', colors: { primary: '#00853F', secondary: '#FDEF42' }, coach: 'Aliou Cissé', keyPlayers: ['Sadio Mané', 'Édouard Mendy', 'Kalidou Koulibaly'] },
  // Group E
  { id: 'ger', name: 'Germany', code: 'GER', flag: '🇩🇪', confederation: 'UEFA', fifaRanking: 12, group: 'E', colors: { primary: '#000000', secondary: '#FFFFFF' }, coach: 'Julian Nagelsmann', keyPlayers: ['Florian Wirtz', 'Jamal Musiala', 'Kai Havertz'] },
  { id: 'por', name: 'Portugal', code: 'POR', flag: '🇵🇹', confederation: 'UEFA', fifaRanking: 6, group: 'E', colors: { primary: '#006600', secondary: '#FF0000' }, coach: 'Roberto Martínez', keyPlayers: ['Cristiano Ronaldo', 'Bruno Fernandes', 'Rafael Leão'] },
  { id: 'col', name: 'Colombia', code: 'COL', flag: '🇨🇴', confederation: 'CONMEBOL', fifaRanking: 11, group: 'E', colors: { primary: '#FCD116', secondary: '#003087' }, coach: 'Néstor Lorenzo', keyPlayers: ['James Rodríguez', 'Luis Díaz', 'Falcao'] },
  { id: 'aus', name: 'Australia', code: 'AUS', flag: '🇦🇺', confederation: 'AFC', fifaRanking: 25, group: 'E', colors: { primary: '#00843D', secondary: '#FFD700' }, coach: 'Tony Popovic', keyPlayers: ['Mat Ryan', 'Socceroos', 'Milos Degenek'] },
  // Group F
  { id: 'uru', name: 'Uruguay', code: 'URU', flag: '🇺🇾', confederation: 'CONMEBOL', fifaRanking: 15, group: 'F', colors: { primary: '#75AADB', secondary: '#FFFFFF' }, coach: 'Marcelo Bielsa', keyPlayers: ['Federico Valverde', 'Darwin Núñez', 'Rodrigo Bentancur'] },
  { id: 'kor', name: 'South Korea', code: 'KOR', flag: '🇰🇷', confederation: 'AFC', fifaRanking: 23, group: 'F', colors: { primary: '#CD2E3A', secondary: '#003478' }, coach: 'Hong Myung-bo', keyPlayers: ['Son Heung-min', 'Lee Jae-sung', 'Hwang Hee-chan'] },
  { id: 'den', name: 'Denmark', code: 'DEN', flag: '🇩🇰', confederation: 'UEFA', fifaRanking: 22, group: 'F', colors: { primary: '#C60C30', secondary: '#FFFFFF' }, coach: 'Kasper Hjulmand', keyPlayers: ['Christian Eriksen', 'Pierre-Emile Højbjerg', 'Rasmus Højlund'] },
  { id: 'tun', name: 'Tunisia', code: 'TUN', flag: '🇹🇳', confederation: 'CAF', fifaRanking: 38, group: 'F', colors: { primary: '#E70013', secondary: '#FFFFFF' }, coach: 'Jalel Kadri', keyPlayers: ['Youssef Msakni', 'Wahbi Khazri', 'Mohamed Drager'] },
  // Group G
  { id: 'pol', name: 'Poland', code: 'POL', flag: '🇵🇱', confederation: 'UEFA', fifaRanking: 28, group: 'G', colors: { primary: '#FFFFFF', secondary: '#DC143C' }, coach: 'Michał Probierz', keyPlayers: ['Robert Lewandowski', 'Piotr Zieliński', 'Wojciech Szczęsny'] },
  { id: 'swi', name: 'Switzerland', code: 'SUI', flag: '🇨🇭', confederation: 'UEFA', fifaRanking: 21, group: 'G', colors: { primary: '#FF0000', secondary: '#FFFFFF' }, coach: 'Murat Yakin', keyPlayers: ['Granit Xhaka', 'Xherdan Shaqiri', 'Breel Embolo'] },
  { id: 'ecu', name: 'Ecuador', code: 'ECU', flag: '🇪🇨', confederation: 'CONMEBOL', fifaRanking: 44, group: 'G', colors: { primary: '#FFD100', secondary: '#034EA2' }, coach: 'Félix Sánchez', keyPlayers: ['Enner Valencia', 'Moisés Caicedo', 'Gonzalo Plata'] },
  { id: 'tco', name: 'Cameroon', code: 'CMR', flag: '🇨🇲', confederation: 'CAF', fifaRanking: 43, group: 'G', colors: { primary: '#007A5E', secondary: '#CE1126' }, coach: 'Marc Brys', keyPlayers: ['Vincent Aboubakar', 'André Onana', 'Eric Maxim Choupo-Moting'] },
  // Group H
  { id: 'nig', name: 'Nigeria', code: 'NGA', flag: '🇳🇬', confederation: 'CAF', fifaRanking: 30, group: 'H', colors: { primary: '#008751', secondary: '#FFFFFF' }, coach: 'Finidi George', keyPlayers: ['Victor Osimhen', 'Alex Iwobi', 'Wilfred Ndidi'] },
  { id: 'mex2', name: 'Saudi Arabia', code: 'KSA', flag: '🇸🇦', confederation: 'AFC', fifaRanking: 54, group: 'H', colors: { primary: '#006C35', secondary: '#FFFFFF' }, coach: 'Hervé Renard', keyPlayers: ['Salem Al-Dawsari', 'Mohammed Al-Owais', 'Saud Abdulhamid'] },
  { id: 'sco', name: 'Scotland', code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', confederation: 'UEFA', fifaRanking: 35, group: 'H', colors: { primary: '#003F87', secondary: '#FFFFFF' }, coach: 'Steve Clarke', keyPlayers: ['Andy Robertson', 'Scott McTominay', 'Callum McGregor'] },
  { id: 'mex3', name: 'Panama', code: 'PAN', flag: '🇵🇦', confederation: 'CONCACAF', fifaRanking: 52, group: 'H', colors: { primary: '#FFFFFF', secondary: '#DA121A' }, coach: 'Thomas Christiansen', keyPlayers: ['José Rodríguez', 'Rolando Blackburn', 'Adalberto Carrasquilla'] },
  // Group I
  { id: 'ita', name: 'Italy', code: 'ITA', flag: '🇮🇹', confederation: 'UEFA', fifaRanking: 10, group: 'I', colors: { primary: '#003F87', secondary: '#FFFFFF' }, coach: 'Luciano Spalletti', keyPlayers: ['Federico Chiesa', 'Nicolò Barella', 'Gianluigi Donnarumma'] },
  { id: 'aut', name: 'Austria', code: 'AUT', flag: '🇦🇹', confederation: 'UEFA', fifaRanking: 29, group: 'I', colors: { primary: '#ED2939', secondary: '#FFFFFF' }, coach: 'Ralf Rangnick', keyPlayers: ['David Alaba', 'Marcel Sabitzer', 'Marko Arnautovic'] },
  { id: 'alg', name: 'Algeria', code: 'ALG', flag: '🇩🇿', confederation: 'CAF', fifaRanking: 47, group: 'I', colors: { primary: '#006233', secondary: '#FFFFFF' }, coach: 'Vladimir Petkovic', keyPlayers: ['Riyad Mahrez', 'Islam Slimani', 'Youcef Atal'] },
  { id: 'par', name: 'Paraguay', code: 'PAR', flag: '🇵🇾', confederation: 'CONMEBOL', fifaRanking: 61, group: 'I', colors: { primary: '#D52B1E', secondary: '#0038A8' }, coach: 'Gustavo Alfaro', keyPlayers: ['Miguel Almirón', 'Gustavo Gómez', 'Óscar Romero'] },
  // Group J
  { id: 'nga', name: 'Ghana', code: 'GHA', flag: '🇬🇭', confederation: 'CAF', fifaRanking: 60, group: 'J', colors: { primary: '#000000', secondary: '#FCD116' }, coach: 'Otto Addo', keyPlayers: ['Jordan Ayew', 'Thomas Partey', 'André Ayew'] },
  { id: 'svk', name: 'Slovakia', code: 'SVK', flag: '🇸🇰', confederation: 'UEFA', fifaRanking: 50, group: 'J', colors: { primary: '#0B4EA2', secondary: '#FFFFFF' }, coach: 'Francesco Calzona', keyPlayers: ['Marek Hamšík', 'Dávid Hancko', 'Robert Boženík'] },
  { id: 'sau', name: 'Egypt', code: 'EGY', flag: '🇪🇬', confederation: 'CAF', fifaRanking: 36, group: 'J', colors: { primary: '#CE1126', secondary: '#FFFFFF' }, coach: 'Hossam Hassan', keyPlayers: ['Mohamed Salah', 'Mohamed Elneny', 'Ahmed El-Shennawy'] },
  { id: 'chi', name: 'Chile', code: 'CHI', flag: '🇨🇱', confederation: 'CONMEBOL', fifaRanking: 48, group: 'J', colors: { primary: '#D52B1E', secondary: '#FFFFFF' }, coach: 'Ricardo Gareca', keyPlayers: ['Alexis Sánchez', 'Arturo Vidal', 'Claudio Bravo'] },
  // Group K
  { id: 'svn', name: 'Slovenia', code: 'SVN', flag: '🇸🇮', confederation: 'UEFA', fifaRanking: 57, group: 'K', colors: { primary: '#003DA5', secondary: '#FFFFFF' }, coach: 'Matjaž Kek', keyPlayers: ['Jan Oblak', 'Benjamin Šeško', 'Josip Iličić'] },
  { id: 'nig2', name: 'Venezuela', code: 'VEN', flag: '🇻🇪', confederation: 'CONMEBOL', fifaRanking: 40, group: 'K', colors: { primary: '#CF142B', secondary: '#003893' }, coach: 'Fernando Batista', keyPlayers: ['Salomón Rondón', 'Josef Martínez', 'Yangel Herrera'] },
  { id: 'qat', name: 'Qatar', code: 'QAT', flag: '🇶🇦', confederation: 'AFC', fifaRanking: 33, group: 'K', colors: { primary: '#8D153A', secondary: '#FFFFFF' }, coach: 'Marquez Lopez', keyPlayers: ['Akram Afif', 'Almoez Ali', 'Hassan Al-Haydos'] },
  { id: 'tur', name: 'Turkey', code: 'TUR', flag: '🇹🇷', confederation: 'UEFA', fifaRanking: 26, group: 'K', colors: { primary: '#E30A17', secondary: '#FFFFFF' }, coach: 'Vincenzo Montella', keyPlayers: ['Hakan Çalhanoğlu', 'Arda Güler', 'Kenan Yıldız'] },
  // Group L
  { id: 'gre', name: 'Greece', code: 'GRE', flag: '🇬🇷', confederation: 'UEFA', fifaRanking: 34, group: 'L', colors: { primary: '#0D5EAF', secondary: '#FFFFFF' }, coach: 'Gus Poyet', keyPlayers: ['Kostas Tsimikas', 'Giorgos Masouras', 'Anastasios Bakasetas'] },
  { id: 'isr', name: 'Israel', code: 'ISR', flag: '🇮🇱', confederation: 'UEFA', fifaRanking: 62, group: 'L', colors: { primary: '#0038B8', secondary: '#FFFFFF' }, coach: 'Ran Ben Shimon', keyPlayers: ['Dor Peretz', 'Eli Dasa', 'Shon Weissman'] },
  { id: 'srb', name: 'Serbia', code: 'SRB', flag: '🇷🇸', confederation: 'UEFA', fifaRanking: 32, group: 'L', colors: { primary: '#C6363C', secondary: '#0C4076' }, coach: 'Dragan Stojković', keyPlayers: ['Dušan Vlahović', 'Aleksandar Mitrović', 'Sergej Milinković-Savić'] },
  { id: 'cos', name: 'Costa Rica', code: 'CRC', flag: '🇨🇷', confederation: 'CONCACAF', fifaRanking: 51, group: 'L', colors: { primary: '#002B7F', secondary: '#CE1126' }, coach: 'Luis Fernando Suárez', keyPlayers: ['Keylor Navas', 'Bryan Ruiz', 'Joel Campbell'] },
];

const TEAM_MAP: Record<string, Team> = Object.fromEntries(TEAMS.map(t => [t.id, t]));
const S = (id: string) => STADIUMS.find(s => s.id === id)!;

// ─── MATCHES ─────────────────────────────────────────────────────────────────

function match(
  id: string, n: number, stage: string, group: string | undefined,
  homeId: string | null, awayId: string | null,
  date: string, stadiumId: string, status: string = 'scheduled',
): MatchWithStadium {
  return {
    id, matchNumber: n,
    stage: stage as never,
    group,
    homeTeam: homeId ? TEAM_MAP[homeId] : null,
    awayTeam: awayId ? TEAM_MAP[awayId] : null,
    date, stadiumId,
    status: status as never,
    stadium: S(stadiumId),
  };
}

export const MATCHES: MatchWithStadium[] = [
  // ── Group Stage ──
  match('m001', 1, 'Group Stage', 'A', 'mex', 'can', '2026-06-11T20:00:00-06:00', 'azteca'),
  match('m002', 2, 'Group Stage', 'A', 'usa', 'nzl', '2026-06-12T20:00:00-07:00', 'sofi'),
  match('m003', 3, 'Group Stage', 'A', 'can', 'nzl', '2026-06-16T17:00:00-04:00', 'bmo'),
  match('m004', 4, 'Group Stage', 'A', 'mex', 'usa', '2026-06-16T21:00:00-05:00', 'att'),
  match('m005', 5, 'Group Stage', 'A', 'nzl', 'mex', '2026-06-20T18:00:00-07:00', 'lumen'),
  match('m006', 6, 'Group Stage', 'A', 'can', 'usa', '2026-06-20T18:00:00-04:00', 'gillette'),

  match('m007', 7, 'Group Stage', 'B', 'arg', 'cro', '2026-06-13T16:00:00-07:00', 'levis'),
  match('m008', 8, 'Group Stage', 'B', 'mar', 'irn', '2026-06-13T20:00:00-05:00', 'nrg'),
  match('m009', 9, 'Group Stage', 'B', 'arg', 'irn', '2026-06-17T16:00:00-06:00', 'arrowhead'),
  match('m010', 10, 'Group Stage', 'B', 'cro', 'mar', '2026-06-17T20:00:00-05:00', 'mercedesbenz'),
  match('m011', 11, 'Group Stage', 'B', 'irn', 'cro', '2026-06-21T16:00:00-04:00', 'lincoln'),
  match('m012', 12, 'Group Stage', 'B', 'arg', 'mar', '2026-06-21T16:00:00-05:00', 'hardrock'),

  match('m013', 13, 'Group Stage', 'C', 'fra', 'jap', '2026-06-14T18:00:00-04:00', 'metlife'),
  match('m014', 14, 'Group Stage', 'C', 'bra', 'bel', '2026-06-14T21:00:00-05:00', 'att'),
  match('m015', 15, 'Group Stage', 'C', 'fra', 'bel', '2026-06-18T18:00:00-05:00', 'arrowhead'),
  match('m016', 16, 'Group Stage', 'C', 'bra', 'jap', '2026-06-18T21:00:00-07:00', 'sofi'),
  match('m017', 17, 'Group Stage', 'C', 'jap', 'bel', '2026-06-22T20:00:00-06:00', 'akron'),
  match('m018', 18, 'Group Stage', 'C', 'fra', 'bra', '2026-06-22T20:00:00-05:00', 'nrg'),

  match('m019', 19, 'Group Stage', 'D', 'eng', 'sen', '2026-06-15T16:00:00-04:00', 'gillette'),
  match('m020', 20, 'Group Stage', 'D', 'esp', 'ned', '2026-06-15T20:00:00-07:00', 'lumen'),
  match('m021', 21, 'Group Stage', 'D', 'eng', 'ned', '2026-06-19T17:00:00-04:00', 'metlife'),
  match('m022', 22, 'Group Stage', 'D', 'esp', 'sen', '2026-06-19T21:00:00-06:00', 'azteca'),
  match('m023', 23, 'Group Stage', 'D', 'ned', 'sen', '2026-06-23T20:00:00-07:00', 'levis'),
  match('m024', 24, 'Group Stage', 'D', 'eng', 'esp', '2026-06-23T20:00:00-05:00', 'mercedesbenz'),

  match('m025', 25, 'Group Stage', 'E', 'ger', 'aus', '2026-06-16T18:00:00-05:00', 'nrg'),
  match('m026', 26, 'Group Stage', 'E', 'por', 'col', '2026-06-16T21:00:00-04:00', 'metlife'),
  match('m027', 27, 'Group Stage', 'E', 'ger', 'col', '2026-06-20T18:00:00-05:00', 'att'),
  match('m028', 28, 'Group Stage', 'E', 'por', 'aus', '2026-06-20T21:00:00-07:00', 'sofi'),
  match('m029', 29, 'Group Stage', 'E', 'aus', 'col', '2026-06-24T20:00:00-04:00', 'lincoln'),
  match('m030', 30, 'Group Stage', 'E', 'ger', 'por', '2026-06-24T20:00:00-05:00', 'hardrock'),

  match('m031', 31, 'Group Stage', 'F', 'uru', 'tun', '2026-06-17T17:00:00-06:00', 'bbva'),
  match('m032', 32, 'Group Stage', 'F', 'kor', 'den', '2026-06-17T20:00:00-04:00', 'gillette'),
  match('m033', 33, 'Group Stage', 'F', 'uru', 'den', '2026-06-21T17:00:00-07:00', 'bc'),
  match('m034', 34, 'Group Stage', 'F', 'kor', 'tun', '2026-06-21T20:00:00-06:00', 'akron'),
  match('m035', 35, 'Group Stage', 'F', 'tun', 'den', '2026-06-25T20:00:00-05:00', 'arrowhead'),
  match('m036', 36, 'Group Stage', 'F', 'uru', 'kor', '2026-06-25T20:00:00-04:00', 'metlife'),

  match('m037', 37, 'Group Stage', 'G', 'pol', 'tco', '2026-06-18T17:00:00-07:00', 'lumen'),
  match('m038', 38, 'Group Stage', 'G', 'swi', 'ecu', '2026-06-18T20:00:00-06:00', 'azteca'),
  match('m039', 39, 'Group Stage', 'G', 'pol', 'ecu', '2026-06-22T17:00:00-04:00', 'bmo'),
  match('m040', 40, 'Group Stage', 'G', 'swi', 'tco', '2026-06-22T20:00:00-07:00', 'sofi'),
  match('m041', 41, 'Group Stage', 'G', 'tco', 'ecu', '2026-06-26T20:00:00-06:00', 'akron'),
  match('m042', 42, 'Group Stage', 'G', 'pol', 'swi', '2026-06-26T20:00:00-05:00', 'mercedesbenz'),

  match('m043', 43, 'Group Stage', 'H', 'nig', 'pan', '2026-06-19T16:00:00-05:00', 'nrg'),
  match('m044', 44, 'Group Stage', 'H', 'mex2', 'sco', '2026-06-19T20:00:00-04:00', 'lincoln'),
  match('m045', 45, 'Group Stage', 'H', 'nig', 'sco', '2026-06-23T17:00:00-07:00', 'levis'),
  match('m046', 46, 'Group Stage', 'H', 'mex2', 'pan', '2026-06-23T20:00:00-06:00', 'bbva'),
  match('m047', 47, 'Group Stage', 'H', 'pan', 'sco', '2026-06-27T20:00:00-04:00', 'gillette'),
  match('m048', 48, 'Group Stage', 'H', 'nig', 'mex2', '2026-06-27T20:00:00-07:00', 'lumen'),

  match('m049', 49, 'Group Stage', 'I', 'ita', 'par', '2026-06-20T16:00:00-05:00', 'arrowhead'),
  match('m050', 50, 'Group Stage', 'I', 'aut', 'alg', '2026-06-20T20:00:00-06:00', 'azteca'),
  match('m051', 51, 'Group Stage', 'I', 'ita', 'alg', '2026-06-24T17:00:00-07:00', 'bc'),
  match('m052', 52, 'Group Stage', 'I', 'aut', 'par', '2026-06-24T20:00:00-04:00', 'metlife'),
  match('m053', 53, 'Group Stage', 'I', 'alg', 'par', '2026-06-28T20:00:00-05:00', 'hardrock'),
  match('m054', 54, 'Group Stage', 'I', 'ita', 'aut', '2026-06-28T20:00:00-06:00', 'akron'),

  match('m055', 55, 'Group Stage', 'J', 'nga', 'chi', '2026-06-21T16:00:00-07:00', 'lumen'),
  match('m056', 56, 'Group Stage', 'J', 'sau', 'svk', '2026-06-21T20:00:00-05:00', 'nrg'),
  match('m057', 57, 'Group Stage', 'J', 'nga', 'svk', '2026-06-25T17:00:00-06:00', 'bbva'),
  match('m058', 58, 'Group Stage', 'J', 'sau', 'chi', '2026-06-25T20:00:00-04:00', 'bmo'),
  match('m059', 59, 'Group Stage', 'J', 'svk', 'chi', '2026-06-29T20:00:00-05:00', 'att'),
  match('m060', 60, 'Group Stage', 'J', 'nga', 'sau', '2026-06-29T20:00:00-07:00', 'sofi'),

  match('m061', 61, 'Group Stage', 'K', 'svn', 'qat', '2026-06-22T16:00:00-04:00', 'gillette'),
  match('m062', 62, 'Group Stage', 'K', 'tur', 'nig2', '2026-06-22T20:00:00-06:00', 'arrowhead'),
  match('m063', 63, 'Group Stage', 'K', 'svn', 'nig2', '2026-06-26T17:00:00-04:00', 'lincoln'),
  match('m064', 64, 'Group Stage', 'K', 'tur', 'qat', '2026-06-26T20:00:00-07:00', 'levis'),
  match('m065', 65, 'Group Stage', 'K', 'nig2', 'qat', '2026-06-30T20:00:00-06:00', 'akron'),
  match('m066', 66, 'Group Stage', 'K', 'svn', 'tur', '2026-06-30T20:00:00-05:00', 'mercedesbenz'),

  match('m067', 67, 'Group Stage', 'L', 'gre', 'cos', '2026-06-23T16:00:00-04:00', 'metlife'),
  match('m068', 68, 'Group Stage', 'L', 'isr', 'srb', '2026-06-23T20:00:00-05:00', 'hardrock'),
  match('m069', 69, 'Group Stage', 'L', 'gre', 'srb', '2026-06-27T17:00:00-07:00', 'bc'),
  match('m070', 70, 'Group Stage', 'L', 'isr', 'cos', '2026-06-27T20:00:00-06:00', 'bbva'),
  match('m071', 71, 'Group Stage', 'L', 'srb', 'cos', '2026-07-01T20:00:00-05:00', 'att'),
  match('m072', 72, 'Group Stage', 'L', 'gre', 'isr', '2026-07-01T20:00:00-04:00', 'bmo'),

  // ── Round of 32 (TBD) ──
  match('m073', 73, 'Round of 32', undefined, null, null, '2026-07-04T16:00:00-04:00', 'metlife'),
  match('m074', 74, 'Round of 32', undefined, null, null, '2026-07-04T20:00:00-07:00', 'sofi'),
  match('m075', 75, 'Round of 32', undefined, null, null, '2026-07-05T16:00:00-05:00', 'arrowhead'),
  match('m076', 76, 'Round of 32', undefined, null, null, '2026-07-05T20:00:00-06:00', 'azteca'),
  match('m077', 77, 'Round of 32', undefined, null, null, '2026-07-06T16:00:00-04:00', 'gillette'),
  match('m078', 78, 'Round of 32', undefined, null, null, '2026-07-06T20:00:00-07:00', 'lumen'),
  match('m079', 79, 'Round of 32', undefined, null, null, '2026-07-07T16:00:00-05:00', 'nrg'),
  match('m080', 80, 'Round of 32', undefined, null, null, '2026-07-07T20:00:00-04:00', 'lincoln'),
  match('m081', 81, 'Round of 32', undefined, null, null, '2026-07-08T16:00:00-07:00', 'levis'),
  match('m082', 82, 'Round of 32', undefined, null, null, '2026-07-08T20:00:00-05:00', 'att'),
  match('m083', 83, 'Round of 32', undefined, null, null, '2026-07-09T16:00:00-04:00', 'hardrock'),
  match('m084', 84, 'Round of 32', undefined, null, null, '2026-07-09T20:00:00-06:00', 'mercedesbenz'),
  match('m085', 85, 'Round of 32', undefined, null, null, '2026-07-10T16:00:00-07:00', 'bc'),
  match('m086', 86, 'Round of 32', undefined, null, null, '2026-07-10T20:00:00-04:00', 'bmo'),
  match('m087', 87, 'Round of 32', undefined, null, null, '2026-07-11T16:00:00-05:00', 'bbva'),
  match('m088', 88, 'Round of 32', undefined, null, null, '2026-07-11T20:00:00-04:00', 'metlife'),

  // ── Round of 16 (TBD) ──
  match('m089', 89, 'Round of 16', undefined, null, null, '2026-07-14T16:00:00-07:00', 'sofi'),
  match('m090', 90, 'Round of 16', undefined, null, null, '2026-07-14T20:00:00-05:00', 'arrowhead'),
  match('m091', 91, 'Round of 16', undefined, null, null, '2026-07-15T16:00:00-04:00', 'gillette'),
  match('m092', 92, 'Round of 16', undefined, null, null, '2026-07-15T20:00:00-06:00', 'azteca'),
  match('m093', 93, 'Round of 16', undefined, null, null, '2026-07-16T16:00:00-05:00', 'nrg'),
  match('m094', 94, 'Round of 16', undefined, null, null, '2026-07-16T20:00:00-04:00', 'metlife'),
  match('m095', 95, 'Round of 16', undefined, null, null, '2026-07-17T16:00:00-07:00', 'levis'),
  match('m096', 96, 'Round of 16', undefined, null, null, '2026-07-17T20:00:00-05:00', 'att'),

  // ── Quarter-Finals (TBD) ──
  match('m097', 97, 'Quarter-Final', undefined, null, null, '2026-07-21T16:00:00-04:00', 'metlife'),
  match('m098', 98, 'Quarter-Final', undefined, null, null, '2026-07-21T20:00:00-07:00', 'sofi'),
  match('m099', 99, 'Quarter-Final', undefined, null, null, '2026-07-22T16:00:00-05:00', 'arrowhead'),
  match('m100', 100, 'Quarter-Final', undefined, null, null, '2026-07-22T20:00:00-06:00', 'azteca'),

  // ── Semi-Finals (TBD) ──
  match('m101', 101, 'Semi-Final', undefined, null, null, '2026-07-26T16:00:00-07:00', 'sofi'),
  match('m102', 102, 'Semi-Final', undefined, null, null, '2026-07-27T20:00:00-04:00', 'metlife'),

  // ── Third Place (TBD) ──
  match('m103', 103, 'Third Place', undefined, null, null, '2026-07-30T16:00:00-06:00', 'azteca'),

  // ── Final (TBD) ──
  match('m104', 104, 'Final', undefined, null, null, '2026-08-02T17:00:00-04:00', 'metlife'),
];

// ─── PLAYER STATS ─────────────────────────────────────────────────────────────

export const PLAYER_STATS: PlayerStat[] = [
  { id: 'ps001', name: 'Lionel Messi', teamId: 'arg', teamCode: 'ARG', teamFlag: '🇦🇷', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps002', name: 'Cristiano Ronaldo', teamId: 'por', teamCode: 'POR', teamFlag: '🇵🇹', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps003', name: 'Kylian Mbappé', teamId: 'fra', teamCode: 'FRA', teamFlag: '🇫🇷', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps004', name: 'Erling Haaland', teamId: 'ned', teamCode: 'NED', teamFlag: '🇳🇱', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps005', name: 'Vinícius Jr.', teamId: 'bra', teamCode: 'BRA', teamFlag: '🇧🇷', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps006', name: 'Harry Kane', teamId: 'eng', teamCode: 'ENG', teamFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps007', name: 'Victor Osimhen', teamId: 'nig', teamCode: 'NGA', teamFlag: '🇳🇬', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps008', name: 'Jude Bellingham', teamId: 'eng', teamCode: 'ENG', teamFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', position: 'Midfielder', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps009', name: 'Robert Lewandowski', teamId: 'pol', teamCode: 'POL', teamFlag: '🇵🇱', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps010', name: 'Son Heung-min', teamId: 'kor', teamCode: 'KOR', teamFlag: '🇰🇷', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps011', name: 'Christian Pulisic', teamId: 'usa', teamCode: 'USA', teamFlag: '🇺🇸', position: 'Midfielder', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps012', name: 'Mohamed Salah', teamId: 'sau', teamCode: 'EGY', teamFlag: '🇪🇬', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps013', name: 'Florian Wirtz', teamId: 'ger', teamCode: 'GER', teamFlag: '🇩🇪', position: 'Midfielder', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps014', name: 'Pedri', teamId: 'esp', teamCode: 'ESP', teamFlag: '🇪🇸', position: 'Midfielder', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps015', name: 'Lamine Yamal', teamId: 'esp', teamCode: 'ESP', teamFlag: '🇪🇸', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps016', name: 'Alphonso Davies', teamId: 'can', teamCode: 'CAN', teamFlag: '🇨🇦', position: 'Defender', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps017', name: 'Federico Valverde', teamId: 'uru', teamCode: 'URU', teamFlag: '🇺🇾', position: 'Midfielder', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps018', name: 'Achraf Hakimi', teamId: 'mar', teamCode: 'MAR', teamFlag: '🇲🇦', position: 'Defender', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps019', name: 'Arda Güler', teamId: 'tur', teamCode: 'TUR', teamFlag: '🇹🇷', position: 'Midfielder', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
  { id: 'ps020', name: 'Darwin Núñez', teamId: 'uru', teamCode: 'URU', teamFlag: '🇺🇾', position: 'Forward', goals: 0, assists: 0, yellowCards: 0, redCards: 0, appearances: 0, minutesPlayed: 0 },
];

// ─── TEAM STATS ───────────────────────────────────────────────────────────────

export const TEAM_STATS: TeamStat[] = TEAMS.map(t => ({
  teamId: t.id,
  teamCode: t.code,
  teamName: t.name,
  teamFlag: t.flag,
  group: t.group,
  played: 0,
  wins: 0,
  draws: 0,
  losses: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  points: 0,
}));

// ─── NEWS ─────────────────────────────────────────────────────────────────────

export const NEWS: NewsItem[] = [
  { id: 'n001', title: 'FIFA Announces Record 104 Matches Across Three Nations', excerpt: 'The 2026 FIFA World Cup will feature an expanded 48-team format with 104 matches spread across 16 stadiums in the USA, Canada, and Mexico — the most ambitious tournament in football history.', category: 'Tournament', source: 'FIFA Official', publishedAt: '2026-05-15T10:00:00Z', featured: true, tags: ['World Cup 2026', 'FIFA', 'Format'] },
  { id: 'n002', title: "Messi's Argentina Begin Title Defense in San Francisco", excerpt: "The reigning world champions will kick off their 2026 campaign at Levi's Stadium against Croatia in what promises to be one of the tournament's most anticipated group-stage clashes.", category: 'Match Preview', source: 'World Cup HQ', publishedAt: '2026-05-20T09:00:00Z', featured: true, tags: ['Argentina', 'Messi', 'Croatia', 'Group B'] },
  { id: 'n003', title: 'MetLife Stadium Set to Host Tournament Final', excerpt: "New Jersey's MetLife Stadium — the largest venue in the competition at 82,500 capacity — will host the World Cup Final on August 2nd, cementing the New York area's status as the tournament's crown jewel.", category: 'Tournament', source: 'World Cup HQ', publishedAt: '2026-05-18T14:00:00Z', featured: false, tags: ['MetLife', 'Final', 'New York'] },
  { id: 'n004', title: "France Eye Back-to-Back Titles With Mbappé Leading the Charge", excerpt: "Les Bleus head into the tournament as one of the pre-tournament favorites. Kylian Mbappé, now captain, is hungry for the one trophy that has eluded him despite all his club success.", category: 'Team News', source: 'World Cup HQ', publishedAt: '2026-05-22T11:30:00Z', featured: false, tags: ['France', 'Mbappé', 'Favorites'] },
  { id: 'n005', title: "USA Soccer on Home Soil: The Nation's Biggest Football Moment", excerpt: "With Pochettino at the helm and a golden generation headlined by Pulisic, Reyna, and Adams, the USMNT enters their home tournament with realistic ambitions of making a deep run for the first time since 2002.", category: 'Team News', source: 'World Cup HQ', publishedAt: '2026-05-24T08:00:00Z', featured: true, tags: ['USA', 'USMNT', 'Pulisic', 'Host Nation'] },
  { id: 'n006', title: "Estadio Azteca: Three World Cups, One Legendary Ground", excerpt: "Mexico City's iconic Estadio Azteca becomes the first venue to host matches at three different World Cups — 1970, 1986, and now 2026. Its atmosphere is like no other on the planet.", category: 'History', source: 'World Cup HQ', publishedAt: '2026-05-21T16:00:00Z', featured: false, tags: ['Azteca', 'Mexico City', 'History'] },
  { id: 'n007', title: "Brazil's New-Look Squad Ready to End 24-Year Drought", excerpt: "Guided by Dorival Júnior and powered by Vinícius Jr., Rodrygo, and an exciting midfield, the Seleção arrive as dark horses hungry to reclaim football's biggest prize after 24 years of heartbreak.", category: 'Team News', source: 'World Cup HQ', publishedAt: '2026-05-23T12:00:00Z', featured: false, tags: ['Brazil', 'Vinícius', 'CONMEBOL'] },
  { id: 'n008', title: "England vs Spain: The Group of Death Comes Alive", excerpt: "Group D pits England against Spain in a mouthwatering clash that could feature four future Ballon d'Or winners. Bellingham, Kane, Pedri and Yamal all on the same pitch — this is football's marquee group.", category: 'Analysis', source: 'World Cup HQ', publishedAt: '2026-05-25T10:00:00Z', featured: false, tags: ['England', 'Spain', 'Group D', 'Analysis'] },
  { id: 'n009', title: "Morocco: Africa's Contender Looks to Top Their 2022 Miracle", excerpt: "After reaching the semi-finals in Qatar, the Atlas Lions have built on their historic run. Under Regragui, Morocco have become a genuine contender who no team in the draw wants to face.", category: 'Team News', source: 'World Cup HQ', publishedAt: '2026-05-19T14:00:00Z', featured: false, tags: ['Morocco', 'Africa', 'Hakimi'] },
  { id: 'n010', title: "Germany Rebuild Complete: Nagelsmann's Side Targets Third Star", excerpt: "After the humiliation of early exits in 2018 and 2022, Germany arrive in North America transformed. Florian Wirtz and Jamal Musiala are the most exciting midfield duo in world football right now.", category: 'Team News', source: 'World Cup HQ', publishedAt: '2026-05-26T09:00:00Z', featured: false, tags: ['Germany', 'Wirtz', 'Musiala', 'UEFA'] },
  { id: 'n011', title: 'Opening Ceremony: A Celebration Spanning Three Nations', excerpt: 'The tournament will open at Estadio Azteca on June 11th with a spectacular ceremony celebrating North American culture. Mexico vs Canada kicks off proceedings under the legendary floodlights.', category: 'Tournament', source: 'FIFA Official', publishedAt: '2026-05-27T11:00:00Z', featured: false, tags: ['Opening Ceremony', 'Azteca', 'Mexico'] },
  { id: 'n012', title: "Cristiano Ronaldo's Final Dance: Portugal's Veteran Chases History", excerpt: "At 41, Ronaldo's inclusion in the Portugal squad is still the most divisive debate in football. But one more World Cup goal would put him in territory no player has ever reached. Watch this space.", category: 'Analysis', source: 'World Cup HQ', publishedAt: '2026-05-28T07:00:00Z', featured: false, tags: ['Ronaldo', 'Portugal', 'Records'] },
];
