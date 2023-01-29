import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'

import { IProductDetails } from '@/../pages/product/[slug]'

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
	return (
		<Breadcrumb display='flex' justifyContent='end' marginTop={8}>
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} href='/'>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink>{product.name}</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	)
}

export default Breadcrumbs
