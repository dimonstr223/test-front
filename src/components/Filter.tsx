import React from 'react'
import useAppDispatch from '../hooks/useAppDispatch'

import { fetchFilterCatalog } from '../redux/catalog/catalogAsyncThunks'
import { FilterParams } from '../types/types'

import style from '../scss/components/Filter.module.scss'

const Filter = () => {
	const dispatch = useAppDispatch()

	const handleFilter = async (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(fetchFilterCatalog(event.target.value))
	}

	return (
		<div className={style.filterArea}>
			<select name='' onChange={handleFilter}>
				<option value={FilterParams.ALL}>Все</option>
				<option value={FilterParams.FENCE}>Fence</option>
				<option value={FilterParams.PLUG}>Plug</option>
				<option value={FilterParams.RAIL}>Rail</option>
				<option value={FilterParams.FIX}>Fix</option>
				<option value={FilterParams.POST}>Post</option>
			</select>
		</div>
	)
}

export default Filter
