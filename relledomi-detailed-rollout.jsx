import { useState } from "react";

const C = {
  bg: "#07070A", surface: "#0F0F14", alt: "#15151C", alt2: "#1A1A24",
  accent: "#FF2D2D", accentGlow: "rgba(255,45,45,0.10)", accentSoft: "rgba(255,45,45,0.05)",
  gold: "#FFD600", goldGlow: "rgba(255,214,0,0.08)",
  green: "#00E676", greenGlow: "rgba(0,230,118,0.08)",
  blue: "#448AFF", blueGlow: "rgba(68,138,255,0.08)",
  purple: "#B388FF", purpleGlow: "rgba(179,136,255,0.08)",
  orange: "#FF9100", orangeGlow: "rgba(255,145,0,0.08)",
  text: "#EEEEE8", sub: "#A0A098", muted: "#5E5E58",
  border: "#1C1C24", borderLight: "#262630",
};

const F = {
  h: "'Bebas Neue', sans-serif",
  b: "'IBM Plex Sans', sans-serif",
  m: "'JetBrains Mono', monospace",
};

function Badge({ children, color = "red" }) {
  const m = {
    red: [C.accentGlow, C.accent], gold: [C.goldGlow, C.gold], green: [C.greenGlow, C.green],
    blue: [C.blueGlow, C.blue], purple: [C.purpleGlow, C.purple], orange: [C.orangeGlow, C.orange],
    muted: ["rgba(94,94,88,0.08)", C.muted],
  };
  const [bg, c] = m[color] || m.red;
  return <span style={{ display: "inline-block", padding: "2px 8px", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: bg, color: c, border: `1px solid ${c}22`, borderRadius: "2px", fontFamily: F.m }}>{children}</span>;
}

function CheckItem({ children, entity, cost, done, dep, priority }) {
  const entityColors = { US: C.blue, KE: C.green, BOTH: C.gold, IP: C.purple, OPS: C.orange };
  const prioColors = { critical: C.accent, high: C.gold, medium: C.blue, low: C.muted };
  return (
    <div style={{ padding: "12px 14px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}`, display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <div style={{ width: "16px", height: "16px", borderRadius: "3px", border: `1.5px solid ${done ? C.green : C.border}`, background: done ? C.greenGlow : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
        {done && <span style={{ color: C.green, fontSize: "10px" }}>✓</span>}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "4px" }}>
          {entity && <Badge color={entity === "US" ? "blue" : entity === "KE" ? "green" : entity === "IP" ? "purple" : entity === "OPS" ? "orange" : "gold"}>{entity}</Badge>}
          {priority && <Badge color={priority === "critical" ? "red" : priority === "high" ? "gold" : priority === "medium" ? "blue" : "muted"}>{priority}</Badge>}
          {cost && <span style={{ fontFamily: F.m, fontSize: "9px", color: C.gold }}>{cost}</span>}
        </div>
        <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: F.b, lineHeight: "1.6" }}>{children}</p>
        {dep && <p style={{ fontSize: "10px", color: C.muted, margin: "4px 0 0", fontFamily: F.m }}>⤷ depends on: {dep}</p>}
      </div>
    </div>
  );
}

