import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="main_nav">
      <div>
        <img src={logo} className="main_nav__logo" />
      </div>
      <ul className="main_nav__ul">
        <li className="main_nav__li">Words</li>
        <li className="main_nav__li">Dictionaries</li>
        <li className="main_nav__li">Resources</li>
        <li className="main_nav__li">
          <BiLogInCircle /> Login
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
