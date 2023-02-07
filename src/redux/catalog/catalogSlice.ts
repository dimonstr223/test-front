import { ICatalogState } from './catalogTypes'
import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../types/types'
import { fetchCatalog, fetchFilterCatalog } from './catalogAsyncThunks'

const initialState: ICatalogState = {
	status: Status.LOADING,
	catalog: [],
}

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCatalog.pending, (state, action) => {
				state.status = Status.LOADING
				state.catalog = []
			})
			.addCase(fetchCatalog.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.catalog = action.payload
			})
			.addCase(fetchCatalog.rejected, (state, action) => {
				state.status = Status.ERROR
				state.catalog = []
			})
			.addCase(fetchFilterCatalog.pending, (state, action) => {
				state.status = Status.LOADING
				state.catalog = []
			})
			.addCase(fetchFilterCatalog.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.catalog = action.payload
			})
			.addCase(fetchFilterCatalog.rejected, (state, action) => {
				state.status = Status.ERROR
				state.catalog = []
			})
	},
})

export default catalogSlice.reducer
