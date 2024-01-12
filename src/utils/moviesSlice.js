import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPolularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPolularMovies,addTopRatedMovies,addUpComingMovies} = movieSlice.actions

export default movieSlice.reducer