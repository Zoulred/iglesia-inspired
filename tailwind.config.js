

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#60a5fa',
          cyber: '#ff1744',
        },
        secondary: {
          DEFAULT: '#64748b',
          dark: '#475569',
          light: '#94a3b8',
          cyber: '#00bfff',
        },
        cyber: {
          red: '#ff1744',
          cyan: '#00bfff',
          neon: '#00ff88',
          dark: '#0a0e27',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 191, 255, 0.5)',
        'glow-red': '0 0 20px rgba(255, 23, 68, 0.5)',
        'glow-neon': '0 0 20px rgba(0, 255, 136, 0.5)',
      },
    },
  },
  plugins: [],
}
