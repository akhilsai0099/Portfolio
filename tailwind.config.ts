import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "blob-stretch-1": "blob-stretch-1 15s infinite ease-in-out",
        "blob-stretch-2": "blob-stretch-2 18s infinite ease-in-out",
        "blob-stretch-3": "blob-stretch-3 20s infinite ease-in-out",
      },
      keyframes: {
        "blob-stretch-1": {
          "0%, 100%": {
            transform: "rotate(0deg) translate(40px) scale(1.2, 0.8)",
            borderRadius: "60% 40% 70% 30%",
          },
          "25%": {
            transform: "rotate(90deg) translate(-30px) scale(0.8, 1.5)",
            borderRadius: "40% 60% 30% 70%",
          },
          "50%": {
            transform: "rotate(180deg) translate(40px) scale(1.5, 0.8)",
            borderRadius: "70% 30% 60% 40%",
          },
          "75%": {
            transform: "rotate(270deg) translate(-30px) scale(0.8, 1.5)",
            borderRadius: "30% 70% 40% 60%",
          },
        },
        "blob-stretch-2": {
          "0%, 100%": {
            transform: "rotate(90deg) translate(-40px) scale(0.8, 1.5)",
            borderRadius: "50% 50% 30% 70%",
          },
          "25%": {
            transform: "rotate(180deg) translate(30px) scale(1.5, 0.8)",
            borderRadius: "70% 30% 50% 50%",
          },
          "50%": {
            transform: "rotate(270deg) translate(-40px) scale(0.8, 1.5)",
            borderRadius: "50% 50% 70% 30%",
          },
          "75%": {
            transform: "rotate(360deg) translate(30px) scale(1.5, 0.8)",
            borderRadius: "30% 70% 50% 50%",
          },
        },
        "blob-stretch-3": {
          "0%, 100%": {
            transform: "rotate(180deg) translate(30px) scale(1.5, 0.8)",
            borderRadius: "40% 60% 50% 50%",
          },
          "25%": {
            transform: "rotate(270deg) translate(-40px) scale(0.8, 1.5)",
            borderRadius: "60% 40% 30% 70%",
          },
          "50%": {
            transform: "rotate(360deg) translate(30px) scale(1.5, 0.8)",
            borderRadius: "50% 50% 60% 40%",
          },
          "75%": {
            transform: "rotate(90deg) translate(-40px) scale(0.8, 1.5)",
            borderRadius: "70% 30% 40% 60%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
