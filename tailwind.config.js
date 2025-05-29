/** @type {import('tailwindcss').config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      satoshi: ["inter", "sans-serif"],
      hero: ["Alata", "Poppins", "sans-serif"],
      "harry-potter": [
        "Underdog",
        "MedievalSharp",
        "Tagesschrift",
        "Eater",
        "system-ui",
        "cursive",
      ],
      cyberpunk: ["Press Start 2P", "system-ui"],
    },
    screens: {},
    extend: {
      colors: {
        "white-1": "#ffffff",
        "black-1": "#000000",
        primary: "#053EEF",
        secondary: "",
        stroke: "",
        strokedark: "",
        success: "",
        danger: "",
        warning: "",
      },
      gradient: {
        primarygradient: "bg-gradient-to-b from-black to-[#003eef] text-white",
      },
      maxwidth: {
        "screen-w": "100vw",
      },
      maxheight: {
        "screen-h": "100vh",
      },
      // fontsize: {},
      // spacing: {},
      // minwidth: {},
      // aspectratio: {},
      // backgroundimage: {},
      // content: {},
      // transitionproperty: { width: "width", stroke: "stroke" },
      // dropshadow: {},
      // keyframes: {
      //   linspin: {
      //     "100%": { transform: "rotate(360deg)" },
      //   },
      //   easespin: {
      //     "12.5%": { transform: "rotate(135deg)" },
      //     "25%": { transform: "rotate(270deg)" },
      //     "37.5%": { transform: "rotate(405deg)" },
      //     "50%": { transform: "rotate(540deg)" },
      //     "62.5%": { transform: "rotate(675deg)" },
      //     "75%": { transform: "rotate(810deg)" },
      //     "87.5%": { transform: "rotate(945deg)" },
      //     "100%": { transform: "rotate(1080deg)" },
      //   },
      //   "left-spin": {
      //     "0%": { transform: "rotate(130deg)" },
      //     "50%": { transform: "rotate(-5deg)" },
      //     "100%": { transform: "rotate(130deg)" },
      //   },
      //   "right-spin": {
      //     "0%": { transform: "rotate(-130deg)" },
      //     "50%": { transform: "rotate(5deg)" },
      //     "100%": { transform: "rotate(-130deg)" },
      //   },
      //   rotating: {
      //     "0%, 100%": { transform: "rotate(360deg)" },
      //     "50%": { transform: "rotate(0deg)" },
      //   },
      //   topbottomspin: {
      //     "0%, 100%": { transform: "translate3d(0, -100%, 0)" },
      //     "50%": { transform: "translate3d(0, 0, 0)" },
      //   },
      //   bottomtopspin: {
      //     "0%, 100%": { transform: "translate3d(0, 0, 0)" },
      //     "50%": { transform: "translate3d(0, -100%, 0)" },
      //   },
      //   line: {
      //     "0%, 100%": { transform: "translatey(0)" },
      //     "50%": { transform: "translatey(100%)" },
      //   },
      //   "line-revert": {
      //     "0%, 100%": { transform: "translatey(100%)" },
      //     "50%": { transform: "translatey(0)" },
      //   },
      // },
      // animation: {
      //   linspin: "linspin 1568.2353ms linear infinite",
      //   easespin: "easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
      //   "left-spin":
      //     "left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
      //   "right-spin":
      //     "right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
      //   "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
      //   rotating: "rotating 30s linear infinite",
      //   topbottom: "topbottom 60s infinite alternate linear",
      //   bottomtop: "bottomtop 60s infinite alternate linear",
      //   "spin-1.5": "spin 1.5s linear infinite",
      //   "spin-2": "spin 2s linear infinite",
      //   "spin-3": "spin 3s linear infinite",
      //   line1: "line 10s infinite linear",
      //   line2: "line-revert 8s infinite linear",
      //   line3: "line 7s infinite linear",
      // },
    },
  },
  plugins: [],
};
