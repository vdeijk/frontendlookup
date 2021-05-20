import React from "react";
import styled from "styled-components";

const ReusableYellowButton = (props) => {
  return (
    <Wrapper className="support">
      <button className={`btn ${props.utilityClasses}`}>{props.text}</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
.btn {
    width: 16rem;
    padding: 1.2rem;
    background: #f0db4f;
    font-size: 1.4rem;
    color: var(--color-black);
    border: none;
    border-radius: 0.3rem;
    transition: all 0.3s;
    &:hover {
      background-color: var(--color-secondary);
      cursor: pointer;
    }
`;

export default ReusableYellowButton;
