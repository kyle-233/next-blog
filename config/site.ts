import type { FooterItem } from '@/types'

const links = {
	twitter: 'https://twitter.com/xxx',
	github: 'https://github.com/xxx/xxx',
	githubAccount: 'https://github.com/xxx',
	discord: 'https://discord.com/users/xxx',
	calDotCom: 'https://cal.com/xxx',
}

export const siteConfig = {
	name: 'Skateshop',
	description:
		'An open source e-commerce skateshop build with everything new in Next.js.',
	url: 'https://skateshop.shamn.com',
	ogImage: 'https://skateshop.sadmn.com/opengraph-image.png',
	links,
	mainNav: [],
	footerNav: [
		{
			title: 'Credits',
			items: [
				{
					title: 'OneStopShop',
					href: 'https://onestopshop.jackblatch.com',
					external: true,
				},
				{
					title: 'Acme Corp',
					href: 'https://acme-corp.jumr.dev',
					external: true,
				},
				{
					title: 'craft.mxkaske.dev',
					href: 'https://craft.mxkaske.dev',
					external: true,
				},
				{
					title: 'Taxonomy',
					href: 'https://tx.shadcn.com/',
					external: true,
				},
				{
					title: 'shadcn/ui',
					href: 'https://ui.shadcn.com',
					external: true,
				},
			],
		},
		{
			title: 'Help',
			items: [
				{
					title: 'About',
					href: '/about',
					external: false,
				},
				{
					title: 'Contact',
					href: '/contact',
					external: false,
				},
				{
					title: 'Terms',
					href: '/terms',
					external: false,
				},
				{
					title: 'Privacy',
					href: '/privacy',
					external: false,
				},
			],
		},
		{
			title: 'Social',
			items: [
				{
					title: 'Twitter',
					href: links.twitter,
					external: true,
				},
				{
					title: 'GitHub',
					href: links.githubAccount,
					external: true,
				},
				{
					title: 'Discord',
					href: links.discord,
					external: true,
				},
				{
					title: 'cal.com',
					href: links.calDotCom,
					external: true,
				},
			],
		},
		{
			title: 'Lofi',
			items: [
				{
					title: 'beats to study to',
					href: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
					external: true,
				},
				{
					title: 'beats to chill to',
					href: 'https://www.youtube.com/watch?v=rUxyKA_-grg',
					external: true,
				},
				{
					title: 'a fresh start',
					href: 'https://www.youtube.com/watch?v=rwionZbOryo',
					external: true,
				},
				{
					title: 'coffee to go',
					href: 'https://www.youtube.com/watch?v=2gliGzb2_1I',
					external: true,
				},
			],
		},
	] satisfies FooterItem[],
}
