import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ResultPageNoResult = () => {
  return (
    <Wrapper className="no-result">
      <h1 className="h1 no-result__h1">Sorry</h1>
      <h3 className="h4 no-result__h4">
        The requested term does not exist within our database
      </h3>
      <Link to="/" className="no-result__btn">
        back home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .no-result {
    &__h1 {
      color: var(--color-black);
    }

    &__h4 {
      color: var(--color-black);
    }

    &__btn {
      margin-top: 3rem;
      padding: 1.2rem 4rem;
      text-decoration: none;
      border-radius: 0.5rem;
      background-color: var(--color-primary-light);
      font-size: 1.7rem;
      color: var(--color-white);
      border: none;
      transition: all 0.3s;
      &:hover {
        background-color: var(--color-secondary);
        cursor: pointer;
      }
    }
  }
`;

export default ResultPageNoResult;
