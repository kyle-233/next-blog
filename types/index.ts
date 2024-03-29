import type { Product, Store } from '@/db/schema'
import type { Icons } from '@/components/icons'

export interface FooterItem {
	title: string
	items: {
		title: string
		href: string
		external?: boolean
	}[]
}

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
	icon?: keyof typeof Icons
	label?: string
	description?: string
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
	items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export interface Option {
	label: string
	value: string
	icon?: React.ComponentType<{ className?: string }>
}

export interface Subcategory {
	title: string
	description?: string
	image?: string
	slug: string
}

export interface Category {
	title: Product['category']
	image: string
	icon: React.ComponentType<{ className?: string }>
	subcategories: Subcategory[]
}

export interface ReadingTime {
	text: string
	minutes: number
	time: number
	words: number
}

export interface Post {
	slug: string
	title: string
	image: string
	description: string
	date: number
	content: string
	readingTime: ReadingTime
	authors: string[]
}

export interface Author {
	title: string
	description: string
	avatar: string
	twitter: string
}
