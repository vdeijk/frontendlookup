import React, { useEffect } from "react";
import Navbar from "../components/organisms/Navbar";
import { BiSearch } from "react-icons/bi";
import { useSearchContext } from "../context/search_context";

const Wordpage = () => {
  const search_context = useSearchContext();
  return (
    <div className="page">
      <Navbar />
      <section className="searchbar">
        <form className="searchbar__form">
          <select className="searchbar__select" name="languages" id="languages">
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <input type="text" className="searchbar__input" />
          <button className="searchbar__button">
            <BiSearch className="searchbar__icon" />
          </button>
        </form>
      </section>

      <section className="wordpage">
        <h2 className="h2 wordpage__h2">{search_context.name}</h2>
        <h4 className="h4 wordpage__h4">{search_context.type}</h4>
        <div className="wordpage__box">
          <h6 className="h6 wordpage__h6">Computing definition</h6>
          <p className="p wordpage__p">{search_context.computingDefinition}</p>
        </div>

        <div className="wordpage__box">
          <h6 className="h6 wordpage__h6">General definition(s)</h6>
          <p className="p wordpage__p">{search_context.generalDefinition}</p>
        </div>

        <div className="wordpage__btn-box">
          <button className="wordpage__btn">Concept Origin</button>
        </div>

        <div className="link-box">
          <div className="link-box__wrapper">
            <BiSearch className="link-box__icon" />
          </div>
          <div>
            <p className="link-box__text">See</p>&nbsp;
            <a className="link-box__link">word</a>&nbsp;
            <p className="link-box__text">at</p>&nbsp;
            <a className="link-box__link">w3schools.com</a>
          </div>

          <div className="link-box__icon-wrapper">
            <BiSearch className="link-box__icon" />
          </div>
          <div>
            <p className="link-box__text">See</p>&nbsp;
            <a className="link-box__link">word</a>&nbsp;
            <p className="link-box__text">at</p>&nbsp;
            <a className="link-box__link">oxfordlearnersdictionaries.com</a>
          </div>
        </div>
      </section>

      <section className="section-side"></section>
    </div>
  );
};

export default Wordpage;
