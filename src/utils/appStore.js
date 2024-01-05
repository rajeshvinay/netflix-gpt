import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlics'

const appStore = configureStore({
    reducer:{
        user:userReducer
    }
})

export default appStore;