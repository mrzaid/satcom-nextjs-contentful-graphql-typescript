/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      '6xl': '1364px',
    },
    extend: {},
    colors: {
      yellowLight: '#fcd900',
      yellowDark: '#fcb900',
      dark: '#303030',
      shadow: '#0000004d',
      black: '#000',
      white: '#FFF',
      gray: '#e8ecf1',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
