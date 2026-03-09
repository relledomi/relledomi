import { useState } from "react";

const ff = {
  d: "'Archivo Black', sans-serif",
  b: "'DM Sans', sans-serif",
  m: "'IBM Plex Mono', monospace",
};

// ─── ALL PALETTES ──────────────────────
// Vestigium palettes 01-13 (excluding original 5 core swatches)
// + New Relledomi-specific palettes

const palettes = [
  // === VESTIGIUM ORIGINAL SEVEN ===
  {
    num: "01", name: "The High-Voltage Shrine", origin: "VESTIGIUM",
    sub: "Power & Ritual — Sacred vermilion meets Maasai bravery red",
    colors: [
      { bg: "#1C1C1C", fg: "#fff", name: "Sumikuro", hex: "#1C1C1C" },
      { bg: "#E1291A", fg: "#fff", name: "Maasai Red", hex: "#E1291A" },
      { bg: "#FF3500", fg: "#fff", name: "Shu-iro", hex: "#FF3500" },
      { bg: "#FFFFFF", fg: "#1C1C1C", name: "Shiro", hex: "#FFFFFF" },
    ],
    bars: ["#1C1C1C", "#E1291A", "#FF3500"],
    uses: ["Posters", "Danger States", "Launch"],
  },
  {
    num: "02", name: "Electric Indigo Savannah", origin: "VESTIGIUM",
    sub: "Depth & Energy — Aizome indigo with Kenyan sky voltage",
    colors: [
      { bg: "#191B56", fg: "#00CDF8", name: "Japan Blue", hex: "#191B56" },
      { bg: "#00CDF8", fg: "#191B56", name: "Electric Cyan", hex: "#00CDF8" },
      { bg: "#0F24D7", fg: "#00CDF8", name: "Sky Energy", hex: "#0F24D7" },
      { bg: "#C8C573", fg: "#191B56", name: "Silver Mist", hex: "#C8C573" },
    ],
    bars: ["#191B56", "#0F24D7", "#00CDF8"],
    uses: ["Web App", "Night Mode", "Digital"],
  },
  {
    num: "03", name: "The Golden Circuit", origin: "VESTIGIUM",
    sub: "Hospitality & Wealth — Yamabuki gold meets clay earth",
    colors: [
      { bg: "#FE9600", fg: "#373737", name: "Yamabuki-iro", hex: "#FE9600" },
      { bg: "#934337", fg: "#FE9600", name: "Kakishibu", hex: "#934337" },
      { bg: "#03C395", fg: "#373737", name: "Digital Teal", hex: "#03C395" },
      { bg: "#373737", fg: "#FE9600", name: "Charcoal", hex: "#373737" },
    ],
    bars: ["#373737", "#934337", "#03C395"],
    uses: ["Merch", "Tier 2", "Warm Contexts"],
  },
  {
    num: "04", name: "Neon Moss", origin: "VESTIGIUM",
    sub: "Growth & Wisdom — Uguisu moss with acid digital lime",
    colors: [
      { bg: "#7FAB4F", fg: "#EEE7D7", name: "Uguisu", hex: "#7FAB4F" },
      { bg: "#72FF47", fg: "#63307A", name: "Acid Lime", hex: "#72FF47" },
      { bg: "#63307A", fg: "#72FF47", name: "Noble Purple", hex: "#63307A" },
      { bg: "#EEE7D7", fg: "#63307A", name: "Shiracha", hex: "#EEE7D7" },
    ],
    bars: ["#EEE7D7", "#7FAB4F", "#72FF47"],
    uses: ["Success States", "Decode Screens", "Spring"],
  },
  {
    num: "05", name: "Volcanic Rust", origin: "VESTIGIUM",
    sub: "Tectonic Shift — Sabi-shu patina with rift valley earth",
    colors: [
      { bg: "#7E352C", fg: "#C58B43", name: "Sabi-shu", hex: "#7E352C" },
      { bg: "#C58B43", fg: "#7E352C", name: "Rift Ochre", hex: "#C58B43" },
      { bg: "#FF00FF", fg: "#0A0A0A", name: "Neon Magenta", hex: "#FF00FF" },
      { bg: "#8E8E8E", fg: "#0A0A0A", name: "Cold Concrete", hex: "#8E8E8E" },
    ],
    bars: ["#7E352C", "#C58B43", "#FF00FF"],
    uses: ["Error States", "Tier 3", "Grunge"],
  },
  {
    num: "06", name: "Bamboo & Cyber-Solar", origin: "VESTIGIUM",
    sub: "Photosynthesis — Take-iro bamboo with savannah sun",
    colors: [
      { bg: "#4B5E3B", fg: "#CCFF00", name: "Take-iro", hex: "#4B5E3B" },
      { bg: "#FDB813", fg: "#4B5E3B", name: "Savannah Sun", hex: "#FDB813" },
      { bg: "#CCFF00", fg: "#4B5E3B", name: "Cyber Lime", hex: "#CCFF00" },
      { bg: "#F3E5AB", fg: "#4B5E3B", name: "Washi Paper", hex: "#F3E5AB" },
    ],
    bars: ["#F3E5AB", "#4B5E3B", "#CCFF00"],
    uses: ["Daytime Reels", "Outdoor", "Print Variant"],
  },
  {
    num: "07", name: "Night Market", origin: "VESTIGIUM",
    sub: "Midnight Sakura — Pale pink glow against deep ultraviolet",
    colors: [
      { bg: "#FDC9C9", fg: "#4B0082", name: "Sakura", hex: "#FDC9C9" },
      { bg: "#4B0082", fg: "#FDC9C9", name: "Deep Violet", hex: "#4B0082" },
      { bg: "#9D00FF", fg: "#0B0B0B", name: "Ultraviolet", hex: "#9D00FF" },
      { bg: "#0B0B0B", fg: "#9D00FF", name: "Obsidian", hex: "#0B0B0B" },
    ],
    bars: ["#0B0B0B", "#4B0082", "#9D00FF"],
    uses: ["Final Stage", "Midnight Events", "Premium"],
  },

  // === VESTIGIUM EXPANSION ===
  {
    num: "08", name: "Swahili Coast Silver", origin: "VESTIGIUM",
    sub: "Cold Tide — Mombasa sea steel with monsoon mist and reef neon",
    colors: [
      { bg: "#1B2530", fg: "#A8C4D4", name: "Bahari Deep", hex: "#1B2530" },
      { bg: "#A8C4D4", fg: "#1B2530", name: "Monsoon Mist", hex: "#A8C4D4" },
      { bg: "#00FFE0", fg: "#1B2530", name: "Reef Neon", hex: "#00FFE0" },
      { bg: "#D4D0CC", fg: "#1B2530", name: "Coral Stone", hex: "#D4D0CC" },
    ],
    bars: ["#1B2530", "#A8C4D4", "#00FFE0"],
    uses: ["Coastal Drops", "Chill UI", "Winter"],
  },
  {
    num: "09", name: "Ink & Bone", origin: "VESTIGIUM",
    sub: "Monochrome Razor — Sumi ink discipline with one surgical red cut",
    colors: [
      { bg: "#0C0C0C", fg: "#F0EDE8", name: "Sumi Black", hex: "#0C0C0C" },
      { bg: "#F0EDE8", fg: "#0C0C0C", name: "Washi White", hex: "#F0EDE8" },
      { bg: "#FF003C", fg: "#0C0C0C", name: "Slash Red", hex: "#FF003C" },
      { bg: "#2A2A2A", fg: "#F0EDE8", name: "Charcoal", hex: "#2A2A2A" },
    ],
    bars: ["#0C0C0C", "#2A2A2A", "#FF003C"],
    uses: ["Editorial", "Typography Focus", "Minimalist Print"],
  },
  {
    num: "10", name: "Savannah Starfield", origin: "VESTIGIUM",
    sub: "Earth & Celestial — Tsavo dust under the Milky Way at midnight",
    colors: [
      { bg: "#1A120B", fg: "#E8D5B8", name: "Tsavo Night", hex: "#1A120B" },
      { bg: "#E8D5B8", fg: "#1A120B", name: "Savannah Dust", hex: "#E8D5B8" },
      { bg: "#4169E1", fg: "#E8D5B8", name: "Starfield Blue", hex: "#4169E1" },
      { bg: "#FFD700", fg: "#1A120B", name: "Southern Cross", hex: "#FFD700" },
    ],
    bars: ["#1A120B", "#E8D5B8", "#4169E1"],
    uses: ["Lore Videos", "Story Mode", "Nighttime Reels"],
  },
  {
    num: "11", name: "Horizon Burn", origin: "VESTIGIUM",
    sub: "First Light — Nairobi dawn from Uhuru Gardens, pre-dawn to gold",
    colors: [
      { bg: "#2B1B3D", fg: "#FFB380", name: "Pre-Dawn", hex: "#2B1B3D" },
      { bg: "#FF6B35", fg: "#2B1B3D", name: "Horizon Fire", hex: "#FF6B35" },
      { bg: "#FFB380", fg: "#2B1B3D", name: "Morning Haze", hex: "#FFB380" },
      { bg: "#FFF4E0", fg: "#2B1B3D", name: "First Light", hex: "#FFF4E0" },
    ],
    bars: ["#2B1B3D", "#FF6B35", "#FFB380"],
    uses: ["Launch Events", "Sunrise Reels", "Hype Content"],
  },
  {
    num: "12", name: "Toxic Frequency", origin: "VESTIGIUM",
    sub: "Industrial Acid — Biohazard signal from the machine floor",
    colors: [
      { bg: "#0D0D0D", fg: "#39FF14", name: "Pitch", hex: "#0D0D0D" },
      { bg: "#39FF14", fg: "#0D0D0D", name: "Toxic Green", hex: "#39FF14" },
      { bg: "#FF073A", fg: "#0D0D0D", name: "Warning Red", hex: "#FF073A" },
      { bg: "#1A1A2E", fg: "#39FF14", name: "Reactor", hex: "#1A1A2E" },
    ],
    bars: ["#0D0D0D", "#1A1A2E", "#39FF14"],
    uses: ["Terminal UI", "Hack Sequences", "Glitch Content"],
  },
  {
    num: "13", name: "Kanga & Chrome", origin: "VESTIGIUM",
    sub: "Market Fabric — Vitenge textile warmth meets polished steel",
    colors: [
      { bg: "#C2185B", fg: "#FFF8E1", name: "Kanga Pink", hex: "#C2185B" },
      { bg: "#FFF8E1", fg: "#C2185B", name: "Cotton Cream", hex: "#FFF8E1" },
      { bg: "#00BFA5", fg: "#FFF8E1", name: "Turquoise", hex: "#00BFA5" },
      { bg: "#424242", fg: "#FFF8E1", name: "Chrome", hex: "#424242" },
    ],
    bars: ["#424242", "#C2185B", "#00BFA5"],
    uses: ["Social Content", "Merch", "Community Events"],
    active: true,
  },

  // === NEW RELLEDOMI PALETTES ===
  {
    num: "14", name: "Westlands After Dark", origin: "RELLEDOMI",
    sub: "Midnight Luxe — The energy of Nairobi's nightlife district after 11pm",
    colors: [
      { bg: "#0A0A12", fg: "#E0D4C8", name: "Westlands Black", hex: "#0A0A12" },
      { bg: "#8B5CF6", fg: "#E0D4C8", name: "Club Violet", hex: "#8B5CF6" },
      { bg: "#F59E0B", fg: "#0A0A12", name: "Neon Amber", hex: "#F59E0B" },
      { bg: "#1E1B2E", fg: "#8B5CF6", name: "Velvet", hex: "#1E1B2E" },
    ],
    bars: ["#0A0A12", "#1E1B2E", "#8B5CF6"],
    uses: ["Night Events", "Premium Content", "VIP"],
  },
  {
    num: "15", name: "Tarmac & Signal", origin: "RELLEDOMI",
    sub: "Urban Infrastructure — Road paint on fresh asphalt, traffic energy",
    colors: [
      { bg: "#1A1A1A", fg: "#F5F0E8", name: "Fresh Tarmac", hex: "#1A1A1A" },
      { bg: "#F5F0E8", fg: "#1A1A1A", name: "Road Chalk", hex: "#F5F0E8" },
      { bg: "#FF6600", fg: "#1A1A1A", name: "Hazard Orange", hex: "#FF6600" },
      { bg: "#2D2D2D", fg: "#FF6600", name: "Bitumen", hex: "#2D2D2D" },
    ],
    bars: ["#1A1A1A", "#2D2D2D", "#FF6600"],
    uses: ["Street Games Default", "Signage", "Wayfinding"],
  },
  {
    num: "16", name: "Karen Greenhouse", origin: "RELLEDOMI",
    sub: "Botanical Wealth — Dense green canopy filtered through golden hour",
    colors: [
      { bg: "#1B2F1B", fg: "#D4E8C2", name: "Deep Canopy", hex: "#1B2F1B" },
      { bg: "#D4E8C2", fg: "#1B2F1B", name: "Filtered Light", hex: "#D4E8C2" },
      { bg: "#C8956C", fg: "#1B2F1B", name: "Warm Brass", hex: "#C8956C" },
      { bg: "#F8F4EC", fg: "#1B2F1B", name: "Linen", hex: "#F8F4EC" },
    ],
    bars: ["#1B2F1B", "#D4E8C2", "#C8956C"],
    uses: ["Organic Brands", "Wellness Activations", "Editorial"],
  },
  {
    num: "17", name: "Brutalist Nairobi", origin: "RELLEDOMI",
    sub: "Raw Concrete — KICC at noon, bare structure, exposed surfaces",
    colors: [
      { bg: "#C8C2B8", fg: "#2A2520", name: "Raw Concrete", hex: "#C8C2B8" },
      { bg: "#2A2520", fg: "#C8C2B8", name: "Shadow", hex: "#2A2520" },
      { bg: "#E85D3A", fg: "#C8C2B8", name: "Rust Signal", hex: "#E85D3A" },
      { bg: "#8C8578", fg: "#2A2520", name: "Aggregate", hex: "#8C8578" },
    ],
    bars: ["#C8C2B8", "#2A2520", "#E85D3A"],
    uses: ["Architecture Content", "Documentary", "Print"],
  },
  {
    num: "18", name: "Thika Superhighway", origin: "RELLEDOMI",
    sub: "Speed & Chrome — Highway lights at 120kph, blurred steel and red tail lights",
    colors: [
      { bg: "#0E1118", fg: "#D4D0C8", name: "Night Road", hex: "#0E1118" },
      { bg: "#D4D0C8", fg: "#0E1118", name: "Headlight", hex: "#D4D0C8" },
      { bg: "#DC2626", fg: "#D4D0C8", name: "Tail Light", hex: "#DC2626" },
      { bg: "#38BDF8", fg: "#0E1118", name: "Highway Blue", hex: "#38BDF8" },
    ],
    bars: ["#0E1118", "#DC2626", "#38BDF8"],
    uses: ["Motion Graphics", "Speed Content", "Intro Sequences"],
  },
  {
    num: "19", name: "Gikomba Market", origin: "RELLEDOMI",
    sub: "Organized Chaos — Stacked mitumba bales, fabric overload, merchant energy",
    colors: [
      { bg: "#D95B2B", fg: "#FFF5E6", name: "Bale Orange", hex: "#D95B2B" },
      { bg: "#FFF5E6", fg: "#D95B2B", name: "Dust Cream", hex: "#FFF5E6" },
      { bg: "#1D7A6E", fg: "#FFF5E6", name: "Tarp Teal", hex: "#1D7A6E" },
      { bg: "#3D2B1F", fg: "#D95B2B", name: "Hardwood", hex: "#3D2B1F" },
    ],
    bars: ["#3D2B1F", "#D95B2B", "#1D7A6E"],
    uses: ["Market Activations", "Merch Drops", "Community"],
  },
  {
    num: "20", name: "Nyayo Stadium Floodlight", origin: "RELLEDOMI",
    sub: "Competition Night — Artificial green pitch under tungsten flood",
    colors: [
      { bg: "#0B1A0B", fg: "#C8E6C8", name: "Pitch Dark", hex: "#0B1A0B" },
      { bg: "#C8E6C8", fg: "#0B1A0B", name: "Turf Glow", hex: "#C8E6C8" },
      { bg: "#FFB800", fg: "#0B1A0B", name: "Floodlight", hex: "#FFB800" },
      { bg: "#FFFFFF", fg: "#0B1A0B", name: "Chalk Line", hex: "#FFFFFF" },
    ],
    bars: ["#0B1A0B", "#C8E6C8", "#FFB800"],
    uses: ["Tournament Content", "Sports Activations", "Final Rounds"],
  },
  {
    num: "21", name: "Java House Noir", origin: "RELLEDOMI",
    sub: "Third Space — Espresso depth with cream warmth and copper fixtures",
    colors: [
      { bg: "#1C1410", fg: "#E8DDD0", name: "Espresso", hex: "#1C1410" },
      { bg: "#E8DDD0", fg: "#1C1410", name: "Steamed Cream", hex: "#E8DDD0" },
      { bg: "#B87333", fg: "#1C1410", name: "Copper", hex: "#B87333" },
      { bg: "#2E2218", fg: "#B87333", name: "Dark Roast", hex: "#2E2218" },
    ],
    bars: ["#1C1410", "#2E2218", "#B87333"],
    uses: ["Sponsor Content", "Warm Tones", "Lifestyle"],
  },
];

