
import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";
const initialState = [
    { id:1, title:"Learning redux.." ,content :"first post is about...."},
    { id:2, title:"Learning redux.." ,content :"second post is about...."},
];


export const postSlice = createSlice({
    name:"posts",  //state name
    initialState,
    reducers :{
        postAdded:{
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(title,content,userId){    // I have customize this prepare function which is inbuild in redux , we cannot rename this function.
                return {
                    payload : {
                        id : nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
    }
    }
}); 

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;


/*
Note :
The prepare function is used to:
Build the action payload before it reaches the reducer.
Automatically run this function when postAdded() is called.
*/