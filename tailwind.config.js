module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#10b981',
        accent: '#06b6d4',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideInUp: 'slideInUp 0.5s ease-out',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        pulse: 'pulse 1s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-15px)' },
          '100%': { transform: 'translatey(0px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};