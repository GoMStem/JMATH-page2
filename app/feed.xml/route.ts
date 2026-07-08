import { NextResponse } from 'next/server'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { getAllDailyPosts, getDailyPostBySlug } from '@/lib/daily-posts'

const baseUrl = 'https://yonsei-hossam.com'
const MAX_ITEMS = 25

export const revalidate = 3600

type FeedItem = {
  title: string
  link: string
  guid: string
  description: string
  pubDate: string
  sortKey: number
}

function toDate(value: string): Date {
  const d = new Date(value)
  return isNaN(d.getTime()) ? new Date() : d
}

function toSortKey(value: string): number {
  const d = new Date(value)
  return isNaN(d.getTime()) ? 0 : d.getTime()
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function truncate(str: string, max: number): string {
  const clean = str.trim()
  if (clean.length <= max) return clean
  return clean.slice(0, max).trimEnd() + '…'
}

function cdata(str: string): string {
  return `<![CDATA[${(str || '').replace(/\]\]>/g, ']]]]><![CDATA[>')}]]>`
}

async function buildBlogItem(logNo: string): Promise<FeedItem | null> {
  const post = await getPostBySlug(logNo).catch(() => null)
  if (!post) return null
  const description = post.description || truncate(stripHtml(post.contentHtml), 220)
  const link = `${baseUrl}/blog/${post.logNo}`
  return {
    title: post.title,
    link,
    guid: link,
    description,
    pubDate: toDate(post.date).toUTCString(),
    sortKey: toSortKey(post.date),
  }
}

async function buildDailyItem(slug: string): Promise<FeedItem | null> {
  const post = await getDailyPostBySlug(slug).catch(() => null)
  if (!post) return null
  const description = post.description || truncate(stripHtml(post.contentHtml), 220)
  const link = `${baseUrl}/daily-post/${encodeURIComponent(post.slug)}`
  return {
    title: post.title,
    link,
    guid: link,
    description,
    pubDate: toDate(post.date).toUTCString(),
    sortKey: toSortKey(post.date),
  }
}

export async function GET() {
  const merged = [
    ...getAllPosts().map(p => ({ type: 'blog' as const, id: p.logNo, date: p.date })),
    ...getAllDailyPosts().map(p => ({ type: 'daily' as const, id: p.slug, date: p.date })),
  ]
    .sort((a, b) => toSortKey(b.date) - toSortKey(a.date))
    .slice(0, MAX_ITEMS)

  const built = await Promise.all(
    merged.map(m => (m.type === 'blog' ? buildBlogItem(m.id) : buildDailyItem(m.id)))
  )
  const items = built.filter((i): i is FeedItem => i !== null)

  const now = new Date().toUTCString()

  const itemXml = items
    .map(
      it => `    <item>
      <title>${cdata(it.title)}</title>
      <link>${it.link}</link>
      <guid isPermaLink="true">${it.guid}</guid>
      <description>${cdata(it.description)}</description>
      <pubDate>${it.pubDate}</pubDate>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>J-MATH</title>
    <link>${baseUrl}</link>
    <description>연세대 출신 현정호 대표강사의 수학 전략 코칭 J-MATH. 약술형 논술, 내신·수능 학습 사례와 데일리 인사이트를 전합니다.</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${itemXml}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
