import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://contact-app-hosting.vercel.app",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
