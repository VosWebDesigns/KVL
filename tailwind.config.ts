import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kvl: {
          black: "#050505",
          panel: "#101010",
          card: "#151515",
          red: "#e50914",
          redDark: "#d90412",
          muted: "#a3a3a3",
        },
      },
      boxShadow: {
        red: "0 0 40px rgba(229, 9, 20, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
