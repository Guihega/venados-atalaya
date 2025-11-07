// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mhegasdev.com.mx',
  base: '/venados-atalaya/',
  output: 'static',
  outDir: './dist',  // 👈 fuerza a usar esta carpeta
});
