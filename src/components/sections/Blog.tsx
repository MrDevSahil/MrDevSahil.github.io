import { blogPosts }        from "@/lib/data";
import { BlockHeader, C }  from "@/components/ui";

export default function Blog() {
  const published = blogPosts.filter((p) => !p.draft);
  const drafts    = blogPosts.filter((p) => p.draft);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

      <section>
        <BlockHeader label="writing" />
        {published.length === 0 ? (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
            Nothing published yet. Working on it.
          </p>
        ) : (
          <div>
            {published.map((post) => (
              <div key={post.slug} style={{
                display:      "flex",
                gap:          20,
                alignItems:   "baseline",
                borderBottom: `1px dotted ${C.border}`,
                padding:      "8px 0",
                fontFamily:   "var(--font-mono)",
                fontSize:     12,
              }}>
                <span style={{ color: C.dim, flexShrink: 0, width: 96 }}>{post.date}</span>
                <a href={`/blog/${post.slug}`} style={{ color: C.text }}>{post.title}</a>
              </div>
            ))}
          </div>
        )}
      </section>

      {drafts.length > 0 && (
        <section>
          <BlockHeader label="drafts (coming soon)" />
          <div>
            {drafts.map((post) => (
              <div key={post.slug} style={{
                display:      "flex",
                gap:          20,
                alignItems:   "baseline",
                borderBottom: `1px dotted ${C.border}`,
                padding:      "8px 0",
                fontFamily:   "var(--font-mono)",
                fontSize:     12,
                opacity:      0.4,
              }}>
                <span style={{ color: C.dim, flexShrink: 0, width: 96 }}>—</span>
                <span style={{ color: C.muted }}>{post.title}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <BlockHeader label="note" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: C.muted }}>
          I write when I have something worth saying. No newsletter. No schedule.
          Just posts when they're ready.
        </p>
      </section>

    </div>
  );
}
