import React from "react";
import Navbar from "../components/organisms/Navbar";
import Header from "../components/organisms/Header";
import Languages from "../components/organisms/Languages";
import Footer from "../components/organisms/Footer";
import Words from "../components/organisms/Words";
import { useSearchContext } from "../context/search_context";

const Homepage = () => {
  const search_context = useSearchContext();
  return (
    <div className="page">
      <Navbar />
      <Header search_context={search_context} />
      <Languages />
      <Words />
      <Footer />
    </div>
  );
};

export default Homepage;
