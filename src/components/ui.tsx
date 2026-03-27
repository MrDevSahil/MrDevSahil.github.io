/* ================================================================
   src/components/ui.tsx
   Shared primitive components used across both modes.
   Pure presentational — no state, no side-effects.
   ================================================================ */
import type { ReactNode } from "react";

// ── Design token shortcuts (CSS vars → TS) ────────────────────────
export const C = {
  bg:     "var(--bg)",
  bg2:    "var(--bg2)",
  border: "var(--border)",
  dim:    "var(--dim)",
  muted:  "var(--muted)",
  text:   "var(--text)",
  bright: "var(--bright)",
  accent: "var(--accent)",
  amber:  "var(--amber)",
  blue:   "var(--blue)",
  red:    "var(--red)",
} as const;

// ── Section heading with trailing rule ────────────────────────────

export function BlockHeader({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
      <span style={{
        fontFamily:    "var(--font-mono)",
        fontSize:      10,
        color:         C.accent,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        fontWeight:    500,
        flexShrink:    0,
      }}>
        {label}
      </span>
      <span style={{ flex: 1, height: 1, background: C.border }} />
    </div>
  );
}

// ── CLI-style prompt line ─────────────────────────────────────────

export function Prompt({ children, comment }: { children: ReactNode; comment?: string }) {
  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.text, padding: "2px 0" }}>
      <span style={{ color: C.accent }}>$ </span>
      {children}
      {comment && <span style={{ color: C.muted, marginLeft: 8 }}>// {comment}</span>}
    </div>
  );
}

// ── Status badge ──────────────────────────────────────────────────

const STATUS_COLOR: Record<string, string> = {
  live:      "var(--accent)",
  wip:       "var(--amber)",
  exploring: "var(--amber)",
  archived:  "var(--muted)",
};

export function StatusBadge({ status }: { status: string }) {
  const col = STATUS_COLOR[status] ?? STATUS_COLOR.archived;
  return (
    <span style={{
      fontFamily:    "var(--font-mono)",
      fontSize:      10,
      color:         col,
      border:        `1px solid ${col}`,
      padding:       "2px 8px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      flexShrink:    0,
    }}>
      {status}
    </span>
  );
}

// ── Tag pill ──────────────────────────────────────────────────────

export function Tag({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)",
      fontSize:   10,
      color:      C.dim,
      border:     `1px solid ${C.border}`,
      padding:    "1px 6px",
    }}>
      {label}
    </span>
  );
}

// ── Blinking cursor ───────────────────────────────────────────────

export function Cursor() {
  return (
    <span
      className="animate-blink"
      style={{
        display:       "inline-block",
        width:         8,
        height:        13,
        background:    C.accent,
        verticalAlign: "text-bottom",
        marginLeft:    2,
      }}
    />
  );
}
