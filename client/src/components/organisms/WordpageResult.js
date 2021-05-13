import React from "react";
import { BiSearch } from "react-icons/bi";

const WordpageResult = (props) => {
  const { wordData } = props;
  return (
    <section className="wordpage">
      <h2 className="h2 wordpage__h2">{wordData.name}</h2>
      <h4 className="h4 wordpage__h4">{wordData.type}</h4>
      <div className="wordpage__box">
        <h6 className="h6 wordpage__h6">Computing definition</h6>
        <p className="p wordpage__p">{wordData.definition}</p>
      </div>

      <div className="wordpage__box">
        <h6 className="h6 wordpage__h6">General definition(s)</h6>
        <p className="p wordpage__p">{wordData.definition}</p>
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
  );
};
export default WordpageResult;
