import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "data",
    initialState:{
        data:[]
    },

    reducers:{
        AddItem(state, action){
           state.data.push(action.payload)
        },

        DeletItem(state , action){
           state.data = state.data.filter(item => item.product.id !== action.payload.Itenid)
        }
    }
})


export const {AddItem, DeletItem} = cartSlice.actions
export default cartSlice.reducer