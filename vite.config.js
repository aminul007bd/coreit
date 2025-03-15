import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/coreit",
  server: {
    port: 3000,
  },
});
