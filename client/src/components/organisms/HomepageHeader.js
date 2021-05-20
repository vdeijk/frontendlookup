import React from "react";
import styled from "styled-components";
import img from "../../assets/dictionary2.jpg";
import HeaderSearchBar from "../molecules/HeaderSearchBar";
import ReusableYellowButton from "../atoms/ReusableYellowButton";
import { NavLink } from "react-router-dom";

const HomepageHeader = (props) => {
  return (
    <Wrapper>
      <div className="banner">
        <h1 className="h1 banner__content">
          The coding dictionary for developers
          <br />
          <span className="banner__h1--span">And for everyone else :)</span>
        </h1>
        <HeaderSearchBar props={props} />

        <div className="banner__bottom-bar">
          <NavLink to="about">
            <ReusableYellowButton
              text={"Learn more"}
              backgroundColor={"var(--color-primary-light"}
            />
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  grid-column: 2 / 10;
  grid-row: 2 / 3;

  .banner {
    position: relative;
    grid-column: 2 / 10;
    grid-row: 2 / 3;
    height: 86vh;
    background-blend-mode: Soft-Light;
    background-image: url(${img});
    background-color: var(--color-primary-dark);
    background-size: cover;
    background-position: center 15%;

    &__content {
      position: absolute;
      top: 28%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: max-content;
      text-align: center;
      height: 10rem;
    }

    &__p {
      font-weight: 100;
      margin-left: 2rem;
      color: var(--color-white);
      font-size: 1.6rem;
    }

    &__button {
      width: 18rem;
      height: min-content;
      padding: 1.5rem 2rem;
      margin-right: 2rem;
      font-size: 1.4rem;
      background: #f0db4f;
      border: none;
      color: black;
      border-radius: 0.3rem;
      text-transform: uppercase;
      transition: all 0.3s;

      &:hover {
        background: #fff5b4;
        cursor: pointer;
      }
    }

    &__h1--span {
      font-size: 1.9rem;
      font-style: italic;
      white-space: pre-line;
    }

    &__image {
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__bottom-bar {
      position: absolute;
      bottom: 0%;
      padding: 0 2rem;
      background: black;
      width: 100%;
      height: 5.5rem;
      z-index: 1500;
      display: grid;
      justify-items: end;
      align-items: center;
    }
  }
`;

export default HomepageHeader;
