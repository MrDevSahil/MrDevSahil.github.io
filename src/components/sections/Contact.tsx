import { contactEntries }   from "@/lib/data";
import { BlockHeader, C }  from "@/components/ui";

const COLOR_MAP: Record<string, string> = {
  accent: "var(--accent)",
  amber:  "var(--amber)",
  text:   "var(--text)",
  muted:  "var(--muted)",
};

export default function Contact() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

      <section>
        <BlockHeader label="reach me" />
        {contactEntries.map((row) => (
          <div key={row.key} style={{
            display:      "flex",
            gap:          16,
            alignItems:   "center",
            padding:      "5px 0",
            borderBottom: `1px dotted ${C.border}`,
            fontFamily:   "var(--font-mono)",
            fontSize:     12,
          }}>
            <span style={{ color: C.muted, width: 80, flexShrink: 0 }}>{row.key}</span>
            {row.href ? (
              <a
                href={row.href}
                target={row.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{ color: COLOR_MAP[row.color] }}
              >
                {row.value}
              </a>
            ) : (
              <span style={{ color: COLOR_MAP[row.color] }}>{row.value}</span>
            )}
          </div>
        ))}
      </section>

      <section>
        <BlockHeader label="note" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          I'm not actively looking for jobs. But if you have something weird and fast
          to build, I'm listening.
        </p>
      </section>

    </div>
  );
}
