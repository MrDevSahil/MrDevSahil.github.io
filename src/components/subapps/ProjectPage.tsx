/* ================================================================
   src/components/subapps/ProjectPage.tsx
   Route: /projects/:slug
   Renders the correct subapp overview inside a consistent shell.
   Uses react-router-dom useParams — no SSR, no static params needed.
   ================================================================ */
import { useParams, useNavigate } from "react-router-dom";
import { projects }               from "@/lib/data";
import { BlockHeader, Prompt, StatusBadge, Tag, Cursor, C } from "@/components/ui";

import SuperAppOverview      from "./SuperAppOverview";
import EdtechCrmOverview     from "./EdtechCrmOverview";
import AiCompanionOverview   from "./AiCompanionOverview";

function SubappContent({ slug }: { slug: string }) {
  switch (slug) {
    case "super-app":            return <SuperAppOverview />;
    case "edtech-crm":           return <EdtechCrmOverview />;
    case "ai-student-companion": return <AiCompanionOverview />;
    default:
      return (
        <div>
          <BlockHeader label="coming soon" />
          <Prompt>this sub-project page is not built yet</Prompt>
        </div>
      );
  }
}

export default function ProjectPage() {
  const { slug }    = useParams<{ slug: string }>();
  const navigate    = useNavigate();
  const project     = projects.find((p) => p.slug === slug && p.type === "subapp");

  if (!project) {
    return (
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px", fontFamily: "var(--font-mono)" }}>
        <p style={{ color: C.muted, fontSize: 12 }}>Project not found.</p>
        <button
          onClick={() => navigate("/")}
          style={{ marginTop: 16, background: "none", border: "none", color: C.accent, cursor: "pointer", fontSize: 12, fontFamily: "var(--font-mono)", padding: 0 }}
        >
          ← back to portfolio
        </button>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 80px" }}>

      {/* ── Breadcrumb ── */}
      <div style={{
        display:       "flex",
        alignItems:    "center",
        gap:           8,
        fontFamily:    "var(--font-mono)",
        fontSize:      11,
        color:         C.muted,
        marginBottom:  32,
        borderBottom:  `1px solid ${C.border}`,
        paddingBottom: 16,
      }}>
        <button onClick={() => navigate("/")} style={{ background: "none", border: "none", color: C.accent, cursor: "pointer", fontSize: 11, fontFamily: "var(--font-mono)", padding: 0 }}>
          mrdevsahil
        </button>
        <span>/</span>
        <button onClick={() => navigate("/")} style={{ background: "none", border: "none", color: C.accent, cursor: "pointer", fontSize: 11, fontFamily: "var(--font-mono)", padding: 0 }}>
          projects
        </button>
        <span>/</span>
        <span style={{ color: C.text }}>{project.name}</span>
      </div>

      {/* ── Project header ── */}
      <header style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 8 }}>
          <h1 style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: C.bright, fontWeight: 600, margin: 0 }}>
            {project.name}
          </h1>
          <StatusBadge status={project.status} />
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted, marginBottom: 12 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
        {project.github && (
          <div style={{ marginTop: 12 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: C.blue }}>
              github →
            </a>
          </div>
        )}
      </header>

      {/* ── Subapp content ── */}
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
        <SubappContent slug={slug ?? ""} />
      </div>

      {/* ── Footer ── */}
      <footer style={{
        borderTop:      `1px solid ${C.border}`,
        paddingTop:     16,
        marginTop:      64,
        display:        "flex",
        justifyContent: "space-between",
        fontFamily:     "var(--font-mono)",
        fontSize:       11,
        color:          C.dim,
      }}>
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: 11, fontFamily: "var(--font-mono)", padding: 0 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = C.dim)}
        >
          ← back to portfolio
        </button>
        <span>mrdevsahil.github.io<Cursor /></span>
      </footer>

    </main>
  );
}
