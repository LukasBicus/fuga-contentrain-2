import { LocaleCode } from '@/__generated__/api-types'
import { getAllArticles } from '@/data'
import { DEFAULT_LOCALE_CODE } from '@/envs'

export async function generateStaticParams() {
  let allSlugs: { slug: string }[] = []
  const articles = getAllArticles()
  allSlugs = allSlugs.concat(
    articles.map((article) => ({
      slug: article.slug,
    }))
  )
  return allSlugs
}

const analyzeSegments = (segments?: string[]) => {
  const firstSegment = segments?.at(0)
  if (!Array.isArray(segments) || !firstSegment) {
    return {
      localeCode: DEFAULT_LOCALE_CODE,
      slug: '',
    }
  }
  const secondSegment = segments.at(1)
  if (Object.values(LocaleCode).includes(firstSegment as LocaleCode)) {
    return {
      localeCode: firstSegment as LocaleCode,
      slug: secondSegment ?? '',
    }
  }
  return {
    localeCode: DEFAULT_LOCALE_CODE,
    slug: firstSegment ?? '',
  }
}

export default async function Page({
  params,
}: {
  params: { segments?: string[] }
}) {
  console.log('params.segments', params.segments)
  const { localeCode, slug } = analyzeSegments(params.segments)
  // check segments
  // if segments is unempty array and first of segements is one of LocaleCodes, set it as localeCode, otherwise use DEFAULT_LOCALE_CODE. Rest of route is slug  + other segments
  // const article = getArticleBySlug(params.slug)
  // if (!article) {
  //   notFound()
  // }
  return (
    <main className="flex min-h-screen flex-col">
      All pages...
      <p>{localeCode}</p>
      <p>{slug}</p>
    </main>
  )
}
