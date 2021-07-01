import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { navOpen: false },
  reducers: {
    toggleNav: state => {
      state.navOpen = !state.navOpen
    },
    closeNav: state => {
      state.navOpen = false
    },
  },
})

export const isNavOpen = (state: RootState): boolean => state.ui.navOpen

export const { toggleNav, closeNav } = uiSlice.actions

export default uiSlice.reducer
