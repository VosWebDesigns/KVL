import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kvl: {
          black: "#050505",
          panel: "#0d0d0f",
          card: "#131316",
          chrome: "#3a3a3d",
          red: "#e5070f",
          redDark: "#b80710",
          muted: "#a9aaae",
          mist: "#c9cace",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        red: "0 0 40px rgba(229, 7, 15, 0.25)",
        redLg: "0 30px 90px rgba(229, 7, 15, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.55)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
        "noise-fade": "radial-gradient(circle at 50% 0%, rgba(229,7,15,.16), transparent 60%)",
      },
      letterSpacing: {
        tightest: "-0.06em",
        widest2: "0.32em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
