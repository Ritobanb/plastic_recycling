import dynamic from 'next/dynamic'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import { Skeleton } from "@/components/ui/skeleton"

// Keep Portfolio static as it's important for SEO
import Portfolio from "@/components/portfolio"

// Loading components for each section
const AboutLoading = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <Skeleton className="h-12 w-64 mx-auto mb-8" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-16" />
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    </div>
  </section>
)

const PortfolioLoading = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <Skeleton className="h-12 w-64 mx-auto mb-8" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-16" />
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-96" />
        ))}
      </div>
    </div>
  </section>
)

const BlogLoading = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <Skeleton className="h-12 w-64 mx-auto mb-8" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-16" />
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-80" />
        ))}
      </div>
    </div>
  </section>
)

const ContactLoading = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-4xl">
      <Skeleton className="h-12 w-64 mx-auto mb-8" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-16" />
      <div className="space-y-6">
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
        <Skeleton className="h-32" />
      </div>
    </div>
  </section>
)

// Dynamically import components with proper loading states
const Blog = dynamic(() => import("@/components/blog"), {
  loading: BlogLoading,
  ssr: true,
})

const Contact = dynamic(() => import("@/components/contact"), {
  loading: ContactLoading,
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <Skeleton className="h-16" />,
  ssr: true,
})

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
