import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#070b16",
        ink: "#111827",
        mana: "#d9b86f",
        ocean: "#5ac8d8",
        civic: "#a7f3d0",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgb(0 0 0 / 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
