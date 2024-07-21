import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#186EF0',
        secondary: '#528DFF',
      },
      fontFamily: {
        rubik: 'var(--rubik-font)',
        disney: 'var(--disney-font)',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
