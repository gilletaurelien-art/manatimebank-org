import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Cible abaissee pour le Chromium (ancien) de react-snap au prerendu (?./?? = ES2020).
  build: { target: 'es2019' },
});
