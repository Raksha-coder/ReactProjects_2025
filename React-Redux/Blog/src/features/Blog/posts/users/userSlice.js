import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:0, name:"Raksha Jaiswal"},
    {id:1, name:"Sakshi Vaswani"},
    {id:2, name:"Rushikesh Chaudhary"},
];


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    }
})


export const selectAllUsers = (state) => state.user;

export default userSlice.reducer;
