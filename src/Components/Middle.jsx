import { makeStyles } from '@material-ui/core';
import React from 'react'
import Post from './Post';
const useStyles = makeStyles(theme=>({
    Middle:{
        flex:6,
    },
   
}))
export default function Middle() {
    const classes = useStyles();
    return (
        <div className={classes.Middle}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
