import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper className="error-page">
      <h1 className="h1 error-page__h1">404</h1>
      <h3 className="h4 error-page__h4">
        Sorry, but the page you requested cannot be found
      </h3>
      <Link to="/" className="error-page__btn">
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

  .error-page__h1 {
    color: var(--color-black);
  }
  
  .error-page__h4 {
    color: var(--color-black);
  }

  .error-page__btn {
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
}`;

export default ErrorPage;
