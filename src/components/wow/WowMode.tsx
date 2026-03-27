import { useRef, useState, useEffect } from "react";
import WowHero         from "./scenes/WowHero";
import WowOrigin       from "./scenes/WowOrigin";
import WowProjects     from "./scenes/WowProjects";
import WowStack        from "./scenes/WowStack";
import WowTransmission from "./scenes/WowTransmission";

const TOTAL = 5;

export default function WowMode() {
  const scrollRef             = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState(0);

  const scrollTo = (i: number) => {
    const el = scrollRef.current?.children[i] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setSection(Math.round(el.scrollTop / el.clientHeight));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={scrollRef} className="wow-scroll">
      <WowHero        onNext={() => scrollTo(1)} />
      <WowOrigin      />
      <WowProjects    />
      <WowStack       />
      <WowTransmission />

      {/* ── Section dot nav ── */}
      <div style={{
        position:        "fixed",
        right:           18,
        top:             "50%",
        transform:       "translateY(-50%)",
        display:         "flex",
        flexDirection:   "column",
        gap:             10,
        zIndex:          100,
      }}>
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to scene ${i + 1}`}
            style={{
              width:       5,
              height:      5,
              borderRadius: "50%",
              border:      "none",
              cursor:      "pointer",
              padding:     0,
              transition:  "all 0.3s",
              background:  section === i ? "#7fff7f" : "#1a2a1a",
              transform:   section === i ? "scale(1.6)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
