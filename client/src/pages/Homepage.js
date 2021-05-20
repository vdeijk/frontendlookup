import React from "react";
import {
  HomepageHeader,
  HomepageExplanation,
  HomepageLanguages,
  HomepageWords,
  Footer,
} from "../components/organisms/";
import { useSearchContext } from "../context/search_context";
import styled from "styled-components";

const Homepage = () => {
  const search_context = useSearchContext();
  return (
    <Wrapper className="page">
      <HomepageHeader search_context={search_context} />
      <HomepageExplanation search_context={search_context} />
      <HomepageLanguages search_context={search_context} />
      <HomepageWords search_context={search_context} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 16rem)) minmax(
      6rem,
      1fr
    );
  grid-template-rows: repeat(4, min-content);
}`;

export default Homepage;
