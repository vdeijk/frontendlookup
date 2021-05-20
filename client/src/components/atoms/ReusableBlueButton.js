import React from "react";
import styled from "styled-components";

const ReusableBlueButton = (props) => {
  return (
    <Wrapper className="support">
      <button className={`btn ${props.utilityClasses}`} onClick={props.clicked}>
        {props.text}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
.btn {
    width: 20rem;
    padding: 1.4rem;
    background: var(--color-primary-light);
    font-size: 1.5rem;
    color: var(--color-white);
    border: none;
    border-radius: 0.3rem;
    transition: all 0.3s;
    &:hover {
      background-color: var(--color-secondary);
      cursor: pointer;
    }
`;

export default ReusableBlueButton;
