/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      customGreen: '#3bae7c',
      customBlack: '#2f2f2f',
      customGrey: '#ebebec'
    },},
  },
  plugins: [],
}


