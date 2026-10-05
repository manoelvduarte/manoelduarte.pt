/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: "#080A0E",
          surface: "#0D1017",
          elevated: "#131722",
          card: "rgba(13, 16, 23, 0.7)",
        },
        steel: {
          border: "#1E2430",
          hover: "#2A3244",
          text: "#8A95A5",
          muted: "#4A5568",
        },
        electric: {
          lime: "#D4FF00",
          cyan: "#00F0FF",
          limeGlow: "rgba(212, 255, 0, 0.15)",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(212, 255, 0, 0.2))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(212, 255, 0, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
