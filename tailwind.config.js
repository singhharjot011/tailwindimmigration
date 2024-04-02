/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    screens: { sm: "480px", md: "780px", lg: "976px", xl: "1440px" },
    extend: {
      borderWidth: {
        30: "30px",
        40: "40px",
      },
      colors: {
        brightRed: "#730220",
        brightText: "#A63F82",
        greySubtle: "#F1F1F1",
        // brightRed: "#99222A",
        // brightRed: "hsl(12,88%,59%)",
        // brightRedLight: "hsl(12, 88%, 69%)",
        blackAlternative: "#1D3640",
        whiteAlternative: "#ddf7fa",
        brightRedLight: "#B43C35",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        grey: "#F1F1F1",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
