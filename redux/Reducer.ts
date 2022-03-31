import { createSlice, PayloadAction } from '@reduxjs/toolkit'




export interface CounterState {

  products: any
  netprice: number
  basket: number



}

const initialState: CounterState = {

  products: [],
  netprice: 0,
  basket: 0,

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newItem = action.payload.product
      const existingItem = state.products.find((item: { id: number}):boolean => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.products.push({ ...newItem, quantity: 1 })
      }
      state.basket += 1
      state.netprice += action.payload.price
    },
    decrement: (state, action) => {
      state.basket -= 1
      state.netprice -= action.payload.price
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer

