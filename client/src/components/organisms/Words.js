import React from "react";
import computer from "../../assets/computer.jpg";
import { BiBook } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Words = (props) => {
  const { wordoftheday, recentwords } = props.word_context.data;

  return (
    <section className="words">
      <div className="new-words">
        <div className="new-words__left">
          <h3 className="h3 new-words__h3">Recently Added words</h3>
          <h5 className="h5 new-words__h5">
            New words are constantly being added to the dictionary
          </h5>
          <p className="new-words__p">
            This app was launched in April 2021. {recentwords.totalTerms} search
            terms have been added so far. Of course, this number is continuously
            increasing. Below are some terms that were recently added:
          </p>

          <div className="new-words__word-container margin-top__small ">
            <BiCheckCircle className="new-words__icon" />
            <p className="new-words__p">{recentwords.addedTerms[0].name}</p>
          </div>
          <div className="new-words__word-container">
            <BiCheckCircle className="new-words__icon" />
            <p className="new-words__p">{recentwords.addedTerms[1].name}</p>
          </div>
          <div className="new-words__word-container margin-bottom__small">
            <BiCheckCircle className="new-words__icon" />
            <p className="new-words__p">{recentwords.addedTerms[2].name}</p>
          </div>
          <button className="new-words__btn">View full list</button>
        </div>
        <img src={computer} className="new-words__image" />
      </div>

      <div className="word_of_the_day">
        <BiBook className="word_of_the_day__icon" />
        <h3 className="h3 word_of_the_day__h3--top">Word of the week</h3>
        <h3 className="h3 word_of_the_day__h3">{wordoftheday.name}</h3>
        <h5 className="h5 word_of_the_day__h5">{wordoftheday.type} Concept</h5>
        <NavLink to="wordpage/wordoftheday" className="word_of_the_day__btn">
          Learn more
        </NavLink>
        <p className="word_of_the_day__p-bottom">
          Frontend Lookup Word Of The Week
        </p>
      </div>
    </section>
  );
};

export default Words;
