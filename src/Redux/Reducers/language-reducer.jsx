const initialState = {
  language: "ru",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-LANGUAGE": {
      return {
        ...state,
        language: action.language,
      };
    }

    default:
      return state;
  }
};

export const setLanguageAC = (language) => ({
  type: "SET-LANGUAGE",
  language,
});
