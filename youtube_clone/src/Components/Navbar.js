import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <NavLink to="/">Upload</NavLink>{" "}
      <NavLink to="/viewlist">ViewList</NavLink>
      <NavLink to="/play">PlayVideo</NavLink>
    </div>
  );
}

// const Navbar = () => {
//   return <NavLink to="/">Upload</NavLink>;
// };
export default Navbar;
