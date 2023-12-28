import { BASE_URL } from '@/envs'

export async function apiRequest<T>(
  apiPath: string,
  nextConfig: NextFetchRequestConfig | undefined = { revalidate: 60 }
) {
  const response = await fetch(BASE_URL + apiPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: nextConfig,
  })

  const data = await response.json()
  if (data.errors) {
    throw data
  }
  return data as T
}
