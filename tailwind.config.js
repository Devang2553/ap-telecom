/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,ts,js}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "800px", // Customizing md breakpoint
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
