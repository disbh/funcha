/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // theme: {
  //   colors: {
  //     'brown': '#ae7541',
  //     'darkbrown': '#76502c',
  //     'lightbrown': '#76502c',
  //     'lightgray': '#dddddd',
  //     'darkgray': '#2c2c2c',

  //   },
  //   fontFamily: {
  //     fontA: ['Karla', 'sans-serif'],
  //     fontB: []
  //   },

  //   extend: {},
  // },
  theme: {
    extend: {
      colors: {
        "dark-text": "#FFFFFF",
        "dark-bg": "#221710",
        "dark-secondary": "#2e1810",
        "light-text": "#221710",
        "light-bg": "#FFFFFF",
        "light-secondary": "#f1ddd5",
        primary: "#553725",
        accent: "#191011",
      },
    },
  },
  plugins: [],
};
