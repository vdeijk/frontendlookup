import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderSearchBar = (props) => {
  const {
    search_input,
    search_language,
    searchInputHandler,
    selectLanguageHandler,
    searchHandler,
  } = props.props.search_context;

  return (
    <Wrapper className="searchbar">
      <select
        className="searchbar__select"
        name="languages"
        id="languages"
        value={search_language}
        onChange={selectLanguageHandler}
      >
        <option className="searchbar__options" value="React">
          React
        </option>
        <option className="searchbar__options" value="JavaScript">
          JavaScript
        </option>
      </select>
      <input
        type="text"
        className="searchbar__input"
        name="name"
        onChange={searchInputHandler}
        value={search_input}
      />

      <NavLink to="wordpage/search" className="searchbar__link">
        <button onClick={searchHandler} className="searchbar__button">
          <BiSearch className="searchbar__icon" />
        </button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.form`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0rem auto;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: 5.5rem;
    width: 40%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .searchbar {
  &__select {
      grid-column: 1 / 3;
      color: var(--color-black);
      border: none;
      border-bottom: 0.5rem solid #f0db4f;
      outline: none;
      font-size:  var(--default-font-size);
      padding-left: 1.6rem;
      border-radius: 100rem 0 0 100rem;
      background: var(--color-white);
    }

    &__options {
      margin-top: 3rem;
    }

    &__input {
      margin-left: 1.5rem;
      grid-column: 3 / -1;
      grid-row: 1 / 2;
      padding: 1.6rem;
      color: var(--color-black);
      border: none;
      border-bottom: 0.5rem solid #f0db4f;
      border-radius: 0 100rem 100rem 0;
      background: var(--color-white);
      outline: none;
      font-size: var(--default-font-size);
      transition: all 0.3s;

      &:focus {
        border-bottom: 0.5rem solid var(--color-secondary);
      }
    }

    &__link {
      grid-column: 8 / -1;
      grid-row: 1 / 2;
      align-self: center;
    }

    &__button {
      background-color: transparent;
      cursor: pointer;
      border: none;
      font-size: 3.6rem;
      color: var(--color-black);
      transition: all 0.3s;
      &:hover {
        color: var(--color-secondary);
      }
    }
  }
}
`;

export default HeaderSearchBar;
