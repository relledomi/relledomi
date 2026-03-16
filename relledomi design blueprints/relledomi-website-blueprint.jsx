import { useState } from "react";

const C = {
  bg: "#060608", surface: "#0D0D12", alt: "#14141C",
  kanga: "#C2185B", kangaGlow: "rgba(194,24,91,0.08)",
  cream: "#FFF8E1", turq: "#00BFA5", turqGlow: "rgba(0,191,165,0.08)",
  chrome: "#424242", chromeLight: "#6E6E6E",
  text: "#EEEEE8", sub: "#908E82", muted: "#5A5850", dim: "#3A3A36",
  border: "#1C1C24",
};

const ff = {
  d: "'Archivo Black', sans-serif",
  b: "'DM Sans', sans-serif",
  m: "'IBM Plex Mono', monospace",
};

function Badge({ children, color = "kanga" }) {
  const m = {
    kanga: [C.kangaGlow, C.kanga], turq: [C.turqGlow, C.turq],
    cream: ["rgba(255,248,225,0.06)", C.cream], chrome: ["rgba(66,66,66,0.15)", C.chromeLight],
    muted: ["rgba(90,88,80,0.08)", C.muted], red: ["rgba(220,38,38,0.08)", "#DC2626"],
  };
  const [bg, c] = m[color] || m.kanga;
  return <span style={{ display: "inline-block", padding: "2px 9px", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: bg, color: c, border: `1px solid ${c}22`, borderRadius: "2px", fontFamily: ff.m }}>{children}</span>;
}

function Card({ title, children, accent, tag }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${accent ? "rgba(194,24,91,0.15)" : C.border}`, borderRadius: "8px", padding: "24px", marginBottom: "14px", position: "relative", overflow: "hidden" }}>
      {accent && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, ${C.kanga}, ${C.turq}, transparent 70%)` }} />}
      {(title || tag) && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>{title && <h3 style={{ fontFamily: ff.d, fontSize: "16px", color: C.text, margin: 0, letterSpacing: "0.02em" }}>{title}</h3>}{tag}</div>}
      {children}
    </div>
  );
}

