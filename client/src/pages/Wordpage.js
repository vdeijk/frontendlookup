import React, { useEffect } from "react";
import WordpageResult from "../components/organisms/WordpageResult";
import WordpageNoResult from "../components/organisms/WordpageNoResult";
import { useSearchContext } from "../context/search_context";
import { useWordContext } from "../context/word_context";
import { useParams } from "react-router-dom";

const Wordpage = () => {
  const searchContext = useSearchContext();
  const { search_result, search_trigger, searchTriggerHandler } = searchContext;
  const wordContext = useWordContext();
  const { data } = wordContext;
  const { id } = useParams();

  let wordData;
  if (id === "wordoftheday") wordData = data.wordoftheday;
  else wordData = search_result;

  let displayResult;
  if (wordData.name) displayResult = <WordpageResult wordData={wordData} />;
  else displayResult = <WordpageNoResult />;

  useEffect(() => {
    if (search_trigger) searchTriggerHandler();
  }, [search_trigger]);

  return (
    <div className="page">
      {displayResult}
      <section className="section-side"></section>
    </div>
  );
};

export default Wordpage;
