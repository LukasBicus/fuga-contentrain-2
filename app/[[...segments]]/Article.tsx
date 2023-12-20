import { LocaleCode } from '@/__generated__/api-types'
import { Header } from '@/components/Header'
import { MarkdownToHtml } from '@/components/MarkdownToHtml'
import { IArticleData } from '@/types'
import React from 'react'

export const Article: React.FC<{
  localeCode: LocaleCode
  article: IArticleData
  currentPath: string
}> = ({ localeCode, article, currentPath }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header localeCode={localeCode} currentPath={currentPath} />
      <div className="p-8 md:px-24 md:py-16">
        <MarkdownToHtml content={article.content} />
      </div>
    </main>
  )
}
