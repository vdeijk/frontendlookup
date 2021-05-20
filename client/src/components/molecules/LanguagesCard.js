import React from "react";

const Languages = (props) => {
  return (
    <div className="support__card">
      <img src={props.image} className="support__image" alt="JavaScript" />
      <div className="support__content">
        <h4 className="h4 support__h4">{props.title}</h4>
        <button
          className="support__btn"
          value="JavaScript"
          onClick={props.clickLanguageHandler}
        >
          Search now
        </button>
      </div>
    </div>
  );
};

export default Languages;
