import { Button } from '@chakra-ui/react'
import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'

import styles from '../Carousel.module.scss'

import CarouselButton from './CarouselButton'
import CarouselVariation from './CarouselVariation'
import { IProduct } from '@/types/product.interface'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const isActive = product.id == 2

	const truncate = (input: string) =>
		isActive
			? input
			: input?.length > 35
			? `${input.substring(0, 31)}...`
			: input

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
		>
			<Image
				className={styles.images}
				alt={product.name}
				src={product.images[0]}
				width={315}
				height={315}
			/>

			<div className={styles.heading}>{truncate(product.name)}</div>

			{isActive ? (
				<>
					<CarouselVariation />
					<CarouselButton product={product} />
				</>
			) : (
				<div className={styles.description}>{product.description}</div>
			)}
		</div>
	)
}

export default CarouselItem
