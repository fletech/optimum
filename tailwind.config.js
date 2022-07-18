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
        primary: {
          light: "rgb(140, 49, 244)",
          medium: "rgb(127, 23, 246)",
          dark: "rgb(118, 0, 253)",
        },

        // primary2: {
        //   light2: "rgb(145, 206, 220)",
        //   medium2: "rgb(121, 184, 198)",
        //   dark2: "rgb(75, 159, 175)",
        // },
        secondary: "rgb(253, 0, 72)",
        secondary_button: "rgb(214, 30, 82)",
        // secondary2: "rgb(227, 171, 50)",
        // secondary_button2: "rgb(238, 185, 72)",
      },
    },
  },
  plugins: [],
};
