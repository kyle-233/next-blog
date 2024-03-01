import { type Metadata } from 'next'

export const metadata: Metadata = {
	// metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: 'Blog',
	description: 'Explore the latest news and updates from the community',
}

const BlogPage = () => {
	return <div>Blog Page</div>
}

export default BlogPage
