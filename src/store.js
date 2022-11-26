import {configureStore, createSlice} from '@reduxjs/toolkit'
import cartSlice from './components/Redux/Cart/cartSlice'

export const store =configureStore({
    reducer:{
             cartSlice:cartSlice
    }
})