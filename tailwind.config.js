/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelYellow: "#FFF7D6",
        pastelGreen: "#E6F9F0",
        pastelBlue: "#E7F0FF",
        pastelPink: "#FFEAF0",
        brandBlue: "#0B63D6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
