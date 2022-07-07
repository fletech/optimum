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
        NAV_transparency: "rgba(255, 255, 255,0.96)",
        primary: {
          light: "rgb(145, 206, 220)",
          medium: "rgb(121, 184, 198)",
          dark: "rgb(75, 159, 175)",
        },
        secondary: "rgb(227, 171, 50)",
        secondary_button: "rgb(238, 185, 72)",
        // secondary1: "rgb(228,180,87)",
        // secondary2: "#DD674F",
        // secondary2_button: "#f38069",
      },
    },
  },
  plugins: [],
};
