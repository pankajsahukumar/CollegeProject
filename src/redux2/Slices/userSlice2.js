import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

 const userSlice =createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        pending:null,
        error:null,
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
      state.islogin=false;
      },
      logOut:(state)=>{
          state.currentUser=null;
          state.islogin=false;
          localStorage.removeItem('persist:root');
      }
    },
});

export const {loginStart,loginSuccess,loginFailure,logOut} = userSlice.actions;
export default userSlice.reducer;