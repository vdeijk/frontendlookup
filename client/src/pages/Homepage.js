import React from "react";
import Header from "../components/organisms/Header";
import Languages from "../components/organisms/Languages";
import Footer from "../components/organisms/Footer";
import Words from "../components/organisms/Words";
import { useSearchContext } from "../context/search_context";
import { useWordContext } from "../context/word_context";

const Homepage = () => {
  const search_context = useSearchContext();
  const word_context = useWordContext();
  return (
    <div className="page">
      <Header search_context={search_context} />
      <Languages search_context={search_context} />
      <Words word_context={word_context} />
      <Footer />
    </div>
  );
};

export default Homepage;
