import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlics'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice'

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer
    }
})

export default appStore;