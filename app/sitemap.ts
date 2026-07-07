import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { getAllDailyPosts } from '@/lib/daily-posts'

const baseUrl = 'https://yonsei-hossam.com'

function toDate(value: string): Date {
  const d = new Date(value)
  return isNaN(d.getTime()) ? new Date() : d
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/daily-post`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.logNo}`,
    lastModified: toDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const dailyRoutes: MetadataRoute.Sitemap = getAllDailyPosts().map(post => ({
    url: `${baseUrl}/daily-post/${encodeURIComponent(post.slug)}`,
    lastModified: toDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes, ...dailyRoutes]
}
