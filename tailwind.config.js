/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#001427',
        'rosa': '#FF8098', //rosa-salmão
        'amarelo': '#EAC047', //amarelo
        'azul-claro': '#2C7BE1', //azul claro
        'verde': '#84E296', // verde

        // 'azul-escuro': '#1B263B',
        // 'azul-claro': '#4A90E2',
        // 'cinza-claro': '#D9E2EC',
        // 'verde-menta': '#8ED081',
        // 'laranja-coral': '#FF6F61',
      },
    },
  },
  plugins: []
}


