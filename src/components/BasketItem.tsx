import React, { FC } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'

import Quantity from './Quantity'
import { removeBasketItem } from '../redux/basket/basketSlice'
import calculatePriceTotal from '../utils/calculatePriceTotal'

import { IProduct } from '../types/types'

import style from '../scss/components/BasketItem.module.scss'

interface IBasketItemProps {
	item: IProduct
}
const BasketItem: FC<IBasketItemProps> = ({ item }) => {
	const dispatch = useAppDispatch()

	const onRemoveClick = () => {
		dispatch(removeBasketItem(item.ID))
	}
	return (
		<div className={style.basketItem}>
			<h4 className={style.name}>{item.NAME}</h4>
			<Quantity item={item} />
			<div className={style.price}>{item.PRICE} руб.</div>
			<div className={style.priceSum}>
				{item.QUANTITY &&
					calculatePriceTotal(Number(item.PRICE), item.QUANTITY)}{' '}
				руб.
			</div>
			<button className={style.remove} onClick={onRemoveClick}>
				remove
			</button>
		</div>
	)
}

export default BasketItem
