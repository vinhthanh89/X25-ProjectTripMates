/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        'mes-container': 'calc(100vh - 74px)',
      },
    },
  },
  plugins: [daisyui],
};