function Spec({ label, children }) {
  return (
    <div style={{ padding: "14px 16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
      <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.kanga, letterSpacing: "0.12em", margin: "0 0 8px", textTransform: "uppercase" }}>{label}</p>
      <div style={{ fontSize: "12px", color: C.sub, fontFamily: ff.b, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

function SectionSpec({ number, title, desc, specs = [], motion, notes }) {
  return (
    <div style={{ padding: "24px", background: C.surface, borderRadius: "8px", border: `1px solid ${C.border}`, marginBottom: "14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <div style={{ width: "28px", height: "28px", borderRadius: "4px", background: C.kangaGlow, border: `1px solid ${C.kanga}33`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ff.d, fontSize: "13px", color: C.kanga }}>{number}</div>
        <h4 style={{ fontFamily: ff.d, fontSize: "17px", color: C.text, margin: 0 }}>{title}</h4>
      </div>
      <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 16px", fontFamily: ff.b, lineHeight: 1.7 }}>{desc}</p>

      {specs.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: motion ? "14px" : 0 }}>
          {specs.map((s, i) => <Spec key={i} label={s.label}>{s.content}</Spec>)}
        </div>
      )}

      {motion && (
        <div style={{ padding: "12px 16px", background: "rgba(0,191,165,0.04)", borderRadius: "5px", border: "1px solid rgba(0,191,165,0.1)", marginBottom: notes ? "10px" : 0 }}>
          <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.turq, letterSpacing: "0.1em", margin: "0 0 6px" }}>MOTION</p>
          <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{motion}</p>
        </div>
      )}

      {notes && (
        <div style={{ padding: "10px 14px", background: "rgba(194,24,91,0.04)", borderRadius: "4px", border: "1px solid rgba(194,24,91,0.1)" }}>
          <p style={{ fontSize: "11px", color: C.kanga, margin: 0, fontFamily: ff.b }}>{notes}</p>
        </div>
      )}
    </div>
  );
}

// ─── TABS ──────────────────────

const tabs = [
  { id: "overview", label: "OVERVIEW" },
  { id: "design", label: "DESIGN SYSTEM" },
  { id: "pages", label: "PAGE STRUCTURE" },
  { id: "sections", label: "SECTION SPECS" },
  { id: "motion", label: "MOTION & GRAPHICS" },
  { id: "copy", label: "COPY GUIDE" },
  { id: "build", label: "BUILD PLAN" },
];

// ─── 1. OVERVIEW ──────────────────────

function Overview() {
  return (
    <div>
      <div style={{ padding: "40px 0 28px", borderBottom: `1px solid ${C.border}`, marginBottom: "24px" }}>
        <p style={{ fontFamily: ff.m, fontSize: "10px", color: C.kanga, letterSpacing: "0.2em", margin: "0 0 8px" }}>WEBSITE BLUEPRINT</p>
        <h1 style={{ fontFamily: ff.d, fontSize: "clamp(32px, 6vw, 48px)", color: C.text, margin: "0 0 12px", lineHeight: 1 }}>RELLEDOMI.COM</h1>
        <p style={{ fontFamily: ff.b, fontSize: "14px", color: C.sub, maxWidth: "560px", lineHeight: 1.7 }}>
          Pre-launch agency site. Street Games is the star — Relledomi is the stage. Dark cinematic base with insane motion graphics throughout. The layout is tasteful. The elements are not.
        </p>
      </div>

      <Card title="SITE IDENTITY" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
          {[
            { label: "DOMAIN", value: "relledomi.com", sub: "Street Games lives at relledomi.com/streetgames or as a section on the single page" },
            { label: "TAGLINE", value: "\"Home of Street Games\"", sub: "This is the bridge — people search Street Games, land on Relledomi" },
            { label: "STATE", value: "Pre-launch", sub: "No photo/video content yet. Motion graphics and typography carry the entire visual weight" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted, letterSpacing: "0.12em", margin: "0 0 6px" }}>{item.label}</p>
              <p style={{ fontFamily: ff.d, fontSize: "16px", color: C.text, margin: "0 0 4px" }}>{item.value}</p>
              <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: ff.b }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="CORE PRINCIPLES">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            { rule: "TASTEFUL LAYOUT, INSANE ELEMENTS", desc: "The grid is clean. The spacing is generous. The typography is precise. But the graphics — particles, warping shapes, animated textures, glitch effects — are unhinged. The container is calm. The contents are chaos." },
            { rule: "STREET GAMES IS THE HOOK", desc: "People will Google 'Street Games Nairobi' and need to land here. The site makes it immediately clear: this is where Street Games lives. But they're standing in Relledomi's house." },
            { rule: "NO CONTENT? NO PROBLEM.", desc: "Motion graphics replace photos. Animated typography replaces video. The absence of content becomes a design choice — mystery, anticipation, 'something is coming'. The graphics ARE the content." },
            { rule: "FOLLOW TO FIND OUT WHERE", desc: "The entire CTA funnels to one thing: follow our socials to be notified of the first location. Not email capture. Not sign-up forms. Just: follow us, we'll tell you where to show up." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.d, fontSize: "13px", color: C.kanga, margin: "0 0 8px", letterSpacing: "0.02em" }}>{item.rule}</p>
              <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="THREE AUDIENCES">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { who: "FANS / PLAYERS", arrives: "Googles 'Street Games Nairobi' or clicks link from social", wants: "To know when and where the next event is", action: "Follows @streetgamesKE on IG/TikTok", priority: "PRIMARY" },
            { who: "BRANDS / SPONSORS", arrives: "Sent the link in a pitch email or finds via Google", wants: "To evaluate if Relledomi is legit and worth partnering with", action: "Clicks 'Work With Us' → contacts via form or email", priority: "SECONDARY" },
            { who: "VENUES / UNIVERSITIES", arrives: "Heard about Street Games, wants to host", wants: "To understand the format and how to book", action: "Contacts Relledomi for a booking", priority: "TERTIARY" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <p style={{ fontFamily: ff.d, fontSize: "13px", color: C.text, margin: 0 }}>{item.who}</p>
                <Badge color={i === 0 ? "kanga" : i === 1 ? "turq" : "chrome"}>{item.priority}</Badge>
              </div>
              <p style={{ fontSize: "10px", color: C.muted, margin: "0 0 4px", fontFamily: ff.m }}>ARRIVES: {item.arrives}</p>
              <p style={{ fontSize: "10px", color: C.muted, margin: "0 0 4px", fontFamily: ff.m }}>WANTS: {item.wants}</p>
              <p style={{ fontSize: "10px", color: C.turq, margin: 0, fontFamily: ff.m }}>ACTION: {item.action}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 2. DESIGN SYSTEM ──────────────────────

function DesignSystem() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>DESIGN SYSTEM</h2>

      <Card title="ACTIVE PALETTE — KANGA & CHROME" accent>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3px", borderRadius: "6px", overflow: "hidden", marginBottom: "16px" }}>
          {[
            { bg: "#C2185B", fg: "#FFF8E1", name: "Kanga Pink", hex: "#C2185B", role: "Primary accent — CTAs, highlights, energy" },
            { bg: "#FFF8E1", fg: "#C2185B", name: "Cotton Cream", hex: "#FFF8E1", role: "Text on dark, warm white, breathable space" },
            { bg: "#00BFA5", fg: "#FFF8E1", name: "Turquoise", hex: "#00BFA5", role: "Secondary accent — links, interactive elements, contrast" },
            { bg: "#424242", fg: "#FFF8E1", name: "Chrome", hex: "#424242", role: "Surfaces, cards, mid-tone structure" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "28px 14px 14px", background: c.bg, color: c.fg, minHeight: "110px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ fontFamily: ff.m, fontSize: "11px", fontWeight: 600, margin: "0 0 2px" }}>{c.name}</p>
              <p style={{ fontFamily: ff.m, fontSize: "9px", opacity: 0.7, margin: "0 0 6px" }}>{c.hex}</p>
              <p style={{ fontFamily: ff.b, fontSize: "10px", opacity: 0.8, margin: 0, lineHeight: 1.4 }}>{c.role}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="BACKGROUND SYSTEM">
            <p style={{ margin: 0 }}>Base: #060608 (near-black with blue undertone). Surface cards: #0D0D12. Elevated: #14141C. Never pure #000000 — the blue-black creates depth and feels cinematic rather than flat.</p>
          </Spec>
          <Spec label="TEXT HIERARCHY">
            <p style={{ margin: 0 }}>Headlines: Cotton Cream (#FFF8E1). Body: #908E82 (warm grey). Captions/labels: #5A5850. Micro text: #3A3A36. Kanga Pink for emphasis and interactive states.</p>
          </Spec>
        </div>
      </Card>

      <Card title="TYPOGRAPHY">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }}>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
            <p style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: "28px", color: C.text, margin: "0 0 8px" }}>ARCHIVO BLACK</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.kanga, margin: "0 0 6px", letterSpacing: "0.1em" }}>DISPLAY / HEADLINES</p>
            <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: ff.b, lineHeight: 1.5 }}>Heavy, confrontational, fills the frame. Used for hero text, section titles, and any moment that needs to punch. All caps always. No lightweight variants.</p>
          </div>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "24px", fontWeight: 300, color: C.text, margin: "0 0 8px" }}>DM Sans Light</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.turq, margin: "0 0 6px", letterSpacing: "0.1em" }}>BODY / DESCRIPTIONS</p>
            <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: ff.b, lineHeight: 1.5 }}>Clean, modern, excellent readability. Weights 300-500 only. The calm counterweight to Archivo's aggression. Generous line-height (1.6-1.8).</p>
          </div>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "16px", color: C.text, margin: "0 0 8px" }}>IBM Plex Mono</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.chromeLight, margin: "0 0 6px", letterSpacing: "0.1em" }}>LABELS / SYSTEM / DATA</p>
            <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: ff.b, lineHeight: 1.5 }}>Technical precision. Used for labels, coordinates, metadata, badges, captions. All caps with wide letter-spacing. Gives the agency a systems-level feel.</p>
          </div>
        </div>
      </Card>

      <Card title="SPACING & LAYOUT">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="GRID">
            <p style={{ margin: 0 }}>Max width: 1240px. Side padding: clamp(20px, 5vw, 60px). 12-column grid underneath. Content rarely uses full width — asymmetry is intentional. Hero text often occupies 7-8 columns, leaving breathing room.</p>
          </Spec>
          <Spec label="SECTION SPACING">
            <p style={{ margin: 0 }}>Between major sections: 120-160px. This is generous on purpose — each section should feel like entering a new room. Internal spacing within sections: 24-40px. Cards: 14-20px gap.</p>
          </Spec>
          <Spec label="DENSITY PRINCIPLE">
            <p style={{ margin: 0 }}>The layout itself is spacious, clean, easy to scan. Large text, wide margins, clear hierarchy. But within the negative space, the motion graphics are dense, complex, and visually rich. Calm frame, wild painting.</p>
          </Spec>
          <Spec label="RESPONSIVE">
            <p style={{ margin: 0 }}>Desktop-first design. On mobile, the motion graphics simplify (fewer particles, simpler animations) but don't disappear. Typography scales down but stays bold. Single column below 768px.</p>
          </Spec>
        </div>
      </Card>
    </div>
  );
}

