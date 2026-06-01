import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ logNo: post.logNo }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ logNo: string }>
}): Promise<Metadata> {
  const { logNo } = await params
  const post = await getPostBySlug(logNo).catch(() => null)
  if (!post) return { title: 'Blog — J-MATH' }
  return { title: `${post.title} — J-MATH` }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ logNo: string }>
}) {
  const { logNo } = await params
  const post = await getPostBySlug(logNo).catch(() => null)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const otherPosts = allPosts.filter(p => p.logNo !== logNo).slice(0, 4)

  return (
    <div className="page-wrap">
      <div className="post-header">
        <div className="post-header-inner">
          <Link href="/blog" className="post-back">
            <i className="fas fa-arrow-left"></i> Blog 목록
          </Link>
          <h1 className="post-h1">{post.title}</h1>
          <div className="post-meta-row">
            <span className="post-meta-date">{post.date}</span>
            {post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="post-tag">#{tag}</span>
                ))}
              </div>
            )}
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
                <Link key={p.logNo} href={`/blog/${p.logNo}`} className="post-more-card">
                  <div className="post-more-card-date">{p.date}</div>
                  <div className="post-more-card-title">{p.title}</div>
                </Link>
              ))}
            </div>
            <div className="post-more-back">
              <Link href="/blog" className="post-more-back-btn">
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
