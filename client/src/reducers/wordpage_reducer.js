const word_reducer = (state, action) => {
  switch (action.type) {
    case "CLICK_CONCEPT_ORIGIN":
      const displayOrigin = !state.displayOrigin;
      return { ...state, displayOrigin };
    default:
      throw new Error(`No Matching action type`);
  }
};

export default word_reducer;
