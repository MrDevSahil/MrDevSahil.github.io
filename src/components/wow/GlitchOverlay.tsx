/* Full-screen flash that plays during mode switches */
type Props = { toMode: "recruiter" | "wow" };

export default function GlitchOverlay({ toMode }: Props) {
  return (
    <div
      className="animate-modeFlash"
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         99999,
        pointerEvents:  "none",
        background:     "#000",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
      }}
    >
      <div
        className="animate-glitch"
        style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      10,
          color:         "#7fff7f",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        {toMode === "wow" ? "INITIATING BROADCAST" : "RETURNING TO TERMINAL"}
      </div>
    </div>
  );
}
