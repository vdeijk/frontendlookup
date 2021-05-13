import React from "react";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react2.svg";

const Languages = (props) => {
  const { clickLanguageHandler } = props.search_context;

  return (
    <section className="support">
      <h2 className="h2 support__h2">Supported languages</h2>
      <div className="support__container">
        <div className="support__card">
          <img src={javascript} className="support__image" />
          <div className="support__content">
            <h4 className="h4 support__h4">Javascript</h4>
            <button
              className="support__btn"
              value="JavaScript"
              onClick={clickLanguageHandler}
            >
              Search now
            </button>
          </div>
        </div>

        <div className="support__card">
          <img src={react} className="support__image" />
          <div className="support__content">
            <h4 className="h4 support__h4">React</h4>
            <button
              className="support__btn"
              value="React"
              onClick={clickLanguageHandler}
            >
              Search now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
