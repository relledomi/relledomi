import { useState, useEffect, useRef } from "react";

// ─── RELLEDOMI.COM ──────────────────────
// Dark cinematic agency site
// Aesthetic: Film noir meets Nairobi street energy
// Font pairing: Oswald (display) + Libre Franklin (body)

const COLORS = {
  bg: "#050507",
  surface: "#0C0C10",
  card: "#111116",
  accent: "#E8272C",
  accentHover: "#FF3B3F",
  gold: "#D4A843",
  text: "#E8E8E0",
  sub: "#9A9A90",
  muted: "#55554F",
  border: "#1A1A20",
  gradientStart: "rgba(232,39,44,0.06)",
  gradientEnd: "rgba(5,5,7,0)",
};

// ─── ANIMATED COMPONENTS ──────────────────

function FadeIn({ children, delay = 0, style = {} }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

function GlitchText({ children, style = {} }) {
  return (
    <span style={{ position: "relative", display: "inline-block", ...style }}>
      {children}
      <span style={{ position: "absolute", left: "2px", top: "1px", color: "rgba(232,39,44,0.3)", clipPath: "inset(10% 0 60% 0)", pointerEvents: "none" }} aria-hidden>{children}</span>
    </span>
  );
}

// ─── NAV ──────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(5,5,7,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
      transition: "all 0.4s ease",
      padding: "0 clamp(20px, 5vw, 60px)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: 700, color: COLORS.accent, letterSpacing: "-0.02em" }}>RELLEDOMI</span>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 500, color: COLORS.muted, letterSpacing: "0.15em", textTransform: "uppercase" }}>ent.</span>
        </div>
        <div style={{ display: "flex", gap: "clamp(16px, 3vw, 32px)", alignItems: "center" }}>
          {[["SHOWS", "shows"], ["SERVICES", "services"], ["ABOUT", "about"], ["CONTACT", "contact"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", color: COLORS.sub, fontFamily: "'Libre Franklin', sans-serif",
              fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", cursor: "pointer",
              textTransform: "uppercase", padding: "4px 0", borderBottom: "1px solid transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.target.style.color = COLORS.text; e.target.style.borderBottomColor = COLORS.accent; }}
            onMouseLeave={e => { e.target.style.color = COLORS.sub; e.target.style.borderBottomColor = "transparent"; }}
            >{label}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ──────────────────────

function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "120px clamp(20px, 5vw, 60px) 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background texture */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 60% 50% at 70% 40%, ${COLORS.gradientStart}, ${COLORS.gradientEnd} 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 3px)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", background: COLORS.accent }} />
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "11px", fontWeight: 600, color: COLORS.accent, letterSpacing: "0.2em", textTransform: "uppercase" }}>Nairobi, Kenya</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(48px, 10vw, 120px)", fontWeight: 700, color: COLORS.text, margin: 0, lineHeight: 0.9, letterSpacing: "-0.02em" }}>
            <GlitchText>THE STREET</GlitchText><br />
            <span style={{ color: COLORS.accent }}>IS THE STAGE</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 300, color: COLORS.sub, margin: "28px 0 0", maxWidth: "520px", lineHeight: 1.7, letterSpacing: "0.01em" }}>
            Relledomi Entertainment creates live street competitions and viral content across East Africa. We turn public spaces into stages, strangers into stars, and every event into a content engine.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ marginTop: "40px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            {!submitted ? (
              <>
                <input
                  type="email" placeholder="your@email.com" value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: "4px",
                    padding: "14px 18px", color: COLORS.text, fontFamily: "'Libre Franklin', sans-serif",
                    fontSize: "14px", width: "280px", outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = COLORS.accent}
                  onBlur={e => e.target.style.borderColor = COLORS.border}
                />
                <button
                  onClick={() => { if (email.includes("@")) setSubmitted(true); }}
                  style={{
                    background: COLORS.accent, border: "none", borderRadius: "4px",
                    padding: "14px 28px", color: "#fff", fontFamily: "'Oswald', sans-serif",
                    fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer",
                    transition: "all 0.2s", textTransform: "uppercase",
                  }}
                  onMouseEnter={e => e.target.style.background = COLORS.accentHover}
                  onMouseLeave={e => e.target.style.background = COLORS.accent}
                >Get Notified</button>
              </>
            ) : (
              <div style={{ padding: "14px 24px", background: COLORS.card, borderRadius: "4px", border: `1px solid rgba(0,230,118,0.2)` }}>
                <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "14px", color: "#00E676" }}>You're in. We'll hit you up before the next event.</span>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div style={{ marginTop: "32px", display: "flex", gap: "20px" }}>
            {[
              { label: "INSTAGRAM", handle: "@streetgamesKE", url: "#" },
              { label: "TIKTOK", handle: "@streetgamesKE", url: "#" },
              { label: "YOUTUBE", handle: "Relledomi Entertainment", url: "#" },
            ].map((s, i) => (
              <a key={i} href={s.url} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 600, color: COLORS.muted, letterSpacing: "0.12em" }}>{s.label}</span>
                <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", color: COLORS.sub, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = COLORS.accent}
                  onMouseLeave={e => e.target.style.color = COLORS.sub}
                >{s.handle}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Stats strip */}
        <FadeIn delay={0.7}>
          <div style={{ marginTop: "80px", display: "flex", gap: "48px", borderTop: `1px solid ${COLORS.border}`, paddingTop: "28px" }}>
            {[
              { num: "NAIROBI", label: "HOME BASE" },
              { num: "STREET", label: "GAMES" },
              { num: "2026", label: "LAUNCHING" },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "28px", fontWeight: 700, color: COLORS.text, margin: 0, letterSpacing: "-0.01em" }}>{s.num}</p>
                <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 600, color: COLORS.muted, margin: "2px 0 0", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── SHOWS ──────────────────────

