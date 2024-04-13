/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      animation: {
        "title-in": "text-focus 1s cubic-bezier(0.500, 0.090, 0.700, 0.500) both",
        "nav-title-in": "slide-in-left 0.5s cubic-bezier(0.250, 1.000, 0.350, 1.000) both",
        "nav-in1": "slide-in-right 0.5s cubic-bezier(0.250, 1.000, 0.350, 1.000) both",
        "nav-in2": "slide-in-right 0.5s cubic-bezier(0.250, 1.000, 0.350, 1.000) 0.1s both",
        "nav-in3": "slide-in-right 0.5s cubic-bezier(0.250, 1.000, 0.350, 1.000) 0.2s both",
        "nav-in4": "slide-in-right 0.5s cubic-bezier(0.250, 1.000, 0.350, 1.000) 0.3s both",
        "nav-in5": "slide-in-right 0.5s cubic-bezier(0.250, 1.000, 0.350, 1.000) 0.4s both",
        "nav-in6": "slide-in-right 0.5s cubic-bezier(0.250, 1.000, 0.350, 1.000) 0.5s both",
        "footer-in": "flip-in-hor-top 0.5s both",
        "session-in": "text-focus 0.5s cubic-bezier(0.500, 0.090, 0.700, 0.500) both",
        "part-in": "text-focus 1s cubic-bezier(0.500, 0.090, 0.700, 0.500) both",
        "part-right-in": "slide-in-right 1s cubic-bezier(0.250, 1.000, 0.350, 1.000) both",
        "part-left-in": "slide-in-left 1s cubic-bezier(0.250, 1.000, 0.350, 1.000) both",
        "icon-in": "roll-in 0.75s cubic-bezier(0.250, 1.000, 0.350, 1.000) both",
        "profile-in": "text-focus 0.75s cubic-bezier(0.500, 0.090, 0.700, 0.500) 0.25s both",
        "month-right-in": "slide-in-right 1s cubic-bezier(0.250, 1.000, 0.350, 1.000) 0.25s both",
        "month-left-in": "slide-in-left 1s cubic-bezier(0.250, 1.000, 0.350, 1.000) 0.25s both",
        "vertical-in": "text-focus 1s cubic-bezier(0.500, 0.090, 0.700, 0.500) both",
      },
      keyframes: {
        "text-focus": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0",
          },
          to: {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px) scaleX(2.5) scaleY(.2)",
            "transform-origin": "100% 50%",
            filter: "blur(40px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0) scaleY(1) scaleX(1)",
            "transform-origin": "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(1000px) scaleX(2.5) scaleY(.2)",
            "transform-origin": "0% 50%",
            filter: "blur(40px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0) scaleY(1) scaleX(1)",
            "transform-origin": "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "flip-in-hor-top": {
          "0%": {
            transform: "rotateX(-80deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateX(0)",
            opacity: "1",
          },
        },
        "roll-in": {
          "0%": {
            transform: "translateY(800px) rotate(720deg)",
            filter: "blur(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
