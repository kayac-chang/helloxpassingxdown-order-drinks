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
      fontSize: {
        xxs: ".65rem",
      },
      scale: {
        "10": ".1",
        "20": ".2",
        "30": ".3",
        "40": ".4",
        "50": ".5",
        "60": ".6",
        "80": ".8",
      },
      maxWidth: {
        xxs: "16rem",
      },
      spacing: {
        18: "4.5rem",
      },
      transitionProperty: {
        "font-size": "font-size",
        width: "width transform",
        height: "height transform",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
