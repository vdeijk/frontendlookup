import React from "react";
import computer from "../../assets/computer.jpg";
import { BiBook } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";

const Words = () => {
  return (
    <section className="words">
      <div className="new-words">
        <div className="new-words__left">
          <h3 className="h3 new-words__h3">Recently Added words</h3>
          <h5 className="h5 new-words__h5">
            New words are constantly being added to the dictionary
          </h5>
          <p className="new-words__p">
            This app was started in April 2021. 0 terms are currently added. Of
            course, this number is continuously increasing. Below are some terms
            that were recently added:
          </p>

          <div className="new-words__word-container margin-top__small ">
            <BiCheckCircle className="new-words__icon" />
            <p className="new-words__p">State</p>
          </div>
          <div className="new-words__word-container">
            <BiCheckCircle className="new-words__icon" />
            <p className="new-words__p">Redux</p>
          </div>
          <div className="new-words__word-container margin-bottom__small">
            <BiCheckCircle className="new-words__icon" />
            <p className="new-words__p">Hooks</p>
          </div>
          <button className="new-words__btn">View full list</button>
        </div>
        <img src={computer} className="new-words__image" />
      </div>

      <div className="word_of_the_day">
        <BiBook className="word_of_the_day__icon" />
        <h3 className="h3 word_of_the_day__h3--top">Word of the day</h3>
        <h3 className="h3 word_of_the_day__h3">Array</h3>
        <h5 className="h5 word_of_the_day__h5">Javascript Concept</h5>
        <button className="word_of_the_day__btn">Learn more</button>
        <p className="word_of_the_day__p-bottom">
          Frontend Lookup Word Of The Day
        </p>
      </div>
    </section>
  );
};

export default Words;
