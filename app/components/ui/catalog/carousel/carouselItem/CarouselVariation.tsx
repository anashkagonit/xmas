import { FC } from 'react'

import styles from '../Carousel.module.scss'

const SIZES = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

const CarouselVariation: FC = () => {
	return (
		<div className={styles.variations}>
			{SIZES.map(size => (
				<button key={size}>{size}</button>
			))}
		</div>
	)
}

export default CarouselVariation
