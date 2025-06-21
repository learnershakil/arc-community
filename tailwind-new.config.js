/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Developer/Hacker Dark Theme
        background: {
          primary: "#0a0a0a", // Deep black
          secondary: "#111111", // Dark gray
          tertiary: "#1a1a1a", // Slightly lighter
          code: "#0d1117", // GitHub dark
        },
        foreground: {
          primary: "#ffffff", // Pure white
          secondary: "#e5e5e5", // Light gray
          muted: "#888888", // Medium gray
          dim: "#444444", // Dark gray
        },
        // Terminal/Matrix inspired greens
        terminal: {
          50: "#f0fff4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        // Hacker/Cyber accent colors
        cyber: {
          blue: "#00d4ff", // Bright cyan
          purple: "#8b5cf6", // Electric purple
          pink: "#ec4899", // Hot pink
          orange: "#f97316", // Bright orange
          yellow: "#fbbf24", // Electric yellow
        },
        // Error/Warning/Success
        error: "#ef4444",
        warning: "#f59e0b",
        success: "#10b981",

        // Legacy support
        primary: {
          50: "#f0fff4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        secondary: {
          50: "#f0fdff",
          100: "#ccf7fe",
          200: "#99effd",
          300: "#5ce2fa",
          400: "#22cdf0",
          500: "#00d4ff",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      fontFamily: {
        // Code-focused typography
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: ["Cal Sans", "Inter", "sans-serif"],
      },
      fontSize: {
        code: [
          "0.875rem",
          { lineHeight: "1.25rem", fontFamily: "JetBrains Mono" },
        ],
        terminal: [
          "1rem",
          { lineHeight: "1.5rem", fontFamily: "JetBrains Mono" },
        ],
      },
      animation: {
        // Developer-themed animations
        "matrix-rain": "matrix-rain 20s linear infinite",
        "terminal-blink": "terminal-blink 1s infinite",
        "code-scroll": "code-scroll 30s linear infinite",
        glitch: "glitch 0.3s ease-in-out infinite alternate",
        "scan-line": "scan-line 2s linear infinite",
        "data-flow": "data-flow 3s ease-in-out infinite",

        // Enhanced animations
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      keyframes: {
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "terminal-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "code-scroll": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "data-flow": {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "circuit-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300d4ff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm20 0c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 197, 94, 0.3)",
        "glow-blue": "0 0 20px rgba(0, 212, 255, 0.3)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
        terminal: "0 0 10px rgba(34, 197, 94, 0.5)",
        cyber: "0 0 30px rgba(0, 212, 255, 0.2)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
