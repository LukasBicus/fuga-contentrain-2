import Head from "next/head";
import {rubikMonoOne, rubik} from "./fonts";
import type {Metadata} from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Fuga',
  description: 'Kultúrne centrum kresťanov',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubikMonoOne.variable}`}>
    <Head>
      <link rel="icon" href="/favicon.ico" sizes="64x64" />
    </Head>
    <body>{children}</body>
    </html>
  )
}
