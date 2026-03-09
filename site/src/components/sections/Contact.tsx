"use client";

import { useState } from "react";
import AnimateIn from "@/components/ui/AnimateIn";

const contactTypes = ["Sponsorship", "Booking", "Collaboration", "Other"];

const contactInfo = [
  { label: "EMAIL", value: "hello@relledomi.com" },
  { label: "INSTAGRAM", value: "@relledomi" },
  { label: "STREET GAMES", value: "@streetgamesKE" },
  { label: "BASED IN", value: "Nairobi, KE \u00D7 Providence, US" },
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState("Sponsorship");

  return (
    <section
      id="contact"
      style={{ padding: "var(--spacing-section) var(--spacing-side)" }}
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Info */}
          <AnimateIn>
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-kanga uppercase mb-4">
                CONTACT
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,5vw,48px)] text-cream uppercase mb-3">
                LET&apos;S WORK
              </h2>
              <p className="font-[family-name:var(--font-body)] text-base font-light text-sub mb-10 leading-[1.7]">
                Whether you&apos;re a brand looking for activation, a venue
                wanting to host, or just want to say what&apos;s up —
                we&apos;re here.
              </p>

              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-4 items-baseline"
                  >
                    <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.12em] text-muted uppercase min-w-[100px]">
                      {item.label}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-sm text-sub">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right — Form */}
          <AnimateIn delay={0.15}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded border border-border bg-surface px-4 py-3.5 font-[family-name:var(--font-body)] text-sm text-text outline-none transition-colors duration-200 focus:border-kanga placeholder:text-muted"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded border border-border bg-surface px-4 py-3.5 font-[family-name:var(--font-body)] text-sm text-text outline-none transition-colors duration-200 focus:border-kanga placeholder:text-muted"
              />

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {contactTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`rounded border px-3 py-2.5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.06em] uppercase cursor-pointer transition-all duration-200 ${
                      selectedType === type
                        ? "border-kanga bg-[rgba(194,24,91,0.08)] text-kanga"
                        : "border-border bg-surface text-muted hover:text-sub"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <textarea
                placeholder="Tell us what you're thinking..."
                rows={5}
                className="w-full rounded border border-border bg-surface px-4 py-3.5 font-[family-name:var(--font-body)] text-sm text-text outline-none transition-colors duration-200 focus:border-kanga placeholder:text-muted resize-y"
              />

              <button className="self-start rounded bg-kanga px-6 py-3.5 font-[family-name:var(--font-display)] text-sm tracking-[0.08em] text-cream uppercase cursor-pointer transition-all duration-200 hover:brightness-110 border-none">
                Send Message
              </button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
