import cn from 'clsx'
import { FC, useState } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

import { useActions } from '@/hooks/useActions'

import styles from '../Carousel.module.scss'
import { useCarousel } from '../useCarousel'

import CarouselButton from './CarouselButton'
import CarouselVariation from './CarouselVariation'
import CarouselNavigation from './carousel-navigation/CarouselNavigation'
import { ICarouselItem } from './carousel.interface'

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index === selectedItemIndex

	const truncate = (input: string) =>
		input?.length > 35 ? `${input.substring(0, 31)}...` : input

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
			onClick={() => selectSlide(index)}
			// ariaLable='Select Item'
			// role='button'
		>
			<CarouselNavigation product={product} isActive={isActive} />

			<div className={styles.heading}>{truncate(product.name)}</div>

			{isActive ? (
				<>
					<CarouselVariation
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
					<CarouselButton product={product} selectedSize={selectedSize} />
				</>
			) : (
				<div className={styles.description}>{product.description}</div>
			)}
		</div>
	)
}

export default CarouselItem
