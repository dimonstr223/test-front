export interface IProduct {
	ID: string
	NAME: string
	SORT: string
	TYPE: string
	COLOR_CODE?: string
	COLOR_SAMPLE?: string
	COVER_SIDE?: string
	WIDTH?: string
	PRICE?: '405.00'
	WEIGHT?: '4.2'
	LENGTH?: '3000'
	STOCK?: string
	PICTURE: string
	QUANTITY?: number
	TOTALPRICE?: number
	SKU?: {}
}

export enum Status {
	LOADING = 'LOADING',
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR',
}

export enum FilterParams {
	ALL = 'all',
	FENCE = 'fence',
	PLUG = 'plug',
	RAIL = 'rail',
	FIX = 'fix',
	POST = 'post',
}
