import { FC } from 'react'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	return (
		<div className={styles['wrapper-cart']}>
			<div className={styles.heading}>
				<span className={styles.badge}>1</span>
				<span className={styles.tetx}>MY BASKET </span>
			</div>

			<div className={styles.cart}>
				<CartItem />
			</div>
		</div>
	)
}

export default Cart
