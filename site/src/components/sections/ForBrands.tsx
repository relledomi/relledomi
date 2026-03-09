"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerChildren from "@/components/ui/StaggerChildren";
import StatBlock from "@/components/ui/StatBlock";

const valueProps = [
  "Branded game segments with your name on them",
  "Logo placement seen by every viewer, every clip",
  "Product integration that feels organic, not forced",
  "Full content package — Reels, TikToks, YouTube, Stories",
  "Direct access to Gen Z audiences across East Africa",
];

const stats = [
  { value: "8+", label: "CONTENT PIECES PER EVENT" },
  { value: "100%", label: "ORGANIC REACH" },
  { value: "3", label: "PLATFORMS COVERED" },
  { value: "48hr", label: "TURNAROUND TIME" },
];

export default function ForBrands() {
  return (
    <section
      id="for-brands"
      style={{ padding: "var(--spacing-section) var(--spacing-side)" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <AnimateIn>
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-kanga uppercase mb-4">
            FOR BRANDS
          </p>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,48px)] text-cream uppercase mb-3">
            YOUR BRAND.
            <br />
            THEIR STREETS.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16}>
          <p className="font-[family-name:var(--font-body)] text-lg font-light text-sub mb-10 max-w-[560px] leading-[1.7]">
            Every Street Games event reaches hundreds in person and thousands
            online. Your brand gets woven into content people actually watch.
          </p>
        </AnimateIn>

        {/* Value props with stagger */}
        <StaggerChildren className="mb-12 flex flex-col gap-3" stagger={0.08}>
          {valueProps.map((prop) => (
            <div key={prop} className="flex items-center gap-3">
              <div className="h-[2px] w-4 bg-kanga flex-shrink-0" />
              <span className="font-[family-name:var(--font-body)] text-sm text-sub">
                {prop}
              </span>
            </div>
          ))}
        </StaggerChildren>

        {/* Stat blocks with count-up animation */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        {/* CTA */}
        <AnimateIn delay={0.3}>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm tracking-[0.08em] text-kanga transition-colors duration-200 hover:text-cream no-underline uppercase"
          >
            Work With Us
            <span>&rarr;</span>
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
