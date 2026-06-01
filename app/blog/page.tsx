import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — J-MATH',
}

export default function BlogPage() {
  const posts = getAllPosts()

  if (posts.length === 0) {
    return (
      <div className="page-wrap">
        <section className="page-hero">
          <div className="page-inner">
            <div className="page-kicker">J-MATH</div>
            <h1 className="page-title">Blog</h1>
            <div className="page-divider"></div>
            <p className="page-subtitle">
              수학 학습 전략과 입시 정보를 담을 공간입니다.<br />
              곧 업데이트될 예정입니다.
            </p>
          </div>
        </section>
        <footer className="footer-simple">
          <div className="footer-copy">© 2026 J-MATH. All rights reserved.</div>
        </footer>
      </div>
    )
  }

  return (
    <div className="page-wrap">
      <div className="blog-header">
        <div className="blog-header-inner">
          <div className="page-kicker">J-MATH</div>
          <h1 className="page-title">Blog</h1>
          <div className="page-divider"></div>
          <p className="blog-header-count">총 {posts.length}개의 글</p>
        </div>
      </div>

      <div className="blog-body">
        <div className="blog-grid">
          {posts.map(post => (
            <Link key={post.logNo} href={`/blog/${post.logNo}`} className="blog-card">
              <div className="blog-card-date">{post.date}</div>
              <div className="blog-card-title">{post.title}</div>
              {post.description && (
                <div className="blog-card-desc">{post.description}</div>
              )}
              {post.tags.length > 0 && (
                <div className="blog-card-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="post-tag">#{tag}</span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <footer className="footer-simple">
        <div className="footer-copy">© 2026 J-MATH. All rights reserved.</div>
      </footer>
    </div>
  )
}
