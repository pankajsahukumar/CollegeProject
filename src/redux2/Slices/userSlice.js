import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import axios from "axios";
export const loginuser = createAsyncThunk('user/login',async(user)=>{
    const res= await axios.post('https://fakestoreapi.com/auth/login',user);
    const newdata = {...user,...res.data};

    return res.data; 
});
 const userSlice =createSlice({
    name:"user",
    initialState:{
        userInfo:null,
        pending:null,
        error:false,
    },
    reducers:{
      update:(state,action)=>{
       state=action.payload;
       console.log("update");
      },
      remove:(state)=>{
          console.log("this is remove");
          state.email="";
          state.name="none";
      }
    },
    extraReducers:{
        [loginuser.pending]:(state)=>{
        state.pending=true;
        },
        [loginuser.fulfilled]:(state,action)=>{
            state.pending=false;
            state.userInfo=action.payload;
            },
        [loginuser.rejected]:(state)=>{
            state.pending=null;
            state.error=true;
        },
    }
});

export const {update,remove} = userSlice.actions;
export default userSlice.reducer;