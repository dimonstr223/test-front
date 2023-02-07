import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '../../types/types'
import axios from '../../api/axios'

export const fetchCatalog = createAsyncThunk<IProduct[]>(
	'catalog/fetchCatalog',
	async () => {
		const { data } = await axios.get<IProduct[]>('/')
		return data
	}
)

export const fetchFilterCatalog = createAsyncThunk<IProduct[], string>(
	'catalog/fetchFilterCatalof',
	async param => {
		const { data } = await axios.get<IProduct[]>(`?type=${param}`)
		return data
	}
)