function Shows() {
  return (
    <section id="shows" style={{ padding: "100px clamp(20px, 5vw, 60px)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${COLORS.bg}, ${COLORS.surface} 30%, ${COLORS.surface} 70%, ${COLORS.bg})`, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.accent }} />
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "10px", fontWeight: 600, color: COLORS.accent, letterSpacing: "0.2em" }}>OUR SHOWS</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            padding: "clamp(32px, 5vw, 60px)", background: COLORS.card,
            borderRadius: "8px", border: `1px solid ${COLORS.border}`,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${COLORS.accent}, transparent 60%)` }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "32px" }}>
              <div style={{ flex: "1 1 500px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 700, color: COLORS.gold, letterSpacing: "0.15em", padding: "3px 10px", background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.15)", borderRadius: "2px" }}>FLAGSHIP</span>
                  <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 700, color: COLORS.accent, letterSpacing: "0.15em", padding: "3px 10px", background: COLORS.gradientStart, border: "1px solid rgba(232,39,44,0.15)", borderRadius: "2px" }}>NOW FILMING</span>
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: COLORS.text, margin: "0 0 4px", letterSpacing: "-0.01em", lineHeight: 1 }}>STREET GAMES</h3>
                <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "12px", color: COLORS.muted, margin: "0 0 20px", letterSpacing: "0.08em" }}>BY RELLEDOMI ENTERTAINMENT</p>
                <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "15px", fontWeight: 300, color: COLORS.sub, lineHeight: 1.7, margin: "0 0 24px", maxWidth: "480px" }}>
                  Mini-games at high-traffic zones across Nairobi. Universities, CBD, malls. Players compete, crowds gather, cameras roll. Think Squid Game energy — but real people, real streets, real prizes.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {["Physical Challenges", "Mental Games", "Crowd Votes", "Cash Prizes"].map((tag, i) => (
                    <span key={i} style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "11px", fontWeight: 500, color: COLORS.sub, padding: "6px 14px", background: COLORS.surface, borderRadius: "3px", border: `1px solid ${COLORS.border}` }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ flex: "0 0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { game: "LAST ONE STANDING", type: "Physical" },
                  { game: "PRICE IS RIGHT: NBO", type: "Mental" },
                  { game: "STACK OR CRACK", type: "Skill" },
                  { game: "TRIVIA GAUNTLET", type: "Knowledge" },
                  { game: "THE HANDSHAKE", type: "Social" },
                  { game: "HOLD YOUR NERVE", type: "Endurance" },
                ].map((g, i) => (
                  <div key={i} style={{ padding: "12px 16px", background: COLORS.surface, borderRadius: "4px", border: `1px solid ${COLORS.border}`, minWidth: "160px" }}>
                    <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", color: COLORS.text, margin: "0 0 2px", letterSpacing: "0.02em" }}>{g.game}</p>
                    <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "10px", color: COLORS.muted, margin: 0 }}>{g.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: "16px", padding: "24px 32px", background: COLORS.card, borderRadius: "8px", border: `1px solid ${COLORS.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 700, color: COLORS.muted, letterSpacing: "0.15em" }}>COMING NEXT</span>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", color: COLORS.sub, margin: "4px 0 0" }}>SHOW #2 — IN DEVELOPMENT</p>
            </div>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "12px", color: COLORS.muted }}>New format. Same streets. Stay tuned.</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── SERVICES ──────────────────────

