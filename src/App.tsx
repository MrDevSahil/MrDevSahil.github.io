import { useState, useEffect } from "react";
import { Routes, Route }        from "react-router-dom";
import RecruiterMode             from "@/components/recruiter/RecruiterMode";
import WowMode                   from "@/components/wow/WowMode";
import GlitchOverlay             from "@/components/wow/GlitchOverlay";
import ProjectPage               from "@/components/subapps/ProjectPage";

type Mode = "recruiter" | "wow";

function Portfolio() {
  const [mode, setMode]           = useState<Mode>("recruiter");
  const [glitching, setGlitching] = useState(false);
  const [nextMode, setNextMode]   = useState<Mode | null>(null);

  // Restore last-chosen mode across refreshes
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-mode") as Mode | null;
    if (saved === "wow" || saved === "recruiter") setMode(saved);
  }, []);

  const toggleMode = () => {
    const nm: Mode = mode === "recruiter" ? "wow" : "recruiter";
    setNextMode(nm);
    setGlitching(true);
    setTimeout(() => {
      setMode(nm);
      localStorage.setItem("portfolio-mode", nm);
      setGlitching(false);
    }, 520);
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden", background: "#0d0d0d" }}>
      {glitching && nextMode && <GlitchOverlay toMode={nextMode} />}

      {mode === "recruiter" ? <RecruiterMode /> : <WowMode />}

      {/* ── Mode toggle button ── */}
      <button
        onClick={toggleMode}
        style={{
          position:    "fixed",
          bottom:      mode === "wow" ? 68 : 22,
          right:       22,
          zIndex:      1000,
          fontFamily:  "var(--font-mono)",
          fontSize:    10,
          color:       mode === "wow" ? "#4a6a4a" : "#7fff7f",
          background:  mode === "wow" ? "rgba(0,0,0,0.85)" : "#0d0d0d",
          border:      `1px solid ${mode === "wow" ? "#1a2a1a" : "#2a4a2a"}`,
          padding:     "7px 16px",
          cursor:      "pointer",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition:  "all 0.25s",
          backdropFilter: "blur(4px)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.color      = mode === "wow" ? "#7fff7f" : "#0d0d0d";
          el.style.background = mode === "wow" ? "rgba(10,20,10,0.95)" : "#7fff7f";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.color      = mode === "wow" ? "#4a6a4a" : "#7fff7f";
          el.style.background = mode === "wow" ? "rgba(0,0,0,0.85)" : "#0d0d0d";
        }}
      >
        {mode === "recruiter" ? "[ ▶ wow mode ]" : "[ ■ recruiter mode ]"}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/"                   element={<Portfolio />} />
      <Route path="/projects/:slug"     element={<ProjectPage />} />
      {/* Catch-all → home */}
      <Route path="*"                   element={<Portfolio />} />
    </Routes>
  );
}
