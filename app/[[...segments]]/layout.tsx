import type { Metadata } from 'next'
import { rubik, rubikMonoOne } from '../fonts'
import '../globals.css'
import { analyzeSegments } from './utils'

export const metadata: Metadata = {
  title: 'Fuga',
  description: 'Kultúrne centrum kresťanov',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { segments?: string[] }
}) {
  const { localeCode } = analyzeSegments(params.segments)
  return (
    <html
      lang={localeCode}
      className={`${rubik.variable} ${rubikMonoOne.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
