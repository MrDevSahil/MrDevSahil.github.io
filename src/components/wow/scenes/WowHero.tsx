import ThreeHeroBG  from "@/components/wow/ThreeHeroBG";
import { tickerText } from "@/lib/data";

/* Reusable letterbox bar */
function Bar({ top }: { top: boolean }) {
  return (
    <div style={{
      position: "absolute",
      left: 0, right: 0,
      [top ? "top" : "bottom"]: 0,
      height:  54,
      background: "#000",
      zIndex:  20,
      pointerEvents: "none",
    }} />
  );
}

interface Props { onNext: () => void; }

export default function WowHero({ onNext }: Props) {
  return (
    <div className="wow-section" style={{ background: "#010801" }}>
      <ThreeHeroBG />
      <Bar top />
      <Bar top={false} />

      {/* Frame label */}
      <div className="animate-fadein" style={{
        position: "absolute", top: 68, left: 36, zIndex: 10,
        fontFamily: "var(--font-mono)", fontSize: 9,
        color: "#2a4a2a", letterSpacing: "0.3em", textTransform: "uppercase",
      }}>
        01 / 05 · IDENTITY
      </div>

      {/* Film grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 5,
        pointerEvents: "none", opacity: 0.35,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
      }} />

      {/* Hero text */}
      <div style={{ position: "relative", zIndex: 6, textAlign: "center", padding: "0 24px" }}>
        <h1
          className="animate-glitch"
          style={{
            fontFamily:    "var(--font-bebas), Arial Black, sans-serif",
            fontSize:      "clamp(90px, 17vw, 230px)",
            color:         "#ddeedd",
            lineHeight:    0.88,
            letterSpacing: "0.06em",
            textShadow:    "0 0 100px rgba(127,255,127,0.12), 0 0 200px rgba(127,255,127,0.05)",
          }}
        >
          SAHIL
        </h1>

        <p
          className="animate-fadeUp"
          style={{
            fontFamily:    "var(--font-barlow), sans-serif",
            fontWeight:    300,
            fontSize:      "clamp(11px, 1.8vw, 17px)",
            color:         "#486048",
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            marginTop:     18,
            opacity:       0,
            animationDelay: "0.5s",
          }}
        >
          Android Architect · Systems Thinker · Guwahati, IN
        </p>

        <div
          className="animate-fadein"
          style={{
            width: 1, height: 48, margin: "28px auto 0",
            background: "linear-gradient(to bottom, #7fff7f66, transparent)",
            opacity: 0,
            animationDelay: "0.9s",
          }}
        />

        <button
          onClick={onNext}
          className="animate-fadein"
          style={{
            marginTop:     14,
            display:       "block",
            margin:        "14px auto 0",
            background:    "none",
            border:        "none",
            cursor:        "pointer",
            fontFamily:    "var(--font-mono)",
            fontSize:      9,
            color:         "#2a4a2a",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            opacity:       0,
            animationDelay: "1.3s",
          }}
        >
          scroll ↓
        </button>
      </div>

      {/* Ticker tape */}
      <div style={{
        position: "absolute", bottom: 54, left: 0, right: 0,
        height: 28, overflow: "hidden", zIndex: 8,
        borderTop: "1px solid #0d1a0d",
      }}>
        <div
          className="animate-ticker"
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      9,
            color:         "#1a2e1a",
            lineHeight:    "28px",
            whiteSpace:    "nowrap",
            letterSpacing: "0.25em",
          }}
        >
          {tickerText}{tickerText}
        </div>
      </div>
    </div>
  );
}
