"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Globe } from "lucide-react"
import { BackToTop } from "./back-to-top"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: Globe,
      href: "#",
      label: "Website",
    },
  ]

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Get In Touch</h2>
          <p className="text-emerald-700/90 text-lg">
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 border-emerald-100/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-emerald-800">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-emerald-800">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-emerald-800">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-emerald-100/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 group-hover:text-emerald-700 transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-emerald-800">{item.label}</p>
                        <p className="text-emerald-600/90">{item.value}</p>
                      </div>
                    </a>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="border-emerald-100/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="p-3 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-700 transition-colors duration-300"
                        aria-label={link.label}
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <BackToTop />
    </section>
  )
}
