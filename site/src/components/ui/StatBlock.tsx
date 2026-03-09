"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLParagraphElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const numEl = numRef.current;
    if (!el || !numEl) return;

    // Extract numeric part for count-up
    const numericMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, "");

    gsap.set(el, { opacity: 0, y: 30 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        if (numericMatch && !hasAnimated) {
          const target = parseInt(numericMatch[1]);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.5,
            delay: 0.2,
            ease: "power2.out",
            onUpdate: () => {
              numEl.textContent = Math.round(obj.val) + suffix;
            },
          });
          setHasAnimated(true);
        }
      },
    });

    return () => trigger.kill();
  }, [value, hasAnimated]);

  return (
    <div
      ref={ref}
      className="rounded-lg border border-border bg-surface p-6 text-center"
    >
      <p
        ref={numRef}
        className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,40px)] text-kanga"
      >
        {value}
      </p>
      <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.1em] text-muted uppercase mt-2">
        {label}
      </p>
    </div>
  );
}
