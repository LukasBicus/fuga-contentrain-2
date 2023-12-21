import { getAllPages } from '@/data'

export async function GET(request: Request) {
  console.log('request', request)
  return Response.json(getAllPages())
}
