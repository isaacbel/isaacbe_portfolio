// components/Skills/skillsColors.ts

export const categoryColors: Record<
  string,
  { bar: string; badge: string; glow: string }
> = {
  Frontend: {
    bar: "#38bdf8",
    badge: "#0ea5e9",
    glow: "rgba(56,189,248,0.4)",
  },

  Backend: {
    bar: "#a78bfa",
    badge: "#7c3aed",
    glow: "rgba(167,139,250,0.4)",
  },

  Python: {
    bar: "#34d399",
    badge: "#059669",
    glow: "rgba(52,211,153,0.4)",
  },

  Desktop: {
    bar: "#fb923c",
    badge: "#ea580c",
    glow: "rgba(251,146,60,0.4)",
  },

  Tools: {
    bar: "#f472b6",
    badge: "#db2777",
    glow: "rgba(244,114,182,0.4)",
  },
};