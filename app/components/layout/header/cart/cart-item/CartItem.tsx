import Image from 'next/image'
import { FC } from 'react'

import { formatToCurrence } from '@/utils/format-to-currency'

import styles from '../Cart.module.scss'

import CartActions from './cart-actions/CartActions'
import { ICartItem } from '@/types/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				alt={item.product.name}
				width={100}
				height={100}
			/>
			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className='flex justify-between align-center'>
					<div className={styles.price}>
						{formatToCurrence(item.product.price)}
					</div>
					<div className={styles.variation}>{item.size}</div>
				</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
