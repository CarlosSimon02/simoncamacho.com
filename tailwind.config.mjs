/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "40em", // 640px
      md: "56.25em", // 900px
      lg: "60em", // 960px
      xl: "68.75em", // 1100px
      "2xl": "96em", // 1536px
    },
    colors: {
      "primary-50": "hsl(var(--primary-50))",
      "primary-200": "hsl(var(--primary-200))",
      "primary-300": "hsl(var(--primary-300))",
      "secondary-500": "hsl(var(--secondary-500))",
      "secondary-550": "hsl(var(--secondary-550))",
      "secondary-700": "hsl(var(--secondary-700))",
      "secondary-950": "hsl(var(--secondary-950))",
      "accent-500": "hsl(var(--accent-500))",
      "pfp-bg": "hsl(var(--pfp-bg))",
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
