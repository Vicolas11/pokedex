/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        activeStateColor: "#01F0D0",
        activeStateColor2: "#D8FCF7",
        bgColor: "#F6F8FC",
        btnColor: "#BFC66B",
        txtColor: "#072635",
        txtColor2: "#707070",
      },
      backgroundImage: {
        custom_lg: "url('/bg_lg.png')",
        custom_sm: "url('/bg_sm.png')",
        custom_xs: "url('/bg_xs.png')"
      }
    },
  },
  plugins: [],
};
