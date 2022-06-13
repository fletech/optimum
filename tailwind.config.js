module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overlayBlack: "rgba(54, 54, 54, 0.75)",
        HL_blue: "#43a2b7",
        HL_brown: "rgb(227, 171, 50)",
        NAV_transparency: "rgba(227, 171, 50,0.1)",
      },
    },
  },
  plugins: [],
};
