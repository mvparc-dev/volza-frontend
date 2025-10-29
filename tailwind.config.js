import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "48px",
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        urbanist: ["var(--font-urbanist)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#ffffff",
            foreground: "#097E8B",
            focus: "#065A64",

            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#097E8B",
              10: "#E6F7F9",
              20: "#CCEEF3",
              30: "#A6E0E9",
              40: "#73C9D9",
              50: "#39B0C5",
              60: "#1A98AE",
              70: "#097E8B",
              80: "#065A64",
              90: "#043F46",
              100: "#022328",
            },
            secondary: {
              foreground: "#FFFFFF",
              DEFAULT: "#F05D23",
              10: "#FFF1EC",
              20: "#FFDBD0",
              30: "#FFC1AD",
              40: "#FF9E7D",
              50: "#F7784C",
              60: "#F05D23",
              70: "#D14213",
              80: "#A6340F",
              90: "#7C270B",
              100: "#521A07",
            },
            tertiary: {
              foreground: "#FFFFFF",
              DEFAULT: "#34B7B8",
              10: "#E8F9F9",
              20: "#D1F3F3",
              30: "#A8E9E9",
              40: "#7DDCDC",
              50: "#52CECE",
              60: "#34B7B8",
              70: "#25999A",
              80: "#1A7576",
              90: "#115253",
              100: "#082E2F",
            },
            quaternary: {
              foreground: "#FFFFFF",
              DEFAULT: "#5BB462",
              10: "#F0F9F0",
              20: "#DCF0DD",
              30: "#BEE3C0",
              40: "#98D09A",
              50: "#74BD76",
              60: "#5BB462",
              70: "#458D4B",
              80: "#356B3A",
              90: "#264A28",
              100: "#172A17",
            },
          },
        },
      },
    }),
  ],
};
