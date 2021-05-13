const search_reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_LANGUAGE_SELECTION":
      let url = {
        react: "http://localhost:8000/api/v1/concepts/react",
        javascript: "http://localhost:8000/api/v1/concepts/js",
      };
      switch (action.payload) {
        case "React":
          return {
            ...state,
            search_language: action.payload,
            search_route: url.react,
          };
        case "JavaScript":
          return {
            ...state,
            search_language: action.payload,
            search_route: url.javascript,
          };
        default:
          return;
      }
    case "HANDLE_SEARCH_INPUT":
      return { ...state, search_input: action.payload };
    case "HANDLE_SEARCH_TRIGGER":
      const search_trigger = !state.search_trigger;
      return { ...state, search_trigger: search_trigger };

    case "GET_CONCEPTS_SUCCESS":
      return {
        ...state,
        search_results: action.payload.data,
        search_result: action.payload.search_result,
        isLoading: false,
      };
    case "GET_CONCEPTS_ERROR":
      return { ...state, isLoading: false };

    default:
      throw new Error(`No Matching action type`);
  }
};

export default search_reducer;
