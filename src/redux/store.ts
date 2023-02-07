import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './basket/basketSlice'
import catalogSlice from './catalog/catalogSlice'

export const store = configureStore({
	reducer: { catalog: catalogSlice, basket: basketSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
