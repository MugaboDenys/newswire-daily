/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        max : "-1px 10px 22px -4px rgba(58,58,58,0.75)",
        inner : " 0px -110px 90px -12px rgba(0,0,0,0.72) inset"
      }
    },
  },
  plugins: [],
}

