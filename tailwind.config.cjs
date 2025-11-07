/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial basada en el uniforme
        primary:  "#004A43", // verde oscuro (short / franjas)
        secondary:"#007C66", // verde medio (acentos)
        navy:     "#243A4B", // azul/gris del escudo
        light:    "#FFFFFF", // blanco de la camiseta
        dark:     "#0F1716", // oscuro neutro para fondos
        accent:   "#FFD700", // dorado si lo llegas a usar
      },
      fontFamily: {
        sans:  ["Inter", "sans-serif"],
        title: ["Teko", "sans-serif"],
      },
      boxShadow: {
        brand: "0 0 20px rgba(0, 124, 102, 0.35)", // glow verde
      },
    },
  },
  plugins: [],
};
