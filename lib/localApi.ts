export async function apiRequest(
  apiPath: string,
  nextConfig: NextFetchRequestConfig | undefined = { revalidate: 60 }
) {
  const response = await fetch(apiPath, {
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
  return data
}
