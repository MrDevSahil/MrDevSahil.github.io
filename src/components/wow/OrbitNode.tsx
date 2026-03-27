import { useRef, useEffect } from "react";

interface Props {
  label:    string;
  r:        number;   // orbit radius in px
  period:   number;   // seconds per full orbit
  startDeg: number;   // starting angle in degrees
  color:    string;
}

export default function OrbitNode({ label, r, period, startDeg, color }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startRad = (startDeg * Math.PI) / 180;
    let start: number | null = null;
    let raf: number;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      const angle   = startRad + (elapsed / period) * 2 * Math.PI;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (ref.current)
        ref.current.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [r, period, startDeg]);

  return (
    <div
      ref={ref}
      style={{
        position:      "absolute",
        top:           "50%",
        left:          "50%",
        background:    "#050d05",
        border:        `1px solid ${color}55`,
        padding:       "3px 9px",
        fontFamily:    "var(--font-mono)",
        fontSize:      9,
        color,
        whiteSpace:    "nowrap",
        letterSpacing: "0.1em",
        willChange:    "transform",
        userSelect:    "none",
      }}
    >
      {label}
    </div>
  );
}
