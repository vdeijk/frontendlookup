import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useSearchContext } from "../../context/search_context";

const Searchbar = () => {
  const {
    search_input,
    search_trigger,
    search_language,
    searchInputHandler,
    selectLanguageHandler,
    searchTriggerHandler,
  } = useSearchContext();

  const history = useHistory();

  useEffect(() => {
    if (search_trigger) history.push("/wordpage/search");
  }, [search_trigger]);

  return (
    <section className="searchbar__wrapper">
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
        <button className="searchbar__button" onClick={searchTriggerHandler}>
          <BiSearch className="searchbar__icon" />
        </button>
      </form>
    </section>
  );
};

export default Searchbar;
