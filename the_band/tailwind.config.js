const { transform } = require("typescript");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        modalFadeIn: "modalFadeIn ease 0.5s"
      },
      keyframes: {
        modalFadeIn: {
          from: {
            opacity: 0,
            transform: "translateY(-140px)"
          },
          to: {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      }
    },
  },
  plugins: [],
}
