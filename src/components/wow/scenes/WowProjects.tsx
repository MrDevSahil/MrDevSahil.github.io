import { projects } from "@/lib/data";

const STATUS_COLOR: Record<string, string> = {
  live:      "#7fff7f",
  wip:       "#ffcc44",
  exploring: "#ffcc44",
  archived:  "#666666",
};

export default function WowProjects() {
  return (
    <div className="wow-section" style={{ background: "#030803", alignItems: "stretch" }}>

      {/* Letterbox */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0,    height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 54, background: "#000", zIndex: 20, pointerEvents: "none" }} />

      {/* Frame label */}
      <div className="animate-fadein" style={{
        position: "absolute", top: 68, left: 36, zIndex: 10,
        fontFamily: "var(--font-mono)", fontSize: 9,
        color: "#2a4a2a", letterSpacing: "0.3em", textTransform: "uppercase",
      }}>
        03 / 05 · WORKS
      </div>

      {/* Scan line */}
      <div className="animate-scanH" style={{
        position: "absolute", left: 0, right: 0, height: 1,
        zIndex: 3, background: "rgba(127,255,127,0.04)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", height: "100%",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "80px 60px",
      }}>
        <div className="animate-fadein" style={{
          fontFamily: "var(--font-mono)", fontSize: 9,
          color: "#2a4a2a", letterSpacing: "0.3em",
          textTransform: "uppercase", marginBottom: 32,
        }}>
          selected work
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16, maxWidth: 900,
        }}>
          {projects.map((p, i) => {
            const color = STATUS_COLOR[p.status] ?? STATUS_COLOR.archived;
            return (
              <div
                key={p.slug}
                className="animate-floatY"
                style={{
                  background:       "#050d05",
                  border:           `1px solid ${color}22`,
                  padding:          "20px 22px",
                  animationDelay:   `${i * 0.4}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13, color: "#e8e8e8" }}>
                    {p.name}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 9,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    border: `1px solid ${color}66`, padding: "2px 6px", color,
                  }}>
                    {p.status}
                  </span>
                </div>

                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#3a5a3a", marginBottom: 12 }}>
                  {p.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--font-mono)", fontSize: 9,
                      border: "1px solid #1a2a1a", padding: "1px 6px", color: "#2a4a2a",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {p.playStore && (
                  <a href={p.playStore} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#5faeff" }}>
                    play store →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
