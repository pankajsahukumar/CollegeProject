import {User} from '../Constants/Userconstants'
export const setUser =(data)=>{
    return {
        type:User.SET_USER,
        payload:data
    };
};
export const selectedUser =(id)=>{
    return {
        type:User.SELECTED_USER,
        payload:id
    };
};