import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './CartSlice'

const store = configureStore({
  reducer: { cart: cartReducer },
})

export type RootState = ReturnType<typeof store.getState>

export default store
