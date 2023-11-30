import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import {Partners} from "@/components/Partners";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Partners />
      <Footer />
    </main>
  )
}