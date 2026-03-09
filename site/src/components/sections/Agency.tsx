"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerChildren from "@/components/ui/StaggerChildren";

const services = [
  {
    num: "01",
    title: "BRAND ACTIVATIONS",
    desc: "Custom street-level events for corporate clients. We bring the crowd, the cameras, and the content.",
  },
  {
    num: "02",
    title: "CONTENT PRODUCTION",
    desc: "End-to-end video production optimized for TikTok, Reels, YouTube, and beyond.",
  },
  {
    num: "03",
    title: "EVENT PRODUCTION",
    desc: "Book Street Games for your campus, festival, or venue. Your audience gets an experience.",
  },
  {
    num: "04",
    title: "TALENT DEVELOPMENT",
    desc: "We discover, build, and manage emerging talent from the streets of Nairobi.",
  },
];

export default function Agency() {
  return (
    <section
      id="agency"
      className="relative"
      style={{ padding: "var(--spacing-section) var(--spacing-side)" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <AnimateIn>
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-turquoise uppercase mb-4">
            THE AGENCY
          </p>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,48px)] text-cream uppercase mb-3">
            MORE THAN A SHOW
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16}>
          <p className="font-[family-name:var(--font-body)] text-lg font-light text-sub mb-12 max-w-[560px] leading-[1.7]">
            Relledomi Entertainment is an agency built for brands that want to
            reach young Africa.
          </p>
        </AnimateIn>

        {/* Service cards — 2x2 grid with stagger */}
        <StaggerChildren
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          stagger={0.1}
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface p-8 transition-all duration-300 hover:border-[rgba(194,24,91,0.2)] hover:-translate-y-0.5"
            >
              <span className="font-[family-name:var(--font-mono)] text-[32px] font-bold text-[rgba(194,24,91,0.08)] absolute top-4 right-6">
                {service.num}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-cream uppercase mb-3">
                {service.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm font-light text-sub leading-[1.7]">
                {service.desc}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
