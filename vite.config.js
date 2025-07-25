import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-copy-to-clipboard"],
  },

  build: {
    outDir: "dist",
  },
});
