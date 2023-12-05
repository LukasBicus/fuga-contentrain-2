import { LocaleCode } from '@/__generated__/api-types'
import { Header } from '@/components/Header'
import { MarkdownToHtml } from '@/components/MarkdownToHtml'
import { getAllSimplePages, getSimplePageBySlug } from '@/lib/api'

export async function generateStaticParams() {
  const simplePages = getAllSimplePages()
  return simplePages.map((simplePage) => ({
    slug: simplePage.slug,
  }))
}

export const dynamicParams = false

export default async function Page({ params }: { params: { slug: string } }) {
  const simplePage = getSimplePageBySlug(params.slug)
  return (
    <main className="flex min-h-screen flex-col">
      <Header localeCode={LocaleCode.Sk} currentPath={`/${params.slug}`} />
      <MarkdownToHtml content={simplePage.content} />
    </main>
  )
}
