import React, { useContext, useReducer } from "react";
import reducer from "../reducers/wordpage_reducer";

const initialState = {
  displayOrigin: false,
};

const WordpageContext = React.createContext();

export const WordpageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const conceptOriginHandler = (e) => {
    dispatch({ type: "CLICK_CONCEPT_ORIGIN" });
    e.preventDefault();
  };

  return (
    <WordpageContext.Provider
      value={{
        ...state,
        conceptOriginHandler,
      }}
    >
      {children}
    </WordpageContext.Provider>
  );
};

export const useWordpageContext = () => {
  return useContext(WordpageContext);
};
