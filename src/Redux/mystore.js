import { configureStore } from '@reduxjs/toolkit'
import cartreducer from './reducers/cartslice'
import categoryreducer from './reducers/catslice'

export const mystore = configureStore({
    reducer: {
        cart:cartreducer,
        category:categoryreducer
    },
  })