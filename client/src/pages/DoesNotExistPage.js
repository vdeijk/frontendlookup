import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <h1 className="h1 error-page__h1">No results</h1>
      <h3 className="h4 error-page__h4">
        Sorry, but there were no search matches
      </h3>
      <Link to="/" className="error-page__btn">
        back home
      </Link>
    </section>
  );
};

export default ErrorPage;
