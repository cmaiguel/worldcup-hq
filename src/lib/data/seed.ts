import type { Team, Stadium, PlayerStat, TeamStat, NewsItem, MatchWithStadium, Player } from '../types';

// ─── STADIUMS ────────────────────────────────────────────────────────────────

export const STADIUMS: Stadium[] = [
  { id: 'metlife',     name: 'MetLife Stadium',        city: 'New York / New Jersey', state: 'NJ', country: 'USA',    capacity: 82500, surface: 'Grass',           matchesHosted: 8, openedYear: 2010, coordinates: { lat: 40.8135, lng: -74.0745 } },
  { id: 'att',         name: 'AT&T Stadium',            city: 'Dallas',                state: 'TX', country: 'USA',    capacity: 80000, surface: 'Artificial Turf', matchesHosted: 7, openedYear: 2009, coordinates: { lat: 32.7473, lng: -97.0945 } },
  { id: 'levis',       name: "Levi's Stadium",          city: 'San Francisco Bay Area', state: 'CA', country: 'USA',   capacity: 68500, surface: 'Grass',           matchesHosted: 6, openedYear: 2014, coordinates: { lat: 37.4033, lng: -121.9694 } },
  { id: 'sofi',        name: 'SoFi Stadium',            city: 'Los Angeles',           state: 'CA', country: 'USA',    capacity: 70240, surface: 'Artificial Turf', matchesHosted: 7, openedYear: 2020, coordinates: { lat: 33.9535, lng: -118.3392 } },
  { id: 'lumen',       name: 'Lumen Field',             city: 'Seattle',               state: 'WA', country: 'USA',    capacity: 68740, surface: 'Artificial Turf', matchesHosted: 6, openedYear: 2002, coordinates: { lat: 47.5952, lng: -122.3316 } },
  { id: 'lincoln',     name: 'Lincoln Financial Field', city: 'Philadelphia',          state: 'PA', country: 'USA',    capacity: 69176, surface: 'Grass',           matchesHosted: 6, openedYear: 2003, coordinates: { lat: 39.9008, lng: -75.1675 } },
  { id: 'arrowhead',   name: 'Arrowhead Stadium',       city: 'Kansas City',           state: 'MO', country: 'USA',    capacity: 76416, surface: 'Grass',           matchesHosted: 6, openedYear: 1972, coordinates: { lat: 39.0489, lng: -94.4839 } },
  { id: 'mercedesbenz',name: 'Mercedes-Benz Stadium',   city: 'Atlanta',               state: 'GA', country: 'USA',    capacity: 71000, surface: 'Artificial Turf', matchesHosted: 6, openedYear: 2017, coordinates: { lat: 33.7554, lng: -84.4008 } },
  { id: 'gillette',    name: 'Gillette Stadium',         city: 'Boston',                state: 'MA', country: 'USA',    capacity: 65878, surface: 'Artificial Turf', matchesHosted: 6, openedYear: 2002, coordinates: { lat: 42.0909, lng: -71.2643 } },
  { id: 'hardrock',    name: 'Hard Rock Stadium',        city: 'Miami',                 state: 'FL', country: 'USA',    capacity: 65326, surface: 'Grass',           matchesHosted: 7, openedYear: 1987, coordinates: { lat: 25.9579, lng: -80.2389 } },
  { id: 'nrg',         name: 'NRG Stadium',              city: 'Houston',               state: 'TX', country: 'USA',    capacity: 72220, surface: 'Grass',           matchesHosted: 6, openedYear: 2002, coordinates: { lat: 29.6847, lng: -95.4107 } },
  { id: 'bmo',         name: 'BMO Field',                city: 'Toronto',                             country: 'Canada', capacity: 45736, surface: 'Artificial Turf', matchesHosted: 4, openedYear: 2007, coordinates: { lat: 43.6333, lng: -79.4189 } },
  { id: 'bc',          name: 'BC Place',                 city: 'Vancouver',                            country: 'Canada', capacity: 54500, surface: 'Artificial Turf', matchesHosted: 4, openedYear: 1983, coordinates: { lat: 49.2768, lng: -123.1118 } },
  { id: 'azteca',      name: 'Estadio Azteca',           city: 'Mexico City',                          country: 'Mexico', capacity: 87523, surface: 'Grass',           matchesHosted: 5, openedYear: 1966, coordinates: { lat: 19.3029, lng: -99.1505 } },
  { id: 'akron',       name: 'Estadio Akron',            city: 'Guadalajara',                          country: 'Mexico', capacity: 49850, surface: 'Grass',           matchesHosted: 4, openedYear: 2010, coordinates: { lat: 20.6868, lng: -103.4671 } },
  { id: 'bbva',        name: 'Estadio BBVA',             city: 'Monterrey',                            country: 'Mexico', capacity: 53500, surface: 'Grass',           matchesHosted: 4, openedYear: 2015, coordinates: { lat: 25.6693, lng: -100.2434 } },
];

// ─── TEAMS ───────────────────────────────────────────────────────────────────
// Official FIFA World Cup 2026 — 12 Groups, 4 Teams each
// Source: FIFA.com official draw

