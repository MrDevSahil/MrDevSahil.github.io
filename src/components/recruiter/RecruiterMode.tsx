/* ================================================================
   src/components/recruiter/RecruiterMode.tsx
   Shell for the terminal-style recruiter view.
   Owns tab state; renders the correct section component.
   ================================================================ */
import { useState, ReactElement } from "react";
import { C, Cursor } from "@/components/ui";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

const ASCII = `███████╗ █████╗ ██╗  ██╗██╗██╗
██╔════╝██╔══██╗██║  ██║██║██║
███████╗███████║███████║██║██║
╚════██║██╔══██║██╔══██║██║██║
███████║██║  ██║██║  ██║██║███████╗
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝`.trim();

type Tab = "about" | "projects" | "stack" | "blog" | "contact";
const TABS: Tab[] = ["about", "projects", "stack", "blog", "contact"];
const SECTION_MAP: Record<Tab, () => ReactElement> = {
  about: About,
  projects: Projects,
  stack: Stack,
  blog: Blog,
  contact: Contact,
};

export default function RecruiterMode() {
  const [tab, setTab] = useState<Tab>("about");
  const [hover, setHover] = useState<Tab | null>(null);
  const Section = SECTION_MAP[tab];

  return (
    <div style={{ height: "100vh", overflowY: "auto", background: C.bg }}>
      <main
        style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 80px" }}
      >
        {/* ── Header ── */}
        <header
          style={{
            borderBottom: `1px solid ${C.border}`,
            paddingBottom: 20,
            marginBottom: 36,
          }}
        >
          <pre
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: C.accent,
              lineHeight: 1.2,
              marginBottom: 14,
              overflowX: "auto",
            }}
          >
            {ASCII}
          </pre>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: C.muted,
            }}
          >
            android &amp; systems developer —{" "}
            <span style={{ color: C.amber }}>guwahati, IN</span> — building
            things that are fast
          </p>
        </header>

        {/* ── Tab nav ── */}
        <nav
          style={{
            display: "flex",
            width: "fit-content",
            border: `1px solid ${C.border}`,
            marginBottom: 36,
          }}
        >
          {TABS.map((t, i) => {
            const active = tab === t;
            const hovered = hover === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                onMouseEnter={() => setHover(t)}
                onMouseLeave={() => setHover(null)}
                style={{
                  padding: "6px 20px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  border: "none",
                  borderRight:
                    i < TABS.length - 1 ? `1px solid ${C.border}` : "none",
                  cursor: "pointer",
                  background: active || hovered ? C.bg2 : "transparent",
                  color: active || hovered ? C.accent : C.muted,
                  transition: "all 0.15s",
                }}
              >
                {t}
              </button>
            );
          })}
        </nav>

        {/* ── Active section ── */}
        {/* key forces remount → re-triggers .animate-fadein on every tab switch */}
        <div key={tab} className="animate-fadein">
          <Section />
        </div>

        {/* ── Footer ── */}
        <footer
          style={{
            borderTop: `1px solid ${C.border}`,
            paddingTop: 16,
            marginTop: 60,
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: C.dim,
          }}
        >
          <span>mrdevsahil.github.io</span>
          <span>
            built with vite + react
            <Cursor />
          </span>
        </footer>
      </main>
    </div>
  );
}
