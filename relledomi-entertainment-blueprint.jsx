import { useState } from "react";

// ─── DESIGN SYSTEM ──────────────────────

const C = {
  bg: "#07070A", surface: "#0F0F14", surfaceAlt: "#15151C",
  accent: "#FF2D2D", accentGlow: "rgba(255,45,45,0.12)", accentSoft: "rgba(255,45,45,0.06)",
  gold: "#FFD600", goldGlow: "rgba(255,214,0,0.10)",
  green: "#00E676", greenGlow: "rgba(0,230,118,0.10)",
  blue: "#448AFF", blueGlow: "rgba(68,138,255,0.10)",
  purple: "#B388FF", purpleGlow: "rgba(179,136,255,0.10)",
  text: "#EEEEE8", muted: "#6B6B65", border: "#1E1E26", borderLight: "#2A2A34",
};

const font = {
  head: "'Bebas Neue', sans-serif",
  body: "'IBM Plex Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function Badge({ children, color = "red" }) {
  const map = {
    red: { bg: C.accentGlow, c: C.accent, b: "rgba(255,45,45,0.25)" },
    gold: { bg: C.goldGlow, c: C.gold, b: "rgba(255,214,0,0.2)" },
    green: { bg: C.greenGlow, c: C.green, b: "rgba(0,230,118,0.2)" },
    blue: { bg: C.blueGlow, c: C.blue, b: "rgba(68,138,255,0.2)" },
    purple: { bg: C.purpleGlow, c: C.purple, b: "rgba(179,136,255,0.2)" },
    muted: { bg: "rgba(107,107,101,0.08)", c: C.muted, b: "rgba(107,107,101,0.15)" },
  };
  const s = map[color] || map.red;
  return <span style={{ display: "inline-block", padding: "2px 9px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: s.bg, color: s.c, border: `1px solid ${s.b}`, borderRadius: "2px", fontFamily: font.mono }}>{children}</span>;
}

function Card({ title, children, accent, tag, noPad }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${accent ? "rgba(255,45,45,0.2)" : C.border}`, borderRadius: "8px", padding: noPad ? 0 : "24px", marginBottom: "14px", position: "relative", overflow: "hidden" }}>
      {accent && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, ${C.accent}, transparent 70%)` }} />}
      {(title || tag) && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px", padding: noPad ? "24px 24px 0" : 0 }}>{title && <h3 style={{ fontFamily: font.head, fontSize: "17px", letterSpacing: "0.05em", color: C.text, margin: 0 }}>{title}</h3>}{tag}</div>}
      {children}
    </div>
  );
}

function Stat({ label, value, sub, color = C.gold }) {
  return (
    <div style={{ textAlign: "center", padding: "16px" }}>
      <p style={{ fontFamily: font.head, fontSize: "28px", color, margin: "0 0 2px", letterSpacing: "0.02em" }}>{value}</p>
      <p style={{ fontSize: "10px", color: C.muted, margin: 0, fontFamily: font.mono, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</p>
      {sub && <p style={{ fontSize: "10px", color: C.muted, margin: "4px 0 0", fontFamily: font.body }}>{sub}</p>}
    </div>
  );
}

function ListItem({ icon, color, children }) {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "5px 0", fontSize: "12px", fontFamily: font.body, lineHeight: "1.6" }}>
      <span style={{ color: color || C.accent, flexShrink: 0, fontSize: "7px", marginTop: "6px" }}>{icon || "●"}</span>
      <span style={{ color: C.muted }}>{children}</span>
    </div>
  );
}

function SectionDivider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "32px 0 20px" }}>
      <div style={{ height: "1px", flex: 1, background: C.border }} />
      <span style={{ fontFamily: font.mono, fontSize: "9px", color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
      <div style={{ height: "1px", flex: 1, background: C.border }} />
    </div>
  );
}

// ─── NAVIGATION ──────────────────────

const sections = [
  { id: "agency", label: "THE AGENCY" },
  { id: "street", label: "STREET GAMES" },
  { id: "content", label: "CONTENT ENGINE" },
  { id: "growth", label: "GROWTH SYSTEM" },
  { id: "collabs", label: "COLLABORATIONS" },
  { id: "company", label: "COMPANY & LEGAL" },
  { id: "timeline", label: "ROLLOUT" },
];

// ─── 1. THE AGENCY ──────────────────────

