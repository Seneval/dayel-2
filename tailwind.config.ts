import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dayel-blue': {
          DEFAULT: '#1e3a8a',
          light: '#2e5ca6',
          dark: '#172554',
        },
        'dayel-purple': {
          DEFAULT: '#8b5cf6',
          light: '#dda0dd',
          dark: '#6d28d9',
        },
        'dayel-cream': '#f5f5f0',
        'dayel-gray': '#374151',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'morph': 'morph 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'wave': 'wave 2s linear infinite',
      },
      keyframes: {
        morph: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cfilter id="wave"%3E%3CfeTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" result="turbulence" seed="1"%3E%3C/feTurbulence%3E%3CfeColorMatrix in="turbulence" type="saturate" values="30"%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Crect width="100" height="100" filter="url(%23wave)" opacity="0.05"%3E%3C/rect%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
export default config