function KPIBar({ label, target, color = C.gold }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0" }}>
      <span style={{ fontSize: "10px", color: C.muted, fontFamily: F.m, minWidth: "120px", letterSpacing: "0.04em" }}>{label}</span>
      <div style={{ flex: 1, height: "3px", background: C.border, borderRadius: "2px", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", borderRadius: "2px", background: `linear-gradient(90deg, ${color}, ${color}44)`, width: "100%" }} />
      </div>
      <span style={{ fontSize: "11px", color, fontFamily: F.h, minWidth: "80px", textAlign: "right" }}>{target}</span>
    </div>
  );
}

function CostSummary({ items }) {
  const total = items.reduce((sum, i) => sum + (i.amount || 0), 0);
  return (
    <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
      <p style={{ fontFamily: F.m, fontSize: "9px", color: C.muted, margin: "0 0 10px", letterSpacing: "0.1em" }}>PHASE COSTS</p>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px solid ${C.border}`, fontSize: "11px" }}>
          <span style={{ color: C.sub, fontFamily: F.b }}>{item.label}</span>
          <span style={{ color: C.text, fontFamily: F.m, fontSize: "10px" }}>{item.cost}</span>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 0", fontSize: "13px" }}>
        <span style={{ color: C.text, fontFamily: F.h, letterSpacing: "0.04em" }}>PHASE TOTAL</span>
        <span style={{ color: C.accent, fontFamily: F.h, fontSize: "16px" }}>${total.toLocaleString()}</span>
      </div>
    </div>
  );
}

function PhaseHeader({ number, title, timeline, color, status }) {
  return (
    <div style={{ padding: "28px 0 20px", borderBottom: `1px solid ${C.border}`, marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: `${color}15`, border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.h, fontSize: "14px", color }}>{number}</div>
          <Badge color={status === "START HERE" ? "red" : status === "ACTIVE" ? "green" : "muted"}>{status}</Badge>
        </div>
        <h2 style={{ fontFamily: F.h, fontSize: "clamp(24px, 4vw, 34px)", color: C.text, margin: 0, letterSpacing: "0.02em" }}>{title}</h2>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontFamily: F.h, fontSize: "18px", color, margin: 0 }}>{timeline}</p>
        <p style={{ fontFamily: F.m, fontSize: "9px", color: C.muted, margin: "2px 0 0", letterSpacing: "0.06em" }}>DURATION</p>
      </div>
    </div>
  );
}

// ─── PHASES ──────────────────────

function Phase0() {
  return (
    <div>
      <PhaseHeader number="0" title="FOUNDATION" timeline="WEEKS 1-2" color={C.accent} status="START HERE" />

      <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 20px", fontFamily: F.b, lineHeight: "1.7" }}>
        This is your setup sprint. No events, no content, no public presence yet. You're building the legal and digital infrastructure that everything else runs on. Do this right and every phase after is smoother.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.blue, margin: "0 0 12px", letterSpacing: "0.04em" }}>WEEK 1 — US ENTITY</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="US" priority="critical" cost="$156">Register Relledomi Entertainment LLC on Rhode Island Secretary of State website. File Articles of Organization online. You'll need: LLC name, your RI address as registered agent, member-managed structure.</CheckItem>
            <CheckItem entity="US" priority="critical" cost="FREE" dep="LLC approved">Apply for EIN on irs.gov. Do this the same day your LLC is approved. It's instant online. This is your federal tax ID for everything — bank accounts, AdSense, contracts.</CheckItem>
            <CheckItem entity="US" priority="critical" dep="EIN received">Open a business bank account. Walk in with Articles of Organization + EIN letter + your ID. Mercury or Relay work well for online businesses; any local RI bank works too.</CheckItem>
            <CheckItem entity="US" priority="high" cost="FREE">Draft operating agreement. Not filed with the state but essential for your records. Outlines: 100% ownership, management structure, profit distribution, what happens if you add partners. Use a free template or write your own.</CheckItem>
            <CheckItem entity="US" priority="medium" cost="$10">Register for RI Sales & Use Tax Permit if you plan to sell merch. Not urgent — can wait until you actually have product to sell.</CheckItem>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.gold, margin: "0 0 12px", letterSpacing: "0.04em" }}>WEEK 1 — DIGITAL PRESENCE</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="BOTH" priority="critical" cost="FREE">Claim ALL social handles immediately. @relledomi on Instagram, TikTok, Twitter/X, YouTube. @streetgamesKE on Instagram, TikTok, Twitter/X. Do this before anything is public — names get sniped fast.</CheckItem>
            <CheckItem entity="BOTH" priority="critical" cost="FREE">Set up YouTube channel as "Relledomi Entertainment". This is the parent channel. Street Games will be a playlist/series within it. Upload a placeholder banner and profile pic.</CheckItem>
            <CheckItem entity="BOTH" priority="high" cost="~$12/yr">Register relledomi.com domain. Use Namecheap, Cloudflare, or Google Domains. Also grab relledomi.co and relledomi.africa if available. Point to a "coming soon" page for now.</CheckItem>
            <CheckItem entity="BOTH" priority="high" cost="FREE">Set up hello@relledomi.com email. Use Google Workspace ($6/mo) or Zoho Mail (free tier). Professional email for sponsor outreach and business communication.</CheckItem>
            <CheckItem entity="BOTH" priority="medium" cost="FREE">Create a Notion or Google Drive workspace for the agency. Folders for: content calendar, sponsor deck, financials, contracts, game formats, contestant database.</CheckItem>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.green, margin: "0 0 12px", letterSpacing: "0.04em" }}>WEEK 2 — KENYA ENTITY (START)</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="KE" priority="critical" cost="KSh 150 (~$1)">Name search on eCitizen → BRS portal. Submit 3 names: "Relledomi Entertainment Ltd", "Relledomi Ltd", "Relledomi Africa Entertainment Ltd". Results in 1-2 days.</CheckItem>
            <CheckItem entity="KE" priority="critical" dep="Name approved">Begin CR1, CR2, CR8 registration forms. You'll use your passport (not KE national ID). Declare share capital, director details. You need a physical Kenya address — your local rep's address or a serviced office works.</CheckItem>
            <CheckItem entity="KE" priority="critical">Identify and confirm your Kenya local representative. This person handles admin on the ground — signs for deliveries, interfaces with government offices, can be your camera operator or a trusted contact in Nairobi.</CheckItem>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.orange, margin: "0 0 12px", letterSpacing: "0.04em" }}>WEEK 2 — PRE-PRODUCTION</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="OPS" priority="high">Finalize your first 3 game formats. Pick from the blueprint: Last One Standing, Price Is Right (Nairobi), and one more. Write out clear rules, timing, and filming notes for each.</CheckItem>
            <CheckItem entity="OPS" priority="high">Acquire minimum gear. Mini tripod (KSh 1,500), wireless mic (KSh 3,000), Bluetooth speaker (KSh 2,000), red branded tape (KSh 500), numbered bibs (KSh 1,000). Ship to your Kenya rep or buy locally.</CheckItem>
            <CheckItem entity="OPS" priority="medium">Design basic brand assets. Relledomi logo, Street Games logo/wordmark, thumbnail templates, story templates. Can use Canva for v1 — doesn't need to be perfect yet.</CheckItem>
            <CheckItem entity="OPS" priority="medium">Create a simple film consent form. Can be a Google Form signed on phone. Covers: permission to film, use likeness in content, tag on social media. Essential for legal protection.</CheckItem>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <CostSummary items={[
          { label: "RI LLC filing", cost: "$156", amount: 156 },
          { label: "EIN", cost: "Free", amount: 0 },
          { label: "Domain (relledomi.com)", cost: "~$12", amount: 12 },
          { label: "KE name search", cost: "~$1", amount: 1 },
          { label: "Gear (via KE rep)", cost: "~$62", amount: 62 },
          { label: "Email setup (Zoho free or GWS)", cost: "$0-6/mo", amount: 0 },
        ]} />
        <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
          <p style={{ fontFamily: F.m, fontSize: "9px", color: C.muted, margin: "0 0 10px", letterSpacing: "0.1em" }}>END-OF-PHASE CHECKLIST</p>
          {["US LLC registered + EIN received", "US business bank account open", "All social handles claimed", "YouTube channel live (placeholder)", "Domain registered", "Kenya name search submitted", "Local rep confirmed", "3 game formats finalized", "Gear ordered/purchased", "Consent form drafted"].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", padding: "4px 0", fontSize: "11px", fontFamily: F.b }}>
              <span style={{ color: C.accent, fontSize: "7px", marginTop: "4px" }}>☐</span>
              <span style={{ color: C.sub }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Phase1() {
  return (
    <div>
      <PhaseHeader number="1" title="KENYA SETUP + PROOF OF CONCEPT" timeline="WEEKS 3-6" color={C.green} status="ACTIVE" />

      <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 20px", fontFamily: F.b, lineHeight: "1.7" }}>
        Two things happen in parallel: finishing Kenya company registration and running your first test events. The test events aren't public launches — they're proof-of-concept sessions with friends to dial in the filming, game formats, and editing workflow before you go live to strangers.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.green, margin: "0 0 12px", letterSpacing: "0.04em" }}>WEEKS 3-4 — FINALIZE KENYA ENTITY</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="KE" priority="critical" cost="KSh 10,500 (~$80)" dep="Name approved">Submit CR1, CR2, CR8 forms via eCitizen/BRS portal. Pay registration fees. Processing: 3-7 working days.</CheckItem>
            <CheckItem entity="KE" priority="critical" dep="Certificate of Incorporation">Register for KRA PIN via iTax portal. The CR1 now serves as consolidated application. This is your Kenya tax ID — needed for bank account, invoicing sponsors, filing returns.</CheckItem>
            <CheckItem entity="KE" priority="critical" dep="KRA PIN + Certificate">Open business bank account at Equity, KCB, or NCBA. Bring: Certificate of Incorporation, KRA PIN, CR12 (director details), board resolution. Your local rep can do this in person.</CheckItem>
            <CheckItem entity="KE" priority="high" dep="Bank account open">Apply for M-PESA Paybill or Till number. This is how you'll receive local payments — entry fees, small sponsor payments, merch sales at events. Takes 3-5 days to activate.</CheckItem>
            <CheckItem entity="KE" priority="high" cost="KSh 5-15K (~$40-115)">Obtain county business permit from Nairobi County. Required for legal operations. Apply at county offices. Cost varies by business type.</CheckItem>
            <CheckItem entity="BOTH" priority="high" cost="FREE">Set up Wise Business account. This is your bridge between US and Kenya entities. Low-fee international transfers, multi-currency holding. Connect both bank accounts.</CheckItem>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.orange, margin: "0 0 12px", letterSpacing: "0.04em" }}>WEEKS 4-6 — PROOF OF CONCEPT EVENTS</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="OPS" priority="critical">Run Event #1 — friends only. Pick a low-pressure location (park, someone's compound, quiet campus spot). Run 2-3 games. Film everything with both cameras. Focus on: testing game mechanics, camera angles, audio quality, hosting energy.</CheckItem>
            <CheckItem entity="OPS" priority="critical" dep="Event #1 filmed">Edit Event #1 content. Produce: 1 YouTube compilation (5-8 min), 2-3 Reels/TikToks (30-60s each), 5+ stories. This tests your editing workflow and turnaround speed. Target: full content package within 48 hours of filming.</CheckItem>
            <CheckItem entity="OPS" priority="high">Run Event #2 — semi-public. Go to a campus or public area. Recruit strangers to play. Film their reactions. This tests: crowd recruitment, consent flow, stranger energy vs. friends, and real-world audio challenges.</CheckItem>
            <CheckItem entity="OPS" priority="high" dep="Event #2 content edited">Post first content publicly. Drop your best Reel/TikTok from Event #2. This is your official launch moment. Tag location, use relevant hashtags, add "Street Games by Relledomi" branding.</CheckItem>
            <CheckItem entity="OPS" priority="medium">Run Event #3 — iterate. Fix everything that was wrong in Events 1-2. Better camera angles, tighter game pacing, smoother hosting. This event's content should feel like a step up.</CheckItem>
            <CheckItem entity="OPS" priority="medium">Document what works. Which games filmed best? Which reactions went viral? What camera angles work? What's the ideal event length? Write this down — it becomes your production playbook.</CheckItem>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}`, marginBottom: "16px" }}>
        <p style={{ fontFamily: F.h, fontSize: "14px", color: C.accent, margin: "0 0 12px" }}>PHASE 1 KPIs</p>
        <KPIBar label="Events run" target="3" color={C.green} />
        <KPIBar label="Content pieces" target="15-20" color={C.gold} />
        <KPIBar label="Followers" target="200-500" color={C.blue} />
        <KPIBar label="Avg Reel views" target="500-2K" color={C.purple} />
        <KPIBar label="Kenya entity" target="FULLY OPERATIONAL" color={C.green} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <CostSummary items={[
          { label: "KE company registration", cost: "~$80", amount: 80 },
          { label: "County business permit", cost: "~$80", amount: 80 },
          { label: "Prizes (3 events × KSh 2K)", cost: "~$46", amount: 46 },
          { label: "Transport (3 events)", cost: "~$23", amount: 23 },
          { label: "Misc (tape, printing, airtime)", cost: "~$15", amount: 15 },
        ]} />
        <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
          <p style={{ fontFamily: F.m, fontSize: "9px", color: C.muted, margin: "0 0 10px", letterSpacing: "0.1em" }}>CRITICAL LEARNINGS TO CAPTURE</p>
          {["Which game format generates best on-camera reactions?", "Optimal event length (how long before crowd drops off)?", "Best time of day for campus foot traffic?", "How fast can you turn raw footage into posted content?", "What's the consent form completion rate?", "Does the wireless mic hold up in outdoor noise?", "How many people can one camera operator effectively cover?", "What's the real cost-per-event when you add everything up?"].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", padding: "4px 0", fontSize: "11px", fontFamily: F.b }}>
              <span style={{ color: C.gold, fontSize: "7px", marginTop: "4px" }}>?</span>
              <span style={{ color: C.sub }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Phase2() {
  return (
    <div>
      <PhaseHeader number="2" title="CAMPUS BLITZ + IP PROTECTION" timeline="WEEKS 7-12" color={C.gold} status="ACTIVE" />

      <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 20px", fontFamily: F.b, lineHeight: "1.7" }}>
        This is your breakout phase. You've proven the concept — now you're running real events at scale, posting consistently, building an audience, and locking down your intellectual property. By the end of this phase you should have a real following and enough traction to approach sponsors with proof.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.gold, margin: "0 0 12px", letterSpacing: "0.04em" }}>EVENTS — 2 PER WEEK</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="OPS" priority="critical">Hit universities on a rotation. Week 7: UoN + KU. Week 8: JKUAT + Strathmore. Week 9: USIU + MKU. Week 10: Repeat best-performing campuses. Tuesday/Thursday or Monday/Wednesday rhythm works best for campus foot traffic.</CheckItem>
            <CheckItem entity="OPS" priority="critical">Post content every single day. Follow the weekly rhythm: event day → best clip next day → drip remaining Reels → YouTube compilation → teaser for next event. No gaps. Consistency is the algorithm's love language.</CheckItem>
            <CheckItem entity="OPS" priority="high">Tag every contestant. Collect IG handles at every event. Tag them in stories and posts within 24 hours. This is your #1 organic growth driver — each tagged person reshares to their network.</CheckItem>
            <CheckItem entity="OPS" priority="high">Rotate game formats. Don't run the same 3 games every week. Introduce new formats, retire ones that don't film well. Keep the audience guessing about what's coming next.</CheckItem>
            <CheckItem entity="OPS" priority="medium">Start tracking metrics. Weekly: follower count, views per Reel, engagement rate, comments. Use a simple spreadsheet. This data becomes your sponsor pitch ammunition.</CheckItem>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: F.h, fontSize: "14px", color: C.purple, margin: "0 0 12px", letterSpacing: "0.04em" }}>IP & TRADEMARK FILINGS</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <CheckItem entity="IP" priority="critical" cost="~$200">File TM27 official trademark search at KIPI for "RELLEDOMI". This checks for conflicting marks. Results in 1-3 days. Do this before filing the full application.</CheckItem>
            <CheckItem entity="IP" priority="critical" cost="~$550-800" dep="TM27 clear">File Kenya trademark applications through a registered Kenyan trademark agent. Two applications: (1) "RELLEDOMI" as a word mark in Class 41, (2) "STREET GAMES BY RELLEDOMI" as a composite mark in Class 41. Agent handles the paperwork and KIPI communication.</CheckItem>
            <CheckItem entity="IP" priority="high" cost="~$250">File US trademark for "RELLEDOMI" at USPTO via TEAS Plus. Class 41 (entertainment services). If not yet earning revenue in US commerce, file as "intent to use". Can be done without an attorney.</CheckItem>
            <CheckItem entity="BOTH" priority="high" cost="FREE">Enable Content ID on YouTube once you're eligible. Watermark all content with the Relledomi logo in a consistent position. This protects against re-uploads and theft.</CheckItem>
            <CheckItem entity="BOTH" priority="medium">Connect YouTube AdSense to your US LLC bank account. You won't hit monetization thresholds yet, but set up the pipeline now so it's ready when you do.</CheckItem>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}`, marginBottom: "16px" }}>
        <p style={{ fontFamily: F.h, fontSize: "14px", color: C.accent, margin: "0 0 12px" }}>PHASE 2 KPIs</p>
        <KPIBar label="Events run" target="12 (2/wk × 6 wks)" color={C.green} />
        <KPIBar label="Content pieces" target="80-100" color={C.gold} />
        <KPIBar label="Followers" target="1,000-3,000" color={C.blue} />
        <KPIBar label="Avg Reel views" target="2K-10K" color={C.purple} />
        <KPIBar label="Contestants filmed" target="100+" color={C.orange} />
        <KPIBar label="Trademarks filed" target="3 (2 KE + 1 US)" color={C.purple} />
      </div>

      <CostSummary items={[
        { label: "Prizes (12 events × KSh 2K)", cost: "~$185", amount: 185 },
        { label: "Transport (12 events)", cost: "~$92", amount: 92 },
        { label: "KE trademarks (2 classes + agent)", cost: "~$800", amount: 800 },
        { label: "US trademark (1 class)", cost: "~$250", amount: 250 },
        { label: "Misc ops", cost: "~$50", amount: 50 },
      ]} />
    </div>
  );
}

function Phase3() {
  return (
    <div>
      <PhaseHeader number="3" title="FIRST REVENUE + SPONSOR OUTREACH" timeline="MONTHS 3-4" color={C.blue} status="ACTIVE" />

      <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 20px", fontFamily: F.b, lineHeight: "1.7" }}>
        You have traction. Now you monetize. This phase is about converting your audience and proof into actual revenue — both from platform monetization and your first brand deals. You also introduce the tournament arc format, which is your first "appointment viewing" content.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        <CheckItem entity="BOTH" priority="critical">Build the sponsorship deck. Include: follower count, avg views per video, engagement rate, total impressions to date, crowd photos, 3-5 best content samples, audience demographics, sponsorship tiers (KSh 20K / 50K / 100K+ per event), and what each tier gets (logo placement, branded segment, social tags, etc.).</CheckItem>
        <CheckItem entity="KE" priority="critical" dep="Deck ready">Pitch Safaricom Hook first. They're the best fit — youth platform, campus activations, gaming. Email to their sponsorship portal + DM on social. Pitch: "Street Games delivers what Hook Circle does — with viral content as the output."</CheckItem>
        <CheckItem entity="KE" priority="high">Pitch Coca-Cola Kenya, EABL/Tusker, and one mall (Garden City or TRM). Send deck + 2-min sizzle reel. Follow up within 5 days. Start with in-kind deals (product, venue) — they're easier to close and still look like major sponsorships on camera.</CheckItem>
        <CheckItem entity="KE" priority="high">Sign first brand deal through Kenya entity. Even a small KSh 20-50K deal validates the model. Relledomi Entertainment Ltd invoices the brand. Revenue stays in Kenya account for operations.</CheckItem>
        <CheckItem entity="US" priority="high">Hit YouTube monetization threshold: 1,000 subscribers + 4,000 watch hours OR 10M Shorts views in 90 days. If posting consistently, you should be close by month 3-4. AdSense flows to US LLC.</CheckItem>
        <CheckItem entity="OPS" priority="high">Launch TOURNAMENT ARC — your first multi-week narrative. Players qualify at local events (weeks 1-3), top scorers enter a grand finale (week 4). Film it like a real competition — brackets, commentary, crowd predictions. This becomes your first YouTube tentpole video.</CheckItem>
        <CheckItem entity="BOTH" priority="medium">Find a CPA who handles international small business / US expat taxes. Budget $500-1,500/yr. They'll structure your foreign tax credits, handle FBAR if your Kenya account crosses $10K, and keep both entities compliant.</CheckItem>
        <CheckItem entity="OPS" priority="medium">Begin expanding locations beyond campuses. Test: Kencom (lunchtime), Jevanjee Gardens (weekend), outside a mall. This tells you if the format works beyond the student demographic.</CheckItem>
      </div>

      <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}`, marginBottom: "16px" }}>
        <p style={{ fontFamily: F.h, fontSize: "14px", color: C.accent, margin: "0 0 12px" }}>PHASE 3 KPIs</p>
        <KPIBar label="Followers" target="5,000-15,000" color={C.blue} />
        <KPIBar label="YouTube subs" target="1,000+" color={C.accent} />
        <KPIBar label="Brand deals signed" target="1-3" color={C.gold} />
        <KPIBar label="Revenue (combined)" target="$500-2,000" color={C.green} />
        <KPIBar label="Tournament finale views" target="20K-50K" color={C.purple} />
      </div>

      <CostSummary items={[
        { label: "Events (8 × ~$15 each)", cost: "~$120", amount: 120 },
        { label: "Tournament prizes (finale)", cost: "~$100", amount: 100 },
        { label: "Sizzle reel editing", cost: "~$50", amount: 50 },
        { label: "CPA retainer (first meeting)", cost: "~$200", amount: 200 },
      ]} />
    </div>
  );
}

