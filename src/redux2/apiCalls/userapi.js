
import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess,logOut } from "../Slices/userSlice2"


export const login =async(dispatch,user)=>{
    dispatch(loginStart());    
    try{
        const res = await publicRequest.post('Auth/Login',user);
        if(res.status===200)
        dispatch(loginSuccess(res.data));
        else{
            dispatch(loginFailure());
        }
    }catch(err){
        dispatch(loginFailure());
    }
}
export const LogOut=async(dispatch)=>{
    dispatch(logOut());
}