import { configureStore } from "@reduxjs/toolkit";
import userreducer from './Slices/userSlice';
import postreducer from './Slices/postSlice';
export default configureStore({
    reducer:{
        user:userreducer,
        post:postreducer,
    }
});