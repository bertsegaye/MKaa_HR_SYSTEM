/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E9E6C",
        "green-dark": "#0E381F",
        "green-lght": "#73B443",
        "indigo-lght": "#563A92",
        "red-md": "#882611",
        "orange-lght": "#BB7622",
        "slate-lght": "#E3EDED",
        "slate-md": "#7C9BC2",
        "yellow-md": "#E6D02A",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      width: {
        70: "17.2rem",
      },
    },
  },
  plugins: [],
};