export const TEAMS: Team[] = [
  // ── GROUP A ──────────────────────────────────────────────────────────────
  {
    id: 'mex', name: 'Mexico', code: 'MEX', flag: '🇲🇽', confederation: 'CONCACAF', fifaRanking: 16, group: 'A',
    colors: { primary: '#006847', secondary: '#FFFFFF' }, coach: 'Javier Aguirre', captain: 'Hirving Lozano', starPlayer: 'Santiago Giménez',
    keyPlayers: ['Hirving Lozano', 'Santiago Giménez', 'Raúl Jiménez', 'Edson Álvarez'],
    worldCupAppearances: 17, bestFinish: 'Quarter-Final (1970, 1986)',
    bio: "El Tri open the tournament at their spiritual home — Estadio Azteca — in front of 87,000 roaring fans. Co-hosts with burning desire to prove they belong at the top table, Mexico face South Africa in the opening match of the 2026 World Cup.",
  },
  {
    id: 'rsa', name: 'South Africa', code: 'RSA', flag: '🇿🇦', confederation: 'CAF', fifaRanking: 68, group: 'A',
    colors: { primary: '#007A4D', secondary: '#FFB81C' }, coach: 'Hugo Broos', captain: 'Ronwen Williams', starPlayer: 'Percy Tau',
    keyPlayers: ['Percy Tau', 'Ronwen Williams', 'Themba Zwane', 'Bongani Zungu'],
    worldCupAppearances: 3, bestFinish: 'Round of 16 (2002)',
    bio: "Bafana Bafana make their return to the World Cup stage after qualifying through the African play-offs. Percy Tau leads a passionate squad ready to honour South Africa's football heritage and 1995 AFCON glory.",
  },
  {
    id: 'kor', name: 'Korea Republic', code: 'KOR', flag: '🇰🇷', confederation: 'AFC', fifaRanking: 22, group: 'A',
    colors: { primary: '#CD2E3A', secondary: '#003478' }, coach: 'Hong Myung-bo', captain: 'Son Heung-min', starPlayer: 'Son Heung-min',
    keyPlayers: ['Son Heung-min', 'Lee Kang-in', 'Hwang Hee-chan', 'Kim Min-jae'],
    worldCupAppearances: 11, bestFinish: 'Semi-Final (2002)',
    bio: "Korea Republic's greatest chapter was written at home in 2002, but this generation — headlined by the brilliant Son Heung-min — is arguably more talented. The Reds always play with heart and never surrender anything easily.",
  },
  {
    id: 'cze', name: 'Czechia', code: 'CZE', flag: '🇨🇿', confederation: 'UEFA', fifaRanking: 38, group: 'A',
    colors: { primary: '#D7141A', secondary: '#11457E' }, coach: 'Ivan Hašek', captain: 'Vladimír Coufal', starPlayer: 'Patrik Schick',
    keyPlayers: ['Patrik Schick', 'Vladimír Coufal', 'Tomáš Souček', 'Antonín Barák'],
    worldCupAppearances: 9, bestFinish: 'Runner-Up (1934, 1962 as Czechoslovakia)',
    bio: "Czechia return to the World Cup after qualifying through UEFA, powered by Bayer Leverkusen's Patrik Schick and the Premier League experience of Coufal and Souček. Ivan Hašek has rebuilt national pride after a turbulent few years.",
  },

  // ── GROUP B ──────────────────────────────────────────────────────────────
  {
    id: 'can', name: 'Canada', code: 'CAN', flag: '🇨🇦', confederation: 'CONCACAF', fifaRanking: 42, group: 'B',
    colors: { primary: '#FF0000', secondary: '#FFFFFF' }, coach: 'Jesse Marsch', captain: 'Alphonso Davies', starPlayer: 'Alphonso Davies',
    keyPlayers: ['Alphonso Davies', 'Jonathan David', 'Cyle Larin', 'Stephen Eustaquio'],
    worldCupAppearances: 2, bestFinish: 'Group Stage (1986)',
    bio: "Canada co-hosts the tournament they helped create, backed by the best generation of talent the country has ever produced. Alphonso Davies is already a global superstar. This team is hungry to write a new chapter in Canadian football history.",
  },
  {
    id: 'bih', name: 'Bosnia and Herzegovina', code: 'BIH', flag: '🇧🇦', confederation: 'UEFA', fifaRanking: 58, group: 'B',
    colors: { primary: '#003DA5', secondary: '#FFCB00' }, coach: 'Sergej Barbarez', captain: 'Edin Džeko', starPlayer: 'Aleksandar Šarić',
    keyPlayers: ['Edin Džeko', 'Miralem Pjanić', 'Ermedin Demirović', 'Aleksandar Šarić'],
    worldCupAppearances: 2, bestFinish: 'Group Stage (2014)',
    bio: "Bosnia return to the World Cup for only their second appearance, driven by an emotional nation and the veteran leadership of Edin Džeko. The Dragons qualified through a tough UEFA playoff and arrive with nothing to lose.",
  },
  {
    id: 'qat', name: 'Qatar', code: 'QAT', flag: '🇶🇦', confederation: 'AFC', fifaRanking: 37, group: 'B',
    colors: { primary: '#8D153A', secondary: '#FFFFFF' }, coach: 'Marquez Lopez', captain: 'Hassan Al-Haydos', starPlayer: 'Akram Afif',
    keyPlayers: ['Akram Afif', 'Almoez Ali', 'Hassan Al-Haydos', 'Mohammed Muntari'],
    worldCupAppearances: 2, bestFinish: 'Group Stage',
    bio: "Qatar redeemed their dismal 2022 home exit by winning the 2023 Asian Cup. Under Lopez they've become a technically disciplined unit. Akram Afif — their most creative talent — is determined to show the world Qatar belongs at this level.",
  },
  {
    id: 'sui', name: 'Switzerland', code: 'SUI', flag: '🇨🇭', confederation: 'UEFA', fifaRanking: 19, group: 'B',
    colors: { primary: '#FF0000', secondary: '#FFFFFF' }, coach: 'Murat Yakin', captain: 'Granit Xhaka', starPlayer: 'Granit Xhaka',
    keyPlayers: ['Granit Xhaka', 'Xherdan Shaqiri', 'Breel Embolo', 'Manuel Akanji'],
    worldCupAppearances: 12, bestFinish: 'Quarter-Final (1934, 1938, 1954)',
    bio: "Switzerland are the most consistently underestimated team in football. Xhaka has transformed from villain to undisputed leader and drives everything good about this team. Switzerland always make it difficult for the best teams in the world.",
  },

  // ── GROUP C ──────────────────────────────────────────────────────────────
  {
    id: 'bra', name: 'Brazil', code: 'BRA', flag: '🇧🇷', confederation: 'CONMEBOL', fifaRanking: 5, group: 'C',
    colors: { primary: '#009C3B', secondary: '#FFDF00' }, coach: 'Dorival Júnior', captain: 'Marquinhos', starPlayer: 'Vinícius Jr.',
    keyPlayers: ['Vinícius Jr.', 'Rodrygo', 'Marquinhos', 'Casemiro'],
    worldCupAppearances: 22, bestFinish: 'Champions (1958, 1962, 1970, 1994, 2002)',
    bio: "Five-time world champions and the most storied team in football history, Brazil arrive with their most exciting attacking lineup in years. Vinícius Jr. is the most dangerous winger on the planet. The 24-year wait since 2002 must end.",
  },
  {
    id: 'mar', name: 'Morocco', code: 'MAR', flag: '🇲🇦', confederation: 'CAF', fifaRanking: 14, group: 'C',
    colors: { primary: '#C1272D', secondary: '#006233' }, coach: 'Walid Regragui', captain: 'Romain Saïss', starPlayer: 'Achraf Hakimi',
    keyPlayers: ['Achraf Hakimi', 'Hakim Ziyech', 'Youssef En-Nesyri', 'Sofyan Amrabat'],
    worldCupAppearances: 6, bestFinish: 'Semi-Final (2022)',
    bio: "The Atlas Lions shocked the world in Qatar by reaching the semi-finals. Africa's greatest World Cup story. Under Regragui they've built on that historic run into a genuine contender — disciplined, passionate, and dangerous on every counter-attack.",
  },
  {
    id: 'hai', name: 'Haiti', code: 'HAI', flag: '🇭🇹', confederation: 'CONCACAF', fifaRanking: 84, group: 'C',
    colors: { primary: '#00209F', secondary: '#D21034' }, coach: 'Marc Collat', captain: 'Frantzdy Pierrot', starPlayer: 'Duckens Nazon',
    keyPlayers: ['Duckens Nazon', 'Frantzdy Pierrot', 'Bernes Chery', 'Derrick Étienne'],
    worldCupAppearances: 2, bestFinish: 'Group Stage (1974)',
    bio: "Haiti return to the World Cup for the first time in over 50 years, having qualified through CONCACAF in a remarkable campaign. Powered by Haitian diaspora players from Europe, Les Grenadiers bring raw passion and nothing to lose.",
  },
  {
    id: 'sco', name: 'Scotland', code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', confederation: 'UEFA', fifaRanking: 29, group: 'C',
    colors: { primary: '#003F87', secondary: '#FFFFFF' }, coach: 'Steve Clarke', captain: 'Andy Robertson', starPlayer: 'Scott McTominay',
    keyPlayers: ['Andy Robertson', 'Scott McTominay', 'Callum McGregor', 'Ryan Christie'],
    worldCupAppearances: 8, bestFinish: 'Group Stage',
    bio: "Scotland return to the World Cup for the first time since 1998, fuelled by a generation of top-tier Premier League talent. Clarke's side are compact and set-piece dangerous — never comfortable to play against and with plenty to prove.",
  },

  // ── GROUP D ──────────────────────────────────────────────────────────────
  {
    id: 'usa', name: 'United States', code: 'USA', flag: '🇺🇸', confederation: 'CONCACAF', fifaRanking: 13, group: 'D',
    colors: { primary: '#002868', secondary: '#BF0A30' }, coach: 'Mauricio Pochettino', captain: 'Tyler Adams', starPlayer: 'Christian Pulisic',
    keyPlayers: ['Christian Pulisic', 'Gio Reyna', 'Tyler Adams', 'Ricardo Pepi'],
    worldCupAppearances: 11, bestFinish: 'Third Place (1930)',
    bio: "On home soil for the first time since 1994, the USMNT carry the weight of a nation. Pochettino has welded together a golden generation maturing through Europe's top leagues. The most anticipated US squad in a generation — and they mean business.",
  },
  {
    id: 'par', name: 'Paraguay', code: 'PAR', flag: '🇵🇾', confederation: 'CONMEBOL', fifaRanking: 67, group: 'D',
    colors: { primary: '#D52B1E', secondary: '#0038A8' }, coach: 'Gustavo Alfaro', captain: 'Gustavo Gómez', starPlayer: 'Miguel Almirón',
    keyPlayers: ['Miguel Almirón', 'Gustavo Gómez', 'Óscar Romero', 'Antonio Sanabria'],
    worldCupAppearances: 9, bestFinish: 'Quarter-Final (1986)',
    bio: "Paraguay return to the World Cup stage with Miguel Almirón providing Premier League pedigree. Compact, organized and built on South American steel, the Guaraní are a team that never makes it easy for their opponents.",
  },
  {
    id: 'aus', name: 'Australia', code: 'AUS', flag: '🇦🇺', confederation: 'AFC', fifaRanking: 24, group: 'D',
    colors: { primary: '#00843D', secondary: '#FFD700' }, coach: 'Tony Popovic', captain: 'Mat Ryan', starPlayer: 'Nestory Irankunda',
    keyPlayers: ['Mat Ryan', 'Craig Goodwin', 'Nestory Irankunda', 'Jason Geria'],
    worldCupAppearances: 6, bestFinish: 'Round of 16 (2006, 2022)',
    bio: "Australia rode a wave of momentum in Qatar, knocking out Argentina in the Round of 16 before a heroic run cut short by eventual champions Argentina. The Socceroos build on that foundation with exciting new talent led by Nestory Irankunda.",
  },
  {
    id: 'tur', name: 'Türkiye', code: 'TUR', flag: '🇹🇷', confederation: 'UEFA', fifaRanking: 26, group: 'D',
    colors: { primary: '#E30A17', secondary: '#FFFFFF' }, coach: 'Vincenzo Montella', captain: 'Hakan Çalhanoğlu', starPlayer: 'Arda Güler',
    keyPlayers: ['Hakan Çalhanoğlu', 'Arda Güler', 'Kenan Yıldız', 'Zeki Çelik'],
    worldCupAppearances: 3, bestFinish: 'Third Place (2002)',
    bio: "Türkiye's golden generation has arrived. Arda Güler is arguably the most technically gifted young player in world football, while Çalhanoğlu has become a Champions League-winning architect. The Crescent Stars have never looked more dangerous.",
  },

  // ── GROUP E ──────────────────────────────────────────────────────────────
  {
    id: 'ger', name: 'Germany', code: 'GER', flag: '🇩🇪', confederation: 'UEFA', fifaRanking: 12, group: 'E',
    colors: { primary: '#000000', secondary: '#FFFFFF' }, coach: 'Julian Nagelsmann', captain: 'Ilkay Gündoğan', starPlayer: 'Florian Wirtz',
    keyPlayers: ['Florian Wirtz', 'Jamal Musiala', 'Kai Havertz', 'Manuel Neuer'],
    worldCupAppearances: 20, bestFinish: 'Champions (1954, 1974, 1990, 2014)',
    bio: "After two humiliating group-stage exits, Germany have rebuilt with pace and purpose. The Wirtz–Musiala axis may be the most exciting midfield duo in tournament football. Die Mannschaft are hungry — and finally ready — for a fifth star.",
  },
  {
    id: 'cuw', name: 'Curaçao', code: 'CUW', flag: '🇨🇼', confederation: 'CONCACAF', fifaRanking: 115, group: 'E',
    colors: { primary: '#003DA5', secondary: '#F9CC00' }, coach: 'Remko Bicentini', captain: 'Cuco Martina', starPlayer: 'Leandro Bacuna',
    keyPlayers: ['Leandro Bacuna', 'Cuco Martina', 'Juninho Bacuna', 'Hedwiges Maduro'],
    worldCupAppearances: 1, bestFinish: 'Group Stage (2026)',
    bio: "Curaçao make their historic first World Cup appearance after an incredible CONCACAF qualification campaign. A small island of 150,000 people producing a squad of professional players, many playing in Europe. The ultimate underdog story.",
  },
  {
    id: 'civ', name: "Côte d'Ivoire", code: 'CIV', flag: '🇨🇮', confederation: 'CAF', fifaRanking: 56, group: 'E',
    colors: { primary: '#F77F00', secondary: '#009A44' }, coach: 'Emerse Faé', captain: 'Serge Aurier', starPlayer: 'Sébastien Haller',
    keyPlayers: ['Sébastien Haller', 'Franck Kessié', 'Serge Aurier', 'Nicolas Pépé'],
    worldCupAppearances: 4, bestFinish: 'Round of 16 (2006)',
    bio: "The Elephants were AFCON champions in 2024 and arrive at the World Cup with serious momentum. Sébastien Haller is a target man who terrifies defenders, while Kessié provides the engine in midfield. Africa's dark horse.",
  },
  {
    id: 'ecu', name: 'Ecuador', code: 'ECU', flag: '🇪🇨', confederation: 'CONMEBOL', fifaRanking: 44, group: 'E',
    colors: { primary: '#FFD100', secondary: '#034EA2' }, coach: 'Félix Sánchez', captain: 'Enner Valencia', starPlayer: 'Moisés Caicedo',
    keyPlayers: ['Enner Valencia', 'Moisés Caicedo', 'Gonzalo Plata', 'Pervis Estupiñán'],
    worldCupAppearances: 4, bestFinish: 'Round of 16 (2006)',
    bio: "Ecuador punched well above their weight in Qatar, opening the tournament with a stunning win. Caicedo is now one of world football's elite midfielders while Valencia remains a poacher of the highest order. La Tri believe they can go further.",
  },

  // ── GROUP F ──────────────────────────────────────────────────────────────
  {
    id: 'ned', name: 'Netherlands', code: 'NED', flag: '🇳🇱', confederation: 'UEFA', fifaRanking: 7, group: 'F',
    colors: { primary: '#FF6900', secondary: '#FFFFFF' }, coach: 'Ronald Koeman', captain: 'Virgil van Dijk', starPlayer: 'Cody Gakpo',
    keyPlayers: ['Virgil van Dijk', 'Memphis Depay', 'Cody Gakpo', 'Frenkie de Jong'],
    worldCupAppearances: 11, bestFinish: 'Runner-Up (1974, 1978, 2010)',
    bio: "Three World Cup finals and never a winner — the Netherlands carry both rich heritage and painful near-misses. Virgil van Dijk provides commanding defensive leadership while Koeman builds a direct, physical team around Gakpo's penetrating runs.",
  },
  {
    id: 'jap', name: 'Japan', code: 'JPN', flag: '🇯🇵', confederation: 'AFC', fifaRanking: 18, group: 'F',
    colors: { primary: '#002569', secondary: '#FFFFFF' }, coach: 'Hajime Moriyasu', captain: 'Maya Yoshida', starPlayer: 'Takumi Minamino',
    keyPlayers: ['Takumi Minamino', 'Daichi Kamada', 'Ritsu Doan', 'Hiroki Sakai'],
    worldCupAppearances: 8, bestFinish: 'Round of 16',
    bio: "Japan have become Asia's most consistent World Cup performers, built on a high-pressing game and technically gifted players thriving in Europe's top leagues. The Samurai Blue always punch above their weight and they're not done yet.",
  },
  {
    id: 'swe', name: 'Sweden', code: 'SWE', flag: '🇸🇪', confederation: 'UEFA', fifaRanking: 25, group: 'F',
    colors: { primary: '#006AA7', secondary: '#FECC02' }, coach: 'Jon Dahl Tomasson', captain: 'Victor Nilsson Lindelöf', starPlayer: 'Dejan Kulusevski',
    keyPlayers: ['Dejan Kulusevski', 'Victor Nilsson Lindelöf', 'Emil Forsberg', 'Alexander Isak'],
    worldCupAppearances: 12, bestFinish: 'Third Place (1950, 1994)',
    bio: "Sweden return to the World Cup after their fourth-place finish in 2018 and regroup after missing 2022. With Kulusevski and Isak forming a formidable attacking unit and a disciplined Tomasson system, the Blågult are competitive again.",
  },
  {
    id: 'tun', name: 'Tunisia', code: 'TUN', flag: '🇹🇳', confederation: 'CAF', fifaRanking: 34, group: 'F',
    colors: { primary: '#E70013', secondary: '#FFFFFF' }, coach: 'Jalel Kadri', captain: 'Youssef Msakni', starPlayer: 'Wahbi Khazri',
    keyPlayers: ['Youssef Msakni', 'Wahbi Khazri', 'Montassar Talbi', 'Mohamed Drager'],
    worldCupAppearances: 6, bestFinish: 'Group Stage',
    bio: "Tunisia are Africa's most consistent qualifier, making the World Cup for the sixth time. Organised and hard-working, they remain a team capable of springing a result on any given day. Their 2022 win over France showed the world what they can do.",
  },

  // ── GROUP G ──────────────────────────────────────────────────────────────
  {
    id: 'bel', name: 'Belgium', code: 'BEL', flag: '🇧🇪', confederation: 'UEFA', fifaRanking: 3, group: 'G',
    colors: { primary: '#EF3340', secondary: '#000000' }, coach: 'Domenico Tedesco', captain: 'Kevin De Bruyne', starPlayer: 'Kevin De Bruyne',
    keyPlayers: ['Kevin De Bruyne', 'Romelu Lukaku', 'Thibaut Courtois', 'Axel Witsel'],
    worldCupAppearances: 14, bestFinish: 'Third Place (1986)',
    bio: "Belgium's golden generation has one final shot at immortality. De Bruyne orchestrates with masterful precision while Courtois remains the world's best goalkeeper. After three previous near-misses they arrive desperate to finally deliver.",
  },
  {
    id: 'egy', name: 'Egypt', code: 'EGY', flag: '🇪🇬', confederation: 'CAF', fifaRanking: 36, group: 'G',
    colors: { primary: '#CE1126', secondary: '#FFFFFF' }, coach: 'Hossam Hassan', captain: 'Mohamed Salah', starPlayer: 'Mohamed Salah',
    keyPlayers: ['Mohamed Salah', 'Mohamed Elneny', 'Ahmed El-Shennawy', 'Omar Marmoush'],
    worldCupAppearances: 4, bestFinish: 'Group Stage',
    bio: "Egypt have the most decorated player in their history: Mohamed Salah. The Liverpool legend is the reason every opponent fears facing the Pharaohs. Hassan has built the entire team structure around unlocking the best from their talisman.",
  },
  {
    id: 'irn', name: 'IR Iran', code: 'IRN', flag: '🇮🇷', confederation: 'AFC', fifaRanking: 23, group: 'G',
    colors: { primary: '#239F40', secondary: '#FFFFFF' }, coach: 'Amir Ghalenoei', captain: 'Ehsan Hajsafi', starPlayer: 'Mehdi Taremi',
    keyPlayers: ['Mehdi Taremi', 'Sardar Azmoun', 'Alireza Jahanbakhsh', 'Ali Gholizadeh'],
    worldCupAppearances: 6, bestFinish: 'Group Stage',
    bio: "IR Iran bring a resolute defensive setup and a striker in Mehdi Taremi who causes problems for any defence in the world. Team Melli carry the hopes of 85 million Iranians and arrive in North America with serious knockout ambitions.",
  },
  {
    id: 'nzl', name: 'New Zealand', code: 'NZL', flag: '🇳🇿', confederation: 'OFC', fifaRanking: 91, group: 'G',
    colors: { primary: '#000000', secondary: '#FFFFFF' }, coach: 'Darren Bazeley', captain: 'Winston Reid', starPlayer: 'Chris Wood',
    keyPlayers: ['Chris Wood', 'Winston Reid', 'Bill Tuilagi', 'Liberato Cacace'],
    worldCupAppearances: 3, bestFinish: 'Group Stage',
    bio: "The All Whites punch above their weight, riding the momentum of a passionate footballing revival. Chris Wood provides the aerial threat that keeps defenders honest. New Zealand are compact, resilient and impossible to write off.",
  },

  // ── GROUP H ──────────────────────────────────────────────────────────────
  {
    id: 'esp', name: 'Spain', code: 'ESP', flag: '🇪🇸', confederation: 'UEFA', fifaRanking: 6, group: 'H',
    colors: { primary: '#AA151B', secondary: '#F1BF00' }, coach: 'Luis de la Fuente', captain: 'Álvaro Morata', starPlayer: 'Lamine Yamal',
    keyPlayers: ['Pedri', 'Lamine Yamal', 'Álvaro Morata', 'Rodri'],
    worldCupAppearances: 16, bestFinish: 'Champions (2010)',
    bio: "La Roja are back. With Euro 2024 already in their cabinet, Spain arrive at the 2026 World Cup with a thrilling young side led by Lamine Yamal — arguably the most exciting teenager in world football history.",
  },
  {
    id: 'cpv', name: 'Cabo Verde', code: 'CPV', flag: '🇨🇻', confederation: 'CAF', fifaRanking: 81, group: 'H',
    colors: { primary: '#003893', secondary: '#CF2027' }, coach: 'Bubista', captain: 'Stopira', starPlayer: 'Ryan Mendes',
    keyPlayers: ['Ryan Mendes', 'Stopira', 'Lisandro', 'Garry Rodrigues'],
    worldCupAppearances: 1, bestFinish: 'Group Stage (2026)',
    bio: "Cabo Verde make their historic first World Cup appearance, the culmination of an incredible African qualification campaign. The Blue Sharks are organised and dangerous on the counter-attack, with Ryan Mendes providing the creative spark.",
  },
  {
    id: 'ksa', name: 'Saudi Arabia', code: 'KSA', flag: '🇸🇦', confederation: 'AFC', fifaRanking: 54, group: 'H',
    colors: { primary: '#006C35', secondary: '#FFFFFF' }, coach: 'Hervé Renard', captain: 'Mohammed Al-Owais', starPlayer: 'Salem Al-Dawsari',
    keyPlayers: ['Salem Al-Dawsari', 'Mohammed Al-Owais', 'Saud Abdulhamid', 'Ali Al-Bulaihi'],
    worldCupAppearances: 6, bestFinish: 'Round of 16 (1994)',
    bio: "Saudi Arabia will never be forgotten for beating Argentina in Qatar. Renard's high-pressing, high-line approach shocked the world and this team knows they can beat anyone. The Green Falcons believe they can reach the knockout rounds again.",
  },
  {
    id: 'uru', name: 'Uruguay', code: 'URU', flag: '🇺🇾', confederation: 'CONMEBOL', fifaRanking: 15, group: 'H',
    colors: { primary: '#75AADB', secondary: '#FFFFFF' }, coach: 'Marcelo Bielsa', captain: 'Diego Godín', starPlayer: 'Federico Valverde',
    keyPlayers: ['Federico Valverde', 'Darwin Núñez', 'Rodrigo Bentancur', 'José María Giménez'],
    worldCupAppearances: 14, bestFinish: 'Champions (1930, 1950)',
    bio: "Two-time world champions with a proud warrior tradition, Uruguay under Bielsa play intense, relentless football. Darwin Núñez provides explosive power up front while Federico Valverde is one of the world's most complete midfielders.",
  },

  // ── GROUP I ──────────────────────────────────────────────────────────────
  {
    id: 'fra', name: 'France', code: 'FRA', flag: '🇫🇷', confederation: 'UEFA', fifaRanking: 2, group: 'I',
    colors: { primary: '#002395', secondary: '#ED2939' }, coach: 'Didier Deschamps', captain: 'Kylian Mbappé', starPlayer: 'Kylian Mbappé',
    keyPlayers: ['Kylian Mbappé', 'Antoine Griezmann', 'Aurélien Tchouaméni', 'Ousmane Dembélé'],
    worldCupAppearances: 16, bestFinish: 'Champions (1998, 2018)',
    bio: "Les Bleus are perennial favourites with the most frightening depth in world football. Mbappé carries the weight of expectation as captain while Deschamps deploys a squad capable of winning from any formation on the pitch.",
  },
  {
    id: 'sen', name: 'Senegal', code: 'SEN', flag: '🇸🇳', confederation: 'CAF', fifaRanking: 19, group: 'I',
    colors: { primary: '#00853F', secondary: '#FDEF42' }, coach: 'Aliou Cissé', captain: 'Sadio Mané', starPlayer: 'Sadio Mané',
    keyPlayers: ['Sadio Mané', 'Édouard Mendy', 'Kalidou Koulibaly', 'Pape Matar Sarr'],
    worldCupAppearances: 4, bestFinish: 'Quarter-Final (2002)',
    bio: "African champions Senegal boast some of the continent's finest talents. Sadio Mané leads a team with genuine belief after claiming AFCON glory. Cissé has forged a united, physical, and tactically smart unit capable of a deep run.",
  },
  {
    id: 'irq', name: 'Iraq', code: 'IRQ', flag: '🇮🇶', confederation: 'AFC', fifaRanking: 63, group: 'I',
    colors: { primary: '#CF0001', secondary: '#007A3D' }, coach: 'Jesús Casas', captain: 'Ali Adnan', starPlayer: 'Aymen Hussein',
    keyPlayers: ['Aymen Hussein', 'Ali Adnan', 'Mohanad Ali', 'Hussein Ali'],
    worldCupAppearances: 2, bestFinish: 'Group Stage (1986)',
    bio: "Iraq make their long-awaited return to the World Cup, qualifying through the AFC play-offs in an emotional campaign. Under Spanish coach Jesús Casas, the Lions of Mesopotamia have become an organised and dangerous unit.",
  },
  {
    id: 'nor', name: 'Norway', code: 'NOR', flag: '🇳🇴', confederation: 'UEFA', fifaRanking: 35, group: 'I',
    colors: { primary: '#EF2B2D', secondary: '#003087' }, coach: 'Ståle Solbakken', captain: 'Martin Ødegaard', starPlayer: 'Erling Haaland',
    keyPlayers: ['Erling Haaland', 'Martin Ødegaard', 'Alexander Sørloth', 'Sander Berge'],
    worldCupAppearances: 4, bestFinish: 'Round of 16 (1994, 1998)',
    bio: "Norway finally qualify for the World Cup, powered by the most prolific striker on the planet. Erling Haaland carries extraordinary pressure and extraordinary talent in equal measure. Ødegaard is their creative conductor. The world is watching.",
  },

  // ── GROUP J ──────────────────────────────────────────────────────────────
  {
    id: 'arg', name: 'Argentina', code: 'ARG', flag: '🇦🇷', confederation: 'CONMEBOL', fifaRanking: 1, group: 'J',
    colors: { primary: '#74ACDF', secondary: '#FFFFFF' }, coach: 'Lionel Scaloni', captain: 'Lionel Messi', starPlayer: 'Lionel Messi',
    keyPlayers: ['Lionel Messi', 'Julián Álvarez', 'Enzo Fernández', 'Rodrigo De Paul'],
    worldCupAppearances: 18, bestFinish: 'Champions (1978, 1986, 2022)',
    bio: "The reigning world champions return hungry for back-to-back glory. Messi's final World Cup chapter may be the most dramatic yet. Scaloni has built a team of genuine believers around the greatest player of all time.",
  },
  {
    id: 'alg', name: 'Algeria', code: 'ALG', flag: '🇩🇿', confederation: 'CAF', fifaRanking: 53, group: 'J',
    colors: { primary: '#006233', secondary: '#FFFFFF' }, coach: 'Vladimir Petkovic', captain: 'Riyad Mahrez', starPlayer: 'Riyad Mahrez',
    keyPlayers: ['Riyad Mahrez', 'Islam Slimani', 'Youcef Atal', 'Sofiane Feghouli'],
    worldCupAppearances: 4, bestFinish: 'Round of 16 (2014)',
    bio: "The Desert Foxes qualified with authority behind the dazzling Riyad Mahrez. Algeria's 2014 run to the last 16 showed what they can do, and this squad has comparable quality to push even deeper into the tournament. Expect goals.",
  },
  {
    id: 'aut', name: 'Austria', code: 'AUT', flag: '🇦🇹', confederation: 'UEFA', fifaRanking: 28, group: 'J',
    colors: { primary: '#ED2939', secondary: '#FFFFFF' }, coach: 'Ralf Rangnick', captain: 'David Alaba', starPlayer: 'Marcel Sabitzer',
    keyPlayers: ['David Alaba', 'Marcel Sabitzer', 'Marko Arnautovic', 'Christoph Baumgartner'],
    worldCupAppearances: 7, bestFinish: 'Third Place (1954)',
    bio: "Under Rangnick, Austria have emerged from the shadows with a high-energy pressing style that has impressed across Europe. David Alaba provides elite defensive leadership while Sabitzer's relentless box-to-box energy drives their best football.",
  },
  {
    id: 'jor', name: 'Jordan', code: 'JOR', flag: '🇯🇴', confederation: 'AFC', fifaRanking: 74, group: 'J',
    colors: { primary: '#007A3D', secondary: '#CE1126' }, coach: 'Hussein Ammouta', captain: 'Baha Faisal', starPlayer: 'Musa Al-Taamari',
    keyPlayers: ['Musa Al-Taamari', 'Baha Faisal', 'Yazan Al-Naimat', 'Ahmad Samir'],
    worldCupAppearances: 1, bestFinish: 'Group Stage (2026)',
    bio: "Jordan make their first World Cup appearance after a thrilling AFC qualification campaign. The Nashama — meaning brave ones — arrive riding the wave of their 2023 Asian Cup final run, with nothing to fear and everything to gain.",
  },

  // ── GROUP K ──────────────────────────────────────────────────────────────
  {
    id: 'por', name: 'Portugal', code: 'POR', flag: '🇵🇹', confederation: 'UEFA', fifaRanking: 6, group: 'K',
    colors: { primary: '#006600', secondary: '#FF0000' }, coach: 'Roberto Martínez', captain: 'Cristiano Ronaldo', starPlayer: 'Bruno Fernandes',
    keyPlayers: ['Cristiano Ronaldo', 'Bruno Fernandes', 'Rafael Leão', 'Rúben Dias'],
    worldCupAppearances: 9, bestFinish: 'Third Place (1966)',
    bio: "At 41, Ronaldo is still here, still scoring, still the focal point of debate. But Portugal are more than one man — Bruno Fernandes, Leão, and Vitinha make them a complete team with the depth and quality to go all the way.",
  },
  {
    id: 'cod', name: 'Congo DR', code: 'COD', flag: '🇨🇩', confederation: 'CAF', fifaRanking: 62, group: 'K',
    colors: { primary: '#007FFF', secondary: '#F7D900' }, coach: 'Sébastien Desabre', captain: 'Yannick Bolasie', starPlayer: 'Cédric Bakambu',
    keyPlayers: ['Cédric Bakambu', 'Yannick Bolasie', 'Chancel Mbemba', 'Théo Bongonda'],
    worldCupAppearances: 2, bestFinish: 'Group Stage (2002)',
    bio: "Congo DR qualify for their first World Cup in over two decades, representing one of Africa's most passionate football nations. With Bakambu's pace and Bolasie's trickery, the Leopards are a team that can spring a genuine surprise.",
  },
  {
    id: 'uzb', name: 'Uzbekistan', code: 'UZB', flag: '🇺🇿', confederation: 'AFC', fifaRanking: 64, group: 'K',
    colors: { primary: '#1EB53A', secondary: '#FFFFFF' }, coach: 'Srecko Katanec', captain: 'Eldor Shomurodov', starPlayer: 'Eldor Shomurodov',
    keyPlayers: ['Eldor Shomurodov', 'Jaloliddin Masharipov', 'Otabek Shukurov', 'Akbar Toshniyozov'],
    worldCupAppearances: 1, bestFinish: 'Group Stage (2026)',
    bio: "Uzbekistan make their historic first World Cup appearance after a decade of development under Katanec. Eldor Shomurodov brings Serie A experience while the team plays a disciplined, counter-attacking style that makes them dangerous opponents.",
  },
  {
    id: 'col', name: 'Colombia', code: 'COL', flag: '🇨🇴', confederation: 'CONMEBOL', fifaRanking: 11, group: 'K',
    colors: { primary: '#FCD116', secondary: '#003087' }, coach: 'Néstor Lorenzo', captain: 'James Rodríguez', starPlayer: 'Luis Díaz',
    keyPlayers: ['James Rodríguez', 'Luis Díaz', 'Richard Ríos', 'Dávinson Sánchez'],
    worldCupAppearances: 7, bestFinish: 'Quarter-Final (2014)',
    bio: "Colombia have rediscovered their mojo under Lorenzo. The Copa América 2024 campaign reminded the world why this team is so dangerous. With Luis Díaz's electric pace and James Rodríguez's artistry, they're a genuine dark horse.",
  },

  // ── GROUP L ──────────────────────────────────────────────────────────────
  {
    id: 'eng', name: 'England', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', confederation: 'UEFA', fifaRanking: 4, group: 'L',
    colors: { primary: '#FFFFFF', secondary: '#CE1124' }, coach: 'Thomas Tuchel', captain: 'Harry Kane', starPlayer: 'Jude Bellingham',
    keyPlayers: ['Jude Bellingham', 'Harry Kane', 'Phil Foden', 'Bukayo Saka'],
    worldCupAppearances: 16, bestFinish: 'Champions (1966)',
    bio: "Football's coming home — or so England's hopefuls believe every four years. Under Tuchel, the Three Lions have genuine tactical quality to match their talent. Bellingham is a generational midfielder at the peak of his powers.",
  },
  {
    id: 'cro', name: 'Croatia', code: 'CRO', flag: '🇭🇷', confederation: 'UEFA', fifaRanking: 9, group: 'L',
    colors: { primary: '#FF0000', secondary: '#FFFFFF' }, coach: 'Zlatko Dalić', captain: 'Luka Modrić', starPlayer: 'Luka Modrić',
    keyPlayers: ['Luka Modrić', 'Ivan Perišić', 'Joško Gvardiol', 'Mateo Kovačić'],
    worldCupAppearances: 7, bestFinish: 'Runner-Up (2018)',
    bio: "Croatia continue to defy every expectation. Luka Modrić — still the heartbeat of this team — will lead them at what may be his final tournament. Dalić has built a resilient machine that excels at grinding through knockout rounds.",
  },
  {
    id: 'gha', name: 'Ghana', code: 'GHA', flag: '🇬🇭', confederation: 'CAF', fifaRanking: 60, group: 'L',
    colors: { primary: '#000000', secondary: '#FCD116' }, coach: 'Otto Addo', captain: 'André Ayew', starPlayer: 'Jordan Ayew',
    keyPlayers: ['Jordan Ayew', 'Thomas Partey', 'André Ayew', 'Mohammed Salisu'],
    worldCupAppearances: 4, bestFinish: 'Quarter-Final (2010)',
    bio: "Ghana came agonisingly close to an African World Cup semi-final in 2010, denied only by Suárez's handball. The Black Stars — built around Partey's experience and young talent — want to finish that story. They are Africa's dark horse.",
  },
  {
    id: 'pan', name: 'Panama', code: 'PAN', flag: '🇵🇦', confederation: 'CONCACAF', fifaRanking: 49, group: 'L',
    colors: { primary: '#FFFFFF', secondary: '#DA121A' }, coach: 'Thomas Christiansen', captain: 'Anibal Godoy', starPlayer: 'Adalberto Carrasquilla',
    keyPlayers: ['Adalberto Carrasquilla', 'Rolando Blackburn', 'Anibal Godoy', 'Frederico Pinto'],
    worldCupAppearances: 2, bestFinish: 'Group Stage',
    bio: "Panama continue to cement CONCACAF football's rise. Organized, physical, and hard to break down, they proved in 2018 they belong at this level. Carrasquilla's creativity provides their most dangerous attacking moments.",
  },
];

