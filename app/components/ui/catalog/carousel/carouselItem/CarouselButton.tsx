import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/config/color.config'

import { useActions } from '@/hooks/useActions'

import { IProduct } from '@/types/product.interface'

const CarouselButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart } = useActions()
	return (
		<div className='text-center'>
			<Button
				onClick={() =>
					addToCart({
						product,
						quantity: 1
					})
				}
				className='tracking-widest'
				color={COLORS.green}
				borderRadius={20}
				fontWeight={500}
				textTransform='uppercase'
				fontSize={12}
				marginTop={10}
			>
				Add to basket
			</Button>
		</div>
	)
}

export default CarouselButton
