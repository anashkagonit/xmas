import { FC } from 'react'

import Layout from '@/layout/Layout'

import Heading from '@/ui/heading/Heading'

import Breadcrumbs from './product-breadcrumbs/Breadcrumbs'
import { IProductDetails } from '@/../pages/product/[slug]'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading className='text-center'>{product.name}</Heading>
			<div>
				<Breadcrumbs product={product} />
			</div>
		</Layout>
	)
}

export default ProductDetails
