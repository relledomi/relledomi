"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Productions", href: "#street-games" },
  { label: "Services", href: "#agency" },
  { label: "About", href: "#for-brands" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-400"
      style={{
        background: scrolled ? "rgba(6,6,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div
        className="mx-auto flex h-16 max-w-[1240px] items-center justify-between"
        style={{ padding: "0 var(--spacing-side)" }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 bg-transparent border-none cursor-pointer"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-kanga">
            <span className="font-[family-name:var(--font-display)] text-xs text-white">
              R
            </span>
          </div>
          <span className="font-[family-name:var(--font-display)] text-sm tracking-wide text-cream">
            RELLEDOMI
          </span>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="bg-transparent border-none text-sub font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] uppercase cursor-pointer transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="border border-kanga text-kanga font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] uppercase px-4 py-2 rounded-sm cursor-pointer transition-all duration-200 hover:bg-kanga hover:text-cream bg-transparent"
          >
            Work With Us
          </button>
        </div>
      </div>
    </nav>
  );
}
