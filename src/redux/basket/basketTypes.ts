import { IProduct, Status } from '../../types/types'

export interface ICatalogState {
	status: Status
	basketItems: IProduct[]
	totalAmount: number
	totalQuantity: number
}
