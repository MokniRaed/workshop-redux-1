import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0,
    name:'mohamed',
    age:25
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    deleteCounter:(state) =>{
      state.value = 0
    },
    changeName:(state)=>{
        state.name = 'raed'
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , deleteCounter,changeName } = counterSlice.actions

export default counterSlice.reducer