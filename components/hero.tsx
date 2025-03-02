import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-image.jpg"
          alt="Artistic underwater scene illustrating marine life and plastic pollution"
          fill
          className="object-cover object-center brightness-[0.85]"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/25 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-end">
            <div className="w-full max-w-xl text-right pt-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Hi, I'm{" "}
                <span className="text-emerald-400 drop-shadow-lg">
                  Sumouli Mukherjee
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                An environmentalist dedicated to creating a sustainable future through innovative recycled plastic solutions
                and environmental advocacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto text-base border-2 border-transparent transition-all duration-300" 
                  size="lg"
                  asChild
                >
                  <a href="#portfolio">
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-emerald-600 text-emerald-400 hover:text-white w-full sm:w-auto text-base border-2 border-emerald-400 hover:border-emerald-600 transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
