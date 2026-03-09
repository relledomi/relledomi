"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  duration?: number;
}

export default function StaggerChildren({
  children,
  className = "",
  stagger = 0.1,
  y = 40,
  duration = 0.8,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    gsap.set(items, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
        });
      },
    });

    return () => trigger.kill();
  }, [stagger, y, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
