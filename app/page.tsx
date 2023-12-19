import { LocaleCode } from '@/__generated__/api-types'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { Program } from '@/components/Program'
import { data } from '@/data'

export default function Home() {
  console.log('data', data)
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header localeCode={LocaleCode.Sk} currentPath="/" />
      <Hero />
      <Program localeCode={LocaleCode.Sk} />
      <Partners />
      <Footer />
    </main>
  )
}
