import '@/app/globals.css'
import type { Preview } from '@storybook/react'
import { primaryFont, primaryMonoOneFont } from '../app/fonts'

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
]

export default preview
