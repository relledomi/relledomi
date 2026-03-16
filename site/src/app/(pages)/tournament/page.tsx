'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useTournament } from '@/stores/useTournament';

export default function TournamentPage() {
  const { currentSeason, qualifyingRounds, isRegistered, register } = useTournament();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="mb-16">
        <Badge variant="live" className="mb-4">{currentSeason.status === 'qualifying' ? 'Qualifying Now' : currentSeason.status}</Badge>
        <h1 className="font-heading text-5xl md:text-7xl text-text-primary tracking-tight mb-4">
          TOURNAMENT
        </h1>
        <p className="text-text-secondary font-sans text-base md:text-lg max-w-2xl leading-relaxed">
          {currentSeason.name}. Start online, millions of people competing, then finish the tournament on the street.
        </p>
      </div>

      {/* Season Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: 'Prize Pool', value: currentSeason.prizePool },
          { label: 'Registered', value: currentSeason.registeredCount.toLocaleString() },
          { label: 'Finals Location', value: currentSeason.location },
          { label: 'Finals Date', value: new Date(currentSeason.finalsDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
        ].map((stat) => (
          <div key={stat.label} className="bg-background-surface border border-border rounded-sm p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-1">{stat.label}</p>
            <p className="font-heading text-xl text-text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Pipeline Visual */}
      <SectionHeading title="HOW IT WORKS" subtitle="Three stages. One champion." />

      <div className="mb-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stage: '01', title: 'Online Rounds', desc: 'Millions compete from anywhere — web app, social media, video submissions. Different game formats each week thin the field.', color: 'text-accent-turquoise' },
            { stage: '02', title: 'Regional Finals', desc: 'Top qualifiers from each region face off in streamed elimination brackets. Pressure builds. The world watches.', color: 'text-vox-blue' },
            { stage: '03', title: 'Street Games Grand Final', desc: 'The last ones standing compete live, in person, on the street. Real crowds. Real stakes. One winner.', color: 'text-primary' },
          ].map((s) => (
            <div key={s.stage} className="bg-background-surface border border-border rounded-sm p-6 relative">
              <span className={`font-heading text-5xl ${s.color} opacity-20 absolute top-3 right-4`}>{s.stage}</span>
              <h3 className={`font-heading text-lg ${s.color} mb-2`}>{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        {/* connector line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[33%] right-[33%] h-px bg-border -translate-y-1/2 -z-10" />
      </div>

      {/* Registration */}
      <div className="mb-16 p-8 bg-background-surface border border-primary/30 rounded-sm text-center">
        <h3 className="font-heading text-2xl text-text-primary mb-2">ENTER THE ARENA</h3>
        <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
          Register for {currentSeason.name}. Free to enter. All you need is the will to compete.
        </p>
        {isRegistered ? (
          <div>
            <Badge variant="live">Registered</Badge>
            <p className="text-xs text-text-secondary mt-2">You&apos;re in. Watch for round announcements.</p>
          </div>
        ) : (
          <Button onClick={register}>Register Now</Button>
        )}
      </div>

      {/* Qualifying Schedule */}
      <SectionHeading title="QUALIFYING ROUNDS" subtitle="Each round uses a different game format. Play them all or pick your battles." />

      <div className="space-y-3 mb-16">
        {qualifyingRounds.map((round) => (
          <div key={round.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-background-surface border border-border rounded-sm">
            <div className="flex items-center gap-3">
              <Badge variant={round.status === 'live' ? 'live' : round.status === 'completed' ? 'default' : 'coming_soon'}>
                {round.status === 'live' ? 'Live' : round.status === 'completed' ? 'Done' : 'Upcoming'}
              </Badge>
              <div>
                <p className="font-heading text-sm text-text-primary">{round.name}</p>
                <p className="text-xs text-text-secondary font-mono">
                  {round.format} &middot; {round.platform} &middot; {new Date(round.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              </div>
            </div>
            <div className="text-right">
              {round.participantCount > 0 && (
                <p className="text-xs text-text-secondary font-mono">{round.participantCount.toLocaleString()} players</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Rules summary */}
      <div className="border-t border-border pt-12">
        <SectionHeading title="RULES" subtitle="Fair play. No exceptions." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-secondary">
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-primary">—</span> One account per person. Duplicates are disqualified.</li>
            <li className="flex gap-2"><span className="text-primary">—</span> Social media submissions must be public and tagged.</li>
            <li className="flex gap-2"><span className="text-primary">—</span> Judges&apos; decisions are final on video-based rounds.</li>
          </ul>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-primary">—</span> Teams must have 3–5 members for crew rounds.</li>
            <li className="flex gap-2"><span className="text-primary">—</span> Top qualifiers from each round carry points forward.</li>
            <li className="flex gap-2"><span className="text-primary">—</span> Grand final participants receive travel + accommodation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