function Phase4() {
  return (
    <div>
      <PhaseHeader number="4" title="SCALE + AGENCY MODEL" timeline="MONTHS 5-8" color={C.purple} status="ACTIVE" />

      <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 20px", fontFamily: F.b, lineHeight: "1.7" }}>
        The flywheel is spinning. Multiple sponsors, growing audience, revenue from both entities. Now you scale the operation and start activating the full Relledomi Entertainment agency model — paid bookings, expanded crew, and groundwork for a second show format.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        <CheckItem entity="OPS" priority="critical">Hire a second camera operator. Pay per event (KSh 2-5K/event) or a monthly retainer. Two operators means better coverage — one on wide, one roaming. Content quality jumps significantly.</CheckItem>
        <CheckItem entity="KE" priority="critical">Run 3 events per week. Two campus, one CBD/mall. This is the pace that sustains daily content posting and keeps the audience fed. Budget accordingly.</CheckItem>
        <CheckItem entity="BOTH" priority="critical">Multiple sponsors running concurrently. Target: 2-3 active sponsors at any time. Rotate branded segments so no single brand dominates. Each sponsor gets: logo on bibs/banners, named game segment, social tags, content package.</CheckItem>
        <CheckItem entity="KE" priority="high">Start taking paid event bookings — the agency model in action. A university wants Street Games at their freshers' week? They pay Relledomi KSh 30-80K to run it. A mall wants foot traffic on a Saturday? They book you. This is B2B revenue that doesn't depend on follower count.</CheckItem>
        <CheckItem entity="US" priority="high">Launch merch line under US LLC. Start simple: branded t-shirts, hoodies, caps with Street Games / Relledomi branding. Sell through a Shopify store or print-on-demand service. Ship internationally from the US, sell locally at events via Kenya entity.</CheckItem>
        <CheckItem entity="OPS" priority="high">Expand to CBD locations and weekend markets. Maasai Market, Karura Forest entrance, City Market area. This diversifies your audience beyond students and tests the format with broader demographics.</CheckItem>
        <CheckItem entity="OPS" priority="medium">Test a second show concept. Film a pilot episode of a different format — talent discovery, food challenge, dating game, or man-on-the-street interviews. Use the same production system. If it works, it becomes Show #2 under Relledomi.</CheckItem>
        <CheckItem entity="BOTH" priority="medium">Build a contestant/talent database. Track recurring players, fan favorites, and potential talent to manage. The people who keep coming back and perform well on camera are assets — they drive viewership.</CheckItem>
        <CheckItem entity="US" priority="medium">File FBAR by April 15 if your Kenya accounts exceeded $10K aggregate at any point during the year. Your CPA handles this. Don't miss it — penalties are $10K per violation.</CheckItem>
      </div>

      <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}`, marginBottom: "16px" }}>
        <p style={{ fontFamily: F.h, fontSize: "14px", color: C.accent, margin: "0 0 12px" }}>PHASE 4 KPIs</p>
        <KPIBar label="Followers" target="20,000-50,000" color={C.blue} />
        <KPIBar label="Active sponsors" target="2-3" color={C.gold} />
        <KPIBar label="Monthly revenue" target="$1,000-5,000" color={C.green} />
        <KPIBar label="Paid event bookings" target="2-4" color={C.purple} />
        <KPIBar label="Events/week" target="3" color={C.orange} />
        <KPIBar label="Team size" target="3-4 (you + 2 KE + editor)" color={C.accent} />
      </div>

      <CostSummary items={[
        { label: "Camera operator (16 events)", cost: "~$500", amount: 500 },
        { label: "Events ops (16 × $15)", cost: "~$240", amount: 240 },
        { label: "Merch setup (POD, design)", cost: "~$200", amount: 200 },
        { label: "Editor retainer", cost: "~$400", amount: 400 },
        { label: "CPA quarterly", cost: "~$300", amount: 300 },
      ]} />
    </div>
  );
}

function Phase5() {
  return (
    <div>
      <PhaseHeader number="5" title="EXPANSION + FULL AGENCY" timeline="MONTHS 9-12" color={C.orange} status="FUTURE" />

      <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 20px", fontFamily: F.b, lineHeight: "1.7" }}>
        Relledomi Entertainment is now a real agency. Multiple revenue streams, a team, a known brand, and a system that can replicate in new cities. This phase is about geographic expansion, launching additional IP, and building the infrastructure for long-term growth.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        <CheckItem entity="OPS" priority="critical">Expand to a second city — Mombasa or Kisumu. Send your camera team or hire a local crew and train them on the Relledomi production playbook. Test with 2-3 events before committing to a regular schedule.</CheckItem>
        <CheckItem entity="BOTH" priority="critical">Launch Show #2 officially. If your pilot tested well in Phase 4, give it a name, its own social handles, and a content schedule. It runs parallel to Street Games under the Relledomi umbrella.</CheckItem>
        <CheckItem entity="KE" priority="high">Build a brand activation service page on relledomi.com. Companies can now hire Relledomi to produce custom street events. Package it: "We bring the crowd, the cameras, and the content. You bring the brand." Price: KSh 100-500K per activation depending on scope.</CheckItem>
        <CheckItem entity="OPS" priority="high">Hire a community manager. Someone who handles DMs, comment replies, contestant coordination, and content scheduling. This frees you to focus on strategy and business development.</CheckItem>
        <CheckItem entity="BOTH" priority="high">Explore content licensing. Media outlets, compilation channels, and international formats may want to license your clips. Price per clip or negotiate a package deal.</CheckItem>
        <CheckItem entity="OPS" priority="medium">Begin talent management for standout contestants. Recurring fan-favorites get: managed social presence, booked appearances at other events, brand deal facilitation. Relledomi takes a management cut.</CheckItem>
        <CheckItem entity="KE" priority="medium">Evaluate Class G Investor Permit. If you want to relocate to Nairobi to run operations in person, you'll need this. Requires USD 100,000 minimum investment in the Kenyan entity. Only pursue this if the revenue justifies it.</CheckItem>
        <CheckItem entity="BOTH" priority="medium">Year-end financial review with CPA. Reconcile both entities, file all returns, plan tax strategy for year 2. Ensure FBAR/FATCA compliance. Structure inter-company transfers properly.</CheckItem>
      </div>

      <div style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}`, marginBottom: "16px" }}>
        <p style={{ fontFamily: F.h, fontSize: "14px", color: C.accent, margin: "0 0 12px" }}>YEAR 1 ENDGAME KPIs</p>
        <KPIBar label="Total followers" target="50,000-100,000+" color={C.blue} />
        <KPIBar label="Monthly revenue" target="$3,000-10,000+" color={C.green} />
        <KPIBar label="Shows in production" target="2" color={C.gold} />
        <KPIBar label="Cities active" target="2" color={C.purple} />
        <KPIBar label="Team size" target="5-8" color={C.orange} />
        <KPIBar label="Paid bookings/month" target="3-5" color={C.accent} />
        <KPIBar label="YouTube subscribers" target="10,000+" color={C.accent} />
      </div>

      <div style={{ padding: "20px", background: C.accentSoft, borderRadius: "6px", border: `1px solid rgba(255,45,45,0.15)` }}>
        <p style={{ fontFamily: F.h, fontSize: "18px", color: C.accent, margin: "0 0 8px" }}>TOTAL YEAR 1 INVESTMENT</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "12px" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: F.h, fontSize: "22px", color: C.blue, margin: "0 0 2px" }}>~$606</p>
            <p style={{ fontFamily: F.m, fontSize: "8px", color: C.muted }}>US ENTITY + ANNUAL</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: F.h, fontSize: "22px", color: C.green, margin: "0 0 2px" }}>~$1,350</p>
            <p style={{ fontFamily: F.m, fontSize: "8px", color: C.muted }}>KE ENTITY + TM + PERMITS</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: F.h, fontSize: "22px", color: C.gold, margin: "0 0 2px" }}>~$3,500</p>
            <p style={{ fontFamily: F.m, fontSize: "8px", color: C.muted }}>OPERATIONS (EVENTS, CREW, ETC)</p>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "12px", background: C.accentGlow, borderRadius: "4px" }}>
          <p style={{ fontFamily: F.h, fontSize: "28px", color: C.accent, margin: "0 0 2px" }}>~$5,500 TOTAL YEAR 1</p>
          <p style={{ fontFamily: F.m, fontSize: "9px", color: C.muted, margin: 0 }}>BOTH ENTITIES + IP + OPS + CREW — FULL AGENCY OPERATIONAL</p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ──────────────────────

