import React from "react";
import { BiSearch } from "react-icons/bi";
import { useSearchContext } from "../../context/search_context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Searchbar = () => {
  const {
    search_input,
    search_language,
    searchInputHandler,
    selectLanguageHandler,
    searchHandler,
  } = useSearchContext();

  return (
    <Wrapper className="searchbar__wrapper">
      <form className="searchbar__form">
        <select
          className="searchbar__select"
          name="languages"
          id="languages"
          value={search_language}
          onChange={selectLanguageHandler}
        >
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
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
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1.5rem 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: var(--color-word-of-the-day-rgba);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.searchbar {
&__form {
  width: 50rem;
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 5.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}


&__select {
  grid-column: 1 / 3;
  color: var(--color-black);
  border: none;
  border-bottom: 0.4rem solid #f0db4f;
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
  border-bottom: 0.4rem solid #f0db4f;
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
}`;

export default Searchbar;
