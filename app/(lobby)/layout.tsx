import { SiteFooter } from '@/components/layouts/site-footer'
import React from 'react'

interface LobbyLayoutProps
	extends React.PropsWithChildren<{ modal: React.ReactNode }> {}

const LobbyLayout = ({ children, modal }: LobbyLayoutProps) => {
	return (
		<div className="relative flex min-h-screen flex-col">
			<main className="flex-1">
				{children}
				{modal}
			</main>
			<SiteFooter />
		</div>
	)
}

export default LobbyLayout
