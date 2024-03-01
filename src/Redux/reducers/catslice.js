import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "no category",
}

const categoryslice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        catdatatransfer: (state, action) => {
            // console.log(action)
            console.log(action.payload)
            state.value = action.payload
        }
    }
})

export const { catdatatransfer } = categoryslice.actions

export default categoryslice.reducer