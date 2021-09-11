import { User } from "../Constants/Userconstants";

export const initialState ={
    user:[]
}

export const userReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case User.SET_USER:
            return {...state, user:payload};
        default:
            return state;
    }
};

export const selectedreducer = (state={},{type,payload})=>{
    console.log(payload);
   switch(type){
       case User.SELECTED_USER:
           return {
               ...state,payload
           };
       default:
           return state;
   }
};

