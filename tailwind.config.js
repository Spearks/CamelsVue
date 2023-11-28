/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"] 
      },
    },
  },
  daisyui: {
    themes: ["light", "dracula"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],

}

