/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#111d33",
      //nav
      nav: "#CCD2DE",
      navActive: "#FFF",
      navHoverBg: "#F0F2F71A",
      //white
      white: "#FFF",
    },
  },
  plugins: [],
};
