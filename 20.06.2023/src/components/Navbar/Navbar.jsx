import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Navbar = ({ sumofValues }) => {
  console.log({ sumofValues });
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">all Countries</NavLink>
        </li>
        <li>
          <NavLink to="/search">search</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
