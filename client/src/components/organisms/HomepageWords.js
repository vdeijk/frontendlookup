import React from "react";
import computer from "../../assets/computer.jpg";
import { BiBook, BiCheckCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ReusableAzureButton from "../atoms/ReusableAzureButton";
import ReusableBlueButton from "../atoms/ReusableBlueButton";
import Loading from "./Loading";

const HomepageWords = (props) => {
  const { homepage_isLoading } = props.search_context;
  const { wordoftheday, recentwords } = props.search_context.homepage_data;

  if (homepage_isLoading) return <Loading />;

  return (
    <Wrapper>
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
          <div className="new-words__word-container">
            <BiCheckCircle className="new-words__icon" />
            <p className="new-words__p">{recentwords.addedTerms[2].name}</p>
          </div>
          <NavLink to="resources">
            <ReusableBlueButton
              text="View full list"
              utilityClasses={"margin-top__medium"}
            />
          </NavLink>
        </div>
        <img src={computer} className="new-words__image" alt="computer" />
      </div>

      <div className="word_of_the_day">
        <BiBook className="word_of_the_day__icon" />
        <h3 className="h3 word_of_the_day__h3--top">Word of the week</h3>
        <h3 className="h3 word_of_the_day__h3">{wordoftheday.name}</h3>
        <h5 className="h5 word_of_the_day__h5">{wordoftheday.type} Concept</h5>
        <NavLink to="wordpage/wordoftheday">
          <ReusableAzureButton
            text={"Learn more"}
            utilityClasses={"margin-top__medium"}
          />
        </NavLink>
        <p className="word_of_the_day__p-bottom">
          Frontend Lookup Word Of The Week
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-row: 7 / 8;
  grid-column: 2 / 10;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 3rem;
  margin-top: 6rem;
}

.new-words {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3rem;

  &__word-container {
    display: grid;
    grid-template-columns: min-content max-content;
    align-items: center;
    width: 100%;
  }

  &__h3 {
    color: var(--color-black);
    margin-bottom: 1rem;
  }

  &__h5 {
    color: var(--color-black);
    font-weight: 100;
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  &__p {
    font-size: 1.6rem;
    display: inline-block;
  }

  &__image {
    width: 100%;
    align-self: center;
  }

  &__icon {
    display: inline-block;
    margin-right: 1rem;
    font-size: 2.4rem;
    color: var(--color-primary-light);
  }

  &__btn {
    margin-top: 2rem;
    width: 60%;
    padding: 1.2rem;
    background-color: var(--color-primary-light);
    font-size: 1.5rem;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    transition: all 0.3s;
    &:hover {
      background-color: var(--color-secondary);
      cursor: pointer;
    }
  }
}

.word_of_the_day {
  height: min-content;
  background-color: var(--color-word-of-the-day-rgba);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: var(--color-tertiary-light);
    font-size: 2.8rem;
  }

  &__h3 {
    margin-top: 4rem;

    &--top {
      font-weight: 100;
    }
  }

  &__h5 {
    font-style: italic;
    font-weight: 100;
  }

  &__p {
    font-size: 1.6rem;
    display: inline-block;
    color: var(--color-white);
  }

  &__p-bottom {
    margin-top: 1.5rem;
    font-size: 1.4rem;
    font-style: italic;
    color: var(--color-white);
  }

  &__btn {
    text-align: center;
    margin-top: 8rem;
    text-decoration: none;
    width: 66%;
    padding: 1.2rem;
    background-color: var(--color-tertiary-light);
    font-size: 1.5rem;
    color: var(--color-black);
    border: none;
    border-radius: 0.3rem;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-secondary);
      cursor: pointer;
    }
  }
}
`;

export default HomepageWords;
