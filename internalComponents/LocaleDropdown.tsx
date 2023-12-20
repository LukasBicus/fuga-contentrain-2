'use client'
import { LocaleCode } from '@/__generated__/api-types'
import { clsx } from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

interface ILocaleDropdownProps {
  currentLocale: LocaleCode
  defaultLocale: LocaleCode
  availableLocales: LocaleCode[]
}

export const LocaleDropdown: React.FC<ILocaleDropdownProps> = ({
  currentLocale,
  availableLocales,
  defaultLocale,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="relative">
      <button
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-background"
        onClick={() => {
          setIsOpen((o) => !o)
        }}
      >
        {currentLocale}
      </button>
      <div
        className={clsx(
          'origin-top-left',
          'absolute',
          'right-0',
          'mt-2',
          'w-48',
          'rounded-md',
          'shadow-lg',
          'bg-white',
          'ring-1',
          'ring-black',
          'ring-opacity-5',
          {
            hidden: !isOpen,
          }
        )}
      >
        <div
          className="py-2 p-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          {availableLocales.map((localeCode) => (
            <div
              key={localeCode}
              className={clsx('border-l-4', {
                ['border-l-red-700']: localeCode === currentLocale,
                ['border-l-transparent']: localeCode !== currentLocale,
              })}
            >
              <Link
                href={localeCode !== defaultLocale ? `/${localeCode}` : '/'}
                className={'flex px-2 py-2 text-sm'}
                role="menuitem"
              >
                {localeCode}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
