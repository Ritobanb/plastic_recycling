import dynamic from 'next/dynamic'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"

// Dynamically import components that are not needed immediately
const About = dynamic(() => import("@/components/about"), {
  loading: () => <div className="h-screen" />,
})
const Portfolio = dynamic(() => import("@/components/portfolio"), {
  loading: () => <div className="h-screen" />,
})
const Blog = dynamic(() => import("@/components/blog"), {
  loading: () => <div className="h-screen" />,
})
const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="h-screen" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-16" />,
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
