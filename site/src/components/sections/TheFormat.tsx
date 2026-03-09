"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerChildren from "@/components/ui/StaggerChildren";

const games = [
  { name: "LAST ONE STANDING", type: "ELIM", color: "var(--kanga)" },
  { name: "PRICE IS RIGHT: NBO", type: "BRAIN", color: "var(--turquoise)" },
  { name: "STACK OR CRACK", type: "SKILL", color: "var(--cream)" },
  { name: "TRIVIA GAUNTLET", type: "BRAIN", color: "var(--turquoise)" },
  { name: "THE HANDSHAKE", type: "SOCIAL", color: "var(--chrome-light)" },
  { name: "HOLD YOUR NERVE", type: "ENDURE", color: "var(--kanga)" },
];

const locations = [
  "UoN",
  "JKUAT",
  "Strathmore",
  "Kencom",
  "TRM",
  "Garden City",
];

export default function TheFormat() {
  return (
    <section
      id="the-format"
      style={{ padding: "var(--spacing-section) var(--spacing-side)" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <AnimateIn>
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-kanga uppercase mb-4">
            THE FORMAT
          </p>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,48px)] text-cream uppercase mb-3">
            MINI-GAMES ON NAIROBI STREETS.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16}>
          <p className="font-[family-name:var(--font-body)] text-lg font-light text-sub mb-12 max-w-[600px] leading-[1.7]">
            Show up. Compete. Win. Six game formats, rotating locations, filmed
            for your feed.
          </p>
        </AnimateIn>

        {/* Game cards — 3x2 grid with stagger */}
        <StaggerChildren
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {games.map((game) => (
            <div
              key={game.name}
              className="relative overflow-hidden rounded-lg border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{ borderLeftColor: game.color, borderLeftWidth: "3px" }}
            >
              <span
                className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.12em] uppercase mb-3 block"
                style={{ color: game.color }}
              >
                {game.type}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-lg text-cream uppercase">
                {game.name}
              </h3>
            </div>
          ))}
        </StaggerChildren>

        {/* Location tags */}
        <AnimateIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-3">
            {locations.map((loc) => (
              <span
                key={loc}
                className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] text-muted uppercase rounded-sm border border-border px-3 py-1.5 bg-elevated"
              >
                &bull; {loc}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
