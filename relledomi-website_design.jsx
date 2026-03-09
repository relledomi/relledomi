import { useState } from "react";

const C = {
  bg: "#060608", surface: "#0D0D12", alt: "#14141C",
  kanga: "#C2185B", kangaGlow: "rgba(194,24,91,0.08)",
  cream: "#FFF8E1", turq: "#00BFA5", turqGlow: "rgba(0,191,165,0.08)",
  chrome: "#424242",
  text: "#EEEEE8", sub: "#908E82", muted: "#5A5850", dim: "#3A3A36",
  border: "#1C1C24",
  voxGreen: "#7CB342", voxBlue: "#42A5F5",
};
const ff = { d: "'Archivo Black', sans-serif", b: "'DM Sans', sans-serif", m: "'IBM Plex Mono', monospace" };

function Badge({ children, color = "kanga" }) {
  const m = { kanga: [C.kangaGlow, C.kanga], turq: [C.turqGlow, C.turq], chrome: ["rgba(66,66,66,0.12)", "#9E9E9E"], muted: ["rgba(90,88,80,0.06)", C.muted], cream: ["rgba(255,248,225,0.06)", C.cream], green: ["rgba(124,179,66,0.08)", C.voxGreen], blue: ["rgba(66,165,245,0.08)", C.voxBlue] };
  const [bg, c] = m[color] || m.kanga;
  return <span style={{ display: "inline-block", padding: "2px 9px", fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: bg, color: c, border: `1px solid ${c}22`, borderRadius: "2px", fontFamily: ff.m }}>{children}</span>;
}

function Card({ title, children, accent, tag }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${accent ? "rgba(194,24,91,0.15)" : C.border}`, borderRadius: "8px", padding: "24px", marginBottom: "14px", position: "relative", overflow: "hidden" }}>
      {accent && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, ${C.kanga}, ${C.turq}, transparent 60%)` }} />}
      {(title || tag) && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>{title && <h3 style={{ fontFamily: ff.d, fontSize: "16px", color: C.text, margin: 0 }}>{title}</h3>}{tag}</div>}
      {children}
    </div>
  );
}

