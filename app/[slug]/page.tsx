import { LocaleCode } from '@/__generated__/api-types'
import { Header } from '@/components/Header'
import { MarkdownToHtml } from '@/components/MarkdownToHtml'
import { getAllArticles, getArticleBySlug } from '@/lib/api'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export default async function Page({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  return (
    <main className="flex min-h-screen flex-col">
      <Header localeCode={LocaleCode.Sk} currentPath={`/${params.slug}`} />
      <div className="p-8 md:px-24 md:py-16">
        <MarkdownToHtml content={article.content} />
      </div>
    </main>
  )
}
