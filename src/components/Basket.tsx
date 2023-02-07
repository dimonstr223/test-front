import React, { FC, useEffect } from 'react'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'

import BasketItem from './BasketItem'
import { setTotals } from '../redux/basket/basketSlice'

import style from '../scss/components/Basket.module.scss'

const Basket: FC = () => {
	const dispatch = useAppDispatch()
	const { basketItems, totalAmount } = useAppSelector(state => state.basket)

	useEffect(() => {
		dispatch(setTotals())
	}, [basketItems])

	return (
		<div className={style.basket}>
			<h2 className={style.title}>Козина</h2>
			<ul className={style.params}>
				<li className={style.param}>Наименование</li>
				<li className={style.param}>количество</li>
				<li className={style.param}>Цена</li>
				<li className={style.param}>Сумма</li>
			</ul>
			<div className={style.basket__items}>
				{basketItems.map(item => (
					<BasketItem key={item.ID} item={item} />
				))}
			</div>
			<ul className={style.average}>
				<li className={style.title}>Итого</li>
				<li className={style.title}>{totalAmount} руб</li>
			</ul>
		</div>
	)
}

export default Basket
