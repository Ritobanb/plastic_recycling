/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.meetsumouli.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404'],
      },
      {
        userAgent: '*',
        allow: ['/images'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      '/': 1.0,
      '/about': 0.8,
      '/portfolio': 0.8,
      '/blog': 0.7,
      '/contact': 0.6,
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
