import type { Metadata } from 'next'
import { primaryFont, primaryMonoOneFont } from '../fonts'
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
      className={`${primaryFont.variable} ${primaryMonoOneFont.variable} h-full`}
    >
      <body className="h-full">{children}</body>
    </html>
  )
}
