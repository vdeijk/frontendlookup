import React from "react";
import { ResultPageResult, ResultPageNoResult } from "../components/organisms";
import { useSearchContext } from "../context/search_context";
import { useParams } from "react-router-dom";
import Loading from "../components/organisms/Loading";

const ResultPage = () => {
  const searchContext = useSearchContext();
  const { search_isLoading, search_result, homepage_data } = searchContext;
  const { id } = useParams();

  if (search_isLoading) return <Loading />;

  let wordData;
  if (id === "wordoftheday") wordData = homepage_data.wordoftheday;
  else wordData = search_result;

  return (
    <>
      {wordData ? (
        <ResultPageResult wordData={wordData} />
      ) : (
        <ResultPageNoResult />
      )}
      <section className="section-side"></section>
    </>
  );
};

export default ResultPage;
