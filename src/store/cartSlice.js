import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartReducer",
    initialState:{
        data:[]
    },

    reducers:{
        AddItem(state, action){
           state.data.push(action.payload)
        },

        DeletItem(state, action){
           console.log(state)
        }
    }
})


export const {AddItem, DeletItem} = cartSlice.actions
export default cartSlice.reducer