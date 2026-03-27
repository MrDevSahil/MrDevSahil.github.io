import { originLines } from "@/lib/data";

export default function WowOrigin() {
  return (
    <div className="wow-section" style={{ background: "#050505", alignItems: "stretch" }}>

      {/* Letterbox */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0,    height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />

      {/* Frame label */}
      <div className="animate-fadein" style={{
        position: "absolute", top: 68, left: 36, zIndex: 10,
        fontFamily: "var(--font-mono)", fontSize: 9,
        color: "#2a4a2a", letterSpacing: "0.3em", textTransform: "uppercase",
      }}>
        02 / 05 · ORIGIN
      </div>

      {/* Perspective grid */}
      <div style={{
        position:        "absolute",
        inset:           0,
        zIndex:          1,
        opacity:         0.6,
        background:      `
          linear-gradient(rgba(127,255,127,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(127,255,127,0.025) 1px, transparent 1px)
        `,
        backgroundSize:  "64px 64px",
        transform:       "perspective(700px) rotateX(22deg)",
        transformOrigin: "bottom",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", width: "100%", height: "100%",
        alignItems: "center", padding: "80px 60px", gap: 48,
      }}>
        {/* Narrative */}
        <div style={{ flex: 1, maxWidth: 520 }}>
          {originLines.map((line, i) => (
            <div
              key={i}
              className="animate-revealUp"
              style={{
                fontFamily:    line.bold ? "var(--font-bebas), sans-serif" : "var(--font-barlow), sans-serif",
                fontWeight:    line.bold ? undefined : line.big ? 700 : 300,
                fontStyle:     line.italic ? "italic" : "normal",
                fontSize:      line.big ? "clamp(22px, 3.5vw, 48px)" : "clamp(14px, 2vw, 26px)",
                color:         line.color,
                lineHeight:    1.35,
                letterSpacing: line.bold ? "0.08em" : undefined,
                marginBottom:  i === 5 ? 20 : line.big ? 6 : 4,
                opacity:       0,
                animationDelay: `${i * 0.13}s`,
              }}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Circuit SVG */}
        <div style={{ width: 140, flexShrink: 0, display: "flex", justifyContent: "center" }}>
          <svg width="80" height="320" overflow="visible">
            <line x1="40" y1="0" x2="40" y2="320" stroke="#0d2a0d" strokeWidth="1" />
            {[30, 90, 155, 225, 290].map((y, i) => (
              <g key={i}>
                <circle cx="40" cy={y} r="7" fill="none" stroke="#1a4a1a" strokeWidth="1"
                  className="animate-pulse-glow" style={{ animationDelay: `${i * 0.4}s` }} />
                <circle cx="40" cy={y} r="2.5" fill="#7fff7f"
                  className="animate-pulse-glow" style={{ animationDelay: `${i * 0.4}s` }} />
                <line x1="40" y1={y} x2="80" y2={y} stroke="#0d2a0d" strokeWidth="1" />
                <circle cx="80" cy={y} r="1.5" fill="#1a4a1a" />
              </g>
            ))}
            <line x1="40" y1="0" x2="40" y2="320"
              stroke="#7fff7f" strokeWidth="0.5" opacity="0.3"
              strokeDasharray="600" className="animate-drawLine" />
          </svg>
        </div>
      </div>
    </div>
  );
}
