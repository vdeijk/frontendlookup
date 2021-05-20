import React from "react";
import styled from "styled-components";

const ConceptOrigin = (props) => {
  return (
    <Wrapper className="origin">
      <p>{props.etymology}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: all 0.3s;
  border: none;
  padding: 2rem;
  background-color: rgba(101, 146, 205, 0.2);
  width: 70%;
`;

export default ConceptOrigin;
