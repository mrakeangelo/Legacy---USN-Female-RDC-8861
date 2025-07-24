/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0a192f',
          secondary: '#112240',
          accent: '#1e3a8a',
        },
        rose: {
          soft: '#fce7f3',
          light: '#fdf2f8',
          accent: '#ec4899',
        },
        gold: {
          command: '#ffd700',
          light: '#fef3c7',
          dark: '#d97706',
        },
        steel: {
          gray: '#2e2e2e',
          light: '#64748b',
          dark: '#1e293b',
        },
        snow: '#fafafa',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'merriweather': ['Merriweather Sans', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}