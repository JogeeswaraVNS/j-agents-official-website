import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), cloudflare()],
  envDir: path.resolve(__dirname, "./chat-widget"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));