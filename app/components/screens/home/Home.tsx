import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/heading/Heading'

import { products } from '@/data/product.data'

const Home: FC = () => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more'
		>
			<Heading className='text-right'>The happiest hour of the year</Heading>
			<Catalog products={products} />
		</Layout>
	)
}

export default Home
