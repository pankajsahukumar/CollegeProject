import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const  createPost=createAsyncThunk('post/create',async()=>{
    const data =fetch('https://fakestoreapi.com/products')
    .then(res=>res.json());
    return data;
});
const postSlice =createSlice({
    name:"post",
    initialState:{
        postInfo:[],
        post:{},
        pending:null,
        error:false,
    },
    reducers:{update:(state,action)=>{
     state.postInfo="pankaj";
    }},
    extraReducers:{
        [createPost.pending]:(state)=>{
            state.pending=true;
        },
        [createPost.fulfilled]:(state,action)=>{
            state.postInfo=action.payload;
            state.error=false;
        },
        [createPost.rejected]:(state)=>{
            state.pending=null;
            state.error=true;
        },
    }
});
export const {update} = postSlice.actions;
export default postSlice.reducer;