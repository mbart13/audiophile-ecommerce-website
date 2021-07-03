import { configureStore } from '@reduxjs/toolkit'
import { saveCart } from 'utils/localStorage'

import cartReducer from './CartSlice'
import uiReducer from './UISlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
})

store.subscribe(() => {
  saveCart(store.getState().cart)
})

export type RootState = ReturnType<typeof store.getState>

export default store