function AgencySection() {
  return (
    <div>
      <div style={{ padding: "48px 0 36px", borderBottom: `1px solid ${C.border}`, marginBottom: "28px" }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
          <Badge color="red">Entertainment Agency</Badge>
          <Badge color="gold">Nairobi × US</Badge>
          <Badge color="muted">Content-First</Badge>
        </div>
        <h1 style={{ fontFamily: font.head, fontSize: "clamp(40px, 7vw, 64px)", color: C.text, margin: "0", letterSpacing: "0.01em", lineHeight: 0.95 }}>RELLEDOMI</h1>
        <p style={{ fontFamily: font.head, fontSize: "clamp(16px, 3vw, 22px)", color: C.accent, margin: "4px 0 0", letterSpacing: "0.06em" }}>ENTERTAINMENT</p>
        <p style={{ fontFamily: font.body, fontSize: "14px", color: C.muted, margin: "16px 0 0", maxWidth: "600px", lineHeight: "1.7" }}>
          An entertainment agency that creates, produces, and distributes street-level content and live activations across East Africa. We turn public spaces into stages, strangers into stars, and every event into a content engine.
        </p>
      </div>

      <Card title="AGENCY MODEL" accent>
        <p style={{ fontSize: "13px", lineHeight: "1.7", color: C.muted, margin: "0 0 20px", fontFamily: font.body }}>
          Relledomi Entertainment is not a single show — it's the production house behind multiple content properties. Street Games is the flagship. Everything else grows from the system it builds: the crew, the audience, the sponsor relationships, and the content machine.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {[
            { label: "ORIGINAL SHOWS", desc: "Create and own IP — Street Games is first, more formats follow", color: C.accent },
            { label: "BRAND ACTIVATIONS", desc: "Run custom street-level events for corporate clients", color: C.gold },
            { label: "CONTENT PRODUCTION", desc: "Film, edit, distribute — full content pipeline as a service", color: C.green },
            { label: "TALENT MANAGEMENT", desc: "Build and manage recurring stars who emerge from the shows", color: C.blue },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: item.color, marginBottom: "10px" }} />
              <p style={{ fontFamily: font.head, fontSize: "13px", color: C.text, margin: "0 0 6px", letterSpacing: "0.04em" }}>{item.label}</p>
              <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: font.body, lineHeight: "1.5" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <SectionDivider label="Brand Architecture" />

      <Card title="NAMING HIERARCHY">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ padding: "20px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid rgba(255,45,45,0.15)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ fontFamily: font.head, fontSize: "22px", color: C.text }}>RELLEDOMI ENTERTAINMENT</span>
              <Badge color="red">PARENT BRAND</Badge>
            </div>
            <p style={{ fontSize: "12px", color: C.muted, margin: 0, fontFamily: font.body }}>
              The agency. Appears on: legal documents, contracts, invoices, website domain (relledomi.com), Google Business Profile, YouTube channel name, email addresses, sponsorship decks, merch labels, end cards on all content.
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            <span style={{ color: C.accent, fontSize: "18px" }}>↓</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            {[
              { name: "STREET GAMES", badge: "SHOW #1", color: "gold", desc: "The flagship series. @streetgamesKE on IG/TikTok. 'Street Games by Relledomi' in full. This is what the audience follows.", handle: "@streetgamesKE" },
              { name: "SHOW #2 (TBD)", badge: "FUTURE", color: "muted", desc: "Second format — talent discovery, food battles, dating challenges, or whatever tests well. Same production system, new IP.", handle: "TBD" },
              { name: "AGENCY SERVICES", badge: "B2B", color: "blue", desc: "Brand activations, event production, content packages for corporate clients. Revenue without needing audience growth.", handle: "via relledomi.com" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "16px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
                <Badge color={item.color}>{item.badge}</Badge>
                <p style={{ fontFamily: font.head, fontSize: "16px", color: C.text, margin: "8px 0 6px" }}>{item.name}</p>
                <p style={{ fontSize: "11px", color: C.muted, margin: "0 0 8px", fontFamily: font.body, lineHeight: "1.5" }}>{item.desc}</p>
                <span style={{ fontFamily: font.mono, fontSize: "10px", color: C.accent }}>{item.handle}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <SectionDivider label="Visual Identity" />

      <Card title="BRAND SYSTEM">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          <div>
            <p style={{ fontSize: "10px", color: C.muted, margin: "0 0 12px", fontFamily: font.mono, letterSpacing: "0.1em" }}>COLOR SYSTEM</p>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                { c: "#FF2D2D", l: "PRIMARY" }, { c: "#FFD600", l: "ACCENT" },
                { c: "#07070A", l: "DARK" }, { c: "#EEEEE8", l: "LIGHT" },
              ].map((col, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "4px", background: col.c, border: col.c === "#07070A" ? `1px solid ${C.border}` : "none" }} />
                  <span style={{ fontSize: "7px", color: C.muted, fontFamily: font.mono, letterSpacing: "0.08em" }}>{col.l}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "10px", color: C.muted, margin: "0 0 12px", fontFamily: font.mono, letterSpacing: "0.1em" }}>TYPOGRAPHY</p>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontFamily: font.head, fontSize: "22px", color: C.text }}>BEBAS NEUE</span>
              <p style={{ fontSize: "9px", color: C.muted, fontFamily: font.mono, margin: "2px 0 0" }}>HEADLINES / TITLES</p>
            </div>
            <div>
              <span style={{ fontFamily: font.body, fontSize: "14px", color: C.text }}>IBM Plex Sans</span>
              <p style={{ fontSize: "9px", color: C.muted, fontFamily: font.mono, margin: "2px 0 0" }}>BODY / DESCRIPTIONS</p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: "10px", color: C.muted, margin: "0 0 12px", fontFamily: font.mono, letterSpacing: "0.1em" }}>TONE & VOICE</p>
            {["Confrontational — challenges the viewer", "Nairobi-raw — sheng, street cadence", "Game-show energy — stakes, drama, payoff", "Agency-professional — for B2B comms"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "6px", padding: "3px 0", fontSize: "11px" }}>
                <span style={{ color: C.accent, fontSize: "6px", marginTop: "5px" }}>●</span>
                <span style={{ color: C.muted, fontFamily: font.body }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="SOCIAL HANDLE MAP">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {[
            { platform: "INSTAGRAM", agency: "@relledomi", show: "@streetgamesKE" },
            { platform: "TIKTOK", agency: "@relledomi", show: "@streetgamesKE" },
            { platform: "YOUTUBE", agency: "Relledomi Entertainment", show: "Street Games (playlist/series)" },
            { platform: "TWITTER / X", agency: "@relledomi", show: "@streetgamesKE" },
            { platform: "WEBSITE", agency: "relledomi.com", show: "relledomi.com/streetgames" },
            { platform: "EMAIL", agency: "hello@relledomi.com", show: "streetgames@relledomi.com" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "12px", background: C.surfaceAlt, borderRadius: "4px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: font.mono, fontSize: "9px", color: C.muted, margin: "0 0 6px", letterSpacing: "0.08em" }}>{item.platform}</p>
              <p style={{ fontSize: "11px", color: C.text, margin: "0 0 2px", fontFamily: font.body }}>{item.agency}</p>
              <p style={{ fontSize: "10px", color: C.accent, margin: 0, fontFamily: font.mono }}>{item.show}</p>
            </div>
          ))}
        </div>
      </Card>

      <SectionDivider label="Revenue Model" />

      <Card title="REVENUE STREAMS">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            { stream: "SHOW SPONSORSHIPS", desc: "Brands pay to sponsor game segments, events, or entire series arcs within Street Games or future shows.", timeline: "MONTH 3+", size: "$$" },
            { stream: "BRAND ACTIVATIONS (B2B)", desc: "Companies hire Relledomi to produce custom street-level events. Safaricom wants a campus activation? You run it, film it, deliver content.", timeline: "MONTH 4+", size: "$$$" },
            { stream: "YOUTUBE ADSENSE", desc: "Long-form compilations and series content monetize through ads once you hit thresholds.", timeline: "MONTH 3-4", size: "$" },
            { stream: "TIKTOK / REELS MONETIZATION", desc: "Creator funds, brand partnerships, and sponsored content across short-form platforms.", timeline: "MONTH 2+", size: "$" },
            { stream: "CONTENT LICENSING", desc: "License clips to media outlets, compilation channels, or brands for their own marketing.", timeline: "MONTH 6+", size: "$$" },
            { stream: "MERCH", desc: "Winner gear, branded apparel, collectibles. Sold via US LLC for international shipping.", timeline: "MONTH 6+", size: "$" },
            { stream: "EVENT BOOKINGS", desc: "Universities, malls, and festivals pay Relledomi to bring Street Games to their venue.", timeline: "MONTH 4+", size: "$$" },
            { stream: "TALENT MANAGEMENT", desc: "Recurring fan-favorite contestants become managed talent — booked for other events, brand deals.", timeline: "MONTH 8+", size: "$$" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "14px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid ${C.border}`, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <p style={{ fontFamily: font.head, fontSize: "13px", color: C.text, margin: 0, letterSpacing: "0.04em" }}>{item.stream}</p>
                <div style={{ display: "flex", gap: "4px" }}>
                  <Badge color="muted">{item.timeline}</Badge>
                  <Badge color="gold">{item.size}</Badge>
                </div>
              </div>
              <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: font.body, lineHeight: "1.5", flex: 1 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 2. STREET GAMES ──────────────────────

function StreetGamesSection() {
  const games = [
    { name: "LAST ONE STANDING", type: "PHYSICAL", players: "5-10", time: "3 min", desc: "Musical chairs variant. Music plays, players walk a circle. When it stops — last to reach a safe zone is out. Final two do a 1v1 dare.", viral: "Elimination reactions — shock, celebration, crowd going wild." },
    { name: "PRICE IS RIGHT (NAIROBI)", type: "MENTAL", players: "3-5", time: "2 min", desc: "Show common items — chapati, airtime, Uber ride. Players guess the exact price. Closest without going over wins.", viral: "Comment bait — everyone watching has an opinion on the price." },
    { name: "STACK OR CRACK", type: "SKILL", players: "2 H2H", time: "60 sec", desc: "Stack objects as high as possible in 60 seconds. Tower falls = start over. Tallest stack when the buzzer hits wins.", viral: "The wobble before a fall is content gold. Satisfying destruction = rewatch loops." },
    { name: "TRIVIA GAUNTLET", type: "MENTAL", players: "1 rotating", time: "90 sec", desc: "Rapid-fire trivia — pop culture, Nairobi knowledge, memes, trending topics. Get 3 wrong, you're out.", viral: "Wrong answers = comedy. People tagging friends — 'you'd fail question 2'." },
    { name: "THE HANDSHAKE", type: "SOCIAL", players: "2 strangers", time: "2 min", desc: "Two strangers must learn and perform a complex handshake routine. Judged by the crowd on sync and style.", viral: "Wholesome + funny. Duet potential — people trying it at home." },
    { name: "HOLD YOUR NERVE", type: "ENDURANCE", players: "3-6", time: "Open", desc: "Hold a position (plank, wall sit, arm extended). Last one holding wins. Crowd encouraged to distract.", viral: "The collapse moment — pure meme material." },
  ];

  return (
    <div>
      <div style={{ marginBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <Badge color="gold">SHOW #1</Badge>
          <Badge color="red">FLAGSHIP</Badge>
        </div>
        <h2 style={{ fontFamily: font.head, fontSize: "36px", color: C.text, margin: "0 0 4px" }}>STREET GAMES</h2>
        <p style={{ fontFamily: font.mono, fontSize: "11px", color: C.muted, margin: "0 0 16px", letterSpacing: "0.06em" }}>BY RELLEDOMI ENTERTAINMENT</p>
        <p style={{ fontSize: "14px", lineHeight: "1.7", color: C.muted, fontFamily: font.body, maxWidth: "700px" }}>
          Mini-games at high-traffic zones across Nairobi. Universities, CBD, malls, matatu stages. Players compete, crowds gather, cameras roll. Every game is content. Every contestant becomes a distributor. The street is the set.
        </p>
      </div>

      <Card title="LOCATIONS ROTATION" accent>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {[
            { zone: "UNIVERSITIES", spots: "UoN, KU, JKUAT, Strathmore, USIU, MKU", why: "Captive audience, high energy, shareable demographics" },
            { zone: "CBD HOTSPOTS", spots: "Kencom, Archives, Jevanjee Gardens, Moi Avenue", why: "Maximum foot traffic, diverse demographics, lunch hour crowds" },
            { zone: "MALLS & MARKETS", spots: "Garden City, TRM, Two Rivers, Maasai Market", why: "Built-in venue, security, potential venue sponsorship" },
          ].map((loc, i) => (
            <div key={i} style={{ padding: "14px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: font.head, fontSize: "13px", color: C.accent, margin: "0 0 6px" }}>{loc.zone}</p>
              <p style={{ fontSize: "11px", color: C.text, margin: "0 0 6px", fontFamily: font.body }}>{loc.spots}</p>
              <p style={{ fontSize: "10px", color: C.muted, margin: 0, fontFamily: font.body, fontStyle: "italic" }}>{loc.why}</p>
            </div>
          ))}
        </div>
      </Card>

      <SectionDivider label="Game Formats" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        {games.map((game, i) => (
          <Card key={i} title={game.name} tag={<div style={{ display: "flex", gap: "4px" }}><Badge color="red">{game.type}</Badge><Badge color="muted">{game.players}</Badge><Badge color="gold">{game.time}</Badge></div>}>
            <p style={{ fontSize: "12px", lineHeight: "1.6", color: C.muted, margin: "0 0 10px", fontFamily: font.body }}>{game.desc}</p>
            <div style={{ padding: "8px 10px", background: C.surfaceAlt, borderRadius: "4px" }}>
              <p style={{ fontSize: "9px", color: C.accent, margin: "0 0 2px", fontFamily: font.mono, letterSpacing: "0.08em" }}>VIRAL MECHANIC</p>
              <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: font.body }}>{game.viral}</p>
            </div>
          </Card>
        ))}
      </div>

      <SectionDivider label="Production Setup" />

      <Card title="MINIMUM VIABLE PRODUCTION">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
          <div>
            <p style={{ fontFamily: font.mono, fontSize: "9px", color: C.accent, margin: "0 0 8px", letterSpacing: "0.08em" }}>CAMERA 1 — WIDE</p>
            <p style={{ fontSize: "12px", color: C.muted, fontFamily: font.body, lineHeight: "1.6", margin: 0 }}>Phone on tripod. Full game + crowd. Feeds the YouTube edit.</p>
          </div>
          <div>
            <p style={{ fontFamily: font.mono, fontSize: "9px", color: C.accent, margin: "0 0 8px", letterSpacing: "0.08em" }}>CAMERA 2 — ROAMING</p>
            <p style={{ fontSize: "12px", color: C.muted, fontFamily: font.body, lineHeight: "1.6", margin: 0 }}>Handheld phone. Reactions, faces, tension. Feeds the Reels/TikToks.</p>
          </div>
          <div>
            <p style={{ fontFamily: font.mono, fontSize: "9px", color: C.accent, margin: "0 0 8px", letterSpacing: "0.08em" }}>AUDIO</p>
            <p style={{ fontSize: "12px", color: C.muted, fontFamily: font.body, lineHeight: "1.6", margin: 0 }}>Wireless lapel on host. Natural crowd from phone mics. Sound FX added in post.</p>
          </div>
        </div>
        <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {[
            { item: "2 smartphones", cost: "Owned" },
            { item: "Mini tripod", cost: "KSh 1,500" },
            { item: "Wireless mic", cost: "KSh 3,000" },
            { item: "BT speaker", cost: "KSh 2,000" },
            { item: "Red branded tape", cost: "KSh 500" },
            { item: "Player bibs", cost: "KSh 1,000" },
            { item: "Prizes/event", cost: "KSh 2,000" },
            { item: "Transport/event", cost: "KSh 1,000" },
          ].map((row, i) => (
            <div key={i} style={{ padding: "8px 10px", background: C.surfaceAlt, borderRadius: "4px", display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
              <span style={{ color: C.muted, fontFamily: font.body }}>{row.item}</span>
              <span style={{ color: C.gold, fontFamily: font.mono, fontSize: "10px" }}>{row.cost}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 3. CONTENT ENGINE ──────────────────────

function ContentSection() {
  return (
    <div>
      <h2 style={{ fontFamily: font.head, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>CONTENT ENGINE</h2>

      <Card title="THE 1-TO-MANY RULE" accent>
        <p style={{ fontSize: "14px", color: C.text, margin: "0 0 16px", fontFamily: font.body, lineHeight: "1.7" }}>
          Every single Street Games session produces a minimum of 8 pieces of content. One event is never one video. This is the engine that makes Relledomi an agency, not just a show.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {[
            { platform: "YOUTUBE", format: "Full game compilation (5-10 min)", qty: "1" },
            { platform: "YOUTUBE SHORTS", format: "Best single moment", qty: "1" },
            { platform: "TIKTOK / REELS", format: "Individual game highlights (30-60s)", qty: "3" },
            { platform: "TIKTOK / REELS", format: "Reactions / fails / crowd moments", qty: "2" },
            { platform: "STORIES", format: "BTS, teasers, polls, reveals", qty: "5+" },
            { platform: "CAROUSEL", format: "Winner spotlight + stats + next event", qty: "1" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "12px", background: C.surfaceAlt, borderRadius: "4px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontFamily: font.mono, fontSize: "9px", color: C.accent, letterSpacing: "0.06em" }}>{item.platform}</span>
                <span style={{ fontFamily: font.head, fontSize: "14px", color: C.gold }}>×{item.qty}</span>
              </div>
              <span style={{ fontSize: "11px", color: C.muted, fontFamily: font.body }}>{item.format}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="WEEKLY CONTENT RHYTHM">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {[
            { day: "EVENT DAY", task: "Film 2-3 hrs. Capture all raw footage. Go live once. Drop stories during setup.", color: C.accent },
            { day: "DAY AFTER", task: "Post best Reel/TikTok while energy is fresh. 2-3 stories with polls ('who should've won?').", color: C.gold },
            { day: "DAYS 2-4", task: "Drip remaining Reels (1/day). Edit YouTube video. Post carousel recap.", color: C.green },
            { day: "DAYS 5-7", task: "YouTube drops. Reply to every comment. Tag contestants. Tease next week's location.", color: C.blue },
          ].map((item, i) => (
            <div key={i} style={{ padding: "14px", background: C.surfaceAlt, borderRadius: "6px", borderTop: `2px solid ${item.color}` }}>
              <p style={{ fontFamily: font.head, fontSize: "13px", color: item.color, margin: "0 0 8px" }}>{item.day}</p>
              <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: font.body, lineHeight: "1.5" }}>{item.task}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="PLATFORM STRATEGY">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { platform: "TIKTOK", role: "DISCOVERY", desc: "Most chaotic clips. Trending sounds. Sheng captions. 4-5x/week. This is where strangers find you.", kpi: "Views, follower growth" },
            { platform: "INSTAGRAM", role: "COMMUNITY", desc: "Polished cuts. Stories for engagement. DMs for contestants. Core community hub.", kpi: "Saves, shares, DM volume" },
            { platform: "YOUTUBE", role: "MONETIZATION", desc: "Full compilations, season recaps, BTS. Builds brand story. Unlocks AdSense.", kpi: "Watch time, subscribers, revenue" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: font.head, fontSize: "15px", color: C.text, margin: "0 0 2px" }}>{item.platform}</p>
              <Badge color="gold">{item.role}</Badge>
              <p style={{ fontSize: "11px", color: C.muted, margin: "10px 0 8px", fontFamily: font.body, lineHeight: "1.5" }}>{item.desc}</p>
              <p style={{ fontSize: "9px", color: C.accent, margin: 0, fontFamily: font.mono }}>KPI: {item.kpi}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 4. GROWTH SYSTEM ──────────────────────

function GrowthSection() {
  return (
    <div>
      <h2 style={{ fontFamily: font.head, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>GROWTH SYSTEM</h2>

      <Card title="FIVE VIRAL LOOPS" accent>
        {[
          { loop: "CONTESTANT-AS-DISTRIBUTOR", desc: "Every player shares their clip to their network. Tag them → they repost → their 300 followers see Street Games → some show up next time.", metric: "100-500 organic impressions per contestant" },
          { loop: "CROWD-AS-CONTENT", desc: "Film the crowd reacting. People see themselves → share → their friends discover the event exists.", metric: "10-30 crowd tags per event" },
          { loop: "COMMENT BAIT FORMATS", desc: "Games that create opinion splits. Price guessing, trivia answers, 'who deserved to win' polls. Every argument = algorithm fuel.", metric: "100+ comments per Reel within 48hrs" },
          { loop: "LOCATION FOMO", desc: "Announce next location 3 days before. People at that campus share: 'Street Games is coming to UoN!' Geographic FOMO drives local followership.", metric: "Location reveals get 2-3x normal engagement" },
          { loop: "RETURNING CHAMPIONS", desc: "Track winners. Public leaderboard. Champions build narrative arcs — 'will they win again?' becomes appointment viewing.", metric: "Returning players drive 20-40% higher viewership" },
        ].map((item, i) => (
          <div key={i} style={{ padding: "14px 16px", background: i % 2 === 0 ? C.surfaceAlt : "transparent", borderRadius: "4px", marginBottom: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: font.head, fontSize: "13px", color: C.accent, margin: "0 0 4px", letterSpacing: "0.04em" }}>LOOP {i + 1} — {item.loop}</p>
                <p style={{ fontSize: "12px", color: C.muted, margin: 0, fontFamily: font.body, lineHeight: "1.6" }}>{item.desc}</p>
              </div>
              <div style={{ padding: "4px 8px", background: C.goldGlow, borderRadius: "2px", border: `1px solid rgba(255,214,0,0.15)`, flexShrink: 0 }}>
                <span style={{ fontSize: "9px", color: C.gold, fontFamily: font.mono }}>{item.metric}</span>
              </div>
            </div>
          </div>
        ))}
      </Card>

      <Card title="GROWTH TARGETS">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          <Stat label="Months 1-2" value="1-3K" sub="followers, proof of concept" />
          <Stat label="Months 3-4" value="5-15K" sub="+ first brand deal" />
          <Stat label="Months 5-6" value="20-50K" sub="+ YouTube monetized" />
          <Stat label="Months 7-12" value="100K+" sub="+ second city expansion" />
        </div>
      </Card>
    </div>
  );
}

// ─── 5. COLLABORATIONS ──────────────────────

function CollabsSection() {
  const brands = [
    { name: "SAFARICOM (HOOK)", country: "KE", type: "TELCO", fit: "Hook platform runs campus activations, gaming events, youth content. They held a gaming conference at KICC in 2025. Street Games is exactly what they fund.", ask: "KSh 50-200K/event, branded game segments, data bundle prizes, M-PESA integration" },
    { name: "COCA-COLA KENYA", country: "KE", type: "FMCG", fit: "Run campus activations constantly — Share a Coke at JKUAT in 2025. Investing in 'third spaces' for Gen Z. Street Games IS that space.", ask: "Product supply, branded game zones, co-branded content, cash sponsorship for series" },
    { name: "EABL / TUSKER", country: "KE", type: "BEVERAGE", fit: "Sponsors OktobaFest, music festivals, campus tours. KSh 30M Safaricom co-activation. Want cultural touchpoints with 18-30s.", ask: "Named game segment ('Tusker Challenge'), event co-sponsorship, product supply (18+ events)" },
    { name: "RED BULL", country: "GLOBAL", type: "ENERGY", fit: "Invented brand-as-content. Sponsors street culture globally. Limited grassroots activation in East Africa.", ask: "Product supply, content licensing to Red Bull channels, production support, venue access" },
    { name: "NIKE / ADIDAS (EA)", country: "GLOBAL", type: "SPORTSWEAR", fit: "Building presence in African youth culture. Physical challenges + street aesthetic = product placement.", ask: "In-kind gear for contestants/winners, branded prize packages, co-branded merch capsule" },
    { name: "GARDEN CITY / TRM", country: "KE", type: "VENUE", fit: "Malls need foot traffic. You bring crowds + content tagging their location. Win-win.", ask: "Free venue space, co-marketing, security support" },
    { name: "UBER / BOLT KE", country: "GLOBAL", type: "RIDESHARE", fit: "Promo codes tied to events = measurable ROI. Both competing hard in Nairobi.", ask: "Promo codes as prizes, branded transport, conversion data sharing" },
    { name: "NCBA BANK", country: "KE", type: "BANKING", fit: "Youth-focused sponsorships, campus initiatives. Want to reach next generation of account holders.", ask: "Branded trivia segments, campus co-activation, student banking integration" },
  ];

  return (
    <div>
      <h2 style={{ fontFamily: font.head, fontSize: "28px", color: C.text, margin: "0 0 8px" }}>COLLABORATION TARGETS</h2>
      <p style={{ fontSize: "13px", color: C.muted, margin: "0 0 24px", fontFamily: font.body }}>Run 2-3 events first, build proof, then pitch with numbers. Start with in-kind deals before chasing cash.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        {brands.map((b, i) => (
          <Card key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
              <p style={{ fontFamily: font.head, fontSize: "16px", color: C.text, margin: 0 }}>{b.name}</p>
              <div style={{ display: "flex", gap: "4px" }}>
                <Badge color={b.country === "KE" ? "green" : "blue"}>{b.country}</Badge>
                <Badge color="muted">{b.type}</Badge>
              </div>
            </div>
            <p style={{ fontSize: "11px", color: C.muted, margin: "0 0 8px", fontFamily: font.body, lineHeight: "1.5" }}>{b.fit}</p>
            <div style={{ padding: "8px 10px", background: C.surfaceAlt, borderRadius: "4px" }}>
              <p style={{ fontSize: "9px", color: C.gold, margin: "0 0 2px", fontFamily: font.mono, letterSpacing: "0.06em" }}>ASK</p>
              <p style={{ fontSize: "10px", color: C.muted, margin: 0, fontFamily: font.body }}>{b.ask}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── 6. COMPANY & LEGAL ──────────────────────

function CompanySection() {
  return (
    <div>
      <h2 style={{ fontFamily: font.head, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>COMPANY & LEGAL STRUCTURE</h2>

      <Card title="DUAL-ENTITY SETUP" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div style={{ padding: "20px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid rgba(68,138,255,0.2)` }}>
            <Badge color="blue">UNITED STATES</Badge>
            <h4 style={{ fontFamily: font.head, fontSize: "20px", color: C.text, margin: "10px 0 8px" }}>RELLEDOMI ENTERTAINMENT LLC</h4>
            <p style={{ fontSize: "12px", color: C.muted, margin: "0 0 10px", fontFamily: font.body, lineHeight: "1.6" }}>Rhode Island LLC. Handles digital revenue (AdSense, TikTok, US brand deals, merch), content operations, and your personal income.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {["Filing: $156 (Articles of Organization)", "EIN: Free from IRS", "Annual: $400 min tax + $50 report", "Bank: Mercury, Relay, or local RI bank", "Timeline: Same week"].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "6px", fontSize: "10px", fontFamily: font.mono, color: C.muted }}>
                  <span style={{ color: C.blue }}>→</span>{s}
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: "20px", background: C.surfaceAlt, borderRadius: "6px", border: `1px solid rgba(0,230,118,0.2)` }}>
            <Badge color="green">KENYA</Badge>
            <h4 style={{ fontFamily: font.head, fontSize: "20px", color: C.text, margin: "10px 0 8px" }}>RELLEDOMI ENTERTAINMENT LTD</h4>
            <p style={{ fontSize: "12px", color: C.muted, margin: "0 0 10px", fontFamily: font.body, lineHeight: "1.6" }}>Private Limited Company. Handles local operations, Kenya sponsorships, crew payments, event permits, M-PESA till.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {["Registration: ~KSh 10,650 via eCitizen", "KRA PIN: Free (consolidated with CR1)", "County permit: KSh 5-15K", "Bank: Equity, KCB, or NCBA", "Timeline: 3-7 working days"].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "6px", fontSize: "10px", fontFamily: font.mono, color: C.muted }}>
                  <span style={{ color: C.green }}>→</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card title="TRADEMARK STRATEGY">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div style={{ padding: "14px", background: C.surfaceAlt, borderRadius: "6px" }}>
            <Badge color="green">KENYA — KIPI</Badge>
            <p style={{ fontSize: "11px", color: C.muted, margin: "8px 0 0", fontFamily: font.body, lineHeight: "1.5" }}>File 'RELLEDOMI' + 'STREET GAMES BY RELLEDOMI' in Class 41. ~USD 850-1,150. Timeline: 6-10 months.</p>
          </div>
          <div style={{ padding: "14px", background: C.surfaceAlt, borderRadius: "6px" }}>
            <Badge color="blue">US — USPTO</Badge>
            <p style={{ fontSize: "11px", color: C.muted, margin: "8px 0 0", fontFamily: font.body, lineHeight: "1.5" }}>File 'RELLEDOMI' in Class 41 via TEAS Plus. ~$250/class. Intent-to-use if not yet in US commerce. Timeline: 8-12 months.</p>
          </div>
        </div>
      </Card>

      <Card title="TAX & COMPLIANCE ESSENTIALS">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div style={{ padding: "14px", background: C.surfaceAlt, borderRadius: "6px" }}>
            <p style={{ fontFamily: font.head, fontSize: "13px", color: C.blue, margin: "0 0 8px" }}>US OBLIGATIONS</p>
            {["RI min annual tax: $400", "Federal pass-through to personal return", "Self-employment tax: 15.3%", "FBAR if Kenya accounts > $10K aggregate", "FATCA Form 8938 if foreign assets > $50K", "Annual report: $50 (due Nov 1)"].map((s, i) => (
              <ListItem key={i} color={C.blue}>{s}</ListItem>
            ))}
          </div>
          <div style={{ padding: "14px", background: C.surfaceAlt, borderRadius: "6px" }}>
            <p style={{ fontFamily: font.head, fontSize: "13px", color: C.green, margin: "0 0 8px" }}>KENYA OBLIGATIONS</p>
            {["Corporate tax: 30% on profits", "VAT: 16% if turnover > KSh 5M/yr", "Withholding tax on non-resident payments", "PAYE if hiring salaried employees", "Annual returns to Registrar", "Monthly/quarterly KRA filings via iTax"].map((s, i) => (
              <ListItem key={i} color={C.green}>{s}</ListItem>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "12px", padding: "12px", background: C.accentSoft, borderRadius: "4px", border: `1px solid rgba(255,45,45,0.15)` }}>
          <p style={{ fontSize: "11px", color: C.accent, margin: 0, fontFamily: font.mono }}>GET A CPA when combined revenue crosses ~$10K or Kenya account nears $10K. Budget $500-1,500/yr. Non-filing penalties start at $10K.</p>
        </div>
      </Card>

      <Card title="TOTAL STARTUP COST">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          <Stat label="US LLC + EIN" value="$156" color={C.blue} sub="one-time" />
          <Stat label="Kenya Ltd + permits" value="~$220" color={C.green} sub="one-time" />
          <Stat label="Trademarks (both)" value="~$1,350" color={C.gold} sub="both countries" />
        </div>
        <div style={{ textAlign: "center", padding: "16px", background: C.accentGlow, borderRadius: "6px", border: `1px solid rgba(255,45,45,0.2)`, marginTop: "12px" }}>
          <p style={{ fontFamily: font.head, fontSize: "28px", color: C.accent, margin: "0 0 2px" }}>~$1,726 TOTAL</p>
          <p style={{ fontSize: "10px", color: C.muted, margin: 0, fontFamily: font.mono }}>BOTH ENTITIES + TRADEMARKS — FULLY OPERATIONAL</p>
        </div>
      </Card>
    </div>
  );
}

// ─── 7. ROLLOUT TIMELINE ──────────────────────

function TimelineSection() {
  const phases = [
    { phase: "PRE-LAUNCH", time: "WK 1-2", color: C.accent, items: [
      "Register Relledomi Entertainment LLC (Rhode Island)", "Get EIN + open US bank account", "Claim all social handles (@relledomi, @streetgamesKE)", "Set up YouTube channel as 'Relledomi Entertainment'", "Identify Kenya local rep / camera operator", "Draft operating agreement",
    ]},
    { phase: "KENYA SETUP", time: "WK 2-4", color: C.green, items: [
      "Name search + register Relledomi Entertainment Ltd on eCitizen", "Receive Certificate of Incorporation", "KRA PIN via iTax", "Open KE business bank account + M-PESA till", "County business permit", "Set up Wise Business for inter-company transfers",
    ]},
    { phase: "PROOF OF CONCEPT", time: "WK 4-6", color: C.gold, items: [
      "Run 2-3 test events with friends — film everything", "Edit + post first content batch (Reels, TikTok, YouTube)", "File KIPI trademark search (TM27) for RELLEDOMI", "File Kenya trademark applications", "Refine game formats based on what films best", "Build initial audience (target: 500 followers)",
    ]},
    { phase: "CAMPUS BLITZ", time: "WK 6-12", color: C.blue, items: [
      "Hit 2 universities per week (UoN, KU, JKUAT, Strathmore, USIU)", "Post content daily — follow the weekly rhythm", "Collect contestant handles, tag everyone, build community", "Connect AdSense to US LLC bank account", "Build sponsorship deck with real metrics", "Target: 1-3K followers by end of month 2",
    ]},
    { phase: "MONETIZE", time: "MO 3-4", color: C.purple, items: [
      "Pitch Safaricom Hook, Coca-Cola KE, EABL with proof deck", "First brand deal signed through Kenya entity", "File US trademark (RELLEDOMI) at USPTO", "YouTube monetization threshold (1K subs, 4K hrs)", "Launch tournament arc format — multi-week storyline", "Find international CPA for dual-entity tax",
    ]},
    { phase: "SCALE", time: "MO 5-12", color: C.accent, items: [
      "Multiple sponsors running concurrently", "Hire second camera operator", "Launch merch via US LLC", "Expand to CBD, malls, markets beyond campuses", "Start taking paid event bookings (agency model)", "Explore second show format", "Evaluate Mombasa / Kisumu expansion", "Target: 50-100K followers by month 12",
    ]},
  ];

  return (
    <div>
      <h2 style={{ fontFamily: font.head, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>MASTER ROLLOUT</h2>
      {phases.map((p, pi) => (
        <div key={pi} style={{ marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color }} />
            <span style={{ fontFamily: font.head, fontSize: "16px", color: C.text, letterSpacing: "0.04em" }}>{p.phase}</span>
            <Badge color={p.color === C.accent ? "red" : p.color === C.green ? "green" : p.color === C.gold ? "gold" : p.color === C.blue ? "blue" : "purple"}>{p.time}</Badge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginLeft: "20px" }}>
            {p.items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", padding: "8px 12px", background: C.surface, borderRadius: "4px", border: `1px solid ${C.border}`, fontSize: "11px", fontFamily: font.body, color: C.muted, alignItems: "center" }}>
                <span style={{ color: p.color, fontSize: "6px" }}>●</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN APP ──────────────────────

export default function RelledomiBlueprint() {
  const [active, setActive] = useState("agency");
  const render = { agency: AgencySection, street: StreetGamesSection, content: ContentSection, growth: GrowthSection, collabs: CollabsSection, company: CompanySection, timeline: TimelineSection };
  const Content = render[active];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font.body }}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(7,7,10,0.94)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}`, padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", maxWidth: "1100px", margin: "0 auto", overflowX: "auto", gap: "0" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginRight: "20px", padding: "12px 0", flexShrink: 0 }}>
            <span style={{ fontFamily: font.head, fontSize: "15px", color: C.accent, letterSpacing: "0.03em" }}>RELLEDOMI</span>
            <span style={{ fontFamily: font.mono, fontSize: "8px", color: C.muted, letterSpacing: "0.1em" }}>ENT.</span>
          </div>
          {sections.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              background: "none", border: "none",
              borderBottom: active === s.id ? `1.5px solid ${C.accent}` : "1.5px solid transparent",
              color: active === s.id ? C.text : C.muted,
              fontFamily: font.mono, fontSize: "9.5px", letterSpacing: "0.08em",
              padding: "13px 11px", cursor: "pointer", whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px 20px" }}>
        <Content />
      </main>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "20px", textAlign: "center" }}>
        <span style={{ fontFamily: font.mono, fontSize: "9px", color: C.muted, letterSpacing: "0.1em" }}>
          RELLEDOMI ENTERTAINMENT — AGENCY BLUEPRINT v2.0
        </span>
      </footer>
    </div>
  );
}
