/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background-1": "#383F51", 
        "background-2": "#eef4ed", 
        "background-3": "#D1BEB0", 
        "background-4": "#AB9F9D", 
        "background-5": "#D0A98F", 
        "background-6": "#420FFF", 
        "background-7": "#5931ED", 
        "text-1": "#DDDBF1", 
        "text-2": "#58688a", 
        "text-3": "#171717", 
        "text-4": "#002858", 
      }
    },
  },
  plugins: [],
}

