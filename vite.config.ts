import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  publicDir: "./src/assets",
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/pages/routes",
      generatedRouteTree: "./src/pages/routeTree.gen.ts",
    }),
    react(),
  ],
});
