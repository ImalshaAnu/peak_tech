import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Baloo 2'", "var(--font-sans)", "cursive", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          50: "#eef8ff",
          100: "#d8eeff",
          200: "#b9e2ff",
          300: "#87d0ff",
          400: "#4eb4fe",
          500: "#2593f8",
          600: "#0f74eb",
          700: "#0b5cc9",
          800: "#0f4ba3",
          900: "#124080",
          950: "#0b2853",
        },
        cyber: {
          cyan: "#00f2fe",
          blue: "#4facfe",
          purple: "#7f00ff",
          emerald: "#10b981",
        },
        dark: {
          950: "#050811",
          900: "#090e1a",
          850: "#0e1526",
          800: "#131c33",
          700: "#1e2942",
          600: "#2d3b59",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tech-mesh": "radial-gradient(at 10% 20%, rgba(37, 147, 248, 0.15) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(127, 0, 255, 0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(0, 242, 254, 0.08) 0px, transparent 60%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        }
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px rgba(37, 147, 248, 0.3)",
        "glow-lg": "0 0 40px -10px rgba(37, 147, 248, 0.4)",
        "glow-cyan": "0 0 35px -5px rgba(0, 242, 254, 0.35)",
        "glow-purple": "0 0 35px -5px rgba(127, 0, 255, 0.35)",
      }
    },
  },
  plugins: [],
};
export default config;
