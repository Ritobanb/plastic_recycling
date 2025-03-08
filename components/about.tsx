import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Leaf, Droplets } from "lucide-react"
import { BackToTop } from "./back-to-top"
import aboutData from "../src/data/about.json"
import type { AboutCard } from "../src/types/content"
import Image from "next/image"

const iconMap = {
  Recycle,
  Leaf,
  Droplets,
} as const

export default function About() {
  const paragraphs = aboutData.description.split("<br>")

  return (
    <section id="about" className="relative bg-gradient-to-b from-emerald-50/50 to-white py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8">{aboutData.title}</h2>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 text-left space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-emerald-700/90 text-lg leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              
              <div className="md:w-80 shrink-0 mx-auto md:mx-0">
                <div className="sticky top-8">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={aboutData.profileImage}
                      alt="Profile"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                      loading="eager"
                      unoptimized
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
