import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllDailyPosts, getDailyPostBySlug } from '@/lib/daily-posts'

export const dynamic = 'force-static'
export const dynamicParams = true

export async function generateStaticParams() {
  const posts = getAllDailyPosts()
  return posts.map(post => ({ slug: post.slug }))
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

  const allPosts = getAllDailyPosts()
  const otherPosts = allPosts.filter(p => p.slug !== decoded).slice(0, 4)

  return (
    <div className="page-wrap">
      <div className="post-header">
        <div className="post-header-inner">
          <Link href="/daily-post" className="post-back">
            <i className="fas fa-arrow-left"></i> Daily Post 목록
          </Link>
          <h1 className="post-h1">{post.title}</h1>
          <div className="post-meta-row">
            <span className="post-meta-date">{post.date}</span>
          </div>
        </div>
      </div>

      <div className="post-body">
        <div className="post-content-wrap">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </div>

      {otherPosts.length > 0 && (
        <div className="post-more">
          <div className="post-more-inner">
            <div className="post-more-label">다른 글 보기</div>
            <div className="post-more-grid">
              {otherPosts.map(p => (
                <Link key={p.slug} href={`/daily-post/${p.slug}`} className="post-more-card">
                  <div className="post-more-card-date">{p.date}</div>
                  <div className="post-more-card-title">{p.title}</div>
                </Link>
              ))}
            </div>
            <div className="post-more-back">
              <Link href="/daily-post" className="post-more-back-btn">
                <i className="fas fa-th-list"></i> 전체 글 목록으로
              </Link>
            </div>
          </div>
        </div>
      )}

      <footer className="footer-simple">
        <div className="footer-copy">© 2026 J-MATH. All rights reserved.</div>
      </footer>
    </div>
  )
}
