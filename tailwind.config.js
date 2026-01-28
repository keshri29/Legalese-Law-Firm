/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/react-datepicker/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'primary-red': '#DC2626',
      'dark-red': '#B91C1C',
      'light-red': '#FEE2E2',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.3s ease-out',
      'pulse-slow': 'pulse 3s infinite',
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
    },
  },
};
export const plugins = [];