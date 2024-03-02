import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { Separator } from '@/components/ui/separator'
import { type Metadata } from 'next'
import React from 'react'
import { PostCardSkeleton } from './_components/post-card-skeleton'
import { PostCard } from './_components/post-card'
import { allPosts } from 'contentlayer/generated'

export const metadata: Metadata = {
	// metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Blog',
	description: 'Explore the latest news and updates from the community',
}

const BlogPage = () => {
	console.log('allPosts', allPosts)
	// const allPosts = getAllPosts()
	const posts = allPosts
		.filter((post) => post.published)
		.sort((a, b) => b.date.localeCompare(a.date))
	return (
		<Shell className="md:pb-10">
			<PageHeader>
				<PageHeaderHeading>Blog</PageHeaderHeading>
				<PageHeaderDescription>
					Explore the latest news and updates from the community
				</PageHeaderDescription>
				<Separator className="mb-2.5" />
				<section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<React.Suspense
						fallback={Array.from({ length: 4 }).map((_, i) => (
							<PostCardSkeleton key={i} />
						))}
					>
						{posts.map((post, i) => (
							<PostCard key={post.slug} post={post} i={i} />
						))}
					</React.Suspense>
				</section>
			</PageHeader>
		</Shell>
	)
}

export default BlogPage
