import { createSlice } from "@reduxjs/toolkit";

//Defines the default state for this slice.
const initialState = {
    count : 0
}

export const counterSlice = createSlice({  
    name:"counter",
    initialState,
    reducers:{  
        //(functions that modify state)
        //The actions (automatically generated from reducers)

        //below are actions methods.
        increment : (state) => {
             state.count += 1;
        },
        decrement : (state) => {
             state.count -= 1;
        },
        reset :(state) =>{
            state.count = 0;
        },
        increaseByAmount :(state,action) =>{  //action itself is increaseByAmount.
            state.count += action.payload;
        }
        //when dispatch happen with data , that data store in action.payload means increaseByAmount.payload.
    } 
})

export const {increment,decrement,reset,increaseByAmount} = counterSlice.actions;
export default counterSlice.reducer; //based on action how my state is going to change.


/*Note :
Redux Toolkit will:
Automatically generate actions like increment() and decrement()
Automatically create a reducer function that responds to those actions
Allow you to import and use:
counterSlice.reducer → to be added to the Redux store
counterSlice.actions.increment() → to dispatch from components

*/