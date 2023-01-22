import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className
}) => {
	return (
		<div
			className={cn('font-black text-green text-6xl w-8/12 ml-auto', className)}
		>
			<h1 className='leading-[4.5rem]'>{children}</h1>
		</div>
	)
}

export default Heading
