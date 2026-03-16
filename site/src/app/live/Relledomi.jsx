import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════
// RELLEDOMI.COM — DRIBBBLE GAMING / ESPORTS EDITION
// Bento Grids, Cyberpunk Neons, Cursor Spotlights
// ═══════════════════════════════════════════════

const T = {
  bg: "#030305",
  surface: "#0A0A0F",
  card: "rgba(18, 18, 26, 0.4)",
  cardHover: "rgba(30, 30, 42, 0.6)",
  border: "rgba(255,255,255,0.06)",
  magenta: "#FF2A6D",
  cyan: "#05D9E8",
  gold: "#FFC107",
  text: "#FFFFFF",
  sub: "#9CA3AF",
  muted: "#4B5563"
};

// ─── GLOBAL STYLES ──────────────────
function CyberStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&family=Space+Grotesk:wght@400;500;700&display=swap');
      
      * { scrollbar-width: thin; scrollbar-color: ${T.magenta} ${T.bg}; box-sizing: border-box; }
      *::-webkit-scrollbar { width: 4px; }
      *::-webkit-scrollbar-track { background: ${T.bg}; }
      *::-webkit-scrollbar-thumb { background: ${T.magenta}; border-radius: 2px; }
      
      body { margin: 0; font-family: 'Space Grotesk', sans-serif; background: ${T.bg}; color: ${T.text}; overflow-x: hidden; }

      @keyframes glitch {
        0% { text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75); }
        14% { text-shadow: 0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75); }
        15% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75); }
        49% { text-shadow: -0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75); }
        50% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75); }
        99% { text-shadow: 0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75); }
        100% { text-shadow: -0.025em 0 0 rgba(255,0,0,0.75), -0.025em -0.025em 0 rgba(0,255,0,0.75), -0.025em -0.05em 0 rgba(0,0,255,0.75); }
      }

      .glitch-hover:hover { animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite; color: #fff; }

      @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }

      .bento-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(200px, auto);
        gap: 16px;
      }
      @media (max-width: 900px) {
        .bento-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 600px) {
        .bento-grid { grid-template-columns: 1fr; }
      }
      .bento-span-2 { grid-column: span 2; }
      .bento-span-3 { grid-column: span 3; }
      @media (max-width: 900px) {
        .bento-span-3 { grid-column: span 2; }
      }
      @media (max-width: 600px) {
        .bento-span-2, .bento-span-3 { grid-column: span 1; }
      }
    `}</style>
  );
}

// ─── UTILS & ANIMATIONS ──────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, delay = 0, y = 30 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`
    }}>{children}</div>
  );
}

