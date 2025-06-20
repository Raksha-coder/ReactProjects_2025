
import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";
const initialState = [
    { 
        id:1, 
        title:"Learning redux.." ,
        content :"first post is about....",
        date:sub(new Date(),{minutes : 10}).toISOString(),
        reactions :{
            thumbsUp : 0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
    { 
        id:2, 
        title:"Learning redux.." ,
        content :"second post is about....",
        date:sub(new Date(),{minutes:5}).toISOString(),
         reactions :{
            thumbsUp : 0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
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
                        userId,
                        date : new Date().toISOString(),
                         reactions :{
                            thumbsUp : 0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
    },
    reactionAdded(state,action) {
        const {postId,reaction} = action.payload;
        const existingPost = state.find(post => post.id === postId); //find the post which user has clicked
        if(existingPost){
            existingPost.reactions[reaction]++  //increase the particular emoji count 
        }
    }
    }
}); 

export const selectAllPosts = (state) => state.posts;

export const { postAdded,reactionAdded } = postSlice.actions;

export default postSlice.reducer;


/*
Note :
The prepare function is used to:
Build the action payload before it reaches the reducer.
Automatically run this function when postAdded() is called.
*/