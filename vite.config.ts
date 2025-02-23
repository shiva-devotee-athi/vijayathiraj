import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: "./",
  base: "/vijayathiraj/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensure assets are properly placed
  },
  css: {
    postcss: {},
  },
  server: {
    port: 5173, // Change if needed
    host: "localhost",
  },
});
