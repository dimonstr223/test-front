import React, { FC, useState } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'

import { setBasketItem } from '../redux/basket/basketSlice'

import { IProduct } from '../types/types'

import style from '../scss/components/CatalogItem.module.scss'

interface ICatalogItemProps {
	item: IProduct
}
const CatalogItem: FC<ICatalogItemProps> = ({ item }) => {
	const dispatch = useAppDispatch()
	const [isOpen, setIsOpen] = useState(false)

	const onShowMore = () => {
		setIsOpen(!isOpen)
	}

	const onBuyClick = () => {
		dispatch(setBasketItem(item))
	}
	return (
		<div className={style.catalogItem}>
			<div className={style.picture}>{item.PICTURE}</div>
			<h3 className={style.name}>{item.NAME}</h3>
			{item.SKU && (
				<div className={style.chars}>
					<div>
						Длина:
						{
							//@ts-ignore
							Object.values(item.SKU)[0].LENGTH
						}
					</div>
					<div>
						Толщина:
						{
							//@ts-ignore
							Object.values(item.SKU)[0].WEIGHT
						}
					</div>
				</div>
			)}
			{item.SKU ? (
				<button className={style.buyButton} onClick={onShowMore}>
					Показать больше
				</button>
			) : (
				<>
					<div className={style.price}>{item.PRICE} руб.</div>
					<button className={style.buyButton} onClick={onBuyClick}>
						Добавить
					</button>
				</>
			)}
			{item.SKU && isOpen && (
				<div className={style.skuItems}>
					{Object.values(item.SKU).map((item: any) => (
						<div className={style.skuItem}>
							<h4>{item.NAME}</h4>
							<div>{item.PRICE} руб.</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default CatalogItem
