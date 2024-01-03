import { LocaleCode } from '@/__generated__/api-types'
import { LocaleDropdown } from '@/components/LocaleDropdown'
import { availableLocales } from '@/i18n/settings'
import { transformSlugToRoute } from '@/lib/routes'
import { DEFAULT_LOCALE_CODE } from '@/public-envs'
import { ICommonBlockProps, IHeaderData } from '@/types'
import { clsx } from 'clsx'
import { compact, orderBy } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getLogoLink = (currentPath: string) => {
  const slugs = compact(currentPath.split('/'))
  const firstSlug = slugs.at(0)
  return availableLocales
    .filter((lc) => lc !== DEFAULT_LOCALE_CODE)
    .includes(firstSlug as LocaleCode)
    ? `/${firstSlug}`
    : `/`
}

interface IHeaderProps extends ICommonBlockProps {
  data: IHeaderData
}

export const Header: React.FC<IHeaderProps> = ({
  localeCode,
  currentPath,
  data,
}) => {
  const items = data.items.map((item) => {
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
          href={getLogoLink(currentPath)}
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
                ['border-l-primary-dark']: item.path === currentPath,
                ['border-l-transparent']: item.path !== currentPath,
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LocaleDropdown
          currentLocale={localeCode}
          availableLocales={[LocaleCode.Sk, LocaleCode.En]}
          defaultLocale={DEFAULT_LOCALE_CODE}
        />
      </div>
    </header>
  )
}
