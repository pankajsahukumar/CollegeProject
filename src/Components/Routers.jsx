import React from 'react'
import Home from "../pages/Home";
import Middle from "./Middle";
import Leftside from "./Leftside";
import Profile from "./Profile";
import { Hidden, makeStyles } from '@material-ui/core';
import { Redirect, Route } from 'react-router';
import Rightbar from './Rightbar';
import Form from './Register';
import LoginForm from './Login';
const useStyles =makeStyles(theme=>({
    bt:{
      display:"flex",
      position:"relative",
    }
  }));
export default function Routers() {
    const classes = useStyles();
    
    return (
        <>
         <Redirect exact from="/" to="/home"/>
        <Route path="/profile">
          <div className={classes.bt}>
           <Leftside/>
            <Middle/>
            <Rightbar/>
            </div>
        </Route>
        <Route path="/about">
          <div className={classes.bt}>
            
         <Hidden smDown>
          <Leftside/>
          </Hidden>
          <Profile/>
          </div>          
        </Route>
        <Route path="/register" >
          <Form/>
        </Route>
        <Route path="/login">
          <LoginForm/>
        </Route>
        <Route path="/home" render={props =><Home {...props}/>}/>    
        </>
    )
}
