import * as React from 'react'

const IndexPage = () => {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>Page</React.Suspense>
	)
}

export default IndexPage
