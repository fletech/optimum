module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#363636",
        blackModal: "rgba(54, 54, 54, 0.93)",
        overlayBlack: "rgba(54, 54, 54, 0.75)",
        NAV_transparency: "rgba(255, 255, 255,0.96)",
        // primary: {
        //   light: "rgb(110, 73, 152)",
        //   medium: "rgb(102, 33, 180)",
        //   dark: "rgb(111, 22, 214)",
        // },

        primary: {
          // light: "rgb(117, 192, 209)",
          light: "rgb(58, 158, 180)",
          medium: "rgb(58, 158, 180)",
          dark: "rgb(58, 158, 180)",
          // dark: "#177e92",
        },
        secondary: "rgb(253, 0, 72)",
        secondary_button: "rgb(214, 30, 82)",
        // secondary2: "rgb(227, 171, 50)",
        // secondary_button2: "rgb(238, 185, 72)",
      },
    },
  },
  plugins: [],
};
