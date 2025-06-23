
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
// const initialState = [
//     { 
//         id:1, 
//         title:"Learning redux.." ,
//         content :"first post is about....",
//         date:sub(new Date(),{minutes : 10}).toISOString(),
//         reactions :{
//             thumbsUp : 0,
//             wow:0,
//             heart:0,
//             rocket:0,
//             coffee:0
//         }
//     },
//     { 
//         id:2, 
//         title:"Learning redux.." ,
//         content :"second post is about....",
//         date:sub(new Date(),{minutes:5}).toISOString(),
//          reactions :{
//             thumbsUp : 0,
//             wow:0,
//             heart:0,
//             rocket:0,
//             coffee:0
//         }
//     },
// ];

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts : [],
    status : "idle", //'idle', | 'loading' | 'succeeded' | 'failed'
    error : null
}


//get all post
export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
});

//add new post 
export const addNewPost = createAsyncThunk("posts/addNewPost", async (initialPost) => {
    const response = await axios.post(POSTS_URL,initialPost);
    return response.data;
});


export const postSlice = createSlice({
    name:"posts",  //state name
    initialState,
    reducers :{
        postAdded:{
            reducer(state,action){
                state.posts.push(action.payload);
            },
            prepare(title,body,userId){    // I have customize this prepare function which is inbuild in redux , we cannot rename this function.
                return {
                    payload : {
                        id : nanoid(),
                        title,
                        body,
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
        const existingPost = state.posts.find(post => post.id === postId); //find the post which user has clicked
        if(existingPost){
            existingPost.reactions[reaction]++  //increase the particular emoji count 
        }
    }
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        const loadedPost = action.payload.map(post => {
            post.date = sub(new Date(),{minutes : min++}).toISOString(),
            post.reactions = {
                            thumbsUp : 0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
            }

            return post;
        })

        //add any fetch post to the array
        //state.posts = state.posts.concat(loadedPost);  //create a new array
        state.posts = action.payload;

      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled,(state, action)=>{
            action.payload.userId = Number(action.payload.userId);
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                 thumbsUp : 0,
                 wow:0,
                 heart:0,
                 rocket:0,
                 coffee:0
            }
            console.log(action.payload);
            state.posts.push(action.payload);
            
      });
  }
}); 

export const selectAllPosts = (state) => state.posts.posts;  //name of state and the key of initialstate
export const getPostsStatus = (state) => state.posts.status; 
export const getPostsError = (state) => state.posts.error;  
export const selectPostById = (state,postId) => 
    state.posts.posts.find(post => post.id === postId);


export const { postAdded,reactionAdded } = postSlice.actions;

export default postSlice.reducer;


/*
Note :
The prepare function is used to:
Build the action payload before it reaches the reducer.
Automatically run this function when postAdded() is called.
*/