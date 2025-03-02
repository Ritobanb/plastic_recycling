import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Ocean Plastic Recovery Initiative",
      description:
        "A collaborative project to collect and recycle plastic waste from coastal areas, preventing ocean pollution and creating sustainable products.",
      image: "/images/volunteer.jpg",
      tags: ["Ocean Conservation", "Plastic Recycling", "Community Engagement"],
      liveUrl: "#",
      reportUrl: "#",
    },
    {
      id: 2,
      title: "Sustainable Packaging Solutions",
      description:
        "Developed eco-friendly packaging alternatives using recycled plastics, reducing virgin plastic use by 75% while maintaining product protection.",
      image: "/images/plastic-waste-1.jpg",
      tags: ["Sustainable Packaging", "Product Design", "Circular Economy"],
      liveUrl: "#",
      reportUrl: "#",
    },
    {
      id: 3,
      title: "Urban Waste Management System",
      description:
        "Implemented a comprehensive waste segregation and recycling system in urban communities, increasing plastic recycling rates by 60%.",
      image: "/images/plastic-waste-2.jpg",
      tags: ["Waste Management", "Urban Planning", "Community Education"],
      liveUrl: "#",
      reportUrl: "#",
    },
    {
      id: 4,
      title: "Single-Use Plastics Reduction Campaign",
      description:
        "Led a successful campaign to reduce single-use plastics in local businesses, resulting in a 40% decrease in plastic straw usage.",
      image: "/images/plastic-straws.jpg",
      tags: ["Awareness Campaign", "Plastic Reduction", "Community Impact"],
      liveUrl: "#",
      reportUrl: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex gap-4 mt-auto">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> View Project
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" /> Read Report
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
