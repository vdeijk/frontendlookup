import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/word_reducer";

const initialState = {
  mounted: true,
  routes: {
    wordoftheday: "http://localhost:8000/api/v1/words/wordoftheday",
    recentwords: "http://localhost:8000/api/v1/words/recentwords",
  },
  data: {
    wordoftheday: {
      id: 0,
      name: "",
      type: "",
      definition: "",
      etymology: "",
    },
    recentwords: {
      totalTerms: 0,
      addedTerms: [
        { id: 0, name: "", type: "", definition: "", etymology: "" },
        {
          id: 0,
          name: "",
          type: "",
          definition: "",
          etymology: "",
        },
        {
          id: 0,
          name: "",
          type: "",
          definition: "",
          etymology: "",
        },
      ],
    },
  },
};

const WordContext = React.createContext();

export const WordProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const wordOfTheWeekHandler = (e) => {
    dispatch({ type: "HANDLE__WORDOFTHEWEEK" });
    e.preventDefault();
  };

  const fetchWordData = async () => {
    let wordData;
    try {
      let fetchedData = [];
      const urls = Object.values(state.routes);

      for (let i = 0; i < urls.length; i++) {
        const response = await fetch(urls[i]);
        const { data } = await response.json();
        fetchedData.push(data);
      }

      wordData = {
        wordoftheday: fetchedData[0],
        recentwords: fetchedData[1],
      };

      dispatch({ type: "HANDLE_WORD_DATA", payload: wordData });
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchWordData();
  }, [state.mounted]);

  return (
    <WordContext.Provider
      value={{
        ...state,
        wordOfTheWeekHandler,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWordContext = () => {
  return useContext(WordContext);
};
