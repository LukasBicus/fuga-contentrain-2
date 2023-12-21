import React from 'react'
import { remark } from 'remark'
import html from 'remark-html'
import styles from './styles.module.css'

const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

interface IMarkdownToHtmlProps {
  content: string
}

export const MarkdownToHtml: React.FC<IMarkdownToHtmlProps> = async ({
  content,
}: IMarkdownToHtmlProps) => {
  const html = await markdownToHtml(content || '')
  return (
    <div
      className={styles['markdown']}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
