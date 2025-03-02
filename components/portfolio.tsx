import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText } from "lucide-react"
import Image from "next/image"
import { BackToTop } from "./back-to-top"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Ocean Plastic Recycling Initiative",
      description: "Developed an innovative system for collecting and recycling ocean plastic waste, reducing marine pollution.",
      image: "/images/volunteer.jpg",
      tags: ["Recycling", "Ocean Conservation", "Innovation"],
      demoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 2,
      title: "Sustainable Packaging Solutions",
      description: "Developed eco-friendly packaging alternatives using recycled plastics, reducing virgin plastic use by 75% while maintaining product protection.",
      image: "/images/plastic-waste-1.jpg",
      tags: ["Sustainable Packaging", "Product Design", "Circular Economy"],
      demoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 3,
      title: "Urban Waste Management System",
      description: "Implemented a comprehensive waste segregation and recycling system in urban communities, increasing plastic recycling rates by 60%.",
      image: "/images/plastic-waste-2.jpg",
      tags: ["Waste Management", "Urban Planning", "Community Education"],
      demoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 4,
      title: "Single-Use Plastics Reduction Campaign",
      description: "Led a successful campaign to reduce single-use plastics in local businesses, resulting in a 40% decrease in plastic straw usage.",
      image: "/images/plastic-straws.jpg",
      tags: ["Awareness Campaign", "Plastic Reduction", "Community Impact"],
      demoUrl: "#",
      caseStudyUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">My Projects</h2>
          <p className="text-emerald-700/90 text-lg">
            Explore my work in environmental conservation and sustainable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-emerald-100/50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-emerald-800">{project.title}</h3>
                <p className="text-emerald-600/90">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent hover:bg-emerald-600 text-emerald-600 hover:text-white border-emerald-600 transition-colors duration-300"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent hover:bg-emerald-600 text-emerald-600 hover:text-white border-emerald-600 transition-colors duration-300"
                  asChild
                >
                  <a href={project.caseStudyUrl}>
                    <FileText className="mr-2 h-4 w-4" />
                    Case Study
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
            View All Projects
          </Button>
        </div>
      </div>
      <BackToTop />
    </section>
  )
}
