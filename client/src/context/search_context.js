import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/search_reducer";
import { config } from "../utils/Constants";

const initialState = {
  search_isLoading: false,
  search_input: "",
  search_language: "React",
  search_route: config.urls.URL_REACT,
  search_result: {},
  homepage_isLoading: true,
  wordofweek_isLoading: false,
  homepage_routes: {
    wordoftheday: "http://localhost:8000/api/v1/words/wordoftheday",
    recentwords: "http://localhost:8000/api/v1/words/recentwords",
  },
  homepage_data: {
    wordoftheday: {},
    recentwords: {},
  },
};

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Search related fetching and handling

  const searchInputHandler = (e) => {
    dispatch({ type: "HANDLE_SEARCH_INPUT", payload: e.target.value });
  };

  const selectLanguageHandler = (e) => {
    let url;
    if (e.target.value === "React") {
      url = config.urls.URL_REACT;
    } else if (e.target.value === "JavaScript") {
      url = config.urls.URL_JAVASCRIPT;
    }

    dispatch({
      type: "HANDLE_SEARCH_LANGUAGE",
      payload: { name: e.target.value, url },
    });
  };

  const clickLanguageHandler = (e) => {
    searchScrollHandler();
    dispatch({ type: "HANDLE_SEARCH_LANGUAGE", payload: e.target.value });
  };

  const searchScrollHandler = (e) => {
    window.scrollTo(0, 0);
  };

  const searchHandler = async (e) => {
    dispatch({ type: "FETCH_SEARCHRESULT_BEGIN" });
    try {
      const response = await fetch(state.search_route);
      const { data } = await response.json();

      let [search_result] = data.filter((el) => {
        return el.name.toLowerCase() === state.search_input.toLowerCase();
      });

      dispatch({
        type: "FETCH_SEARCHRESULT_SUCCESS",
        payload: { search_result },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_SEARCHRESULT_ERROR" });
    }
  };

  //Homepage related fetching and handling

  const wordOfWeekHandler = () => {
    dispatch({ type: "CLICK_WOROFWEEK" });
  };

  const fetchHomepageData = async () => {
    dispatch({ type: "FETCH_HOMEPAGEDATA_BEGIN" });

    try {
      const urls = Object.values(state.homepage_routes);

      const fetchedData = await Promise.all(
        urls.map(async (el) => {
          const response = await fetch(el);
          const { data } = await response.json();
          return data;
        })
      );

      dispatch({
        type: "FETCH_HOMEPAGEDATA_SUCCESS",
        payload: {
          wordoftheday: fetchedData[0],
          recentwords: fetchedData[1],
        },
      });
    } catch {
      console.log("error");
      dispatch({ type: "FETCH_HOMEPAGEDATA_ERROR" });
    }
  };

  useEffect(() => {
    if (state.homepage_isLoading) fetchHomepageData();
  }, [state.homepage_isLoading]);

  return (
    <SearchContext.Provider
      value={{
        ...state,
        searchInputHandler,
        selectLanguageHandler,
        clickLanguageHandler,
        searchScrollHandler,
        searchHandler,
        wordOfWeekHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