// ─── SPOTLIGHT CARD (DRIBBBLE TREND) ───
function SpotlightCard({ children, style = {}, color = T.magenta, glowOpacity = "0.15" }) {
  const divRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [op, setOp] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef} 
      onMouseMove={handleMouseMove} 
      onMouseEnter={() => setOp(1)} 
      onMouseLeave={() => setOp(0)}
      style={{
        position: "relative", padding: "24px", borderRadius: "16px",
        background: T.card, backdropFilter: "blur(20px)", border: `1px solid ${T.border}`,
        overflow: "hidden", transition: "transform 0.3s", cursor: "crosshair",
        ...style
      }}
      className="bento-item hover:scale-[1.01]"
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none",
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, ${color}${glowOpacity}, transparent 40%)`,
        opacity: op, transition: "opacity 0.4s", zIndex: 0
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ─── UI COMPONENTS ──────────────────
function CyberBtn({ children, variant = "magenta", onClick, href, style = {} }) {
  const vColor = variant === "magenta" ? T.magenta : variant === "cyan" ? T.cyan : T.text;
  
  const bStyle = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
    padding: "16px 36px", fontSize: "14px", fontWeight: "700", fontFamily: "'Space Grotesk', sans-serif",
    textTransform: "uppercase", letterSpacing: "1px", background: variant === "ghost" ? "transparent" : vColor,
    color: variant === "ghost" ? T.text : T.bg, border: variant === "ghost" ? `1px solid ${T.border}` : "none",
    borderRadius: "0px", clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
    cursor: "pointer", textDecoration: "none", transition: "all 0.2s", position: "relative",
    boxShadow: variant !== "ghost" ? `0 0 20px ${vColor}40` : "none",
    ...style
  };

  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className={variant !== "ghost" ? "glitch-hover" : ""} style={bStyle}>{children}</a> 
              : <button onClick={onClick} className={variant !== "ghost" ? "glitch-hover" : ""} style={bStyle}>{children}</button>;
}

function Pill({ children, color = T.magenta }) {
  return <span style={{ padding: "4px 12px", background: `${color}15`, color: color, fontSize: "11px", fontWeight: "700", letterSpacing: "1px", border: `1px solid ${color}40`, borderRadius: "20px", textTransform: "uppercase" }}>{children}</span>;
}

// ─── NAV ──────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(3,3,5,0.7)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent", transition: "all 0.4s"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", height: "80px", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", zIndex: 10 }} onClick={() => window.scrollTo(0,0)}>
          <div style={{ width: "32px", height: "32px", background: T.magenta, clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 20px ${T.magenta}60` }}>
            <span style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "16px", color: T.bg }}>R</span>
          </div>
          <span style={{ fontFamily: "Outfit", fontWeight: 800, fontSize: "18px", letterSpacing: "2px" }}>RELLEDOMI</span>
        </div>
        
        <div style={{ display: "none", gap: "32px", "@media(min-width: 768px)": { display: "flex" } }}>
          {["Games", "Leaderboard", "Venues", "About"].map(item => (
            <button key={item} onClick={() => go(item.toLowerCase())} style={{ background: "none", border: "none", color: T.sub, fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = T.text} onMouseLeave={e => e.target.style.color = T.sub}>{item}</button>
          ))}
        </div>
        
        <CyberBtn variant="ghost" onClick={() => go("contact")} style={{ padding: "10px 24px", fontSize: "12px" }}>CONNECT</CyberBtn>
      </div>
    </nav>
  );
}

