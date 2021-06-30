import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import CartItem from 'models/CartItem'
import { RootState } from 'store'

const initialState: {
  items: CartItem[]
  totalQuantity: number
  grandTotal: number
} = {
  items: [],
  totalQuantity: 0,
  grandTotal: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const addedItem = action.payload
      const existingItem = state.items.find(item => item.id === addedItem.id)
      state.totalQuantity += addedItem.quantity
      if (!existingItem) {
        state.items.push(addedItem)
      } else {
        existingItem.quantity += addedItem.quantity
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity++
      state.items = state.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      state.totalQuantity--
      state.items = state.items
        .map(item => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
        .filter(item => item.quantity > 0)
    },
    clearCart: () => {
      return initialState
    },
  },
})

export const cartItems = (state: RootState): CartItem[] => state.cart.items

export const totalAmount = (state: RootState): number => {
  const total = state.cart.items.reduce((cartTotal, currentItem) => {
    const { price, quantity } = currentItem
    cartTotal += price * quantity
    return cartTotal
  }, 0)

  return parseFloat(total.toFixed(2))
}

export const totalQuantity = (state: RootState): number =>
  state.cart.totalQuantity

export const { addItemToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
