import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import { BackToTop } from "./back-to-top"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of Plastic Recycling: Innovations and Challenges",
      excerpt: "Explore the cutting-edge technologies transforming how we recycle plastics and the obstacles we still need to overcome.",
      image: "/images/plastic-waste-1.jpg",
      date: "May 15, 2019",
      readTime: "7 min read",
    },
    {
      id: 2,
      title: "Microplastics: The Invisible Threat to Our Oceans",
      excerpt: "Understanding the impact of microplastics on marine ecosystems and what we can do to address this growing environmental concern.",
      image: "/images/volunteer.jpg",
      date: "April 22, 2019",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Building a Circular Economy: Beyond Recycling",
      excerpt: "How rethinking our approach to production, consumption, and waste management can create a more sustainable future.",
      image: "/images/waste.png",
      date: "March 8, 2019",
      readTime: "8 min read",
    },
  ]

  return (
    <section id="blog" className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Blog</h2>
          <p className="text-emerald-700/90 text-lg">
            Insights and thoughts on environmental conservation, sustainability, and plastic recycling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-emerald-100/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center gap-4 text-sm text-emerald-600/80">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors duration-300 mt-4 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <p className="text-emerald-600/90 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="link"
                  className="p-0 text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
                  asChild
                >
                  <a href={`#blog-post-${post.id}`} className="flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300"
          >
            View All Posts
          </Button>
        </div>
      </div>
      <BackToTop />
    </section>
  )
}
