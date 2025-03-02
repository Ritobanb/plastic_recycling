import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Leaf, Droplets } from "lucide-react"
import { BackToTop } from "./back-to-top"
import aboutData from "../src/data/about.json"
import type { AboutCard } from "../src/types/content"

const iconMap = {
  Recycle,
  Leaf,
  Droplets,
} as const

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-emerald-50/50 to-white py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">{aboutData.title}</h2>
          <p className="text-emerald-700/90 text-lg">
            {aboutData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.cards.map((card: AboutCard) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            return (
              <Card key={card.id} className="group hover:shadow-lg transition-all duration-300 border-emerald-100/50">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800">{card.title}</h3>
                    <p className="text-emerald-600/90">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      <BackToTop />
    </section>
  )
}
