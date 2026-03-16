'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

const GAME_FORMATS = [
  {
    title: 'Quick Fire Trivia',
    subtitle: 'Answer rapid-fire questions across pop culture, sports, science, and street knowledge. Fastest correct answers advance.',
    emoji: '🧠',
    badge: { label: 'Play Now', variant: 'live' as const },
    platforms: ['Web App', 'Instagram Stories'],
  },
  {
    title: 'Reflex Challenge',
    subtitle: 'Test your reaction time with pattern-matching and speed taps. Milliseconds separate the best from the rest.',
    emoji: '⚡',
    badge: { label: 'Play Now', variant: 'live' as const },
    platforms: ['Web App'],
  },
  {
    title: 'Puzzle Gauntlet',
    subtitle: 'Logic puzzles, number sequences, and spatial reasoning. Strategy over speed — but the clock is still ticking.',
    emoji: '🧩',
    badge: { label: 'Coming Soon', variant: 'coming_soon' as const },
    platforms: ['Web App'],
  },
  {
    title: 'Social Showdown',
    subtitle: 'Submit a video challenge on TikTok or IG. Community votes + judge panel decide who advances. Creativity wins.',
    emoji: '📱',
    badge: { label: 'Coming Soon', variant: 'coming_soon' as const },
    platforms: ['TikTok', 'Instagram', 'X'],
  },
  {
    title: 'Physical Challenge',
    subtitle: 'Film yourself completing a physical feat — endurance, skill, or style. Real-world athleticism, judged online.',
    emoji: '💪',
    badge: { label: 'Coming Soon', variant: 'coming_soon' as const },
    platforms: ['TikTok', 'Instagram'],
  },
  {
    title: 'Crew Battles',
    subtitle: 'Team-based rounds where your squad competes as a unit. Relay-style scoring — every member matters.',
    emoji: '👥',
    badge: { label: 'Teams Only', variant: 'team' as const },
    platforms: ['Web App'],
  },
];

export default function GamesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="mb-16">
        <h1 className="font-heading text-5xl md:text-7xl text-text-primary tracking-tight mb-4">
          THE GAMES
        </h1>
        <p className="text-text-secondary font-sans text-base md:text-lg max-w-2xl leading-relaxed">
          Different rounds. Different formats. One goal — qualify for the Street Games.
          Play on the web, compete through social media, or submit real-world challenges.
          Millions start online. Only the best finish on the street.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tournament">
            <Button variant="primary">View Tournament</Button>
          </Link>
          <Link href="/teams">
            <Button variant="outline">Build a Team</Button>
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-16 p-6 bg-background-surface border border-border rounded-sm">
        <h3 className="font-heading text-lg text-text-primary mb-4">HOW QUALIFYING WORKS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🌐</div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Step 1</p>
            <p className="text-sm text-text-secondary">Play online — web app or social media. Everyone starts here.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Step 2</p>
            <p className="text-sm text-text-secondary">Top scorers from each round advance through qualifying brackets.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔥</div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Step 3</p>
            <p className="text-sm text-text-secondary">Finalists fly out to compete live in the Street Games grand final.</p>
          </div>
        </div>
      </div>

      {/* Game Formats Grid */}
      <SectionHeading
        title="GAME FORMATS"
        subtitle="Each qualifying round uses a different format. Master them all, or dominate one — every path leads to the street."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {GAME_FORMATS.map((game) => (
          <Card
            key={game.title}
            title={game.title}
            subtitle={game.subtitle}
            imagePlaceholder={game.emoji}
            badge={game.badge}
          >
            <div className="mt-3 flex flex-wrap gap-1.5">
              {game.platforms.map((p) => (
                <span key={p} className="text-[10px] font-mono text-text-secondary bg-background-alt px-2 py-0.5 rounded-sm">
                  {p}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Social CTA */}
      <div className="text-center py-12 border-t border-border">
        <h3 className="font-heading text-2xl text-text-primary mb-3">PLAY ANYWHERE</h3>
        <p className="text-text-secondary text-sm max-w-lg mx-auto mb-6">
          Some rounds live on social media. Follow us to catch drop announcements and compete directly from your feed.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="default">@relledomi</Badge>
          <Badge variant="default">TikTok</Badge>
          <Badge variant="default">Instagram</Badge>
          <Badge variant="default">X / Twitter</Badge>
        </div>
      </div>
    </div>
  );
}
