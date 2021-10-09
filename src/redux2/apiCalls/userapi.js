import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "../Slices/userSlice2"

export const login =async(dispatch,user)=>{
    dispatch(loginStart());    
    try{
        const res = await publicRequest.post('Auth/Login',user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}