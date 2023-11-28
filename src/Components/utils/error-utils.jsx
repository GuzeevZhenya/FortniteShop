import { setErrorAC, setStatusAC } from "../../Redux/Reducers/app-reducer";

export const handleServerAppError = (data, dispatch) => {
  if (data.messages.length) {
    dispatch(setErrorAC(data.messages[0]));
  } else {
    dispatch(setErrorAC("Some error occurred"));
  }
  dispatch(setStatusAC("failed"));
};

export const handleServerNetworkError = (error, dispatch) => {
  dispatch(setErrorAC(error.message ? error.message : "Some error occurred"));
  dispatch(setStatusAC("failed"));
};