// ─── 3. PAGE STRUCTURE ──────────────────────

function PageStructure() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>PAGE STRUCTURE</h2>

      <Card title="SITE MAP" accent>
        <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 20px", fontFamily: ff.b }}>Single page, scroll-driven. Seven sections. Each section is a full viewport or near-full viewport height. The scroll IS the experience.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { num: "01", name: "HERO / LANDING", height: "100vh", desc: "Relledomi agency identity. 'Home of Street Games.' Animated background. Minimal text. Social CTA.", bg: C.kanga },
            { num: "02", name: "STREET GAMES TEASER", height: "100vh", desc: "The star product. Cinematic reveal. Game energy. 'Coming to Nairobi streets.' Location mystery. Follow CTA.", bg: C.turq },
            { num: "03", name: "THE FORMAT", height: "auto", desc: "What Street Games actually is — brief, punchy explanation of the concept. Game types as visual cards. No spoilers, just enough to intrigue.", bg: C.kanga },
            { num: "04", name: "RELLEDOMI AGENCY", height: "80vh", desc: "What Relledomi is beyond Street Games. Four services. Agency positioning. Brief, confident, professional.", bg: "#424242" },
            { num: "05", name: "FOR BRANDS", height: "auto", desc: "Sponsor-facing pitch. Why partner with us. Stats/value props. 'Work With Us' CTA. Hidden in plain sight for brands who scroll.", bg: C.kanga },
            { num: "06", name: "CONTACT", height: "auto", desc: "Simple contact form + direct info. Type selector (sponsorship / booking / collab). Social links repeated.", bg: C.turq },
            { num: "07", name: "FOOTER", height: "auto", desc: "Minimal. Logo, socials, copyright. Nairobi × US. That's it.", bg: "#424242" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}`, alignItems: "flex-start" }}>
              <div style={{ minWidth: "36px", height: "36px", borderRadius: "4px", background: `${s.bg}18`, border: `1px solid ${s.bg}33`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ff.d, fontSize: "13px", color: s.bg, flexShrink: 0 }}>{s.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <span style={{ fontFamily: ff.d, fontSize: "14px", color: C.text }}>{s.name}</span>
                  <span style={{ fontFamily: ff.m, fontSize: "8px", color: C.muted, letterSpacing: "0.08em" }}>{s.height}</span>
                </div>
                <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="SCROLL FLOW LOGIC">
        <p style={{ fontSize: "13px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.8 }}>
          The scroll tells a story: <strong style={{ color: C.text }}>Section 1</strong> says "we are Relledomi, home of Street Games." <strong style={{ color: C.text }}>Section 2</strong> says "Street Games is coming — here's the energy." <strong style={{ color: C.text }}>Section 3</strong> says "here's what it actually is." <strong style={{ color: C.text }}>Section 4</strong> says "and we do more than just this show." <strong style={{ color: C.text }}>Section 5</strong> says "brands — here's why you should work with us." <strong style={{ color: C.text }}>Section 6</strong> says "reach out." Each section earns the next scroll. No section is filler.
        </p>
      </Card>
    </div>
  );
}

// ─── 4. SECTION SPECS ──────────────────────

function SectionSpecs() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>SECTION-BY-SECTION SPECS</h2>

      <SectionSpec
        number="01" title="HERO / LANDING"
        desc="Full viewport. This is the first thing anyone sees. Relledomi's identity, the 'Home of Street Games' bridge, and the atmospheric graphic that sets the mood for everything. The text is minimal. The graphic does the talking."
        specs={[
          { label: "LAYOUT", content: "Left-aligned text block (50-60% width). Right side is open for the animated background graphic to breathe. Vertical center or slight upper-third placement." },
          { label: "CONTENT HIERARCHY", content: "1) 'RELLEDOMI' — large, Archivo Black. 2) 'Home of Street Games' — smaller, DM Sans, below the name. 3) One sentence agency descriptor. 4) Social follow CTA buttons (IG, TikTok, YouTube). 5) Nairobi coordinates + live time in corner." },
          { label: "BACKGROUND GRAPHIC", content: "THIS IS THE INSANE ELEMENT. Full-screen animated graphic — could be: particle field that reacts to cursor, warping geometric mesh, generative pattern using Kanga & Chrome colors, or a morphing abstract shape. It should feel alive, not static. Think: a visual engine running behind the text." },
          { label: "CTA", content: "Social follow buttons — not standard link icons. Styled as distinctive pill buttons or terminal-style links: '→ INSTAGRAM @streetgamesKE' / '→ TIKTOK @streetgamesKE' / '→ YOUTUBE Relledomi'. Copy above: 'Follow to find out the first location.'" },
        ]}
        motion="On load: text staggers in with 0.1s delays between elements. Background graphic starts from a single point and expands/evolves over 2-3 seconds. Parallax between text layer and graphic layer on scroll. Cursor interaction with the background if using WebGL/canvas."
        notes="The hero should make someone stop and stare for 2-3 seconds before they even read the text. The graphic earns that pause."
      />

      <SectionSpec
        number="02" title="STREET GAMES TEASER"
        desc="This is the money section. Full viewport. Street Games gets its own cinematic moment — bigger, louder, more intense than the Relledomi hero. This is what people came for. The energy shifts from agency-cool to game-show-hype."
        specs={[
          { label: "LAYOUT", content: "Center-dominant or full-width typographic treatment. 'STREET GAMES' should be massive — 15-20vw font size, possibly with a perspective/3D tilt or distortion effect. Supporting text below at normal scale." },
          { label: "CONTENT", content: "'STREET GAMES' — enormous display text. 'Coming to Nairobi streets' — subline. 'Where will we show up first?' — the mystery hook. Social follow CTA repeated here with more urgency. Maybe a 'countdown' visual element (not a literal timer, but a visual sense of 'soon')." },
          { label: "VISUAL TREATMENT", content: "The 'STREET GAMES' text itself should be an event. Options: glitch/distortion effect on the letterforms, text filled with an animated texture (noise, video grain, pattern), letters that shift/vibrate subtly, or a reveal animation where letters assemble from fragments. Kanga Pink as the dominant color here." },
          { label: "BACKGROUND", content: "Different energy from hero — more aggressive. Could be: animated stripe patterns (matatu energy without being literal), rapid geometric transitions, a grid that warps and pulses, or particle explosions. The background should feel like competition energy." },
        ]}
        motion="Scroll-triggered entrance: the 'STREET GAMES' text should arrive with impact — a scale-up, a flash, a shake, something that feels like it HITS the screen. Background animation intensifies as you scroll into this section. Color shift from the hero's more muted tones to full Kanga Pink saturation."
        notes="This section alone should be shareable as a screen recording. If someone can't resist recording their screen while scrolling through this, you've nailed it."
      />

      <SectionSpec
        number="03" title="THE FORMAT"
        desc="Explain what Street Games actually is — but keep it punchy and visual. No paragraphs. Just enough to make someone understand the concept and want to see it happen."
        specs={[
          { label: "LAYOUT", content: "Three-part layout: 1) One-liner concept statement. 2) Visual cards showing game types (not full descriptions — just names and vibes). 3) Location types listed as tags (Universities, CBD, Malls). Auto-height, not forced to viewport." },
          { label: "GAME CARDS", content: "6 game format cards in a 3×2 or 2×3 grid. Each card has: game name (Archivo Black), one-word type tag (ELIM, SKILL, BRAIN, etc.), and a small animated icon or abstract graphic unique to each game. Cards should feel like items in an inventory — collectible energy." },
          { label: "CONCEPT STATEMENT", content: "One or two sentences max: 'Mini-games on Nairobi streets. Show up. Compete. Win.' — that's it. The game cards do the rest of the storytelling. No long explanations." },
          { label: "LOCATION TAGS", content: "Styled as route markers or street signs: UoN, JKUAT, Strathmore, Kencom, TRM, Garden City. These aren't just labels — they're visual elements with their own personality (concrete texture, bold borders, mono type)." },
        ]}
        motion="Game cards stagger in on scroll with a slight rotation or flip effect. Each card has a subtle idle animation (floating, breathing, glowing border pulse). Location tags slide in from the side like they're being laid down on a table."
      />

      <SectionSpec
        number="04" title="RELLEDOMI AGENCY"
        desc="The pivot from show to agency. Tone shifts from game-show energy to confident, professional, but still visually bold. This section tells brands and partners: there's a real company here."
        specs={[
          { label: "LAYOUT", content: "Split or asymmetric. Left: short agency statement. Right: four service cards in a 2×2 grid. Or single column with statement flowing into services. ~80vh height." },
          { label: "SERVICES", content: "Four cards: Brand Activations, Content Production, Event Production, Talent Development. Each gets a number (01-04), title, one sentence, and a subtle animated element. No heavy descriptions — this is a tease, not a brochure." },
          { label: "AGENCY STATEMENT", content: "Something like: 'Relledomi Entertainment creates live competitions, viral content, and brand experiences across East Africa.' — one sentence that covers everything. Let the services expand on it." },
        ]}
        motion="Services cards reveal on scroll with a slide-up + fade. Numbered labels count up as they enter. Background graphic is calmer here — maybe a slow-moving geometric pattern or subtle grain. The energy dials back to let the professionalism breathe."
      />

      <SectionSpec
        number="05" title="FOR BRANDS"
        desc="Sponsor-facing section. Not aggressively salesy — just confident value props that make a marketing director think 'I should talk to these people.'"
        specs={[
          { label: "LAYOUT", content: "Statement left, stats right. Or full-width statement with stat blocks below. Keep it scannable — a brand person is scrolling fast." },
          { label: "STATS", content: "4 stat blocks: '8+ content pieces per event' / '3 platforms covered' / '100% organic reach' / '48hr turnaround'. These replace a traditional pitch deck for initial interest." },
          { label: "CTA", content: "'Work With Us' button → scrolls to contact. Or a direct mailto link. Make it frictionless." },
        ]}
        motion="Stat numbers count up when they enter the viewport. Subtle but effective — the only 'data animation' on the site."
      />

      <SectionSpec
        number="06" title="CONTACT"
        desc="Simple, functional, clean. No fancy design needed here — just make it easy to reach out."
        specs={[
          { label: "LAYOUT", content: "Two columns: left = direct contact info (email, socials, location). Right = simple form (name, email, type selector, message, send button). Or single column centered." },
          { label: "TYPE SELECTOR", content: "Four options: Sponsorship / Booking / Collaboration / Other. Styled as clickable tags, not a dropdown. This pre-qualifies leads." },
          { label: "FORM BEHAVIOR", content: "On submit → success state with 'We'll be in touch within 48 hours.' Form connects to a backend (Formspree, Netlify Forms, or custom). Keep it lightweight." },
        ]}
        motion="Minimal motion here. Maybe a subtle border glow on input focus using Kanga Pink. The form should feel grounded and trustworthy."
      />
    </div>
  );
}

// ─── 5. MOTION & GRAPHICS ──────────────────────

function MotionGraphics() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>MOTION & GRAPHICS</h2>

      <Card title="THE PHILOSOPHY" accent>
        <p style={{ fontSize: "14px", color: C.text, margin: "0 0 16px", fontFamily: ff.b, lineHeight: 1.7 }}>
          The motion graphics are the content. Without photos or videos, these animated elements carry the entire visual identity. They need to be good enough that someone screenshots or screen-records the site.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="WHAT 'INSANE ELEMENTS' MEANS">
            <p style={{ margin: 0 }}>Complex generative graphics: particle fields, morphing meshes, animated noise textures, procedural patterns, WebGL shaders, or canvas-based animations. Each section gets its own visual system. They should feel hand-crafted, not template.</p>
          </Spec>
          <Spec label="WHAT 'TASTEFUL LAYOUT' MEANS">
            <p style={{ margin: 0 }}>The graphics live BEHIND or ALONGSIDE the content — they never compete with readability. Text is always crisp and clear. The insane elements are contained within clear compositional boundaries. Think: a gallery wall — the frames are orderly, the art inside is wild.</p>
          </Spec>
        </div>
      </Card>

      <Card title="GRAPHIC ELEMENTS PER SECTION">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { section: "HERO", graphic: "Full-screen generative particle field or morphing mesh", tech: "Three.js, p5.js, or CSS-only with @property animations", intensity: "HIGH", desc: "The flagship graphic. Fills the viewport behind the text. Uses Kanga & Chrome colors. Reacts to cursor position. Evolves over time — never looks exactly the same twice. Think: a living organism made of light and geometry." },
            { section: "STREET GAMES TEASER", graphic: "Animated text treatment + aggressive background", tech: "CSS animations + canvas, or GSAP + SVG filters", intensity: "MAXIMUM", desc: "The text itself is the graphic. Letters that glitch, distort, fill with animated texture, or assemble from fragments. Background shifts to high-energy stripe/grid patterns. Color saturation peaks here." },
            { section: "THE FORMAT", graphic: "Game card micro-animations + floating abstract shapes", tech: "CSS transforms + Framer Motion (if React) or GSAP", intensity: "MEDIUM", desc: "Each game card has a unique small animated element — a spinning shape, a pulsing glow, a bouncing icon. Background has subtle floating geometric shapes in Kanga & Chrome colors at low opacity." },
            { section: "AGENCY", graphic: "Slow geometric pattern or grain overlay", tech: "CSS background animation or SVG pattern", intensity: "LOW", desc: "Calmer energy. A slow-rotating geometric pattern at very low opacity, or an animated film grain. This section breathes — the motion is ambient, not attention-grabbing." },
            { section: "FOR BRANDS", graphic: "Counting number animation + subtle accent lines", tech: "Intersection Observer + CSS counter or JS", intensity: "LOW-MEDIUM", desc: "Stats count up on scroll entry. Thin animated lines or borders that draw themselves. Professional energy with just enough visual interest." },
            { section: "CONTACT", graphic: "Input glow effects only", tech: "CSS transitions", intensity: "MINIMAL", desc: "Almost no motion graphics. Input fields glow Kanga Pink on focus. Submit button has a subtle hover animation. The form should feel grounded and functional." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontFamily: ff.d, fontSize: "13px", color: C.text }}>{item.section}</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <Badge color={item.intensity === "MAXIMUM" ? "kanga" : item.intensity === "HIGH" ? "turq" : item.intensity === "MEDIUM" ? "chrome" : "muted"}>{item.intensity}</Badge>
                </div>
              </div>
              <p style={{ fontFamily: ff.m, fontSize: "10px", color: C.turq, margin: "0 0 4px" }}>{item.graphic}</p>
              <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted, margin: "0 0 8px" }}>TECH: {item.tech}</p>
              <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="GLOBAL MOTION RULES">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="EASING">
            <p style={{ margin: 0 }}>Default: cubic-bezier(0.16, 1, 0.3, 1) — fast start, smooth finish. For dramatic entrances: cubic-bezier(0.34, 1.56, 0.64, 1) — slight overshoot. Never linear. Never ease-in-out (too generic).</p>
          </Spec>
          <Spec label="SCROLL TRIGGERING">
            <p style={{ margin: 0 }}>Use Intersection Observer with threshold 0.1-0.15. Elements animate ONCE — no re-triggering on scroll back. Stagger delays between sibling elements: 0.08-0.12s. Maximum stagger chain: 5-6 elements.</p>
          </Spec>
          <Spec label="PERFORMANCE">
            <p style={{ margin: 0 }}>Only animate transform and opacity (GPU-accelerated). Heavy canvas/WebGL graphics should have a fallback for low-power devices. Reduce particle count on mobile. Test on mid-range Android — if it stutters, simplify.</p>
          </Spec>
          <Spec label="NOISE & GRAIN">
            <p style={{ margin: 0 }}>Global film grain overlay at 2-3% opacity. SVG feTurbulence or a tiling noise PNG. This adds cinematic texture to every section without any performance cost. Sits on top of everything via a fixed overlay div with pointer-events: none.</p>
          </Spec>
        </div>
      </Card>
    </div>
  );
}

// ─── 6. COPY GUIDE ──────────────────────

function CopyGuide() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>COPY GUIDE</h2>

      <Card title="VOICE RULES" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { rule: "SHORT", desc: "Every sentence should be half the length you think it needs to be. If it doesn't fit on one line at 16px, it's too long. Cut ruthlessly." },
            { rule: "CONFRONTATIONAL", desc: "The tone should feel like a challenge. Not aggressive — confident. 'We turn streets into stages' not 'We aim to create engaging street experiences.'" },
            { rule: "NO CORPORATE", desc: "Ban these words: innovative, leveraging, ecosystem, synergy, empower, curate. Write like you'd talk to someone at a Nairobi bar, not a boardroom." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.d, fontSize: "14px", color: C.kanga, margin: "0 0 8px" }}>{item.rule}</p>
              <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="COPY PER SECTION">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { section: "HERO", headline: "RELLEDOMI", subline: "Home of Street Games", body: "An entertainment agency creating live competitions and viral content across East Africa.", cta: "Follow us. We'll tell you where to show up first." },
            { section: "STREET GAMES TEASER", headline: "STREET GAMES", subline: "Coming to Nairobi streets", body: "Where will we show up first?", cta: "→ Follow @streetgamesKE to find out" },
            { section: "THE FORMAT", headline: "THE GAME", subline: "", body: "Mini-games on Nairobi streets. Show up. Compete. Win.", cta: "" },
            { section: "AGENCY", headline: "MORE THAN A SHOW", subline: "", body: "Relledomi Entertainment creates live competitions, viral content, and brand experiences across East Africa.", cta: "" },
            { section: "FOR BRANDS", headline: "YOUR BRAND. THEIR STREETS.", subline: "", body: "Every event reaches hundreds in person, thousands online. Content people actually share.", cta: "Work With Us →" },
            { section: "CONTACT", headline: "LET'S WORK", subline: "", body: "Sponsorships, bookings, collabs, or just vibes.", cta: "SEND" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted, letterSpacing: "0.1em", margin: "0 0 8px" }}>{item.section}</p>
              <p style={{ fontFamily: ff.d, fontSize: "18px", color: C.text, margin: "0 0 2px" }}>{item.headline}</p>
              {item.subline && <p style={{ fontFamily: ff.b, fontSize: "13px", color: C.kanga, margin: "0 0 6px" }}>{item.subline}</p>}
              {item.body && <p style={{ fontSize: "12px", color: C.sub, margin: "0 0 6px", fontFamily: ff.b }}>{item.body}</p>}
              {item.cta && <p style={{ fontFamily: ff.m, fontSize: "11px", color: C.turq, margin: 0 }}>{item.cta}</p>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 7. BUILD PLAN ──────────────────────

function BuildPlan() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>BUILD PLAN</h2>

      <Card title="RECOMMENDED STACK" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="OPTION A — CODED (FULL CONTROL)">
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Framework:</strong> Next.js or Astro (static site, fast, SEO-friendly)</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Styling:</strong> Tailwind CSS or CSS Modules</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Animation:</strong> GSAP + ScrollTrigger for scroll animations. Three.js or p5.js for generative graphics. Framer Motion if React.</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Hosting:</strong> Vercel (free tier, auto-deploy from Git)</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Form:</strong> Formspree or Netlify Forms (free)</p>
            <p style={{ margin: 0 }}><strong style={{ color: C.text }}>Cost:</strong> $0-12/yr (domain only)</p>
          </Spec>
          <Spec label="OPTION B — FRAMER (FAST LAUNCH)">
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Platform:</strong> Framer — visual builder with real code output</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Animation:</strong> Built-in scroll animations, hover effects, page transitions. For heavy generative graphics: embed custom code components (React/canvas)</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Hosting:</strong> Included with Framer. Custom domain on Pro plan ($5/mo)</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Form:</strong> Built-in form components or Formspree embed</p>
            <p style={{ margin: "0 0 8px" }}><strong style={{ color: C.text }}>Pros:</strong> Faster to build, easier to update content, good animation tools</p>
            <p style={{ margin: 0 }}><strong style={{ color: C.text }}>Cons:</strong> Less control over heavy WebGL/canvas graphics — may need code embeds for the insane elements</p>
          </Spec>
        </div>
      </Card>

      <Card title="MY RECOMMENDATION">
        <div style={{ padding: "16px", background: "rgba(0,191,165,0.04)", borderRadius: "5px", border: "1px solid rgba(0,191,165,0.12)" }}>
          <p style={{ fontSize: "14px", color: C.text, margin: "0 0 8px", fontFamily: ff.b, fontWeight: 600 }}>Hybrid: Framer for layout + custom code components for the insane graphics</p>
          <p style={{ fontSize: "13px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.7 }}>
            Use Framer for the overall page structure, typography, spacing, scroll animations, form, and responsive design. Then embed custom React/canvas components for the hero particle field, the Street Games text effect, and any other heavy generative graphics. This gives you the speed of no-code for updates with the power of real code for the visual elements that matter most. If you want full code control and are comfortable maintaining it, go with Next.js + GSAP + Three.js — it'll be more work but zero platform dependency.
          </p>
        </div>
      </Card>

      <Card title="BUILD SEQUENCE">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { phase: "PHASE 1 — SKELETON", time: "Day 1-2", tasks: "Set up project (Framer or Next.js). Implement design system (colors, fonts, spacing). Build page structure with placeholder sections. Deploy to staging URL." },
            { phase: "PHASE 2 — LAYOUT & TYPE", time: "Day 2-4", tasks: "Build all 7 sections with real copy and typography. No animations yet — just the static layout looking perfect. Responsive breakpoints. Form connected to backend." },
            { phase: "PHASE 3 — SCROLL ANIMATIONS", time: "Day 4-6", tasks: "Add scroll-triggered reveals for all content (fade-ups, staggers). Section transitions. Stat counter animation. Input focus effects. Test on mobile." },
            { phase: "PHASE 4 — THE INSANE GRAPHICS", time: "Day 6-10", tasks: "Build the hero generative graphic. Build the Street Games text effect. Build game card micro-animations. Add film grain overlay. Cursor interactions if applicable. Performance test on mobile." },
            { phase: "PHASE 5 — POLISH & LAUNCH", time: "Day 10-12", tasks: "Cross-browser testing. Performance optimization (lazy load graphics, reduce on mobile). SEO meta tags, OG image, favicon. Connect custom domain. Final review. Launch." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ fontFamily: ff.d, fontSize: "13px", color: C.text }}>{item.phase}</span>
                <Badge color={i === 3 ? "kanga" : "chrome"}>{item.time}</Badge>
              </div>
              <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{item.tasks}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="TOTAL BUILD ESTIMATE">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "28px", color: C.kanga, margin: "0 0 4px" }}>10-12</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted, margin: 0, letterSpacing: "0.1em" }}>DAYS TO BUILD</p>
          </div>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "28px", color: C.turq, margin: "0 0 4px" }}>$0-60</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted, margin: 0, letterSpacing: "0.1em" }}>ANNUAL COST</p>
          </div>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "28px", color: C.cream, margin: "0 0 4px" }}>7</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted, margin: 0, letterSpacing: "0.1em" }}>SECTIONS</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ─── MAIN ──────────────────────

export default function WebsiteBlueprint() {
  const [tab, setTab] = useState("overview");
  const render = { overview: Overview, design: DesignSystem, pages: PageStructure, sections: SectionSpecs, motion: MotionGraphics, copy: CopyGuide, build: BuildPlan };
  const Comp = render[tab];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: ff.b }}>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(6,6,8,0.94)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 0 0" }}>
            <div style={{ width: "18px", height: "18px", background: C.kanga, borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: ff.d, fontSize: "10px", color: "#fff" }}>R</span>
            </div>
            <span style={{ fontFamily: ff.d, fontSize: "13px", color: C.text }}>RELLEDOMI</span>
            <span style={{ fontFamily: ff.m, fontSize: "8px", color: C.muted, letterSpacing: "0.08em" }}>/ WEBSITE BLUEPRINT</span>
          </div>
          <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                background: "none", border: "none",
                borderBottom: tab === t.id ? `2px solid ${C.kanga}` : "2px solid transparent",
                padding: "10px 14px 12px", cursor: "pointer",
                fontFamily: ff.m, fontSize: "9px", letterSpacing: "0.06em",
                color: tab === t.id ? C.text : C.muted, whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}>{t.label}</button>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px 20px 60px" }}>
        <Comp />
      </main>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "16px 20px", textAlign: "center" }}>
        <span style={{ fontFamily: ff.m, fontSize: "8px", color: C.dim, letterSpacing: "0.12em" }}>RELLEDOMI ENTERTAINMENT — WEBSITE BLUEPRINT v1.0 — KANGA & CHROME PALETTE</span>
      </footer>
    </div>
  );
}
