import markdownToHtml from '@/lib/markdownToHtml'
import React from 'react'
import styles from './MarkdownToHtml-styles.module.css'

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
