import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/resources_reducer";
import { config } from "../utils/Constants";

const initialState = {
  resources_isLoading: true,
  resources_totalTerms: 0,
  resources_results: {},
  resources_routes: config.urls,
};

const ResourcesContext = React.createContext();

export const ResourcesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resourcesHandler = (e) => {
    dispatch({ type: "FETCH_RESOURCES_BEGIN" });
    if (e) e.preventDefault();
  };

  const fetchData = async () => {
    try {
      const urls = Object.values(state.resources_routes);

      const fetchedData = await Promise.all(
        urls.map(async (el) => {
          const response = await fetch(el);
          const { data } = await response.json();
          return data;
        })
      );

      const result = fetchedData.map((el) => {
        let innerResult = el.map((innerEl) => {
          return innerEl.name;
        });
        return innerResult;
      });

      dispatch({
        type: "FETCH_RESOURCES_SUCCESS",
        payload: result,
      });
    } catch {
      console.log("error");
      dispatch({ type: "FETCH_RESOURCES_ERROR" });
    }
  };

  useEffect(() => {
    if (state.resources_isLoading) fetchData();
  }, [state.resources_isLoading]);

  return (
    <ResourcesContext.Provider
      value={{
        ...state,
        resourcesHandler,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};

export const useResourcesContext = () => {
  return useContext(ResourcesContext);
};
