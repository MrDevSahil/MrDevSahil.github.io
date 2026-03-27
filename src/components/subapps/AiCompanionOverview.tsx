import { BlockHeader, Prompt, C } from "@/components/ui";

export default function AiCompanionOverview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }} className="animate-fadein">

      <section>
        <BlockHeader label="what is this" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text, marginBottom: 8 }}>
          An AI study companion trained on Indian board curricula — NCERT, CBSE, ICSE.
          Not a generic LLM wrapper. Contextually aware of the exact syllabus a student
          is studying.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          Ask a doubt from Chapter 5 of Class 10 Science. Get an answer that matches
          the textbook language and exam pattern — not a Wikipedia summary.
        </p>
      </section>

      <section>
        <BlockHeader label="why India-specific" />
        <div style={{ border: `1px solid ${C.border}`, padding: 16, background: C.bg2, fontSize: 12, fontFamily: "var(--font-mono)", lineHeight: 2 }}>
          <div style={{ color: C.muted }}><span style={{ color: C.accent }}>→</span> NCERT/CBSE answers have a specific expected format in exams</div>
          <div style={{ color: C.muted }}><span style={{ color: C.accent }}>→</span> generic AI answers often contradict the textbook wording</div>
          <div style={{ color: C.muted }}><span style={{ color: C.accent }}>→</span> students need board-aligned explanations, not optimal explanations</div>
        </div>
      </section>

      <section>
        <BlockHeader label="scope" />
        <Prompt>Class 6–12 NCERT (Science, Maths, Social)</Prompt>
        <Prompt>CBSE exam pattern awareness</Prompt>
        <Prompt>ICSE curriculum support (later)</Prompt>
        <Prompt>chapter-level context, not just keyword search</Prompt>
      </section>

      <section>
        <BlockHeader label="current status" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          Exploring. Curriculum data acquisition and fine-tuning strategy in research phase.
        </p>
      </section>

    </div>
  );
}
