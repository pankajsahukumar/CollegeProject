import axios from "axios";
const BASE_URL ='http://localhost:8000/';
export const publicRequest =axios.create({
        baseURL:BASE_URL,
    });
const token=JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).token;
export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{
        token:"Bearer "+token,
    }
});