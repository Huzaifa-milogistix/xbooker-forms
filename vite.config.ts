// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-plugin-tsconfig-paths";

export default defineConfig({
  // ... other config options
  define: {
    "process.env": {},
  },
  plugins: [react(), tsconfigPaths()],
});