function Spec({ label, children, color }) {
  return (
    <div style={{ padding: "14px 16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
      <p style={{ fontFamily: ff.m, fontSize: "9px", color: color || C.kanga, letterSpacing: "0.1em", margin: "0 0 8px", textTransform: "uppercase" }}>{label}</p>
      <div style={{ fontSize: "12px", color: C.sub, fontFamily: ff.b, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

// ─── TABS ──────────────────────

const tabs = [
  { id: "vision", label: "VISION" },
  { id: "flow", label: "USER FLOW" },
  { id: "stops", label: "3 STOPS" },
  { id: "voxel", label: "VOXEL WORLD" },
  { id: "camera", label: "CAMERA & SCROLL" },
  { id: "ui", label: "UI & INTERACTION" },
  { id: "assets", label: "3D ASSETS" },
  { id: "tech", label: "TECH STACK" },
  { id: "build", label: "BUILD PLAN" },
];

// ─── 1. VISION ──────────────────────

function Vision() {
  return (
    <div>
      <div style={{ padding: "40px 0 28px", borderBottom: `1px solid ${C.border}`, marginBottom: "24px" }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
          <Badge color="kanga">3D Experience</Badge>
          <Badge color="green">Voxel Aesthetic</Badge>
          <Badge color="turq">Scroll-Driven</Badge>
          <Badge color="cream">3 Stops</Badge>
        </div>
        <h1 style={{ fontFamily: ff.d, fontSize: "clamp(28px, 5vw, 44px)", color: C.text, margin: "0 0 4px", lineHeight: 1 }}>RELLEDOMI.COM</h1>
        <p style={{ fontFamily: ff.d, fontSize: "18px", color: C.kanga, margin: "0 0 16px" }}>FINAL WEBSITE BLUEPRINT</p>
        <p style={{ fontFamily: ff.b, fontSize: "14px", color: C.sub, maxWidth: "640px", lineHeight: 1.7 }}>
          A voxel 3D Nairobi that you fall into and explore. Three stops. Full Three.js scene with a real camera on a rail. Scroll moves you through the world. Interactive elements live on buildings, signs, and as floating UI. Tight, impactful, shareable.
        </p>
      </div>

      <Card title="THE EXPERIENCE IN ONE PARAGRAPH" accent>
        <p style={{ fontSize: "14px", color: C.text, margin: 0, fontFamily: ff.b, lineHeight: 1.8 }}>
          You open relledomi.com. A voxel Nairobi skyline stretches below you. RELLEDOMI floats in 3D space. Two options: STREET GAMES and BUSINESS. You click Street Games. The camera tips forward and you fall — through voxel clouds, past blocky buildings rushing upward, wind particles streaming. You land at <strong style={{ color: C.kanga }}>Stop 1</strong>: a voxel street where an illustrated Street Games event is happening. Social links are on building walls. Info panels float nearby. You scroll again. The camera travels along a voxel avenue to <strong style={{ color: C.turq }}>Stop 2</strong>: a recognizable Nairobi landmark. More content — games, info, socials. One more scroll takes you to <strong style={{ color: C.cream }}>Stop 3</strong>: a quiet voxel corner at night. Contact info. End of journey. Three stops. Every one counts.
        </p>
      </Card>

      <Card title="WHY VOXEL">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { point: "FAST TO BUILD", desc: "MagicaVoxel is free and intuitive. A building takes minutes, not hours. The entire Nairobi scene can be built in days, not weeks. No UV mapping, no texturing, no rigging." },
            { point: "LIGHT TO LOAD", desc: "Voxel geometry is simple — cubes. Low poly count means fast rendering. The entire scene can be under 5MB as a compressed glTF. That's lighter than most hero images on regular websites." },
            { point: "DISTINCTIVE IDENTITY", desc: "Nobody else in Nairobi entertainment has a voxel website. It's instantly memorable, inherently shareable, and it gives Relledomi a visual identity that extends to merch, social content, and future projects." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "16px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.d, fontSize: "12px", color: C.voxGreen, margin: "0 0 8px" }}>{item.point}</p>
              <p style={{ fontSize: "11px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="WHAT MAKES THIS SHAREABLE">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            "The fall sequence — camera dropping through a voxel city is inherently screen-recordable content",
            "Voxel Nairobi itself — people will recognize landmarks and share 'look they made Nairobi in voxels'",
            "The interactivity — elements on buildings that respond to clicks feel like a game, not a website",
            "No one has done this — a voxel 3D website for an entertainment agency in East Africa is a first",
            "It becomes a recurring visual — the voxel style can extend to thumbnails, merch, social posts, event branding",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", padding: "8px 12px", background: i % 2 === 0 ? C.alt : "transparent", borderRadius: "4px" }}>
              <span style={{ color: C.kanga, fontSize: "7px", marginTop: "5px", flexShrink: 0 }}>●</span>
              <p style={{ fontSize: "12px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 2. USER FLOW ──────────────────────

function UserFlow() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>USER FLOW</h2>

      <Card title="THE COMPLETE SEQUENCE" accent>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {[
            { scroll: "ENTRY", label: "TITLE SCREEN", type: "STATIC", desc: "Camera positioned above voxel Nairobi. RELLEDOMI in 3D text floating in sky. Below it: two clickable options — 'STREET GAMES' and 'BUSINESS'. Sky has voxel clouds drifting. City is visible below, miniature-looking from this height. Ambient particles (birds, dust).", color: C.cream },
            { scroll: "CLICK", label: "'STREET GAMES' SELECTED", type: "TRIGGER", desc: "User clicks Street Games. 'BUSINESS' fades out. Camera begins tipping forward. A beat of anticipation — 0.5s pause — then the fall begins.", color: C.kanga },
            { scroll: "0-20%", label: "THE FALL", type: "TRANSITION", desc: "Camera plunges downward through the voxel city. Buildings rush upward on both sides. Clouds streak past. Speed particles (white streaks). Camera rotates slightly during fall — look left: see a building with a Street Games logo painted on it. Look right: see a matatu driving below. As you approach ground level, camera decelerates. Smooth landing.", color: C.kanga },
            { scroll: "20-40%", label: "⬤ STOP 1 — STREET GAMES", type: "ANCHOR", desc: "Camera settles at street level in a voxel Nairobi intersection. A Street Games event is happening — voxel characters, a crowd, game equipment. Interactive elements: social follow buttons on a building wall (painted signs), a floating 'Coming Soon' panel, game format cards hovering near game equipment. Social links are the primary CTA here. Scroll pauses with friction — inviting exploration.", color: C.kanga },
            { scroll: "40-55%", label: "STREET TRAVEL", type: "TRANSITION", desc: "Camera moves forward along a voxel street/avenue. Pass voxel matatus, market stalls, pedestrians. The camera is at eye level, moving steadily. Buildings pass on both sides. Maybe time of day shifts slightly (afternoon → golden hour). Ambient life — voxel birds, a cat on a roof.", color: C.chrome },
            { scroll: "55-75%", label: "⬤ STOP 2 — THE HUB", type: "ANCHOR", desc: "Camera arrives at a recognizable voxel landmark (KICC, Archives, or a stylized plaza). This is the info hub. On buildings: agency services as painted signs (Brand Activations, Content Production, etc.). Floating UI: game format cards, social links repeated, 'About Relledomi' panel. Stats on a billboard (8+ content pieces, etc.). This stop serves both fans AND brands scanning the site.", color: C.turq },
            { scroll: "75-85%", label: "NIGHT TRANSITION", type: "TRANSITION", desc: "Camera continues moving. Sky darkens — voxel sunset, then night. Street lights turn on (voxel light sources with bloom). Neon signs glow. The mood shifts from daytime energy to evening calm. Shorter transition — just enough to feel the time change.", color: C.chrome },
            { scroll: "85-100%", label: "⬤ STOP 3 — CONTACT / END", type: "ANCHOR", desc: "Camera arrives at a quiet voxel street corner at night. A warm glow from a lamp post or shop window. Contact form appears as floating UI panel (styled with voxel aesthetic). Email, socials, 'Nairobi × US' text. A 'Back to Top' option that triggers a reverse-fall animation (fast) back to the title screen. The journey ends here.", color: C.cream },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", gap: "14px", padding: "16px",
              background: item.type === "ANCHOR" ? C.alt : "transparent",
              borderRadius: "6px",
              border: item.type === "ANCHOR" ? `1px solid ${C.border}` : "1px solid transparent",
              borderLeft: `3px solid ${item.color}`,
            }}>
              <div style={{ minWidth: "56px" }}>
                <span style={{ fontFamily: ff.m, fontSize: "9px", color: item.color, letterSpacing: "0.06em" }}>{item.scroll}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontFamily: ff.d, fontSize: "13px", color: C.text }}>{item.label}</span>
                  <Badge color={item.type === "ANCHOR" ? "kanga" : item.type === "TRIGGER" ? "turq" : "chrome"}>{item.type}</Badge>
                </div>
                <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: ff.b, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="THE 'BUSINESS' PATH">
        <div style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
          <p style={{ fontSize: "13px", color: C.sub, margin: 0, fontFamily: ff.b, lineHeight: 1.7 }}>
            When user clicks 'BUSINESS' on the title screen instead of Street Games: the experience skips the fall and the Street Games content. Camera smoothly descends (not a dramatic fall — a controlled elevator-like drop) directly to a professional-facing voxel scene with agency info, services, and contact. This is a shorter, cleaner path for sponsors and brands who don't need the full show. <strong style={{ color: C.turq }}>Build this AFTER the Street Games path is complete</strong> — it reuses the same 3D environment with a different camera path and different UI overlays.
          </p>
        </div>
      </Card>
    </div>
  );
}

// ─── 3. THE 3 STOPS ──────────────────────

function ThreeStops() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>THE 3 STOPS — DETAILED</h2>

      {[
        {
          num: "1", name: "STREET GAMES", location: "VOXEL NAIROBI INTERSECTION",
          purpose: "The hero moment. First ground-level view. This is what people came for — Street Games lives here.",
          scene: [
            "Voxel intersection with buildings on all four corners",
            "A Street Games 'event' in the center — game equipment (stacking cups, rope circle), branded barriers (red voxel tape)",
            "6-8 voxel spectator figures watching, some holding up phone-shaped blocks",
            "A host figure with a microphone-shaped voxel prop",
            "2-3 contestant figures in the game area",
            "A matatu parked on one side with Relledomi branding",
            "Voxel camera rig / operator figure",
          ],
          inWorld: [
            "Building wall: 'STREET GAMES' painted in large voxel pixel-text — this is visible during the fall too",
            "Building wall: social handles painted as signs — @streetgamesKE with Instagram/TikTok logos as voxel pixel art",
            "Street sign: 'COMING TO NAIROBI STREETS' on a voxel road sign post",
            "Shop front: 'FOLLOW US' above a voxel shop door — clickable, opens social card overlay",
          ],
          floating: [
            "'Where will we show up first?' — floating text panel with glow, positioned above the event",
            "Social follow buttons — IG, TikTok, YouTube as clean UI cards that appear when camera settles",
            "'↓ Keep scrolling' prompt after a few seconds at the stop",
          ],
          color: C.kanga,
        },
        {
          num: "2", name: "THE HUB", location: "VOXEL LANDMARK / PLAZA",
          purpose: "Info and discovery. Game formats, agency services, more socials. Serves both fans and brands.",
          scene: [
            "A larger open voxel space — plaza or park area with a recognizable landmark in background (voxel KICC or a stylized tower)",
            "Multiple building facades around the plaza with different 'shops' / 'signs'",
            "Illustrated billboards on buildings showing stats",
            "Fewer people here — more architectural, more room to read content",
            "Voxel trees, benches, a fountain or statue centerpiece",
            "Golden hour lighting — warmer tones than Stop 1",
          ],
          inWorld: [
            "Billboard: '8+ CONTENT PIECES PER EVENT' — painted on building side",
            "Billboard: '100% ORGANIC REACH' — on another building",
            "Shop fronts labeled with services: 'BRAND ACTIVATIONS', 'CONTENT PRODUCTION', 'EVENT PRODUCTION', 'TALENT' — each clickable",
            "Building wall: 'RELLEDOMI ENTERTAINMENT' large text — establishes the agency",
            "Street-level sign: game format names (LAST ONE STANDING, STACK OR CRACK, etc.) on a voxel notice board",
          ],
          floating: [
            "Game format cards — 6 cards that fan out when camera settles, each showing a game name + type tag. Clickable for details.",
            "'Work With Us' CTA button — prominent, links to contact at Stop 3",
            "Social links repeated (smaller, in corner) for people who haven't followed yet",
            "Agency one-liner: 'Live competitions. Viral content. Brand experiences.' floating text",
          ],
          color: C.turq,
        },
        {
          num: "3", name: "CONTACT / END", location: "QUIET VOXEL STREET CORNER — NIGHT",
          purpose: "The end of the journey. Calm, warm, inviting. Contact info and form. Satisfying conclusion.",
          scene: [
            "Nighttime voxel scene — dark sky with voxel stars (small bright cubes)",
            "A street corner with a voxel lamp post emitting warm light (point light source with bloom)",
            "A small voxel shop or cafe with lit windows",
            "A bench, a parked voxel car, a stray voxel cat",
            "The energy is calm — few ambient animations, just the glow and maybe a flickering neon sign",
            "City skyline visible in distance — lit windows on dark buildings",
          ],
          inWorld: [
            "Neon sign on building: 'LET'S WORK' in voxel pixel-text with glow effect",
            "Shop window: displays 'hello@relledomi.com' as voxel text",
            "Wall: 'NAIROBI × US' painted text",
          ],
          floating: [
            "Contact form — floating UI panel: name, email, type selector (sponsorship/booking/collab/other), message, send button. Styled with voxel-aesthetic borders.",
            "Direct contact: email address, social links one more time",
            "'Back to Top' button — triggers a fast reverse-fall animation back to the title screen",
          ],
          color: C.cream,
        },
      ].map((stop, i) => (
        <Card key={i} title={`STOP ${stop.num} — ${stop.name}`} accent tag={<Badge color={stop.color === C.kanga ? "kanga" : stop.color === C.turq ? "turq" : "cream"}>{stop.location}</Badge>}>
          <p style={{ fontSize: "13px", color: C.text, margin: "0 0 16px", fontFamily: ff.b, fontWeight: 500 }}>{stop.purpose}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ padding: "14px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.voxGreen, letterSpacing: "0.1em", margin: "0 0 8px" }}>3D SCENE ELEMENTS</p>
              {stop.scene.map((s, j) => (
                <div key={j} style={{ display: "flex", gap: "8px", padding: "3px 0", fontSize: "11px", fontFamily: ff.b }}>
                  <span style={{ color: C.voxGreen, fontSize: "6px", marginTop: "5px", flexShrink: 0 }}>■</span>
                  <span style={{ color: C.sub }}>{s}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ padding: "14px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}`, flex: 1 }}>
                <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.kanga, letterSpacing: "0.1em", margin: "0 0 8px" }}>IN-WORLD ELEMENTS (ON BUILDINGS/SIGNS)</p>
                {stop.inWorld.map((s, j) => (
                  <div key={j} style={{ display: "flex", gap: "8px", padding: "3px 0", fontSize: "11px", fontFamily: ff.b }}>
                    <span style={{ color: C.kanga, fontSize: "6px", marginTop: "5px", flexShrink: 0 }}>●</span>
                    <span style={{ color: C.sub }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "14px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}`, flex: 1 }}>
                <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.turq, letterSpacing: "0.1em", margin: "0 0 8px" }}>FLOATING UI ELEMENTS</p>
                {stop.floating.map((s, j) => (
                  <div key={j} style={{ display: "flex", gap: "8px", padding: "3px 0", fontSize: "11px", fontFamily: ff.b }}>
                    <span style={{ color: C.turq, fontSize: "6px", marginTop: "5px", flexShrink: 0 }}>◆</span>
                    <span style={{ color: C.sub }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// ─── 4. VOXEL WORLD ──────────────────────

function VoxelWorld() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>VOXEL WORLD DESIGN</h2>

      <Card title="VOXEL AESTHETIC RULES" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="SCALE & GRID">
            <p style={{ margin: 0 }}>Everything built on a consistent voxel grid. One voxel = ~0.5 meters in world space. Buildings are 20-60 voxels tall. Characters are ~4 voxels tall. This scale creates a slight miniature/diorama feel when zoomed out (title screen) but feels immersive at street level.</p>
          </Spec>
          <Spec label="COLOR PALETTE">
            <p style={{ margin: 0 }}>Kanga & Chrome palette applied to the voxel world. Buildings: Chrome (#424242) base with Kanga Pink (#C2185B) and Turquoise (#00BFA5) accents on signs, doors, awnings. Ground: darker grey. Sky: deep blue-black (#060608) at night, warm gradient during day. Keep saturation high — voxel art pops with bold colors.</p>
          </Spec>
          <Spec label="DETAIL LEVEL">
            <p style={{ margin: 0 }}>NOT Minecraft-level simplistic. Think higher-res voxels — more like 3D pixel art. Buildings have windowsills, awnings, signage detail. Characters have recognizable features (hair, clothing color). Props are identifiable (a matatu looks like a matatu, not a generic box). But still blocky — every edge is a right angle, every surface is flat color.</p>
          </Spec>
          <Spec label="LIGHTING">
            <p style={{ margin: 0 }}>Three.js lighting carries the atmosphere. Daytime stops: warm directional light (sun) + ambient. Golden hour transition: orange tint, longer shadows. Night stop: dark ambient + warm point lights (street lamps, shop windows) + bloom post-processing on light sources. The lighting shift during transitions is what makes the journey feel like a real day.</p>
          </Spec>
          <Spec label="NAIROBI IDENTITY IN VOXELS">
            <p style={{ margin: 0 }}>The buildings should read as Nairobi, not generic. Include: flat-roofed commercial buildings, hand-painted shop signs, corrugated iron details, a recognizable silhouette (KICC tower, Parliament). Matatus with colorful paint. Market stalls. Boda-boda motorcycle. These details anchor the world in a real place.</p>
          </Spec>
          <Spec label="TEXT IN VOXELS">
            <p style={{ margin: 0 }}>In-world text (on buildings, signs) is rendered as voxel pixel-text — like pixel art but in 3D. Each letter is built from small colored voxels on a building surface. This is how 'STREET GAMES', '@streetgamesKE', and other in-world text appears. It reads as part of the world, not overlaid HTML.</p>
          </Spec>
        </div>
      </Card>

      <Card title="THE WORLD MAP (TOP-DOWN)">
        <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", border: `1px solid ${C.border}` }}>
          <p style={{ fontFamily: ff.m, fontSize: "10px", color: C.turq, margin: "0 0 12px", letterSpacing: "0.08em" }}>CAMERA PATH (SCROLL 0% → 100%)</p>
          <pre style={{ fontFamily: ff.m, fontSize: "11px", color: C.sub, margin: 0, lineHeight: 2, whiteSpace: "pre-wrap" }}>{`[TITLE SCREEN] — Camera high above
       |
       | (THE FALL — vertical drop)
       |
       ↓
[STOP 1] ——— Intersection with Street Games event
       |
       | (STREET TRAVEL — forward along avenue)
       |
       ↓
[STOP 2] ——— Plaza / Landmark area
       |
       | (NIGHT TRANSITION — forward, sky darkens)
       |
       ↓
[STOP 3] ——— Quiet corner at night

Total scene depth: ~200-300 voxel units (100-150 meters)
Total scene width: ~80-120 voxel units (40-60 meters)
Total scene height: ~120 voxel units (60 meters, for the fall)`}</pre>
        </div>
        <div style={{ marginTop: "10px", padding: "12px", background: C.kangaGlow, borderRadius: "4px", border: "1px solid rgba(194,24,91,0.15)" }}>
          <p style={{ fontSize: "11px", color: C.kanga, margin: 0, fontFamily: ff.b }}>The entire world is ONE continuous scene loaded into Three.js. The camera simply moves through it on a rail. This is more efficient than loading/unloading separate scenes per stop.</p>
        </div>
      </Card>
    </div>
  );
}

// ─── 5. CAMERA & SCROLL ──────────────────────

function CameraScroll() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>CAMERA & SCROLL SYSTEM</h2>

      <Card title="CAMERA PATH" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="PATH DEFINITION">
            <p style={{ margin: 0 }}>The camera follows a Three.js CatmullRomCurve3 — a smooth 3D spline defined by control points. Each control point has a position (x, y, z) and a lookAt target. Scroll position (0 to 1) maps to a point on this curve. The camera's position and rotation interpolate smoothly along the curve as scroll progresses.</p>
          </Spec>
          <Spec label="SCROLL-TO-POSITION MAPPING">
            <p style={{ margin: 0 }}>Not linear. Uses a custom easing function with "sticky" zones at anchor points. When scroll position enters an anchor zone (e.g., 20-40% for Stop 1), the camera-position-per-scroll-unit decreases — you have to scroll MORE to move the same distance. This creates the friction effect that invites stopping. Between anchors, the mapping is faster (less scroll = more movement).</p>
          </Spec>
          <Spec label="THE FALL SEQUENCE">
            <p style={{ margin: 0 }}>Triggered by clicking "Street Games", not by scroll. The camera animates from the title position (high above) to the start of the scroll path (just above Stop 1) using a GSAP timeline. Duration: 2-3 seconds. Easing: power4.in then power2.out (accelerate, then decelerate on landing). During the fall, scroll is disabled. After landing, scroll control activates and the user can explore Stop 1.</p>
          </Spec>
          <Spec label="MOUSE PARALLAX ON CAMERA">
            <p style={{ margin: 0 }}>Mouse position (relative to viewport center) applies a small offset to camera rotation — not position. Rotation offset: ±2-3 degrees pitch, ±3-5 degrees yaw. Lerped with factor 0.05-0.08 for smooth, cinematic feel. This means looking around slightly, not moving the camera. Disabled during the fall and during transitions. Active at anchor stops.</p>
          </Spec>
        </div>
      </Card>

      <Card title="SCROLL IMPLEMENTATION">
        <Spec label="TECHNICAL APPROACH">
          <p style={{ margin: 0 }}>The page itself is a tall scrollable div (height: ~5000-8000vh) behind the Three.js canvas. The canvas is position: fixed, filling the viewport. A scroll listener reads the scroll position as a normalized value (0 to 1) and passes it to the camera controller. Use Lenis for smooth scroll normalization. The actual page content is invisible — the tall div exists only to give the user something to scroll.</p>
        </Spec>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginTop: "10px" }}>
          {[
            { state: "TITLE SCREEN", scroll: "Disabled", camera: "Static, high above city", mouse: "Subtle rotation on entire scene" },
            { state: "THE FALL", scroll: "Disabled (auto-animation)", camera: "Animated drop via GSAP", mouse: "Disabled" },
            { state: "AT STOP", scroll: "High friction (slow)", camera: "Positioned at stop, mouse rotation active", mouse: "±3-5° rotation" },
            { state: "TRAVELING", scroll: "Normal speed", camera: "Moving along spline", mouse: "Reduced (±1-2°)" },
            { state: "INTERACTING", scroll: "Locked", camera: "Frozen at stop position", mouse: "Disabled on 3D, normal on UI overlay" },
            { state: "NIGHT TRANSITION", scroll: "Normal speed", camera: "Moving, lighting transitioning", mouse: "Reduced" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "12px", background: C.alt, borderRadius: "4px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.d, fontSize: "11px", color: C.text, margin: "0 0 6px" }}>{s.state}</p>
              <p style={{ fontFamily: ff.m, fontSize: "8px", color: C.kanga, margin: "0 0 2px" }}>SCROLL: {s.scroll}</p>
              <p style={{ fontFamily: ff.m, fontSize: "8px", color: C.turq, margin: "0 0 2px" }}>CAMERA: {s.camera}</p>
              <p style={{ fontFamily: ff.m, fontSize: "8px", color: C.muted, margin: 0 }}>MOUSE: {s.mouse}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 6. UI & INTERACTION ──────────────────────

function UIInteraction() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>UI & INTERACTION LAYER</h2>

      <Card title="TWO UI LAYERS" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="IN-WORLD (3D)" color={C.voxGreen}>
            <p style={{ margin: "0 0 8px" }}>Elements that exist as 3D objects in the voxel scene — painted text on buildings, signs, billboards. These are rendered by Three.js and move with the camera. They're clickable via raycasting (Three.js click detection on 3D objects).</p>
            <p style={{ margin: 0, color: C.muted }}>Detection: Three.js Raycaster on mouse click. Hover: cursor changes + object emits a subtle glow (emissive material increase). Click: triggers a state change to INTERACTING, opens a floating UI panel.</p>
          </Spec>
          <Spec label="FLOATING UI (HTML)" color={C.turq}>
            <p style={{ margin: "0 0 8px" }}>Standard HTML/CSS elements that overlay the Three.js canvas. Social cards, info panels, contact form, navigation. These are positioned in screen space, not world space. They appear/disappear based on which stop the camera is at.</p>
            <p style={{ margin: 0, color: C.muted }}>Implementation: React components rendered OUTSIDE the R3F canvas, positioned with CSS. Triggered by camera state (which anchor is active). Use Framer Motion for enter/exit animations (fade, slide, scale).</p>
          </Spec>
        </div>
      </Card>

      <Card title="PERSISTENT UI (ALWAYS VISIBLE)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
          {[
            { element: "PROGRESS BAR", position: "Right edge, vertical", desc: "Thin line showing scroll progress. Dots at anchor positions. Current position highlighted in Kanga Pink. Subtle — doesn't distract from the 3D scene." },
            { element: "SKIP BUTTON", position: "Bottom right corner", desc: "'Skip to content' link for accessibility. Opens a simple HTML fallback with all content (no 3D). Also useful for low-power devices. Small, unobtrusive." },
            { element: "RELLEDOMI MARK", position: "Top left corner", desc: "Small 'R' square + 'RELLEDOMI' text. Stays during the entire experience. Click → returns to title screen. Very low opacity during transitions, full opacity at stops." },
            { element: "SOUND TOGGLE", position: "Top right corner", desc: "Optional: ambient sound (city noise, music). Off by default. Small speaker icon to toggle. Muted start respects autoplay policies." },
            { element: "SCROLL HINT", position: "Bottom center", desc: "'↓ Scroll to explore' animated arrow. Appears at stops when user hasn't scrolled for 3+ seconds. Fades when scroll begins." },
            { element: "MOBILE TOUCH HINT", position: "Bottom center", desc: "On mobile: 'Swipe up to explore' replaces scroll hint. Touch-specific UX hint." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "12px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: ff.d, fontSize: "11px", color: C.text, margin: "0 0 2px" }}>{item.element}</p>
              <p style={{ fontFamily: ff.m, fontSize: "8px", color: C.turq, margin: "0 0 6px" }}>{item.position}</p>
              <p style={{ fontSize: "10px", color: C.muted, margin: 0, fontFamily: ff.b, lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="INTERACTION PATTERN">
        <div style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
          <pre style={{ fontFamily: ff.m, fontSize: "10px", color: C.sub, margin: 0, lineHeight: 2, whiteSpace: "pre-wrap" }}>{`USER SCROLLS → camera moves → approaches anchor
  → scroll friction increases → camera settles at anchor
  → floating UI appears (social cards, info panels)
  → in-world elements highlight on hover (3D glow)

USER CLICKS IN-WORLD ELEMENT (3D raycaster)
  → scroll LOCKS
  → 3D scene dims slightly (reduce ambient light)
  → floating detail panel opens (HTML overlay)
  → user reads / interacts with panel content

USER CLOSES PANEL (click X, press Escape, click outside)
  → scroll UNLOCKS
  → 3D scene brightens back
  → panel exits with animation
  → user can continue scrolling to next stop

USER CLICKS FLOATING UI ELEMENT (HTML)
  → same lock/dim/panel pattern
  → OR: direct external link (social profiles open in new tab)`}</pre>
        </div>
      </Card>
    </div>
  );
}

// ─── 7. 3D ASSETS ──────────────────────

function Assets3D() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>3D ASSET PIPELINE</h2>

      <Card title="MODELING TOOL — MAGICAVOXEL" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="WHY MAGICAVOXEL">
            <p style={{ margin: 0 }}>Free. Dead simple to learn (30 min to basic proficiency). Purpose-built for voxel art. Export to .obj or .ply. Has built-in rendering for previews. Huge community with free model packs. The voxel constraint means you can't overthink detail — speed over perfection.</p>
          </Spec>
          <Spec label="ALTERNATIVE TOOLS">
            <p style={{ margin: 0 }}><strong style={{ color: C.text }}>Blender + voxel add-ons:</strong> More control, harder to learn. Use if MagicaVoxel feels limiting. <strong style={{ color: C.text }}>Goxel:</strong> Free, open-source, lighter than MagicaVoxel. <strong style={{ color: C.text }}>VoxEdit (The Sandbox):</strong> Free, good animation support. <strong style={{ color: C.text }}>AI generation (Meshy.ai):</strong> Can generate voxel-style 3D models from text prompts — useful for props and simple buildings. Quality varies.</p>
          </Spec>
        </div>
      </Card>

      <Card title="ASSET LIST" tag={<Badge color="green">VOXEL MODELS</Badge>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { cat: "BUILDINGS", items: ["Commercial building A (2-story, shop fronts)", "Commercial building B (3-story, office-style)", "Commercial building C (1-story, market stall integrated)", "Landmark tower (KICC-inspired, tall)", "Small shop / kiosk × 3 variants", "Residential building (background filler)"], count: "~10 models", priority: "CRITICAL" },
            { cat: "GROUND & INFRASTRUCTURE", items: ["Road sections (straight, intersection, T-junction)", "Sidewalk / curb sections", "Street lamp post × 2 styles", "Traffic light", "Road markings (crosswalk, lane lines — can be texture)"], count: "~8 models", priority: "CRITICAL" },
            { cat: "VEHICLES", items: ["Matatu (colorful, iconic)", "Matatu variant (different colors)", "Boda-boda motorcycle", "Parked car"], count: "~4 models", priority: "HIGH" },
            { cat: "CHARACTERS", items: ["Host figure with mic prop", "Contestant figures × 3 (different colors/poses)", "Spectator figures × 4-6 (standing, cheering, phone-up)", "Walking pedestrian × 3", "Camera operator figure"], count: "~14 figures", priority: "HIGH" },
            { cat: "PROPS & DETAILS", items: ["Street Games equipment (cups, barriers, speaker)", "Bench", "Tree × 2 styles", "Market stall with goods", "Trash bin", "Voxel cat", "Billboard/sign board frame", "Fountain or statue (for Stop 2 plaza)"], count: "~10 props", priority: "MEDIUM" },
            { cat: "ENVIRONMENT", items: ["Cloud formations × 3 for sky", "Bird flock (small cluster of voxels)", "Stars (for night — tiny bright voxels)", "Sun / moon"], count: "~6 elements", priority: "MEDIUM" },
          ].map((group, i) => (
            <div key={i} style={{ padding: "14px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <p style={{ fontFamily: ff.d, fontSize: "13px", color: C.text, margin: 0 }}>{group.cat}</p>
                <div style={{ display: "flex", gap: "6px" }}>
                  <Badge color="chrome">{group.count}</Badge>
                  <Badge color={group.priority === "CRITICAL" ? "kanga" : group.priority === "HIGH" ? "turq" : "muted"}>{group.priority}</Badge>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
                {group.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: "6px", padding: "3px 0", fontSize: "10px", fontFamily: ff.b, color: C.muted }}>
                    <span style={{ color: C.voxGreen, fontSize: "5px", marginTop: "4px" }}>■</span>{item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          <div style={{ padding: "16px", background: C.alt, borderRadius: "5px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "24px", color: C.voxGreen, margin: "0 0 4px" }}>~52</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted }}>TOTAL VOXEL MODELS</p>
          </div>
          <div style={{ padding: "16px", background: C.alt, borderRadius: "5px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "24px", color: C.turq, margin: "0 0 4px" }}>~3-5MB</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted }}>TOTAL SCENE (glTF)</p>
          </div>
          <div style={{ padding: "16px", background: C.alt, borderRadius: "5px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "24px", color: C.kanga, margin: "0 0 4px" }}>$0</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted }}>TOOL COST (MAGICAVOXEL)</p>
          </div>
        </div>
      </Card>

      <Card title="EXPORT PIPELINE">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {[
            { step: "1", title: "MODEL IN MAGICAVOXEL", desc: "Build each model in MagicaVoxel using the Kanga & Chrome color palette (load as a custom palette). Export as .obj with materials." },
            { step: "2", title: "IMPORT TO BLENDER", desc: "Import .obj into Blender. Clean up: merge duplicate vertices, apply simple materials. Combine related models into groups (all buildings for Stop 1 = one group)." },
            { step: "3", title: "SCENE ASSEMBLY", desc: "Arrange all models in Blender into the full scene layout. Position buildings, place props, set up the camera path spline. This is the 'master scene' file." },
            { step: "4", title: "EXPORT AS glTF", desc: "Export the full scene (or stop-specific chunks) as .glb (binary glTF). Include materials and basic lighting hints. Use Draco compression for smaller file size. Target: <5MB for the full scene." },
            { step: "5", title: "LOAD IN THREE.JS", desc: "Use @react-three/drei's useGLTF to load the .glb in the R3F scene. Apply Three.js lights, post-processing (bloom, toon shading), and connect to the scroll controller." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", padding: "12px 14px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "4px", background: C.kangaGlow, border: `1px solid ${C.kanga}33`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ff.d, fontSize: "12px", color: C.kanga, flexShrink: 0 }}>{item.step}</div>
              <div>
                <p style={{ fontFamily: ff.d, fontSize: "12px", color: C.text, margin: "0 0 3px" }}>{item.title}</p>
                <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontFamily: ff.b, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 8. TECH STACK ──────────────────────

function TechStack() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>TECHNICAL ARCHITECTURE</h2>

      <Card title="CORE STACK" accent>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <Spec label="FRAMEWORK">Next.js 14+ (App Router, static export). The page is a single route with a full-screen Three.js canvas.</Spec>
          <Spec label="3D ENGINE">@react-three/fiber (R3F) + @react-three/drei. R3F is React's Three.js renderer. Drei provides helpers: useGLTF (model loading), OrbitControls (dev only), Environment, useScroll.</Spec>
          <Spec label="SCROLL">Lenis for smooth scroll normalization. Custom scroll-to-camera mapper that reads Lenis scroll progress and interpolates camera position on the spline.</Spec>
          <Spec label="ANIMATION">GSAP for the fall sequence (camera animation timeline) and any complex tweens. Framer Motion for HTML UI overlays (panels, cards, enter/exit). R3F useFrame for per-frame 3D updates.</Spec>
          <Spec label="POST-PROCESSING">@react-three/postprocessing: Bloom (for neon/lights at night), Outline (for hover highlighting 3D objects), ToneMapping. Optional: custom toon shader for voxels.</Spec>
          <Spec label="INTERACTION">Three.js Raycaster (via R3F's onClick/onPointerOver on mesh components) for 3D clicks. Standard React events for HTML UI. State machine (Zustand store) for TITLE/FALLING/AT_STOP/TRAVELING/INTERACTING states.</Spec>
        </div>
      </Card>

      <Card title="FILE STRUCTURE">
        <div style={{ padding: "16px", background: C.alt, borderRadius: "5px", border: `1px solid ${C.border}` }}>
          <pre style={{ fontFamily: ff.m, fontSize: "10px", color: C.sub, margin: 0, lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{`src/
  app/
    layout.tsx              — fonts, metadata
    page.tsx                — mounts <Experience /> + HTML overlays
    globals.css             — tailwind + custom properties
  stores/
    useJourney.ts           — Zustand: state machine (title/falling/stop1/traveling/stop2/etc)
    useCamera.ts            — camera position, rotation, scroll progress
  components/
    Experience.tsx           — R3F Canvas wrapper, loads scene + camera + lights
    scene/
      VoxelWorld.tsx         — loads full glTF scene
      CameraRig.tsx          — scroll-driven camera on spline + mouse rotation
      Lighting.tsx           — sun/ambient/point lights, scroll-driven day→night
      PostFX.tsx             — bloom, outline, tone mapping
      FallSequence.tsx       — GSAP-driven fall animation
    stops/
      Stop1Elements.tsx      — interactive 3D elements at Stop 1
      Stop2Elements.tsx      — interactive 3D elements at Stop 2
      Stop3Elements.tsx      — interactive 3D elements at Stop 3
    interactables/
      ClickableMesh.tsx      — wrapper: adds hover glow + click handler to any mesh
      VoxelSign.tsx          — in-world text sign (3D text or textured plane)
    overlays/
      TitleScreen.tsx        — entry: RELLEDOMI + Street Games / Business buttons
      SocialCard.tsx         — follow CTA card (HTML overlay)
      GameCard.tsx           — game format detail card
      InfoPanel.tsx          — generic content panel
      ContactForm.tsx        — contact form overlay
      ProgressBar.tsx        — scroll progress indicator
      SkipButton.tsx         — accessibility skip link
    effects/
      Particles.tsx          — wind/dust/birds particles
      SpeedLines.tsx         — fall sequence speed streaks
  lib/
    cameraSpline.ts          — CatmullRomCurve3 definition with control points
    scrollMapper.ts          — scroll progress → spline position with friction zones
    stateConfig.ts           — state machine transitions and rules
  public/
    models/
      scene.glb              — full voxel scene (Draco compressed)
      scene-draco.glb        — alternative: scene split into chunks
    textures/
      halftone.png           — optional overlay texture
      noise.png              — grain overlay`}</pre>
        </div>
      </Card>

      <Card title="PERFORMANCE TARGETS">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {[
            { metric: "SCENE SIZE", target: "<5MB", note: "glTF + Draco" },
            { metric: "LOAD TIME", target: "<4s", note: "on 4G" },
            { metric: "RENDER FPS", target: "60fps", note: "desktop" },
            { metric: "MOBILE FPS", target: "30-60", note: "reduced quality" },
          ].map((m, i) => (
            <div key={i} style={{ padding: "14px", background: C.alt, borderRadius: "5px", textAlign: "center" }}>
              <p style={{ fontFamily: ff.d, fontSize: "20px", color: C.kanga, margin: "0 0 2px" }}>{m.target}</p>
              <p style={{ fontFamily: ff.m, fontSize: "8px", color: C.muted, margin: "0 0 2px", letterSpacing: "0.08em" }}>{m.metric}</p>
              <p style={{ fontFamily: ff.b, fontSize: "9px", color: C.dim, margin: 0 }}>{m.note}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── 9. BUILD PLAN ──────────────────────

function BuildPlan() {
  return (
    <div>
      <h2 style={{ fontFamily: ff.d, fontSize: "28px", color: C.text, margin: "0 0 24px" }}>BUILD PLAN</h2>

      <Card title="PARALLEL TRACKS" accent>
        <p style={{ fontSize: "13px", color: C.sub, margin: "0 0 16px", fontFamily: ff.b, lineHeight: 1.7 }}>Two workstreams run in parallel: 3D modeling (MagicaVoxel → Blender → glTF) and code (Next.js + R3F + scroll system). They converge when the scene is loaded into the web experience.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div>
            <p style={{ fontFamily: ff.d, fontSize: "14px", color: C.voxGreen, margin: "0 0 12px" }}>TRACK A — 3D MODELING</p>
            {[
              { phase: "Learn MagicaVoxel", time: "Day 1-2", desc: "Tutorials, build test models, get comfortable with the tool. Load Kanga & Chrome as custom palette." },
              { phase: "Build buildings", time: "Day 3-5", desc: "~10 building models. Focus on variety — shops, offices, the landmark tower. Include sign surfaces where in-world text will go." },
              { phase: "Build characters & vehicles", time: "Day 5-7", desc: "~18 figures + 4 vehicles. Characters are small — 4 voxels tall. Matatus need the most detail." },
              { phase: "Build props & environment", time: "Day 7-9", desc: "Street furniture, trees, market stalls, game equipment, sky elements. The detail that makes the world feel alive." },
              { phase: "Scene assembly in Blender", time: "Day 9-12", desc: "Import all models. Arrange the full scene: 3 stops + transitions. Set up camera spline. Test export to glTF." },
              { phase: "Optimize & export", time: "Day 12-14", desc: "Draco compression. Remove hidden faces. Merge where possible. Final .glb export under 5MB." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "10px 12px", background: C.alt, borderRadius: "4px", border: `1px solid ${C.border}`, marginBottom: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                  <span style={{ fontFamily: ff.d, fontSize: "11px", color: C.text }}>{item.phase}</span>
                  <Badge color="green">{item.time}</Badge>
                </div>
                <p style={{ fontSize: "10px", color: C.muted, margin: 0, fontFamily: ff.b }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <p style={{ fontFamily: ff.d, fontSize: "14px", color: C.voxBlue, margin: "0 0 12px" }}>TRACK B — CODE</p>
            {[
              { phase: "Project setup + scroll system", time: "Day 1-3", desc: "Next.js + R3F + Lenis. Build the scroll-to-camera mapper with placeholder cube scene. Verify smooth scroll → camera movement works." },
              { phase: "Camera spline + friction", time: "Day 3-5", desc: "Define CatmullRomCurve3 with control points. Implement friction zones at anchor positions. Test with a simple tube geometry following the path." },
              { phase: "State machine + fall sequence", time: "Day 5-7", desc: "Zustand store for all states. GSAP fall animation. Title screen HTML overlay. Connect click → fall → scroll activation." },
              { phase: "UI overlays + interactions", time: "Day 7-10", desc: "Build all floating UI components: social cards, game cards, info panels, contact form. Framer Motion enter/exit. Wire up to state machine." },
              { phase: "3D interactions + raycasting", time: "Day 10-12", desc: "ClickableMesh component with hover glow + click handler. Connect in-world clicks to UI panel opening. Scroll lock/unlock on interaction." },
              { phase: "Load real scene + lighting", time: "Day 12-15", desc: "Replace placeholder cubes with actual .glb scene. Set up lighting (directional + point lights). Add post-processing (bloom, outline). Day→night transition driven by scroll." },
              { phase: "Polish + mobile + deploy", time: "Day 15-18", desc: "Loading screen. Mobile touch scroll. Reduced quality toggle. SEO meta. Accessibility (skip button, keyboard nav). Vercel deploy." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "10px 12px", background: C.alt, borderRadius: "4px", border: `1px solid ${C.border}`, marginBottom: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                  <span style={{ fontFamily: ff.d, fontSize: "11px", color: C.text }}>{item.phase}</span>
                  <Badge color="blue">{item.time}</Badge>
                </div>
                <p style={{ fontSize: "10px", color: C.muted, margin: 0, fontFamily: ff.b }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="TOTAL TIMELINE">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "28px", color: C.kanga, margin: "0 0 4px" }}>18-22</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted }}>DAYS TOTAL</p>
          </div>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "28px", color: C.voxGreen, margin: "0 0 4px" }}>~52</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted }}>VOXEL MODELS</p>
          </div>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "28px", color: C.turq, margin: "0 0 4px" }}>&lt;5MB</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted }}>SCENE SIZE</p>
          </div>
          <div style={{ padding: "20px", background: C.alt, borderRadius: "6px", textAlign: "center" }}>
            <p style={{ fontFamily: ff.d, fontSize: "28px", color: C.cream, margin: "0 0 4px" }}>$0-30</p>
            <p style={{ fontFamily: ff.m, fontSize: "9px", color: C.muted }}>TOOL COST</p>
          </div>
        </div>
        <div style={{ marginTop: "12px", padding: "14px", background: C.kangaGlow, borderRadius: "5px", border: "1px solid rgba(194,24,91,0.15)" }}>
          <p style={{ fontSize: "12px", color: C.kanga, margin: 0, fontFamily: ff.b, lineHeight: 1.7 }}>
            <strong>The voxel approach saves you massively</strong> compared to the illustrated 2.5D blueprint: $0 for art tools (MagicaVoxel is free), ~52 simple models instead of 70 complex illustrations, &lt;5MB total scene instead of 15-30MB of PNGs, and a single .glb file instead of dozens of layered images. The tradeoff is learning MagicaVoxel and Blender basics — but both have excellent beginner tutorials and the voxel constraint keeps complexity low.
          </p>
        </div>
      </Card>
    </div>
  );
}

// ─── MAIN ──────────────────────

export default function FinalBlueprint() {
  const [tab, setTab] = useState("vision");
  const render = { vision: Vision, flow: UserFlow, stops: ThreeStops, voxel: VoxelWorld, camera: CameraScroll, ui: UIInteraction, assets: Assets3D, tech: TechStack, build: BuildPlan };
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
            <span style={{ fontFamily: ff.m, fontSize: "8px", color: C.muted }}>/ FINAL BLUEPRINT</span>
          </div>
          <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                background: "none", border: "none",
                borderBottom: tab === t.id ? `2px solid ${C.kanga}` : "2px solid transparent",
                padding: "10px 11px 12px", cursor: "pointer",
                fontFamily: ff.m, fontSize: "9px", letterSpacing: "0.05em",
                color: tab === t.id ? C.text : C.muted, whiteSpace: "nowrap",
              }}>{t.label}</button>
            ))}
          </div>
        </div>
      </nav>
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px 20px 60px" }}><Comp /></main>
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "16px 20px", textAlign: "center" }}>
        <span style={{ fontFamily: ff.m, fontSize: "8px", color: C.dim, letterSpacing: "0.12em" }}>RELLEDOMI ENTERTAINMENT — VOXEL 3D WEBSITE — FINAL BLUEPRINT v3.0</span>
      </footer>
    </div>
  );
}
