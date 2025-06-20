import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./../features/counter/counterSlice";
import postReducer from "./../features/Blog/posts/postSlice";
import userReducer from "./../features/Blog/posts/users/userSlice";
export const globalStore = configureStore({
    reducer : {
        counter : countReducer, //state.counter
        posts : postReducer , // this becomes state.posts in the Redux store
        user:userReducer
    }
})