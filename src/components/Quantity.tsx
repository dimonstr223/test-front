import React, { FC } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'

import { decreaseQuantity, setBasketItem } from '../redux/basket/basketSlice'
import { IProduct } from '../types/types'

import style from '../scss/components/Quantity.module.scss'

interface IQuantityProps {
	item: IProduct
}
const Quantity: FC<IQuantityProps> = ({ item }) => {
	const dispatch = useAppDispatch()

	const onIncreaseClick = () => {
		dispatch(setBasketItem(item))
	}
	const onDencreaseClick = () => {
		dispatch(decreaseQuantity(item))
	}
	return (
		<div className={style.quantity}>
			<button
				className={style.decrease}
				onClick={onDencreaseClick}
				disabled={item.QUANTITY === 1}
			>
				-
			</button>
			<input
				className={style.quantityInput}
				value={item.QUANTITY}
				disabled={true}
				type='number'
				min={1}
			/>
			<button className={style.increase} onClick={onIncreaseClick}>
				+
			</button>
		</div>
	)
}

export default Quantity
