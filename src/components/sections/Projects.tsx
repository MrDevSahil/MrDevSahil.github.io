import { useState }                      from "react";
import { useNavigate }                   from "react-router-dom";
import { projects }                      from "@/lib/data";
import { BlockHeader, StatusBadge, Tag, C } from "@/components/ui";

export default function Projects() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div>
      <BlockHeader label="projects" />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {projects.map((p) => {
          const isSubapp  = p.type === "subapp";
          const isHovered = hoveredSlug === p.slug;

          return (
            <div
              key={p.slug}
              onMouseEnter={() => setHoveredSlug(p.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              style={{
                border:   `1px solid ${isHovered ? C.dim : C.border}`,
                padding:  "14px 16px",
                position: "relative",
                transition: "border-color 0.15s",
              }}
            >
              {/* Left accent bar */}
              <div style={{
                position:   "absolute",
                left:       0, top: 0, bottom: 0,
                width:      3,
                background: C.accent,
                opacity:    isHovered ? 1 : 0,
                transition: "opacity 0.15s",
              }} />

              {/* Name + status */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, gap: 16 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.bright, fontWeight: 600 }}>
                  {p.name}
                </span>
                <StatusBadge status={p.status} />
              </div>

              {/* Description */}
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted, marginBottom: 10 }}>
                {p.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                {p.tags.map((t) => <Tag key={t} label={t} />)}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 20, fontSize: 11, fontFamily: "var(--font-mono)" }}>
                {isSubapp && (
                  <button
                    onClick={() => navigate(`/projects/${p.slug}`)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: C.accent, fontSize: 11, fontFamily: "var(--font-mono)", padding: 0 }}
                  >
                    open project →
                  </button>
                )}
                {p.playStore && (
                  <a href={p.playStore} target="_blank" rel="noopener noreferrer" style={{ color: C.blue }}>
                    play store →
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: C.blue }}>
                    github →
                  </a>
                )}
                {!isSubapp && !p.playStore && !p.github && (
                  <span style={{ color: C.muted }}>coming soon</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
