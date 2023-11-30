import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {Partners} from "@/components/Partners";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      Lukas
      <Partners />
      <Footer />
    </main>
  )
}