/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',//编译速度
  purge: ['./index.html','./src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