const TEAM_MAP: Record<string, Team> = Object.fromEntries(TEAMS.map(t => [t.id, t]));
const S = (id: string) => STADIUMS.find(s => s.id === id)!;

// ─── MATCHES ─────────────────────────────────────────────────────────────────
// Official FIFA World Cup 2026 fixture schedule
// Matchday 1 fixtures are confirmed official. Matchday 2 & 3 dates are estimated.

function match(
  id: string, n: number, stage: string, group: string | undefined,
  homeId: string | null, awayId: string | null,
  date: string, stadiumId: string, status = 'scheduled',
): MatchWithStadium {
  return {
    id, matchNumber: n, stage: stage as never, group,
    homeTeam: homeId ? TEAM_MAP[homeId] : null,
    awayTeam: awayId ? TEAM_MAP[awayId] : null,
    date, stadiumId, status: status as never,
    stadium: S(stadiumId),
  };
}

export const MATCHES: MatchWithStadium[] = [
  // ── MATCHDAY 1 (Official FIFA fixtures) ───────────────────────────────────

  // Group A — June 11
  match('m001',  1, 'Group Stage','A','mex',  'rsa',  '2026-06-11T19:00:00-06:00','azteca'),    // OPENING MATCH
  match('m002',  2, 'Group Stage','A','kor',  'cze',  '2026-06-11T15:00:00-06:00','akron'),

  // Group B — June 12–13
  match('m003',  3, 'Group Stage','B','can',  'bih',  '2026-06-12T20:00:00-04:00','bmo'),
  match('m004',  4, 'Group Stage','B','qat',  'sui',  '2026-06-13T16:00:00-07:00','levis'),

  // Group C — June 13
  match('m005',  5, 'Group Stage','C','hai',  'sco',  '2026-06-13T16:00:00-04:00','gillette'),
  match('m006',  6, 'Group Stage','C','bra',  'mar',  '2026-06-13T20:00:00-04:00','metlife'),

  // Group D — June 12–13
  match('m007',  7, 'Group Stage','D','usa',  'par',  '2026-06-12T16:00:00-07:00','sofi'),
  match('m008',  8, 'Group Stage','D','aus',  'tur',  '2026-06-13T16:00:00-07:00','bc'),

  // Group E — June 14
  match('m009',  9, 'Group Stage','E','civ',  'ecu',  '2026-06-14T16:00:00-04:00','lincoln'),
  match('m010', 10, 'Group Stage','E','ger',  'cuw',  '2026-06-14T20:00:00-05:00','nrg'),

  // Group F — June 14
  match('m011', 11, 'Group Stage','F','ned',  'jap',  '2026-06-14T20:00:00-05:00','att'),
  match('m012', 12, 'Group Stage','F','swe',  'tun',  '2026-06-14T16:00:00-06:00','bbva'),

  // Group G — June 15
  match('m013', 13, 'Group Stage','G','irn',  'nzl',  '2026-06-15T16:00:00-07:00','sofi'),
  match('m014', 14, 'Group Stage','G','bel',  'egy',  '2026-06-15T20:00:00-07:00','lumen'),

  // Group H — June 15
  match('m015', 15, 'Group Stage','H','ksa',  'uru',  '2026-06-15T16:00:00-04:00','hardrock'),
  match('m016', 16, 'Group Stage','H','esp',  'cpv',  '2026-06-15T20:00:00-04:00','mercedesbenz'),

  // Group I — June 16
  match('m017', 17, 'Group Stage','I','fra',  'sen',  '2026-06-16T20:00:00-04:00','metlife'),
  match('m018', 18, 'Group Stage','I','irq',  'nor',  '2026-06-16T16:00:00-04:00','gillette'),

  // Group J — June 16
  match('m019', 19, 'Group Stage','J','arg',  'alg',  '2026-06-16T20:00:00-05:00','arrowhead'),
  match('m020', 20, 'Group Stage','J','aut',  'jor',  '2026-06-16T16:00:00-07:00','levis'),

  // Group K — June 17
  match('m021', 21, 'Group Stage','K','por',  'cod',  '2026-06-17T20:00:00-05:00','nrg'),
  match('m022', 22, 'Group Stage','K','uzb',  'col',  '2026-06-17T16:00:00-06:00','azteca'),

  // Group L — June 17
  match('m023', 23, 'Group Stage','L','gha',  'pan',  '2026-06-17T16:00:00-04:00','bmo'),
  match('m024', 24, 'Group Stage','L','eng',  'cro',  '2026-06-17T20:00:00-05:00','att'),

  // ── MATCHDAY 2 (Estimated dates) ──────────────────────────────────────────

  // Group A — ~June 19
  match('m025', 25, 'Group Stage','A','mex',  'kor',  '2026-06-19T20:00:00-06:00','azteca'),
  match('m026', 26, 'Group Stage','A','rsa',  'cze',  '2026-06-19T16:00:00-06:00','akron'),

  // Group B — ~June 19–20
  match('m027', 27, 'Group Stage','B','can',  'qat',  '2026-06-19T20:00:00-04:00','bmo'),
  match('m028', 28, 'Group Stage','B','bih',  'sui',  '2026-06-20T16:00:00-07:00','levis'),

  // Group C — ~June 20
  match('m029', 29, 'Group Stage','C','bra',  'hai',  '2026-06-20T20:00:00-04:00','metlife'),
  match('m030', 30, 'Group Stage','C','mar',  'sco',  '2026-06-20T16:00:00-05:00','arrowhead'),

  // Group D — ~June 20
  match('m031', 31, 'Group Stage','D','usa',  'aus',  '2026-06-20T20:00:00-07:00','sofi'),
  match('m032', 32, 'Group Stage','D','par',  'tur',  '2026-06-20T16:00:00-05:00','att'),

  // Group E — ~June 21
  match('m033', 33, 'Group Stage','E','ger',  'civ',  '2026-06-21T20:00:00-05:00','nrg'),
  match('m034', 34, 'Group Stage','E','cuw',  'ecu',  '2026-06-21T16:00:00-04:00','lincoln'),

  // Group F — ~June 21
  match('m035', 35, 'Group Stage','F','ned',  'swe',  '2026-06-21T20:00:00-05:00','att'),
  match('m036', 36, 'Group Stage','F','jap',  'tun',  '2026-06-21T16:00:00-06:00','bbva'),

  // Group G — ~June 22
  match('m037', 37, 'Group Stage','G','bel',  'irn',  '2026-06-22T20:00:00-07:00','lumen'),
  match('m038', 38, 'Group Stage','G','egy',  'nzl',  '2026-06-22T16:00:00-04:00','gillette'),

  // Group H — ~June 22
  match('m039', 39, 'Group Stage','H','esp',  'ksa',  '2026-06-22T20:00:00-04:00','mercedesbenz'),
  match('m040', 40, 'Group Stage','H','cpv',  'uru',  '2026-06-22T16:00:00-04:00','hardrock'),

  // Group I — ~June 23
  match('m041', 41, 'Group Stage','I','fra',  'irq',  '2026-06-23T20:00:00-04:00','metlife'),
  match('m042', 42, 'Group Stage','I','sen',  'nor',  '2026-06-23T16:00:00-05:00','arrowhead'),

  // Group J — ~June 23
  match('m043', 43, 'Group Stage','J','arg',  'aut',  '2026-06-23T20:00:00-05:00','arrowhead'),
  match('m044', 44, 'Group Stage','J','alg',  'jor',  '2026-06-23T16:00:00-07:00','levis'),

  // Group K — ~June 24
  match('m045', 45, 'Group Stage','K','por',  'uzb',  '2026-06-24T20:00:00-05:00','nrg'),
  match('m046', 46, 'Group Stage','K','cod',  'col',  '2026-06-24T16:00:00-06:00','azteca'),

  // Group L — ~June 24
  match('m047', 47, 'Group Stage','L','eng',  'gha',  '2026-06-24T20:00:00-05:00','att'),
  match('m048', 48, 'Group Stage','L','cro',  'pan',  '2026-06-24T16:00:00-04:00','bmo'),

  // ── MATCHDAY 3 (Estimated — simultaneous within each group) ───────────────

  // Group A — ~June 26
  match('m049', 49, 'Group Stage','A','mex',  'cze',  '2026-06-26T20:00:00-06:00','azteca'),
  match('m050', 50, 'Group Stage','A','rsa',  'kor',  '2026-06-26T20:00:00-06:00','akron'),

  // Group B — ~June 26
  match('m051', 51, 'Group Stage','B','can',  'sui',  '2026-06-26T20:00:00-04:00','bmo'),
  match('m052', 52, 'Group Stage','B','bih',  'qat',  '2026-06-26T20:00:00-07:00','levis'),

  // Group C — ~June 27
  match('m053', 53, 'Group Stage','C','bra',  'sco',  '2026-06-27T20:00:00-04:00','metlife'),
  match('m054', 54, 'Group Stage','C','mar',  'hai',  '2026-06-27T20:00:00-05:00','arrowhead'),

  // Group D — ~June 27
  match('m055', 55, 'Group Stage','D','usa',  'tur',  '2026-06-27T20:00:00-07:00','sofi'),
  match('m056', 56, 'Group Stage','D','par',  'aus',  '2026-06-27T20:00:00-05:00','att'),

  // Group E — ~June 28
  match('m057', 57, 'Group Stage','E','ger',  'ecu',  '2026-06-28T20:00:00-05:00','nrg'),
  match('m058', 58, 'Group Stage','E','civ',  'cuw',  '2026-06-28T20:00:00-04:00','lincoln'),

  // Group F — ~June 28
  match('m059', 59, 'Group Stage','F','ned',  'tun',  '2026-06-28T20:00:00-05:00','att'),
  match('m060', 60, 'Group Stage','F','jap',  'swe',  '2026-06-28T20:00:00-06:00','bbva'),

  // Group G — ~June 29
  match('m061', 61, 'Group Stage','G','bel',  'nzl',  '2026-06-29T20:00:00-07:00','lumen'),
  match('m062', 62, 'Group Stage','G','egy',  'irn',  '2026-06-29T20:00:00-04:00','gillette'),

  // Group H — ~June 29
  match('m063', 63, 'Group Stage','H','esp',  'uru',  '2026-06-29T20:00:00-04:00','mercedesbenz'),
  match('m064', 64, 'Group Stage','H','cpv',  'ksa',  '2026-06-29T20:00:00-04:00','hardrock'),

  // Group I — ~June 30
  match('m065', 65, 'Group Stage','I','fra',  'nor',  '2026-06-30T20:00:00-04:00','metlife'),
  match('m066', 66, 'Group Stage','I','sen',  'irq',  '2026-06-30T20:00:00-05:00','arrowhead'),

  // Group J — ~June 30
  match('m067', 67, 'Group Stage','J','arg',  'jor',  '2026-06-30T20:00:00-05:00','arrowhead'),
  match('m068', 68, 'Group Stage','J','alg',  'aut',  '2026-06-30T20:00:00-07:00','levis'),

  // Group K — ~July 1
  match('m069', 69, 'Group Stage','K','por',  'col',  '2026-07-01T20:00:00-05:00','nrg'),
  match('m070', 70, 'Group Stage','K','cod',  'uzb',  '2026-07-01T20:00:00-06:00','azteca'),

  // Group L — ~July 1
  match('m071', 71, 'Group Stage','L','eng',  'pan',  '2026-07-01T20:00:00-05:00','att'),
  match('m072', 72, 'Group Stage','L','cro',  'gha',  '2026-07-01T20:00:00-04:00','bmo'),

  // ── ROUND OF 32 — TBD ──────────────────────────────────────────────────────
  match('m073',  73, 'Round of 32', undefined, null, null, '2026-07-04T16:00:00-04:00','metlife'),
  match('m074',  74, 'Round of 32', undefined, null, null, '2026-07-04T20:00:00-07:00','sofi'),
  match('m075',  75, 'Round of 32', undefined, null, null, '2026-07-05T16:00:00-05:00','arrowhead'),
  match('m076',  76, 'Round of 32', undefined, null, null, '2026-07-05T20:00:00-06:00','azteca'),
  match('m077',  77, 'Round of 32', undefined, null, null, '2026-07-06T16:00:00-04:00','gillette'),
  match('m078',  78, 'Round of 32', undefined, null, null, '2026-07-06T20:00:00-07:00','lumen'),
  match('m079',  79, 'Round of 32', undefined, null, null, '2026-07-07T16:00:00-05:00','nrg'),
  match('m080',  80, 'Round of 32', undefined, null, null, '2026-07-07T20:00:00-04:00','lincoln'),
  match('m081',  81, 'Round of 32', undefined, null, null, '2026-07-08T16:00:00-07:00','levis'),
  match('m082',  82, 'Round of 32', undefined, null, null, '2026-07-08T20:00:00-05:00','att'),
  match('m083',  83, 'Round of 32', undefined, null, null, '2026-07-09T16:00:00-04:00','hardrock'),
  match('m084',  84, 'Round of 32', undefined, null, null, '2026-07-09T20:00:00-04:00','mercedesbenz'),
  match('m085',  85, 'Round of 32', undefined, null, null, '2026-07-10T16:00:00-07:00','bc'),
  match('m086',  86, 'Round of 32', undefined, null, null, '2026-07-10T20:00:00-04:00','bmo'),
  match('m087',  87, 'Round of 32', undefined, null, null, '2026-07-11T16:00:00-05:00','bbva'),
  match('m088',  88, 'Round of 32', undefined, null, null, '2026-07-11T20:00:00-04:00','metlife'),

  // ── ROUND OF 16 — TBD ──────────────────────────────────────────────────────
  match('m089',  89, 'Round of 16', undefined, null, null, '2026-07-13T16:00:00-07:00','sofi'),
  match('m090',  90, 'Round of 16', undefined, null, null, '2026-07-13T20:00:00-05:00','arrowhead'),
  match('m091',  91, 'Round of 16', undefined, null, null, '2026-07-14T16:00:00-04:00','gillette'),
  match('m092',  92, 'Round of 16', undefined, null, null, '2026-07-14T20:00:00-06:00','azteca'),
  match('m093',  93, 'Round of 16', undefined, null, null, '2026-07-15T16:00:00-05:00','nrg'),
  match('m094',  94, 'Round of 16', undefined, null, null, '2026-07-15T20:00:00-04:00','metlife'),
  match('m095',  95, 'Round of 16', undefined, null, null, '2026-07-16T16:00:00-07:00','levis'),
  match('m096',  96, 'Round of 16', undefined, null, null, '2026-07-16T20:00:00-05:00','att'),

  // ── QUARTER-FINALS — TBD ───────────────────────────────────────────────────
  match('m097',  97, 'Quarter-Final', undefined, null, null, '2026-07-09T16:00:00-04:00','metlife'),
  match('m098',  98, 'Quarter-Final', undefined, null, null, '2026-07-09T20:00:00-07:00','sofi'),
  match('m099',  99, 'Quarter-Final', undefined, null, null, '2026-07-10T16:00:00-05:00','arrowhead'),
  match('m100', 100, 'Quarter-Final', undefined, null, null, '2026-07-10T20:00:00-06:00','azteca'),

  // ── SEMI-FINALS — TBD ──────────────────────────────────────────────────────
  match('m101', 101, 'Semi-Final', undefined, null, null, '2026-07-14T20:00:00-07:00','sofi'),
  match('m102', 102, 'Semi-Final', undefined, null, null, '2026-07-15T20:00:00-04:00','metlife'),

  // ── THIRD PLACE ────────────────────────────────────────────────────────────
  match('m103', 103, 'Third Place', undefined, null, null, '2026-07-18T16:00:00-06:00','azteca'),

  // ── FINAL — Sunday July 19, 2026 — MetLife Stadium, New York/New Jersey ────
  match('m104', 104, 'Final', undefined, null, null, '2026-07-19T17:00:00-04:00','metlife'),
];

