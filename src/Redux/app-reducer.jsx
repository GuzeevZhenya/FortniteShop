const initialState = {
  status: "",
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-ERROR": {
      return {
        ...state,
        error: action.error,
      };
    }
    case "SET-STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const setErrorAC = (error) => ({
  type: "SET-ERROR",
  error,
});

export const setStatusAC = (status) => ({
  type: "SET-STATUS",
  status,
});
