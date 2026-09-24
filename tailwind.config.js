/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#101314',
        raised: '#171b1c',
        elevated: '#1d2223',
        border: {
          DEFAULT: '#2a3132',
          strong: '#3a4243',
        },
        text: {
          DEFAULT: '#e7ecec',
          muted: '#9aa7a7',
          faint: '#6b7878',
        },
        accent: {
          DEFAULT: '#4db6a4',
          strong: '#63cbb8',
          dim: 'rgba(77, 182, 164, 0.12)',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          '"SF Mono"',
          '"JetBrains Mono"',
          'Menlo',
          'monospace',
        ],
        display: [
          '"Geist Pixel Circle"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1080px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      borderRadius: {
        DEFAULT: '10px',
      },
    },
  },
  plugins: [],
};
