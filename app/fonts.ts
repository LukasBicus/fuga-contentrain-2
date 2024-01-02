import { Rubik, Rubik_Mono_One } from 'next/font/google'

export const primaryMonoOneFont = Rubik_Mono_One({
  subsets: ['latin'],
  variable: '--font-rubik-mono-one',
  weight: ['400'],
})
export const primaryFont = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  // weight: ['400'],
})
