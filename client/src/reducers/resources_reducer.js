const search_reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RESOURCES_BEGIN":
      return { ...state, isLoading: true };
    case "FETCH_RESOURCES_SUCCESS":
      return {
        ...state,
        resources_results: {
          react: action.payload[0],
          javascript: action.payload[1],
        },
        resources_isLoading: false,
      };
    case "FETCH_RESOURCES_ERROR":
      return { ...state, isLoading: false };
    default:
      throw new Error(`No Matching action type`);
  }
};

export default search_reducer;
