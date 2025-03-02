import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: "Sumouli Mukherjee | Environmentalist",
  description:
    "Personal portfolio of Sumouli Mukherjee, an environmentalist specializing in recycled plastics and sustainability initiatives.",
  metadataBase: new URL('https://sumouli-portfolio.vercel.app'),
  openGraph: {
    title: "Sumouli Mukherjee | Environmentalist",
    description: "Environmental conservation and plastic recycling initiatives",
    images: ['/images/hero-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
