import { EventDetail } from '@/blocks/EventDetail'
import { Footer } from '@/blocks/Footer'
import { Header } from '@/blocks/Header'
import { Hero } from '@/blocks/Hero'
import { Markdown } from '@/blocks/Markdown'
import { Partners } from '@/blocks/Partners'
import { Program } from '@/blocks/Program'
import { IBlockData, ICommonBlockProps, IPageData } from '@/types'
import React from 'react'

export const Block: React.FC<{
  index: number
  blockData: IBlockData
  commonProps: ICommonBlockProps
  page: IPageData
}> = ({ index, commonProps, blockData, page }) => {
  const key = `${blockData.type}-${index}`
  switch (blockData.type) {
    case 'header':
      return <Header key={key} {...commonProps} />
    case 'hero':
      return <Hero key={key} />
    case 'program':
      return (
        <Program
          key={key}
          {...commonProps}
          detailSlug={blockData.props.detailSlug}
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
      throw new Error('Unknown block ' + blockData.type)
  }
}
