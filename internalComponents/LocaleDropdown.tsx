'use client'
import { LocaleCode } from '@/__generated__/api-types'
import { clsx } from 'clsx'
import React, { useState } from 'react'

interface ILocaleDropdownProps {
  currentLocale: LocaleCode
}

export const LocaleDropdown: React.FC<ILocaleDropdownProps> = ({
  currentLocale,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="relative">
      <button
        id="dropdown-button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
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
          <a
            className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            Light
          </a>
          <a
            className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            Dark
          </a>
          <a
            className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
            role="menuitem"
          >
            System
          </a>
        </div>
      </div>
    </div>
  )
}
