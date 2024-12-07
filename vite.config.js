import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/rotating-cube/",
  plugins: [react()],
  optimizeDeps: {
    include: ["@tsparticles/engine", "@tsparticles/react"],
  },
});
