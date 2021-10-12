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
import { useSelector } from 'react-redux';
import CreatePost from './CreatePost';
import Profileupdate from './Profileupdate';
const useStyles =makeStyles(theme=>({
    bt:{
      display:"flex",
      position:"relative",
      gap:theme.spacing(4),
    }
  }));
export default function Routers() {
    const classes = useStyles();
    const islogin = useSelector(state => state.user2.islogin)
    return (
        <>
        <Route path="/home">
          {islogin?<div className={classes.bt}>

           <Leftside/>
            <Middle/>
            <Rightbar/>
          </div>:<Redirect to='/login'/>}
        </Route> 
        <Route path="/profile">
          {islogin?<div className={classes.bt}>
         <Hidden smDown>
          <Leftside/>
          </Hidden>
          <Profile/>
          <Rightbar />
          </div>
          :<Redirect to='/login'/>}          
        </Route>

        {islogin?
        <>
        <Route path='/messanger'>
          <Home/>
        </Route>
        </>
  :<Redirect to='/register'/>}
  
  {islogin?
        <>
        <Route path='/createpost'>
          <CreatePost/>
        </Route>
        </>
  :<Redirect to='/register'/>}
  {islogin?
        <>
        <Route path='/editprofile'>
          <Profileupdate/>
        </Route>
        </>
  :<Redirect to='/register'/>}
          <Route path='/register'>
          <Form/>
          </Route>
          <Route path='/login'>
            <LoginForm/>
          </Route>
          <Redirect to='/home'/>
        </>
    )
}
