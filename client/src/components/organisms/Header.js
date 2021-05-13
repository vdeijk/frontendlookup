import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const {
    search_input,
    search_trigger,
    search_language,
    searchInputHandler,
    selectLanguageHandler,
    searchScrollHandler,
    searchTriggerHandler,
  } = props.search_context;

  const history = useHistory();

  useEffect(() => {
    if (search_trigger) history.push("/wordpage/search");
  }, [search_trigger]);

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

        <form className="search_bar">
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
          <button className="search_bar__button" onClick={searchTriggerHandler}>
            <BiSearch className="search_bar__icon" />
          </button>
        </form>
      </div>
      <div className="banner__bottom-bar">
        <button
          className="banner__button"
          type="submit"
          onClick={searchScrollHandler}
        >
          Search now
        </button>
      </div>
      <div className="banner__background"></div>
    </header>
  );
};

export default Header;
