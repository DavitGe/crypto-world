/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero-gradient": "url(/assets/home-hero-gradient.webp)",
      },
    },
    colors: {
      main: "#111d33",
      //nav
      nav: "#CCD2DE",
      navActive: "#FFF",
      navHoverBg: "#F0F2F71A",
      //white
      white: "#FFF",
      //text colors
      title: "#121D33",
      desc: "#677185",
    },
  },
  plugins: [],
};
