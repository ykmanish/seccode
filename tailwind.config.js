/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scale: {
        '60': '0.8',   // Custom scale for 60%
        '85': '0.85',  // Custom scale for 85%
        '120': '1.2',  // Custom scale for 120%
        '175': '1.75', // Custom scale for 175%
      },
    },
  },
  plugins: [require('daisyui'),],
};
