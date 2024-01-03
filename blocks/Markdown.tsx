import { MarkdownToHtml } from '@/internalComponents/MarkdownToHtml'
import React from 'react'

export const Markdown: React.FC<{
  content: string
}> = ({ content }) => {
  return (
    <div className="p-8 md:px-24 md:py-16">
      <MarkdownToHtml content={content} />
    </div>
  )
}
