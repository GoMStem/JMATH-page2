import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllDailyPosts, getDailyPostBySlug } from '@/lib/daily-posts'

export async function generateStaticParams() {
  const posts = getAllDailyPosts()
  return posts.map(post => ({ slug: encodeURIComponent(post.slug) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const decoded = decodeURIComponent(slug)
  const post = await getDailyPostBySlug(decoded).catch(() => null)
  if (!post) return { title: 'Daily Post — J-MATH' }
  return { title: `${post.title} — J-MATH` }
}

export default async function DailyPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const decoded = decodeURIComponent(slug)
  const post = await getDailyPostBySlug(decoded).catch(() => null)
  if (!post) notFound()

  return (
    <div className="page-wrap">
      <div className="post-article-wrap">
        <article className="post-article">
          <Link href="/daily-post" className="post-back">
            <i className="fas fa-arrow-left"></i> Daily Post 목록
          </Link>
          <h1>{post.title}</h1>
          <div className="post-meta">{post.date}</div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
      <footer className="footer-simple">
        <div className="footer-copy">© 2026 J-MATH. All rights reserved.</div>
      </footer>
    </div>
  )
}
