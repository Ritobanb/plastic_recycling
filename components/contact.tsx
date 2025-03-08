"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from "lucide-react"
import { BackToTop } from "./back-to-top"
import contactData from "../src/data/contact.json"

const iconMap = {
  Mail,
  MapPin,
  Phone,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
} as const

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

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="container">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">{contactData.title}</h2>
          <p className="text-emerald-700/90 text-lg">
            {contactData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 border-emerald-100/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-emerald-800">
                    {contactData.form.fields.name.label}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={contactData.form.fields.name.placeholder}
                    value={formData.name}
                    onChange={handleChange}
                    className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-emerald-800">
                    {contactData.form.fields.email.label}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={contactData.form.fields.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-emerald-800">
                    {contactData.form.fields.message.label}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={contactData.form.fields.message.placeholder}
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
                  {contactData.form.submitText}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-emerald-100/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-6">
                {Object.entries(contactData.contactInfo).map(([key, info]) => {
                  const Icon = iconMap[info.icon as keyof typeof iconMap]
                  const href = key === 'email' ? `mailto:${info.value}` :
                             key === 'phone' ? `tel:${info.value.replace(/[^0-9+]/g, '')}` :
                             '#'
                  return (
                    <a
                      key={key}
                      href={href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 group-hover:text-emerald-700 transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-emerald-800">{info.label}</p>
                        <p className="text-emerald-600/90">{info.value}</p>
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
                  {contactData.social.map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap]
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-700 transition-colors duration-300"
                        aria-label={link.platform}
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