const phases = [
  { id: "p0", label: "PHASE 0", sub: "Foundation", color: C.accent },
  { id: "p1", label: "PHASE 1", sub: "KE Setup + POC", color: C.green },
  { id: "p2", label: "PHASE 2", sub: "Campus Blitz", color: C.gold },
  { id: "p3", label: "PHASE 3", sub: "First Revenue", color: C.blue },
  { id: "p4", label: "PHASE 4", sub: "Scale", color: C.purple },
  { id: "p5", label: "PHASE 5", sub: "Full Agency", color: C.orange },
];

export default function DetailedRollout() {
  const [active, setActive] = useState("p0");
  const comps = { p0: Phase0, p1: Phase1, p2: Phase2, p3: Phase3, p4: Phase4, p5: Phase5 };
  const Comp = comps[active];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: F.b }}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(7,7,10,0.95)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}`, padding: "0 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 0 0" }}>
            <span style={{ fontFamily: F.h, fontSize: "14px", color: C.accent, letterSpacing: "0.03em" }}>RELLEDOMI</span>
            <span style={{ fontFamily: F.m, fontSize: "8px", color: C.muted }}>ENT.</span>
            <span style={{ fontFamily: F.m, fontSize: "8px", color: C.muted, marginLeft: "4px" }}>/ DETAILED ROLLOUT</span>
          </div>
          <div style={{ display: "flex", gap: "0", overflowX: "auto", paddingTop: "4px" }}>
            {phases.map(p => (
              <button key={p.id} onClick={() => setActive(p.id)} style={{
                background: "none", border: "none",
                borderBottom: active === p.id ? `2px solid ${p.color}` : "2px solid transparent",
                padding: "8px 14px 10px", cursor: "pointer", whiteSpace: "nowrap",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "1px",
                transition: "all 0.15s",
              }}>
                <span style={{ fontFamily: F.h, fontSize: "12px", color: active === p.id ? C.text : C.muted, letterSpacing: "0.06em" }}>{p.label}</span>
                <span style={{ fontFamily: F.m, fontSize: "8px", color: active === p.id ? p.color : C.muted, letterSpacing: "0.04em" }}>{p.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px 40px" }}>
        <Comp />
      </main>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "16px 20px", textAlign: "center" }}>
        <span style={{ fontFamily: F.m, fontSize: "8px", color: C.muted, letterSpacing: "0.12em" }}>RELLEDOMI ENTERTAINMENT — DETAILED ROLLOUT PLAN v2.0</span>
      </footer>
    </div>
  );
}
