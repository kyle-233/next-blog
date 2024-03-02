import { Author, Post } from '@/types'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

// get blog path
const postsDirectory = join(process.cwd(), 'content', 'blog')

export const getPostSlugs = () => {
	return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string) => {
	const realSlug = slug.replace(/\.mdx$/, '')
	const fullPath = join(postsDirectory, `${realSlug}.mdx`)
	const fileContents = fs.readFileSync(fullPath, 'utf-8')
	const { data, content } = matter(fileContents)
	const readTime = readingTime(content)
	return { ...data, slug: realSlug, content, readingTime: readTime } as Post
}

export const getAllPosts = (): Post[] => {
	const slugs = getPostSlugs()
	const posts = slugs.map((slug) => getPostBySlug(slug))
	return posts
}

const authorsDirectory = join(process.cwd(), 'content', 'authors')
export const getAuthorsSlugs = () => {
	return fs.readdirSync(authorsDirectory)
}

export const getAuthorsBySlug = (slug: string) => {
	const realSlug = slug.replace(/\.mdx$/, '')
	const fullPath = join(authorsDirectory, `${realSlug}.mdx`)
	const fileContents = fs.readFileSync(fullPath, 'utf-8')
	const { data } = matter(fileContents)
	return { ...data } as Author
}

export const getAllAuthors = () => {
	const slugs = getAuthorsSlugs()
	const authors = slugs.map((slug) => getAuthorsBySlug(slug))
	return authors
}
