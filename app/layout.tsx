import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Script from 'next/script'

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
  title: "Sumouli Mukherjee | Environmental Sustainability Expert",
  description: "Personal portfolio of Sumouli Mukherjee, an environmentalist specializing in recycled plastics, sustainable initiatives, and environmental conservation projects in Toronto.",
  metadataBase: new URL('https://www.meetsumouli.com'),
  keywords: ["environmental sustainability", "plastic recycling", "environmentalist", "Toronto", "plastic", "Canada", "sustainability", "recycling", "conservation", "sustainability initiatives"],
  authors: [{ name: "Sumouli Mukherjee" }],
  creator: "Sumouli Mukherjee",
  publisher: "Sumouli Mukherjee",
  alternates: {
    canonical: 'https://www.meetsumouli.com'
  },
  openGraph: {
    title: "Sumouli Mukherjee | Environmental Sustainability Expert",
    description: "Environmental conservation and plastic recycling initiatives in Toronto",
    url: 'https://www.meetsumouli.com',
    siteName: 'Sumouli Mukherjee Portfolio',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sumouli Mukherjee - Environmental Sustainability Expert'
      }
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumouli Mukherjee | Environmental Sustainability Expert',
    description: 'Environmental conservation and plastic recycling initiatives in Toronto',
    images: ['/images/hero-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sumouli Mukherjee',
              jobTitle: 'Environmental Sustainability Expert',
              description: 'Environmental conservation and plastic recycling specialist based in Toronto',
              url: 'https://www.meetsumouli.com',
              sameAs: [
                'https://linkedin.com/',
                'https://twitter.com/'
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'ON',
                addressCountry: 'CA'
              },
              knowsAbout: [
                'Environmental Sustainability',
                'Plastic Recycling',
                'Conservation',
                'Sustainability Initiatives'
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Environmental Conservation Projects'
              }
            })
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
