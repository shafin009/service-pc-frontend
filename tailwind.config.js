/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// @ts-ignore
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