function Services() {
  const services = [
    { title: "BRAND ACTIVATIONS", desc: "We produce custom street-level events for your brand. Bring the crowd, the cameras, and the content — you bring the brand. Full production, filming, editing, and distribution included.", icon: "◎" },
    { title: "CONTENT PRODUCTION", desc: "End-to-end video production for social platforms. Short-form, long-form, and everything in between. Optimized for TikTok, Reels, YouTube, and beyond.", icon: "▣" },
    { title: "EVENT PRODUCTION", desc: "Book Street Games for your campus, festival, or venue. We bring the games, the host, the crew, and the energy. Your audience gets an experience. You get the content.", icon: "◈" },
    { title: "TALENT & CREATORS", desc: "We identify, develop, and manage emerging talent from our shows. Brand partnerships, appearances, and creator campaigns featuring authentic voices from the streets.", icon: "△" },
  ];

  return (
    <section id="services" style={{ padding: "100px clamp(20px, 5vw, 60px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.gold }} />
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "10px", fontWeight: 600, color: COLORS.gold, letterSpacing: "0.2em" }}>SERVICES</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.text, margin: "0 0 12px" }}>WHAT WE DO</h2>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "15px", fontWeight: 300, color: COLORS.sub, maxWidth: "500px", lineHeight: 1.7, margin: "0 0 40px" }}>
            More than a show — we're an entertainment agency built for brands that want to reach young Africa.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                style={{
                  padding: "36px", background: COLORS.card, borderRadius: "8px",
                  border: `1px solid ${COLORS.border}`, cursor: "default",
                  transition: "all 0.3s ease", position: "relative", overflow: "hidden",
                  minHeight: "200px", display: "flex", flexDirection: "column",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,39,44,0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "28px", color: "rgba(232,39,44,0.15)", position: "absolute", top: "20px", right: "24px" }}>{s.icon}</span>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: 600, color: COLORS.text, margin: "0 0 12px", letterSpacing: "0.02em" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", fontWeight: 300, color: COLORS.sub, lineHeight: 1.7, margin: 0, flex: 1 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SPONSORS / FOR BRANDS ──────────────────────

function ForBrands() {
  return (
    <section style={{ padding: "100px clamp(20px, 5vw, 60px)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${COLORS.bg}, ${COLORS.surface} 30%, ${COLORS.surface} 70%, ${COLORS.bg})`, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 60px)", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.accent }} />
                <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "10px", fontWeight: 600, color: COLORS.accent, letterSpacing: "0.2em" }}>FOR BRANDS</span>
              </div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.text, margin: "0 0 20px", lineHeight: 1.1 }}>
                YOUR BRAND.<br /><span style={{ color: COLORS.accent }}>THEIR STREETS.</span>
              </h2>
              <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "15px", fontWeight: 300, color: COLORS.sub, lineHeight: 1.7, margin: "0 0 28px" }}>
                Every Street Games event reaches hundreds in person and thousands online. Your brand gets woven into content that people actually want to watch and share — not skip.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Branded game segments with your name on them",
                  "Logo placement seen by every viewer, every clip",
                  "Product integration that feels organic, not forced",
                  "Full content package — Reels, TikToks, YouTube, Stories",
                  "Direct access to Gen Z audiences across East Africa",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: COLORS.accent, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", color: COLORS.sub }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { num: "8+", label: "CONTENT PIECES PER EVENT" },
                { num: "100%", label: "ORGANIC REACH" },
                { num: "3", label: "PLATFORMS COVERED" },
                { num: "∞", label: "REPLAY VALUE" },
              ].map((stat, i) => (
                <div key={i} style={{ padding: "28px 20px", background: COLORS.card, borderRadius: "6px", border: `1px solid ${COLORS.border}`, textAlign: "center" }}>
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "32px", fontWeight: 700, color: COLORS.accent, margin: "0 0 4px" }}>{stat.num}</p>
                  <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 600, color: COLORS.muted, letterSpacing: "0.12em", margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────

