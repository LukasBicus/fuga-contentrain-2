import { LocaleCode } from '@/__generated__/api-types'
import assert from 'assert'

assert(process.env.ENTRADIO_API_URL, 'ENTRADIO_API_URL is required')
const ENTRADIO_API_URL = process.env.ENTRADIO_API_URL satisfies string

assert(process.env.ENTRADIO_API_KEY, 'ENTRADIO_API_KEY is required')
const ENTRADIO_API_KEY = process.env.ENTRADIO_API_KEY satisfies string

const DEFAULT_LOCALE_CODE = process.env.DEFAULT_LOCALE_CODE || LocaleCode.En

export { ENTRADIO_API_URL, ENTRADIO_API_KEY, DEFAULT_LOCALE_CODE }
