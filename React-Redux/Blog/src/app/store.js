import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./../features/counter/counterSlice";
export const globalStore = configureStore({
    reducer : {
        counter : countReducer //state
    }
})