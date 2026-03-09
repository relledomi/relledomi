"use client";

import { useEffect, useState, useRef, lazy, Suspense } from "react";
import gsap from "gsap";

const HeroScene = lazy(() => import("@/components/graphics/HeroScene"));

const socials = [
  { platform: "INSTAGRAM", handle: "@streetgamesKE" },
  { platform: "TIKTOK", handle: "@streetgamesKE" },
  { platform: "YOUTUBE", handle: "Relledomi Entertainment" },
];

export default function Hero() {
  const [time, setTime] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Nairobi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hero entrance animation on mount
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const items = el.querySelectorAll("[data-animate]");

    gsap.set(items, { opacity: 0, y: 40 });

    tl.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      delay: 0.3,
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ padding: "120px var(--spacing-side) 80px" }}
    >
      {/* Three.js particle scene */}
      <Suspense fallback={<div className="absolute inset-0 bg-bg" />}>
        <HeroScene />
      </Suspense>

      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <h1
          data-animate
          className="font-[family-name:var(--font-display)] text-[clamp(60px,12vw,140px)] leading-[0.9] text-cream uppercase"
        >
          RELLEDOMI
        </h1>

        <p
          data-animate
          className="mt-3 font-[family-name:var(--font-body)] text-[clamp(16px,2vw,22px)] font-light text-sub"
        >
          Home of Street Games
        </p>

        <p
          data-animate
          className="mt-6 max-w-[520px] font-[family-name:var(--font-body)] text-[clamp(14px,1.5vw,16px)] font-light leading-[1.7] text-sub"
        >
          An entertainment agency creating live street competitions and viral
          content across East Africa. We turn public spaces into stages.
        </p>

        <p
          data-animate
          className="mt-10 font-[family-name:var(--font-mono)] text-xs tracking-[0.08em] text-muted uppercase"
        >
          Follow us. We&apos;ll tell you where to show up first.
        </p>

        <div data-animate className="mt-4 flex flex-col gap-3">
          {socials.map((s) => (
            <a
              key={s.platform}
              href="#"
              className="group flex items-center gap-3 no-underline"
            >
              <span className="font-[family-name:var(--font-mono)] text-kanga transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] text-muted uppercase">
                {s.platform}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-sm text-sub transition-colors duration-200 group-hover:text-kanga">
                {s.handle}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Corner element: Nairobi coordinates + live time */}
      <div
        data-animate
        className="absolute bottom-8 right-8 hidden text-right md:block"
        style={{ paddingRight: "var(--spacing-side)" }}
      >
        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] text-dim">
          1&deg;17&prime;S 36&deg;49&prime;E
        </p>
        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.08em] text-dim">
          EAT {time}
        </p>
      </div>
    </section>
  );
}
