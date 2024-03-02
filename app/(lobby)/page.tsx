import * as React from 'react'
import { LobbySkeleton } from './_components/lobby-skeleton'
import { Lobby } from './_components/lobby'
import { getGithubStars } from '@/lib/fetchers/github'

const IndexPage = () => {
	// const productsPromise = getFeaturedProducts()
	// const storesPromise = getFeaturedStores()
	const githubStarsPromise = getGithubStars()
	return (
		<React.Suspense fallback={<LobbySkeleton />}>
			<Lobby {...{ githubStarsPromise }} />
		</React.Suspense>
	)
}

export default IndexPage
