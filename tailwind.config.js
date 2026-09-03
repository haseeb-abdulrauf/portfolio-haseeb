/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030810',
          900: '#050505',
          850: '#07121E',
          800: '#0A2947',
          700: '#12395C',
          600: '#1E4E7A',
          500: '#2F80ED',
          400: '#3B82F6',
          300: '#60A5FA',
        }
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 70% 30%, rgba(10, 41, 71, 0.45) 0%, rgba(5, 5, 5, 0.95) 70%)',
        'navy-glow': 'radial-gradient(circle, rgba(47, 128, 237, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-hover': 'linear-gradient(135deg, rgba(18, 57, 92, 0.3) 0%, rgba(47, 128, 237, 0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
