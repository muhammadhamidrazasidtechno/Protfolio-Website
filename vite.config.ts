import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(
  async (): Promise<ReturnType<typeof defineConfig>> => {
    const plugins: PluginOption[] = [react()];

    if (
      process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
    ) {
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      plugins.push(cartographer()); // ✅ Safe now
    }

    return {
      root: path.resolve(__dirname, "client"),
      server: {
        hmr: {
          overlay: false,
        },
      },
      plugins, // ✅ plugins is of type PluginOption[]
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "client", "src"),
          "@shared": path.resolve(__dirname, "shared"),
          "@assets": path.resolve(__dirname, "attached_assets"),
        },
      },
      build: {
        outDir: path.resolve(__dirname, "dist/public"),
        emptyOutDir: true,
      },
      base: "/", // ✅ essential for vercel routing
    };
  }
);
