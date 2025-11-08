/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Paleta oficial Venados Atalaya
        primary:  "#004A43", // verde oscuro (short / franjas)
        secondary:"#007C66", // verde medio (acentos)
        navy:     "#243A4B", // azul/gris del escudo
        light:    "#FFFFFF", // blanco de la camiseta
        dark:     "#0F1716", // fondo oscuro neutro
        accent:   "#FFD700", // dorado (detalles o trofeos)
      },
      fontFamily: {
        sans:  ["Inter", "sans-serif"],
        title: ["Teko", "sans-serif"],
      },
      boxShadow: {
        brand: "0 0 20px rgba(0, 124, 102, 0.35)", // 💡 Glow verde institucional
      },
    },
  },
  plugins: [],
};
