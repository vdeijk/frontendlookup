import React from "react";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react2.svg";
import LanguagesCard from "../molecules/LanguagesCard";
import styled from "styled-components";

const HomepageLanguages = (props) => {
  const { clickLanguageHandler } = props.search_context;

  return (
    <Wrapper className="support">
      <h2 className="h2 support__h2">Supported languages</h2>
      <div className="support__container">
        <LanguagesCard
          image={javascript}
          title={"JavaScript"}
          clickLanguageHandler={clickLanguageHandler}
        />
        <LanguagesCard
          image={react}
          title={"React"}
          clickLanguageHandler={clickLanguageHandler}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  grid-row: 5 / 6;
  grid-column: 4 / 8;

  .support__h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .support__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 6rem;
  }

  .support__card {
    border-radius: 0.3rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-row-gap: 2rem;
  }

  .support__image {
    grid-column: 1/-1;
    border-radius: 0.3rem 0.3rem 0 0;
    width: 100%;
  }

  .support__content {
    display: flex;
    align-items: flex-end;
  }

  .support__h4 {
    width: 100%;
    height: 6rem;
    font-size: 2.2rem;
    color: var(--color-black);
    text-align: center;
  }

  .support__btn {
    width: 100%;
    height: 6rem;
    background-color: var(--color-primary-light);
    font-size: 1.7rem;
    color: var(--color-white);
    border: none;
    border-radius: 0 0 0.3rem 0.3rem;
    transition: all 0.3s;
    &:hover {
      background-color: var(--color-secondary);
      cursor: pointer;
    }
  }
}
`;

export default HomepageLanguages;
