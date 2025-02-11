import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
  },
  base: "/coreit/", // Ensure the base path is correctly set
});
