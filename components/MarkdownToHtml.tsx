import markdownToHtml from "@/lib/markdownToHtml";
import React from 'react'

interface IMarkdownToHtmlProps {
  content: string
}

export const MarkdownToHtml: React.FC<IMarkdownToHtmlProps> = async ({
  content
}: IMarkdownToHtmlProps) => {
  const html = await markdownToHtml(content || '')
  return (
    <div
      // className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}