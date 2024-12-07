import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@tsParticles/engine", "@tsParticles/react"],
      base: "/roll-cube/", // This should match your repository name
    },
  },
});
