import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {useMemo} from 'react'

import { cartSlice } from '@/store/slice' 

const rootAction = {
	...cartSlice.actions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
