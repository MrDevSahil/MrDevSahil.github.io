import { BlockHeader, Prompt, C } from "@/components/ui";

export default function SuperAppOverview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }} className="animate-fadein">

      <section>
        <BlockHeader label="what is this" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text, marginBottom: 8 }}>
          A performance-first super app for the Indian market. One shell, four verticals:
          food delivery, ride-hailing, e-commerce, and payments.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          The core runs in C++ via the Android NDK. The Kotlin shell wraps it.
          The goal is to beat incumbent apps on raw launch time and scroll performance.
        </p>
      </section>

      <section>
        <BlockHeader label="architecture" />
        <div style={{
          border:     `1px solid ${C.border}`,
          padding:    "16px",
          fontFamily: "var(--font-mono)",
          fontSize:   11,
          color:      C.muted,
          background: C.bg2,
          lineHeight: 1.8,
        }}>
          <div><span style={{ color: C.accent }}>android app</span></div>
          <div style={{ paddingLeft: 16 }}>└── <span style={{ color: C.text }}>kotlin shell</span> (UI layer)</div>
          <div style={{ paddingLeft: 32 }}>└── <span style={{ color: C.text }}>JNI bridge</span></div>
          <div style={{ paddingLeft: 48 }}>└── <span style={{ color: C.accent }}>C++ core engine</span> (performance-critical logic)</div>
          <div style={{ paddingLeft: 64 }}>├── networking</div>
          <div style={{ paddingLeft: 64 }}>├── caching</div>
          <div style={{ paddingLeft: 64 }}>└── state management</div>
        </div>
      </section>

      <section>
        <BlockHeader label="current status" />
        <Prompt comment="done">C++ core engine</Prompt>
        <Prompt comment="in progress">Kotlin shell architecture</Prompt>
        <Prompt comment="next">JNI integration layer</Prompt>
        <Prompt comment="pending Mac">iOS Swift shell</Prompt>
      </section>

      <section>
        <BlockHeader label="design principle" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          Speed above all. Every architectural decision is filtered through one question:
          does this make the app faster for a user on a budget Android device with a 4G connection
          in a tier-2 Indian city?
        </p>
      </section>

    </div>
  );
}
