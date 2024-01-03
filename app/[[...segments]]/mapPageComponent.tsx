import { EventDetail } from '@/blocks/EventDetail'
import { Footer } from '@/blocks/Footer'
import { Header } from '@/blocks/Header'
import { Hero } from '@/blocks/Hero'
import { Markdown } from '@/blocks/Markdown'
import { Partners } from '@/blocks/Partners'
import { Program } from '@/blocks/Program'
import { IBlockData, ICommonComponentProps, IPageData } from '@/types'
import React from 'react'

export const mapPageComponent = ({
  index,
  commonProps,
  componentData,
  page,
}: {
  index: number
  componentData: IBlockData
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
      return <Partners key={key} {...commonProps} />
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
