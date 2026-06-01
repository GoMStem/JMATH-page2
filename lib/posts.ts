import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type Post = {
  slug: string
  logNo: string
  title: string
  date: string
  tags: string[]
  description: string
}

function readAllFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
}

export function getAllPosts(): Post[] {
  const fileNames = readAllFileNames()
  if (fileNames.length === 0) return []

  const posts = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    const logNo = String(data.logNo || fileName.replace(/\.md$/, ''))
    return {
      slug: logNo,
      logNo,
      title: String(data.title || logNo),
      date: String(data.date || ''),
      tags: Array.isArray(data.tags) ? data.tags : [],
      description: String(data.description || ''),
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(logNo: string) {
  const fileNames = readAllFileNames()

  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const fileLogNo = String(data.logNo || fileName.replace(/\.md$/, ''))

    if (fileLogNo === logNo) {
      const processedContent = await remark().use(html, { sanitize: false }).process(content)
      const contentHtml = processedContent.toString()
      return {
        slug: logNo,
        logNo,
        title: String(data.title || logNo),
        date: String(data.date || ''),
        tags: Array.isArray(data.tags) ? data.tags : [],
        description: String(data.description || ''),
        contentHtml,
      }
    }
  }

  throw new Error(`Post not found: ${logNo}`)
}
