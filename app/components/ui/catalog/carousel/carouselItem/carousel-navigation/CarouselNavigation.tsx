import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'

import { ICarouselNavigation } from '../carousel.interface'

import styles from './CarouselNavigation.module.scss'

const CarouselNavigation: FC<ICarouselNavigation> = ({ product, isActive }) => {
	const { prevSlide, nextSlide } = useActions()

	return (
		<div className={styles.navigation}>
			{isActive && (
				<div className={styles.arrows}>
					<button onClick={() => prevSlide()} className={styles.arrow}>
						<ChevronLeftIcon fontSize={46} />
					</button>
					<button onClick={() => nextSlide()} className={styles.arrow}>
						<ChevronRightIcon fontSize={46} />
					</button>
				</div>
			)}
			<Image
				className={styles.images}
				alt={product.name}
				src={product.images[0]}
				width={315}
				height={315}
				draggable={false}
			/>
		</div>
	)
}

export default CarouselNavigation
