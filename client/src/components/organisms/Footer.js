import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper className="footer">
      <p className="footer__p">&copy; Rick van der Eijk. All rights reserved</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-row: 8 / 9;
  grid-column: 2 / 10;
  margin-top: 6rem;
  background-color: var(--color-black);
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem 0.5rem 0 0;

  .footer__p {
    color: var(--color-white);
    font-size: 1.7rem;
    text-align: center;
  }
}`;

export default Footer;
