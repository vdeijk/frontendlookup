import React from "react";
import styled from "styled-components";
import { useResourcesContext } from "../context/resources_context";
import Loading from "../components/organisms/Loading";

const Resources = () => {
  const { resources_results, resources_isLoading } = useResourcesContext();
  const { javascript, react } = resources_results;

  if (resources_isLoading) return <Loading />;

  const javascriptResources = javascript.map((el) => {
    return <p className="p wordpage__p">{el}</p>;
  });
  const reactResources = react.map((el) => {
    return (
      <p className="p wordpage__p" key={el}>
        {el}
      </p>
    );
  });

  return (
    <Wrapper className="wordpage">
      <div className="wordpage__main">
        <div className="wordpage__box--heading">
          <h3 className="h3 wordpage__h3">Resources</h3>
          <h5 className="h5 wordpage__h5">All the terms in our database</h5>
        </div>
        <div className="wordpage__box">
          <h6 className="h6 wordpage__h6">React</h6>
          {reactResources}
        </div>
        <div className="wordpage__box margin-bottom__medium">
          <h6 className="h6 wordpage__h6">Javascript</h6>
          {javascriptResources}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 16rem)) minmax(
      6rem,
      1fr
    );
}

.wordpage {
&__main {
  grid-column: 2/7;
}

    &__h3 { 
      margin-top: 3rem;
      color: var(--color-black);
      font-weight: 600;
      }

    &__h5 {
      color: var(--color-secondary);
    }
    &__h6 {
      color: var(--color-black);
      margin-bottom: 1.5rem;
    }

    &__box {
      margin-top: 2rem;
      border: solid 0.1rem var(--color-grey-dark);
      border-radius: 0.5rem;
      padding: 2rem;
      width: 100%;
    }

    &__box--heading {
      margin-bottom: 3rem;
    }

    &__box--btn {
      margin-top: 2rem;
      position: relative;
    }

    &__btn {
      width: 70%;
      text-decoration: none;
      height: 5.5rem;
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

    &__btn-icon {
      position: absolute;
      color: var(--color-white);
      font-size: 3rem;
      top: 50%;
      left: 3rem;
      transform: translateY(-50%);
    }

  }

  .link-box {
    margin-top: 2rem;
    margin-bottom: 3rem;
    border: solid 0.1rem var(--color-grey-dark);
    border-radius: 0.5rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 0.5rem;

    &__icon-wrapper {
      display: grid;
      align-items: center;
    }

    &__text {
      display: inline-block;
      font-size: var(--default-font-size);
    }

    &__link {
      display: inline-block;
      font-size: var(--default-font-size);
      color: var(--color-primary-light);
      &:hover {
        color: var(--color-secondary);
        cursor: pointer;
      }
    }

    &__icon {
      font-size: 2.4rem;
      color: var(--color-primary-light);
      &:hover {
        color: var(--color-secondary);
        cursor: pointer;
      }
    }
  }

  .section-side {
    grid-row: 3 / 4;
    grid-column: 8 / 10;
    margin-top: 3rem;
    //border: solid 0.1rem var(--color-grey-dark);
    border-radius: 0.5rem;
    height: 100%;
  }
`;

export default Resources;