// ─── HERO ──────────────────────
function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "80px", paddingInline: "40px" }}>
      {/* Heavy Cyber Glows */}
      <div style={{ position: "absolute", top: "20%", left: "-10%", width: "60vw", height: "60vw", background: `radial-gradient(circle, ${T.magenta}15, transparent 60%)`, filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "50vw", height: "50vw", background: `radial-gradient(circle, ${T.cyan}10, transparent 60%)`, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`, backgroundSize: "64px 64px", opacity: 0.3, pointerEvents: "none", maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)" }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", zIndex: 1, position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Reveal>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: "rgba(255,42,109,0.1)", border: `1px solid ${T.magenta}40`, borderRadius: "30px", marginBottom: "32px", backdropFilter: "blur(10px)" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: T.magenta, boxShadow: `0 0 10px ${T.magenta}` }} />
            <span style={{ fontSize: "11px", fontWeight: 600, color: T.magenta, letterSpacing: "1px" }}>SEASON 1 • NAIROBI DROP</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "clamp(60px, 12vw, 140px)", lineHeight: 0.85, textTransform: "uppercase", margin: "0 0 24px", letterSpacing: "-0.03em" }}>
            <span style={{ color: "transparent", WebkitTextStroke: `1.5px ${T.text}` }}>STREET</span><br />
            <span style={{ color: T.text, textShadow: `0 0 40px ${T.magenta}60` }}>GAMES</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 2vw, 20px)", color: T.sub, maxWidth: "600px", lineHeight: 1.6, margin: "0 0 48px", fontWeight: 400 }}>
            Live mini-game competitions hitting Nairobi streets. Show up. Compete. Win. Every game produces viral content. The city is the arena.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <CyberBtn onClick={() => document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })}>ENTER ARENA</CyberBtn>
            <CyberBtn variant="ghost" onClick={() => document.getElementById("leaderboard")?.scrollIntoView({ behavior: "smooth" })}>VIEW RANKINGS</CyberBtn>
          </div>
        </Reveal>
        
        {/* Metric Bar */}
        <Reveal delay={0.4}>
          <div style={{ display: "flex", gap: "40px", marginTop: "80px", borderTop: `1px solid ${T.border}`, paddingTop: "32px", width: "100%", maxWidth: "800px" }}>
            {[
              { val: "O6", label: "GAME FORMATS" },
              { val: "2.4K", label: "TOTAL PRIZE POOL" },
              { val: "LIVE", label: "STATUS", color: T.cyan }
            ].map(m => (
              <div key={m.label}>
                <p style={{ fontFamily: "Outfit", fontWeight: 800, fontSize: "28px", color: m.color || T.text, margin: "0 0 4px", textShadow: m.color ? `0 0 20px ${m.color}80` : "none" }}>{m.val}</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: T.muted, margin: 0, fontWeight: 600, letterSpacing: "1px" }}>{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      
      {/* Infinite Marquee */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 0", background: T.magenta, overflow: "hidden", display: "flex", whiteSpace: "nowrap", borderTop: `1px solid ${T.magenta}`, borderBottom: `1px solid ${T.magenta}`, zIndex: 10 }}>
        <div style={{ display: "flex", animation: "marquee 20s linear infinite" }}>
          {[...Array(8)].map((_, i) => (
             <span key={i} style={{ fontFamily: "Outfit", fontWeight: 800, fontSize: "20px", color: T.bg, paddingRight: "40px", letterSpacing: "2px" }}>NBO × STREET GAMES × RELLEDOMI ENTERTAINMENT × </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BENTO GRID: GAMES ──────────────────────
function Games() {
  const games = [
    { name: "LAST ONE STANDING", type: "PHYSICAL", desc: "Musical chairs on steroids. Music stops — last to reach safety is out. Final two face off.", players: "5-10", heat: true, span: "bento-span-2" },
    { name: "PRICE IS RIGHT", type: "MENTAL", desc: "Guess the exact price of everyday items.", players: "3-5", heat: false, span: "bento-span-1" },
    { name: "STACK OR CRACK", type: "SKILL", desc: "Stack objects as high as possible. Tower falls? You're out.", players: "2 H2H", heat: true, span: "bento-span-1" },
    { name: "TRIVIA GAUNTLET", type: "MENTAL", desc: "Rapid-fire trivia. Pop culture, Nairobi knowledge. 3 wrong and you're out.", players: "1", heat: false, span: "bento-span-2" },
    { name: "THE HANDSHAKE", type: "SOCIAL", desc: "Two strangers learn a complex handshake. Crowd judges.", players: "2", heat: false, span: "bento-span-1" },
    { name: "HOLD YOUR NERVE", type: "GRIT", desc: "Hold a position. Crowd distracts. Pure willpower.", players: "3-6", heat: true, span: "bento-span-2" },
  ];

  return (
    <section id="games" style={{ padding: "140px 40px", background: T.surface, position: "relative" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: "60px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <Pill color={T.cyan}>FORMATS</Pill>
              <h2 style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "clamp(40px, 6vw, 70px)", textTransform: "uppercase", margin: "16px 0 0", color: T.text }}>THE<br/><span style={{ color: T.cyan }}>ARENA</span></h2>
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: T.sub, maxWidth: "340px", margin: 0 }}>High stakes, viral moments. Six core formats built for the streets.</p>
          </div>
        </Reveal>

        <div className="bento-grid">
          {games.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.1}>
              <SpotlightCard color={g.heat ? T.magenta : T.cyan} style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }} className={`${g.span}`}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
                  <Pill color={g.heat ? T.magenta : T.cyan}>{g.type}</Pill>
                  {g.heat && <span style={{ fontSize: "18px", filter: `drop-shadow(0 0 10px ${T.magenta})` }}>🔥</span>}
                </div>
                <div>
                  <h3 style={{ fontFamily: "Outfit", fontWeight: 800, fontSize: "28px", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "1px" }}>{g.name}</h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: T.sub, margin: "0 0 20px", lineHeight: 1.6 }}>{g.desc}</p>
                  <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: "16px", display: "flex", gap: "24px" }}>
                    <div>
                      <span style={{ display: "block", fontSize: "10px", color: T.muted, fontWeight: 700, marginBottom: "4px" }}>PLAYERS</span>
                      <span style={{ fontSize: "14px", fontWeight: 600, color: T.text }}>{g.players}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LEADERBOARD: 3D CYBER ──────────────────────
function Leaderboard() {
  const top3 = [
    { rank: 2, name: "BLAZE", title: "LEGEND", color: T.cyan, h: "280px" },
    { rank: 1, name: "SHADOW", title: "G.O.A.T.", color: T.magenta, h: "340px" },
    { rank: 3, name: "VIPER", title: "KING", color: T.gold, h: "240px" },
  ];
  const rest = [
    { rank: 4, name: "NOVA", pts: 1520 }, { rank: 5, name: "GHOST", pts: 1380 }, { rank: 6, name: "STORM", pts: 980 }
  ];

  return (
    <section id="leaderboard" style={{ padding: "140px 40px", position: "relative" }}>
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", background: `radial-gradient(circle, ${T.card}, transparent 70%)`, zIndex: 0 }} />
      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "clamp(40px, 6vw, 70px)", textTransform: "uppercase", margin: "0 0 16px" }}>GLOBAL <span style={{ color: "transparent", WebkitTextStroke: `1.5px ${T.gold}` }}>LADDER</span></h2>
            <Pill color={T.gold}>SEASON 01 TOP PLAYERS</Pill>
          </div>
        </Reveal>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
          {top3.map((p, i) => (
            <Reveal key={p.rank} delay={i * 0.15}>
              <div style={{ width: "220px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ textAlign: "center", marginBottom: "16px", transform: p.rank === 1 ? "scale(1.1)" : "scale(1)" }}>
                  <h3 style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "24px", margin: "0", color: T.text }}>{p.name}</h3>
                  <span style={{ fontSize: "11px", color: p.color, fontWeight: 700, letterSpacing: "1px" }}>{p.title}</span>
                </div>
                {/* CYBER PODIUM */}
                <div style={{
                  width: "100%", height: p.h, background: `linear-gradient(180deg, ${p.color}40, ${T.bg})`,
                  border: `1px solid ${p.color}80`, borderBottom: "none",
                  borderTopLeftRadius: "12px", borderTopRightRadius: "12px",
                  display: "flex", justifyContent: "center", paddingTop: "24px",
                  boxShadow: `inset 0 20px 40px ${p.color}20, 0 0 40px ${p.color}20`,
                  position: "relative", overflow: "hidden"
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: p.color, boxShadow: `0 0 20px ${p.color}` }} />
                  <span style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "64px", color: p.color, opacity: 0.3 }}>{p.rank}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "600px", margin: "0 auto" }}>
            {rest.map(r => (
              <div key={r.rank} style={{ padding: "16px 24px", background: T.card, border: `1px solid ${T.border}`, borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  <span style={{ fontFamily: "Outfit", fontWeight: 800, fontSize: "18px", color: T.sub }}>0{r.rank}</span>
                  <span style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: "18px", color: T.text }}>{r.name}</span>
                </div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: T.cyan }}>{r.pts} PTS</span>
              </div>
            ))}
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}

// ─── ABOUT: AGENCY BENTO ──────────────────────
function About() {
  return (
    <section id="about" style={{ padding: "140px 40px", background: T.surface }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        <Reveal>
          <div style={{ marginBottom: "60px" }}>
            <Pill color={T.text}>AGENCY</Pill>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "clamp(40px, 6vw, 70px)", textTransform: "uppercase", margin: "16px 0 0", color: T.text }}>MORE THAN <span style={{ color: "transparent", WebkitTextStroke: `1.5px ${T.magenta}` }}>A SHOW</span></h2>
          </div>
        </Reveal>

        <div className="bento-grid">
          <Reveal delay={0} y={0}>
             <SpotlightCard color={T.cyan} span="bento-span-2" style={{ height: "100%" }}>
                <h3 style={{ fontFamily: "Outfit", fontWeight: 800, fontSize: "24px", marginBottom: "16px", color: T.text }}>STREET CULTURE TO VIRAL CONTENT</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: T.sub, lineHeight: 1.7, margin: 0 }}>
                  Relledomi Entertainment creates live competitions, viral content, and brand experiences rooted in street culture. We don't rent studios. We show up where people already are — and turn what happens next into content the world wants to watch. Brand activations, content production, event management, talent development.
                </p>
             </SpotlightCard>
          </Reveal>
          
          <Reveal delay={0.1}>
            <SpotlightCard color={T.magenta} style={{ height: "100%", background: `linear-gradient(135deg, ${T.card}, ${T.magenta}20)` }}>
              <div style={{ fontSize: "48px", fontWeight: 900, fontFamily: "Outfit", margin: "0 0 8px", color: T.magenta }}>100%</div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: 700, color: T.text, margin: 0 }}>ORGANIC REACH ON DROPS</p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.2}>
             <SpotlightCard color={T.gold}>
               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <h4 style={{ margin: 0, fontFamily: "Outfit", fontWeight: 800, fontSize: "18px" }}>BRAND ACTIVATION</h4>
                  <span style={{ color: T.gold }}>01</span>
               </div>
               <p style={{ margin: 0, fontSize: "14px", color: T.sub, lineHeight: 1.5 }}>Custom street events for corporate clients. Full production included.</p>
             </SpotlightCard>
          </Reveal>
          
          <Reveal delay={0.3}>
             <SpotlightCard color={T.cyan}>
               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <h4 style={{ margin: 0, fontFamily: "Outfit", fontWeight: 800, fontSize: "18px" }}>CONTENT PRODUCTION</h4>
                  <span style={{ color: T.cyan }}>02</span>
               </div>
               <p style={{ margin: 0, fontSize: "14px", color: T.sub, lineHeight: 1.5 }}>End-to-end video for TikTok, Reels, YouTube. Fast turnaround.</p>
             </SpotlightCard>
          </Reveal>

          <Reveal delay={0.4}>
             <SpotlightCard color={T.magenta}>
               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <h4 style={{ margin: 0, fontFamily: "Outfit", fontWeight: 800, fontSize: "18px" }}>TALENT DISCOVERY</h4>
                  <span style={{ color: T.magenta }}>03</span>
               </div>
               <p style={{ margin: 0, fontSize: "14px", color: T.sub, lineHeight: 1.5 }}>We discover and develop raw talent from the streets to global stages.</p>
             </SpotlightCard>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

// ─── CONTACT TERMINAL ──────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: "140px 40px", position: "relative" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
        <Reveal>
          <SpotlightCard color={T.cyan} style={{ padding: "60px 40px", textAlign: "center", border: `1px solid ${T.cyan}40` }}>
            <h2 style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "clamp(32px, 5vw, 60px)", textTransform: "uppercase", margin: "0 0 24px", color: T.text }}>CONNECT TO <span style={{ color: T.cyan }}>NETWORK</span></h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: T.sub, margin: "0 auto 40px", maxWidth: "500px", lineHeight: 1.6 }}>Sponsorships, event bookings, collabs, or access rights. Initiate communication.</p>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <CyberBtn variant="cyan" href="mailto:hello@relledomi.com">INITIALIZE EMAIL</CyberBtn>
              <CyberBtn variant="ghost" href="https://instagram.com/streetgamesKE">INSTAGRAM LINK</CyberBtn>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, padding: "40px", background: "#000" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "Outfit", fontWeight: 900, fontSize: "20px", color: T.text, letterSpacing: "1px" }}>RELLEDOMI.</span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: T.muted, letterSpacing: "2px" }}>NBO × US</span>
        </div>
        
        <div style={{ display: "flex", gap: "24px" }}>
          {["INSTA", "TIKTOK", "YOUTUBE", "X"].map(s => (
            <span key={s} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", fontWeight: 700, color: T.sub, cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = T.cyan} onMouseLeave={e => e.target.style.color = T.sub}>{s}</span>
          ))}
        </div>
        
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: T.muted }}>© 2026 // SYSTEM ONLINE</span>
      </div>
    </footer>
  );
}

// ─── APP EXPORT ──────────────────────
export default function Relledomi() {
  return (
    <>
      <CyberStyles />
      <Nav />
      <Hero />
      <Games />
      <Leaderboard />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
