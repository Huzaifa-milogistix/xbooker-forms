// vite.config.js

import { defineConfig } from "vite";
import tsconfigPaths from "vite-plugin-tsconfig-paths";

export default defineConfig({
  // ... other config options

  plugins: [tsconfigPaths()],
});
