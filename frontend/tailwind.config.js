/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#FFD369',
      darker: '#222831',
      dark: '#393E46',
      light: '#EEEEEE',
      white: '#FFF',
      black: '#000',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
