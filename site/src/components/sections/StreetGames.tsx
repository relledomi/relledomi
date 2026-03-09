"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StreetGamesText from "@/components/graphics/StreetGamesText";
import StreetGamesBg from "@/components/graphics/StreetGamesBg";

export default function StreetGames() {
  return (
    <section
      id="street-games"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ padding: "var(--spacing-section) var(--spacing-side)" }}
    >
      {/* Animated warping grid background */}
      <StreetGamesBg />
      <div className="absolute inset-0 bg-bg/60" />

      {/* Animated text with fragment assembly + glitch */}
      <StreetGamesText />

      {/* Subtext */}
      <AnimateIn delay={0.6} className="relative z-10 text-center mt-6">
        <p className="font-[family-name:var(--font-body)] text-[clamp(16px,2vw,22px)] font-light text-sub">
          Coming to Nairobi streets
        </p>
      </AnimateIn>

      <AnimateIn delay={0.8} className="relative z-10 text-center mt-3">
        <p className="font-[family-name:var(--font-mono)] text-sm tracking-[0.12em] text-muted uppercase">
          Where will we show up first?
        </p>
      </AnimateIn>

      {/* Social CTA */}
      <AnimateIn delay={1.0} className="relative z-10 text-center mt-10">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] text-muted mb-3">
          FOLLOW TO FIND OUT
        </p>
        <div className="flex gap-6 justify-center">
          {["Instagram", "TikTok", "YouTube"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.08em] text-sub transition-colors duration-200 hover:text-kanga no-underline uppercase"
            >
              {platform}
            </a>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
