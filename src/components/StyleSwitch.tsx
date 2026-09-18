"use client";

import { useEffect, useState } from "react";

// Visual style: "modern" (warm-humanist sans) is the default and needs no
// class; "classic" (Cinzel / Cormorant, parchment) adds body.theme-classic.
// The pre-paint script in layout.tsx applies the saved choice before
// first render.
type Style = "classic" | "modern";

export default function StyleSwitch() {
  const [style, setStyle] = useState<Style>("modern");

  useEffect(() => {
    setStyle(document.body.classList.contains("theme-classic") ? "classic" : "modern");
  }, []);

  const set = (s: Style) => {
    document.body.classList.toggle("theme-classic", s === "classic");
    setStyle(s);
    try {
      localStorage.setItem("style", s);
    } catch {}
  };

  return (
    <div className="style-switch" role="group" aria-label="Visual style">
      <button
        type="button"
        onClick={() => set("modern")}
        aria-pressed={style === "modern"}
        title="Modern sans style"
      >
        Modern
      </button>
      <button
        type="button"
        onClick={() => set("classic")}
        aria-pressed={style === "classic"}
        title="Classic serif style"
      >
        Classic
      </button>
    </div>
  );
}