// ─── COMPONENTS ──────────────────────

function Swatch({ color }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{
      padding: "24px 14px 12px", minHeight: "96px", background: color.bg, color: color.fg,
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      cursor: "pointer", transition: "transform 0.2s",
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    onClick={() => { navigator.clipboard.writeText(color.hex).catch(() => {}); setCopied(true); setTimeout(() => setCopied(false), 800); }}
    >
      <div style={{ fontFamily: ff.m, fontSize: "10px", fontWeight: 500, marginBottom: "2px" }}>{color.name}</div>
      <div style={{ fontFamily: ff.m, fontSize: "9px", opacity: 0.6 }}>{copied ? "COPIED" : color.hex}</div>
    </div>
  );
}

function BarChart({ bars }) {
  const widths = ["100%", "50%", "17%"];
  const labels = ["60%", "30%", "10%"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {bars.map((color, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ height: "14px", width: widths[i], background: color, borderRadius: "1px", border: color === "#0B0B0B" || color === "#0C0C0C" || color === "#0D0D0D" || color === "#0A0A12" || color === "#0E1118" || color === "#0B1A0B" || color === "#1A1A1A" ? "1px solid #222" : "none" }} />
          <span style={{ fontFamily: ff.m, fontSize: "8px", color: "#555", minWidth: "24px" }}>{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

function PaletteCard({ p }) {
  const isActive = p.active;
  return (
    <div style={{
      marginBottom: "32px", padding: "24px", background: "rgba(255,255,255,0.008)",
      border: `1px solid ${isActive ? "rgba(194,24,91,0.3)" : "rgba(255,255,255,0.035)"}`,
      borderRadius: "6px", position: "relative",
    }}>
      {isActive && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${p.colors[0].bg}, ${p.colors[2].bg})` }} />}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span style={{ fontFamily: ff.m, fontSize: "9px", letterSpacing: "0.12em", color: p.origin === "RELLEDOMI" ? "#DC2626" : "#8B5CF6", opacity: 0.5 }}>{p.origin} — {p.num}</span>
            {isActive && <span style={{ fontFamily: ff.m, fontSize: "8px", padding: "2px 8px", background: "rgba(194,24,91,0.15)", color: "#C2185B", borderRadius: "2px", letterSpacing: "0.08em" }}>ACTIVE</span>}
          </div>
          <h3 style={{ fontFamily: ff.d, fontSize: "20px", color: "#E8E0D4", margin: "0 0 3px", letterSpacing: "0.02em" }}>{p.name}</h3>
          <p style={{ fontFamily: ff.m, fontSize: "10px", color: "#444", margin: 0 }}>{p.sub}</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 180px", gap: "20px", marginTop: "16px" }}>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", borderRadius: "3px", overflow: "hidden", marginBottom: "10px" }}>
            {p.colors.map((c, i) => <Swatch key={i} color={c} />)}
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {p.uses.map((u, i) => (
              <span key={i} style={{ fontFamily: ff.m, fontSize: "7px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "2px 6px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "2px", color: "#444" }}>{u}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: ff.m, fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#444", margin: "0 0 8px" }}>60 / 30 / 10</p>
            <BarChart bars={p.bars} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ──────────────────────

export default function RelledomiColors() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? palettes
    : filter === "vestigium" ? palettes.filter(p => p.origin === "VESTIGIUM")
    : filter === "relledomi" ? palettes.filter(p => p.origin === "RELLEDOMI")
    : filter === "active" ? palettes.filter(p => p.active)
    : palettes;

  return (
    <div style={{ background: "#060608", minHeight: "100vh", color: "#E8E0D4", fontFamily: ff.m, fontSize: "12px", lineHeight: 1.6 }}>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(6,6,8,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(220,38,38,0.08)", padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "22px", height: "22px", background: "#DC2626", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: ff.d, fontSize: "12px", color: "#fff" }}>R</span>
          </div>
          <span style={{ fontFamily: ff.d, fontSize: "14px", letterSpacing: "0.04em" }}>RELLEDOMI</span>
          <span style={{ fontSize: "8px", opacity: 0.2, letterSpacing: "0.08em" }}>entertainment</span>
        </div>
        <span style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#555", textTransform: "uppercase" }}>Color Systems — {palettes.length} Palettes</span>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 40px 60px" }}>
        {/* Title */}
        <div style={{ marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <h1 style={{ fontFamily: ff.d, fontSize: "42px", lineHeight: 1.05, margin: "0 0 12px" }}>
            COLOR<br />SYSTEMS
          </h1>
          <p style={{ color: "#666", fontSize: "12px", maxWidth: "480px", lineHeight: 1.7, margin: "0 0 24px" }}>
            {palettes.length} palettes for Relledomi Entertainment and its productions. Includes the complete Vestigium collection plus new agency-specific systems rooted in Nairobi locations and textures. 60/30/10 rule governs all applications.
          </p>

          {/* Filter */}
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { id: "all", label: `ALL (${palettes.length})` },
              { id: "vestigium", label: "VESTIGIUM (13)" },
              { id: "relledomi", label: "RELLEDOMI NEW (8)" },
              { id: "active", label: "ACTIVE" },
            ].map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{
                padding: "6px 14px", background: filter === f.id ? "rgba(220,38,38,0.08)" : "transparent",
                border: `1px solid ${filter === f.id ? "rgba(220,38,38,0.25)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "3px", color: filter === f.id ? "#DC2626" : "#555",
                fontFamily: ff.m, fontSize: "9px", letterSpacing: "0.08em",
                cursor: "pointer", transition: "all 0.2s",
              }}>{f.label}</button>
            ))}
          </div>
        </div>

        {/* Active Palette Hero */}
        {filter === "all" && (
          <div style={{ marginBottom: "48px", padding: "32px", background: "rgba(194,24,91,0.04)", border: "1px solid rgba(194,24,91,0.15)", borderRadius: "8px" }}>
            <p style={{ fontFamily: ff.m, fontSize: "9px", letterSpacing: "0.15em", color: "#C2185B", margin: "0 0 8px" }}>CURRENTLY ACTIVE</p>
            <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: "#E8E0D4", margin: "0 0 4px" }}>KANGA & CHROME</h2>
                <p style={{ fontSize: "11px", color: "#666", margin: 0 }}>Primary palette for Street Games launch campaign and social content</p>
              </div>
              <div style={{ display: "flex", gap: "3px", borderRadius: "3px", overflow: "hidden" }}>
                {[
                  { bg: "#C2185B", fg: "#FFF8E1" },
                  { bg: "#FFF8E1", fg: "#C2185B" },
                  { bg: "#00BFA5", fg: "#FFF8E1" },
                  { bg: "#424242", fg: "#FFF8E1" },
                ].map((c, i) => (
                  <div key={i} style={{ width: "48px", height: "48px", background: c.bg }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Palette List */}
        {filtered.map((p, i) => <PaletteCard key={p.num} p={p} />)}

        {/* Footer */}
        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.04)", textAlign: "center" }}>
          <p style={{ fontFamily: ff.d, fontSize: "12px", letterSpacing: "0.15em", color: "rgba(232,224,212,0.15)", marginBottom: "4px" }}>RELLEDOMI ENTERTAINMENT</p>
          <p style={{ fontSize: "9px", color: "#333", letterSpacing: "0.12em" }}>{palettes.length} COLOR SYSTEMS — NAIROBI / US — 2026</p>
        </div>
      </div>
    </div>
  );
}
