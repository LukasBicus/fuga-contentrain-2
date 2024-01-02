import localFont from 'next/font/local'

// follow https://nextjs.org/docs/app/api-reference/components/font
// prefer one of variable fonts https://fonts.google.com/variablefonts

export const primaryFont = localFont({
  src: [
    {
      path: './regular-variable-font.ttf',
    },
    {
      path: './italic-variable-font.ttf',
      style: 'italic',
    },
  ],
  variable: '--primary-font',
})

export const primaryMonoOneFont = localFont({
  src: './regular-mono-one-font.ttf',
  variable: '--primary-mono-one-font',
})
