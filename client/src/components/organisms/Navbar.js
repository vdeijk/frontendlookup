import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import logo from "../../assets/logo2.png";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main_nav">
      <div>
        <img src={logo} className="main_nav__logo" />
      </div>
      <NavLink to="/" className="main_nav__li">
        Home
      </NavLink>
      <NavLink to="/about" className="main_nav__li">
        About
      </NavLink>
      <NavLink to="/resources" className="main_nav__li">
        Resources
      </NavLink>
    </nav>
  );
};

export default Navbar;
