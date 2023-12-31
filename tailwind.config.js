/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Poppins']
    },
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
};