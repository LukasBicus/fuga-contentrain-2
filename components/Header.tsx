import { LocaleCode } from '@/__generated__/api-types'
import { getAllArticles, loadLocalizedJSONData } from '@/lib/api'
import { transformSlugToRoute } from '@/lib/routes'
import { Article, HeaderItem } from '@/types'
import { clsx } from 'clsx'
import { orderBy } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'server-only'

interface IHeaderProps {
  localeCode: LocaleCode
  currentPath: string
}

type HeaderData = (HeaderItem & {
  article?: Article
  path: string
})[]

// todo: finish localisation
export const Header: React.FC<IHeaderProps> = async ({
  localeCode,
  currentPath,
}) => {
  const headerData = loadLocalizedJSONData<{
    ID: string
    items: HeaderItem[]
  }>({
    directory: 'header',
    localeCode,
    slug: 'index',
  })
  const articles = getAllArticles(localeCode)

  const items: HeaderData = headerData.items.map((item) => {
    if (item.articleId) {
      const article = articles.find((article) => article.ID === item.articleId)
      if (article) {
        return {
          ...item,
          article,
          path: transformSlugToRoute(item.slug, localeCode),
        }
      }
    }
    // todo: add page
    return {
      ...item,
      path: transformSlugToRoute(item.slug, localeCode),
    }
  })

  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-col p-6 mx-auto md:flex-row items-center">
        <Link
          className="flex items-center mb-4 text-gray-900 title-font md:mb-0"
          href="/"
        >
          <Image
            src="/fuga-logo.png"
            alt="Fuga Logo"
            width={175}
            height={120}
            priority
          />
        </Link>
        <nav className="flex items-center justify-center text-base md:ml-auto h-full">
          {orderBy(items, 'order').map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx('mr-4', 'px-2', 'py-1', 'border-l-4', {
                ['border-l-red-700']: item.path === currentPath,
                ['border-l-transparent']: item.path !== currentPath,
              })}
            >
              {item.article ? item.article.title : item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