// ─── PLAYER STATS ─────────────────────────────────────────────────────────────

export const PLAYER_STATS: PlayerStat[] = [
  { id:'ps001', name:'Lionel Messi',       teamId:'arg', teamCode:'ARG', teamFlag:'🇦🇷', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps002', name:'Cristiano Ronaldo',  teamId:'por', teamCode:'POR', teamFlag:'🇵🇹', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps003', name:'Kylian Mbappé',      teamId:'fra', teamCode:'FRA', teamFlag:'🇫🇷', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps004', name:'Vinícius Jr.',       teamId:'bra', teamCode:'BRA', teamFlag:'🇧🇷', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps005', name:'Harry Kane',         teamId:'eng', teamCode:'ENG', teamFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps006', name:'Jude Bellingham',    teamId:'eng', teamCode:'ENG', teamFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', position:'Midfielder', goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps007', name:'Son Heung-min',      teamId:'kor', teamCode:'KOR', teamFlag:'🇰🇷', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps008', name:'Christian Pulisic',  teamId:'usa', teamCode:'USA', teamFlag:'🇺🇸', position:'Midfielder', goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps009', name:'Mohamed Salah',      teamId:'egy', teamCode:'EGY', teamFlag:'🇪🇬', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps010', name:'Florian Wirtz',      teamId:'ger', teamCode:'GER', teamFlag:'🇩🇪', position:'Midfielder', goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps011', name:'Pedri',              teamId:'esp', teamCode:'ESP', teamFlag:'🇪🇸', position:'Midfielder', goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps012', name:'Lamine Yamal',       teamId:'esp', teamCode:'ESP', teamFlag:'🇪🇸', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps013', name:'Alphonso Davies',    teamId:'can', teamCode:'CAN', teamFlag:'🇨🇦', position:'Defender',   goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps014', name:'Federico Valverde',  teamId:'uru', teamCode:'URU', teamFlag:'🇺🇾', position:'Midfielder', goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps015', name:'Achraf Hakimi',      teamId:'mar', teamCode:'MAR', teamFlag:'🇲🇦', position:'Defender',   goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps016', name:'Arda Güler',         teamId:'tur', teamCode:'TUR', teamFlag:'🇹🇷', position:'Midfielder', goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps017', name:'Darwin Núñez',       teamId:'uru', teamCode:'URU', teamFlag:'🇺🇾', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps018', name:'Julián Álvarez',     teamId:'arg', teamCode:'ARG', teamFlag:'🇦🇷', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps019', name:'Erling Haaland',     teamId:'nor', teamCode:'NOR', teamFlag:'🇳🇴', position:'Forward',    goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
  { id:'ps020', name:'Moisés Caicedo',     teamId:'ecu', teamCode:'ECU', teamFlag:'🇪🇨', position:'Midfielder', goals:0, assists:0, yellowCards:0, redCards:0, appearances:0, minutesPlayed:0 },
];

// ─── PLAYERS ──────────────────────────────────────────────────────────────────

export const PLAYERS: Player[] = [
  // ARGENTINA — Group J
  { id:'p_arg_1', name:'Lionel Messi',       age:38, position:'CAM', shirtNumber:10, club:'Inter Miami CF',     teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€35M',  isCaptain:true, isStarPlayer:true },
  { id:'p_arg_2', name:'Julián Álvarez',     age:24, position:'ST',  shirtNumber:9,  club:'Atlético Madrid',   teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€90M'  },
  { id:'p_arg_3', name:'Enzo Fernández',     age:24, position:'CM',  shirtNumber:24, club:'Chelsea',           teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€85M'  },
  { id:'p_arg_4', name:'Rodrigo De Paul',    age:30, position:'CM',  shirtNumber:7,  club:'Atlético Madrid',   teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€45M'  },
  { id:'p_arg_5', name:'Cristian Romero',    age:26, position:'CB',  shirtNumber:13, club:'Tottenham Hotspur', teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€60M'  },
  { id:'p_arg_6', name:'Alexis Mac Allister',age:25, position:'CM',  shirtNumber:20, club:'Liverpool',         teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€70M'  },
  { id:'p_arg_7', name:'Nahuel Molina',      age:26, position:'RB',  shirtNumber:26, club:'Atlético Madrid',   teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€35M'  },
  { id:'p_arg_8', name:'Emiliano Martínez',  age:32, position:'GK',  shirtNumber:23, club:'Aston Villa',       teamId:'arg', goals:0, assists:0, appearances:0, marketValue:'€35M'  },
  // BRAZIL — Group C
  { id:'p_bra_1', name:'Vinícius Jr.',       age:24, position:'LW',  shirtNumber:10, club:'Real Madrid',       teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€180M', isStarPlayer:true },
  { id:'p_bra_2', name:'Rodrygo',            age:23, position:'RW',  shirtNumber:11, club:'Real Madrid',       teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€90M'  },
  { id:'p_bra_3', name:'Marquinhos',         age:30, position:'CB',  shirtNumber:5,  club:'PSG',               teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€40M',  isCaptain:true },
  { id:'p_bra_4', name:'Casemiro',           age:33, position:'CDM', shirtNumber:5,  club:'Manchester United', teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€25M'  },
  { id:'p_bra_5', name:'Bruno Guimarães',    age:26, position:'CM',  shirtNumber:16, club:'Newcastle United',  teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€80M'  },
  { id:'p_bra_6', name:'Alisson Becker',     age:31, position:'GK',  shirtNumber:1,  club:'Liverpool',         teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€40M'  },
  { id:'p_bra_7', name:'Endrick',            age:18, position:'ST',  shirtNumber:9,  club:'Real Madrid',       teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€45M'  },
  { id:'p_bra_8', name:'Éder Militão',       age:26, position:'CB',  shirtNumber:4,  club:'Real Madrid',       teamId:'bra', goals:0, assists:0, appearances:0, marketValue:'€70M'  },
  // FRANCE — Group I
  { id:'p_fra_1', name:'Kylian Mbappé',      age:27, position:'ST',  shirtNumber:10, club:'Real Madrid',       teamId:'fra', goals:0, assists:0, appearances:0, marketValue:'€180M', isCaptain:true, isStarPlayer:true },
  { id:'p_fra_2', name:'Antoine Griezmann',  age:35, position:'CAM', shirtNumber:7,  club:'Atlético Madrid',   teamId:'fra', goals:0, assists:0, appearances:0, marketValue:'€25M'  },
  { id:'p_fra_3', name:'Aurélien Tchouaméni',age:24, position:'CDM', shirtNumber:8,  club:'Real Madrid',       teamId:'fra', goals:0, assists:0, appearances:0, marketValue:'€80M'  },
  { id:'p_fra_4', name:'Eduardo Camavinga',  age:22, position:'CM',  shirtNumber:14, club:'Real Madrid',       teamId:'fra', goals:0, assists:0, appearances:0, marketValue:'€80M'  },
  { id:'p_fra_5', name:'Mike Maignan',       age:28, position:'GK',  shirtNumber:16, club:'AC Milan',          teamId:'fra', goals:0, assists:0, appearances:0, marketValue:'€45M'  },
  { id:'p_fra_6', name:'William Saliba',     age:23, position:'CB',  shirtNumber:17, club:'Arsenal',           teamId:'fra', goals:0, assists:0, appearances:0, marketValue:'€70M'  },
  { id:'p_fra_7', name:'Ousmane Dembélé',    age:28, position:'RW',  shirtNumber:11, club:'PSG',               teamId:'fra', goals:0, assists:0, appearances:0, marketValue:'€60M'  },
  // ENGLAND — Group L
  { id:'p_eng_1', name:'Harry Kane',         age:31, position:'ST',  shirtNumber:9,  club:'Bayern Munich',     teamId:'eng', goals:0, assists:0, appearances:0, marketValue:'€70M',  isCaptain:true },
  { id:'p_eng_2', name:'Jude Bellingham',    age:21, position:'CAM', shirtNumber:22, club:'Real Madrid',       teamId:'eng', goals:0, assists:0, appearances:0, marketValue:'€180M', isStarPlayer:true },
  { id:'p_eng_3', name:'Phil Foden',         age:25, position:'LW',  shirtNumber:47, club:'Manchester City',   teamId:'eng', goals:0, assists:0, appearances:0, marketValue:'€150M' },
  { id:'p_eng_4', name:'Bukayo Saka',        age:23, position:'RW',  shirtNumber:7,  club:'Arsenal',           teamId:'eng', goals:0, assists:0, appearances:0, marketValue:'€160M' },
  { id:'p_eng_5', name:'Declan Rice',        age:25, position:'CDM', shirtNumber:4,  club:'Arsenal',           teamId:'eng', goals:0, assists:0, appearances:0, marketValue:'€100M' },
  { id:'p_eng_6', name:'Jordan Pickford',    age:31, position:'GK',  shirtNumber:1,  club:'Everton',           teamId:'eng', goals:0, assists:0, appearances:0, marketValue:'€20M'  },
  { id:'p_eng_7', name:'John Stones',        age:31, position:'CB',  shirtNumber:5,  club:'Manchester City',   teamId:'eng', goals:0, assists:0, appearances:0, marketValue:'€35M'  },
  // SPAIN — Group H
  { id:'p_esp_1', name:'Lamine Yamal',       age:18, position:'RW',  shirtNumber:19, club:'FC Barcelona',      teamId:'esp', goals:0, assists:0, appearances:0, marketValue:'€180M', isStarPlayer:true },
  { id:'p_esp_2', name:'Pedri',              age:23, position:'CM',  shirtNumber:8,  club:'FC Barcelona',      teamId:'esp', goals:0, assists:0, appearances:0, marketValue:'€120M' },
  { id:'p_esp_3', name:'Álvaro Morata',      age:33, position:'ST',  shirtNumber:7,  club:'Atlético Madrid',   teamId:'esp', goals:0, assists:0, appearances:0, marketValue:'€25M',  isCaptain:true },
  { id:'p_esp_4', name:'Rodri',              age:28, position:'CDM', shirtNumber:16, club:'Manchester City',   teamId:'esp', goals:0, assists:0, appearances:0, marketValue:'€120M' },
  { id:'p_esp_5', name:'Gavi',               age:20, position:'CM',  shirtNumber:6,  club:'FC Barcelona',      teamId:'esp', goals:0, assists:0, appearances:0, marketValue:'€100M' },
  { id:'p_esp_6', name:'Unai Simón',         age:27, position:'GK',  shirtNumber:1,  club:'Athletic Club',     teamId:'esp', goals:0, assists:0, appearances:0, marketValue:'€30M'  },
  { id:'p_esp_7', name:'Nico Williams',      age:22, position:'LW',  shirtNumber:17, club:'Athletic Club',     teamId:'esp', goals:0, assists:0, appearances:0, marketValue:'€100M' },
  // GERMANY — Group E
  { id:'p_ger_1', name:'Florian Wirtz',      age:22, position:'CAM', shirtNumber:10, club:'Bayer Leverkusen',  teamId:'ger', goals:0, assists:0, appearances:0, marketValue:'€150M', isStarPlayer:true },
  { id:'p_ger_2', name:'Jamal Musiala',      age:22, position:'CAM', shirtNumber:14, club:'Bayern Munich',     teamId:'ger', goals:0, assists:0, appearances:0, marketValue:'€150M' },
  { id:'p_ger_3', name:'Kai Havertz',        age:25, position:'ST',  shirtNumber:7,  club:'Arsenal',           teamId:'ger', goals:0, assists:0, appearances:0, marketValue:'€75M'  },
  { id:'p_ger_4', name:'Manuel Neuer',       age:39, position:'GK',  shirtNumber:1,  club:'Bayern Munich',     teamId:'ger', goals:0, assists:0, appearances:0, marketValue:'€5M'   },
  { id:'p_ger_5', name:'Antonio Rüdiger',    age:32, position:'CB',  shirtNumber:16, club:'Real Madrid',       teamId:'ger', goals:0, assists:0, appearances:0, marketValue:'€30M'  },
  { id:'p_ger_6', name:'Ilkay Gündoğan',     age:35, position:'CM',  shirtNumber:21, club:'FC Barcelona',      teamId:'ger', goals:0, assists:0, appearances:0, marketValue:'€15M',  isCaptain:true },
  { id:'p_ger_7', name:'Joshua Kimmich',     age:30, position:'CDM', shirtNumber:6,  club:'Bayern Munich',     teamId:'ger', goals:0, assists:0, appearances:0, marketValue:'€60M'  },
  // PORTUGAL — Group K
  { id:'p_por_1', name:'Cristiano Ronaldo',  age:41, position:'ST',  shirtNumber:7,  club:'Al Nassr',          teamId:'por', goals:0, assists:0, appearances:0, marketValue:'€5M',   isCaptain:true },
  { id:'p_por_2', name:'Bruno Fernandes',    age:30, position:'CAM', shirtNumber:8,  club:'Manchester United', teamId:'por', goals:0, assists:0, appearances:0, marketValue:'€70M',  isStarPlayer:true },
  { id:'p_por_3', name:'Rafael Leão',        age:25, position:'LW',  shirtNumber:11, club:'AC Milan',          teamId:'por', goals:0, assists:0, appearances:0, marketValue:'€80M'  },
  { id:'p_por_4', name:'Rúben Dias',         age:27, position:'CB',  shirtNumber:4,  club:'Manchester City',   teamId:'por', goals:0, assists:0, appearances:0, marketValue:'€70M'  },
  { id:'p_por_5', name:'Vitinha',            age:25, position:'CM',  shirtNumber:17, club:'PSG',               teamId:'por', goals:0, assists:0, appearances:0, marketValue:'€65M'  },
  { id:'p_por_6', name:'Diogo Costa',        age:25, position:'GK',  shirtNumber:1,  club:'FC Porto',          teamId:'por', goals:0, assists:0, appearances:0, marketValue:'€35M'  },
  { id:'p_por_7', name:'João Félix',         age:25, position:'CF',  shirtNumber:11, club:'Atlético Madrid',   teamId:'por', goals:0, assists:0, appearances:0, marketValue:'€45M'  },
  // USA — Group D
  { id:'p_usa_1', name:'Christian Pulisic',  age:27, position:'CAM', shirtNumber:10, club:'AC Milan',          teamId:'usa', goals:0, assists:0, appearances:0, marketValue:'€35M',  isStarPlayer:true },
  { id:'p_usa_2', name:'Gio Reyna',          age:23, position:'CAM', shirtNumber:7,  club:'Borussia Dortmund', teamId:'usa', goals:0, assists:0, appearances:0, marketValue:'€30M'  },
  { id:'p_usa_3', name:'Tyler Adams',        age:25, position:'CDM', shirtNumber:4,  club:'Bournemouth',       teamId:'usa', goals:0, assists:0, appearances:0, marketValue:'€25M',  isCaptain:true },
  { id:'p_usa_4', name:'Ricardo Pepi',       age:22, position:'ST',  shirtNumber:9,  club:'PSV Eindhoven',     teamId:'usa', goals:0, assists:0, appearances:0, marketValue:'€20M'  },
  { id:'p_usa_5', name:'Matt Turner',        age:30, position:'GK',  shirtNumber:1,  club:'Nottingham Forest', teamId:'usa', goals:0, assists:0, appearances:0, marketValue:'€10M'  },
  { id:'p_usa_6', name:'Weston McKennie',    age:27, position:'CM',  shirtNumber:8,  club:'Juventus',          teamId:'usa', goals:0, assists:0, appearances:0, marketValue:'€22M'  },
  { id:'p_usa_7', name:'Sergiño Dest',       age:24, position:'RB',  shirtNumber:2,  club:'PSV Eindhoven',     teamId:'usa', goals:0, assists:0, appearances:0, marketValue:'€18M'  },
  // MEXICO — Group A
  { id:'p_mex_1', name:'Santiago Giménez',   age:24, position:'ST',  shirtNumber:9,  club:'Feyenoord',         teamId:'mex', goals:0, assists:0, appearances:0, marketValue:'€35M',  isStarPlayer:true },
  { id:'p_mex_2', name:'Hirving Lozano',     age:30, position:'RW',  shirtNumber:22, club:'PSV Eindhoven',     teamId:'mex', goals:0, assists:0, appearances:0, marketValue:'€20M',  isCaptain:true },
  { id:'p_mex_3', name:'Edson Álvarez',      age:27, position:'CDM', shirtNumber:18, club:'West Ham United',   teamId:'mex', goals:0, assists:0, appearances:0, marketValue:'€30M'  },
  { id:'p_mex_4', name:'Guillermo Ochoa',    age:40, position:'GK',  shirtNumber:1,  club:'Club América',      teamId:'mex', goals:0, assists:0, appearances:0, marketValue:'€1M'   },
  { id:'p_mex_5', name:'Raúl Jiménez',       age:33, position:'ST',  shirtNumber:9,  club:'Fulham',            teamId:'mex', goals:0, assists:0, appearances:0, marketValue:'€10M'  },
  // CANADA — Group B
  { id:'p_can_1', name:'Alphonso Davies',    age:24, position:'LB',  shirtNumber:19, club:'Bayern Munich',     teamId:'can', goals:0, assists:0, appearances:0, marketValue:'€70M',  isCaptain:true, isStarPlayer:true },
  { id:'p_can_2', name:'Jonathan David',     age:25, position:'ST',  shirtNumber:20, club:'Lille',             teamId:'can', goals:0, assists:0, appearances:0, marketValue:'€60M'  },
  { id:'p_can_3', name:'Cyle Larin',         age:29, position:'ST',  shirtNumber:9,  club:'Club Brugge',       teamId:'can', goals:0, assists:0, appearances:0, marketValue:'€12M'  },
  { id:'p_can_4', name:'Stephen Eustaquio',  age:27, position:'CM',  shirtNumber:7,  club:'FC Porto',          teamId:'can', goals:0, assists:0, appearances:0, marketValue:'€20M'  },
  { id:'p_can_5', name:'Milan Borjan',       age:36, position:'GK',  shirtNumber:18, club:'FK Crvena zvezda',  teamId:'can', goals:0, assists:0, appearances:0, marketValue:'€2M'   },
  // MOROCCO — Group C
  { id:'p_mar_1', name:'Achraf Hakimi',      age:27, position:'RB',  shirtNumber:2,  club:'PSG',               teamId:'mar', goals:0, assists:0, appearances:0, marketValue:'€70M',  isStarPlayer:true },
  { id:'p_mar_2', name:'Hakim Ziyech',       age:32, position:'RW',  shirtNumber:7,  club:'Galatasaray',       teamId:'mar', goals:0, assists:0, appearances:0, marketValue:'€10M'  },
  { id:'p_mar_3', name:'Youssef En-Nesyri',  age:27, position:'ST',  shirtNumber:19, club:'Fenerbahçe',        teamId:'mar', goals:0, assists:0, appearances:0, marketValue:'€25M'  },
  { id:'p_mar_4', name:'Sofyan Amrabat',     age:28, position:'CDM', shirtNumber:4,  club:'Fiorentina',        teamId:'mar', goals:0, assists:0, appearances:0, marketValue:'€20M'  },
  { id:'p_mar_5', name:'Romain Saïss',       age:35, position:'CB',  shirtNumber:5,  club:'Besiktas',          teamId:'mar', goals:0, assists:0, appearances:0, marketValue:'€3M',   isCaptain:true },
  { id:'p_mar_6', name:'Yassine Bono',       age:32, position:'GK',  shirtNumber:1,  club:'Al-Hilal',          teamId:'mar', goals:0, assists:0, appearances:0, marketValue:'€8M'   },
  // KOREA REPUBLIC — Group A
  { id:'p_kor_1', name:'Son Heung-min',      age:34, position:'LW',  shirtNumber:7,  club:'Tottenham Hotspur', teamId:'kor', goals:0, assists:0, appearances:0, marketValue:'€25M',  isCaptain:true, isStarPlayer:true },
  { id:'p_kor_2', name:'Lee Kang-in',        age:24, position:'CAM', shirtNumber:10, club:'PSG',               teamId:'kor', goals:0, assists:0, appearances:0, marketValue:'€40M'  },
  { id:'p_kor_3', name:'Hwang Hee-chan',      age:28, position:'ST',  shirtNumber:11, club:'Wolverhampton',     teamId:'kor', goals:0, assists:0, appearances:0, marketValue:'€20M'  },
  { id:'p_kor_4', name:'Kim Min-jae',        age:28, position:'CB',  shirtNumber:3,  club:'Bayern Munich',     teamId:'kor', goals:0, assists:0, appearances:0, marketValue:'€50M'  },
  // NETHERLANDS — Group F
  { id:'p_ned_1', name:'Virgil van Dijk',    age:33, position:'CB',  shirtNumber:4,  club:'Liverpool',         teamId:'ned', goals:0, assists:0, appearances:0, marketValue:'€30M',  isCaptain:true },
  { id:'p_ned_2', name:'Cody Gakpo',         age:25, position:'LW',  shirtNumber:11, club:'Liverpool',         teamId:'ned', goals:0, assists:0, appearances:0, marketValue:'€70M',  isStarPlayer:true },
  { id:'p_ned_3', name:'Frenkie de Jong',    age:28, position:'CM',  shirtNumber:21, club:'FC Barcelona',      teamId:'ned', goals:0, assists:0, appearances:0, marketValue:'€60M'  },
  { id:'p_ned_4', name:'Memphis Depay',      age:30, position:'ST',  shirtNumber:10, club:'Atlético Madrid',   teamId:'ned', goals:0, assists:0, appearances:0, marketValue:'€20M'  },
  { id:'p_ned_5', name:'Denzel Dumfries',    age:28, position:'RB',  shirtNumber:22, club:'Inter Milan',       teamId:'ned', goals:0, assists:0, appearances:0, marketValue:'€35M'  },
  // URUGUAY — Group H
  { id:'p_uru_1', name:'Federico Valverde',  age:26, position:'CM',  shirtNumber:8,  club:'Real Madrid',       teamId:'uru', goals:0, assists:0, appearances:0, marketValue:'€100M', isStarPlayer:true },
  { id:'p_uru_2', name:'Darwin Núñez',       age:25, position:'ST',  shirtNumber:11, club:'Liverpool',         teamId:'uru', goals:0, assists:0, appearances:0, marketValue:'€75M'  },
  { id:'p_uru_3', name:'Diego Godín',        age:38, position:'CB',  shirtNumber:3,  club:'Nacional',          teamId:'uru', goals:0, assists:0, appearances:0, marketValue:'€1M',   isCaptain:true },
  { id:'p_uru_4', name:'Rodrigo Bentancur',  age:27, position:'CM',  shirtNumber:6,  club:'Tottenham Hotspur', teamId:'uru', goals:0, assists:0, appearances:0, marketValue:'€40M'  },
];

// ─── TEAM STATS ───────────────────────────────────────────────────────────────

export const TEAM_STATS: TeamStat[] = TEAMS.map(t => ({
  teamId: t.id, teamCode: t.code, teamName: t.name, teamFlag: t.flag,
  group: t.group, played:0, wins:0, draws:0, losses:0, goalsFor:0, goalsAgainst:0, points:0,
}));

// ─── NEWS ─────────────────────────────────────────────────────────────────────

export const NEWS: NewsItem[] = [
  {
    id:'n001', title:'FIFA Announces Record 104 Matches Across Three Nations',
    excerpt:"The 2026 FIFA World Cup features an expanded 48-team format with 104 matches spread across 16 stadiums in the USA, Canada, and Mexico — the most ambitious tournament in football history.",
    category:'Tournament', source:'FIFA Official', sourceUrl:'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026',
    publishedAt:'2026-05-15T10:00:00Z', featured:true, tags:['World Cup 2026','FIFA','Format'], readTime:4,
    imageUrl:'https://picsum.photos/seed/wc26-n001/800/450',
  },
  {
    id:'n002', title:'Argentina Face Algeria, Austria and Jordan in Group J',
    excerpt:"The reigning world champions begin their title defense in Group J, where they face Algeria, Austria and Jordan. Lionel Messi opens the campaign for Argentina on June 16 in Kansas City.",
    category:'Match Preview', source:'ESPN FC', sourceUrl:'https://www.espn.com/soccer/story/_/id/worldcup2026/argentina-group-j-preview',
    publishedAt:'2026-05-20T09:00:00Z', featured:true, tags:['Argentina','Messi','Group J','Algeria','Austria','Jordan'], readTime:5,
    imageUrl:'https://picsum.photos/seed/wc26-n002/800/450',
  },
  {
    id:'n003', title:'MetLife Stadium Set to Host the Final on July 19',
    excerpt:"New Jersey's MetLife Stadium — the largest venue in the competition at 82,500 capacity — will host the World Cup Final on Sunday July 19, cementing the New York area as the tournament's crown jewel.",
    category:'Tournament', source:'World Cup HQ', sourceUrl:undefined,
    publishedAt:'2026-05-18T14:00:00Z', featured:false, tags:['MetLife','Final','New York','July 19'], readTime:3,
    imageUrl:'https://picsum.photos/seed/wc26-n003/800/450',
  },
  {
    id:'n004', title:"France Eye Back-to-Back Titles With Mbappé at the Helm",
    excerpt:"Les Bleus head into Group I as pre-tournament favourites. Kylian Mbappé, now captain, leads France against Senegal, Iraq, and Norway — a path that looks manageable for the world's deepest squad.",
    category:'Team News', source:'The Guardian', sourceUrl:'https://www.theguardian.com/football/2026/may/22/france-world-cup-preview-mbappe',
    publishedAt:'2026-05-22T11:30:00Z', featured:false, tags:['France','Mbappé','Group I','Senegal'], readTime:6,
    imageUrl:'https://picsum.photos/seed/wc26-n004/800/450',
  },
  {
    id:'n005', title:"USA Soccer on Home Soil: The Nation's Biggest Football Moment",
    excerpt:"With Pochettino at the helm and a golden generation headlined by Pulisic, Reyna, and Adams, the USMNT enters Group D — facing Paraguay, Australia, and Türkiye — with real belief they can go deep.",
    category:'Team News', source:'The Athletic', sourceUrl:'https://theathletic.com/worldcup2026/usmnt-home-hopes',
    publishedAt:'2026-05-24T08:00:00Z', featured:true, tags:['USA','USMNT','Group D','Pulisic','Host Nation'], readTime:7,
    imageUrl:'https://picsum.photos/seed/wc26-n005/800/450',
  },
  {
    id:'n006', title:"Estadio Azteca: Three World Cups, One Legendary Ground",
    excerpt:"Mexico City's iconic Estadio Azteca becomes the first venue to host matches at three different World Cups — 1970, 1986, and 2026. Mexico open the tournament against South Africa under its legendary floodlights.",
    category:'History', source:'BBC Sport', sourceUrl:'https://www.bbc.com/sport/football/world-cup/azteca-three-world-cups',
    publishedAt:'2026-05-21T16:00:00Z', featured:false, tags:['Azteca','Mexico City','History','Opening Match'], readTime:5,
    imageUrl:'https://picsum.photos/seed/wc26-n006/800/450',
  },
  {
    id:'n007', title:"Brazil's New-Look Squad Ready to End 24-Year Drought",
    excerpt:"In Group C alongside Morocco, Haiti and Scotland, Brazil face a winnable route through the group stage. Dorival Júnior's side — powered by Vinícius Jr. and Endrick — arrive as CONMEBOL's strongest hope.",
    category:'Team News', source:'ESPN FC', sourceUrl:'https://www.espn.com/soccer/story/_/id/worldcup2026/brazil-2026-preview',
    publishedAt:'2026-05-23T12:00:00Z', featured:false, tags:['Brazil','Vinícius','Group C','Morocco'], readTime:5,
    imageUrl:'https://picsum.photos/seed/wc26-n007/800/450',
  },
  {
    id:'n008', title:"England vs Croatia: Group L's Blockbuster Rematch",
    excerpt:"England and Croatia meet again in Group L — a rematch of the 2018 semi-final. With Ghana and Panama also in the group, the Three Lions will be expected to top it, but Modrić's Croatia never makes anything easy.",
    category:'Analysis', source:'The Guardian', sourceUrl:'https://www.theguardian.com/football/2026/may/25/england-croatia-group-l-analysis',
    publishedAt:'2026-05-25T10:00:00Z', featured:false, tags:['England','Croatia','Group L','Analysis','Bellingham'], readTime:8,
    imageUrl:'https://picsum.photos/seed/wc26-n008/800/450',
  },
  {
    id:'n009', title:"Morocco: Africa's Contender Looks to Top Their 2022 Miracle",
    excerpt:"After reaching the semi-finals in Qatar, the Atlas Lions return for Group C alongside Brazil, Haiti and Scotland. Under Regragui, Morocco have become a genuine contender who no team in the draw wants to face.",
    category:'Team News', source:'BBC Sport', sourceUrl:'https://www.bbc.com/sport/football/world-cup/morocco-2026-preview',
    publishedAt:'2026-05-19T14:00:00Z', featured:false, tags:['Morocco','Africa','Group C','Hakimi'], readTime:5,
    imageUrl:'https://picsum.photos/seed/wc26-n009/800/450',
  },
  {
    id:'n010', title:"Germany Rebuilt: Nagelsmann's Side Targets a Fifth Star",
    excerpt:"Germany enter Group E against Curaçao, Côte d'Ivoire and Ecuador. After the humiliation of 2018 and 2022, Florian Wirtz and Jamal Musiala spearhead a rebuilt Die Mannschaft desperate to reclaim football's biggest prize.",
    category:'Team News', source:'The Athletic', sourceUrl:'https://theathletic.com/worldcup2026/germany-rebuild-2026',
    publishedAt:'2026-05-26T09:00:00Z', featured:false, tags:['Germany','Group E','Wirtz','Musiala'], readTime:6,
    imageUrl:'https://picsum.photos/seed/wc26-n010/800/450',
  },
  {
    id:'n011', title:'Opening Match: Mexico vs South Africa at Estadio Azteca',
    excerpt:"The 2026 FIFA World Cup begins on June 11 at Estadio Azteca. Mexico, co-hosts and tournament favourites in Group A, face South Africa's Bafana Bafana in what promises to be an electric opening night in Mexico City.",
    category:'Tournament', source:'FIFA Official', sourceUrl:'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/opening-ceremony',
    publishedAt:'2026-05-27T11:00:00Z', featured:false, tags:['Opening Match','Mexico','South Africa','Group A','Azteca'], readTime:3,
    imageUrl:'https://picsum.photos/seed/wc26-n011/800/450',
  },
  {
    id:'n012', title:"Cristiano Ronaldo's Final Dance: Portugal's Veteran Chases History",
    excerpt:"At 41, Ronaldo's inclusion in the Portugal squad is still the most divisive debate in football. Portugal open Group K against Congo DR, Uzbekistan and Colombia. One more World Cup goal would put him in territory no player has ever reached.",
    category:'Analysis', source:'The Guardian', sourceUrl:'https://www.theguardian.com/football/2026/may/28/ronaldo-final-world-cup-portugal',
    publishedAt:'2026-05-28T07:00:00Z', featured:true, tags:['Ronaldo','Portugal','Group K','Records'], readTime:7,
    imageUrl:'https://picsum.photos/seed/wc26-n012/800/450',
  },
];
