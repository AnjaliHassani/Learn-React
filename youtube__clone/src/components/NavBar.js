import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <NavLink to="/upload">Upload</NavLink>
      <NavLink to="/ViewList">ViewList</NavLink>
    </div>
  );
};
export default NavBar;
