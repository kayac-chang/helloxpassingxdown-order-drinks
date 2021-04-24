module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      borderWidth: {
        "2.5": "2.5px",
        "6": "6px",
      },
      colors: {
        background: "#EBE5D6",
        primary: "#133969",
        "on-primary": "#D09F45",
      },
      fontFamily: {
        heiti: ["Heiti TC"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};