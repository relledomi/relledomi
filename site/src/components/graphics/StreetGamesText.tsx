"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StreetGamesText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const streetRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const street = streetRef.current;
    const games = gamesRef.current;
    if (!container || !street || !games) return;

    // Get individual letter spans
    const streetLetters = street.querySelectorAll(".letter");
    const gamesLetters = games.querySelectorAll(".letter");

    // Initial state — letters scattered and invisible
    gsap.set(streetLetters, {
      opacity: 0,
      y: () => gsap.utils.random(-80, 80),
      x: () => gsap.utils.random(-40, 40),
      rotateZ: () => gsap.utils.random(-15, 15),
      scale: () => gsap.utils.random(0.5, 1.3),
    });
    gsap.set(gamesLetters, {
      opacity: 0,
      y: () => gsap.utils.random(-80, 80),
      x: () => gsap.utils.random(-40, 40),
      rotateZ: () => gsap.utils.random(-15, 15),
      scale: () => gsap.utils.random(0.5, 1.3),
    });

    // Fragment assembly animation on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        once: true,
      },
    });

    tl.to(streetLetters, {
      opacity: 1,
      y: 0,
      x: 0,
      rotateZ: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.04,
      ease: "back.out(1.2)",
    })
      .to(
        gamesLetters,
        {
          opacity: 1,
          y: 0,
          x: 0,
          rotateZ: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.04,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      )
      .to(
        container,
        {
          duration: 0.001,
          onComplete: () => {
            // Start the subtle glitch loop after assembly
            startGlitchLoop(streetLetters, gamesLetters);
          },
        },
        "+=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 text-center select-none">
      {/* STREET */}
      <div
        ref={streetRef}
        className="font-[family-name:var(--font-display)] text-[clamp(60px,18vw,220px)] leading-[0.85] text-kanga uppercase flex justify-center"
        style={{ letterSpacing: "-0.02em" }}
      >
        {"STREET".split("").map((char, i) => (
          <span
            key={`s-${i}`}
            className="letter inline-block relative"
            style={{ textShadow: "0 0 40px rgba(194,24,91,0.3)" }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* GAMES */}
      <div
        ref={gamesRef}
        className="font-[family-name:var(--font-display)] text-[clamp(60px,18vw,220px)] leading-[0.85] text-kanga uppercase flex justify-center"
        style={{ letterSpacing: "-0.02em" }}
      >
        {"GAMES".split("").map((char, i) => (
          <span
            key={`g-${i}`}
            className="letter inline-block relative"
            style={{ textShadow: "0 0 40px rgba(194,24,91,0.3)" }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

// Subtle glitch effect that runs continuously after assembly
function startGlitchLoop(
  streetLetters: NodeListOf<Element>,
  gamesLetters: NodeListOf<Element>
) {
  const allLetters = [...Array.from(streetLetters), ...Array.from(gamesLetters)];

  const glitch = () => {
    // Pick 1-3 random letters to glitch
    const count = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < count; i++) {
      const letter = allLetters[Math.floor(Math.random() * allLetters.length)];
      const tl = gsap.timeline();

      tl.to(letter, {
        x: gsap.utils.random(-3, 3),
        y: gsap.utils.random(-2, 2),
        opacity: gsap.utils.random(0.6, 1),
        duration: 0.05,
        ease: "none",
      })
        .to(letter, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.05,
          ease: "none",
        })
        .to(
          letter,
          {
            color: Math.random() > 0.5 ? "#00BFA5" : "#FFF8E1",
            duration: 0.03,
            ease: "none",
          },
          0
        )
        .to(
          letter,
          {
            color: "#C2185B",
            duration: 0.05,
            ease: "none",
          },
          0.06
        );
    }

    // Random delay between glitch bursts
    gsap.delayedCall(gsap.utils.random(1.5, 4), glitch);
  };

  // Start the loop
  gsap.delayedCall(1, glitch);
}
