import localFont from 'next/font/local'

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
