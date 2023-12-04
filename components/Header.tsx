import { loadLocalizedCollectionData } from '@/lib/api'
import { HeaderItem, LocaleCode, SimplePage } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import 'server-only'

interface IHeaderProps {
  localeCode: LocaleCode
}

type HeaderData = (HeaderItem & {
  simplePage?: SimplePage
})[]

export const Header: React.FC<IHeaderProps> = async ({ localeCode }) => {
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
      headerItem['simplePage'] = simplePagesData.find(
        (sp) => sp.ID === headerItem.simplePageId[localeCode]
      )
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
          {headerData.map((item) =>
            item.simplePage ? (
              <Link
                key={item.simplePage.slug}
                href={`/${item.simplePage.slug}`}
                className="mr-5"
              >
                {item.simplePage.title}
              </Link>
            ) : (
              <Link key={item.path} href={item.path} className="mr-5">
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
