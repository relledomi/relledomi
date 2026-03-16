import { useState } from "react";

const brandColors = {
  bg: "#0A0A0A",
  surface: "#111111",
  surfaceHover: "#1A1A1A",
  accent: "#FF2D2D",
  accentGlow: "rgba(255, 45, 45, 0.15)",
  yellow: "#FFD600",
  yellowGlow: "rgba(255, 214, 0, 0.12)",
  green: "#00E676",
  greenGlow: "rgba(0, 230, 118, 0.12)",
  text: "#F5F5F0",
  textMuted: "#8A8A80",
  border: "#222222",
};

const tabs = [
  { id: "brands", label: "BRAND TARGETS", icon: "◎" },
  { id: "trademark", label: "TRADEMARK", icon: "◈" },
  { id: "company", label: "COMPANY SETUP", icon: "⬡" },
];

function Badge({ children, color = "red" }) {
  const colors = {
    red: { bg: brandColors.accentGlow, text: brandColors.accent, border: "rgba(255,45,45,0.3)" },
    yellow: { bg: brandColors.yellowGlow, text: brandColors.yellow, border: "rgba(255,214,0,0.25)" },
    green: { bg: brandColors.greenGlow, text: brandColors.green, border: "rgba(0,230,118,0.25)" },
    muted: { bg: "rgba(138,138,128,0.1)", text: brandColors.textMuted, border: "rgba(138,138,128,0.2)" },
  };
  const c = colors[color];
  return (
    <span style={{ display: "inline-block", padding: "3px 10px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: c.bg, color: c.text, border: `1px solid ${c.border}`, borderRadius: "3px", fontFamily: "'JetBrains Mono', monospace" }}>
      {children}
    </span>
  );
}

function Card({ title, children, accent = false, tag }) {
  return (
    <div style={{ background: brandColors.surface, border: `1px solid ${accent ? brandColors.accent : brandColors.border}`, borderRadius: "6px", padding: "24px", marginBottom: "16px", position: "relative", overflow: "hidden" }}>
      {accent && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${brandColors.accent}, transparent)` }} />}
      {(title || tag) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          {title && <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", letterSpacing: "0.06em", color: brandColors.text, margin: 0 }}>{title}</h3>}
          {tag}
        </div>
      )}
      {children}
    </div>
  );
}

function BrandCard({ name, type, country, fit, pitch, offering, contact }) {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
        <div>
          <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "20px", color: brandColors.text, margin: "0 0 6px", letterSpacing: "0.03em" }}>{name}</h4>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <Badge color={country === "KENYA" ? "green" : "yellow"}>{country}</Badge>
            <Badge color="muted">{type}</Badge>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <p style={{ fontSize: "11px", color: brandColors.accent, margin: "0 0 4px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Why they fit</p>
        <p style={{ fontSize: "12px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>{fit}</p>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <p style={{ fontSize: "11px", color: brandColors.yellow, margin: "0 0 4px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Your pitch angle</p>
        <p style={{ fontSize: "12px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>{pitch}</p>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <p style={{ fontSize: "11px", color: brandColors.green, margin: "0 0 4px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>What you ask for</p>
        <p style={{ fontSize: "12px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>{offering}</p>
      </div>
      {contact && (
        <div style={{ padding: "8px 12px", background: brandColors.bg, borderRadius: "4px", border: `1px solid ${brandColors.border}` }}>
          <p style={{ fontSize: "10px", color: brandColors.textMuted, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>{contact}</p>
        </div>
      )}
    </Card>
  );
}

// ─── BRANDS SECTION ──────────────────────

function BrandsSection() {
  const [filter, setFilter] = useState("all");
  const brands = [
    {
      name: "SAFARICOM (HOOK PLATFORM)",
      type: "TELCO / YOUTH",
      country: "KENYA",
      fit: "Safaricom Hook is their dedicated youth engagement platform — they already run campus activations, gaming events, and sponsor youth content. They held a gaming conference at KICC in 2025 and run the Hook Circle campus bootcamps at KU, UoN, etc. Street Games is exactly the type of activation they fund.",
      pitch: "\"Street Games delivers what Hook Circle does — but with viral content as the output. Every event reaches 10K+ organic views and puts Safaricom in front of Gen Z in the spaces they actually hang out. We're not asking for a stage — we're offering a content machine with your brand baked in.\"",
      offering: "KSh 50K-200K per event sponsorship, branded game segments ('Safaricom Speed Round'), data bundle prizes, M-PESA integration for entry/voting, Hook Circle co-branding",
      contact: "Apply via safaricom.co.ke/about/community-impact → Sponsorship portal. Also DM @SafaricomPLC on Twitter/X.",
    },
    {
      name: "COCA-COLA KENYA",
      type: "FMCG / BEVERAGE",
      country: "KENYA",
      fit: "Coca-Cola runs campus activations constantly — they just relaunched Share a Coke with a dual-campus event at JKUAT and Makerere in 2025. They're actively investing in 'third spaces' where Gen Z connects IRL. Street Games IS that third space.",
      pitch: "\"Your Share a Coke campaign targets the exact same audience in the exact same locations. Street Games gives you a recurring, content-rich activation at campuses and CBD zones — branded cups as prizes, Coke branding on the game zone, and millions of impressions per month.\"",
      offering: "In-kind product supply (drinks for events), branded game zones, co-branded content, potential cash sponsorship for series/season format",
      contact: "Reach via Coca-Cola Kenya marketing team or local Coca-Cola Beverages Kenya reps. Also via agency partners.",
    },
    {
      name: "EABL / TUSKER",
      type: "BEVERAGE / CULTURE",
      country: "KENYA",
      fit: "EABL (Tusker) sponsors massive youth-facing events — OktobaFest, music festivals, campus tours. They partnered with Safaricom on a KSh 30M activation. They're looking for cultural touchpoints with 18-30 year olds outside traditional media.",
      pitch: "\"Tusker sponsors concerts that last one night. Street Games is a recurring series that builds a community and generates weekly content. Same audience, 10x the touchpoints, fraction of the cost. Let us run a 'Tusker Challenge' segment at every event.\"",
      offering: "Named game segment ('Tusker Challenge'), event co-sponsorship, product supply for 18+ events, branded merch for winners",
      contact: "EABL marketing department or via their agency roster. Apply through EABL brand activation channels.",
    },
    {
      name: "SPORTPESA / BETWAY",
      type: "BETTING / ENTERTAINMENT",
      country: "KENYA",
      fit: "Betting companies are the biggest spenders on youth sports sponsorship in Kenya. They sponsor football leagues, events, and content creators. Street Games' competitive format + crowd energy maps directly to their brand positioning.",
      pitch: "\"Your audience loves competition, stakes, and winners. Street Games is live competition content — no gambling required, but all the energy your brand thrives on. We offer weekly branded content with your logo in front of hundreds of thousands.\"",
      offering: "Title sponsorship for tournament arcs, branded prize pools, digital co-promotion, on-location branding",
      contact: "Via sports marketing / partnerships teams. SportPesa especially active in grassroots sports.",
    },
    {
      name: "NCBA BANK",
      type: "BANKING / YOUTH",
      country: "KENYA",
      fit: "NCBA runs youth-focused sponsorships and community sports programs. They fund county-level tournaments and campus initiatives. Financial brands want to be seen as accessible to young Kenyans.",
      pitch: "\"Street Games reaches thousands of university students monthly — your next account holders. A 'Money Smart' trivia round with NCBA branding builds brand recall in a fun context while aligning with your youth banking push.\"",
      offering: "Branded trivia/knowledge game segments, campus co-activation, student banking sign-up integration, cash prizes via NCBA channels",
      contact: "Via citizenship.ncbagroup.com/sponsorships or direct to marketing team.",
    },
    {
      name: "RED BULL",
      type: "ENERGY / CULTURE",
      country: "US / GLOBAL",
      fit: "Red Bull invented the 'brand as content company' model. They sponsor street culture, extreme sports, and grassroots competitions globally. They have presence in Kenya and actively scout for local activations that produce content.",
      pitch: "\"Red Bull sponsors global street competitions but has limited grassroots activation in East Africa. Street Games is your plug into Nairobi's youth culture — we're producing exactly the kind of raw, high-energy content Red Bull's channels thrive on.\"",
      offering: "Product supply, event co-branding, content licensing to Red Bull channels, potential production support, venue access through their event network",
      contact: "Via redbull.com/ke → contact. Also via Red Bull Kenya reps and their local agency.",
    },
    {
      name: "NIKE / ADIDAS (EAST AFRICA)",
      type: "SPORTSWEAR",
      country: "US / GLOBAL",
      fit: "Both brands are building presence in African youth culture beyond traditional athletics. Street Games' physical challenges + street aesthetic aligns with their 'sport meets culture' positioning.",
      pitch: "\"Outfit our contestants. Winners wear your gear. Every viral clip features your product on real Nairobi youth doing real things on real streets. This isn't a billboard — it's authentic product placement in content that gets millions of views.\"",
      offering: "In-kind gear for contestants/winners (bibs, shoes, shirts), branded prize packages, potential event space at retail locations, co-branded merch capsule",
      contact: "Via Nike East Africa / Adidas Kenya distributors. Also via their respective campus ambassador programs.",
    },
    {
      name: "SPOTIFY / AUDIOMACK",
      type: "MUSIC / STREAMING",
      country: "US / GLOBAL",
      fit: "Both platforms are competing for the Kenyan music streaming market. Street Games uses music, energy, and crowd culture — perfect for playlist and artist integration. Audiomack especially has deep roots in African music.",
      pitch: "\"Every Street Games event uses music. Every Reel and TikTok uses sound. Let us co-curate a 'Street Games' playlist, feature upcoming Kenyan artists at events, and drive streams through our content. We're a music discovery engine disguised as a game show.\"",
      offering: "Playlist partnership, emerging artist performances at events, in-app promotion, audio branding on content",
      contact: "Spotify for Artists Africa team. Audiomack via partnerships@audiomack.com.",
    },
    {
      name: "GARDEN CITY / TRM / TWO RIVERS MALL",
      type: "VENUE / RETAIL",
      country: "KENYA",
      fit: "Malls need foot traffic and youth engagement. Street Games brings crowds and content to their spaces. This is a win-win: you get a venue, they get an event.",
      pitch: "\"We bring 100-300 people to your space every event, generate content that tags your location, and create a recurring reason for young Nairobi to visit. You give us a corner, we give you a crowd and social media presence.\"",
      offering: "Free venue space (outdoor areas, atriums), event listing in mall programming, potential co-marketing, security support",
      contact: "Direct to mall management / marketing offices. Garden City events team, TRM community manager.",
    },
    {
      name: "UBER / BOLT KENYA",
      type: "RIDESHARE / MOBILITY",
      country: "US / GLOBAL",
      fit: "Ride-hailing brands sponsor events to drive app usage and build cultural relevance. Discount codes tied to events drive measurable ROI. Both are competing hard in the Nairobi market.",
      pitch: "\"Every Street Games attendee needs a ride there and back. Give us a promo code per event, we push it in stories and on-location. You get measurable conversion — downloads, rides, data — and we get branded prizes ('free Uber ride for the winner').\"",
      offering: "Promo codes as prizes, branded transport to events, co-branded stories, data sharing on conversion metrics",
      contact: "Via Uber for Business Kenya or Bolt partnerships portal.",
    },
  ];

  const filtered = filter === "all" ? brands : brands.filter(b => filter === "kenya" ? b.country === "KENYA" : b.country !== "KENYA");

  return (
    <div>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", color: brandColors.text, margin: "0 0 8px", letterSpacing: "0.04em" }}>COLLABORATION TARGETS</h2>
      <p style={{ fontSize: "13px", color: brandColors.textMuted, margin: "0 0 20px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
        10 brands across Kenya and global markets — each with a specific pitch angle and what to ask for.
      </p>

      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        {[{ id: "all", label: "ALL" }, { id: "kenya", label: "KENYA" }, { id: "global", label: "US / GLOBAL" }].map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)} style={{
            background: filter === f.id ? brandColors.accentGlow : "transparent",
            border: `1px solid ${filter === f.id ? brandColors.accent : brandColors.border}`,
            color: filter === f.id ? brandColors.accent : brandColors.textMuted,
            padding: "6px 14px", borderRadius: "3px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.06em", cursor: "pointer",
          }}>
            {f.label}
          </button>
        ))}
      </div>

      <Card title="APPROACH STRATEGY" accent>
        <p style={{ fontSize: "13px", lineHeight: "1.7", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
          Don't pitch cold with nothing to show. Run 2-3 events first, produce strong content, build a small audience (even 1-2K followers), then pitch with proof. Your deck should include: viewer counts, crowd photos, content samples, and a clear sponsorship package with tiers (KSh 20K / 50K / 100K+ per event). Start with in-kind deals (product, venue, airtime) before chasing cash. In-kind partnerships are easier to close and still look like major sponsorships on camera.
        </p>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {filtered.map((brand, i) => <BrandCard key={i} {...brand} />)}
      </div>
    </div>
  );
}

// ─── TRADEMARK SECTION ──────────────────────

function TrademarkSection() {
  return (
    <div>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", color: brandColors.text, margin: "0 0 24px", letterSpacing: "0.04em" }}>TRADEMARK ANALYSIS</h2>

      <Card title="IS 'STREET GAMES' ALREADY TAKEN?" accent>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ padding: "16px", background: brandColors.bg, borderRadius: "4px", border: `1px solid rgba(255,45,45,0.3)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Badge color="red">CONFLICT — UK</Badge>
            </div>
            <p style={{ fontSize: "13px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <strong style={{ color: brandColors.text }}>StreetGames UK</strong> is a registered charity (since 2007) and company in the UK focused on youth sport in underserved communities. They hold the "StreetGames" name as a registered company and charity. They operate @streetgamesuk on Instagram. This is a potential naming conflict if you ever expand to the UK or want global trademark protection.
            </p>
          </div>

          <div style={{ padding: "16px", background: brandColors.bg, borderRadius: "4px", border: `1px solid rgba(255,214,0,0.3)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Badge color="yellow">OVERLAP — US</Badge>
            </div>
            <p style={{ fontSize: "13px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <strong style={{ color: brandColors.text }}>NYC Parks "Street Games"</strong> is a public event run by New York City Parks. "Seventh Street Games" and "W21 Twenty First Street Games" are registered US trademarks but are in different categories (tabletop games, software). The generic phrase "street games" isn't strongly trademarked in entertainment/events in the US, but it's not clean either.
            </p>
          </div>

          <div style={{ padding: "16px", background: brandColors.bg, borderRadius: "4px", border: `1px solid rgba(0,230,118,0.3)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Badge color="green">LIKELY CLEAR — KENYA</Badge>
            </div>
            <p style={{ fontSize: "13px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <strong style={{ color: brandColors.text }}>No known "Street Games" trademark in Kenya.</strong> The term doesn't appear in KIPI databases for entertainment or events. However, you should run an official TM27 search at KIPI (costs a few thousand KSh) to confirm before filing.
            </p>
          </div>
        </div>
      </Card>

      <Card title="RECOMMENDED TRADEMARK STRATEGY">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            {
              step: "1",
              title: "TRADEMARK 'RELLEDOMI' FIRST",
              desc: "This is your unique, distinctive brand name and has zero conflicts anywhere. It's far more protectable than 'Street Games' which is generic/descriptive. File for 'RELLEDOMI' as your primary trademark in Kenya through KIPI.",
              priority: "HIGH",
            },
            {
              step: "2",
              title: "FILE 'STREET GAMES BY RELLEDOMI' AS A COMPOSITE",
              desc: "The full phrase 'Street Games by Relledomi' is more distinctive than 'Street Games' alone. File this as a word+logo combination trademark. The 'by Relledomi' suffix strengthens it significantly.",
              priority: "HIGH",
            },
            {
              step: "3",
              title: "DON'T RELY ON 'STREET GAMES' ALONE",
              desc: "As a standalone phrase, 'Street Games' is generic/descriptive for your actual service (games played on streets). It may face registration challenges and is harder to enforce. Always pair it with Relledomi in legal and branding contexts.",
              priority: "IMPORTANT",
            },
            {
              step: "4",
              title: "FILE IN THE RIGHT CLASSES",
              desc: "Class 41 (entertainment, sporting and cultural activities) is your primary class. Consider also Class 38 (broadcasting/streaming services) and Class 25 (clothing/merch) if planning merch drops.",
              priority: "MEDIUM",
            },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: brandColors.bg, borderRadius: "4px", border: `1px solid ${brandColors.border}`, display: "flex", gap: "16px" }}>
              <div style={{ minWidth: "36px", height: "36px", borderRadius: "50%", background: brandColors.accentGlow, border: `2px solid ${brandColors.accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: "16px", color: brandColors.accent }}>
                {item.step}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "15px", color: brandColors.text, letterSpacing: "0.04em" }}>{item.title}</span>
                  <Badge color={item.priority === "HIGH" ? "red" : item.priority === "IMPORTANT" ? "yellow" : "muted"}>{item.priority}</Badge>
                </div>
                <p style={{ fontSize: "12px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="KENYA TRADEMARK COSTS & TIMELINE">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <p style={{ fontSize: "11px", color: brandColors.accent, margin: "0 0 12px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Costs (Foreign Applicant)</p>
            {[
              { item: "Official search (TM27)", cost: "USD 200" },
              { item: "Filing per class (TM2)", cost: "USD 200" },
              { item: "Additional class", cost: "USD 150" },
              { item: "Agent/attorney fees", cost: "USD 300-600" },
              { item: "TOTAL (2 classes + agent)", cost: "USD 850-1,150" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${brandColors.border}`, fontSize: "12px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                <span style={{ color: brandColors.textMuted }}>{row.item}</span>
                <span style={{ color: i === 4 ? brandColors.yellow : brandColors.text, fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: i === 4 ? 700 : 400 }}>{row.cost}</span>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: "11px", color: brandColors.accent, margin: "0 0 12px", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.06em" }}>Timeline</p>
            {[
              { phase: "Preliminary search", time: "1-3 days" },
              { phase: "Filing & examination", time: "2-6 months" },
              { phase: "Publication period", time: "60 days" },
              { phase: "Registration & certificate", time: "1-2 months" },
              { phase: "TOTAL (no opposition)", time: "6-10 months" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${brandColors.border}`, fontSize: "12px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                <span style={{ color: brandColors.textMuted }}>{row.phase}</span>
                <span style={{ color: i === 4 ? brandColors.yellow : brandColors.text, fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: i === 4 ? 700 : 400 }}>{row.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "16px", padding: "12px", background: brandColors.yellowGlow, borderRadius: "4px", border: `1px solid rgba(255,214,0,0.2)` }}>
          <p style={{ fontSize: "11px", color: brandColors.yellow, margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>
            NOTE: As a foreign applicant, you must appoint a registered Kenyan trademark agent. Protection lasts 10 years, renewable indefinitely.
          </p>
        </div>
      </Card>
    </div>
  );
}

// ─── COMPANY SECTION ──────────────────────

function CompanySection() {
  return (
    <div>
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", color: brandColors.text, margin: "0 0 24px", letterSpacing: "0.04em" }}>DO YOU NEED TO REGISTER RELLEDOMI?</h2>

      <Card title="SHORT ANSWER: YES, BUT TIMING MATTERS" accent>
        <p style={{ fontSize: "14px", lineHeight: "1.7", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
          You don't need a registered company to start running events and posting content. But you DO need one before you can accept sponsorship money, sign contracts with brands, open a business bank account, or protect yourself legally. The move is: <span style={{ color: brandColors.text }}>start building now, register before you close your first deal.</span>
        </p>
      </Card>

      <Card title="TWO PATHS FOR YOU">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ padding: "20px", background: brandColors.bg, borderRadius: "4px", border: `1px solid ${brandColors.accent}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <Badge color="green">RECOMMENDED</Badge>
            </div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "17px", color: brandColors.text, margin: "0 0 12px" }}>OPTION A: REGISTER A LOCAL KENYAN COMPANY</h4>
            <p style={{ fontSize: "12px", lineHeight: "1.6", color: brandColors.textMuted, margin: "0 0 12px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Register a Private Limited Company (Ltd) in Kenya. Foreigners can own 100% — no local partner required in the entertainment sector. This is the simplest, cheapest, and fastest path.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Full foreign ownership allowed",
                "~KSh 10,650 government fees",
                "3-7 days via eCitizen/BRS portal",
                "Can open Kenyan bank account",
                "Can receive M-PESA business payments",
                "Can sign sponsorship contracts",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", fontSize: "11px", color: brandColors.textMuted, fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  <span style={{ color: brandColors.green }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "20px", background: brandColors.bg, borderRadius: "4px", border: `1px solid ${brandColors.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <Badge color="muted">ALTERNATIVE</Badge>
            </div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "17px", color: brandColors.text, margin: "0 0 12px" }}>OPTION B: REGISTER A FOREIGN COMPANY BRANCH</h4>
            <p style={{ fontSize: "12px", lineHeight: "1.6", color: brandColors.textMuted, margin: "0 0 12px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
              If you have or plan to have a US LLC/Corp, you can register a branch in Kenya. More complex and expensive, but useful if you want a US-based parent entity.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "Requires existing US entity first",
                "Must appoint Kenya-resident local rep",
                "Notarized US incorporation docs needed",
                "Higher setup costs (legal + admin)",
                "Useful for US brand deals / investment",
                "Dual presence (US + Kenya)",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", fontSize: "11px", color: brandColors.textMuted, fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  <span style={{ color: brandColors.yellow }}>→</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card title="REGISTRATION STEPS (OPTION A — LOCAL COMPANY)">
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { step: "1", title: "NAME SEARCH", desc: "Go to eCitizen portal → BRS section. Submit 3 preferred names (e.g., 'Relledomi Entertainment Ltd', 'Relledomi Ltd', 'Relledomi Africa Ltd'). Costs KSh 150. Results in 1-2 days." },
            { step: "2", title: "FILL REGISTRATION FORMS", desc: "Complete CR1 (application), CR2 (articles), CR8 (address). You'll need your passport instead of a Kenyan ID. Declare share capital, director details, registered address in Kenya." },
            { step: "3", title: "SUBMIT & PAY", desc: "Submit forms via eCitizen. Pay ~KSh 10,500 in government fees. Processing takes 3-5 working days." },
            { step: "4", title: "GET CERTIFICATE OF INCORPORATION", desc: "Once approved, you receive your Certificate of Incorporation with a unique company number. You are now a legal Kenyan entity." },
            { step: "5", title: "POST-REGISTRATION", desc: "Register for KRA PIN (tax), obtain county business permit, register with NHIF/NSSF if hiring. Open a business bank account (Equity, KCB, NCBA all work well for startups)." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: brandColors.bg, borderRadius: "4px", border: `1px solid ${brandColors.border}`, display: "flex", gap: "16px" }}>
              <div style={{ minWidth: "32px", height: "32px", borderRadius: "4px", background: brandColors.accentGlow, border: `1px solid ${brandColors.accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: "14px", color: brandColors.accent }}>
                {item.step}
              </div>
              <div>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "14px", color: brandColors.text, margin: "0 0 4px", letterSpacing: "0.04em" }}>{item.title}</p>
                <p style={{ fontSize: "12px", lineHeight: "1.6", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="THE INVESTOR PERMIT QUESTION">
        <div style={{ padding: "16px", background: brandColors.bg, borderRadius: "4px", border: `1px solid ${brandColors.border}` }}>
          <p style={{ fontSize: "13px", lineHeight: "1.7", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
            A <strong style={{ color: brandColors.text }}>Class G Investor Permit</strong> is required if you want to physically operate in Kenya as a foreign business owner. It requires a minimum investment of <strong style={{ color: brandColors.yellow }}>USD 100,000</strong> in a registered Kenyan company. However, if you're running Street Games primarily remotely with local team members executing on the ground, you may not need this immediately. You can own a Kenyan company without being physically present. When your revenue justifies it (or you want to relocate), apply for the Class G through the eFNS portal.
          </p>
        </div>
      </Card>

      <Card title="RECOMMENDED SEQUENCE">
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {[
            { phase: "NOW", action: "Run events, build content, grow audience. No company needed yet.", color: brandColors.green },
            { phase: "MONTH 1-2", action: "Register 'Relledomi Ltd' or 'Relledomi Entertainment Ltd' via eCitizen. ~KSh 10K.", color: brandColors.yellow },
            { phase: "MONTH 2-3", action: "File trademark for 'RELLEDOMI' and 'STREET GAMES BY RELLEDOMI' at KIPI.", color: brandColors.yellow },
            { phase: "MONTH 3-4", action: "Open business bank account. Set up M-PESA business till. Get KRA PIN.", color: brandColors.accent },
            { phase: "MONTH 4+", action: "Start signing sponsorship contracts as Relledomi Ltd. You're legit.", color: brandColors.accent },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", padding: "12px 0", borderBottom: i < 4 ? `1px solid ${brandColors.border}` : "none" }}>
              <div style={{ minWidth: "80px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: item.color, letterSpacing: "0.04em" }}>{item.phase}</span>
              </div>
              <p style={{ fontSize: "12px", lineHeight: "1.5", color: brandColors.textMuted, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>{item.action}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────

export default function CollaborationsGuide() {
  const [activeTab, setActiveTab] = useState("brands");

  return (
    <div style={{ minHeight: "100vh", background: brandColors.bg, color: brandColors.text, fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${brandColors.border}`, padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", maxWidth: "1100px", margin: "0 auto" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "16px", color: brandColors.accent, letterSpacing: "0.04em", marginRight: "24px", padding: "14px 0" }}>
            STREET GAMES
          </span>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: "none", border: "none",
              borderBottom: activeTab === tab.id ? `2px solid ${brandColors.accent}` : "2px solid transparent",
              color: activeTab === tab.id ? brandColors.text : brandColors.textMuted,
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "0.08em",
              padding: "14px 16px", cursor: "pointer", whiteSpace: "nowrap",
              display: "flex", alignItems: "center", gap: "6px",
            }}>
              <span style={{ fontSize: "10px", opacity: 0.6 }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px" }}>
        {activeTab === "brands" && <BrandsSection />}
        {activeTab === "trademark" && <TrademarkSection />}
        {activeTab === "company" && <CompanySection />}
      </main>

      <footer style={{ borderTop: `1px solid ${brandColors.border}`, padding: "20px 24px", textAlign: "center" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: brandColors.textMuted, letterSpacing: "0.08em" }}>
          STREET GAMES BY RELLEDOMI — COLLABORATIONS & LEGAL GUIDE v1.0
        </span>
      </footer>
    </div>
  );
}
