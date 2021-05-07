import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/search_reducer";

const initialState = {
  search_input: "",
  search_language: "JS",
  search: false,
  search_result: {
    name: "",
    type: "",
    computingDefinition: "",
    generalDefinition: "",
    origin: "",
  },
};

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchInputHandler = (e) => {
    dispatch({ type: "HANDLE_SEARCH_INPUT", payload: e.target.value });
  };

  const selectLanguageHandler = (e) => {
    dispatch({ type: "HANDLE_LANGUAGE_SELECTION", payload: e.target.value });
  };

  const searchSubmitHandler = (e) => {
    dispatch({ type: "HANDLE__SEARCH_SUBMIT" });
    e.preventDefault();
  };

  const url = "./data/javascriptData";

  const testUrl = "http://localhost:8000/api/v1/concepts/react";

  const fetchWord = async () => {
    try {
      const response = await fetch(testUrl);
      const search_result = response.data;
      console.log(response);
      console.log(search_result);
      dispatch({ type: "GET_CONCEPT_SUCCESS", payload: search_result });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_CONCEPT_ERROR" });
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <SearchContext.Provider
      value={{
        ...state,
        searchInputHandler,
        selectLanguageHandler,
        searchSubmitHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
