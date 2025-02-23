import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    colors: {
      // you can either spread `colors` to apply all the colors
      ...colors,
      // or add them one by one and name whatever you want
      amber: colors.amber,
      emerald: colors.emerald,
      "vj-nav-active": "var(--vj-pf-nav-active-link-color)",
      "vj-root-bg": "var(--vj-pf-root-bg-color)",
      "vj-navbar-scrolled": "var(--vj-pf-navbar-scrolled)",
      "vj-navbar-link": "var(--vj-pf-navbar-link-color)",
    },

    extend: {},
  },
  plugins: [],
};

export default config;
