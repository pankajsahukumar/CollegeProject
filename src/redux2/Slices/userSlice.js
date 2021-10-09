import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";
export const loginuser = createAsyncThunk('login',async(user)=>{
    const res= await publicRequest.post('Auth/Login',user);
    return res.data;
});
 const userSlice =createSlice({
    name:"user",
    initialState:{
        userInfo:null,
        pending:null,
        error:false,
        islogin:false,
    },
    reducers:{
      update:(state,action)=>{
       state=action.payload;
      },
      remove:(state)=>{
          console.log("this is remove");
      }
    },
    extraReducers:{
        [loginuser.pending]:(state)=>{
        state.pending=true;
        },
        [loginuser.fulfilled]:(state,action)=>{
            state.pending=false;
            state.userInfo=action.payload;
            state.islogin=true;
            },
        [loginuser.rejected]:(state)=>{
            state.pending=null;
            state.error=true;
        },
    }
});

export const {update,remove} = userSlice.actions;
export default userSlice.reducer;