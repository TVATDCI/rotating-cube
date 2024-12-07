import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rotating-cube/", // This matches your GitHub Pages repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@tsParticles/engine", "@tsParticles/react"], // Keep this if necessary
    },
  },
});
