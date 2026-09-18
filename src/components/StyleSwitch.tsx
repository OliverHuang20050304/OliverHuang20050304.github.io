"use client";

import { useEffect, useState } from "react";

// Visual style: "classic" (Cinzel / Cormorant, parchment) is the default;
// "modern" restores the original warm-humanist sans look. The pre-paint
// script in layout.tsx applies the saved choice before first render.
type Style = "classic" | "modern";

export default function StyleSwitch() {
  const [style, setStyle] = useState<Style>("classic");

  useEffect(() => {
    setStyle(document.body.classList.contains("theme-modern") ? "modern" : "classic");
  }, []);

  const set = (s: Style) => {
    document.body.classList.toggle("theme-modern", s === "modern");
    setStyle(s);
    try {
      localStorage.setItem("style", s);
    } catch {}
  };

  return (
    <div className="style-switch" role="group" aria-label="Visual style">
      <button
        type="button"
        onClick={() => set("classic")}
        aria-pressed={style === "classic"}
        title="Classic serif style"
      >
        Classic
      </button>
      <button
        type="button"
        onClick={() => set("modern")}
        aria-pressed={style === "modern"}
        title="Original modern style"
      >
        Modern
      </button>
    </div>
  );
}
