/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nutmeg': 'rgb(51, 43, 33)', // Converted from HSL
        'dark-raspberry': '#7b284f', // Converted from HSL
        'white': '#fff', // Hex for white
        'rose-white': '#fdf9f6', // Hex for Rose White
        'eggshell': '#e6e1e0', // Hex for Eggshell
        'light-gray': '#dfdfdf', // Use hyphen for Light Gray
        'wenge-brown': '#574055', // Converted from HSL
        'dark-charcoal': '#212529', // Converted from HSL
      },
      fontFamily: {
        // Add your custom font families here
        outfit: ["Outfit", "sans-serif"],
        youngSerif: ["Young Serif", "serif"],
      },
    },
  },
  plugins: [],
  layers: [
    {
      name: 'fonts',
      content: [
        "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Young+Serif&display=swap');",
      ],
    },
  ],
};
