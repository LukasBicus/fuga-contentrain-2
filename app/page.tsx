import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { Program } from '@/components/Program'
import { LocaleCode } from '@/types'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header localeCode={LocaleCode.sk} />
      <Hero />
      <Program />
      <Partners />
      <Footer />
    </main>
  )
}
