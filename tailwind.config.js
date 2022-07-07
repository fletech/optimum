module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#363636",
        overlayBlack: "rgba(54, 54, 54, 0.75)",
        primary: {
          // light: "#8cd3e3",
          // medium: "#68cbe1",
          // dark: "#379cb3",
          light: "rgb(145, 206, 220)",
          medium: "rgb(121, 184, 198)",
          dark: "rgb(75, 159, 175)",
          // light: "#91CEDC",
          // medium: "#79B8C6",
          // dark: "#43a2b7",
        },
        // secondary: "rgb(227, 171, 50)",
        // secondary_button: "rgb(238, 185, 72)",

        secondary: "#DD674F",
        secondary_button: "#f38069",
        // secondary: "#FFC75B",
        NAV_transparency: "rgba(255, 255, 255,0.96)",
      },
    },
  },
  plugins: [],
};
