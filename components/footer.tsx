import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react"
import contactData from "../src/data/contact.json"

const iconMap = {
  Mail,
  MapPin,
  Phone,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
} as const

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              {Object.entries(contactData.contactInfo).map(([key, info]) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap]
                return (
                  <div key={key} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-100">{info.value}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-emerald-100 hover:text-emerald-400 transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#portfolio" className="text-emerald-100 hover:text-emerald-400 transition-colors duration-300">Portfolio</a>
              </li>
              <li>
                <a href="#blog" className="text-emerald-100 hover:text-emerald-400 transition-colors duration-300">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-emerald-100 hover:text-emerald-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {contactData.social.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{item.platform}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-400">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
