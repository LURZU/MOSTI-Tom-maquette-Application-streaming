/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
    colors: {
      "white" : "#FFFFFF",
      'neutralmenu': "#080808",
      "neutrallight": "#141414",
      'calltoaction': '#1c1b1b',
      'serie-text': '#868080',
      'ackgroundframe': '#080808',
      'profilicon': "#48C0F3",
      "text-calltoaction": "#D9D9D9",
      "body": "#F9F9F9"
    }
  },
  plugins: [
    require('flowbite/plugin')
],
}
