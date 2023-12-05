import assert from 'assert'

const { ENTRADIO_API_URL, ENTRADIO_API_KEY } = process.env

;(function makeAssertions() {
  console.log('makeAssertions')
  assert(ENTRADIO_API_URL, 'ENTRADIO_API_URL is required')
  assert(ENTRADIO_API_KEY, 'ENTRADIO_API_KEY is required')
})()

export { ENTRADIO_API_URL, ENTRADIO_API_KEY }
