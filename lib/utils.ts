import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
}

export function absoluteUrl(path: string) {
	return `111${path}`
}

export function formatDate(
	date: Date | string | number,
	options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	},
) {
	return new Intl.DateTimeFormat('en-US', {
		...options,
	}).format(new Date(date))
}

export function isMacOs() {
	if (typeof window === 'undefined') return false

	return window.navigator.userAgent.includes('Mac')
}

export function truncate(str: string, length: number) {
	return str.length > length ? `${str.substring(0, length)}...` : str
}
