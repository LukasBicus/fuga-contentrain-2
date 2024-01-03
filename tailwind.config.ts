import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')
const themeConfig = require('./theme.config.json')

/** @type {import('tailwindcss').Config} */
const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './internalComponents/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: themeConfig.colors.primary,
        'primary-dark': themeConfig.colors.primaryDark,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mono: ['var(--primary-mono-one-font)', ...defaultTheme.fontFamily.mono],
        body: ['var(--primary-font)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
