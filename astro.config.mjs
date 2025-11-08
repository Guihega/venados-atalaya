// @ts-check
import { defineConfig } from 'astro/config';

// =====================================================
// 🌐 Configuración automática por entorno
// =====================================================
// Si ejecutas "npm run dev" → base = "/"  (modo local)
// Si haces "npm run build" o "deploy" → base = "/venados-atalaya/"
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://mhegasdev.com.mx",
  base: isProd ? "/venados-atalaya/" : "/", // ✅ Cambia automáticamente según entorno
  output: "static",
  outDir: "./dist",

  vite: {
    // ✅ Asegura rutas relativas correctas en subcarpetas
    build: {
      assetsDir: "_astro",
    },
    // ✅ Soporte para importaciones absolutas desde src/
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
