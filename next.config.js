const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Support MDX files as pages:
	pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
	reactStrictMode: true,
}

module.exports = withContentlayer(nextConfig)
