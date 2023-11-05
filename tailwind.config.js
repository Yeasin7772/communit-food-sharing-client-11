/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily:{
        poppins: "'Roboto Slab', serif"
      }
    },
  },
  daisyui: {
    themes: ["lemonade", "dark"],
  },
  plugins: [require("daisyui")],
};
