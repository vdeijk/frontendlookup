const search_reducer = (state, action) => {
  switch (action.type) {
    //Search related actions
    case "HANDLE_SEARCH_LANGUAGE":
      return {
        ...state,
        search_language: action.payload.name,
        search_route: action.payload.url,
      };
    case "HANDLE_SEARCH_INPUT":
      return { ...state, search_input: action.payload };
    case "FETCH_SEARCHRESULT_BEGIN":
      return { ...state, search_isLoading: true };
    case "FETCH_SEARCHRESULT_SUCCESS":
      return {
        ...state,
        search_result: action.payload.search_result,
        search_isLoading: false,
      };
    case "FETCH_SEARCHRESULT_ERROR":
      return { ...state, search_isLoading: false };
    //Homepage related actions
    case "CLICK_WOROFWEEK":
      return { ...state, wordofweek_isLoading: true };
    case "FETCH_HOMEPAGEDATA_BEGIN":
      return { ...state, homepage_isLoading: true };
    case "FETCH_HOMEPAGEDATA_SUCCESS":
      return {
        ...state,
        homepage_data: action.payload,
        homepage_isLoading: false,
      };
    case "FETCH_HOMEPAGEDATA_ERROR":
      return { ...state, homepage_isLoading: false };
    default:
      throw new Error(`No Matching action type`);
  }
};

export default search_reducer;
