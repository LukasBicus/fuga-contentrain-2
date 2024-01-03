'use server'

import { Header as CoHeader } from '@/components/Header'
import { getHeaders } from '@/data'
import { ICommonBlockProps } from '@/types'
import React from 'react'

export const Header: React.FC<ICommonBlockProps> = async (props) => {
  const headerData = (await getHeaders(props.localeCode)).at(0)
  if (!headerData) {
    return null
  }

  return <CoHeader data={headerData} {...props} />
}
