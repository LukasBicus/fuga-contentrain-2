import { ENTRADIO_API_KEY, ENTRADIO_API_URL } from '@/envs'

export async function entradioApiGraphqlRequest(
  body: {
    query: string
    variables: any
  },
  next: NextFetchRequestConfig | undefined = { revalidate: 60 }
) {
  if (ENTRADIO_API_KEY && ENTRADIO_API_URL) {
    const response = await fetch(ENTRADIO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ENTRADIO_API_KEY}`,
      },
      body: JSON.stringify(body),
      next,
    })

    const data = await response.json()
    if (data.errors) {
      throw data
    }
    return data.data
  }
  return null
}
