/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "h1": ["64px", { lineHeight: "1.1" }],
        "h2": ["48px", { lineHeight: "1.2" }],
        "h3": ["36px", { lineHeight: "1.3" }],
        "h4": ["28px", { lineHeight: "1.4" }],
        "h5": ["22px", { lineHeight: "1.5" }],
        "h6": ["18px", { lineHeight: "1.5" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "button": ["14px", { lineHeight: "1.4" }],
        "overline": ["12px", { lineHeight: "1.3", letterSpacing: "0.1em" }],
      },
    },
    colors: {
      brand: {
        blue: "#203285",
        "blue-dark": "#162260",
        "blue-mid": "#2d42a8",
        "blue-navy": "#0d1a4a",
        orange: "#FF6C00",
        "orange-dark": "#e05e00",
        dark: "#111827",
      },
      primary: {
        DEFAULT: "#0A0A0A",
        light: "#333333",
        dark: "#000000",
      },
      secondary: {
        DEFAULT: "#6B7280",
        light: "#9CA3AF",
        dark: "#4B5563",
      },
      neutral: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
};