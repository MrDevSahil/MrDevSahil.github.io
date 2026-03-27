import OrbitNode from "@/components/wow/OrbitNode";

const ORBIT_NODES: [string, number, number, number, string][] = [
  ["KOTLIN",      90,  8,   0,   "#7fff7f"],
  ["C++",         90,  8,   180, "#7fff7f"],
  ["ANDROID NDK", 130, 13,  45,  "#4a8a4a"],
  ["JAVA",        130, 13,  225, "#4a8a4a"],
  ["LINUX",       165, 19,  90,  "#2a5a2a"],
  ["NEXT.JS",     165, 19,  270, "#2a5a2a"],
  ["GIT",         165, 19,  150, "#2a5a2a"],
  ["SWIFT",       200, 26,  30,  "#1a3a1a"],
  ["iOS / MACOS", 200, 26,  210, "#1a3a1a"],
];

const RINGS    = [90, 130, 165, 200];
const PHILOSOPHY = [
  "SPEED ABOVE ALL",
  "OWN THE ABSTRACTION",
  "SHIP FIRST, REFINE LATER",
  "BUILD FOR INDIA",
];

export default function WowStack() {
  return (
    <div className="wow-section" style={{ background: "#020602", alignItems: "stretch" }}>

      {/* Letterbox */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0,    height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />

      {/* Frame label */}
      <div className="animate-fadein" style={{
        position: "absolute", top: 68, left: 36, zIndex: 10,
        fontFamily: "var(--font-mono)", fontSize: 9,
        color: "#2a4a2a", letterSpacing: "0.3em", textTransform: "uppercase",
      }}>
        04 / 05 · STACK
      </div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 64, padding: "80px 60px",
      }}>
        {/* Orbit diagram */}
        <div style={{ position: "relative", width: 440, height: 440, flexShrink: 0 }}>
          <svg width="440" height="440" style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            {RINGS.map((r) => (
              <circle key={r} cx="220" cy="220" r={r}
                fill="none" stroke="#0d1a0d" strokeWidth="1" strokeDasharray="4 6" />
            ))}
            <circle cx="220" cy="220" r="4" fill="#7fff7f" opacity="0.6" />
            <text x="220" y="226" textAnchor="middle"
              style={{ fontFamily: "var(--font-mono)", fontSize: 8, fill: "#2a4a2a", letterSpacing: "0.2em" }}>
              SAHIL
            </text>
          </svg>

          {/* Orbit nodes — positioned relative to centre */}
          <div style={{ position: "absolute", top: 220, left: 220, width: 0, height: 0 }}>
            {ORBIT_NODES.map(([label, r, period, startDeg, color]) => (
              <OrbitNode key={label} label={label} r={r} period={period} startDeg={startDeg} color={color} />
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {PHILOSOPHY.map((line, i) => (
            <div
              key={i}
              className="animate-revealUp"
              style={{
                fontFamily:    "var(--font-bebas), Arial Black, sans-serif",
                fontSize:      "clamp(18px, 2.8vw, 38px)",
                color:         i === 0 ? "#c8e8c8" : `rgba(127,200,127,${0.5 - i * 0.1})`,
                letterSpacing: "0.06em",
                opacity:       0,
                animationDelay: `${i * 0.18}s`,
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
