'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

export default function BlogFilter({ posts, allTags }: { posts: Post[]; allTags: string[] }) {
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = selected ? posts.filter(p => p.tags.includes(selected)) : posts

  return (
    <>
      {allTags.length > 0 && (
        <div className="blog-tag-bar">
          <button
            className={`blog-tag-pill${!selected ? ' active' : ''}`}
            onClick={() => setSelected(null)}
          >
            전체
            <span className="blog-tag-pill-count">{posts.length}</span>
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`blog-tag-pill${selected === tag ? ' active' : ''}`}
              onClick={() => setSelected(selected === tag ? null : tag)}
            >
              #{tag}
              <span className="blog-tag-pill-count">
                {posts.filter(p => p.tags.includes(tag)).length}
              </span>
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="blog-empty">
          <div className="blog-empty-icon"><i className="fas fa-pen-nib"></i></div>
          <div className="blog-empty-text">아직 이 태그의 글이 없습니다</div>
        </div>
      ) : (
        <div className="blog-grid">
          {filtered.map(post => (
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
      )}
    </>
  )
}
