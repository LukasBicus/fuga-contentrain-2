import { EventDetail } from '@/components/EventDetail'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Markdown } from '@/components/Markdown'
import { Partners } from '@/components/Partners'
import { Program } from '@/components/Program'
import { ICommonComponentProps, IComponentData, IPageData } from '@/types'
import React from 'react'

export const mapPageComponent = ({
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
      return (
        <Program
          key={key}
          {...commonProps}
          detailSlug={componentData.props.detailSlug}
        />
      )
    case 'partners':
      return <Partners key={key} />
    case 'footer':
      return <Footer key={key} />
    case 'eventDetail':
      return <EventDetail key={key} {...commonProps} />
    case 'markdown':
      return <Markdown key={key} content={page.content || 'No content'} />
    default:
      throw new Error('Unknown component ' + componentData.type)
  }
}
