import { create } from 'zustand';

export interface TournamentSeason {
  name: string;
  status: 'upcoming' | 'qualifying' | 'finals' | 'completed';
  qualifyingStart: string;
  finalsDate: string;
  prizePool: string;
  registeredCount: number;
  location: string;
}

export interface QualifyingRound {
  id: string;
  name: string;
  format: string;
  platform: string; // 'web' | 'instagram' | 'tiktok' | 'x'
  date: string;
  status: 'upcoming' | 'live' | 'completed';
  participantCount: number;
}

interface TournamentStore {
  currentSeason: TournamentSeason;
  qualifyingRounds: QualifyingRound[];
  isRegistered: boolean;
  register: () => void;
}

export const useTournament = create<TournamentStore>((set) => ({
  currentSeason: {
    name: 'Season 1 — Genesis',
    status: 'qualifying',
    qualifyingStart: '2026-04-01',
    finalsDate: '2026-06-15',
    prizePool: '$10,000',
    registeredCount: 2847,
    location: 'Nairobi, Kenya',
  },

  qualifyingRounds: [
    { id: 'r1', name: 'Round 1 — Quick Fire Trivia', format: 'Trivia', platform: 'web', date: '2026-04-01', status: 'completed', participantCount: 12430 },
    { id: 'r2', name: 'Round 2 — Reflex Challenge', format: 'Reaction', platform: 'web', date: '2026-04-08', status: 'live', participantCount: 6215 },
    { id: 'r3', name: 'Round 3 — Social Showdown', format: 'Social Video', platform: 'tiktok', date: '2026-04-15', status: 'upcoming', participantCount: 0 },
    { id: 'r4', name: 'Round 4 — Strategy Gauntlet', format: 'Puzzle', platform: 'web', date: '2026-04-22', status: 'upcoming', participantCount: 0 },
    { id: 'r5', name: 'Round 5 — Crew Battles', format: 'Team', platform: 'web', date: '2026-04-29', status: 'upcoming', participantCount: 0 },
  ],

  isRegistered: false,
  register: () => set({ isRegistered: true }),
}));
