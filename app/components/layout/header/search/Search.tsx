import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FC, useState } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState(' ')
	console.log(searchTerm, setSearchTerm)

	return (
		<div className={styles.search}>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children={<SearchIcon color='gray.300' />}
				/>
				<Input
					variant='outline'
					type='search'
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
					placeholder='Search'
				/>
			</InputGroup>
		</div>
	)
}

export default Search
