import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Future of Plastic Recycling: Innovations and Challenges",
      excerpt:
        "Explore the cutting-edge technologies transforming how we recycle plastics and the obstacles we still need to overcome.",
      image: "/images/plastic-waste-1.jpg",
      date: "May 15, 2019",
      readTime: "7 min read",
    },
    {
      id: 2,
      title: "Microplastics: The Invisible Threat to Our Oceans",
      excerpt:
        "Understanding the impact of microplastics on marine ecosystems and what we can do to address this growing environmental concern.",
      image: "/images/volunteer.jpg",
      date: "April 22, 2019",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Building a Circular Economy: Beyond Recycling",
      excerpt:
        "How rethinking our approach to production, consumption, and waste management can create a more sustainable future.",
      image: "/images/waste.png",
      date: "March 8, 2019",
      readTime: "8 min read",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {post.readTime}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="ghost" className="p-0 h-auto" asChild>
                <Link href={`/blog/${post.id}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
