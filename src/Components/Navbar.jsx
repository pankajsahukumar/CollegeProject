import React, { useState } from "react";
import {useSelector} from 'react-redux'
import { NavLink,useHistory } from "react-router-dom";
import "./Navbar.css";
import { Avatar, Toolbar,AppBar,Typography, Box, Modal, TextField, Button } from "@material-ui/core";
import { ClearRounded, DehazeRounded } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { LogOut } from "../redux2/apiCalls/userapi";
import { toast } from "react-toastify";
import { publicRequest } from "../redux2/requestMethods";

function NavBar() {
  const [open,setOpen]=useState(false);
  const [clicked, setClicked] = useState(false);
 const islogin = useSelector(state => state.user2.islogin);
 
 const state = useSelector(state => state.user2.currentUser)
 const history =useHistory();
 const dispatch=useDispatch();
  const handleClick = () => {
    setClicked(!clicked);
  };

  const hanglelogout=()=>{
  LogOut(dispatch);
  toast.success("Successfully Logout");
   history.push('/about');
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to='#' className="nav-logo">
            {/* <i className="fas fa-code"></i> */}
            {islogin?<Avatar onClick={(e)=>(history.push('/home'))}/>:<Typography 
            component="h1" variant='h6'>Pankaj</Typography>}
          </NavLink>

          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {islogin&&<>
            <li className="nav-item">
              <NavLink
                exact
                to="/createpost"
                activeClassName="active"
                className="nav-links"
                // onClick={()=>setOpen(!open)}
              >
                Create Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li></>}
            <li className="nav-item">
              {islogin?<NavLink
                exact
                to="/messanger"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Messanger
              </NavLink>:<NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>}
              
            </li>
            <li className="nav-item">
            {!islogin?<NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </NavLink>:<NavLink 
              exact
            to='/login'
          activeClassName="active"
        className="nav-links"
          onClick={hanglelogout}>Logout</NavLink>}
              
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
          {clicked?<ClearRounded className="fa fa-times"/>:<DehazeRounded className="fa fa-bars"/>}
      </div>
        </div>
        </nav>
        <Modal
        open={open}
        onClose={()=>{setOpen(!open)
        history.push('/home')}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      </Modal>
    </>
  );
}

export default NavBar;
