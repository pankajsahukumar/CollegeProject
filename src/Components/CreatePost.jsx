import { makeStyles } from '@material-ui/core';
import React from 'react'
import Leftside from './Leftside';
import Middle from './Middle';
import Rightbar from './Rightbar';
const useStyles =makeStyles(theme=>({
    bt:{
      display:"flex",
      position:"relative",
      gap:theme.spacing(4),
    }
  }));
export default function CreatePost() {
    const classes = useStyles();
    return (
        <div className={classes.bt}>
           <Leftside/>
            <Middle show={true}/>
            <Rightbar/>
        </div>
    )
}
