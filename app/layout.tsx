import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers'
import { fontHeading, fontMono, fontSans } from '@/lib/fonts'
import { absoluteUrl, cn } from '@/lib/utils'
import '@/styles/globals.css'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	// metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'nextjs',
		'react',
		'react server components',
		'skateshop',
		'skateboarding',
		'kickflip',
	],
	authors: [
		{
			name: 'sadmann7',
			url: 'https://www.sadmn.com',
		},
	],
	creator: 'sadmann7',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: '@sadmann17',
	},
	icons: {
		icon: '/icon.png',
	},
	manifest: absoluteUrl('/site.webmanifest'),
}

export const viewport = {
	colorScheme: 'dark light',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
					fontMono.variable,
					fontHeading.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
