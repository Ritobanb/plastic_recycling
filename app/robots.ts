import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.meetsumouli.com/sitemap.xml', // Update this with your actual domain when deploying
  }
}
