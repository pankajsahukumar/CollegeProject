import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux';
import {createPost} from '../redux2/Slices/postSlice';
import Post from './Post';
const useStyles = makeStyles(theme=>({
    Middle:{
        flex:6,
    },
   
}))
export default function Middle() {
    const classes = useStyles();
    const dispatch = useDispatch();
 useEffect(() => {
     dispatch(createPost());
 }, [])
 
 const {postInfo,pending,error} = useSelector(state => state.post);
    return (
        <div className={classes.Middle}>
        {postInfo?.map(data=>{
            return (<Post info={data} key={data.id}/>)
        })}
        </div>
    )
}
