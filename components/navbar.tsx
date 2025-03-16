"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import navData from "../src/data/navigation.json"
import type { NavigationLink } from "../src/types/content"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Recycling Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-poppins font-bold text-lg md:text-xl ${
              isScrolled || isMenuOpen ? 'text-emerald-700' : 'text-white'
            } transition-colors duration-300`}>
              Sumouli Mukherjee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navData.links.map((item: NavigationLink) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-poppins text-sm font-medium ${
                  isScrolled
                    ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                } transition-all duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`block md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled || isMenuOpen
                ? 'text-emerald-600 hover:bg-emerald-50'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-6 flex flex-col divide-y divide-emerald-100">
            {navData.links.map((item: NavigationLink, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group relative flex items-center py-4 px-4 font-poppins text-base font-medium text-emerald-700 transition-all duration-300
                  ${index === 0 ? 'border-t border-emerald-100' : ''}
                  hover:bg-gradient-to-r hover:from-emerald-50/80 hover:to-transparent`}
                onClick={toggleMenu}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                  {item.label}
                </span>
                <span className="absolute left-0 w-0 h-full bg-emerald-100/50 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="py-6 px-4">
              <p className="text-sm text-emerald-600/80 font-poppins">
                Let&apos;s make a sustainable future together.
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
