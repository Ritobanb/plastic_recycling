import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { BackToTop } from "./back-to-top"
import portfolioData from "../src/data/portfolio.json"

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">{portfolioData.title}</h2>
          <p className="text-emerald-700/90 text-lg">
            {portfolioData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-emerald-100/50">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-emerald-800 mb-4">{project.title}</h3>
                <p className="text-emerald-600/90 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300" 
                    asChild
                  >
                    <a href={project.demoUrl}>
                      View Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    asChild
                  >
                    <a href={project.caseStudyUrl}>Case Study</a>
                  </Button>
                </div>
              </CardContent>
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
