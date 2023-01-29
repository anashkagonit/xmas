import cn from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
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
		<motion.div
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.15 } : {}}
			transition={{ duration: 0.7, type: 'spring' }}
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
		>
			<CarouselNavigation
				product={product}
				isActive={isActive}
				onSelectSlide={() => selectSlide(index)}
			/>

			<button className={styles.heading} onClick={() => selectSlide(index)}>
				<span>{truncate(product.name)}</span>
			</button>

			{isActive ? (
				<>
					<CarouselVariation
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
					<CarouselButton product={product} selectedSize={selectedSize} />
					<Link href={`/product/${product.slug}`} className={styles.link}>
						More information
					</Link>
				</>
			) : (
				<div className={styles.description}>{product.description}</div>
			)}
		</motion.div>
	)
}

export default CarouselItem
