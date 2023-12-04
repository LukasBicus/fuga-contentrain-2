import { loadLocalizedCollectionData } from '@/lib/api'
import { HeaderItem, LocaleCode, SimplePage } from '@/types'
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
  simplePage?: SimplePage
})[]

export const Header: React.FC<IHeaderProps> = async ({
  localeCode,
  currentPath,
}) => {
  const headerItemsData = await loadLocalizedCollectionData<HeaderItem>(
    'Header-item',
    localeCode
  )
  const simplePagesData = await loadLocalizedCollectionData<SimplePage>(
    'Simple-page',
    localeCode
  )
  const headerData: HeaderData = [...headerItemsData]
  for (const headerItem of headerData) {
    if (headerItem.simplePageId[localeCode]) {
      const simplePage = simplePagesData.find(
        (sp) => sp.ID === headerItem.simplePageId[localeCode]
      )
      if (simplePage) {
        headerItem['simplePage'] = simplePage
        headerItem.path = `/${simplePage.slug}`
      }
    }
  }

  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font">
      <div className="container flex flex-col p-6 mx-auto md:flex-row items-center">
        <a className="flex items-center mb-4 text-gray-900 title-font md:mb-0">
          <Image
            src="/fuga-logo.png"
            alt="Fuga Logo"
            width={175}
            height={120}
            priority
          />
        </a>
        <nav className="flex items-center justify-center text-base md:ml-auto h-full">
          {orderBy(headerData, 'order').map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx('mr-4', 'px-2', 'py-1', 'border-l-4', {
                ['border-l-red-700']: item.path === currentPath,
                ['border-l-transparent']: item.path !== currentPath,
              })}
            >
              {item.simplePage ? item.simplePage.title : item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
