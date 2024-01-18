import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        toggleGPT : false,
        movieNames : null,
        movieResults : null
    },
    reducers:{
        toggleGPTAction:(state,action)=>{
            state.toggleGPT = !state.toggleGPT
        },
        addGPTMovieResponse : (state,action) =>{
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const  {toggleGPTAction,addGPTMovieResponse} = gptSlice.actions

export default gptSlice.reducer;