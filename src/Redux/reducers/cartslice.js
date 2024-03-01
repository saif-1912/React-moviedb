import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addIncart: () => {
            console.log('Add in cart function called')
        },
        removefromcart: () => {
            console.log('remove from cart function called')
        }
    }
})

export const { addIncart, removefromcart} = cartslice.actions

export default cartslice.reducer