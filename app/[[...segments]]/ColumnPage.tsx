import { LocaleCode } from '@/__generated__/api-types'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { Program } from '@/components/Program'
import { IPageData } from '@/types'
import React from 'react'

export const ColumnPage: React.FC<{
  localeCode: LocaleCode
  page: IPageData
  currentPath: string
}> = ({ localeCode, page, currentPath }) => {
  console.log('page', page)
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header localeCode={localeCode} currentPath={currentPath} />
      <Hero />
      <Program localeCode={localeCode} />
      <Partners />
      <Footer />
    </main>
  )
}
