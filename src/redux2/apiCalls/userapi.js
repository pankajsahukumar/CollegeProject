
import { toast } from "react-toastify";
import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess,logOut } from "../Slices/userSlice2"


export const login =async(dispatch,user)=>{
    dispatch(loginStart());    
    try{
        const res = await publicRequest.post('Auth/Login',user);
        if(res.status===200){
        dispatch(loginSuccess(res.data));
        toast.success('successfully loggedIn')
        }
        else{
            toast.error('Invalid credencials');
            dispatch(loginFailure());
        }
    }catch(err){
        toast.error('Error occured');
        dispatch(loginFailure());
    }
}
export const LogOut=async(dispatch)=>{
    dispatch(logOut());
}