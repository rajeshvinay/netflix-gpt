import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        toggleGPT:false
    },
    reducers:{
        toggleGPTAction:(state,action)=>{
            state.toggleGPT = !state.toggleGPT
        }
    }
})

export const  {toggleGPTAction} = gptSlice.actions

export default gptSlice.reducer;