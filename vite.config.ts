import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import express from "express";
import { createServer as createViteServer } from "vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: true,
      // port: 8000,
      strictPort: true,
      // add the next lines if you're using windows and hot reload doesn't work
      watch: {
        usePolling: true,
      },
      hmr: {
        host: "localhost",
        port: 3001,
        protocol: "wss",
      },
    },
  });
};

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom", // don't include Vite's default HTML handling middlewares
  });
  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    // Since `appType` is `'custom'`, should serve response here.
    // Note: if `appType` is `'spa'` or `'mpa'`, Vite includes middlewares to handle
    // HTML requests and 404s so user middlewares should be added
    // before Vite's middlewares to take effect instead
  });
}

createServer();
