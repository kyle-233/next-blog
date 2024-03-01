import { siteConfig } from '@/config/site'
import { MainNav } from '@/components/layouts/main-nav'

export const SiteHeader = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
			<div className="container h-16 flex items-center">
				<MainNav items={siteConfig.mainNav} />
			</div>
		</header>
	)
}
