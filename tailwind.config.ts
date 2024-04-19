import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: "#0C356A",
        blue: "#0174BE",
        yellow: "#FFC436",
        wedding: "#FFF0CE",
        app_light_bg: "rgba(222, 242, 255, 0.2)",
        black_04: "rgba(0, 0, 0, 0.8)", //because of the color opacity
        black_00: "rgba(0, 0, 0, 0)",
        white_05: "rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
