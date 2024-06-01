/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "accent-500": "hsl(var(--accent-500))",
        "pfp-bg": "hsl(var(--pfp-bg))",
        "primary-50": "hsl(var(--primary-50))",
        "primary-200": "hsl(var(--primary-200))",
        "primary-201": "hsl(var(--primary-201))",
        "red-500": "hsl(var(--red-500))",
        "secondary-500": "hsl(var(--secondary-500))",
        "secondary-501": "hsl(var(--secondary-501))",
        "secondary-550": "hsl(var(--secondary-550))",
        "secondary-700": "hsl(var(--secondary-700))",
        "secondary-950": "hsl(var(--secondary-950))"
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        oswald: ["Oswald", "sans-serif"]
      },
      fontSize: {
        "2xl": ["1.5rem", "1.5"], // 24px, 1 (line-height is a unitless value)
        "3xl": ["1.875rem", "1.5"], // 30px, 1 (line-height is a unitless value)
        "4xl": ["2.25rem", "1.5"], // 36px, 1 (line-height is a unitless value)
        "5xl": ["3rem", "1"], // 48px, 1 (line-height is a unitless value)
        "6xl": ["3.75rem", "1"], // 60px, 1 (line-height is a unitless value)
        "7xl": ["4.5rem", "1"], // 72px, 1 (line-height is a unitless value)
        "8xl": ["6rem", "1"], // 96px, 1 (line-height is a unitless value)
        "9xl": ["8rem", "1"], // 128px, 1 (line-height is a unitless value)
        base: ["1rem", "1.5rem"], // 16px, 24px
        lg: ["1.125rem", "1.75rem"], // 18px, 28px
        sm: ["0.875rem", "1.25rem"], // 14px, 20px
        xl: ["1.25rem", "1.75rem"], // 20px, 28px
        xs: ["0.75rem", "1rem"] // 12px, 16px
      },
      screens: {
        "2xl": "68.75em", // 1100px
        lg: "56.25em", // 900px
        md: "46.125em", // 738px
        sm: "40em", // 640px
        xl: "60em" // 960px
      }
    }
  }
};
