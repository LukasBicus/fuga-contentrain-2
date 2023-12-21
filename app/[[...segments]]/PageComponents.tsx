import { LocaleCode } from '@/__generated__/api-types'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Markdown } from '@/components/Markdown'
import { Partners } from '@/components/Partners'
import { Program } from '@/components/Program'
import { ICommonComponentProps, IComponentData, IPageData } from '@/types'
import React from 'react'

const mapComponent = ({
  index,
  commonProps,
  componentData,
  page,
}: {
  index: number
  componentData: IComponentData
  commonProps: ICommonComponentProps
  page: IPageData
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
    case 'markdown':
      return <Markdown content={page.content || 'No content'} />
    default:
      throw new Error('Unknown component ' + componentData.type)
  }
}

export const PageComponents: React.FC<{
  localeCode: LocaleCode
  page: IPageData
  currentPath: string
  remainingSegments: string[]
}> = ({ localeCode, page, currentPath, remainingSegments }) => {
  console.log('page', page)
  const commonProps: ICommonComponentProps = {
    localeCode,
    currentPath,
    remainingSegments,
  }
  return (
    <main className="flex min-h-screen flex-col items-center">
      {page.components.map((componentData, index) =>
        mapComponent({ componentData, commonProps, index, page })
      )}
    </main>
  )
}
