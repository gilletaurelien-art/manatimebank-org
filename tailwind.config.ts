import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          secondary: "#3A4466",
          muted: "#6B7280",
          faint: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#2B3FC7",
          hover: "#2234B0",
          light: "#EEEFFE",
          muted: "#C0C8F8",
          end: "#C040E8",
        },
        surface: {
          DEFAULT: "#F7F8FA",
          white: "#FFFFFF",
          border: "#E8EAF0",
          divider: "#F1F3F7",
        },
        midnight: "#F7F8FA",
        mana: "#2B3FC7",
        ocean: "#C040E8",
        civic: "#A7F3D0",
      },
      fontFamily: {
        sans: ["Philosopher", "Georgia", "serif"],
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
