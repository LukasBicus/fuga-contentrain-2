import { LocaleCode } from '@/__generated__/api-types'
import { Header } from '@/blocks/Header'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Blocks/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const SlovakLocale: Story = {
  args: {
    localeCode: LocaleCode.Sk,
    currentPath: '/',
    remainingSegments: [],
  },
}
