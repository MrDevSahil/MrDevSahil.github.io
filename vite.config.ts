import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // gh-pages deploys to root of mrdevsahil.github.io
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      // Split Three.js into its own chunk — keeps main bundle lean
      output: {
        manualChunks: {
          three: ["three"],
        },
      },
    },
  },
});