function About() {
  return (
    <section id="about" style={{ padding: "100px clamp(20px, 5vw, 60px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.gold }} />
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "10px", fontWeight: 600, color: COLORS.gold, letterSpacing: "0.2em" }}>ABOUT</span>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 60px)" }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.text, margin: "0 0 20px", lineHeight: 1.1 }}>
              ENTERTAINMENT<br />BUILT FOR<br /><span style={{ color: COLORS.accent }}>THE STREETS</span>
            </h2>
            <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "15px", fontWeight: 300, color: COLORS.sub, lineHeight: 1.8, margin: 0 }}>
              Relledomi Entertainment is an agency that creates live competitions, viral content, and brand experiences rooted in street culture. Founded in Nairobi with operations across the US and Kenya, we exist at the intersection of entertainment, community, and the raw energy of public spaces.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "12px" }}>
              {[
                { label: "ORIGINAL SHOWS", desc: "We create and own entertainment IP. Street Games is the first — more formats are in development." },
                { label: "BRAND ACTIVATIONS", desc: "Custom street-level events produced for corporate clients with full content packages." },
                { label: "CONTENT PRODUCTION", desc: "End-to-end video production optimized for TikTok, Instagram, and YouTube." },
                { label: "TALENT DEVELOPMENT", desc: "We discover, build, and manage emerging creators from the streets of Nairobi." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "20px 24px", background: COLORS.card, borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "14px", color: COLORS.text, margin: "0 0 4px", letterSpacing: "0.03em" }}>{item.label}</p>
                  <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "12px", color: COLORS.muted, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "sponsorship", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: "4px",
    padding: "14px 18px", color: COLORS.text, fontFamily: "'Libre Franklin', sans-serif",
    fontSize: "14px", width: "100%", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px clamp(20px, 5vw, 60px)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${COLORS.bg}, ${COLORS.surface} 30%, ${COLORS.surface})`, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 60px)" }}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.accent }} />
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "10px", fontWeight: 600, color: COLORS.accent, letterSpacing: "0.2em" }}>CONTACT</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: COLORS.text, margin: "0 0 20px", lineHeight: 1.1 }}>
              LET'S WORK
            </h2>
            <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "15px", fontWeight: 300, color: COLORS.sub, lineHeight: 1.7, margin: "0 0 32px" }}>
              Whether you're a brand looking for activation, a venue wanting to host, or just want to say what's up — we're here.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "EMAIL", value: "hello@relledomi.com" },
                { label: "INSTAGRAM", value: "@relledomi" },
                { label: "STREET GAMES", value: "@streetgamesKE" },
                { label: "BASED IN", value: "Nairobi, Kenya × United States" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "9px", fontWeight: 700, color: COLORS.muted, letterSpacing: "0.12em", minWidth: "100px" }}>{item.label}</span>
                  <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "14px", color: COLORS.sub }}>{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {!sent ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <input style={inputStyle} placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  onFocus={e => e.target.style.borderColor = COLORS.accent} onBlur={e => e.target.style.borderColor = COLORS.border} />
                <input style={inputStyle} placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  onFocus={e => e.target.style.borderColor = COLORS.accent} onBlur={e => e.target.style.borderColor = COLORS.border} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                  {["sponsorship", "booking", "collaboration", "other"].map(t => (
                    <button key={t} onClick={() => setForm({...form, type: t})} style={{
                      padding: "10px", background: form.type === t ? COLORS.gradientStart : COLORS.card,
                      border: `1px solid ${form.type === t ? "rgba(232,39,44,0.3)" : COLORS.border}`,
                      borderRadius: "4px", color: form.type === t ? COLORS.accent : COLORS.muted,
                      fontFamily: "'Libre Franklin', sans-serif", fontSize: "11px", fontWeight: 600,
                      letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
                      transition: "all 0.2s",
                    }}>{t}</button>
                  ))}
                </div>
                <textarea style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} placeholder="Tell us what you're thinking..." value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  onFocus={e => e.target.style.borderColor = COLORS.accent} onBlur={e => e.target.style.borderColor = COLORS.border} />
                <button onClick={() => setSent(true)} style={{
                  background: COLORS.accent, border: "none", borderRadius: "4px",
                  padding: "16px 28px", color: "#fff", fontFamily: "'Oswald', sans-serif",
                  fontSize: "15px", fontWeight: 600, letterSpacing: "0.08em", cursor: "pointer",
                  transition: "all 0.2s", textTransform: "uppercase", alignSelf: "flex-start",
                }}
                onMouseEnter={e => e.target.style.background = COLORS.accentHover}
                onMouseLeave={e => e.target.style.background = COLORS.accent}
                >Send Message</button>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "60px", background: COLORS.card, borderRadius: "8px", border: `1px solid rgba(0,230,118,0.2)` }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "24px", color: "#00E676", margin: "0 0 8px" }}>MESSAGE SENT</p>
                  <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "13px", color: COLORS.sub }}>We'll get back to you within 48 hours.</p>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────

function Footer() {
  return (
    <footer style={{ padding: "40px clamp(20px, 5vw, 60px)", borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "16px", fontWeight: 700, color: COLORS.accent }}>RELLEDOMI</span>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "8px", color: COLORS.muted, letterSpacing: "0.12em" }}>ENTERTAINMENT</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Instagram", "TikTok", "YouTube", "Twitter"].map(s => (
            <span key={s} style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "11px", color: COLORS.muted, cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = COLORS.sub}
              onMouseLeave={e => e.target.style.color = COLORS.muted}
            >{s}</span>
          ))}
        </div>
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "10px", color: COLORS.muted }}>© 2026 Relledomi Entertainment LLC. All rights reserved.</span>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────

export default function RelledomiSite() {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", color: COLORS.text, overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Libre+Franklin:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav />
      <Hero />
      <Shows />
      <Services />
      <ForBrands />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
