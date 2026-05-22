/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'preto': '#0F0F10', // Fundo principal
        'branco': '#F5F5F5', //Texto principal
        'cinza-claro': '#D1D1D6', //Texto descritivo / labels
        'cinza-medio': '#8A8A8F', //Texto secundário
        'verde': '#3A7D6D', // botões , links , destques , status, etc
      },
    },
  },
  plugins: []
}


