import { rubikMonoOne, rubik } from './fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fuga',
  description: 'Kultúrne centrum kresťanov',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubikMonoOne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
