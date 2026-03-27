import { BlockHeader, Prompt, C } from "@/components/ui";

export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

      <section>
        <BlockHeader label="whoami" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text, marginBottom: 8 }}>
          I'm Sahil — an Android and systems developer based out of Guwahati, Assam.
          I write Kotlin and C++ for a living and occasionally ship things people actually use.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text, marginBottom: 8 }}>
          I care a lot about performance. Not as an afterthought — as a first principle.
          If it's slow, it's broken.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text }}>
          Currently building a super app for the Indian market. Think Gojek, but snappier,
          and with a C++ core at its heart.
        </p>
      </section>

      <section>
        <BlockHeader label="currently" />
        <Prompt comment="then iOS next">building the Kotlin shell on top of a C++ core engine</Prompt>
        <Prompt>exploring EdTech products for Indian board curricula</Prompt>
        <Prompt comment="then Swift">waiting for my Mac to arrive</Prompt>
      </section>

      <section>
        <BlockHeader label="background" />
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text, marginBottom: 8 }}>
          Started with Android. Drifted toward native. Landed in C++ and never really left.
          I have an app on the Play Store and a habit of making things more complicated
          than they need to be — but faster.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: C.text }}>
          I'm based in Guwahati and building for the Indian market — not as an
          afterthought, but as the main bet.
        </p>
      </section>

    </div>
  );
}
