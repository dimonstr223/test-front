import React, { useEffect, useState } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'

import CatalogItem from './CatalogItem'
import Filter from './Filter'
import { fetchCatalog } from '../redux/catalog/catalogAsyncThunks'

import style from '../scss/components/Catalog.module.scss'

const Catalog = () => {
	const dispatch = useAppDispatch()
	const { catalog } = useAppSelector(state => state.catalog)
	const [isGrid, setIsGrid] = useState(true)

	useEffect(() => {
		dispatch(fetchCatalog())
	}, [])

	const onSurfaceClick = () => {
		setIsGrid(!isGrid)
	}

	return (
		<div className={style.catalog}>
			<div className={style.catalog__top}>
				<h1 className={style.title}>Каталог</h1>
				{isGrid ? (
					<button className={style.catalog__surface} onClick={onSurfaceClick}>
						Список
					</button>
				) : (
					<button className={style.catalog__surface} onClick={onSurfaceClick}>
						Плитка
					</button>
				)}
				<Filter />
			</div>
			<div
				className={
					isGrid ? style.catalog__items_grid : style.catalog__items_list
				}
			>
				{catalog.map(item => (
					<CatalogItem key={item.ID} item={item} />
				))}
			</div>
		</div>
	)
}

export default Catalog
