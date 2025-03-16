import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Loading from "@/components/loading"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
