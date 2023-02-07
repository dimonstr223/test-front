import React, { FC, useRef, useState } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'

import { setBasketItem } from '../redux/basket/basketSlice'

import { IProduct } from '../types/types'

import style from '../scss/components/CatalogItem.module.scss'

interface ICatalogItemProps {
	item: IProduct
}
const CatalogItem: FC<ICatalogItemProps> = ({ item }) => {
	const dispatch = useAppDispatch()
	const optionRef = useRef<HTMLSelectElement>(null)

	const onBuyClick = () => {
		if (item.SKU) {
			dispatch(
				setBasketItem(
					//@ts-ignore
					Object.values(item.SKU).find(
						(item: any) => item.ID === optionRef.current?.value
					)
				)
			)
		} else {
			dispatch(setBasketItem(item))
		}
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
				<select ref={optionRef} className={style.skuItems}>
					{Object.values(item.SKU).map((item: any) => (
						<option key={item.ID} value={item.ID}>
							{item.NAME}
						</option>
					))}
				</select>
			) : (
				<div className={style.price}>{item.PRICE} руб.</div>
			)}
			<button className={style.buyButton} onClick={onBuyClick}>
				Добавить
			</button>
		</div>
	)
}

export default CatalogItem
