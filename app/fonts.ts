import localFont from 'next/font/local'

export const primaryFont = localFont({
  src: [
    {
      path: '../fonts/regular-variable-font.ttf',
    },
    {
      path: '../fonts/italic-variable-font.ttf',
      style: 'italic',
    },
  ],
  variable: '--primary-font',
})

export const primaryMonoOneFont = localFont({
  src: '../fonts/regular-mono-one-font.ttf',
  variable: '--primary-mono-one-font',
})
