'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const PLACEHOLDER_TEAMS = [
  { name: 'Nairobi Voltage', members: 5, rank: 1, wins: 12, emoji: '⚡' },
  { name: 'Block Runners', members: 4, rank: 2, wins: 10, emoji: '🏃' },
  { name: 'Cold Minds', members: 5, rank: 3, wins: 9, emoji: '🧊' },
  { name: 'Street Scholars', members: 3, rank: 4, wins: 7, emoji: '📚' },
  { name: 'The Outsiders', members: 4, rank: 5, wins: 6, emoji: '🌍' },
  { name: 'Pulse Crew', members: 5, rank: 6, wins: 5, emoji: '💓' },
];

const TEAM_GAMES = [
  {
    title: 'Relay Trivia',
    subtitle: 'Each team member answers in sequence. One wrong answer and the relay breaks — next team takes over.',
    emoji: '🔄',
    badge: { label: 'Team', variant: 'team' as const },
  },
  {
    title: 'Crew Battles',
    subtitle: 'Head-to-head rounds between team members. Best of 5 decides which crew advances. Substitutions allowed.',
    emoji: '⚔️',
    badge: { label: 'Team', variant: 'team' as const },
  },
  {
    title: 'Team Strategy',
    subtitle: 'Collaborative puzzle-solving under pressure. The whole team works together — communication is the weapon.',
    emoji: '🗺️',
    badge: { label: 'Coming Soon', variant: 'coming_soon' as const },
  },
  {
    title: 'Social Relay',
    subtitle: 'Each member posts a challenge video in sequence. The chain must complete within 24 hours. Crowd judges.',
    emoji: '📲',
    badge: { label: 'Coming Soon', variant: 'coming_soon' as const },
  },
];

export default function TeamsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="mb-16">
        <h1 className="font-heading text-5xl md:text-7xl text-text-primary tracking-tight mb-4">
          TEAMS
        </h1>
        <p className="text-text-secondary font-sans text-base md:text-lg max-w-2xl leading-relaxed">
          Build your crew. Some rounds are solo — but the team games are where legends are made.
          3–5 members per team. Every member matters.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="primary">Create a Team</Button>
          <Button variant="outline">Join a Team</Button>
        </div>
      </div>

      {/* Team Games */}
      <SectionHeading
        title="TEAM GAMES"
        subtitle="Supporting game formats designed for crews. These rounds are exclusive to registered teams."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
        {TEAM_GAMES.map((game) => (
          <Card
            key={game.title}
            title={game.title}
            subtitle={game.subtitle}
            imagePlaceholder={game.emoji}
            badge={game.badge}
          />
        ))}
      </div>

      {/* Leaderboard */}
      <SectionHeading title="TEAM LEADERBOARD" subtitle="Season 1 standings. Updated after each crew round." />

      <div className="mb-16 overflow-hidden border border-border rounded-sm">
        {/* Header */}
        <div className="grid grid-cols-[3rem_1fr_4rem_4rem] sm:grid-cols-[3rem_1fr_5rem_5rem_5rem] gap-4 px-4 py-2 bg-background-alt text-[10px] font-mono uppercase tracking-widest text-text-secondary border-b border-border">
          <span>Rank</span>
          <span>Team</span>
          <span className="hidden sm:block text-right">Members</span>
          <span className="text-right">Wins</span>
          <span className="text-right">Status</span>
        </div>

        {PLACEHOLDER_TEAMS.map((team) => (
          <div key={team.name} className="grid grid-cols-[3rem_1fr_4rem_4rem] sm:grid-cols-[3rem_1fr_5rem_5rem_5rem] gap-4 px-4 py-3 border-b border-border last:border-b-0 hover:bg-background-surface transition-colors items-center">
            <span className={`font-heading text-lg ${team.rank <= 3 ? 'text-primary' : 'text-text-secondary'}`}>
              {team.rank}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-lg">{team.emoji}</span>
              <span className="font-heading text-sm text-text-primary">{team.name}</span>
            </div>
            <span className="hidden sm:block text-right text-xs text-text-secondary font-mono">{team.members}</span>
            <span className="text-right text-xs text-text-primary font-mono">{team.wins}</span>
            <span className="text-right">
              <Badge variant={team.rank <= 3 ? 'live' : 'default'}>{team.rank <= 3 ? 'Top 3' : 'Active'}</Badge>
            </span>
          </div>
        ))}
      </div>

      {/* How teams work */}
      <div className="border-t border-border pt-12">
        <SectionHeading title="HOW TEAMS WORK" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background-surface border border-border rounded-sm p-5">
            <h3 className="font-heading text-sm text-accent-turquoise mb-2">CREATE OR JOIN</h3>
            <p className="text-xs text-text-secondary leading-relaxed">Start your own crew or request to join an existing team. 3–5 members per squad.</p>
          </div>
          <div className="bg-background-surface border border-border rounded-sm p-5">
            <h3 className="font-heading text-sm text-vox-blue mb-2">COMPETE TOGETHER</h3>
            <p className="text-xs text-text-secondary leading-relaxed">Team rounds run alongside solo rounds in qualifying. Your crew earns points as a unit.</p>
          </div>
          <div className="bg-background-surface border border-border rounded-sm p-5">
            <h3 className="font-heading text-sm text-primary mb-2">REACH THE STREET</h3>
            <p className="text-xs text-text-secondary leading-relaxed">Top teams qualify for the Street Games grand final. Travel together, compete together, win together.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
