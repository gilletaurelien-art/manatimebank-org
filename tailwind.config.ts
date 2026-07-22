import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#211B12",
          secondary: "#4E4636",
          muted: "#77705F",
          faint: "#A69C89",
        },
        accent: {
          DEFAULT: "#6E5629",
          hover: "#5A4620",
          light: "#F5EFE1",
          muted: "#E0D0A8",
          end: "#C3A45E",
        },
        surface: {
          DEFAULT: "#FAF8F2",
          white: "#FFFFFF",
          border: "#E7E1D4",
          divider: "#F2EDE3",
        },
        midnight: "#FAF8F2",
        mana: "#6E5629",
        ocean: "#C3A45E",
        civic: "#A7F3D0",
      },
      fontFamily: {
        // "sans" = corps & UI (registre logiciel, crédibilité Stripe/Linear)
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        // "display" = titres & signature de marque (âme poétique MANA)
        display: ["Philosopher", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(11,18,32,0.06), 0 1px 2px -1px rgba(11,18,32,0.04)",
        "card-hover": "0 4px 12px 0 rgba(11,18,32,0.08), 0 2px 4px -1px rgba(11,18,32,0.04)",
        soft: "0 2px 8px 0 rgba(11,18,32,0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
