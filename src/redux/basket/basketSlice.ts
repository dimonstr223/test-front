import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, Status } from '../../types/types'
import { ICatalogState } from './basketTypes'

const initialState: ICatalogState = {
	status: Status.LOADING,
	basketItems: [],
	totalAmount: 0,
	totalQuantity: 0,
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setBasketItem: (state, action: PayloadAction<IProduct>) => {
			const itemIndex = state.basketItems.findIndex(
				item => item.ID === action.payload.ID
			)
			if (itemIndex >= 0) {
				//@ts-ignore
				state.basketItems[itemIndex].QUANTITY += 1
			} else {
				const tempItem = { ...action.payload, QUANTITY: 1 }
				state.basketItems = [tempItem, ...state.basketItems]
			}
		},
		increaseQuantity: (state, action: PayloadAction<any>) => {
			const itemIndex = state.basketItems.findIndex(
				item => item.ID === action.payload.ID
			)

			const item = {
				...action.payload,
				TOTALPRICE: state.basketItems[itemIndex].PRICE,
			}
			if (item.QUANTITY) {
				item.QUANTITY = item.QUANTITY + 1
			}
			state.basketItems[itemIndex] = item
		},
		decreaseQuantity: (state, action: PayloadAction<IProduct>) => {
			const itemIndex = state.basketItems.findIndex(
				item => item.ID === action.payload.ID
			)
			if (itemIndex >= 0) {
				//@ts-ignore
				state.basketItems[itemIndex].QUANTITY -= 1
			}
		},
		removeBasketItem: (state, action: PayloadAction<string>) => {
			state.basketItems = state.basketItems.filter(
				item => item.ID !== action.payload
			)
		},
		setTotals: state => {
			if (state.basketItems) {
				const { total, quantity } = state.basketItems.reduce(
					(acc: any, item) => {
						const { PRICE, QUANTITY } = item

						if (PRICE && QUANTITY) {
							const totalItemPrice = Number(PRICE) * QUANTITY
							acc.total += totalItemPrice
							acc.quantity += QUANTITY
							return acc
						}
					},
					{
						total: 0,
						quantity: 0,
					}
				)
				state.totalQuantity = quantity
				state.totalAmount = total.toFixed(2)
			}
		},
	},
})
export const {
	setBasketItem,
	removeBasketItem,
	increaseQuantity,
	decreaseQuantity,
	setTotals,
} = basketSlice.actions

export default basketSlice.reducer
