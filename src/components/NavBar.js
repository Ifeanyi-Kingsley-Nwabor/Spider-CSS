import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" row">
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} className="nav_logo" alt="logo" />
            {"  "}
            <span>Spider CSS</span>
          </NavLink>
        </div>
        <div className="nav_links">
          <NavLink className="active" to="/">
            <i className="fa fa-fw fa-home"></i> Home
          </NavLink>
          <NavLink to="/about">
            <i className="fa fa-fw fa-user"></i> About
          </NavLink>
          <NavLink to="/contact">
            <i className="fa fa-fw fa-envelope"></i> Contact
          </NavLink>
          <NavLink to="tutorials">
            <i class="fa fa-fw fa-graduation-cap"></i> Tutorials
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
