import { BlockHeader, Prompt, C } from "@/components/ui";

function SkillRow({ name, level }: { name: string; level: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: "3px 0",
        borderBottom: `1px dotted ${C.border}`,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
      }}
    >
      <span style={{ color: C.muted, width: 144, flexShrink: 0 }}>{name}</span>
      <span style={{ color: C.bright }}>{level}</span>
    </div>
  );
}

export default function Stack() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <section>
        <BlockHeader label="languages" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 32,
          }}
        >
          <SkillRow name="c++" level="primary" />
          <SkillRow name="javascript" level="primary" />
          <SkillRow name="kotlin" level="primary" />
          <SkillRow name="java" level="proficient" />
          <SkillRow name="c" level="proficient" />
          {/*
            <SkillRow name="swift" level="soon™" />
          */}
        </div>
      </section>

      <section>
        <BlockHeader label="platforms & tools" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 32,
          }}
        >
          <SkillRow name="android" level="native + ndk" />
          <SkillRow name="android ndk" level="basic – intermediate" />
          <SkillRow name="linux" level="daily driver" />
          <SkillRow name="windows" level="secondary" />
          <SkillRow name="git" level="yes" />
          <SkillRow name="react" level="yup" />
          <SkillRow name="nextjs" level="a big yes" />
          <SkillRow name="vite" level="another yes" />
          {/*
            <SkillRow name="ios / macos" level="incoming" />
          */}
        </div>
      </section>

      <section>
        <BlockHeader label="philosophy" />
        <Prompt>speed is a feature, not a bonus</Prompt>
        <Prompt>own the abstraction, or remove it</Prompt>
        <Prompt>ship to real users first, then refine</Prompt>
        <Prompt>build for India, not for YC</Prompt>
      </section>
    </div>
  );
}
