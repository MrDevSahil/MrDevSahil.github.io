import { contactEntries } from "@/lib/data";

const COLOR_HEX: Record<string, string> = {
  accent: "#7fff7f",
  amber:  "#ffcc44",
  text:   "#c8c8c8",
  muted:  "#3a5a3a",
};

export default function WowTransmission() {
  return (
    <div className="wow-section" style={{ background: "#010501", alignItems: "stretch" }}>

      {/* Letterbox */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0,    height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />

      {/* Frame label */}
      <div className="animate-fadein" style={{
        position: "absolute", top: 68, left: 36, zIndex: 10,
        fontFamily: "var(--font-mono)", fontSize: 9,
        color: "#2a4a2a", letterSpacing: "0.3em", textTransform: "uppercase",
      }}>
        05 / 05 · TRANSMISSION
      </div>

      {/* Animated circle rings */}
      <svg width="340" height="340" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1, opacity: 0.06,
      }}>
        <circle cx="170" cy="170" r="160"
          fill="none" stroke="#7fff7f" strokeWidth="1"
          strokeDasharray="600" className="animate-drawLine" />
        <circle cx="170" cy="170" r="120"
          fill="none" stroke="#7fff7f" strokeWidth="0.5"
          strokeDasharray="600" className="animate-drawLine"
          style={{ animationDelay: "0.4s" }} />
      </svg>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", height: "100%",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "80px 60px",
      }}>
        {/* Big heading */}
        <div
          className="animate-revealUp"
          style={{
            fontFamily:    "var(--font-bebas), Arial Black, sans-serif",
            fontSize:      "clamp(48px, 9vw, 120px)",
            color:         "#c8e8c8",
            lineHeight:    0.9,
            letterSpacing: "0.04em",
            marginBottom:  40,
            opacity:       0,
            animationDelay: "0.1s",
          }}
        >
          FIND<br />
          <span style={{ color: "#7fff7f" }}>SAHIL</span>
        </div>

        {/* Contact rows */}
        <div style={{ maxWidth: 480 }}>
          {contactEntries.map((row, i) => (
            <div
              key={row.key}
              className="animate-revealUp"
              style={{
                display:       "flex",
                gap:           28,
                alignItems:    "baseline",
                fontFamily:    "var(--font-mono)",
                fontSize:      12,
                borderBottom:  "1px dotted #0d1a0d",
                paddingBottom: 7,
                marginBottom:  7,
                opacity:       0,
                animationDelay: `${0.3 + i * 0.1}s`,
              }}
            >
              <span style={{ color: "#2a3a2a", width: 90, flexShrink: 0 }}>{row.key}</span>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{ color: COLOR_HEX[row.color], textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.textDecoration = "underline")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.textDecoration = "none")}
                >
                  {row.value}
                </a>
              ) : (
                <span style={{ color: COLOR_HEX[row.color] }}>{row.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="animate-fadein"
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      12,
            color:         "#1a2a1a",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop:     44,
            opacity:       0,
            animationDelay: "0.9s",
          }}
        >
          Not looking for jobs · If you have something fast to build, I'm listening
        </p>

        {/* Blinking cursor */}
        <div
          className="animate-blink"
          style={{ width: 8, height: 13, background: "#7fff7f", marginTop: 28 }}
        />
      </div>
    </div>
  );
}
