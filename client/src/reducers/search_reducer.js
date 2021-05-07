const search_reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_LANGUAGE_SELECTION":
      return { ...state, search_language: action.payload };
    case "HANDLE_SEARCH_INPUT":
      return { ...state, search_input: action.payload };
    case "HANDLE__SEARCH_SUBMIT":
      return { ...state, search: true };
    case "GET_CONCEPT_SUCCESS":
      return { ...state, search_result: action.payload };
    case "GET_CONCEPT_ERROR":
      return { ...state };

    default:
      throw new Error(`No Matching action type`);
  }
};

export default search_reducer;
