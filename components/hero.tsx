import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import aboutData from "../src/data/about.json"

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-20">
              {/* Text Content */}
              <div className="w-full md:max-w-lg text-left order-2 md:order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Hi, I'm{" "}
                  <span className="text-emerald-400 drop-shadow-lg">
                    Sumouli
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                  An environmentalist dedicated to creating a sustainable future through innovative recycled plastic solutions
                  and environmental advocacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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

              {/* Profile Image */}
              <div className="relative order-1 md:order-2 md:ml-auto">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-400/20 scale-110 animate-pulse-slow" />
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-400/30 scale-125" />
                  
                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent" />
                    <div className="relative w-full h-full border-4 border-emerald-400/80">
                      <Image
                        src={aboutData.profileImage}
                        alt="Profile"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
