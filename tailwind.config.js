/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        ring: "hsl(var(--ring))"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 70px -28px rgba(69, 240, 220, .42)",
        panel: "0 24px 90px -50px rgba(0,0,0,.9)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(115,150,164,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(115,150,164,.07) 1px, transparent 1px)",
        "aurora": "radial-gradient(ellipse at 75% 40%, rgba(27,111,118,.22), transparent 48%), radial-gradient(ellipse at 20% 10%, rgba(55,90,150,.12), transparent 38%)"
      }
    }
  },
  plugins: []
};