/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
      },
      backgroundImage: {
        "hero-mobile": "url('/src/images/bg-hero-mobile.png')",
        "hero-desktop": "url('/src/images/hero-1.png') ",
        "bg-about": "url('/src/images/about-back.png')",
      },
      screens: {
        lsm: { max: "639px" },
        lmd: { max: "767px" },
      },
    },
  },
  plugins: [],
};
