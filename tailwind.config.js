/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}" // se estiver utilizando o app router do Next.js 13+
  ],
  theme: {
    extend: {},
},
  plugins: [],
}

