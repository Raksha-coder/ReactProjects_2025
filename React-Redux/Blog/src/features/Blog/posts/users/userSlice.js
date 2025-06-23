import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get(USERS_URL);
    return [...response.data]
})


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder
            .addCase(fetchUsers.fulfilled,(state,action) => {
                return  action.payload;
            })
    }
})


export const selectAllUsers = (state) => state.user;

export default userSlice.reducer;
