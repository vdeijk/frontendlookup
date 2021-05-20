import React from "react";
import styled from "styled-components";
import confusion from "../../assets/confusion.jpg";
import ReusableAzureButton from "../atoms/ReusableAzureButton";
import { BsFillQuestionOctagonFill } from "react-icons/bs";

const HomepageExplanation = (props) => {
  const { searchScrollHandler } = props.search_context;
  return (
    <Wrapper className="explanation">
      <h2 className="h2 explanation__h2">Is coding confusing?</h2>
      <h5 className="h5 explanation__h5">It doesn't have to be</h5>
      <div className="explanation__container">
        <div className="explanation__left">
          <img
            src={confusion}
            className="explanation__image"
            alt="JavaScript"
          />
        </div>
        <BsFillQuestionOctagonFill className="explanation__icon" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a enim
            sit amet est mollis congue id quis ex. Ut scelerisque pharetra
            egestas. In eu metus vel elit sollicitudin vestibulum. Aenean
            volutpat ornare tellus, sed fermentum ex feugiat mattis.
          </p>
          <ReusableAzureButton
            utilityClasses={"margin-top__medium"}
            text={"Begin understanding"}
            clicked={searchScrollHandler}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  grid-row: 4 / 5;
  grid-column: 4 / 8;

  .explanation__h2 {
    text-align: center;
  }

  .explanation__h5 {
    color: var(--color-black);
    text-align: center;
    margin-bottom: 3rem;
  }

  .explanation__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    position: relative;
    height: 30rem;
  }

  .explanation__left {
    position: relative;
    overflow: hidden;
  }

  .explanation__image {
    position: absolute;
    overflow: hidden;
    grid-column: 1/2;
    border-radius: 0.3rem 0.3rem 0 0;
    width: 100%;
    object-fit: cover;
    filter: brightness(85%);
  }

  .explanation__icon {
    position: absolute;
    top: 54%;
    left: -4%;
    transform: translate(-50%, -50%);
    font-size: 16rem;
    color: #f0db4f;
    transform: rotate(15deg);
  }
`;

export default HomepageExplanation;
