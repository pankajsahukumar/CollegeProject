import {createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
export const loginuser = createAsyncThunk('user/login',async(user)=>{
    const res= await axios.post('https://fakestoreapi.com/auth/login',user);
    const newdata = {...user,...res.data};
    localStorage.setItem('token',res.data.token);
    return res.data; 
});
 const userSlice =createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        pending:null,
        error:false,
        islogin:false,
    },
    reducers:{
      loginStart:(state)=>{
          state.pending=true;
      },
      loginSuccess:(state,action)=>{
          state.pending=false;
          state.currentUser=action.payload;
          state.islogin=true;
      },
      loginFailure:(state)=>{
      state.pending=false;
      state.error=true;
      },
    },
});

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;