// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mhegasdev.com.mx',  // dominio principal
  base: '/venados-atalaya/',         // subcarpeta donde estará el sitio
  output: 'static',                  // asegura que genere archivos estáticos
});
