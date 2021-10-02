import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Avatar, Toolbar,AppBar } from "@material-ui/core";
import { ClearRounded, DehazeRounded } from "@material-ui/icons";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const logo = "Cod{on}fest"
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to='#' className="nav-logo">
            {/* <i className="fas fa-code"></i> */}
            <Avatar/>
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
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Chat
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
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
          {clicked?<ClearRounded className="fa fa-times"/>:<DehazeRounded className="fa fa-bars"/>}
      </div>
        </div>
        </nav>
    </>
  );
}

export default NavBar;
