import React from "react";
import logo from "../../assets/logo2.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper className="main_nav">
      <div>
        <img src={logo} className="main_nav__logo" alt="logo" />
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
margin: 0rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  font-size: 1.7rem;
  align-items: center;
  justify-items: center;
}

.main_nav__logo {
    height: 5.5rem;
  }

  .main_nav__li {
    text-decoration: none;
    color: var(--color-primary-light);
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      color: var(--color-secondary);
    }
  }
}
`;

export default Navbar;
