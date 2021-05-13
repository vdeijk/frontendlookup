const word_reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_WORD_DATA":
      return { ...state, data: action.payload };
    case "HANDLE__WORDOFTHEWEEK":
      return { ...state, isLoading: true };
    default:
      throw new Error(`No Matching action type`);
  }
};

export default word_reducer;
