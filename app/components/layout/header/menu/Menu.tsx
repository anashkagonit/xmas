import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import style from './Menu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const Menu: FC = () => {
	return (
		<div className={style.menu}>
			<Link href='/'>
				<Image src='/images/logo.png' alt='logo' width={100} height={100} />
			</Link>

			<nav>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}
export default Menu
