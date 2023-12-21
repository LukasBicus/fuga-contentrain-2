import { LocaleCode } from '@/__generated__/api-types'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { Program } from '@/components/Program'
import { IComponentData, IPageData } from '@/types'
import React from 'react'

const mapComponent = ({
  index,
  commonProps,
  componentData,
}: {
  index: number
  componentData: IComponentData
  commonProps: { localeCode: LocaleCode; currentPath: string }
}) => {
  const key = `${componentData.type}-${index}`
  switch (componentData.type) {
    case 'header':
      return <Header key={key} {...commonProps} />
    case 'hero':
      return <Hero key={key} />
    case 'program':
      return <Program key={key} {...commonProps} />
    case 'partners':
      return <Partners key={key} />
    case 'footer':
      return <Footer key={key} />
    case 'eventDetail':
      return null
    default:
      throw new Error('Unknown component')
  }
}

export const ColumnPage: React.FC<{
  localeCode: LocaleCode
  page: IPageData
  currentPath: string
}> = ({ localeCode, page, currentPath }) => {
  console.log('page', page)
  const commonProps = {
    localeCode,
    currentPath,
  }
  return (
    <main className="flex min-h-screen flex-col items-center">
      {page.components.map((componentData, index) =>
        mapComponent({ componentData, commonProps, index })
      )}
    </main>
  )
}
