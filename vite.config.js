import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default {
  base: "/", // Make sure this matches your repo name
  plugins: [react()],
};
