// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mhegasdev.com.mx',
  base: '/venados-atalaya/', // 👈 Muy importante: barra inicial y final
  output: 'static',
  outDir: './dist',

  // ⚙️ Ajuste extra para Vite: asegura que los assets (CSS/JS/IMGS) respeten la subcarpeta
  vite: {
    base: '/venados-atalaya/',
  },
});
