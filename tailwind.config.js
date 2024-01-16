/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
//
//export default {
//  content: ['./index.html','./src/components/**/*.{html,js,jsx}'],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
// }
