import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'

import { useCart } from '@/hooks/useCart'

import { formatToCurrence } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart()

	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				onClick={() => setIsOpen(!isOpen)}
				ref={btnRef}
			>
				<span className={styles.badge}>{cart.length}</span>
				<span className={styles.tetx}>MY BASKET </span>
			</button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My Basket</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.length ? (
								cart.map(item => <CartItem item={item} key={item.id} />)
							) : (
								<div className={styles.empty}>Basket is empty </div>
							)}
						</div>
					</DrawerBody>

					<DrawerFooter
						justifyContent='space-between'
						borderTopWidth={1}
						borderTopColor={'#F7F4F0'}
					>
						<div className={styles.footer}>
							<div>Total:</div>
							<div>{formatToCurrence(total)}</div>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
