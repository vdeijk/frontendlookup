import React from "react";
import { NavLink } from "react-router-dom";

const WordpageNoResult = () => {
  return (
    <section className="wordpage">
      <h2 className="h2 wordpage__h2">Sorry</h2>
      <h4 className="h4 wordpage__h4">
        The term you searched for does not exist in our database
      </h4>

      <div className="wordpage__btn-box">
        <NavLink to="/" className="wordpage__btn">
          Back home
        </NavLink>
      </div>
    </section>
  );
};

export default WordpageNoResult;
