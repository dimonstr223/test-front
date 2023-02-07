import { IProduct, Status } from '../../types/types'

export interface ICatalogState {
	status: Status
	catalog: IProduct[]
}
