import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/daily')

function toSafeSlug(rawSlug: string): string {
  return rawSlug
    .replace(/[:?#&/\\%*<>|"'`+={}[\]!,;()@$^]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function readAllFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
}

export function getAllDailyPosts() {
  const fileNames = readAllFileNames()
  if (fileNames.length === 0) return []
  const posts = fileNames.map(fileName => {
    const rawSlug = fileName.replace(/\.md$/, '')
    const slug = toSafeSlug(rawSlug)
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      title: (data.title as string) || rawSlug,
      date: (data.date as string) || '',
      description: (data.description as string) || '',
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getDailyPostBySlug(slug: string) {
  const fileNames = readAllFileNames()
  for (const fileName of fileNames) {
    const rawSlug = fileName.replace(/\.md$/, '')
    if (toSafeSlug(rawSlug) !== slug) continue
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()
    return {
      slug,
      title: (data.title as string) || rawSlug,
      date: (data.date as string) || '',
      description: (data.description as string) || '',
      contentHtml,
    }
  }
  throw new Error(`Daily post not found: ${slug}`)
}
