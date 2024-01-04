import '@/app/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { primaryFont, primaryMonoOneFont } from '../app/fonts'
import theme from '../components/ThemeRegistry/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

console.log('primaryFont.variable', primaryFont.variable)
export const decorators = [
  (Story) => (
    <div
      className={`${primaryFont.variable} ${primaryMonoOneFont.variable} h-full`}
    >
      <Story />
    </div>
  ),
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
]

export default preview
