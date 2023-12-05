import { ENTRADIO_API_KEY, ENTRADIO_API_URL } from '@/envs'

export async function entradioApiGraphqlRequest<TVariables, TResult>(
  body: {
    query: string
    variables: TVariables
  },
  next: NextFetchRequestConfig | undefined = { revalidate: 60 }
): Promise<TResult> {
  const response = await fetch(ENTRADIO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ENTRADIO_API_KEY}`,
    },
    body: JSON.stringify(body),
    next,
  })

  const data = (await response.json()) as {
    data: TResult
    errors: any
  }
  if (data.errors) {
    throw data
  }
  return data.data
}
