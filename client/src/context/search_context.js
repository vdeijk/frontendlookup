import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/search_reducer";

const initialState = {
  search_input: "",
  search_language: "React",
  search_trigger: false,
  total_terms: 0,
  search_results: {},
  search_result: {
    id: 15,
    name: "Strict mode",
    type: "React",
    definition: "Will follow",
    etymology: "Will follow",
  },
  search_route: "/api/v1/concepts/react",
};

//localhost://8000

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchInputHandler = (e) => {
    dispatch({ type: "HANDLE_SEARCH_INPUT", payload: e.target.value });
  };

  const selectLanguageHandler = (e) => {
    dispatch({ type: "HANDLE_LANGUAGE_SELECTION", payload: e.target.value });
  };

  const clickLanguageHandler = (e) => {
    searchScrollHandler();
    dispatch({ type: "HANDLE_LANGUAGE_SELECTION", payload: e.target.value });
  };

  const searchTriggerHandler = (e) => {
    dispatch({ type: "HANDLE_SEARCH_TRIGGER" });
    if (e) e.preventDefault();
  };

  const searchScrollHandler = (e) => {
    window.scrollTo(0, 0);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(state.search_route);
      const { data } = await response.json();

      let [search_result] = data.filter((el) => {
        return el.name.toLowerCase() === state.search_input.toLowerCase();
      });

      if (!search_result) {
        search_result = {
          id: 0,
          name: "",
          type: "",
          definition: "",
          etymology: "",
        };
      }

      dispatch({
        type: "GET_CONCEPTS_SUCCESS",
        payload: { data, search_result },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_CONCEPTS_ERROR" });
    }
  };

  useEffect(() => {
    fetchData(state.search_route);
  }, [state.search_trigger]);

  return (
    <SearchContext.Provider
      value={{
        ...state,
        searchInputHandler,
        selectLanguageHandler,
        clickLanguageHandler,
        searchScrollHandler,
        searchTriggerHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
