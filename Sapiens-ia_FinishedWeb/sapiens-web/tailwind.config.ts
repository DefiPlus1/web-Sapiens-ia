import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        brand: {
          DEFAULT: "#10b981",
          glow: "#34d399",
          dim: "rgba(16,185,129,0.15)",
        },
        dark: {
          DEFAULT: "#0f172a",
          surface: "#0a1628",
          card: "rgba(15,23,42,0.8)",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        "dash-flow": "dashFlow 2s linear infinite",
        "float-up": "floatUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(16,185,129,0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(16,185,129,0.7), 0 0 60px rgba(16,185,129,0.3)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        dashFlow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "emerald-glow":
          "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.12) 0%, transparent 70%)",
        "hero-grid":
          "linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
