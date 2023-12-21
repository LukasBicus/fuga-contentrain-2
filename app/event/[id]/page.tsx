import { LocaleCode } from '@/__generated__/api-types'
import { EventDetail } from '@/components/EventDetail'
import { Header } from '@/components/Header'
import { notFound } from 'next/navigation'

export const revalidate = 60 // revalidate at most every 15s

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)
  if (isNaN(id)) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header localeCode={LocaleCode.Sk} currentPath={`/event/id`} />
      <EventDetail localeCode={LocaleCode.Sk} id={id} />
    </main>
  )
}
