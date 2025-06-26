// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        openLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        openRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        closeLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        closeRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        openLeft: 'openLeft 0.6s ease-out forwards',
        openRight: 'openRight 0.6s ease-out forwards',
        closeLeft: 'closeLeft 0.6s ease-in forwards',
        closeRight: 'closeRight 0.6s ease-in forwards',
      },
    },
  },
  plugins: [],
};
