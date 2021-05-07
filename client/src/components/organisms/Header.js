import React from "react";
import { BiSearch } from "react-icons/bi";

const Header = (props) => {
  const {
    search_input,
    search_language,
    searchInputHandler,
    selectLanguageHandler,
    searchSubmitHandler,
  } = props.search_context;

  return (
    <header className="banner">
      <div className="banner__box">
        <div className="banner__content">
          <h1 className="h1">
            The coding dictionary for developers
            <br />
            <span className="banner__h1--span">And for everyone else :)</span>
          </h1>
        </div>

        <form className="search_bar" onSubmit={searchSubmitHandler}>
          <select
            className="search_bar__select"
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
            className="search_bar__input"
            name="name"
            onChange={searchInputHandler}
            value={search_input}
          />
          <button className="search_bar__button">
            <BiSearch className="search_bar__icon" />
          </button>
        </form>
      </div>
      <div className="banner__bottom-bar">
        <button className="banner__button" type="submit">
          Search now
        </button>
      </div>
      <div className="banner__background"></div>
    </header>
  );
};

export default Header;
