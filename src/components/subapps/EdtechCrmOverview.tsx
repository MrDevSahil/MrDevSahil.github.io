import { BlockHeader, Prompt, C } from "@/components/ui";

export default function EdtechCrmOverview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }} className="animate-fadein">

      <section>
        <BlockHeader label="what is this" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text, marginBottom: 8 }}>
          A CRM built specifically for Indian schools — not adapted from a Western SaaS,
          but designed from scratch around how Indian school administrations actually work.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          Fee management, student records, staff ops, parent communication — in one place,
          without the enterprise bloat.
        </p>
      </section>

      <section>
        <BlockHeader label="problem" />
        <div style={{ border: `1px solid ${C.border}`, padding: 16, background: C.bg2, fontSize: 12, fontFamily: "var(--font-mono)", lineHeight: 2 }}>
          <div style={{ color: C.muted }}><span style={{ color: C.red }}>✗</span> most school software is either too expensive or built for the West</div>
          <div style={{ color: C.muted }}><span style={{ color: C.red }}>✗</span> admins in tier-2/3 cities use WhatsApp + Excel for everything</div>
          <div style={{ color: C.muted }}><span style={{ color: C.red }}>✗</span> no single product covers the full ops surface of a small school</div>
        </div>
      </section>

      <section>
        <BlockHeader label="planned modules" />
        <Prompt>student admissions &amp; records</Prompt>
        <Prompt>fee collection &amp; reminders</Prompt>
        <Prompt>staff attendance &amp; payroll</Prompt>
        <Prompt>parent communication (SMS/WhatsApp)</Prompt>
        <Prompt>exam results &amp; report cards</Prompt>
      </section>

      <section>
        <BlockHeader label="current status" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          Exploring. Talking to school admins in Guwahati. Validating before building.
        </p>
      </section>

    </div>
  );
}
