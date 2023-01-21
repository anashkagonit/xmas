import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

import styles from '../Carousel.module.scss'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

interface ICarouselVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}

const CarouselVariation: FC<ICarouselVariations> = ({
	selectedSize,
	setSelectedSize
}) => {
	return (
		<div className={styles.variations}>
			{SIZES.map(size => (
				<button
					key={size}
					className={cn({
						[styles.active]: selectedSize === size
					})}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	)
}

export default CarouselVariation
