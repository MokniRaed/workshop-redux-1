import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState:{
   age:25,
   name:'nadhem'
  },
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , deleteCounter } = userSlice.actions

export default userSlice.reducer