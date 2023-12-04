import markdownToHtml from '@/lib/markdownToHtml'
import styles from './MarkdownToHtml-styles.module.css'
import React from 'react'

interface IMarkdownToHtmlProps {
  content: string
}

export const MarkdownToHtml: React.FC<IMarkdownToHtmlProps> = async ({
  content,
}: IMarkdownToHtmlProps) => {
  const html = await markdownToHtml(content || '')
  return (
    <div className="p-8 md:px-24 md:py-16">
      <div
        className={styles['markdown']}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
